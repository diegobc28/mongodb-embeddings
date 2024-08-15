import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Aviso de Privacidad de {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`
          
Última actualización: 24 de julio de 2024
Fundamento Legal y Responsable del Tratamiento de Datos
En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la "Ley"), su Reglamento y demás normativa aplicable, CASADEPAW S.A. de C.V. ("CASADEPAW"), con domicilio en Loma Chica 528, Col Loma Larga, Monterrey NL CP 64710, se identifica como el responsable del tratamiento legítimo, controlado e informado de sus datos personales.
CASADEPAW se compromete a procesar su información personal de acuerdo con los principios establecidos en el artículo 6 de la Ley y conforme a las finalidades detalladas en este Aviso de Privacidad.

Información que Recopilamos

1.1 Datos personales que nos proporcionas:

Nombre completo
Información de contacto (correo electrónico, teléfono, dirección)
Información sobre propiedades (para anuncios)
Datos de pago (cuando corresponda)

1.2 Información recopilada automáticamente:

Datos de uso del sitio web www.casadepaw.com (el "Sitio")
Dirección IP
Tipo de navegador
Sistema operativo


Uso de tu Información

Utilizamos tu información personal para:

Proporcionar y mejorar nuestros servicios
Procesar transacciones
Enviar comunicaciones sobre nuestros servicios
Personalizar tu experiencia en el Sitio
Cumplir con obligaciones legales


Compartir tu Información

Podemos compartir tu información con:

Proveedores de servicios que nos ayudan a operar el Sitio
Socios comerciales (con tu consentimiento)
Autoridades competentes cuando sea requerido por ley

No vendemos tu información personal a terceros.

Derechos ARCO y Limitación del Uso de Datos

Para ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), así como para limitar el uso o divulgación de tus datos personales, puedes contactar a CASADEPAW a través de:

Correo electrónico: privacidad@casadepaw.com
Dirección postal: Loma Chica 528, Col Loma Larga, Monterrey NL CP 64710

CASADEPAW atenderá tu solicitud en los plazos y términos establecidos por la Ley, garantizando en todo momento el efectivo ejercicio de tus derechos de privacidad y protección de datos personales.

Seguridad de Datos

Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal. Sin embargo, ningún sistema es completamente seguro.

Cookies y Tecnologías Similares

Utilizamos cookies y tecnologías similares para mejorar tu experiencia en el Sitio. Puedes configurar tu navegador para rechazar cookies, pero esto puede limitar algunas funcionalidades.

Cambios a este Aviso

Podemos actualizar este Aviso de Privacidad periódicamente. Te notificaremos sobre cambios significativos a través del Sitio o por correo electrónico.

Menores de Edad

Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores de edad.

Autoridad de Protección de Datos

Si consideras que tus derechos de privacidad han sido vulnerados, puedes presentar una queja ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).

Consentimiento

Al utilizar nuestro Sitio y servicios, aceptas los términos de este Aviso de Privacidad. Si no estás de acuerdo con estos términos, por favor abstente de usar nuestros servicios.

Contacto

Si tienes preguntas adicionales sobre este Aviso de Privacidad o el manejo de tus datos personales, no dudes en contactarnos:

Correo electrónico: privacidad@casadepaw.com
Teléfono: 8130902546
Dirección: Loma Chica 528, Col Loma Larga, Monterrey NL CP 64710

CASADEPAW está comprometida con la protección de tu privacidad y el manejo responsable de tus datos personales. Agradecemos tu confianza en nuestros servicios.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
