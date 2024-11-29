// Select all parallax layers
// const layers = document.querySelectorAll('.parallax-layer');
const b3 = document.getElementById('b3')
const b2 = document.getElementById('b2')
const b1 = document.getElementById('b1')
const t1 = document.getElementById('t1')
// Add scroll event listener
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // Get current scroll position

//   const deptha = 1 * 0.1; 
  const depthb = 2 * 0.1;
  const depthc = 3 * 0.2;
//   const atranslateY =  scrollTop * deptha;
  const btranslateY =  scrollTop * depthb;
  const ctranslateY =  scrollTop * depthc;

  // Apply transformation
  b3.style.transform = `translateY(${-ctranslateY}px)`;
  b2.style.transform = `translateY(${-btranslateY}px)`;
  t1.style.transform = `translateY(${ctranslateY}px)`;
//   b1.style.transform = `translateY(${btranslateY}px)`;

});