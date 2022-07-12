
const quiz = [
    {
        question : "Q1 :  What is the full form of HTML ? ",
        a : "Hello To My Lnad",
        b : "Hey Text Makup Language",
        c : "Hypertext Markup Language",
        d : "Hypertext Makeup Language",
        ans : "ans3"
    },
    {
        question : "Q2 :  What is the full form of CSS ? ",
        a : "Cascading Style Sheets",
        b : "Cascading Style Sheep ",
        c : "Cartoon Style Sheets",
        d : "Cascading Super Sheets",
        ans : "ans1"
    },
    {
        question : "Q3 :  What is the full form of HTTP ? ",
        a : "Hyppertext Transfer Product",
        b : "Hypertext Test Protocol",
        c : "Hey Transfer Protocol",
        d : "Hypertext Transfer Protocol",
        ans : "ans4"
    },
    {
        question : "Q4 :  What is the full form of WWW? ",
        a : "World Web Wide",
        b : "World Wide Web",
        c : "World Wide Wide",
        d : "Web World Wide",
        ans : "ans2" 
    },
    {
        question : "Q5 :  What is the full form of JS ? ",
        a : "JavaScript",
        b : "JavaSuper",
        c : "JustScript",
        d : "JordanShoes",
        ans : "ans1"
    }
   
] ;

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const previous = document.querySelector('#previous');
let showScore = document.querySelector('#showScore');
let scoreArea = document.querySelector('.scoreArea');

const answers = document.querySelectorAll('.answer');

const result = document.querySelector('.result');



let score = 0;

let i = 0;

let opt;

if(i === 0){
    document.querySelector('.active_btn').style.display = "none";
}

const loadQuestion = () => {

    const questionList = quiz[i] ;

    question.textContent = questionList.question;

    option1.textContent = questionList.a;
    option2.textContent = questionList.b;
    option3.textContent = questionList.c;
    option4.textContent = questionList.d;



};

loadQuestion();




const getCheckAnswer = () => {
    let answer ;

    answers.forEach ((curAns) => {
        if(curAns.checked){
            answer = curAns.id;
        }
    });

    return answer;
};


const deselectAll = () => {
    answers.forEach ((curAns) => {
        curAns.checked = false;
    })
}


function passvalue(){
    let scr = document.getElementById('txt').value;
    localStorage.setItem("textValue",scr);
    return false;
}

submit.addEventListener('click',() => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
    if(checkAnswer === quiz[i].ans){
        score++;
    };

    i++;

    document.querySelector('.active_btn').style.display = "block";

    deselectAll();

    if(i < quiz.length ){
   
    loadQuestion();
    document.getElementById('send').style.display = "none" ;
    }
    
    if(i === quiz.length){
       
        // submit.textContent ="Submit";
        submit.style.display = "none";
        previous.style.display = "none";
         showScore.innerHTML = `<form action ="result.html" target="_blank"> 
        
         <input type ="submit" class="send_btn" id="send" vlaue="click" onclick = "passvalue();" />
         <input type="text" value = "${score}" class="visible"  id="txt"/>
         </form>` ;
        
         scoreArea.style.display = 'block';
    
       
    }
   
});


previous.addEventListener('click',() => {
  

   
    i--;

    loadQuestion();
   
    if(i === 0){
    document.querySelector('.active_btn').style.display = "none";
    }
});