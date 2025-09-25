(function () {
  // ======= CONFIGURE AQUI =======
  const PARAM_NAME = 'inscricaocofirmado';     // nome do parâmetro na URL
  const REQUIRED_KEY = 'IiEwS6fBycbUXhXdP7hrgo9x0lMRTkJFQvsAsKyioODoOmJeyKrRQAdEhdq53wGISbsDBpT3XpDsDRaqImjevRnfLks5NMDW5Qqxr9YpMPrx7hhX3GEfK4p064b5RAys';    // defina sua chave única
  const PIXEL_FILE = '/js/pixel.js';           // caminho do seu pixel.js
  const FIRE_ONCE_FLAG = 'lead_obrigado_fired';// evita disparar duplicado ao atualizar

  try {
    const params = new URLSearchParams(window.location.search);
    const cameFromPayment = params.get(PARAM_NAME) === REQUIRED_KEY;

    // Evita duplicidade por refresh/volta de navegação
    const alreadyFired = sessionStorage.getItem(FIRE_ONCE_FLAG) === '1';

    if (cameFromPayment && !alreadyFired) {
      // Passa informações para o pixel.js (disponível em window)
      window.__LEAD_OBRIGADO_CTX__ = {
        paramName: PARAM_NAME,
        key: REQUIRED_KEY,
        rawQuery: window.location.search
      };

      // Carrega pixel.js dinamicamente
      var s = document.createElement('script');
      s.src = PIXEL_FILE;
      s.async = true;
      s.onload = function () {
        // Marca que já disparamos nesta aba/janela
        sessionStorage.setItem(FIRE_ONCE_FLAG, '1');
      };
      document.head.appendChild(s);
    }
  } catch (e) {
    console.error('Pixel loader error:', e);
  }
})();
