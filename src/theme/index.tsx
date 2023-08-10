// Libraries
import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';

// Constants
import {
  THEME,
  THEMES,
  darkAlgorithm,
  defaultAlgorithm,
} from '../constants/theme';
import { useTheme } from 'next-themes';

interface AntdConfigProviderProps {
  children: React.ReactNode;
}

export const withTheme = (node: JSX.Element) => (
  <ConfigProvider theme={THEME}>{node}</ConfigProvider>
);

export const AntdConfigProvider: React.FC<AntdConfigProviderProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  const refineTheme = useMemo(() => {
    return {
      ...THEME,
      algorithm:
        theme === THEMES.DARK_THEME.key ? darkAlgorithm : defaultAlgorithm,
    };
  }, [theme]);

  return <ConfigProvider theme={refineTheme}>{children}</ConfigProvider>;
};
