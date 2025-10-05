'use client'

import { useState } from 'react'
import Form from 'next/form'
import { useRouter } from 'next/navigation'

import { DatePicker, Input, InputNumber, Button } from 'antd'
import type { Dayjs } from 'dayjs'

import { useBookingContext } from '@/context/BookingContext'
import { BookingFormData } from '@/types/index'
import dayjs from 'dayjs'

const BookingForm = () => {
    const router = useRouter()
    const { setData } = useBookingContext()
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [fromDate, setFromDate] = useState<Dayjs | null>(null)
    const [toDate, setToDate] = useState<Dayjs | null>(null)

    function validateForm(formData: FormData): boolean {
        const newErrors: Record<string, string> = {}

        const location = formData.get('location') as string
        const from = formData.get('from') as string
        const to = formData.get('to') as string

        if (!location?.trim()) {
            newErrors.location = 'This field is required'
        }

        if (!from?.trim()) {
            newErrors.from = 'This field is required'
        }

        if (!to?.trim()) {
            newErrors.to = 'This field is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleFieldChange(fieldName: string) {
        if (errors[fieldName]) {
            setErrors((prev) => ({
                ...prev,
                [fieldName]: '',
            }))
        }
    }

    const handleFromDateChange = (date: Dayjs | null) => {
        setFromDate(date)
        handleFieldChange('from')
    }

    const handleToDateChange = (date: Dayjs | null) => {
        setToDate(date)
        handleFieldChange('to')
    }

    const disableToDates = (current: Dayjs) => {
        if (!fromDate) {
            return false
        }

        return (
            current.isBefore(fromDate, 'day') ||
            current.isSame(fromDate.add(0, 'day'), 'day')
        )
    }

    const disableFromDates = (current: Dayjs) => {
        if (!toDate) {
            return false
        }
        return (
            (current && current.isAfter(toDate, 'day')) ||
            current.isSame(toDate?.subtract(0, 'day'), 'day')
        )
    }

    function onFinish(formData: FormData) {
        if (!validateForm(formData)) return

        const bookingData: BookingFormData = {
            location: formData.get('location') as string,
            from: dayjs(formData.get('from') as string),
            to: dayjs(formData.get('to') as string),
            adults: Number(formData.get('adults')) || 1,
            children: Number(formData.get('children')) || 0,
        }
        setData(bookingData)
        router.push('./search')
    }

    return (
        <Form action={onFinish}>
            <div className="grid grid-cols-12 gap-5 max-w-[442px] [&_label]:mb-2 [&_label]:block bg-white p-8 rounded-xl">
                <div className="col-span-12 mb-4">
                    <h2 className="text-3xl font-bold text-[#7749EF] mb-5">
                        HomeGlobe
                    </h2>
                    <h3 className="text-2xl font-bold mb-3">
                        Find places to stay anywhere
                    </h3>
                    <p className="text-[#4B5563]">
                        Discover entire homes and rooms perfect for any trip or
                        special occasion.
                    </p>
                </div>
                <div className="col-span-12 mb-4">
                    <label htmlFor="location">Location</label>
                    <Input
                        placeholder="Anywhere"
                        className="w-full placeholder:text-sm"
                        id="location"
                        name="location"
                        status={errors.location ? 'error' : ''}
                        onChange={() => handleFieldChange('location')}
                    />

                    {errors.location && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.location}
                        </p>
                    )}
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="from">From</label>
                    <DatePicker
                        className="w-full [&_input::placeholder]:text-sm"
                        id="from"
                        placeholder="Add Date"
                        name="from"
                        status={errors.from ? 'error' : ''}
                        disabledDate={disableFromDates}
                        onChange={handleFromDateChange}
                        format={'MM/DD/YYYY'}
                        inputReadOnly
                    />

                    {errors.from && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.from}
                        </p>
                    )}
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="to">To</label>
                    <DatePicker
                        className="w-full [&_input::placeholder]:text-sm"
                        id="to"
                        placeholder="Add Date"
                        name="to"
                        status={errors.to ? 'error' : ''}
                        onChange={handleToDateChange}
                        disabledDate={disableToDates}
                        format={'MM/DD/YYYY'}
                        inputReadOnly
                    />

                    {errors.to && (
                        <p className="text-red-500 text-xs mt-1">{errors.to}</p>
                    )}
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="adults">Adults</label>
                    <InputNumber
                        min={1}
                        className="!w-full"
                        id="adults"
                        name="adults"
                        defaultValue={1}
                        status={errors.adults ? 'error' : ''}
                    />

                    {errors.adults && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.adults}
                        </p>
                    )}
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="children">Children</label>
                    <InputNumber
                        min={0}
                        className="!w-full"
                        id="children"
                        name="children"
                        defaultValue={0}
                        status={errors.children ? 'error' : ''}
                    />

                    {errors.children && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.children}
                        </p>
                    )}
                </div>
                <div className="col-span-12 mb-4">
                    <Button
                        type="primary"
                        className="rounded-md !hover:border-[#AF72FF] !w-full"
                        htmlType="submit"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </Form>
    )
}
export default BookingForm
