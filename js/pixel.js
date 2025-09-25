// ===== BASE DO META PIXEL =====
!function(f,b,e,v,n,t,s){
  if(f.fbq) return;
  n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
  if(!f._fbq) f._fbq=n;
  n.push=n; n.loaded=!0; n.version='2.0';
  n.queue=[];
  t=b.createElement(e); t.async=!0;
  t.src=v; s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

// ===== SEU PIXEL ID =====
fbq('init', '806272835133811');

// (Opcional) registrar PageView deste carregamento condicional
fbq('track', 'PageView');

// ===== EVENTO CUSTOM: "Lead | Obrigado Page!" =====
var ctx = window.__LEAD_OBRIGADO_CTX__ || {};
fbq('trackCustom', 'Lead | Obrigado Page!', {
  test_event_code: 'TEST70762',
  source: 'thankyou_redirect',
  param_name: ctx.paramName || 'inscricaocofirmado',
  key_used: ctx.key || null,
  querystring: ctx.rawQuery || window.location.search,
  timestamp: new Date().toISOString()
});
