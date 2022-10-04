const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display'); //Обращение к id элемента


const questions = [
  {
    quiz: ['Школа', 'Пять', 'Контрольная'],
    options: ['Жюри','Оценка'],
    correct: 2
  },
  {
    quiz: ['Дом', 'Животное', 'Ошейник'],
    options: ['Чайник','Собака'],
    correct: 2
  },
  {
    quiz: ['Веселый', 'Смешной', 'Неряшлевый'],
    options: ['Клоун','Охраник'],
    correct: 1
  },
  {
    quiz: ['Предполагать', 'Местность', 'Погода'],
    options: ['Прогноз погоды','Стабильность'],
    correct: 1
  },
  {
    quiz: ['Пояс', 'Татами', 'Удар'],
    options: ['Боулинг','Тхеквондо'],
    correct: 2
  },
]

let score = 0;
let clicked = [];


scoreDisplay.textContent = score; //С помощью textContent мы можем получить текстовое содержимое этого абзаца, чтобы, к примеру, вывести его в консоль:

function populateQuestions() {
  questions.forEach(question => {
    const questionBox = document.createElement('div'); //создаем элемент div
    questionBox.classList.add('question-box'); //Добавляем класс к div

    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = "?"
    questionBox.append(logoDisplay)

    question.quiz.forEach(tip => {
      const tipText = document.createElement("p");
      tipText.textContent = tip
      questionBox.append(tipText) //Метод Element.append() позволяет вставлять строки с текстом
    })

     const questionButtons = document.createElement('div');
     questionButtons.classList.add('question-buttons');
     questionBox.append(questionButtons);

     question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button');
      questionButton.classList.add('question-button')
      questionButton.textContent = option;

      questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct))

      questionButtons.append(questionButton);
     })

     const answerDisplay = document.createElement('div');
     answerDisplay.classList.add('answer-display');
     questionBox.append(answerDisplay);


    questionDisplay.append(questionBox);
  })
}

populateQuestions();


function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
  console.log('option', option);
  console.log('optionIndex', optionIndex);

  if(optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Правильно!", 'correct');
  } else {
    score --;
    scoreDisplay.textContent = score;
    addResult(questionBox, "Не правильно!", 'wrong');
  }
  clicked.push(option);
  questionButton.disabled = clicked.includes(option);
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display');
   answerDisplay.classList.remove('wrong');
   answerDisplay.classList.remove('correct');
   answerDisplay.classList.add(className);
   answerDisplay.textContent = answer;
}