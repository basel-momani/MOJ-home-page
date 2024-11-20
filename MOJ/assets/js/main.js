// Language switcher function
function switchLanguage() {
  const langText = document.querySelector(".lang-text");
  langText.textContent = langText.textContent === "ENGLISH" ? "العربية" : "ENGLISH";
}

// for tabs section
function showTab(tabIndex) {
    // Get all tabs and tab contents
    const tabs = document.querySelectorAll('.tabs-section .tab');
    const tabContents = document.querySelectorAll('.tabs-section .tab-content');

    // Remove active class from all tabs and tab contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the selected tab and corresponding content
    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}


// Sidebar toggle function for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');

  hamburgerMenu.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');
  });
});

// Slider functionality for internal communication section
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const visibleSlides = 3;
const paginationContainer = document.querySelector('.pagination');

function createPaginationDots() {
    const numberOfDots = Math.ceil(totalSlides / visibleSlides); 
    paginationContainer.innerHTML = ''; 

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active'); 
        }
        dot.addEventListener('click', () => {
            currentIndex = i * visibleSlides;
            updateSlides();
        });
        paginationContainer.appendChild(dot);
    }

    console.log('Pagination dots created:', numberOfDots); 
}

function updateSlides() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';

    // Add the new set of slides
    for (let i = currentIndex; i < currentIndex + visibleSlides; i++) {
        if (i < totalSlides) {
            const newSlide = slides[i].cloneNode(true);
            slidesContainer.appendChild(newSlide);
        }
    }

    const dots = document.querySelectorAll('.pagination .dot');
    dots.forEach((dot, index) => {
        if (index === Math.floor(currentIndex / visibleSlides)) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

createPaginationDots();
updateSlides();

console.log('Pagination container:', paginationContainer);


// for showing and hiding elements in systems section (left second section) 
document.querySelector('.toggle-button').addEventListener('click', function () {
  const extraItems = document.querySelectorAll('.user-systems .items .item:nth-child(n+6)');
  const buttonSpan = this.querySelector('span'); // Target the span inside the button
  const isOpen = this.classList.contains('open'); // Check if the button already has the "open" class

  if (!isOpen) {
      // Show all items and add the "open" class
      extraItems.forEach(item => item.style.display = 'block');
      buttonSpan.textContent = 'اخفاء'; // Update button text
      this.classList.add('open'); // Add the "open" class
  } else {
      // Hide extra items and remove the "open" class
      extraItems.forEach(item => item.style.display = 'none');
      buttonSpan.textContent = 'عرض المزيد'; // Update button text
      this.classList.remove('open'); // Remove the "open" class
  }
});


// for showing and hiding elements in what-coming section (left 3ed section) 
document.querySelector('.what-coming .toggle-button').addEventListener('click', function () {
    const extraItems = document.querySelectorAll('.what-coming .items .item:nth-child(n+5)');
    const buttonSpan = this.querySelector('span'); // Target the span inside the button
    const isOpen = this.classList.contains('open'); // Check if the button already has the "open" class

    if (!isOpen) {
        // Show all items and add the "open" class
        extraItems.forEach(item => item.style.display = 'flex');
        buttonSpan.textContent = 'اخفاء'; // Update button text
        this.classList.add('open'); // Add the "open" class
    } else {
        // Hide extra items and remove the "open" class
        extraItems.forEach(item => item.style.display = 'none');
        buttonSpan.textContent = 'عرض المزيد'; // Update button text
        this.classList.remove('open'); // Remove the "open" class
    }
});


// to maximize the margin-right of page body and padding-right of user nav based on clicking on the button that added the .open class to navbar
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main'); // Correctly select the <main> element
    const userNav = document.querySelector('.user-nav'); // Correctly select the .user-nav element
  
    // Function to handle style changes
    function adjustStyles() {
        if (sidebar.classList.contains('open')) {
            mainContent.style.marginRight = '268px'; // Adjust main content margin
            userNav.style.paddingRight = '301px'; // Adjust user-nav padding
        } else {
            mainContent.style.marginRight = '90px'; // Default main content margin
            userNav.style.paddingRight = '123px'; // Default user-nav padding
        }
    }
  
    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(() => {
        adjustStyles();
    });
  
    // Start observing the sidebar for attribute changes
    observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
  
    // Adjust styles initially in case the .open class is already present
    adjustStyles();
});
