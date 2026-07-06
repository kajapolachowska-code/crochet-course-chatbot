const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");

const knowledge = require("./knowledge.json");
const { findRelevantKnowledge } = require("./knowledge-search");
const { buildPrompt } = require("./prompt");

dotenv.config();

const app = express();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.post("/api/chat", async (req, res) => {

    try {

        const { message } = req.body;
        if (!message || !message.trim()) {

    return res.status(400).json({
        answer: "Wpisz pytanie."
    });

}
if (message.length > 3000) {

    return res.status(400).json({
        answer: "Pytanie jest zbyt długie."
    });

}

        const relevantKnowledge = findRelevantKnowledge(
            message,
            knowledge
        );

        const prompt = buildPrompt(
            message,
            relevantKnowledge
        );

        const response = await client.responses.create({

            model: "gpt-5.5",

            instructions: prompt.instructions,

            input: prompt.input

        });

        res.json({
            answer: response.output_text
        });

    } catch (error) {

    console.error(error);

    if (error.status === 429) {

        return res.status(429).json({
            answer: "Chatbot jest chwilowo bardzo zajęty. Spróbuj ponownie za moment."
        });

    }

    res.status(500).json({
        answer: "Przepraszam, wystąpił nieoczekiwany błąd."
    });

}

});
app.get("/api/health", (req, res) => {

    res.json({
        status: "ok"
    });

});

app.listen(PORT, () => {

    console.log(`🚀 Serwer działa na http://localhost:${PORT}`);

});