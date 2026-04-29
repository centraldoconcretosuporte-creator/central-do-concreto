import Link from "next/link";
import Image from "next/image";

interface CardProdutoDestaqueProps {
  slug: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export default function CardProdutoDestaque({
  slug,
  title,
  desc,
  image,
  imageAlt,
  badge,
}: CardProdutoDestaqueProps) {
  return (
    <Link
      href={`/produtos/${slug}`}
      className="group block bg-white border border-cc-gray-200 rounded-lg overflow-hidden hover:border-cc-orange hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[4/3] bg-cc-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-cc-orange text-white text-xs font-semibold px-2.5 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-cc-black mb-2 group-hover:text-cc-orange transition-colors">
          {title}
        </h3>
        <p className="text-cc-gray-600 leading-relaxed">{desc}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-cc-orange text-sm font-semibold">
          Ver detalhes
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
