import type { FC } from 'react';

import type { ReviewFragmentResponse } from '../../../graphql/fragments';
import { Image } from '../../foundation/Image';

import * as styles from './ReviewList.styles';

type Props = {
  reviews: ReviewFragmentResponse[];
};

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

export const ReviewList: FC<Props> = ({ reviews }) => {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <ul className={styles.itemList()}>
      {reviews.map((review) => {
        const endTime = DateString(review.postedAt)

        return (
          <li key={review.id} className={styles.item()} data-testid="review-list-item">
            <div className={styles.avaterImage()}>
              <div style={{aspectRatio: "1/1", position: "relative"}}>
                <Image height={52} src={review.user.profile.avatar.filename} width={52} />
              </div>
            </div>
            <div className={styles.content()}>
              <time className={styles.time()}>{endTime}</time>
              <p className={styles.comment()}>{review.comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
