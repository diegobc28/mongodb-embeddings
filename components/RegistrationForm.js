"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const RegistrationForm = ({ propertyId, owner, ownernumber }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fechaEntrada: "",
    personas: "",
    perros: "",
    gatos: "",
    raza: "",
    mensaje: "",
  });
  const router = useRouter();
  const propertyUrl = `${window.location.origin}/propiedades/${propertyId}`;

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Add propertyId to formData
  const formDataWithProperty = {
    ...formData,
    propertyId,
    owner,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithProperty),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);

        // Construir el mensaje de WhatsApp
        let whatsappMessage = "";
        if (formData.mensaje && formData.mensaje.trim()) {
          whatsappMessage = `Hola ${owner}, mi nombre es ${formData.nombre} y estoy interesado en la casa ${propertyUrl} que vi en CASADEPAW. Es para ${formData.personas} persona(s), ${formData.perros} perro(s) y ${formData.gatos} gato(s). La raza de mi mascota es ${formData.raza}. Como información adicional ${formData.mensaje}. Me gustaría entrar el ${formData.fechaEntrada}. Me podrías dar más información?`;
        } else {
          whatsappMessage = `Hola ${owner}, mi nombre es ${formData.nombre} y estoy interesado en la casa ${propertyUrl} que vi en CASADEPAW. Es para ${formData.personas} persona(s), ${formData.perros} perro(s) y ${formData.gatos} gato(s). La raza de mi mascota es ${formData.raza}. Me gustaría entrar el ${formData.fechaEntrada}. Me podrías dar más información?`;
        }

        const whatsappLink = `https://api.whatsapp.com/send?phone=${ownernumber}&text=${encodeURIComponent(
          whatsappMessage
        )}`;
        const whatsappWebLink = `https://web.whatsapp.com/send?phone=${ownernumber}&text=${encodeURIComponent(
          whatsappMessage
        )}`;

        // Abrir el enlace de WhatsApp en una nueva ventana
        if (isMobile) {
          window.location.href = whatsappLink;
        } else {
          window.open(whatsappWebLink, "_blank");
        }

        // Redirigir al usuario de vuelta a la página de la propiedad
        router.push(`/propiedades/${propertyId}`);
      } else {
        const errorData = await response.json();
        console.error("Error registering:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded"
    >
      <h2 className="text-2xl mb-4">Formulario</h2>
      <div className="mb-4">
        <label className="block mb-2">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Teléfono</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Fecha de Entrada</label>
        <input
          type="date"
          name="fechaEntrada"
          value={formData.fechaEntrada}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">¿Cuántas personas son?</label>
        <input
          type="number"
          name="personas"
          value={formData.personas}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">¿Cuántos perros son?</label>
        <input
          type="number"
          name="perros"
          value={formData.perros}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">¿Cuántos gatos son?</label>
        <input
          type="number"
          name="gatos"
          value={formData.gatos}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Raza</label>
        <input
          type="text"
          name="raza"
          value={formData.raza}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Algo más que te gustaría decirnos.</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar mensaje
      </button>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Al enviar estás aceptando los{" "}
        <Link href="/tos" className="text-blue-500 underline">
          Términos y condiciones de Uso
        </Link>{" "}
        y la{" "}
        <Link href="/privacy-policy" className="text-blue-500 underline">
          Política de Privacidad
        </Link>
        .
      </p>
    </form>
  );
};
export default RegistrationForm;
