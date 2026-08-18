// ГОРНИЦА — vanilla JS interactions
(function(){
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Sticky header state
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile navigation
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    mobileMenu?.classList.remove('open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Scroll reveal — lightweight Intersection Observer instead of a library.
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Graceful video fallback: if the local hero video is unavailable, the remote demo source remains.
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Autoplay can be blocked in some contexts. The muted + playsinline attributes
      // usually satisfy browser policies; poster image remains as the fallback.
    });
  }

  // Static form UX. In production, replace mailto with the studio's backend/CRM endpoint.
  const form = document.querySelector('.booking-form');
  form?.addEventListener('submit', () => {
    window.setTimeout(() => {
      // Mail client opens because action="mailto:". This hook can be replaced by analytics.
    }, 100);
  });

  /*
    VK API FUTURE INTEGRATION
    -------------------------
    NEWS FEED:
      Fetch recent studio posts and render into #vk-news.
      Suggested data flow:
      1) Call your server-side proxy for VK API (avoid exposing API secrets in client JS).
      2) Normalize response to: { date, title, excerpt, image, url }[]
      3) Inject accessible article cards into #vk-news.

    ANNOUNCEMENTS:
      Fetch VK posts containing your chosen hashtag and render into #vk-announcements.
      Example hashtag placeholder: #гори_лица

    Keep the final VK access token on the server, not in this static file.
  */

  // Optional future hooks:
  // window.renderVkNews = (items) => { ... }
  // window.renderVkAnnouncements = (items) => { ... }
})();
