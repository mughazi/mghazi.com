import Link from "next/link";
import Image from "next/image";

export default function PostPreview({ title, coverImage, excerpt, slug }) {
  return (
    <div className="grid grid-cols-12 py-6 space-y-2 border-t md:space-x-4 md:space-y-0">
      <div className="col-span-12 md:col-span-5">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            width={800}
            height={800}
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-7">
        <h3 className="text-blue-600 underline hover:text-blue-600">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <span className="hover:underline">{title}</span>
          </Link>
        </h3>
        <p className="h-24 text-clip">{excerpt}</p>
      </div>
    </div>
  );
}
