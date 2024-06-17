import { MetaData, MetaDataDto } from '../../types/content/navigation';
import { mapImageBlock } from './mapImageBlock';

export const mapMetaData = (metaDto: MetaDataDto): MetaData => {
  return {
    description: metaDto.description,
    favicon: {
      androidBig: mapImageBlock(metaDto?.favicon?.androidBig),
      androidSmall: mapImageBlock(metaDto?.favicon?.androidSmall),
      apple: mapImageBlock(metaDto?.favicon?.apple),
      faviconBig: mapImageBlock(metaDto?.favicon?.faviconBig),
      faviconSmall: mapImageBlock(metaDto?.favicon?.faviconSmall),
    },
    keywords: metaDto.keywords,
    logo: mapImageBlock(metaDto?.logo),
    title: metaDto.title,
    social: {
      facebook: metaDto?.social?.facebook ?? '',
      instagram: metaDto?.social?.instagram ?? '',
      mail: metaDto?.social?.mail ?? '',
    },
  };
};
