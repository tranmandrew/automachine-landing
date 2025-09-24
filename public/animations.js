// Automachine Angular Landing Page Animations - Memory Optimized
document.addEventListener('DOMContentLoaded', function() {
    let scrollTimeout;
    const intervals = [];
    const timeouts = [];

    // Throttled scroll handler to prevent excessive calls
    function throttleScroll(func, delay) {
        return function(...args) {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                func.apply(this, args);
                scrollTimeout = null;
            }, delay);
        };
    }

    // Scroll-triggered animations (throttled)
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.process-step, .metric-item, .expertise-item');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-fadeIn');
            }
        });
    }

    // Parallax effect for geometric elements (throttled and optimized)
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.geometric-pattern, .angular-decoration');

        if (parallax.length === 0) return; // Exit early if no elements

        parallax.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    }

    // Diagonal hover effects for service tiers
    function initServiceTierEffects() {
        const serviceTiers = document.querySelectorAll('.service-tier');

        serviceTiers.forEach(tier => {
            tier.addEventListener('mouseenter', function() {
                this.style.transform = 'skewY(2deg) translateY(-10px) scale(1.02)';
            });

            tier.addEventListener('mouseleave', function() {
                this.style.transform = 'skewY(2deg)';
                if (this.classList.contains('featured')) {
                    this.style.transform = 'skewY(-2deg) scale(1.05)';
                }
            });
        });
    }

    // Glitch effect for main title (with cleanup)
    function initGlitchEffect() {
        const title = document.querySelector('h1');
        if (title) {
            const glitchInterval = setInterval(() => {
                if (Math.random() < 0.1) { // 10% chance every interval
                    title.style.textShadow = '2px 0 var(--blue-electric), -2px 0 var(--neon-green)';
                    const glitchTimeout = setTimeout(() => {
                        title.style.textShadow = 'none';
                    }, 150);
                    timeouts.push(glitchTimeout);
                }
            }, 2000);
            intervals.push(glitchInterval);
        }
    }

    // Angular progress indicator
    function createProgressIndicator() {
        const progressBar = document.createElement('div');
        progressBar.className = 'angular-progress';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = scrolled + '%';
            }
        });
    }

    // Geometric background animation (with cleanup and reduced frequency)
    function animateGeometricBackground() {
        const backgrounds = document.querySelectorAll('.geometric-background');

        if (backgrounds.length === 0) return; // Exit if no elements

        backgrounds.forEach(bg => {
            let rotation = 0;
            const bgInterval = setInterval(() => {
                rotation += 0.2; // Reduced rotation speed
                bg.style.transform = `rotate(${rotation}deg)`;
            }, 200); // Reduced frequency from 100ms to 200ms
            intervals.push(bgInterval);
        });
    }

    // CTA button magnetic effect
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');

        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }

    // Initialize all animations
    handleScrollAnimations();
    initServiceTierEffects();
    initGlitchEffect();
    createProgressIndicator();
    animateGeometricBackground();
    initMagneticButtons();

    // Event listeners with throttling
    const throttledScroll = throttleScroll(() => {
        handleScrollAnimations();
        handleParallax();
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup function for when page unloads
    window.addEventListener('beforeunload', () => {
        // Clear all intervals
        intervals.forEach(interval => clearInterval(interval));
        // Clear all timeouts
        timeouts.forEach(timeout => clearTimeout(timeout));
        // Clear scroll timeout
        if (scrollTimeout) clearTimeout(scrollTimeout);
        // Remove scroll listener
        window.removeEventListener('scroll', throttledScroll);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add CSS for animation classes
const animationStyles = `
.animate-fadeIn {
    animation: fadeInUp 0.8s ease forwards;
}

.angular-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--blue-electric), var(--neon-green));
    width: 0%;
    transition: width 0.3s ease;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

@media (max-width: 768px) {
    .angular-progress {
        clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    }

    .progress-fill {
        clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
    }
}
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);