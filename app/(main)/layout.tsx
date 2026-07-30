import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SupportButton from "@/components/layout/SupportButton";


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
