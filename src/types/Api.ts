export type TResponse<T> = {
    code: string;
    scope: string;
    id: number;
    version: number;
    status: string;
    data?: T;
    datas?: T[];
  };
  