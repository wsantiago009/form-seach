'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

import { BookingFormData } from '@/types/index'

type DataContext = {
    data: BookingFormData | null
    setData: (data: BookingFormData) => void
}

const BookingContext = createContext<DataContext | null>(null)

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<BookingFormData | null>(null)

    return (
        <BookingContext.Provider value={{ data, setData }}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => {
    const context = useContext(BookingContext)
    if (!context) {
        throw new Error('useBookingContext must be used within BookingProvider')
    }
    return context
}
