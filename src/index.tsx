import ReactDOM from 'react-dom/client';
import RouterApp from './App/Router';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();
root.render(
                <QueryClientProvider client={queryClient}>
                        <RouterProvider router={RouterApp} />
                </QueryClientProvider>
);