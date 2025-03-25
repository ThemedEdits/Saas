const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents click from closing immediately
    mobileMenu.classList.toggle('active');
    hamburger.innerHTML = mobileMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        mobileMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Prevent menu links from closing menu
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// Pricing Toggle Switch
const toggle = document.getElementById('billing-toggle');
const monthlyPrices = document.querySelectorAll('.monthly');
const annualPrices = document.querySelectorAll('.annual');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'inline');
    } else {
        monthlyPrices.forEach(price => price.style.display = 'inline');
        annualPrices.forEach(price => price.style.display = 'none');
    }
});


// Solution Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Solution Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Set first tab as active by default
    tabBtns[0].classList.add('active');
    tabContents[0].classList.add('active');

    // Add click event to all tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});


document.querySelector('.view-all').addEventListener('click', function() {
    const blogSection = document.querySelector('.blog-posts');
    const icon = this.querySelector('i');
    
    blogSection.classList.toggle('expanded');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
    
    // Update button text
    if (blogSection.classList.contains('expanded')) {
        this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else {
        this.innerHTML = 'View All Articles <i class="fas fa-chevron-down"></i>';
    }
});