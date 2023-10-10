  read=()=>{
    nav = document.querySelector('nav');
    content = document.querySelector('.top-sub-content');
    navBar = content.querySelector('.fa-solid');
    currentNavState = nav.getAttribute('data-nav');
    return[nav,content,navBar,currentNavState];
  }

document.addEventListener('click', function (event) {
  const[,content,navBar,]=read();
    const nav = document.querySelector('nav[data-nav="open"]');
    if (nav && !nav.contains(event.target)) {
        nav.setAttribute('data-nav', 'close');
        navBar.classList.add("fa-bars");
        navBar.classList.remove("fa-xmark");
    }
  });
  
  function navbar() {
    const[nav,content,navBar,currentNavState]=read();
    if (currentNavState === 'open') {
        nav.setAttribute('data-nav', 'close');
        navBar.classList.add("fa-bars");
        navBar.classList.remove("fa-xmark");
    } else {
        nav.setAttribute('data-nav', 'open');
        navBar.classList.remove("fa-bars");
        navBar.classList.add("fa-xmark");
    }
  }
  // this also
  function navibar() {
    const[nav,content,navBar,currentNavState]=read();
    if (currentNavState === 'open'){
    nav.setAttribute('data-nav', 'close');
    navBar.classList.add("fa-bars");
    navBar.classList.remove("fa-xmark");
    } 
  }
  
  function scrollToSection(clickedElement) {
    const targetId = clickedElement.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    navibar();
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function toggleDarkMode() { 
    const container = document.querySelector(':root');
     const buttonDarkMode = document.querySelector('#toggleDarkMode');
     const dataTheme = container.getAttribute('data-theme');

     if(dataTheme === 'dark') {
      localStorage.setItem('data-theme','light');
       container.setAttribute('data-theme', 'light');
       buttonDarkMode.classList.add("fa-sun");
       buttonDarkMode.classList.remove("fa-moon");
     } else {
      localStorage.setItem('data-theme','dark');
       container.setAttribute('data-theme', 'dark');
       buttonDarkMode.classList.remove("fa-sun");
       buttonDarkMode.classList.add("fa-moon");
     }
   }
   
window.addEventListener('load', () => {
  const currentTheme = localStorage.getItem('data-theme');
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      const buttonDarkMode = document.getElementById('darkModeIcon');
      if (currentTheme === 'dark') {
        buttonDarkMode.classList.remove("fa-sun");
        buttonDarkMode.classList.add("fa-moon");
      } else {
        buttonDarkMode.classList.add("fa-sun");
        buttonDarkMode.classList.remove("fa-moon");
      }
  }
});

filterPopup=()=>{
  let popup = document.querySelector(".filter-search");

    popup.style.scale = '1';
    popup.style.opacity = '1';
}


filterPopdown=()=>{
  let popup = document.querySelector(".filter-search");

    popup.style.scale = '0';
    popup.style.opacity = '0';
}


function resetSearchForm() {
  // Get a reference to the search form by its ID or other means
  const searchForm = document.getElementById('searcher'); // Replace 'your-search-form-id' with the actual ID of your form

  if (searchForm) {
      // Loop through all form elements
      for (let i = 0; i < searchForm.elements.length; i++) {
          const element = searchForm.elements[i];

          // Check if the element is an input field, excluding checkboxes and radio buttons
          if (element.type !== 'checkbox' && element.type !== 'radio') {
              // Reset the value of the input field
              element.value = '';
          }
      }
  }
}
