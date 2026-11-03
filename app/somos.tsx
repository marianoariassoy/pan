import Container from "@/components/container";
import Equipo from "@/components/equipo";
import Evolucion from "@/components/evolucion";

type Data = {
  title: string;
  text: string;
};

const somospan = ({ text }: { text: Data[] }) => {
  return (
    <section className="scroll-m-20" id="somos">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-y-4 text-lg pt-12 pb-8">
        <h1 className="text-2xl md:text-5xl font-bold text-red">Somos PAN</h1>
        <p className="md:pl-14 whitespace-break-spaces leading-snug">
          {text[0].text}
        </p>
      </div>

      <div className="bg-brown px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl w-full max-w-4xl mx-auto">
          <div className="flex flex-col gap-y-4 border-b-2 md:border-b-0 md:border-l-2 md:border-r-2 border-foreground border-dotted md:px-14 pb-8">
            <h2 className="font-extrabold md:text-2xl">¿Qué hacemos?</h2>
            <p className="font-bold text-white">
              Asesoramiento y venta de obras de arte
            </p>
            <p className=" font-bold text-extrabold">
              Acompañamiento profesional para artistas
            </p>
            <p className="font-bold text-white">Curaduría</p>
            <p className="font-bold text-extrabold">Charlas de arte</p>
          </div>
          <div className="flex flex-col gap-y-4 pt-4 md:pt-13 md:px-14 md:border-r-2 border-foreground border-dotted">
            <p className="font-bold text-foreground">Open Studios</p>
            <p className="font-bold text-white">
              Mediación Cultural y Educación
            </p>
            <p className=" font-bold text-foreground">
              Archivo, Gestión de colecciones, Legado
            </p>
          </div>
        </div>
      </div>
      <Container>
        <div className="md:pl-14 mt-4">
          <h2 className="font-extrabold text-xl">Nuestro propósito</h2>
          <p className="whitespace-break-spaces leading-snug">{text[1].text}</p>
        </div>

        <Equipo />
      </Container>

      <Evolucion text={text} />
    </section>
  );
};

export default somospan;
