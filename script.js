function toggleLanguage() {
    const currentLang = document.body.getAttribute('lang');
    const newLang = currentLang === 'sv' ? 'en' : 'sv';
    document.body.setAttribute('lang', newLang);
  
    // Swap flag icon
    const flag = document.getElementById('lang-flag');
    if (flag) {
      flag.src = newLang === 'sv' ? 'uk.png' : 'sweden.png';
    }
  
    // Translate all elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
      if (!el.dataset.original) {
        el.dataset.original = el.textContent.trim();
      }
      const original = el.dataset.original;
      const translated = translations[newLang][original];
      el.textContent = translated || original;
    });
  }
  