import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex flex-col justify-between gap-10 overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
