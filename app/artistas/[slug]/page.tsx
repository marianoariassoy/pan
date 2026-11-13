import Container from "@/components/container";
import { getDataBySlug } from "@/lib/api";
import Volver from "@/components/volver";
import GaleriaModal from "@/components/galeria-modal";

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
        <Volver url="/" />

        <h1 className="text-2xl md:text-4xl font-bold text-red">Artistas</h1>

        <GaleriaModal images={data.images} image={data.image} />

        <div className="flex flex-col text-medium pb-8">
          <h2 className="font-bold text-lg">{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </Container>
    </section>
  );
}
