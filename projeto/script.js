document.getElementById('generate').addEventListener('click', () => {
    const numQuestions = parseInt(document.getElementById('questions').value);
    const optionsRange = document.getElementById('options').value.trim().toUpperCase();

    const [start, end] = optionsRange.split('-');
    if (!start || !end || start > end) {
    alert('Digite um intervalo válido de opções (ex: A-D)');
    return;
    }

    const card = document.getElementById('card');
    card.innerHTML = '';

    const options = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
    options.push(String.fromCharCode(i));
    }

    for (let i = 1; i <= numQuestions; i++) {
    const question = document.createElement('div');
    question.className = 'question';
    question.innerHTML = `<strong>Questão ${i}:</strong>`;

    const answers = document.createElement('div');
    answers.className = 'answers';

    options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
        <input type="radio" name="question-${i}" value="${option}">
        ${option}
        `;
        answers.appendChild(label);
    });

    question.appendChild(answers);
    card.appendChild(question);
    }
});