import * as currencyFormatter from 'currency-formatter';
import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { memo, useState, useEffect } from 'react';


import type { OrderFragmentResponse } from '../../../graphql/fragments';
import { getActiveOffer } from '../../../utils/get_active_offer';
import { CartItem } from '../CartItem';


import * as styles from './OrderPreview.styles';

type Props = {
  order: OrderFragmentResponse;
  onUpdateCartItem: (productId: number, amount: number) => void;
  onRemoveCartItem: (productId: number) => void;
};

export const OrderPreview: FC<Props> = memo(({ onRemoveCartItem, onUpdateCartItem, order }) => {
  const [totalPrice, setTotalPrice] = useState<number>(order.items.reduce((sum, item) => sum + (item.product.price * item.amount), 0));

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = order.items.map(item => {return {offer: getActiveOffer(item.product.offers), item: item}}).filter(offer => offer?.offer)
      let diffSum = 0
      for (const d of diff) {
        diffSum += (d.item.product.price - (d?.offer?.price ?? 0))*d.item.amount
      }
      if (diffSum) {
        setTotalPrice(totalPrice - diffSum)
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [order]);

  const onUpdateFunc = (productId: number, amount: number) => {
    const i = order.items.find(item => item.product.id === productId)
    setTotalPrice(totalPrice + (i?.product.price ?? 0)*(amount - (i?.amount ?? 0)) )
    return onUpdateCartItem(productId, amount)
  }
  const onRemoveFunc = (productId: number) => {
    const p = order.items.find(item => item.product.id === productId)
    setTotalPrice(totalPrice - ((p?.product.price ?? 0) * (p?.amount ?? 0)))
    return onRemoveCartItem(productId)
  }
  return (
    <div className={styles.container()}>
      <ul className={styles.itemList()}>
        {order.items.map((item) => {
          return (
            <li key={item.product.id}>
              <CartItem item={item} onRemove={onRemoveFunc} onUpdate={onUpdateFunc} />
            </li>
          );
        })}
      </ul>
      <p className={styles.totalPrice()}>{currencyFormatter.format(totalPrice, { code: 'JPY', precision: 0 })}</p>
    </div>
  );
}, isEqual);

OrderPreview.displayName = 'OrderPreview';
