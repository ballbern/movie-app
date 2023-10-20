import { StyledImage } from "./styles";

type ImageProps = {
  path: string;
  width?: number;
  media?: { sm: number; md: number; lg: number };
  title?: string;
};

export const Image = ({ path, width, media, title, ...props }: ImageProps) => {
  return (
    <div {...props}>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w500/${path}`}
        alt={title}
        width={width}
        media={media}
      />
    </div>
  );
};
