function submitQuiz() {
    const answers = {
        q1: 'A',
        q2: 'B',
        q3: 'A'
    };

    let score = 0;
    const totalQuestions = 3;

    for (const question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("quiz-result");
    resultDiv.innerHTML = `<p>Você acertou ${score} de ${totalQuestions} perguntas.</p>`;
    resultDiv.style.color = score === totalQuestions ? "green" : "red";
}
