const doge = document.getElementById('doge');

doge.addEventListener('click', ()=>{
    console.log('Guau, guau.');
});

const drumButtons = document.querySelectorAll('button');

drumButtons.forEach(
        button =>{
            button.style.left = button.dataset.posx; 
            button.style.top = button.dataset.posy; 
        } 
);