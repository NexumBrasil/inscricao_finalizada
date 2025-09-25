(function () {
    // ===== CONFIGURÁVEIS =====
    const PARAM_NAME = "pagamentocofirmado"; // exatamente como você escreveu
    const KEY_UNICA  = "SUA_CHAVE_UNICA_AQUI"; // defina a sua
    // Opcional: só carrega se veio do seu gateway
    // const PAGAMENTO_HOST_PERMITIDO = "seu-gateway.com";

    // ===== UTIL =====
    const once = (fn) => {
      const FLAG = "pixel_meta_loaded_ok";
      if (sessionStorage.getItem(FLAG)) return false;
      fn();
      sessionStorage.setItem(FLAG, "1");
      return true;
    };

    function getParam(name) {
      try {
        const usp = new URLSearchParams(location.search);
        return usp.get(name);
      } catch (_) {
        // Fallback simples
        const m = new RegExp("[?&]" + name + "=([^&#]*)").exec(location.search);
        return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
      }
    }

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }

    // ===== REGRA DE ENTRADA =====
    const chave = getParam(PARAM_NAME);
    const chaveOk = (chave && chave === KEY_UNICA);

    // Opcional: validar referrer do gateway
    // const refOk = document.referrer && document.referrer.includes(PAGAMENTO_HOST_PERMITIDO);

    if (chaveOk /* && refOk */) {
      once(() => {
        // Passe também dados da compra via URL, se quiser (ex.: ?valor=123.45&pedido=ABC123)
        const valor  = parseFloat(getParam("valor") || "0");
        const pedido = getParam("pedido") || "";

        // Disponibiliza para o pixel.js ler (sem poluir global permanentemente)
        window.__PIXEL_META_DATA__ = {
          value: isFinite(valor) ? valor : 0,
          orderId: pedido,
          currency: "BRL"
        };

        // Carrega o script do Pixel
        loadScript("/js/pixel.js").catch(console.error);
      });
    }
  })();
