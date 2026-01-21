// Initialize Animate On Scroll
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('#mainNav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-sm');
            navbar.classList.remove('py-3');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('bg-white', 'shadow-sm', 'py-2');
            navbar.classList.add('py-3');
        }
    });
});

// Service Modal Function
function openServiceModal(title, description) {
    const modalTitle = document.getElementById('serviceModalLabel');
    const modalBody = document.getElementById('serviceModalBody');

    // Set content
    modalTitle.textContent = title;
    modalTitle.classList.add('text-red', 'fw-bold');

    // For a real app, you might fetch more details via AJAX here using the Title or an ID.
    // For now, we reuse the description passed or expand it.
    modalBody.innerHTML = `
        <p class="text-muted">${description}</p>
        <p class="mt-3 text-muted small">
            Contact us to get a personalized quote for this service. We are available 24/7 to assist you.
        </p>
    `;

    // Show Modal
    const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    serviceModal.show();
}
