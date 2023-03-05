import classNames from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';

import { MediaItem } from './MediaItem';
import { MediaItemPreviewer } from './MediaItemPreviewer';
import * as styles from './ProductMediaListPreviewer.styles';

type Props = {
  product: ProductFragmentResponse | undefined;
};

export const ProductMediaListPreviewer: FC<Props> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const setProduct = product ?? {media: [{id: "", file: {"Width1024Filename": "", "Width224Filename": "", "Width46Filename": "", "filename": "", "id": 0}}]}

  return (
    <div className={styles.container()}>
        <div style={{aspectRatio: "16/9", position: "relative"}}>
          <MediaItemPreviewer file={setProduct.media[activeIndex].file} />
        </div>
      <div className={styles.itemListWrapper()}>
        <ul className={styles.itemList()}>
          {setProduct.media.map((media, index) => {
            const disabled = index === activeIndex;

            return (
              <li key={media.id} className={styles.item()}>
                <div style={{aspectRatio: "1/1", position: "relative"}}>
                  <button
                    className={classNames(styles.itemSelectButton(), {
                      [styles.itemSelectButton__disabled()]: disabled,
                    })}
                    disabled={disabled}
                    onClick={() => setActiveIndex(index)}
                  >
                    <MediaItem filename={media.file.Width46Filename} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
