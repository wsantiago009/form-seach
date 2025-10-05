import Image from 'next/image'
import BookingForm from './components/BookingForm'

import PageWrapper from '@/components/PageWrapper'
import { Country } from '@/types/api'

async function getCountries() {
    const res = await fetch('https://www.apicountries.com/countries', {
        next: { revalidate: 3600 },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch countries')
    }

    const countries = await res.json()

    return countries.map((country: Country) => ({
        name: country.name,
        alpha2Code: country.alpha2Code,
    }))
}

export default async function Home() {
    const countries = await getCountries()

    return (
        <PageWrapper className="grid">
            <div className="relative h-[95vh]">
                <div className="absolute inset-0 flex justify-center sm:items-center sm:justify-start z-10">
                    <BookingForm countries={countries} />
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
