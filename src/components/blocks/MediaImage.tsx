import type { Media } from "@/payload-types";

export function mediaUrl(m?: number | Media | null): string | null {
  if (m && typeof m === "object" && m.url) return m.url;
  return null;
}

export default function MediaImage({
  media,
  alt,
  className = "",
}: {
  media?: number | Media | null;
  alt?: string;
  className?: string;
}) {
  const url = mediaUrl(media);
  const altText = alt || (media && typeof media === "object" ? media.alt || "" : "");
  if (!url) return <div className={`bg-neutral-200 ${className}`} />;
  // Payload 업로드 경로(/api/media/...)는 next/image 설정 전까지 img 사용
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt={altText ?? ""} className={`object-cover ${className}`} />;
}
