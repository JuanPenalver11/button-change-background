// Variables 
const btn = document.querySelector('.btn');

// array of colors 

const backgroundColor = ['blue', 'green', 'red', 'yellow','pink', 'white', 'black', 'orange', 'violet', 'purple']

// addEventListener function 

btn.addEventListener('click', function(){

        let randomIndex = Math.floor(Math.random() * backgroundColor.length)
        let colorBackground = backgroundColor[randomIndex];

        document.body.style.background = colorBackground;

    
});