// Api
import { ProductType } from '@/models';
import { callApi } from '../Api';

const pathUrl = `/product_type`;

type TCreateProductType = {
  seller_id: number;
  [key: string]: any;
};

type TUpdateProductType = {
  seller_id: number;
  id: number;
  [key: string]: any;
};

type TGetListProductType = {
  seller_id: number;
};

type TDeleteProductType = {
  seller_id: number;
  id: number;
};

type TGetProductTypeDetail = {
  seller_id: number;
  id: number;
};

export const createProductType = async (data?: TCreateProductType) => {
  try {
    const result = await callApi({
      method: 'POST',
      url: pathUrl,
      params: {
        scope: 'create',
      },
      data,
    });

    return result;
  } catch (error) {
    Promise.reject(error);
  }
};

export const getProductTypeDetail = async (
  data?: TGetProductTypeDetail,
): Promise<ProductType | undefined> => {
  try {
    const result = await callApi<ProductType>({
      method: 'POST',
      url: pathUrl,
      params: {
        scope: 'get',
      },
      data,
    });

    return result?.data;
  } catch (error) {
    Promise.reject(error);
  }
};

export const updateProductType = async (data?: TUpdateProductType) => {
  try {
    const result = await callApi({
      method: 'POST',
      url: pathUrl,
      params: {
        scope: 'update',
      },
      data,
    });

    return result;
  } catch (error) {
    Promise.reject(error);
  }
};

export const getListProductType = async (data: TGetListProductType) => {
  try {
    const result = await callApi({
      method: 'POST',
      url: pathUrl,
      params: {
        scope: 'list',
      },
      data,
    });

    return result.datas || [];
  } catch (error) {
    Promise.reject(error);
  }
};

export const deleteProductType = async (data: TDeleteProductType) => {
  try {
    const result = await callApi({
      method: 'POST',
      url: pathUrl,
      params: { scope: 'delete' },
      data,
    });

    return result || {};
  } catch (error) {
    Promise.reject(error);
  }
};
