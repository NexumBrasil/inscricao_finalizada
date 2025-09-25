(function () {
  // ======= CONFIGURE AQUI =======
  const PARAM_NAME = 'inscricaocofirmado';     // nome do parâmetro na URL
  const REQUIRED_KEY = 'IiEwS6fBycbUXhXdP7hrgo9x';    // defina sua chave única
    const PIXEL_FILE   = '/js/pixel.js';       // caminho do seu arquivo
  const FIRE_ONCE    = 'lead_obrigado_fired';// evita duplicar na mesma aba

  try {
    const qs = new URLSearchParams(window.location.search);
    const ok = qs.get(PARAM_NAME) === REQUIRED_KEY;
    const already = sessionStorage.getItem(FIRE_ONCE) === '1';

    if (ok && !already) {
      // Passa contexto (opcional) para o pixel.js
      window.__LEAD_OBRIGADO_CTX__ = {
        paramName: PARAM_NAME,
        key: REQUIRED_KEY,
        rawQuery: window.location.search
      };

      // Carrega pixel.js dinamicamente
      var s = document.createElement('script');
      s.src = PIXEL_FILE; // ex: /js/pixel.js
      s.async = true;
      s.onload = function () {
        // Marca que já disparamos nesta aba
        sessionStorage.setItem(FIRE_ONCE, '1');
      };
      document.head.appendChild(s);
    }
  } catch (err) {
    console.error('Pixel loader error:', err);
  }
})();
