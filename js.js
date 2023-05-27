const questions = [
    {
        "quz":"which is the follwing is a markup language",
        "a":"HTML",
        "b":"CSS", 
        "c":"javascript",
        "d":"php",
        "ans":"a"
    },
    {
        "quz":"Which one is the smallest ocean in the world?",
        "a":"India",
        "b":"Pacific", 
        "c":"Atlantic",
        "d":"Arctic",
        "ans":"d"
    },
    {
        "quz":"Whick country gifted the statue of libery to usa in 1886?",
        "a":"France",
        "b":"Canada", 
        "c":"Brazil",
        "d":"England",
        "ans":"a"
    },
    {
        "quz":"Dead sea is located between which two countries?",
        "a":"Jordan and Sudan",
        "b":"Jordan and Israel", 
        "c":"Turkey and UAE",
        "d":"UAE and Egypt",
        "ans":"b"
    }
    ,
    {
        "quz":"Whick country is known as the playground of Europe?",
        "a":"Austria",
        "b":"Holland", 
        "c":"Switzerland",
        "d":"Italy",
        "ans":"c"
    }
    ,
    {
        "quz":"Whick country is also known as the land of rising sun?",
        "a":"Japan",
        "b":"New Zealand", 
        "c":"China",
        "d":"Fiji",
        "ans":"a"
    }
    ,
    {
        "quz":"Whick continent has the highest numbe of countries?",
        "a":"Asia",
        "b":"Europe", 
        "c":"North America",
        "d":"africa",
        "ans":"d"
    } ,
    {
        "quz":"In which country white elephand is found?",
        "a":"India ",
        "b":"Sri Lanks", 
        "c":"Thiland",
        "d":"Malaysia",
        "ans":"c"
    }
    ,
    {
        "quz":"Total number of oceans in the world is?",
        "a":"3 ",
        "b":"5", 
        "c":"12",
        "d":"7",
        "ans":"b"
    },
    {
        "quz":"Which one is the longest continental mountain range in the world ?",
        "a":"Himalaya",
        "b":"Andes", 
        "c":"Rocky Mountains",
        "d":"Ural Mountains",
        "ans":"b"
    }
    
];


const question_h2 = document.querySelector("#question_h2");
let btn = document.querySelector(".btn_div");
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const options = document.querySelectorAll(".option_inp");
const loadQuestion = () =>{
    if(index == total){
        return endquiz();
    }
    reset();
  const data = questions[index];
  question_h2.innerText = `${index+1}) ` + data.quz;
  options[0].nextElementSibling.innerText = data.a;
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
}

const submit_quiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.ans){
        right++;
    }else{
        wrong++;
    }

    let ok;
    options.forEach(input => {
        if(input.checked){
            ok = true;
        }
     });
     if(ok){
        ok = false;
        index++;
        btn.style.boxShadow = "0px 0px 0px white";
    }else{
       btn.style.boxShadow = "0px 0px 5px red";
    }

    loadQuestion();
    return;
}

function getAnswer(){
    let answer;
     options.forEach(input => {
        if(input.checked){
           answer = input.value;
        }
     });

     return answer;
}

const reset = () =>{
    options.forEach(input => {
        input.checked = false;
    });
}

const endquiz = () =>{
    document.getElementById("box").innerHTML = 
    `
     <h3> thank you for playing quiz</h3>

     <h2>${right} / ${total}</h2>
    `;
}

loadQuestion();