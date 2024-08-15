/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import PropertiesList from "@/components/yoly/PropertiesList";
import WhatsappChat from "@/components/WhatsappChat";

const fetchProperties = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/property`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  // Filtrar propiedades disponibles o aquellas que no tienen la variable 'available'
  const availableProperties = data.filter(
    (property) => property.available !== false
  );

  // Ordenar propiedades destacadas primero
  availableProperties.sort((a, b) => b.feature - a.feature);
  // Obtener las ciudades únicas basadas en las propiedades disponibles
  const uniqueCities = [
    ...new Set(availableProperties.map((property) => property.location)),
  ];

  const parsedData = {
    cities: uniqueCities,
    properties: availableProperties,
  };

  return parsedData;
};

export default async function Home() {
  const { cities, properties } = await fetchProperties();

  return (
    <>
      <Header isHome />
      <PropertiesList cities={cities} properties={properties} />
      <WhatsappChat
        phoneNumber="528130902546"
        accountName="YOLY"
        chatMessage="Hola soy YOLY, ¿cómo puedo ayudarte?"
      />
    </>
  );
}
