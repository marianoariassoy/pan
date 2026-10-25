import Container from "@/components/container";
import Galeria from "@/components/galeria";

const curaduria = () => {
  return (
    <div className="flex flex-col gap-y-4 border-brown border-t-2 ">
      <Container>
        <div className="md:pl-14 ">
          <h2 className="text-lg font-extrabold">Curaduría</h2>
          <p>
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
    </div>
  );
};

export default curaduria;
