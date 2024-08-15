/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";

const PropertiesList = ({ cities, properties }) => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Esto se ejecuta cuando cambia la ciudad seleccionada
  useEffect(() => {
    if (selectedCity === "all") {
      setFilteredProperties(properties);
      return;
    }

    const filtered = properties.filter(
      (property) => property.location === selectedCity
    );
    setFilteredProperties(filtered);
  }, [selectedCity]);

  return (
    <>
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <select
            className="border p-2 rounded"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="all">Todas las ciudades</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          {/*
          <a
            href="https://wa.me/+528130902546?text=Hola,%20quiero%20ayuda%para%20encontrar%depa!"
            className="flex items-center text-red-500"
          >
            <button className="flex items-center text-gray-500  border-2 p-2 rounded-xl md:px-3 md:py-1.5 lg:px-2 lg:py-1 hidden lg:flex">
              <Image
                src="/images/whatsapp_icon.png"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 mr-2"
              />
              <strong>Asesoria Personalizada</strong>
            </button>
          </a>
          */}
        </div>
        <div className="flex flex-wrap -mx-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PropertiesList;
