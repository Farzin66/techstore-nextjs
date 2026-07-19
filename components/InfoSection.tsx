import { infoCards } from "@/data/info-cards";

const InfoSection = () => {
  return (
    <div className="mt-10 pt-10 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm text-gray-600 leading-relaxed">
        {infoCards.map((item) => (
          <div className="space-y-4" key={item.id}>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-primary pl-3">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
          Leading Computer, Laptop &amp; Gadget Shop in Bangladesh
        </h2>
        <div className="space-y-4 text-justify">
          <p>
            Welcome to our tech store, your one-stop destination for all things
            technology. Since our inception, we have been committed to providing
            our customers with the best quality products at the most affordable
            prices. Whether you are a professional gamer, a creative designer,
            or just a tech enthusiast, we have the right gear for you.
          </p>
          <p>
            We specialize in <strong>Laptops</strong>, <strong>Desktops</strong>
            , <strong>Graphics Cards</strong>, and{" "}
            <strong>Gaming Peripherals</strong>. Our after-sales service is what
            sets us apart, ensuring that you have peace of mind with every
            purchase. Explore our flagship collection today and join our growing
            community of satisfied customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
