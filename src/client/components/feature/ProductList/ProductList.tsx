import type { FC } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { ProductGridList } from '../ProductGridList';
import { ProductListSlider } from '../ProductListSlider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

export const ProductList: FC<Props> = ({ featureSection }) => {
  return (
    <>
      <ProductListSlider featureSection={featureSection} />
      <ProductGridList featureSection={featureSection} />
    </>
  );
};

ProductList.displayName = 'ProductList';
