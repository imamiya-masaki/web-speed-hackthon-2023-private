import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { memo } from 'react';
import type { FC } from 'react';

import { useRecommendation } from '../../../hooks/useRecommendation';
import { Anchor } from '../../foundation/Anchor';
import { WidthRestriction } from '../../foundation/WidthRestriction';

import * as styles from './ProductHeroImage.styles';

type Props = {
  title?: string;
};

export const ProductHeroImage: FC<Props> = memo(({ title }) => {
  const { recommendation } = useRecommendation();
  const product = recommendation?.product ?? {
    name: "loading",
    media: [{file: {Width1024Filename: ""}}],
    id: 1
  }
  const setTitle = title ?? product?.name
  const thumbnailFile = product?.media[0].file
  return (
          <WidthRestriction>
            <Anchor href={`/product/${product.id}`}>
              <div className={styles.container()}>
                <div style={{aspectRatio: "16/9"}}>
                    <img className={styles.image()}  loading="eager" src={thumbnailFile.Width1024Filename ?? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}/>
                </div>
                <div className={styles.overlay()}>
                  <p
                    className={classNames(styles.title())}
                  >
                    {setTitle}
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
