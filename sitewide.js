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