import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { memo } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { ProductGridList } from '../ProductGridList';
import { ProductListSlider } from '../ProductListSlider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

// const func = (prevProps: Readonly<any>, nextProps: Readonly<any>) => {
//   const a =  isEqual(prevProps, nextProps)
//   console.log('a', a)
//   console.log('isEqual', prevProps, nextProps)
//   return a
// }

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  return (
    <>
      <ProductListSlider featureSection={featureSection} />
      <ProductGridList featureSection={featureSection} />
    </>
  );
}, isEqual);

ProductList.displayName = 'ProductList';
