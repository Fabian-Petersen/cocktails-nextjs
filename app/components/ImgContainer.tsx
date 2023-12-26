import type { Photo } from "@/models/Images";
import Image from "next/image";

// $ Use the linter tool to get the sizes values for the Image component
// $ https://nextjs.org/docs/api-reference/next/image#layout
// $ see https://ausi.github.io/respimagelint/ for more info.
// $ Bookmark the lint images and open the bookmark with your app displayed. Copy the try this code snippet.

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div className="relative overflow-hidden h-64 bg-gray-300 rounded-xl group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        priority={true}
        className="object-cover group-hover:cursor-pointer group-hover:opacity-75 hover:shadow-lg hover:shadow-blue-500"
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
      />
    </div>
  );
}
