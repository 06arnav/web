document.addEventListener("DOMContentLoaded", function() {
    // --- Typing Animation ---
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const textToType = "System.out.println(\"Arnav Agrawal\");";
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typingTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed here (in ms)
            }
        }
        type();
    }

    // --- Scroll Animation for Cards ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Optional: remove the class to re-trigger animation on scroll up
                // entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
