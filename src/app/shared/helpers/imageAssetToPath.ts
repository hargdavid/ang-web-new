import { environment } from '../../../environments/environments';

/*
    Example Input:
    image-ceb1c18e5f5082981a2f14f0700858a9be1b9e61-5472x3648-jpg
*/
export const imageAssetToPath = (rawString?: string): string => {
  if (typeof rawString === 'undefined') {
    return '';
  } else {
    const cdnBasePath = `${environment.cmsUrl}images/${environment.cmsId}/production/`;
    const type =
      rawString.indexOf('-jpg') !== -1
        ? ImageType.JPG
        : rawString.indexOf('-png') !== -1
        ? ImageType.PNG
        : rawString.indexOf('-webp') !== -1
        ? ImageType.WEBP
        : rawString.indexOf('-svg') !== -1
        ? ImageType.SVG
        : ImageType.MP4;

    let formattedString = rawString.replace('image-', '');

    if (type === ImageType.JPG) {
      formattedString = formattedString.replace('-jpg', '.jpg');
    } else if (type === ImageType.MP4) {
      formattedString = formattedString.replace('-mp4', '.mp4');
    } else if (type === ImageType.WEBP) {
      formattedString = formattedString.replace('-webp', '.webp');
    } else if (type === ImageType.SVG) {
      formattedString = formattedString.replace('-svg', '.svg');
    } else {
      formattedString = formattedString.replace('-png', '.png');
    }

    return cdnBasePath + formattedString;
  }
};

export const videoAssetToPath = (rawString: string): string => {
  if (typeof rawString === 'undefined') {
    return '';
  }

  const cdnBasePath = `${environment.cmsUrl}files/${environment.cmsId}/production/`;
  const type = ImageType.MP4;

  let formattedString = rawString.replace('file-', '');
  formattedString = formattedString.replace('-mp4', '.mp4');

  return cdnBasePath + formattedString;
};

enum ImageType {
  JPG,
  PNG,
  MP4,
  WEBP,
  SVG,
}
