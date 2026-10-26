import Container from "@/components/container";
import { getDataBySlug } from "@/lib/api";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = await getDataBySlug("equipo", slug);

  return (
    <section className="mt-18 md:mt-24 scroll-m-20">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold text-red">Somos PAN</h1>
        <div className="flex flex-col md:flex-row gap-x-20 gap-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="aspect-square overflow-hidden w-36">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href={data.ig} target="_blank" rel="noopener noreferrer">
                <i
                  className="fa-brands fa-instagram text-red hover:text-brown-dark transition-colors duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div>
              <h2 className="text-xl text-red">{data.title}</h2>
            </div>
          </div>
          <div>
            <p className="text-base">{data.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
