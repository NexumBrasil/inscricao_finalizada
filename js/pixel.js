<!-- Meta Pixel Code -->
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');  // <-- Substitua pelo ID real do seu Pixel
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
     src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->

<!-- Evento de Compra PIX -->
<script>
fbq('track', 'Purchase', {
  value: 123.45,          // Valor da compra em Reais
  currency: 'BRL',        // Moeda
  contents: [{id: 'pedido123', quantity: 1}],
  content_type: 'product'
});
