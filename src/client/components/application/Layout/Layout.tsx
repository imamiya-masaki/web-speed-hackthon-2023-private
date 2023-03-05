import type { FC, ReactNode } from 'react';
import {Suspense, lazy } from 'react';

const Footer = lazy(() => import('../../navigators/Footer'));
const Header = lazy(() => import('../../navigators/Header'));

import * as styles from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Suspense  fallback={<main></main>}>
      <main className={styles.container()}>{children}</main>
    </Suspense>
    <Footer />
  </>
);
