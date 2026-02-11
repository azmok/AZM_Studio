'use client'

import React, { useEffect } from 'react'

export function AdminHydrationFix({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Suppress specific hydration warnings caused by extensions
        const originalError = console.error
        console.error = (...args) => {
            if (
                typeof args[0] === 'string' &&
                (args[0].includes('Hydration failed') ||
                    args[0].includes('Prop `style` did not match') ||
                    args[0].includes('--vsc-domain'))
            ) {
                // Suppress warning caused by VS Code extension or similar
                return
            }
            originalError(...args)
        }

        return () => {
            console.error = originalError
        }
    }, [])

    return <>{children}</>
}
