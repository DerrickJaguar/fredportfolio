// Add to existing script.js

// Testimonials Dynamic Management
function createTestimonialCards() {
    const testimonials = [
        {
            name: "Peter Okello",
            title: "Coffee Farm Owner, Kapchorwa",
            quote: "John's expertise transformed our coffee plantation's productivity and sustainability. His innovative approaches have been game-changing for our farm's performance.",
            rating: 5,
            avatar: "images/avatar-1.png"
        },
        {
            name: "Mary Nalwoga",
            title: "Agricultural Cooperative Leader",
            quote: "As a leader of an agricultural cooperative, I've seen many consultants, but John stands out. His deep understanding of local agricultural challenges is remarkable.",
            rating: 4.5,
            avatar: "images/avatar-3.png"
        },
        {
            name: "Samuel Mutembei",
            title: "Agricultural Technology Implementer",
            quote: "John's consultation helped us implement water-efficient irrigation techniques that significantly reduced our operational costs and improved crop yield.",
            rating: 5,
            avatar: "images/avatar-2.png"
        }
    ];

    const container = document.querySelector('.testimonials-container');
    
    // Clear existing content
    container.innerHTML = '';

    // Create testimonial cards
    testimonials.forEach(testimonial => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('testimonial-card');
        
        // Generate star rating HTML
        const generateStarRating = (rating) => {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(rating)) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= rating) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        };

        // Set card HTML
        card.innerHTML = `
            <div class="testimonial-avatar">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
                <div class="avatar-border"></div>
            </div>
            <div class="testimonial-content">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                    <p>${testimonial.quote}</p>
                    <i class="fas fa-quote-right"></i>
                </div>
                <div class="testimonial-author">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.title}</p>
                </div>
                <div class="testimonial-rating">
                    ${generateStarRating(testimonial.rating)}
                </div>
            </div>
        `;

        // Add to container
        container.appendChild(card);
    });
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', createTestimonialCards);

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

// PDF Report Generator (mock functionality)
function generateConsultationReport() {
    alert('Consultation Report Generation Feature (Prototype)\nIn a real application, this would generate a PDF with consultation details.');
    
    // Placeholder for PDF generation logic
    // Typically, this would involve:
    // 1. Collecting form data
    // 2. Sending to a backend service
    // 3. Generating a PDF
    // 4. Offering download
}

// Extend form submission to include report generation
document.getElementById('consultation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Existing form submission logic
    const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        message: e.target[3].value
    };

    alert('Consultation Request Received: ' + formData.name);
    
    // Offer to generate a consultation report
    generateConsultationReport();
    
    // Reset form
    e.target.reset();
});