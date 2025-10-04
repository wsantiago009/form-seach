'use client'

import Form from 'next/form'
import { DatePicker, Input, InputNumber, Button } from 'antd'

const BookingForm = () => {
    function onFinish(formData: FormData) {
        alert('Success')
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
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="from">From</label>
                    <DatePicker
                        className="w-full [&_input::placeholder]:text-sm"
                        id="from"
                        placeholder="Add Date"
                        name="from"
                        format={'MM/DD/YYYY'}
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="to">To</label>
                    <DatePicker
                        className="w-full [&_input::placeholder]:text-sm"
                        id="to"
                        placeholder="Add Date"
                        name="to"
                        format={'MM/DD/YYYY'}
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="adults">Adults</label>
                    <InputNumber
                        min={1}
                        className="!w-full"
                        id="adults"
                        name="adults"
                        defaultValue={1}
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <label htmlFor="children">Children</label>
                    <InputNumber
                        min={0}
                        className="!w-full"
                        id="children"
                        name="children"
                        defaultValue={0}
                    />
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
