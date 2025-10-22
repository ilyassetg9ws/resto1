const links = document.querySelectorAll('.nav-link');
const underline = document.querySelector('.underline');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const { offsetLeft, offsetWidth } = link;
    underline.style.width = offsetWidth + 'px';
    underline.style.left = offsetLeft + 'px';
  });
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(link.dataset.page).classList.add('active');
  });
});
document.querySelector('.navbar').addEventListener('mouseleave',()=>underline.style.width=0);

// Background slideshow
const slides = document.querySelectorAll('.slide');
let i = 0;
slides[i].classList.add('active');
setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 5000);

// Menu hover switching
const categories = document.querySelectorAll('.category');
const sections = document.querySelectorAll('.menu-section');
categories.forEach(cat=>{
  cat.addEventListener('mouseenter',()=>{
    sections.forEach(s=>s.classList.remove('active'));
    document.querySelector(`.${cat.dataset.type}`).classList.add('active');
  });
});

// Reservation popup
const popup=document.getElementById('reservationPopup');
const openBtns=[document.getElementById('openReservation'),document.getElementById('footerReserve')];
const closeBtn=document.querySelector('.close');
openBtns.forEach(btn=>btn.addEventListener('click',()=>popup.style.display='flex'));
closeBtn.addEventListener('click',()=>popup.style.display='none');
window.addEventListener('click',e=>{if(e.target===popup)popup.style.display='none';});

// Reservation submit alert
document.getElementById('resForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Your reservation has been successfully sent!');
  popup.style.display='none';
});
