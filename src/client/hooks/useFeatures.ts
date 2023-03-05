import { useSuspenseQuery_experimental as useSuspenseQuery } from '@apollo/client';

import type { GetFeatureSectionsQueryResponse } from '../graphql/queries';
import { GetFeatureSectionsQuery } from '../graphql/queries';

export const useFeatures = (skip: number, limit: number) => {
  const featuresResult = useSuspenseQuery<GetFeatureSectionsQueryResponse>(GetFeatureSectionsQuery, {    variables: {
    skip,limit
  },});
  const features = featuresResult.data?.features;

  return { features };
};
