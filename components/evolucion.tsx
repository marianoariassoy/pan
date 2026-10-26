import StatsStrip from "@/components/statsstrip";

type Data = {
  title: string;
  text: string;
};

const evolucion = ({ text }: { text: Data[] }) => {
  return (
    <section className="bg-pink py-8">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col py-4 text-lg">
        <h2 className="text-xl font-extrabold">Nuestra evolución</h2>
        <p>{text[2].text}</p>
      </div>

      <StatsStrip />
    </section>
  );
};

export default evolucion;
