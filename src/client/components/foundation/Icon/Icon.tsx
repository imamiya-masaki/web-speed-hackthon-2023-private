import classNames from 'classnames';
import type { FC } from 'react';
import {FaArrowLeft,FaArrowRight, FaShoppingCart, FaUser, FaPlay, FaCheckCircle} from 'react-icons/fa';

import * as styles from './Icon.styles';

const iconTypes = ['FaArrowLeft','FaArrowRight', 'FaShoppingCart', 'FaUser', 'FaPlay', 'FaCheckCircle'] as const
type IconType = typeof iconTypes[number]

type Props = {
  type: IconType;
  width: number;
  height: number;
  color: string;
};


export const Icon: FC<Props> = ({ color, height, type, width }) => {
  let Icon = FaArrowLeft;
  switch(type) {
    case 'FaArrowLeft':
      Icon = FaArrowLeft;
      break;
    case 'FaArrowRight':
      Icon = FaArrowRight;
      break;
    case 'FaCheckCircle':
      Icon = FaCheckCircle;
      break;
    case 'FaPlay':
      Icon = FaPlay;
      break;
    case 'FaShoppingCart':
      Icon = FaShoppingCart;
      break;
    case 'FaUser':
      Icon = FaUser;
      break;
  }
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
