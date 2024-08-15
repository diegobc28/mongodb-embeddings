"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import Header from "@/components/Headerbsp";
import Input from "@/components/yoly/forms/fields/Input";
import MultiImageUpload from "@/components/yoly/forms/fields/MultiImageUpload";
import PropertyCard from "@/components/PropertyCard";

const AISearch = () => {
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
  const [recommendedProperties, setRecommendedProperties] = useState([]);

  useEffect(() => {
    if (photosWatch) {
      const imageSources = Object.values(photosWatch).map((photo) =>
        URL.createObjectURL(photo)
      );
      setImageSources(imageSources);
      let totalImagesSize = Object.values(photosWatch).reduce(
        (total, photo) => total + photo.size,
        0
      );
      totalImagesSize = totalImagesSize / 1000000; // Convert to MB
      setTotalImagesSize(totalImagesSize);
    }
  }, [photosWatch]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { photos, name, email } = data;
      const photosArray = Array.from(photos);

      // Upload photos to Cloudinary
      const promises = photosArray.map((photo) => {
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("folder", "buildspace");
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );
        return axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
      });

      const results = await Promise.all(promises);
      const image = results[0].data.secure_url; // Assuming single photo

      // Save form data to backend
      await axios.post("/api/aisearch", { name, email, image });

      // Fetch random properties
      const recommendationsResponse = await axios.get("/api/aisearch");
      setRecommendedProperties(recommendationsResponse.data);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header isHome />
      <div className="mt-8 max-w-2xl mx-auto p-4 border rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Find Properties for Your Pet
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl w-full space-y-4"
        >
          <div className="inputfield">
            <Input
              label="Name"
              name="name"
              type="text"
              register={{
                ...register("name", {
                  required: { value: true, message: "Name is required" },
                }),
              }}
              errorMessage={errors.name?.message}
            />
          </div>
          <div className="inputfield">
            <Input
              label="E-mail"
              name="email"
              type="email"
              register={{
                ...register("email", {
                  required: { value: true, message: "E-mail is required" },
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "E-mail is invalid.",
                  },
                }),
              }}
              errorMessage={errors.email?.message}
            />
          </div>
          <MultiImageUpload
            name="photos"
            id="photos"
            uploadLabel="Share a Photo of Your Pet"
            imageSources={imageSources}
            totalImagesSize={totalImagesSize}
            register={register("photos", {
              required: "This field is required",
            })}
            sublabel1=""
            sublabel2="Format: JPG/JPEG/PNG/HEIC"
            sublabel3="Up to 10mb"
            gridClassNames="grid grid-cols-10 grid-flow-row gap-2 bg-gray-100 p-4"
          />
          <div className="mt-10 flex flex-col items-center border-t border-gray-900/10 pt-8">
            <button className="btn btn-primary" disabled={isLoading}>
              {isLoading ? (
                <span className="loading loading-spinner loading-sm p-2"></span>
              ) : (
                "See Recommended Properties"
              )}
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              By submitting you agree to the{" "}
              <Link href="/tos" className="text-blue-500 underline">
                Terms and Conditions of Use
              </Link>{" "}
              and the{" "}
              <Link href="/privacy-policy" className="text-blue-500 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
        {recommendedProperties.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-4">Recommended Properties:</h3>
            <div className="flex flex-wrap -m-4">
              {recommendedProperties.map((property) => (
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  {...property}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AISearch;
