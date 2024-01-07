console.log("hellport")

var element0 = document.querySelector('.para1');
var element1 = document.querySelector('.para2');
var element2 = document.querySelector('.para3');
var element3 = document.querySelector('.para4');

// Check if the element is found before accessing its style property
if (element0 && element1 && element2 && element3) {
    // Access the style property of the found element
    element0.style.display = 'none';
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
} else {
    console.error("Element not found");
}


const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click',function(){
    element0.style.display = 'block';
})

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click',function(){
    element1.style.display = 'block';
})

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click',function(){
    element2.style.display = 'block';
})

const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click',function(){
    element3.style.display = 'block';
})
