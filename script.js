console.log("Let's-a-go!");

// Shrink header on scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('header.hero');
  if(window.scrollY > 50){
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});

// Testimonials carousel
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    scrollLock: true,
    rewind: true,
    duration: 0.5
  });

  new Glider(document.querySelector('.gallery-glider'), {
    slidesToShow: 1,
    dots: '.gallery-dots',
    draggable: true,
    scrollLock: true,
    rewind: true,
    duration: 0.5
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-glider img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
