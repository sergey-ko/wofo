import PropTypes from 'prop-types';

import 'src/global.css';

// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'WoFo',
  description: 'Workflow automation in AI Era',
  keywords: 'react,material,kit,application,dashboard,admin,template',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'dark', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'preset05', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
