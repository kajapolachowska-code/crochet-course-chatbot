function normalize(text) {
    if (!text) return "";

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function findRelevantKnowledge(question, knowledge) {

    const query = normalize(question);

    const words = query
        .split(/\W+/)
        .filter(word => word.length > 2);

    const results = knowledge.map(item => {

        let score = 0;

        // temat
        if (normalize(item.topic).includes(query)) {
            score += 80;
        }

        // słowa z topic
        words.forEach(word => {

            if (normalize(item.topic).includes(word)) {
                score += 20;
            }

        });

        // search
        item.search.forEach(phrase => {

            const normalized = normalize(phrase);

            if (query === normalized) {
                score += 100;
            }

            if (query.includes(normalized)) {
                score += 60;
            }

            if (normalized.includes(query)) {
                score += 40;
            }

            words.forEach(word => {

                if (normalized.includes(word)) {
                    score += 15;
                }

            });

        });

        // content
        words.forEach(word => {

            if (normalize(item.content).includes(word)) {
                score += 2;
            }

        });

        score *= item.priority;

        return {
            ...item,
            score
        };

    });

    return results
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

}

module.exports = {
    findRelevantKnowledge
};