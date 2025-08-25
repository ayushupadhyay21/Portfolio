// Constants
const ANIMATION_STEPS = 50;
const NOTIFICATION_DURATION = 3000;
const SLIDE_DISTANCE = 400;
const PARTICLE_COUNT = 30;

// Cache DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const sections = Array.from(document.querySelectorAll('section'));

// Mobile Navigation Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar background change
function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(12, 12, 12, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(12, 12, 12, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skill-item')) {
                const skillBar = entry.target.querySelector('.skill-bar');
                const level = skillBar.getAttribute('data-level');
                setTimeout(() => {
                    skillBar.style.width = level + '%';
                }, 200);
            }
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Skill bar animation (optimized)
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar:not(.animated)');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const rect = bar.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.classList.add('animated');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 200);
        }
    });
}

// Parallax effect for floating cards
function parallaxCards() {
    const cards = document.querySelectorAll('.card');
    const scrolled = window.pageYOffset;
    
    cards.forEach((card, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
}

// Smooth reveal animation for project cards
function revealProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Initialize hero title (secure)
function initHeroTitle() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const nameSpan = document.createElement('span');
        nameSpan.className = 'highlight';
        nameSpan.textContent = 'Ayush Upadhyay';
        
        heroTitle.textContent = "Hi, I'm ";
        heroTitle.appendChild(nameSpan);
    }
}

// Contact form handling (secure)
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data safely
        const formData = new FormData(this);
        const name = sanitizeInput(formData.get('name'));
        const email = sanitizeInput(formData.get('email'));
        const subject = sanitizeInput(formData.get('subject'));
        const message = sanitizeInput(formData.get('message'));
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        showNotification('Message sent successfully!', 'success');
        this.reset();
    });
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
    if (!input) return '';
    return input.toString().replace(/[<>"'&]/g, function(match) {
        const escapeMap = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '&': '&amp;'
        };
        return escapeMap[match];
    });
}

// Notification system (secure)
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = sanitizeInput(message);
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(${SLIDE_DISTANCE}px);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(45deg, #00d4ff, #00b8e6);' : 'background: linear-gradient(45deg, #ff6b6b, #ff5252);'}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = `translateX(${SLIDE_DISTANCE}px)`;
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, NOTIFICATION_DURATION);
}

// Add hover effects to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Add click effects to project cards (secure)
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(event) {
            const githubLink = this.querySelector('.project-link[href*="github.com"]');
            if (githubLink && githubLink.href) {
                window.open(githubLink.href, '_blank', 'noopener,noreferrer');
            }
            
            // Add ripple effect with error handling
            try {
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = (event.clientX || 0) - rect.left - size / 2;
                const y = (event.clientY || 0) - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    border-radius: 50%;
                    background: rgba(0, 212, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

                this.appendChild(ripple);

                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            } catch (e) {
                console.warn('Ripple effect failed:', e);
            }
        });
    });
}


// Toggle Show More / Show Less Projects
const showMoreBtn = document.getElementById("showMoreProjectsBtn");
const projectsGrid = document.querySelector(".projects-grid");

if (showMoreBtn && projectsGrid) {
    let expanded = false;

    showMoreBtn.addEventListener("click", () => {
        expanded = !expanded;
        projectsGrid.classList.toggle("expanded", expanded);
        showMoreBtn.textContent = expanded ? "Show Less" : "See All Projects";
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal for stats (optimized)
let statsAnimated = false;
function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent) || 0;
        const increment = target / ANIMATION_STEPS;
        let current = 0;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        updateStat();
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Optimized particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    return progressBar;
}

function updateScrollProgress(progressBar) {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
}

// Initialize scroll progress
createScrollProgress();

// Section reveal optimization
function revealSections() {
    sections.forEach(section => {
        if (section.classList.contains('revealed')) return;
        
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('revealed');
        }
    });
}

function initSectionReveals() {
    sections.forEach(section => {
        section.classList.add('section-hidden');
    });
    setTimeout(revealSections, 100);
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
            e.preventDefault();
            scrollToNextSection();
            break;
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            scrollToPreviousSection();
            break;
        case 'Home':
            e.preventDefault();
            scrollToSection('home');
            break;
    }
});

// Consolidated section navigation
function navigateSection(direction) {
    const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
    });
    
    if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const targetIndex = currentIndex + direction;
        const targetSection = sections[targetIndex];
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function scrollToNextSection() {
    navigateSection(1);
}

function scrollToPreviousSection() {
    navigateSection(-1);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize all components
function init() {
    initHeroTitle();
    initContactForm();
    initProjectCards();
    initSectionReveals();
    
    const progressBar = createScrollProgress();
    createParticles();
    
    // Single throttled scroll handler
    const throttledScrollHandler = throttle(() => {
        updateNavbar();
        animateSkillBars();
        revealProjectCards();
        parallaxCards();
        revealSections();
        updateScrollProgress(progressBar);
    }, 16);
    
    window.addEventListener('scroll', throttledScrollHandler);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
