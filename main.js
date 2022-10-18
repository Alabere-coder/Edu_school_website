// CHANGING-NAVBAR
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
<<<<<<< HEAD
})




// SHOWING/HIDDING FAQS ANS

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icons
        // const icon = faq.querySelectorAll('.faq__icon i');
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})




=======
})
>>>>>>> 8a3c5d6b99414cbaafcb3e1aea1b5fa469ac4b2f
