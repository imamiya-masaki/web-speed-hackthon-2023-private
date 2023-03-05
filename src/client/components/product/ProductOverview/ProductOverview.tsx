import * as currencyFormatter from 'currency-formatter';
import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { memo } from 'react';

import type { LimitedTimeOfferFragmentResponse, ProductFragmentResponse } from '../../../graphql/fragments';
import { ProductOfferLabel } from '../ProductOfferLabel';

import * as styles from './ProductOverview.styles';

type Props = {
  product: ProductFragmentResponse | undefined;
  activeOffer: LimitedTimeOfferFragmentResponse | undefined;
};

export const ProductOverview: FC<Props> = memo(({ activeOffer, product }) => {
  if (product === undefined) {
    return null;
  }

  const renderActiveOffer = () => {
    if (activeOffer === undefined) {
      return;
    }

    const DateString = (dateString: string) => {
      const date = new Date(dateString)
      const day = date.getDate()
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const second = date.getSeconds()
      const month = date.getMonth() + 1;
      const zeroadd = (a: number) => {
        return `${a <= 9 ? `0${a}`: `${a}`}`
      }
      const year = date.getFullYear();
      return `${year}/${zeroadd(month)}/${zeroadd(day)} ${zeroadd(hour)}:${zeroadd(minutes)}:${zeroadd(second)}`
    }

    const endTime = DateString(activeOffer.endDate)

    return (
      <div className={styles.offerLabel()}>
        <ProductOfferLabel size="lg">
          <time>{endTime}</time> までタイムセール
        </ProductOfferLabel>
      </div>
    );
  };

  return (
    <div className={styles.container()}>
      {renderActiveOffer()}
      <p className={styles.productName()}>{product.name}</p>
      <p className={styles.productDescription()}>{product.description}</p>

      <div className={styles.priceWrapper()}>
        {activeOffer !== undefined ? (
          <span className={styles.priceWithoutOffer()}>
            {currencyFormatter.format(product.price, { code: 'JPY', precision: 0 })}
          </span>
        ) : null}
        <span className={styles.price()}>
          {currencyFormatter.format(activeOffer?.price ?? product.price, { code: 'JPY', precision: 0 })}
        </span>
      </div>
    </div>
  );
}, isEqual);

ProductOverview.displayName = 'ProductOverview';
