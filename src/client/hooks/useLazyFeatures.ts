import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';


import type { GetFeatureSectionsQueryResponse } from '../graphql/queries';
import { GetFeatureSectionsQuery } from '../graphql/queries';

export const useLazyFeatures = (skip: number, limit: number) => {
  const handleError = useErrorHandler();

  const [loadFeatures, featuresResult] = useLazyQuery<GetFeatureSectionsQueryResponse>(GetFeatureSectionsQuery, {
    onError: handleError,
    variables: {
        skip,limit,
    },
  });

  useEffect(() => {
    // サーバー負荷が懸念されそうなので、リクエストを少し待つ
    // サーバー負荷がなくなれば、すぐ読み込んでもよい
    const timer = setTimeout(() => {
        loadFeatures();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [loadFeatures, skip, limit]);

  const features = featuresResult.data?.features;

  return { features };
};
