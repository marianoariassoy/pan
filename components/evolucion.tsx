import StatsStrip from "@/components/statsstrip";

const evolucion = () => {
  return (
    <section className="bg-pink py-8">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col py-4 text-lg">
        <h2 className="text-xl font-extrabold">Nuestra evolución</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis.
        </p>
      </div>

      <StatsStrip />
    </section>
  );
};

export default evolucion;
