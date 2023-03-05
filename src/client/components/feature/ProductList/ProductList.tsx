import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { memo, lazy } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
const ProductGridList = lazy(() => import('../ProductGridList'));
const ProductListSlider = lazy(() => import('../ProductListSlider'));

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  return (
    <>
      <ProductListSlider featureSection={featureSection} />
      <ProductGridList featureSection={featureSection} />
    </>
  );
}, isEqual);

ProductList.displayName = 'ProductList';
