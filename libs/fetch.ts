import axios, { AxiosRequestConfig } from 'axios';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// 删除 'url' | 'data' | 'method' | 'params'，返回其它
export type RequestConfig = Omit<
  AxiosRequestConfig,
  'url' | 'data' | 'method' | 'params'
>;

export function fetch(options: AxiosRequestConfig) {
  return axios.request(options);
}
