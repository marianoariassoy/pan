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
  const data = (await getDataBySlug("comunidad", slug)) as Data;

  return (
    <section className="scroll-m-20 mt-18 md:mt-24">
      <Container>
        <Volver url="/" />

        <h1 className="text-2xl md:text-4xl font-bold text-red">Comunidad</h1>

        <GaleriaModal images={data.images} image={data.image} />

        <div className="flex items-start gap-4 text-sm text-brown-dark">
          <div className="w-12 md:w-24 h-2 bg-red translate-y-2 shrink-0" />
          <div className="text-base">
            <h2 className="font-bold">{data.title}</h2>
            <p className="whitespace-break-spaces leading-snug">{data.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
