// Libraries
import { InputNumber, InputNumberProps } from 'antd';
import React from 'react';

interface CurrencyInputNumberProps extends InputNumberProps {}

export const CurrencyInputNumber: React.FC<
  CurrencyInputNumberProps
> = props => {
  const { ...restProps } = props;

  return (
    <InputNumber
      size="large"
      className="!w-full"
      formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      parser={value => value?.replace(/(\.*)/g, '') as any}
      {...restProps}
    />
  );
};
