// Libraries
import styled from '@emotion/styled';

// Constants
import { GLOBAL_TOKEN } from '@/constants/theme';

const { colorBgElevated, borderRadiusLG } = GLOBAL_TOKEN || {};

export const CustomDropdown = styled.div`
  position: relative;
  background-color: ${colorBgElevated};
  border-radius: ${borderRadiusLG}px;
  box-sizing: border-box;
  overflow: auto;
  max-height: 400px;
`;
