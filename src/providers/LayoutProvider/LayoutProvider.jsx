import React from 'react'
import DrawerProvider from './DrawerProvider'
import SnackProvider from './SnackProvider'

export default function LayoutProvider({ children }) {
    return (
        <SnackProvider>
            <DrawerProvider>
                {children}
            </DrawerProvider>
        </SnackProvider>
    )
}
