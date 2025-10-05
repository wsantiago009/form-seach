import Image from 'next/image'
import BookingForm from './components/BookingForm'

import PageWrapper from '@/components/PageWrapper'

export default function Home() {
    return (
        <PageWrapper className="grid">
            <div className="relative h-[95vh]">
                <div className="absolute inset-0 flex justify-center sm:items-center sm:justify-start z-10">
                    <BookingForm />
                </div>
                <Image
                    src="/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg"
                    alt="home"
                    style={{ objectFit: 'cover' }}
                    fill
                    className="rounded-md object-cover pl-0 pt-46 sm:pl-48 sm:pt-0"
                    sizes="100vw"
                />
            </div>
        </PageWrapper>
    )
}
