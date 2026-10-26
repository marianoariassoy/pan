import Container from "@/components/container";
import Galeria from "@/components/galeria-artistas";

type Data = {
  title: string;
  text: string;
};

const Artistas = ({ text }: { text: Data[] }) => {
  return (
    <section className="bg-green scroll-m-20" id="artistas">
      <Container>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-red">Artistas</h1>
          <p className="md:pl-14">{text[7].text}</p>
        </div>

        <Galeria />
      </Container>
    </section>
  );
};

export default Artistas;
