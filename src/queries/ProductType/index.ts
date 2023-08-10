// Libraries
import { UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import { App } from 'antd';
import { useSession } from 'next-auth/react';

// Constants
import { APP_CONFIG, QUERY_KEYS } from '@/constants';

// Utils
import { queryClient } from '@/utils';

// Services
import {
  createProductType,
  deleteProductType,
  getListProductType,
  getProductTypeDetail,
  updateProductType,
} from '@/services/ProductType';

// Types
import { ProductType } from '@/models';


type TGetListProductType = {
  seller_id?: number;
  options?: UseQueryOptions<any, any, ProductType[], (string | number)[]>;
};

type TGetListProductTypeDetail = {
  id?: number;
  options?: UseQueryOptions<any, any, ProductType, (string | number)[]>;
};

export const useGetListProductType = (params: TGetListProductType) => {
  const { data } = useSession();
  const { sellerId = APP_CONFIG.SELLER_ID } = (data?.user as any) || {};

  return useQuery({
    queryKey: [QUERY_KEYS.GET_LIST_PRODUCT_TYPE, sellerId],
    queryFn: () => getListProductType({ seller_id: sellerId }),
    placeholderData: [],
    ...params.options,
  });
};

export const useGetProductTypeDetail = (params: TGetListProductTypeDetail) => {
  const { data } = useSession();
  const { sellerId = APP_CONFIG.SELLER_ID } = (data?.user as any) || {};

  return useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCT_TYPE_DETAIL, sellerId, params.id],
    queryFn: () =>
      getProductTypeDetail({ seller_id: sellerId, id: params.id || -1 }),
    placeholderData: {},
    enabled: !!sellerId && !!params.id,
    ...params.options,
  });
};

export const useCreateProductType = () => {
  const { notification } = App.useApp();

  return useMutation(createProductType, {
    onError: () => {
      notification.error({
        message: 'CREATE PRODUCT TYPE',
        description: 'Created new product type unsuccessfully',
      });
    },
    onSuccess: () => {
      notification.success({
        message: 'CREATE PRODUCT TYPE',
        description: 'Created new product type successfully',
      });

      queryClient.invalidateQueries([QUERY_KEYS.GET_LIST_CATEGORIES], {
        exact: false,
      });
    },
  });
};

export const useUpdateProductType = () => {
  const { notification } = App.useApp();
  return useMutation(updateProductType, {
    onSuccess: (data, variables) => {
      notification.success({
        message: 'UPDATE PRODUCT TYPE',
        description: 'Updated product type successfully',
      });
    },
  });
};

export const useDeleteProductType = () => {
  return useMutation(deleteProductType, {
    onSuccess: () => {},
  });
};
