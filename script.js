document.addEventListener('DOMContentLoaded', () => {
    
    // --- अक्षर-به-अक्षर एनीमेशन का लॉजिक ---
    const linesToAnimate = [
        document.getElementById('line1'),
        document.getElementById('line2')
    ];
    const numbersToAnimate = document.querySelectorAll('#line3 span');

    let animationDelay = 0.3; // एनीमेशन शुरू होने में देरी
    const delayIncrement = 0.05; // हर अक्षर के बीच का समय

    // "Welcome to" और "Earning Tech" को एनिमेट करें
    linesToAnimate.forEach(line => {
        const text = line.textContent;
        line.innerHTML = ''; // लाइन को खाली करें
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            // स्पेस को दिखने लायक बनाएं
            if (char === ' ') span.innerHTML = ' ';
            span.style.animationDelay = `${animationDelay}s`;
            line.appendChild(span);
            animationDelay += delayIncrement;
        }
    });

    // "4" और "7" को एनिमेट करें
    numbersToAnimate.forEach(numSpan => {
        numSpan.style.animationDelay = `${animationDelay}s`;
        animationDelay += delayIncrement;
    });

    // --- पॉप-अप (Modal) का लॉजिक ---
    const proofBtn = document.getElementById('proof-btn');
    const modal = document.getElementById('proof-modal');
    
    if (proofBtn && modal) {
        const closeModalBtn = modal.querySelector('.modal-close-btn');

        proofBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});