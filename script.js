// Hero 浮动标签随滚动淡出
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = window.innerHeight;
    const tiles = document.querySelectorAll('.logo-tile');
    if (scrollTop > heroHeight * 0.4) {
        const progress = Math.min((scrollTop - heroHeight * 0.4) / (heroHeight * 0.5), 1);
        const opacity = 0.92 * (1 - progress);
        tiles.forEach(p => { p.style.opacity = Math.max(opacity, 0); });
    } else {
        tiles.forEach(p => { p.style.opacity = '0.92'; });
    }
}, { passive: true });

// 导航高亮当前区块
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(a => {
                a.style.color = a.getAttribute('href') === '#' + id ? 'var(--accent)' : '';
            });
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));
