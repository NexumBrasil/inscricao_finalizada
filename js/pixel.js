// =============== BASE DO META PIXEL ===============
!function(f,b,e,v,n,t,s){
  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

// ===== SUBSTITUA PELO SEU PIXEL ID =====
fbq('init', '806272835133811');

// Opcional: registrar a PageView deste carregamento específico
fbq('track', 'PageView');

// =============== EVENTO CUSTOM ===============
// Contexto passado pelo loader (opcional, só para enriquecer o evento)
var ctx = window.__LEAD_OBRIGADO_CTX__ || {};

// Dispara o evento customizado solicitado
// Nome exato: "Lead | Obrigado Page!"
fbq('trackCustom', 'Lead | Obrigado Page!', {
  param_name: ctx.paramName || null,
  key_used: ctx.key || null,
  querystring: ctx.rawQuery || null,
  source: 'thankyou_redirect',
  timestamp: new Date().toISOString()
});
