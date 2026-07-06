const fs = require("fs");
const csv = require("csv-parser");

const knowledge = [];

fs.createReadStream("chatbot-knowledge-bucket-hat.csv")
    .pipe(csv())
    .on("data", (row) => {

        knowledge.push({
            id: row.id,
            section: row.section,
            topic: row.topic,
            search: row.search
                .split("|")
                .map(item => item.trim().toLowerCase()),
            priority: Number(row.priority),
            type: row.type,
            content: row.content
        });

    })
    .on("end", () => {

        fs.writeFileSync(
            "knowledge.json",
            JSON.stringify(knowledge, null, 2),
            "utf8"
        );

        console.log("✅ knowledge.json wygenerowany");

    });