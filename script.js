const button_sub = document.querySelector('#sub');
const button_add = document.querySelector('#add');
let number = document.querySelector('#number');
let result = 0;

button_add.addEventListener('click', function(){
    result  = result + 1;
    number.innerHTML = result;
})

button_sub.addEventListener('click', function(){
    result = result - 1;
    number.innerHTML = result;
})