// Libraries
import { Method } from 'axios';

// Constants
import { APP_CONFIG } from '@/constants';
import { TResponse } from '@/types/Api';

type TCallAPIParams = {
  method: Method;
  url: string;
  params?: Record<string, any>;
  data?: any;
};

type TCallAPIUploadParams = {
  method: Method;
  url: string;
  body?: any;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function callApi<T>({
  method,
  url,
  params,
  data,
}: TCallAPIParams): Promise<TResponse<T>> {
  let newUrl = `${baseURL}/${APP_CONFIG.API_VERSION}` + url;

  if (params) {
    Object.keys(params).forEach(key => {
      if (newUrl.includes('?')) {
        newUrl += `&${key}=${params[key]}`;
      } else {
        newUrl += `?${key}=${params[key]}`;
      }
    });
  }

  const requestConfig = {
    body: JSON.stringify(data),
    method,
  };

  try {
    const results = await fetch(newUrl, requestConfig);

    return results.json();
  } catch (err: any) {
    throw new Error(err.response?.data.message);
  }
}

export async function callApiUpload({
  method,
  url,
  body,
}: TCallAPIUploadParams): Promise<any> {
  const requestConfig = {
    body: body,
    method,
  };

  try {
    const results = await fetch(`${baseURL}${url}`, requestConfig);

    return results.json();
  } catch (err: any) {
    throw new Error(err.response?.data.message);
  }
}
