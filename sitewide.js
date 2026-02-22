// TIPPY TOOLTIPS 

tippy('[data-tippy-content]', {
    theme: 'custom',
    arrow: true,
    followCursor: true,
    delay: [200],
    duration: [400]
});

// LIGHT/DARK MODE 

const toggleBtn = document.querySelector('input[type="checkbox"]');

 const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; 
        if(currentTheme){
            document.documentElement.setAttribute('data-bs-theme', currentTheme);
            if(currentTheme === 'dark'){
                toggleBtn.checked = true; 
            }
        }   
    function changeTheme(e){
        if(e.target.checked){
            document.documentElement.setAttribute('data-bs-theme', 'dark'); 
            localStorage.setItem('theme', 'dark'); 
        } else{
            document.documentElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light'); 
        }
    }

toggleBtn.addEventListener('change', changeTheme, false); 


// INCREASE/DECREASE FONT SIZE

let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease'); 
let minFontSize = 8; 
let maxFontSize = 26;  

function changeFontSize(change){
  let htmlElem = document.documentElement;

  let currentSize = parseFloat(window.getComputedStyle(htmlElem, null).fontSize); 
  let newSize = currentSize + change; 

  if(newSize >= minFontSize && newSize <= maxFontSize){
    htmlElem.style.fontSize = newSize + 'px'; 
  }
}

function increaseSize(){
    changeFontSize(1); 
}

function decreaseSize(){
    changeFontSize(-1); 
}

increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize); 


