// Libraries
import React from 'react';
import { Spin, SpinProps } from 'antd';

// Icons
import { LoadingOutlined } from '@ant-design/icons';

interface LoadingProps extends SpinProps {
  children?: React.ReactNode;
  fontSize?: number | string;
}

export const Loading: React.FC<LoadingProps> = props => {
  const { children, fontSize = 40, ...restProps } = props;

  return (
    <Spin
      indicator={<LoadingOutlined style={{ fontSize }} spin />}
      {...restProps}
    >
      {children}
    </Spin>
  );
};

export const FullLoading: React.FC<LoadingProps> = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center dark:bg-black bg-white">
      <Loading />
    </div>
  );
};

export const PageLoading: React.FC<LoadingProps> = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Loading />
        </div>
    );
  };
