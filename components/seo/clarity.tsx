/**
 * Microsoft Clarity (mapas de calor y grabaciones de sesión).
 * Igual que GTM: solo se carga en el sitio publicado, no en desarrollo ni en previews.
 * Además requiere consentimiento: se carga únicamente si la cookie `kx_consent` es `granted`
 * (al cargar la página) o cuando la persona acepta en el banner (`window.kxLoadClarity`).
 */
export const CLARITY_ID = "yzr1ci43mv"

export function ClarityHead() {
  return (
    <script
      id="clarity"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.kxLoadClarity=function(){if(window.__kxClarity)return;window.__kxClarity=1;(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}")};
if(/(?:^|;\\s*)kx_consent=granted(?:;|$)/.test(document.cookie))window.kxLoadClarity();`,
      }}
    />
  )
}
