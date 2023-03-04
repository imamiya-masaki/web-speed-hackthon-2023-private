import { gql } from '@apollo/client';

import type {
  AuthUserFragmentResponse,
  FeatureSectionFragmentResponse,
  ProductReviewFragmentResponse,
  ProductWithReviewFragmentResponse,
  RecommendationFragmentResponse,
} from './fragments';
import {
  AuthUserFragment,
  ProductReviewFragment,
  ProductWithReviewFragment,
  // RecommendationFragment,
} from './fragments';

export const GetAuthUserQuery = gql`
  ${AuthUserFragment}

  query GetAuthUser {
    me {
      ...AuthUserFragment
    }
  }
`;
export type GetUserAuthQueryResponse = {
  me: AuthUserFragmentResponse | null;
};

export const GetProductReviewsQuery = gql`
  ${ProductReviewFragment}

  query GetProductReviews($productId: Int!) {
    product(id: $productId) {
      ...ProductReviewFragment
    }
  }
`;
export type GetProductReviewsQueryResponse = {
  product: ProductReviewFragmentResponse;
};

export const GetProductDetailsQuery = gql`
  ${ProductWithReviewFragment}

  query GetProductDetails($productId: Int!) {
    product(id: $productId) {
      ...ProductWithReviewFragment
    }
  }
`;
export type GetProductDetailsQueryResponse = {
  product: ProductWithReviewFragmentResponse;
};

export const GetRecommendationsQuery = gql`
  query GetRecommendations {
    recommendations {
      id
      product {
        id,
        name,
        price,
        description
        media(filter: {isThumbnail: true}, limit: 1) {
          id
          isThumbnail
          file {
            id
            filename
            Width224Filename
            Width1024Filename
          }
        }
      }
    }
  }
`;
export type GetRecommendationsQueryResponse = {
  recommendations: RecommendationFragmentResponse[];
};

export const GetFeatureSectionsQuery = gql`
  query GetFeatureSections {
    features {
      id,
      title
      items {
        id,
        product {
          id
          name
          price
          description
          media(filter: {isThumbnail: true}, limit: 1) {
            id
            isThumbnail
            file {
              id
              filename
              Width224Filename
              Width1024Filename
            }
          }
          offers {
            id
            price
            startDate
            endDate
          }
        }
      } 
    }
  }
`;
export type GetFeatureSectionsQueryResponse = {
  features: FeatureSectionFragmentResponse[];
};
