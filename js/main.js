// Scroll - top

const mainCard = document.querySelector('main');
const scrollTopBtn = document.querySelector('.scroll-top');

if (mainCard && scrollTopBtn) {
  mainCard.addEventListener('scroll', () => {
    if (mainCard.scrollTop > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    mainCard.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}