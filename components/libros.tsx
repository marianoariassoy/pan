import ItemLibro from "@/components/item-libro";

const libros = () => {
  const data = [
    {
      title: "Libro 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
      image:
        "https://images.pexels.com/photos/16381405/pexels-photo-16381405.jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-y-8">
      {data.map((item, index) => (
        <ItemLibro key={index} data={item} />
      ))}
    </div>
  );
};

export default libros;
