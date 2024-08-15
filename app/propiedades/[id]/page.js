"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import PropertyDetails from '@/components/PropertyDetails';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        const data = await response.json();
        console.log('Fetched property:', data); // Log para depuración
        if (response.ok) {
          setProperty(data);
        } else {
          console.error('Error fetching property:', data.error);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <>
      <Header />
      <PropertyDetails property={property} />
    </>
  );
};

export default PropertyPage;
