import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
interface ImageFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc: string;
}
export default function ImageFallback(props: ImageFallbackProps) {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      width={10}
      height={10}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
