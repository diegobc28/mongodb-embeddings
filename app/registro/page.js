"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";

const RegistrationPageContent = () => {
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");
  const owner = searchParams.get("owner");
  const ownernumber = searchParams.get("ownernumber");

  return (
    <RegistrationForm
      propertyId={propertyId}
      owner={owner}
      ownernumber={ownernumber}
    />
  );
};

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <RegistrationPageContent />
      </Suspense>
    </>
  );
};

export default RegistrationPage;
