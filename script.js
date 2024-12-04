document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section, .nex-service-card");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((el) => observer.observe(el));
});
