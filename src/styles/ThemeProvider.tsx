import React, { createContext, useContext, useState } from 'react';
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
  createTheme,
} from '@mui/material';

import 'pretendard/dist/web/variable/pretendardvariable.css';

// 브라우저 테마 관리
const ThemeContext = createContext({
  toggleMode: () => {},
  mode: 'light' as PaletteMode,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 기본 디자인은 다크 모드로 개발합니다.
  // 모드에 따른 디자인을 확인하기 위해 생성
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          // 폰트 이름을 formatter로 정렬하기 위해서
          fontFamily: [
            'Pretendard Variable',
            'Pretendard',
            '-apple-system',
            'BlinkMacSystemFont',
            'system-ui',
            'Roboto',
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'sans-serif',
          ].join(','),
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// useTheme은 mui의 hook과 겹침
// react-refresh/only-export-components 원칙에 따라서 사용한다면 훅과 컴포넌트를 분리
export const useThemeMode = () => useContext(ThemeContext);

export default ThemeProvider;
