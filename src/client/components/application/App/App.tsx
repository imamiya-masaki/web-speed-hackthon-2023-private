import type { FC } from 'react';
import { lazy } from 'react';
const SignInModal = lazy(() => import('../../modal/SignInModal'));
const SignUpModal = lazy(() => import('../../modal/SignUpModal'));
const Providers = lazy(() => import('../Providers'));
const Routes = lazy(() => import('../Routes'));

export const App: FC = () => (
  <Providers>
    <Routes />
    <SignInModal />
    <SignUpModal />
  </Providers>
);
