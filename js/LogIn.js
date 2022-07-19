const forgot = document.querySelector(".forgot");
const Inputs = document.querySelector(".Inputs");
const logBTN = document.querySelector(".LogInBTN");
const pw = document.querySelector(".password");
const id = document.querySelector(".id");  
function handleAlert(){
    alert("그걸 까먹냐");
}
function handleSubmit(event){
    event.preventDefault();
    if(((id.value=="apsxhqudtls"))&&((pw.value)==="dkdxmsjqudtls"))
    {
        alert("로그인 되었습니다");
        location.replace("main.html");
    }
    else{
        alert("id나 비밀번호가 일치하지 않습니다");
    }
}

forgot.addEventListener("click", handleAlert);
Inputs.addEventListener("submit", handleSubmit);
logBTN.addEventListener("click", handleSubmit);