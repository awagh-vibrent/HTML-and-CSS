


/*
function calc(){
    const inp1 = Number(document.getElementById("input1").value); 
    const inp2 = Number(document.getElementById('input2').value);

    document.getElementById('result').value = inp1 + inp2 ;
}

*/

const addbtn = document.getElementById("addbtn");

addbtn.addEventListener('click',function(){
   
    const inp1 = Number(document.getElementById("input1").value); 
    const inp2 = Number(document.getElementById('input2').value);

    document.getElementById('answer').value = inp1 + inp2 ;
        if(inp1 + inp2 >= 0){
    document.querySelector('.hidden').style.display = 'block' ;
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
        }
        else{
            alert('Enter Positive Number');
        }
   
   
}) ;

const subtn = document.getElementById("subtn");

subtn.addEventListener('click',function(){
   
    const inp1 = Number(document.getElementById("input1").value); 
    const inp2 = Number(document.getElementById('input2').value);

    document.getElementById('answer').value = inp1 - inp2 ;
   
    if(inp1 - inp2 >= 0){
    document.querySelector('.hidden').style.display = 'block' ;
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
    }

    else{
        alert("Enter positive numbers")
    }
   
});

const mulbtn = document.getElementById('mulbtn');

mulbtn.addEventListener('click',function(){
   
    const inp1 = Number(document.getElementById("input1").value); 
    const inp2 = Number(document.getElementById('input2').value);

    document.getElementById('answer').value = inp1 * inp2 ;
   
    if(inp1 * inp2 >= 0){
    document.querySelector('.hidden').style.display = 'block' ;
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
    }

    else{
        alert("Enter positive numbers")
    }
   
});

const divbtn = document.getElementById('divbtn');

divbtn.addEventListener('click',function(){
   
    const inp1 = Number(document.getElementById("input1").value); 
    const inp2 = Number(document.getElementById('input2').value);

    document.getElementById('answer').value = inp1 / inp2 ;
   
    if(inp1 / inp2 >= 0){
    document.querySelector('.hidden').style.display = 'block' ;
    document.querySelector('.a').style.display = 'none';
    document.querySelector('.b').style.display = 'none';
    document.querySelector('.c').style.display = 'none';
    document.querySelector('.d').style.display = 'none';
    document.querySelector('.e').style.display = 'none';
    document.querySelector('.f').style.display = 'none';
    }

    else{
        alert("Enter positive numbers")
    }
   
});












