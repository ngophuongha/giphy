export type GifRequestProps = (offset: number) => Promise<GifsResponseProps[]>;
export type GifsResponseProps = {
  id: string;
  username: string;
  title: string;
  images: {
    fixed_height_downsampled: {
      url: string;
      width: string;
      height: string;
    };
  };
};
