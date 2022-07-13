import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>CRA Storybook</h1>
    </ThemeProvider>
  );
}

export default App;
