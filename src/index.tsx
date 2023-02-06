import ReactDOM from 'react-dom/client';
import RouterApp from './App/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
        <ThemeProvider theme={theme}>
                <RouterProvider router={RouterApp} />
        </ThemeProvider>

);