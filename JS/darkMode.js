 // Event listener for the theme toggle button
 const themeToggle = document.getElementById("theme-toggle");
 let toggle = 0;
 const themeIcon = document.querySelector("#theme-toggle i");
 const nameLogo = document.querySelector(".name_logo svg");

 themeToggle.addEventListener("click", toggleTheme);
 // Function to toggle between light mode and dark mode
 function toggleTheme() {
     const body = document.body;
     body.classList.toggle("dark-mode");
     if (toggle == 0) {
         themeIcon.classList.remove('fa-cloud-sun');
         themeIcon.classList.add('fa-sun');
         themeIcon.classList.add('fa-sharp');
         themeIcon.style.color = '#f3f3f3';
         nameLogo.style.fill = '#f3f3f3';
         toggle++;
     } else {
         themeIcon.classList.remove('fa-sun');
         themeIcon.classList.remove('fa-sharp');
         themeIcon.classList.add('fa-cloud-sun');
         themeIcon.style.color = '#343333';
         nameLogo.style.fill = '#343333';
         toggle--;
     }
 }