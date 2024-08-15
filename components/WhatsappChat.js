"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappChat = ({ phoneNumber, accountName, chatMessage }) => {
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      accountName={accountName}
      allowEsc
      allowClickAway
      notification
      notificationSound
      statusMessage="YOLY de CASADEPAW"
      chatMessage={chatMessage}
      avatar="https://res.cloudinary.com/dh8e1nger/image/upload/v1720331889/z114sx5umdjpu0ynbxak.png"
    />
  );
};

export default WhatsappChat;
