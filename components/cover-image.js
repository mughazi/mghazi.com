import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span aria-label={title}>{image}</span>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
