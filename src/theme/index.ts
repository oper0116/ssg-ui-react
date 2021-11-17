// src/theme/index.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
// Foundational style overrides
import foundations from './foundations';
// Component style overrides
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'light',
  // 디자인시스템 테스트 개발 기간 동인은 true로 합니다.
  useSystemColorMode: true,
};

const overrides = {
  config,
  styles,
  ...foundations,
  components,
};

export default extendTheme(overrides);
