import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { memo } from 'react';
import type { FC } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { WidthRestriction } from '../../foundation/WidthRestriction';

import * as styles from './ProductHeroImage.styles';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = memo(({ product, title }) => {
  // const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;
  console.log('ProductHeroImage', product)
  const thumbnailFile = product.media[0].file

  return (
          <WidthRestriction>
            <Anchor href={`/product/${product.id}`}>
              <div className={styles.container()}>
                <div style={{aspectRatio: "16/9"}}>
                    <img className={styles.image()} src={thumbnailFile.Width1024Filename ?? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='} />
                </div>
                <div className={styles.overlay()}>
                  <p
                    className={classNames(styles.title())}
                  >
                    {title}
                  </p>
                  <p
                    className={classNames(styles.description())}
                  >
                    {product.name}
                  </p>
                </div>
              </div>
            </Anchor>
          </WidthRestriction>
  );
}, isEqual);

ProductHeroImage.displayName = 'ProductHeroImage';
