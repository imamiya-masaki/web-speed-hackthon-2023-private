import type { FC } from 'react';
import { useEffect, useState, lazy } from 'react';


import { getMediaType } from '../../../../utils/get_media_type';
const Image = lazy(() => import('../../../foundation/Image'));

import * as styles from './MediaItem.styles';

type Props = {
  filename: string;
};

export const MediaItem: FC<Props> = ({ filename }) => {
  const [imageSrc, setImageSrc] = useState<string>();
  const mediaType = getMediaType(filename);
  useEffect(() => {
    if (mediaType === 'image') {
      return setImageSrc(filename);
    }
  }, [filename, mediaType]);

  if (imageSrc === undefined) {
    return null;
  }

  return (
    <div className={styles.container()}>
      <Image fill src={imageSrc.replace('mp4', 'png')} />
    </div>
  );
};
