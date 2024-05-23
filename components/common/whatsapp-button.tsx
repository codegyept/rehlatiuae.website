"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const WhatsappButton = () => {
  return (
    <Button
      className="fixed z-20 bottom-10 right-10 p-3 drop-shadow-2xl rounded-full bg-green h-12 w-12"
      variant="link"
      size="icon"
    >
      <FaWhatsapp className="h-10 w-10 text-white" />
    </Button>
  );
};
