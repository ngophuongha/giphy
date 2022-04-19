import { GifsResponseProps } from "./service";

export const mockGifPage: GifsResponseProps[] = [
  {
    id: "1",
    title: "Happy Birthday",
    username: "Alice",
    images: {
      fixed_height_downsampled: {
        url: "http://localhost:8000",
        width: "123",
        height: "456",
      },
    },
  },
  {
    id: "2",
    title: "Little Candy",
    username: "Bob",
    images: {
      fixed_height_downsampled: {
        url: "http://localhost:8000",
        width: "123",
        height: "456",
      },
    },
  },
];
