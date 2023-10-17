//appear on scroll and load
// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
});
  
  // Observe each fade-in element
fadeElements.forEach((element) => {
    observer.observe(element);
});

  //stagger appear for projects titles
staggeredElements.forEach((element, index) => {
    const delay = 100 * index; 
  
    setTimeout(() => {
      element.style.opacity = 1;
    }, delay);
});


