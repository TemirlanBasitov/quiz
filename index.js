const correctAnswers = ['B', 'D', 'A', 'C', 'B']; //correct answers list
let form = document.querySelector(".quiz-form");
let result = document.querySelector('.result');

form.addEventListener('submit', e => { //adding eventlistener for from element
    e.preventDefault();

    //checking answers by comparing user's with corret ones
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((answer, index) =>{
        if (answer === correctAnswers[index]){
            score+=20;
        }
    });
    scrollTo(0,0); //scroll window to the top to show result
    //displayin score on the web page
    result.querySelector('span').innerHTML = score + "%";
    result.classList.remove('d-none');

});