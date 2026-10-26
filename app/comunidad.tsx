import Container from "@/components/container";
import Libros from "@/components/libros";
import GaleriaComunidad from "@/components/galeria-comunidad";

type Data = {
  title: string;
  text: string;
};

const somospan = ({ text }: { text: Data[] }) => {
  return (
    <section className="scroll-m-20" id="comunidad">
      <Container>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-red">Comunidad</h1>
          <p className="md:pl-14">{text[8].text}</p>
        </div>

        <Libros />

        <GaleriaComunidad />
      </Container>
    </section>
  );
};

export default somospan;
