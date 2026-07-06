console.log("SCRIPT VERSION 3");

const startButton = document.querySelector(".start-button");
const welcome = document.querySelector(".welcome-screen");
const chat = document.querySelector(".chat-screen");
const messages = document.querySelector(".messages");
const input = document.querySelector(".question-box input");
const sendButton = document.querySelector(".send-button");

const conversationMap = CONTENT.conversations;

startButton.onclick = () => {

    welcome.style.display = "none";
    chat.style.display = "block";

    showConversation("mainMenu");

};

function scroll() {

    messages.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });

}

function formatMessage(text) {

    let html = text;

    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    html = html.replace(
        /((?:^- .+\n?)+)/gm,
        match => {

            const items = match
                .trim()
                .split("\n")
                .map(line => `<li>${line.replace(/^- /, "")}</li>`)
                .join("");

            return `<ul>${items}</ul>`;

        }
    );

    html = html
        .split(/\n\s*\n/)
        .map(paragraph =>
            `<p>${paragraph.replace(/\n/g, "<br>")}</p>`
        )
        .join("");

    return html;

}
function addAssistant(text, buttons = []) {

    const wrapper = document.createElement("div");
    wrapper.className = "assistant-row";

    const avatar = document.createElement("img");
    avatar.src = "favicon.svg";
    avatar.className = "assistant-avatar";

    const bubble = document.createElement("div");
    bubble.className = "bot-message";

    let html = formatMessage(text);

    if (buttons.length) {

        html += `
            <div class="topics">
                ${buttons.map(button => `
                    <button
                        class="topic-button"
                        data-id="${button.id}">
                        ${button.label}
                    </button>
                `).join("")}
            </div>
        `;

    }

    bubble.innerHTML = html;

    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);

    messages.appendChild(wrapper);

    scroll();

}

function addUser(text) {

    const bubble = document.createElement("div");

    bubble.className = "user-message";
    bubble.textContent = text;

    messages.appendChild(bubble);

    scroll();

}

function showTyping() {

    const wrapper = document.createElement("div");

    wrapper.className = "assistant-row typing";

    wrapper.innerHTML = `
        <img src="favicon.svg" class="assistant-avatar">

        <div class="bot-message typing-bubble">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    messages.appendChild(wrapper);

    scroll();

    return wrapper;

}

function showConversation(id) {

    const conversation = conversationMap[id];

    if (!conversation) return;

    addAssistant(
        conversation.message,
        conversation.buttons
    );

}

document.addEventListener("click", event => {

    if (!event.target.classList.contains("topic-button")) {
        return;
    }

    const button = event.target;

    button
        .closest(".topics")
        .querySelectorAll("button")
        .forEach(btn => btn.disabled = true);

    addUser(button.textContent);

    showConversation(button.dataset.id);

});
async function sendQuestion() {

    const question = input.value.trim();

    if (!question) return;

    addUser(question);

    input.value = "";

    sendButton.disabled = true;
    input.disabled = true;

    const typing = showTyping();

    try {

        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 20000);

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            signal: controller.signal,

            body: JSON.stringify({
                message: question
            })

        });

        clearTimeout(timeout);

        const data = await response.json();

        typing.remove();

        addAssistant(data.answer);

    } catch (error) {

        typing.remove();

        if (error.name === "AbortError") {

            addAssistant(
                "⏳ Odpowiedź trwa dłużej niż zwykle. Spróbuj ponownie za chwilę."
            );

        } else {

            console.error(error);

            addAssistant(
                "😔 Wystąpił błąd podczas łączenia z AI."
            );

        }

    } finally {

        sendButton.disabled = false;
        input.disabled = false;
        input.focus();

    }

}

sendButton.addEventListener("click", sendQuestion);

input.addEventListener("keydown", event => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendQuestion();

    }

});