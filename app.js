/* ==========================================================================
   APP CONTROLLER - LOTAS MAKEUP STUDIO & SALON
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initHeaderScroll();
    initLiveHours();
    initInteractiveBg(); // Canvas particle system
    
    // Page-specific initializations
    if (document.getElementById('testimonial-carousel')) {
        initTestimonialCarousel();
    }
    if (document.getElementById('booking-wizard-form')) {
        initBookingWizard();
    }
    if (document.getElementById('services-grid-container')) {
        initServiceFilters();
    }
    if (document.getElementById('reviews-feed-container')) {
        initReviewsFeed();
    }
});

/* ==========================================================================
   THEME SWITCHING SYSTEM (Dark & Light Theme)
   ========================================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<span class="icon">&#9790;</span>'; // Moon icon
    } else {
        document.body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<span class="icon">&#9788;</span>'; // Sun icon
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        if (isLight) {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<span class="icon">&#9790;</span>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<span class="icon">&#9788;</span>';
        }
    });
}

/* ==========================================================================
   MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileNav() {
    const burger = document.getElementById('burger-menu-btn');
    const nav = document.getElementById('navbar-links');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!burger || !nav) return;
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        nav.classList.toggle('open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('open');
            nav.classList.remove('open');
        });
    });
}

/* ==========================================================================
   HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   LIVE SALON OPEN/CLOSED INDICATOR
   ========================================================================== */
function initLiveHours() {
    const statusBadges = document.querySelectorAll('.open-status-badge');
    if (statusBadges.length === 0) return;
    
    function checkHours() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timeValue = hours * 60 + minutes;
        
        // Parlour timing: 10:30 AM to 8:30 PM (every day)
        const openTime = 10 * 60 + 30; 
        const closeTime = 20 * 60 + 30; 
        
        let isOpen = false;
        
        if (timeValue >= openTime && timeValue < closeTime) {
            isOpen = true;
        }
        
        statusBadges.forEach(badge => {
            const statusDot = badge.querySelector('.status-dot');
            const statusText = badge.querySelector('.status-text');
            
            if (isOpen) {
                badge.className = 'open-status-badge open';
                statusDot.className = 'status-dot pulsing';
                statusText.textContent = 'Open Now';
            } else {
                badge.className = 'open-status-badge closed';
                statusDot.className = 'status-dot';
                statusText.textContent = 'Closed Now';
            }
        });
    }
    
    checkHours();
    setInterval(checkHours, 60000);
}

/* ==========================================================================
   SUBTLE CANVAS PARTICLE BACKGROUND (Interactive & Lightweight)
   ========================================================================== */
function initInteractiveBg() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const particles = [];
    const maxParticles = Math.min(65, Math.floor((width * height) / 20000)); // Cap particles for performance
    const mouse = { x: null, y: null, radius: 140 };
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.size = Math.random() * 2 + 1;
            // Mixed theme colors (purple to pink)
            this.color = Math.random() > 0.5 ? 'rgba(126, 87, 194, ' : 'rgba(236, 64, 122, ';
            this.alpha = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Screen boundaries wrap
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
            
            // Mouse push effect
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.alpha + ')';
            ctx.fill();
        }
    }
    
    // Instantiate particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections
        const isLightTheme = document.body.classList.contains('light-theme');
        const lineColor = isLightTheme ? 'rgba(126, 87, 194, 0.03)' : 'rgba(255, 255, 255, 0.03)';
        
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/* ==========================================================================
   TESTIMONIALS CAROUSEL
   ========================================================================== */
function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    showSlide(0);
    startAutoSlide();
}

/* ==========================================================================
   SERVICES CATEGORY TABS FILTERING
   ========================================================================== */
function initServiceFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.grid-item');
    
    if (tabs.length === 0 || cards.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-filter');
            
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   BOOKING SYSTEM WIZARD
   ========================================================================== */
function initBookingWizard() {
    const form = document.getElementById('booking-wizard-form');
    if (!form) return;
    
    const steps = document.querySelectorAll('.wizard-step');
    const panels = document.querySelectorAll('.booking-panel');
    const prevBtn = document.getElementById('booking-prev-btn');
    const nextBtn = document.getElementById('booking-next-btn');
    const optionCards = document.querySelectorAll('.selector-option');
    
    let currentStep = 1;
    let selectedServices = [];
    
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-service-id');
            const name = card.getAttribute('data-service-name');
            const price = parseInt(card.getAttribute('data-service-price'), 10);
            
            const index = selectedServices.findIndex(s => s.id === id);
            
            if (index > -1) {
                selectedServices.splice(index, 1);
                card.classList.remove('selected');
            } else {
                selectedServices.push({ id, name, price });
                card.classList.add('selected');
            }
            
            updateBookingSummary();
        });
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    const preselectServiceId = urlParams.get('service');
    if (preselectServiceId) {
        const matchingCard = document.querySelector(`.selector-option[data-service-id="${preselectServiceId}"]`);
        if (matchingCard) {
            matchingCard.click();
        }
    }
    
    function updateBookingSummary() {
        const summaryServicesList = document.getElementById('summary-services-list');
        const summaryTotal = document.getElementById('summary-total-price');
        
        if (!summaryServicesList || !summaryTotal) return;
        
        summaryServicesList.innerHTML = '';
        let total = 0;
        
        if (selectedServices.length === 0) {
            summaryServicesList.innerHTML = '<div class="summary-row" style="color: var(--text-gray-light)">No services selected yet.</div>';
        } else {
            selectedServices.forEach(service => {
                total += service.price;
                const row = document.createElement('div');
                row.className = 'summary-row';
                row.innerHTML = `
                    <span>${service.name}</span>
                    <span>₹${service.price}</span>
                `;
                summaryServicesList.appendChild(row);
            });
        }
        
        summaryTotal.textContent = `₹${total}`;
    }
    
    function updateWizardUI() {
        panels.forEach((panel, idx) => {
            if (idx + 1 === currentStep) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
        
        steps.forEach((step, idx) => {
            const stepNum = idx + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNum === currentStep) {
                step.classList.add('active');
            } else if (stepNum < currentStep) {
                step.classList.add('completed');
            }
        });
        
        if (currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
            nextBtn.textContent = 'Next: Date & Time';
        } else if (currentStep === 2) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = 'Next: Contact Info';
        } else if (currentStep === 3) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = 'Confirm Booking';
        }
    }
    
    function validateStep(step) {
        if (step === 1) {
            if (selectedServices.length === 0) {
                alert('Please select at least one service to proceed.');
                return false;
            }
            return true;
        }
        
        if (step === 2) {
            const dateInput = document.getElementById('booking-date');
            const timeInput = document.getElementById('booking-time');
            
            if (!dateInput.value || !timeInput.value) {
                alert('Please select both a date and preferred time slot.');
                return false;
            }
            
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                alert('Cannot book for a date in the past. Please select a valid date.');
                return false;
            }
            
            return true;
        }
        
        if (step === 3) {
            const name = document.getElementById('client-name');
            const phone = document.getElementById('client-phone');
            
            if (!name.value.trim()) {
                alert('Please enter your full name.');
                return false;
            }
            
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(phone.value.trim())) {
                alert('Please enter a valid 10-digit mobile number.');
                return false;
            }
            
            return true;
        }
        
        return true;
    }
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!validateStep(currentStep)) return;
        
        if (currentStep < 3) {
            currentStep++;
            updateWizardUI();
        } else {
            submitBooking();
        }
    });
    
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 1) {
            currentStep--;
            updateWizardUI();
        }
    });
    
    function submitBooking() {
        const nameVal = document.getElementById('client-name').value;
        const dateVal = document.getElementById('booking-date').value;
        const timeVal = document.getElementById('booking-time').value;
        
        const refId = 'LBL-' + Math.floor(100000 + Math.random() * 900000);
        
        document.getElementById('modal-booking-ref').textContent = refId;
        document.getElementById('modal-client-name').textContent = nameVal;
        document.getElementById('modal-booking-date').textContent = `${dateVal} at ${timeVal}`;
        
        const overlay = document.getElementById('booking-success-modal');
        if (overlay) {
            overlay.classList.add('active');
        }
        
        form.reset();
        selectedServices = [];
        optionCards.forEach(c => c.classList.remove('selected'));
        updateBookingSummary();
        currentStep = 1;
        updateWizardUI();
    }
    
    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const overlay = document.getElementById('booking-success-modal');
            if (overlay) {
                overlay.classList.remove('active');
            }
        });
    }
    
    updateWizardUI();
    updateBookingSummary();
}

/* ==========================================================================
   DYNAMIC REVIEWS FEED ENGINE
   ========================================================================== */
function initReviewsFeed() {
    const feed = document.getElementById('reviews-feed-container');
    const loadMoreBtn = document.getElementById('load-more-reviews-btn');
    const reviewsCountEl = document.getElementById('reviews-count-display');
    
    if (!feed || typeof reviewsData === 'undefined') return;
    
    let reviewsRendered = 0;
    const chunkSize = 18; 
    
    if (reviewsCountEl) {
        reviewsCountEl.textContent = reviewsData.length;
    }
    
    function renderNextReviews() {
        const nextBatch = reviewsData.slice(reviewsRendered, reviewsRendered + chunkSize);
        
        nextBatch.forEach(review => {
            const card = document.createElement('div');
            card.className = 'glass-card review-card';
            
            let starString = '';
            for (let s = 0; s < 5; s++) {
                if (s < review.rating) {
                    starString += '★';
                } else {
                    starString += '☆';
                }
            }
            
            const initial = review.name.charAt(0).toUpperCase();
            
            // NOTE: Location has been completely removed. Only displays name and date.
            card.innerHTML = `
                <div class="review-card-header">
                    <div class="review-avatar-small">${initial}</div>
                    <div class="review-meta">
                        <h4>${review.name}</h4>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="stars">${starString}</div>
                <p class="review-card-text">"${review.text}"</p>
            `;
            
            feed.appendChild(card);
        });
        
        reviewsRendered += nextBatch.length;
        
        if (reviewsRendered >= reviewsData.length && loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', renderNextReviews);
    }
    
    renderNextReviews();
}
