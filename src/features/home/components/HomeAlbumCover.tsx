import blue from "@/assets/images/album/blue.jpg";
import know from "@/assets/images/album/know.jpg";
import seethat from "@/assets/images/album/seethat.jpg";
import exprego from "@/assets/images/album/exprego.jpg";
import entwurf from "@/assets/images/album/entwurf.jpg";
import admare from "@/assets/images/album/admare.jpg";
import Image from "next/image";

interface HomeAlbumCoverProps {
  bgIndex: number;
}

const ALBUM_COVERS = [admare, blue, know, seethat, exprego, entwurf];
const ALBUM_LINKS = [
  "https://www.youtube.com/watch?v=3GWscde8rM8", // o.o
  "https://www.youtube.com/watch?v=EmeW6li6bbo", // blue valentine
  "https://www.youtube.com/watch?v=aFrQIJ5cbRc", // know about me
  "https://www.youtube.com/watch?v=_Q8Jskeps9w", // see that
  "https://www.youtube.com/watch?v=EDnwWcFpObo", // love me like this
  "https://www.youtube.com/watch?v=p1bjnyDqI9k", // dice
];

export function HomeAlbumCover({ bgIndex }: HomeAlbumCoverProps) {
  return (
    <div className="group fixed bottom-28 right-8 rounded-xl select-none bg-[rgba(255,255,255,0.12)] backdrop-blur-lg shadow-[0px_8px_32px_rgba(0, 0, 0, 0.15)] transition-transform duration-200 hover:-translate-y-0.5">
      <Image
        src={ALBUM_COVERS[bgIndex]}
        alt="album_cover"
        className="w-40 h-auto rounded-lg shadow-[0px_8px_32px_rgba(0,0,0,0.15)]"
      />
      <div className="absolute bg-black/60 w-full h-full inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-80 transition">
        <a
          href={ALBUM_LINKS[bgIndex]}
          target="_blank"
          className="text-white p-3 cursor-pointer"
        >
          ▶
        </a>
      </div>
    </div>
  );
}
