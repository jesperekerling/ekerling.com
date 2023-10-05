const sliderChecked = document.getElementById('slider');


// Start of theme by time of day
// Source: https://codepen.io/lakshmanan-arumugam/pen/zYZvewO

function setThemePreference() {
  var d = new Date();
  /*
  * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  * Early morning = 0 - 6
  * Morning = 6 - 12
  * Evening = 12 - 18
  * Night = 18 - 23
  */
  var currentHour = d.getHours();  

  if(currentHour >= 20 || currentHour <= 8  ) {
    document.documentElement.setAttribute("class", "dark_theme")
    slider.checked = false;
  }else {
    document.documentElement.setAttribute("class", "light_theme") 
    slider.checked = true;
  }
}
  
  window.onload = setThemePreference;

  // End of theme by time of day




  // Start of theme toggle script
  // Source: https://codepen.io/haxzie/pen/xxKNEGM

   // function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark_theme') {
        setTheme('light_theme');
        slider.checked = true;
        
    } else {
        setTheme('dark_theme');
        slider.checked = false;
    }
}

