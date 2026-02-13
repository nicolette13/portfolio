// TIPPY TOOLTIPS 

tippy('[data-tippy-content', {
    theme: 'custom', 
    delay: [200], 
    followCursor: true, 
    duration: [400]
});


//  LIGHT/DARK MODE 

 const toggleBtn = document.querySelector('input[type="checkbox"]');

    function changeTheme(e){
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark'); 
            localStorage.setItem('theme', 'dark'); 
        } else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); 
        }
    }

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; 
        if(currentTheme){
            document.documentElement.setAttribute('data-theme', currentTheme);
            if(currentTheme === 'dark'){
                toggleBtn.checked = true; 
            }
        }
    toggleBtn.addEventListener('change', changeTheme, false); 


// TOGGLE FONT SIZES

let smallBtn = document.getElementById('small'); 
let medBtn = document.getElementById('medium'); 
let largeBtn = document.getElementById('large'); 

smallBtn.addEventListener('click', function(e){
    document.body.style.fontSize = '14px';
}); 

medBtn.addEventListener('click', function(e){
    document.body.style.fontSize = '18px';
}); 

largeBtn.addEventListener('click', function(e){
    document.body.style.fontSize = '22px'; 
}); 

// RÉSUMÉ ACCORDION MENUS 

 let collapseBtn = document.getElementsByClassName('collapse-btn');
      let i; 

      for (i = 0; i < collapseBtn.length; i++) {
        collapseBtn[i].addEventListener('click', function(){
            this.classList.toggle('active'); 
            let collapseSection = this.nextElementSibling; 
            if(collapseSection.style.maxHeight){
                collapseSection.style.maxHeight = null; 
            } else{
                collapseSection.style.maxHeight= collapseSection.scrollHeight + 'px'; 
            }
        }); 
      }