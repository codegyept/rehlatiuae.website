import { WhatsappButton } from "@/components/common/whatsapp-button";
import { Footer, Navbar } from "@/components/sections";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex flex-col justify-between gap-10">
      <Navbar />
      <WhatsappButton />
      {children}
      <Footer />
    </div>
  );
}
