const correctAnswers = ['b','a','a','b'];
const form = document.querySelector('.quiz-form');
const showScore =  document.querySelector('.result');

form.addEventListener('submit', e=>{
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer===correctAnswers[index]){
      score += 25;
    }
  });
  //Show result on page
  scrollTo(0,0);
  showScore.classList.remove('d-none');
  scoreCounter =  0;
  let timer =  setInterval(()=>{
    if (scoreCounter < score){
      scoreCounter ++;
      showScore.querySelector('span').textContent = `${scoreCounter}%`;
    } else{
      timer.reset();
    }
  },10);
  showScore.querySelector('span').textContent = `${score}%`;
});
