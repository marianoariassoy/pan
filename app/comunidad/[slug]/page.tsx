import Container from "@/components/container";

const somospan = () => {
  const data = {
    name: "Mariela López",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    image:
      "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
    gallery: [
      {
        image:
          "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
      },
      {
        image:
          "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
      },
      {
        image:
          "https://images.pexels.com/photos/11202887/pexels-photo-11202887.jpeg",
      },
    ],
  };

  return (
    <section className="scroll-m-20 pt-24">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-red">Comunidad</h1>

        <div className="flex flex-col gap-2">
          <div className="h-full w-full aspect-5/3">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {data.gallery.map((item, index) => (
              <div key={index} className="h-full w-full aspect-5/3">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-4 text-sm text-brown-dark w-4/5">
          <div className="w-130 h-2 bg-red translate-y-2" />
          <div>
            <h2 className="font-bold text-lg">{data.name}</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default somospan;
