interface SocialMetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function SocialMetaTags({ title, description, image, url }: SocialMetaTagsProps) {
  return (
    <>
      {/* العلامات الوصفية الأساسية */}
      <meta name="description" content={description} />

      {/* علامات Open Graph لفيسبوك */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="منصة تعلم" />

      {/* علامات Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* علامات WhatsApp */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}
