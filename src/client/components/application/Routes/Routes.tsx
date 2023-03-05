import { FC, Suspense } from 'react';
import * as Router from 'react-router-dom';

import { NotFound } from '../../../pages/NotFound';
import { Order } from '../../../pages/Order';
import { OrderComplete } from '../../../pages/OrderComplete';
import { ProductDetail } from '../../../pages/ProductDetail';
import { Top } from '../../../pages/Top';

import { useScrollToTop } from './hooks';

export const Routes: FC = () => {
  useScrollToTop();

  /**
   *     <Router.Routes>
      <Suspense fallback={<div></div>}><Router.Route element={<Top />} path="/" /></Suspense>
      <Suspense fallback={<div></div>}><Router.Route element={<ProductDetail />} path="/product/:productId" /></Suspense>
      <Suspense fallback={<div></div>}><Router.Route element={<Order />} path="/order" /></Suspense>
      <Suspense fallback={<div></div>}><Router.Route element={<OrderComplete />} path="/order/complete" /></Suspense>
      <Suspense fallback={<div></div>}><Router.Route element={<NotFound />} path="*" /></Suspense>
    </Router.Routes>
   */
  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
