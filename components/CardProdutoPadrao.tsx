import Link from "next/link";
import Image from "next/image";

interface CardProdutoPadraoProps {
  slug: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
}

export default function CardProdutoPadrao({
  slug,
  title,
  desc,
  image,
  imageAlt,
}: CardProdutoPadraoProps) {
  return (
    <Link
      href={`/produtos/${slug}`}
      className="group block bg-cc-gray-50 border border-cc-gray-200 rounded-lg overflow-hidden hover:border-cc-orange hover:bg-white transition-all"
    >
      <div className="relative aspect-[4/3] bg-cc-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-cc-black mb-2 group-hover:text-cc-orange transition-colors">
          {title}
        </h3>
        <p className="text-sm text-cc-gray-600 leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}
