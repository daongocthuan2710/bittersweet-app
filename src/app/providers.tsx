'use client';

// Libraries
import React from 'react';
import { App } from 'antd';
import { SessionProvider } from 'next-auth/react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

// Utils
import { SEO, queryClient } from '@/utils';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Themes
import { AntdConfigProvider } from '@/theme';

interface ProvidersProps {
  children: React.ReactNode;
}

const helmetContext = {};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <SEO title="Bittersweet" description="Bittersweet description" />
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ThemeProvider enableSystem={false}>
            <AntdConfigProvider>
              <App>{children}</App>
            </AntdConfigProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </SessionProvider>
    </HelmetProvider>
  );
};
