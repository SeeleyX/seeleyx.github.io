//appear on scroll and load
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
});

//calling the function for elements that have the fade-in class
fadeElements.forEach((element) => {
    observer.observe(element);
});

staggeredElements.forEach((element, index) => {
    const delay = 100 * index; 
  
    setTimeout(() => {
      element.style.opacity = 1;
    }, delay);
});


