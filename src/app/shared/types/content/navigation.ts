import { Image, ImageDto } from "./contentPage";

export type NavigationItem = {
  name: string;
  path: string;
  isButton: boolean;
};

export type NavigationDto = {
  _type: string;
  link: string;
  _key: string;
  title: string;
  isButton: boolean;
  meta: MetaData;
};

export type MetaData = {
  description: string;
  favicon: Favicon;
  keywords: string;
  logo: Image;
  title: string;
  social: Social;
};

export type Favicon = {
  androidBig?: Image;
  androidSmall?: Image;
  apple?: Image;
  faviconBig?: Image;
  faviconSmall?: Image;
};

export type MetaDataDto = {
  description: string;
  favicon: FaviconDto;
  keywords: string;
  logo: ImageDto;
  title: string;
  _type: string;
  social: Social;
};

export type FaviconDto = {
  androidBig: ImageDto;
  androidSmall: ImageDto;
  apple: ImageDto;
  faviconBig: ImageDto;
  faviconSmall: ImageDto;
  _type: string;
};

export type Social = {
  facebook: string;
  instagram: string;
  mail: string;
};
