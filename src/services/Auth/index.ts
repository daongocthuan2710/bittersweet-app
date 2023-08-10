// Instance
import { axiosInstance } from '@/services/instance';

// Constants
import { APP_CONFIG } from '@/constants';

const BASE_URL = APP_CONFIG.BASE_URL;

type TLoginParams = {
  username?: string;
  password?: string;
};

export const login = async (params: TLoginParams) => {
  try {
    const response = await axiosInstance({
      method: 'POST',
      url: `${BASE_URL}/api/login`,
      data: params,
    });

    return response.data;
  } catch (error) {
    Promise.reject(error);
  }
};
