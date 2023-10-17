

const pointer = document.querySelector('.pointer');
const aTags = document.getElementsByTagName('a');
const bTags = document.getElementsByTagName('button');
const summaryText = document.querySelector('.summary');
const header = document.querySelector('.header')
const projects = document.querySelector('.project');
const fadeElements = document.querySelectorAll('.fade-in');
const staggeredElements = document.querySelectorAll('.staggered');

const header1 = document.querySelector('.headercurve1');
const header2 = document.querySelector('.headercurve2');
const footer1 = document.querySelector('.footercurve1');
const footer2 = document.querySelector('.footercurve2');


//custom mouse effects
document.addEventListener('mousemove', (event) => {
    const pointerStyle = getComputedStyle(pointer);
    const pointerSize = parseInt(pointerStyle.getPropertyValue('width'), 10);
    
    const pointerX = event.clientX - pointerSize / 2;
    const pointerY = event.clientY - pointerSize / 2;
    
    pointer.style.left = pointerX + 'px';
    pointer.style.top = pointerY + 'px';
    pointer.classList.add('visible');
});

Array.from(aTags).forEach((aTag) => {
    aTag.addEventListener('mouseover', () => {
        if (aTag.classList.contains('btn')) {
            pointer.classList.add('button-hovered');
        } else {
            pointer.classList.add('hovered');
        }
    });

    aTag.addEventListener('mouseout', () => {
        if (aTag.classList.contains('btn')) {
            pointer.classList.remove('button-hovered');
        } else {
            pointer.classList.remove('hovered');
        }
    });
});

//projects roll menu 
function appearcontent(e) {
    e.preventDefault();
  
    var parentElement = e.target.parentNode;
    var firstChild = parentElement.firstElementChild;
    var hiddenContent = parentElement.querySelector('.hidden-content');
    var contentHeight = hiddenContent.scrollHeight + 30 + 'px';

    hiddenContent.classList.toggle('appear-hidden-content');
    firstChild.classList.toggle('seen');
    
    if (hiddenContent.classList.contains('appear-hidden-content')) {
        hiddenContent.style.height = contentHeight;
      } else {
        hiddenContent.style.height = '0';
      }
}

//adding active class to active page
var currentPageUrl = window.location.href;
var navigationLinks = document.querySelectorAll('.header li a');

navigationLinks.forEach(function(link) {
  if (link.href === currentPageUrl) {
    link.parentNode.classList.add('active');
  }
});
//for small screens justify content left if on href-index.html
function checkForSmall(){
    if (currentPageUrl === navigationLinks[0].href && window.innerWidth < 475) {
        header.classList.add('just-left');
    }else{
        header.classList.remove('just-left');
    }
}

window.addEventListener('resize', function() {
    checkForSmall();
});
//parallax effect of curves
window.addEventListener('scroll', function() {

    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    header1.style.top = `${0 - 0.3*scrollY}px`;
    header2.style.top = `${0 - 0.6*scrollY}px`;
    
    footer1.style.bottom = `${(maxScroll - scrollY)* 0.1}px`;
    footer2.style.bottom = `${(maxScroll - scrollY)* 0.2}px`;
});
