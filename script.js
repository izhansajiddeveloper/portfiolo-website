// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add scroll-up class to header
header.classList.add('scroll-up');

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full';
        successMessage.textContent = 'Message sent successfully!';
        document.body.appendChild(successMessage);

        // Animate in
        setTimeout(() => {
            successMessage.classList.remove('translate-x-full');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            successMessage.classList.add('translate-x-full');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 3000);

        // Reset form
        contactForm.reset();
    });
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('#projects .grid > div');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    });
});

// Enhanced typing effect for hero section
const heroTitle = document.querySelector('#home h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Start typing effect when element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(heroTitle);
}

// Add floating animation to social icons
const socialIcons = document.querySelectorAll('#home .fa-github, #home .fa-linkedin, #home .fa-twitter');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('#home a[href]');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// Add scroll down button animation
const scrollDownBtn = document.querySelector('#home .fa-chevron-down');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add background animation
const backgroundElements = document.querySelectorAll('#home .absolute.inset-0.z-0 > div');
backgroundElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
});

// Add resume download functionality
const resumeBtn = document.querySelector('a[href="#"]');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically trigger the resume download
        // For now, we'll just show a message
        const message = document.createElement('div');
        message.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full';
        message.textContent = 'Resume download will be available soon!';
        document.body.appendChild(message);

        // Animate in
        setTimeout(() => {
            message.classList.remove('translate-x-full');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            message.classList.add('translate-x-full');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    });
}

// Add parallax effect to background elements
const parallaxElements = document.querySelectorAll('.absolute.inset-0.z-0 > div');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    parallaxElements.forEach(element => {
        const speed = element.classList.contains('animation-delay-1000') ? 0.2 : 0.3;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Add cursor effect
const cursor = document.createElement('div');
cursor.className = 'fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Hide cursor when not moving
let cursorTimeout;
document.addEventListener('mousemove', () => {
    cursor.style.opacity = '1';
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
        cursor.style.opacity = '0';
    }, 1000);
});

// Add hover effect to cursor
const interactiveElements = document.querySelectorAll('a, button, .hover\\:scale-105');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for mobile navigation
const style = document.createElement('style');
style.textContent = `
    .nav-active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 8vh;
        right: 0;
        height: 92vh;
        background-color: white;
        width: 50%;
        align-items: center;
        justify-content: space-around;
        transform: translateX(0%);
        transition: transform 0.5s ease-in;
    }

    .nav-links li {
        opacity: 0;
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;
document.head.appendChild(style);

// Enhanced About section animations
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    // Background animations
    const backgroundElements = aboutSection.querySelectorAll('.absolute.inset-0.z-0 > div');
    backgroundElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });

    // Card animations
    const cards = aboutSection.querySelectorAll('.bg-white');
    cards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        // Add animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';

                    // Animate icons
                    const icon = card.querySelector('.text-primary');
                    if (icon) {
                        icon.style.transition = 'transform 0.3s ease';
                    }

                    // Animate list items
                    const listItems = card.querySelectorAll('li');
                    listItems.forEach((item, itemIndex) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateX(-10px)';
                        setTimeout(() => {
                            item.style.transition = `opacity 0.3s ease ${itemIndex * 0.1}s, transform 0.3s ease ${itemIndex * 0.1}s`;
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, 300);
                    });

                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(card);

        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

            // Rotate icon
            const icon = card.querySelector('.text-primary');
            if (icon) {
                icon.style.transform = 'rotate(12deg)';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';

            // Reset icon rotation
            const icon = card.querySelector('.text-primary');
            if (icon) {
                icon.style.transform = 'rotate(0)';
            }
        });
    });

    // Timeline animations
    const timelineItems = aboutSection.querySelectorAll('.border-l-2');
    timelineItems.forEach((item, index) => {
        // Initial state
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';

        // Add animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';

                    // Animate the ping effect
                    const pingDot = item.querySelector('.animate-ping');
                    if (pingDot) {
                        pingDot.style.animation = 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite';
                    }

                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(item);
    });

    // Skills tag animations
    const skillTags = aboutSection.querySelectorAll('.bg-primary\\/10');
    skillTags.forEach((tag, index) => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-2px)';
            tag.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0)';
            tag.style.boxShadow = 'none';
        });
    });
}

// Add keyframes for ping animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ping {
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 