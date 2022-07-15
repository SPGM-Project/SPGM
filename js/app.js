const fadeTeam = document.querySelector(".visual .inner #team_name");
const fadeIntro = document.querySelector(".visual .inner #intro1");
let count = 0;


setInterval(introTeam,1000);

function introTeam(){
  if(count < 3){
  count++;
  fadeIntro.className += 'fade-in';
  } else {
    clearInterval(introTeam);
  }
}

