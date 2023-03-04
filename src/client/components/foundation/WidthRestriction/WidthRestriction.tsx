import type { FC, ReactNode } from 'react';

import * as styles from './WidthRestriction.styles';

type Props = {
  children: ReactNode;
};

export const WidthRestriction: FC<Props> = ({ children }) => {

  return (
    <div className={styles.container()}>
      <div style={{margin: "0px auto", maxWidth: 1024, width: "100%"}}>{children}</div>
    </div>
  );
};
