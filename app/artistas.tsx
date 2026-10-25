import Container from "@/components/container";
import Galeria from "@/components/galeria-artistas";

const somospan = () => {
  return (
    <section className="bg-green scroll-m-20" id="artistas">
      <Container>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-red">Artistas</h1>
          <p className="md:pl-14">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapi- bus. Vivamus elementum
            semper nisi.
          </p>
        </div>

        <Galeria />
      </Container>
    </section>
  );
};

export default somospan;
