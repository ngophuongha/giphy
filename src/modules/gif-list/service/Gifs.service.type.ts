export type GifRequestProps = (offset: number) => Promise<GifsResponseProps>;
export type GifsResponseProps = {
  data: Array<{
    id: string;
    title?: string;
    username?: string;
    rating?: string;
    images: {
      fixed_width: {
        url: string;
        width: string;
        height: string;
      };
      downsized: {
        url: string;
        width: string;
        height: string;
      };
      fixed_width_downsampled: {
        url: string;
        width: string;
        height: string;
      };
    };
  }>;
};
