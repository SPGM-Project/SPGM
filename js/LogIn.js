const forgot = document.querySelector(".forgot");
const Inputs = document.querySelector(".Inputs");
const logBTN = document.querySelector(".LogInBTN");

function handleAlert(){
    alert("그걸 까먹냐");
}
function handleSubmit(event){
    event.preventDefault();
    alert("id나 비밀번호가 일치하지 않습니다");
}

forgot.addEventListener("click", handleAlert);
Inputs.addEventListener("submit", handleSubmit);
logBTN.addEventListener("click", handleSubmit);