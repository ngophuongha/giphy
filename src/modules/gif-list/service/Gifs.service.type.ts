export type GifRequestProps = (offset: number) => Promise<GifsResponseProps>;
export type GifsResponseProps = {
  data: Array<{
    id: string;
    username: string;
    images: {
      fixed_height_downsampled: {
        url: string;
        width: string;
        height: string;
      };
    };
  }>;
};
