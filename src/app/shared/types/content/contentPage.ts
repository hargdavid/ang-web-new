import { LinkButton, LinkButtonDto } from "./linkButton";

export type ContentPage = {
  content: ContentBlockObject[];
  path: string;
  hero: Hero;
  images: ImageWithLink[] | null;
  textAndImage: ImageWithText | null;
};

export type ImageWithTextDTO = {
  image: ImageDto;
  text2: string;
  _type: "textAndImage";
  text: string;
};

export type ImageWithText = {
  image: Image;
  text2: string;
  text: string;
};

export type ContentPageDTO = {
  content: ContentBlockDTO[];
  path: string;
  hero: HeroDTO;
  images?: ImageWithLinkDto[];
  textAndImage?: ImageWithTextDTO;
  contentList?: {
    blockArray: (ContentContainer | BlockList | ImageList | ImageWithTextDTO)[];
  };
} & Document;

export type Hero = {
  subtitle: string;
  title: string;
  heroImage: Image;
  button: LinkButton | null;
  video: Video | null;
  mobileImage: Image | null;
};

export type HeroDTO = {
  subtitle: string;
  title: string;
  heroImage: ImageDto;
  video?: ImageDto;
  button?: LinkButtonDto;
  mobileImage?: ImageDto;
};

export type ContentBlock = TextBlock | Image | TextBlockWithStyleOrLink;

export type ContentBlockDTO = TextBlockDto | ImageDto;

export enum TextTypes {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  Text = "Text",
  Quote = "Quote",
  Bullet = "Bullet",
  TextList = "TextList",
}

export enum TagTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  Text = "p",
  Quote = "q",
  Bullet = "li",
}

export enum MarkTypes {
  Normal = "normal",
  Bold = "bold",
  Italic = "italic",
  Underline = "underline",
}

export type TextBlock = {
  type: TextTypes;
  text: string;
  marks: MarkTypes | undefined;
  link: Link | null;
};

export type TextBlockWithStyleOrLink = {
  type: TextTypes.TextList;
  text: TextBlock[];
  style: TagTypes;
};

export type Link = {
  href: string;
  aTarget: boolean;
};

export enum ContentBlockType {
  Image = "image",
  Block = "block",
  Images = "images",
  Video = "video",
}

export type TextBlockDto = {
  markDefs: LinkDto[];
  style: string;
  _key: string;
  _type: ContentBlockType;
  listItem?: string;
  children: {
    marks: string[];
    text: string;
    _key: string;
    _type: string;
  }[];
};

type Asset = {
  alt: string;
  url: string;
};

export type Image = {
  type: ContentBlockType.Image;
} & Asset;

export type Video = {
  type: ContentBlockType.Video;
} & Asset;

export type ImageDto = {
  alt: string;
  asset: {
    _type: string;
    _ref: string;
  };
  _key: string;
  _type: ContentBlockType;
};

export type ImageWithLink = Image & {
  link?: Link | null;
  title?: string;
  description: string | null;
};

export type ImageWithLinkDto = {
  image: ImageDto;
  link: LinkDto;
  title: string;
  description: string;
};

export enum MarkType {
  Link = "link",
  Reference = "internalLink",
  LinkWithImage = "imageWithLink",
}

export type LinkDto = {
  _key: string;
  _type: MarkType;
  blank?: boolean;
  href?: string;
  reference?: Reference;
};

export type Reference = { current: string; _type: string };

export type RegisterPage = ContentPage & {
  success: SuccessContent;
};

export type SuccessContent = {
  images: ImageWithLink[] | null;
  content: ContentBlock[] | null;
};

export type RegisterPageDto = ContentPageDTO & {
  success: {
    images?: ImageWithLinkDto[];
    content?: ContentBlockDTO[];
  };
};

export type ImageList = {
  _key: string;
  _type: "imageList";
  images: ImageWithLinkDto[];
};

export type BlockList = {
  _key: string;
  _type: "blocks";
  blockList: ImageWithLinkDto[];
};

export type ContentContainer = {
  _key: string;
  _type: "content";
  content: ContentBlockDTO[];
};

export type ContentBlockObject =
  | {
      type: "images" | "blocks";
      content: ImageWithLink[];
    }
  | {
      type: "content";
      content: ContentBlock[];
    }
  | {
      type: "textAndImage";
      content: ImageWithText;
    };
