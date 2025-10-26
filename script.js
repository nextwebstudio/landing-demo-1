// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for reveal animations
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Simple slider
const track = document.querySelector('.slider__track');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');

if (track && prev && next) {
  const scrollBy = () => Math.min(560, track.clientWidth * 0.8);
  prev.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  scrollBy(), behavior: 'smooth' }));
}

// Form handler (demo)
window.handleSubmit = (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const ok = e.target.querySelector('.form__success');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
  setTimeout(() => {
    ok.hidden = false;
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Request';
    e.target.reset();
  }, 900);
  return false;
};
