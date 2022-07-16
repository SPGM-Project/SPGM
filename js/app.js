const course = document.querySelector('.course .inner');
const front = document.querySelector('.course .inner .front');
const back = document.querySelector('.course .inner .back');
const aos = document.querySelector('.course .inner .aos');
const ios = document.querySelector('.course .inner .ios');

let count = 0;
const FADE_IN = ' fade-in';

function handleScroll(){
  if(count == 0){
  front.className += FADE_IN;
  back.className += FADE_IN;
  aos.className += FADE_IN;
  ios.className += FADE_IN;
  count++;
  } 
}


course.addEventListener("mouseover", handleScroll);