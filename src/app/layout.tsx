// CHECKLIST : className did not match 문제 해결
import type { Metadata } from 'next'

import MUIClient from 'lib/mui.tsx'
import StyledComponentsRegistry from 'lib/registry.tsx'
import OpenViduClient from 'lib/serviceWorker.tsx'
import './globals.css'

import ThemeClient from 'lib/theme.tsx'
import { notoSansKr } from 'utils/styles.ts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      <body>
        <ThemeClient>
          <MUIClient>
            <OpenViduClient>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </OpenViduClient>
          </MUIClient>
        </ThemeClient>
      </body>
    </html>
  )
}
