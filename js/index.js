const sliderChecked = document.getElementById('slider');


// Start of theme by time of day
// Source: https://codepen.io/lakshmanan-arumugam/pen/zYZvewO

function setThemePreference() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.documentElement.className = storedTheme;
    slider.checked = storedTheme === 'light_theme';
  } else {
    var d = new Date();
    var currentHour = d.getHours();  
    if (currentHour >= 20 || currentHour <= 8) {
      document.documentElement.setAttribute("class", "dark_theme");
      slider.checked = false;
    } else {
      document.documentElement.setAttribute("class", "light_theme");
      slider.checked = true;
    }
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

