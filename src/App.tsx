import { ThemeProvider } from 'styled-components';

import darkTheme from './styles/themes/dark';
// import lightTheme from './styles/themes/light';

import Layout from './components/Layout';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
