"use client";
import { useForm } from "react-hook-form";
import Input from "@/components/yoly/forms/fields/Input";
import TextArea from "@/components/yoly/forms/fields/TextArea";
import CheckBox from "@/components/yoly/forms/fields/CheckBox";
import apiClient from "@/libs/api";
import MultiImageUpload from "@/components/yoly/forms/fields/MultiImageUpload";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const PublishForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const photosWatch = watch("photos");

  const [isLoading, setIsLoading] = useState(false);
  const [imageSources, setImageSources] = useState(null);
  const [totalImagesSize, setTotalImagesSize] = useState(0);

  //preview photos using use effect
  useEffect(() => {
    if (photosWatch) {
      const imageSources = Object.values(photosWatch).map((photo) => {
        return URL.createObjectURL(photo);
      });
      setImageSources(imageSources);
      let totalImagesSize = Object.values(photosWatch).reduce(
        (total, photo) => total + photo.size,
        0
      );

      //convert to mb
      totalImagesSize = totalImagesSize / 1000000;
      setTotalImagesSize(totalImagesSize);
    }
  }, [photosWatch]);

  const onSubmit = async (data) => {
    console.log("data del form", data);
    try {
      setIsLoading(true);

      const { photos } = data;
      // Convert FileList to array
      const photosArray = Array.from(photos);

      // Upload photos to Cloudinary
      const promises = photosArray.map((photo) => {
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("folder", "submissions");
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );
        return axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
      });

      // Get URLs of the uploaded files from Cloudinary
      const results = await Promise.all(promises);

      //add images url to data
      data.images = results.map((result) => result.data.secure_url);

      //delete photos field from data
      delete data.photos;

      // // manda el data al backend
      const response = await apiClient.post("/publish", data);
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsLoading(false);
      // Redirect to Stripe URL
      window.location.href = "https://buy.stripe.com/6oEbMi8Ea6gZg7u4gh";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-md mb-8  ">
      <h2 className="text-2xl font-bold mb-4">Publica tu Propiedad</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl w-full space-y-4"
      >
        <div className="inputfield">
          <Input
            label="Titulo"
            name="title"
            type="text"
            register={{
              ...register("title", {
                required: {
                  value: true,
                  message: "Título es requerido",
                },
              }),
            }}
            errorMessage={errors.title?.message}
          />
        </div>
        <div className="inputfield">
          <TextArea
            label="Descripción"
            name="description"
            placeholder="Ejemplo: Una propiedad muy chida"
            type="text"
            register={{
              ...register("description", {
                required: {
                  value: true,
                  message: "Descripción es requerida.",
                },
                maxLength: {
                  value: 500,
                  message: "No debe exceder los 500 caracteres.",
                },
              }),
            }}
            errorMessage={errors.description?.message}
          />
        </div>

        <div className="inputfield">
          <Input
            label="Ciudad de la Propiedad"
            name="location"
            type="text"
            register={{
              ...register("location", {
                required: {
                  value: true,
                  message: "Ciudad es requerida",
                },
              }),
            }}
            errorMessage={errors.location?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="Precio mensual en MXN"
            name="price"
            type="number"
            register={{
              ...register("price", {
                required: {
                  value: true,
                  message: "Precio es requerido",
                },
                min: {
                  value: 1,
                  message: "Precio no puede ser 0",
                },
              }),
            }}
            errorMessage={errors.price?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="¿Cuantas personas puede alojar?"
            name="people"
            type="number"
            register={{
              ...register("people", {
                required: {
                  value: true,
                  message: "Número de personas es requerido",
                },
                min: {
                  value: 1,
                  message: "Debe alojar al menos 1 persona",
                },
              }),
            }}
            errorMessage={errors.people?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="¿Cuántas habitaciones tiene?"
            name="rooms"
            type="number"
            register={{
              ...register("rooms", {
                required: {
                  value: true,
                  message: "Número de habitaciones es requerido",
                },
                min: {
                  value: 1,
                  message: "Debe tener al menos 1 habitación",
                },
              }),
            }}
            errorMessage={errors.rooms?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="¿Cuántos baños tiene?"
            name="bathrooms"
            type="number"
            register={{
              ...register("bathrooms", {
                required: {
                  value: true,
                  message: "Número de baños es requerido",
                },
                min: {
                  value: 1,
                  message: "Debe tener al menos 1 baño",
                },
              }),
            }}
            errorMessage={errors.bathrooms?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="Asesor / Propietario"
            name="owner"
            type="text"
            register={{
              ...register("owner", {
                required: {
                  value: true,
                  message: "Nombre del propietario es requerido",
                },
              }),
            }}
            errorMessage={errors.owner?.message}
          />
        </div>
        <div className="inputfield">
          <Input
            label="Teléfono del propietario"
            name="ownernumber"
            type="text"
            register={{
              ...register("ownernumber", {
                required: {
                  value: true,
                  message: "Teléfono del propietario es requerido",
                },
              }),
            }}
            errorMessage={errors.ownernumber?.message}
          />
        </div>
        <div className="inputfield">
          <CheckBox
            label="¿Permite perros?"
            name="dogs"
            register={{
              ...register("dogs"),
            }}
          />
        </div>
        <div className="inputfield">
          <CheckBox
            label="¿Permite gatos?"
            name="cats"
            register={{
              ...register("cats"),
            }}
          />
        </div>

        <MultiImageUpload
          name="photos"
          id="photos"
          uploadLabel="Sube fotos de tu propiedad"
          imageSources={imageSources}
          totalImagesSize={totalImagesSize}
          register={register("photos", {
            required: "Este campo es requerido",
          })}
          sublabel1=""
          sublabel2="Format: JPG/JPEG/PNG/HEIC"
          sublabel3="Hasta 10mb"
          gridClassNames="grid grid-cols-10 grid-flow-row gap-2 bg-gray-100 p-4"
        />

        <div className="mt-10 flex flex-col items-center border-t border-gray-900/10 pt-8">
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading ? (
              <span className="loading loading-spinner loading-sm p-2"></span>
            ) : (
              "Enviar"
            )}
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
        </div>
      </form>
    </div>
  );
};

export default PublishForm;
