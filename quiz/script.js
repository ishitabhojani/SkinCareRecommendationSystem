const StartBtn = document.querySelector('.Start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');




StartBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove( 'active' );
}


continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove( 'active' );
    quizBox.classList.add('active');
    
    showQuestions(0);
    questionCounter(1);
}

let questionCount = 0;
let questionNumb = 1;
isOptionSelected=false;
let userAnswer;
let userScore = 0;

let question_answer = [];
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    question_answer.push(userAnswer);
    isOptionSelected=false;
    if(questionCount < questions.length - 1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    }
    else{
        // console.log('Question Completed')
        showresultBox();
    }
}

const optionList = document.querySelector('.option-list');
// getting questions and options from array
 
function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}



function optionSelected(answer){
    if(isOptionSelected){
        question_answer.pop();
    }
    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].classList.remove('correct');
    }
    userAnswer = answer.textContent;
    let  correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    answer.classList.add('correct');

    nextBtn.classList.add('active');

}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of 10 Questions`;
}


function showresultBox(){
    quizBox.classList.remove('active');
    submitQuiz();
}

function refresh(){
    location.reload();
}