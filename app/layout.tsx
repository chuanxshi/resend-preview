// app/layout.tsx
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Email Preview App',
  description: 'A simple app to preview email templates',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Include meta tags, stylesheets, etc. here if needed */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
