import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Términos y Condiciones | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`

Actualización: 24 de julio de 2024

Generalidades

1.1 Bienvenido a CASADEPAW. Al acceder y utilizar nuestro portal web www.casadepaw.com (el "Portal"), usted (el "Visitante" o "Usuario") acepta cumplir con estos Términos y Condiciones (T&C). Si no está de acuerdo, le rogamos que se abstenga de usar nuestros servicios.
1.2 CASADEPAW se reserva el derecho de modificar estos T&C en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el Portal.

Uso del Portal

2.1 El Usuario se compromete a utilizar el Portal de manera lícita, respetando la legislación vigente, la moral y el orden público.
2.2 Queda prohibido:
a) Usar el Portal para fines fraudulentos o ilegales.
b) Intentar acceder a áreas restringidas del Portal.
c) Interferir con el funcionamiento normal del Portal.
d) Subir contenido que infrinja derechos de terceros.

Contenido y Propiedad Intelectual

3.1 Todo el contenido del Portal, incluyendo textos, imágenes, logotipos y software, es propiedad de CASADEPAW o de sus licenciantes.
3.2 Se prohíbe la reproducción, distribución o modificación del contenido sin autorización expresa de CASADEPAW.

Registro de Usuarios

4.1 Algunos servicios pueden requerir registro. El Usuario se compromete a proporcionar información veraz y actualizada.
4.2 El Usuario es responsable de mantener la confidencialidad de su contraseña y cuenta.

Publicación de Anuncios

5.1 Los Usuarios que publiquen anuncios en el Portal declaran tener los derechos necesarios sobre los inmuebles anunciados.
5.2 CASADEPAW se reserva el derecho de retirar anuncios que incumplan estos T&C o la legislación aplicable.

Limitación de Responsabilidad

6.1 CASADEPAW no garantiza la disponibilidad ininterrumpida del Portal ni la ausencia de errores en el mismo.
6.2 CASADEPAW no es responsable de la veracidad de la información proporcionada por los Usuarios en sus anuncios.

Privacidad y Datos Personales

7.1 El uso de datos personales por parte de CASADEPAW se rige por nuestra Política de Privacidad, disponible en el Portal.

Enlaces a Terceros

8.1 El Portal puede contener enlaces a sitios web de terceros. CASADEPAW no se hace responsable del contenido o prácticas de estos sitios.

Terminación

9.1 CASADEPAW puede suspender o terminar el acceso de un Usuario al Portal en caso de incumplimiento de estos T&C.

Ley Aplicable y Jurisdicción

10.1 Estos T&C se rigen por las leyes de México. Cualquier disputa se someterá a los tribunales competentes de la Ciudad de México.

Contacto

Para cualquier duda o aclaración sobre estos T&C, contáctenos en legal@casadepaw.com.
Al usar CASADEPAW, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones. 
`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
