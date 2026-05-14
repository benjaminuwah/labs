import { StaticImageData } from "next/image";

export type ServiceItem = {
  id?: number;
  title?: string;
  description?: string;
  coverImage: StaticImageData | string;
  // slug?: string;
  // excerpt?: string;
  // date: string;
};
