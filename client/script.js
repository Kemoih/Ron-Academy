document.addEventListener('DOMContentLoaded', function () {
    // Sample course data with working image URLs
    const courses = [
        {
            title: "Introduction to JavaScript",
            description: "Learn the fundamentals of JavaScript programming language.",
            category: "Programming",
            price: "$39.99",
            rating: "4.8",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            title: "Advanced Mathematics",
            description: "Master advanced mathematical concepts for college students.",
            category: "Math",
            price: "$59.99",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            title: "Creative Writing",
            description: "Develop your writing skills and find your unique voice.",
            category: "Writing",
            price: "$39.99",
            rating: "4.9",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
        },
        {
            title: "Data Science Fundamentals",
            description: "Introduction to data analysis and visualization.",
            category: "Data Science",
            price: "$69.99",
            rating: "4.6",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            title: "Graphic Design Principles",
            description: "Learn the core principles of effective graphic design.",
            category: "Design",
            price: "$44.99",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        },
        {
            title: "Business Management",
            description: "Essential skills for managing teams and projects.",
            category: "Business",
            price: "$54.99",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    const courseGrid = document.querySelector('.course-grid');
    if (courseGrid) {
        function loadCourses() {
            courseGrid.innerHTML = '';
            courses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                courseCard.innerHTML = `
                    <div class="course-image">
                        <img src="${course.image}" alt="${course.title}" loading="lazy">
                    </div>
                    <div class="course-info">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <div class="course-meta">
                            <span class="course-price">${course.price}</span>
                            <span class="course-rating">★ ${course.rating}</span>
                        </div>
                    </div>
                `;
                courseGrid.appendChild(courseCard);
            });
        }
        loadCourses();
    }
    

    // Rest of your existing code remains the same...
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        if (testimonials[index]) testimonials[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentTestimonial = index;
    }

    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(prevIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    if (testimonials.length > 0) {
        setInterval(() => {
            let nextIndex = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
    }

    // Modal functionality
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const confirmationModal = document.getElementById('request-confirmation');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const requestHelpBtn = document.querySelector('.request-help-btn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');
    const closeConfirmation = document.querySelector('.close-confirmation');

    function openModal(modal) {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (loginBtn) loginBtn.addEventListener('click', () => openModal(loginModal));
    if (signupBtn) signupBtn.addEventListener('click', () => openModal(signupModal));
    if (requestHelpBtn) {
        requestHelpBtn.addEventListener('click', () => {
            const form = document.getElementById('homework-help-form');
            if (form) form.scrollIntoView({ behavior: 'smooth' });
        });
    }

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    if (closeConfirmation) {
        closeConfirmation.addEventListener('click', () => closeModal(confirmationModal));
    }

    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginModal);
            openModal(signupModal);
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(signupModal);
            openModal(loginModal);
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const homeworkForm = document.getElementById('homework-help-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Login functionality will be implemented in the backend');
            closeModal(loginModal);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Signup functionality will be implemented in the backend');
            closeModal(signupModal);
        });
    }

    if (homeworkForm) {
        homeworkForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const subject = document.getElementById('subject')?.value;
            const urgency = document.getElementById('urgency')?.value;
            const description = document.getElementById('description')?.value;

            console.log('Homework Help Request Submitted:', { subject, urgency, description });
            openModal(confirmationModal);
            this.reset();
        });
    }

    // Smooth scroll for in-page navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100 && header) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else if (header) {
            header.style.boxShadow = 'none';
        }
    });
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})