import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.css';
import AuthProvider from './Provider/AuthProvider';
import router from './Router/Router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
