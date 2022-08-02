// components/Image.js
import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }: any): any => {
  return src
}

export const Image = (props : any) => {
  return (
    <NextImage
      {...props}
      unoptimized={true}
      loader={customLoader}
    />
  );
}