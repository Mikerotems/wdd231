

//document.addEventListener("DOMContentLoaded", function () {

//   const currentYear = new Date().getFullYear();
//  document.querySelector("footer span:nth-of-type(1)").innerHTML = `&copy; ${currentYear} Michael Ademola Oluwarotimi -WDD 231`;

//  const lastModified = document.lastModified;
//   document.querySelector("footer span:nth-of-type(2)").innerHTML = `Last Modified: ${lastModified}`;})

// Get full name and last modified date, then display in footer

// Full name
const fullName = "Oluwarotimi M Ademola";

// Display full name (if you want to show it somewhere specific)
const nameElements = document.querySelectorAll('.full-name');
nameElements.forEach(el => el.textContent = fullName);

// Last modified
const lastModified = document.lastModified;

// Display last modified in the footer
const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
}