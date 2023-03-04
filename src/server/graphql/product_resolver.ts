import { LimitedTimeOffer } from '../../model/limited_time_offer';
import type { Product } from '../../model/product';
import { ProductMedia } from '../../model/product_media';
import { Review } from '../../model/review';
import { dataSource } from '../data_source';

import type { GraphQLModelResolver } from './model_resolver';

export const productResolver: GraphQLModelResolver<Product> = {
  // @ts-ignore
  media: (parent, {filter, limit}) => {
    return dataSource.manager.find(ProductMedia, {
      where: {
        isThumbnail: filter.isThumbnail,
        product: parent,
      },
      take: limit
    });
  },
  offers: (parent) => {
    return dataSource.manager.find(LimitedTimeOffer, {
      where: {
        product: parent,
      },
    });
  },
  reviews: (parent) => {
    return dataSource.manager.find(Review, {
      where: {
        product: parent,
      },
    });
  },
};
