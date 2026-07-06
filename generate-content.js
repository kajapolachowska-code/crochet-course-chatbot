const fs = require("fs");
const path = require("path");

const INPUT = path.join(__dirname, "chatbot-predefined-content.csv");
const OUTPUT = path.join(__dirname, "content.js");

function parseCSV(text) {
    const rows = [];
    let row = [];
    let value = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {

        const char = text[i];
        const next = text[i + 1];

        if (char === '"') {

            if (insideQuotes && next === '"') {
                value += '"';
                i++;
            } else {
                insideQuotes = !insideQuotes;
            }

            continue;
        }

        if (char === "," && !insideQuotes) {
            row.push(value.trim());
            value = "";
            continue;
        }

        if ((char === "\n" || char === "\r") && !insideQuotes) {

            if (char === "\r" && next === "\n") {
                i++;
            }

            row.push(value.trim());

            if (row.some(cell => cell.length > 0)) {
                rows.push(row);
            }

            row = [];
            value = "";

            continue;
        }

        value += char;

    }

    if (value.length || row.length) {
        row.push(value.trim());
        rows.push(row);
    }

    return rows;
}

function splitButtons(text) {

    if (!text) return [];

    return text
        .split("|")
        .map(button => button.trim())
        .filter(Boolean);

}

const csv = fs.readFileSync(INPUT, "utf8");

const rows = parseCSV(csv);

const headers = rows.shift();

const data = rows.map(row => {

    const item = {};

    headers.forEach((header, index) => {
        item[header] = row[index] || "";
    });

    return item;

});

console.log(`Wczytano ${data.length} rekordów.`);
function makeId(text) {

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ł/g, "l")
        .replace(/Ł/g, "L")
        .replace(/[^\w\s]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase();

}

const conversations = {};
const rowsById = {};

for (const row of data) {

    if (!row.ID) continue;

    rowsById[row.ID] = row;

}
for (const row of data) {

    if (!row.ID) continue;

    const buttonIds = splitButtons(row["Kolejne przyciski"] || "");

conversations[row.ID] = {
keywords: (row["Keywords"] || "")
    .split(",")
    .map(k => k.trim())
    .filter(Boolean),
        message: row["Odpowiedź"],

    buttons: buttonIds.map(id => ({

    id,
    label: rowsById[id]?.["Label"] || id

}))

};

}

console.log(JSON.stringify(conversations, null, 2));
const output = `const CONTENT = {

    conversations: ${JSON.stringify(conversations, null, 4)
        .replace(/"message":/g, "message:")
        .replace(/"buttons":/g, "buttons:")
        .replace(/"id":/g, "id:")
        .replace(/"label":/g, "label:")
    }

};`;

fs.writeFileSync(OUTPUT, output);

console.log("✅ content.js został wygenerowany.");
console.log(`💾 Zapisano plik: ${OUTPUT}`);