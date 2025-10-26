type ResponsiveImageProps = {
  src: string;
  alt?: string;
  sizes: number[];
  formats: string[];
  className?: string | undefined;
};

const ResponsiveImg = ({
  src,
  alt,
  sizes,
  formats,
  className,
}: ResponsiveImageProps) => {
  const sizesParam = sizes.join(";");
  const formatsParam = formats.join(";");

  const images = new URL(
    `${src}?w=${sizesParam}&format=${formatsParam}&as=picture`,
    import.meta.url
  ).href;
  return <picture>
     <source srcSet={images} />
      <img src={src} alt={alt} loading="lazy" className={className} />
  </picture>;
};

export default ResponsiveImg;
