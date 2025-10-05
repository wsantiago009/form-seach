
import type { Dayjs } from 'dayjs'

export type BookingFormData = {
    location: string
    from: Dayjs
    to: Dayjs
    adults: number
    children: number
}

export type LocationFieldData = {
    label: string
    value: string
}