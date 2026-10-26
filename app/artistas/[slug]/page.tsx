import Container from "@/components/container";
import { getDataBySlug } from "@/lib/api";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Images = {
  id: number;
  image: string;
};

type Data = {
  id: number;
  title: string;
  text: string;
  image: string;
  images: Images[];
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = (await getDataBySlug("artistas", slug)) as Data;

  return (
    <section className="bg-green scroll-m-20 pt-18 md:pt-24">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-red">Artistas</h1>

        <div className="flex flex-col gap-2">
          <div className="h-full w-full aspect-square md:aspect-5/3">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {data.images.map((item, index) => (
              <div
                key={index}
                className="h-full w-full aspect-square md:aspect-5/3"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-medium pb-8">
          <h2 className="font-bold text-lg">{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </Container>
    </section>
  );
}
