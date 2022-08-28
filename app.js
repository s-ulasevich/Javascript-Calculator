let one = document.getElementById('1');
let two = document.getElementById('2');
let display = document.getElementById('display'); 


one.addEventListener('click', (event) => {
    let value = one.dataset.num;
    display.value += value
    
})
