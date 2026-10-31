(() => {
  'use strict';
  const config = window.MATHPHY_CONFIG || {};
  const nav = document.querySelector('#main-nav');
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Menü megnyitása');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  if (config.price && config.price.trim()) {
    document.getElementById('price-answer').textContent = `Az óradíj: ${config.price.trim()}.`;
  }
  if (config.lessonFormat && config.lessonFormat.trim()) {
    document.getElementById('format-answer').textContent = config.lessonFormat.trim();
  }
  if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    const link = document.createElement('a');
    link.href = `mailto:${config.email}`;
    link.textContent = config.email;
    document.getElementById('contact-link').appendChild(link);
  }
  const booking = document.getElementById('booking-content');
  const url = (config.calendlyUrl || '').trim();
  // Csak valódi Calendly HTTPS-linket ágyazunk be.
  if (/^https:\/\/(?:[a-z0-9-]+\.)?calendly\.com\/[a-z0-9_\-]+\/[a-z0-9_\-]+(?:\?.*)?$/i.test(url)) {
    booking.replaceChildren();
    const widget = document.createElement('div');
    widget.className = 'calendly-inline-widget';
    widget.setAttribute('data-url', url);
    widget.style.minWidth = '320px';
    widget.style.height = '740px';
    booking.appendChild(widget);
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onerror = () => {
      booking.replaceChildren();
      const fallback = document.createElement('p');
      fallback.textContent = 'A naptár jelenleg nem tölthető be. '; 
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.textContent = 'Foglalás megnyitása a Calendly oldalán';
      fallback.appendChild(a);
      booking.appendChild(fallback);
    };
    document.body.appendChild(script);
    const help = document.getElementById('booking-help');
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.textContent = 'Foglalás megnyitása külön ablakban ↗';
    help.appendChild(a);
  }
})();
