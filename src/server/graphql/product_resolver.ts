import { LimitedTimeOffer } from '../../model/limited_time_offer';
import type { Product } from '../../model/product';
import { ProductMedia } from '../../model/product_media';
import { Review } from '../../model/review';
import { dataSource } from '../data_source';

import type { GraphQLModelResolver } from './model_resolver';

export const productResolver: GraphQLModelResolver<Product> = {
  // @ts-ignore
  media: (parent, res) => {
    const object: any = {
      where: {
        product: parent
      },
    }
    const {filter, limit} = res
    if (filter?.isThumbnail !== undefined) {
      object.where.isThumbnail = filter.isThumbnail
    }
    if (limit !== undefined) {
      object.take = limit
    }
    return dataSource.manager.find(ProductMedia, object);
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
