// Simple retro intro fade-in
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = 'opacity 1.5s ease';
      document.body.style.opacity = 1;
    }, 100);
  });
  