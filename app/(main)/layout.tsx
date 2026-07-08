import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportButton from "@/components/SupportButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
      <SupportButton/>
    </>
  );
}
