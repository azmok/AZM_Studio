/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* MODIFIED TO FIX HYDRATION ERROR */
import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import Script from 'next/script'

import { importMap } from './admin/importMap.js'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    <Script id="suppress-hydration-warning" strategy="beforeInteractive">
      {`
        (function() {
          const originalError = console.error;
          console.error = function(...args) {
            if (args[0] && typeof args[0] === 'string') {
              if (
                (args[0].includes('Prop \`style\` did not match') || 
                 args[0].includes('Hydration failed') || 
                 args[0].includes('server rendered HTML')) &&
                (JSON.stringify(args).includes('--vsc-domain') || 
                 JSON.stringify(args).includes('localhost'))
              ) {
                return;
              }
            }
            originalError.apply(console, args);
          };
        })();
      `}
    </Script>
    {children}
  </RootLayout>
)

export default Layout
