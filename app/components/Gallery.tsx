import fetchImages from "../lib/FetchImages";
import type { ImageResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

type Props = {
  search?: string | undefined;
};

const Gallery = async ({ search }: Props) => {
  const url = !search
    ? // ? "https://api.pexels.com/v1/cur" // failed to fetch images url
      "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${search}`;

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images)
    return (
      <h2 className="m-4 text-2xl font-bold">Failed to Load Imagaes,...</h2>
    );

  return (
    <section className="dark:bg-gray-900 p-8 grid gap-4 pt-[10rem] md:pt-[8rem] grid-cols-gallery max-w-[90rem] mx-auto border-none">
      {images.photos.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
};

export default Gallery;
