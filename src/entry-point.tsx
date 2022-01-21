import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '_state/store';
import App from 'App';
import theme from '_static/theme';

/**
 * Entry point for app logic
 * All global initializations and declarations are done here
  
 * <Provider store: Connect redux to app
 * <PersistGate:  Initialize State persistor
 * <ThemeProvider: Provide theme context to all code
 * <CssBaseline: Initialize all base css for old browsers
 * <ErrorBoundary: Capture unwanted bugs
 * <Administrator: Initializing snack bars loaders, login etc.
 * <RouteController: Main router for the app
 */

export default function EntryPoint() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}
