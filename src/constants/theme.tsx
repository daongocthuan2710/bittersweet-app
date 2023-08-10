// Libraries
import React from 'react';

// Types
import { theme, ThemeConfig } from 'antd';

// Icons
import { DarkMode, LightMode } from '../app/icons';

// Variables
const { defaultAlgorithm, darkAlgorithm, getDesignToken, useToken } = theme;

type TExtendTheme = {
  token: {
    headerHeight: number;
    siderWidth: number;
    [key: string]: unknown;
  };
};

export type TTheme = {
  token?: ThemeConfig['token'] & TExtendTheme['token'];
  components?: ThemeConfig['components'];
  algorithm?: ThemeConfig['algorithm'];
  hashed?: ThemeConfig['hashed'];
  inherit?: ThemeConfig['inherit'];
};

export const THEME: TTheme = {
  token: {
    // colorText: '#000000',
    // colorTextPlaceholder: '#BEBEBE',
    colorTextSecondary: '#ACACAC',
    colorInfoTextActive: '#ffffff',
    colorError: '#CF1825',
    colorPrimary: '#33A3DC',
    colorLink: '#33A3DC',
    colorLinkHover: '#33A3DC',
    fontSize: 16,
    fontSizeLG: 16,
    fontWeightStrong: 500,
    fontFamily: 'Arial',
    siderWidth: 270,
    headerHeight: 64,
    paddingXXS: 4,
    borderRadiusXS: 4,
    boxShadowSecondary: `0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
  },
};

THEME.components = {
  Tabs: {
    margin: 24,
    paddingSM: 16,
  },
  Input: {},
  Dropdown: {},
  Select: {
    controlHeight: 40,
  },
  Collapse: {
    paddingSM: 8,
  },
  Modal: {
    titleFontSize: 20,
    fontWeightStrong: 600,
  },
  Result: {
    titleFontSize: 20,
  },
};

export const THEMES = {
  DARK_THEME: {
    key: 'dark',
    label: 'Dark theme',
    icon: <DarkMode />,
  },
  LIGHT_THEME: {
    key: 'light',
    label: 'Light theme',
    icon: <LightMode />,
  },
};

export const GLOBAL_TOKEN = getDesignToken(THEME);

export { darkAlgorithm, defaultAlgorithm, useToken };
