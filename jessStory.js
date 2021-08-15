let selectQuestion;
const button = document.querySelector("#next");

button.addEventListener("click", nextAction);

function nextAction() {
    console.log("kliklik");
    document.querySelector(".introBlush").style.display = 'block';
    document.querySelector(".intro").style.display = 'none';
    document.querySelector(".shy").style.display = 'block';
    document.querySelector(".coy").style.display = 'none';
}