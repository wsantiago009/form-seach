import Image from 'next/image'
import BookingForm from './components/BookingForm'

export default function Home() {
    return (
        <div className="grid items-center m-auto lg:max-w-[1440px] md:min-h-screen p-5">
            <div className="flex relative h-[95vh]">
                <div className="absolute inset-0 flex sm:items-center z-10">
                    <BookingForm />
                </div>
                <Image
                    src="/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg"
                    alt="home"
                    style={{objectFit: "cover"}}
                    fill
                    className="rounded-md object-cover pl-0 pt-46 sm:pl-48 sm:pt-0"
                    sizes="100vw"
                />
            </div>
        </div>
    )
}
