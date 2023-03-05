import type { FC } from 'react';
import { Suspense} from 'react'
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/application/Layout';
import { ProductList } from '../../components/feature/ProductList';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useLazyFeatures } from '../../hooks/useLazyFeatures'

import * as styles from './Top.styles';

export const Top: FC = () => {
  const {features: prefeatures} = useFeatures(0,1)
  const {features: nextFeatures} = useLazyFeatures(1,10)
  
  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <Layout>
        <div>
          <ProductHeroImage title="今週のオススメ" />
            <div className={styles.featureList()}>
              {prefeatures.map((featureSection) => {
                return (
                  <div key={featureSection.id} className={styles.feature()}>
                    <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                    <ProductList featureSection={featureSection} />
                  </div>
                );
              })}
              <Suspense fallback={<div></div>}>
              {nextFeatures?.map((featureSection) => {
                return (
                  <div key={featureSection.id} className={styles.feature()}>
                    <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                    <ProductList featureSection={featureSection} />
                  </div>
                );
              })}
            </Suspense>
            </div>
        </div>
      </Layout>
    </>
  );
};
