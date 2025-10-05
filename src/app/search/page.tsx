'use client'

import { Skeleton } from 'antd'

import PageWrapper from '@/components/PageWrapper'
import { useBookingContext } from '@/context/BookingContext'

const SearchPage = () => {
    const { data } = useBookingContext()

    return (
        <PageWrapper className="justify-start align-center">
            <div className="block w-full max-w-[800] m-auto [&_.search-result-shimmer]:mb-5 [&_.search-result-shimmer]:border-1 [&_.search-result-shimmer]:p-5 [&_.search-result-shimmer]:rounded-xl [&_.search-result-shimmer]:border-gray-300 [&_.ant-skeleton-header]:pb-5 [&_.ant-skeleton-header]:md:pb-0 [&_.ant-skeleton-header]:!pr-0 [&_.ant-skeleton-header]:md:!pr-5">
                <p className="mb-5 rounded-xl border-1 border-gray-200 p-4">
                    Showing results for stays in{' '}
                    <span className="font-semibold">{data?.location}</span> from{' '}
                    <span className="font-semibold">
                        {data?.from.format('MMM DD, YYYY')}
                    </span>{' '}
                    to{' '}
                    <span className="font-semibold">
                        {data?.to.format('MMM DD, YYYY')}
                    </span>{' '}
                    for <span className="font-semibold">{data?.adults}</span>{' '}
                    {data?.adults === 1 ? 'adult' : 'adults'}
                    {data?.children !== 0 && (
                        <>
                            {' '}
                            and{' '}
                            <span className="font-semibold">
                                {data?.children}
                            </span>{' '}
                            children.
                        </>
                    )}
                </p>
                <div className="grid grid-cols-12 gap-2 search-result-shimmer">
                    <div className="md:col-span-4 col-span-12">
                        <Skeleton
                            active
                            avatar={{
                                shape: 'square',
                                style: { width: '100%', height: '200px' },
                            }}
                            paragraph={false}
                            title={false}
                        />
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <Skeleton active />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 search-result-shimmer">
                    <div className="md:col-span-4 col-span-12">
                        <Skeleton
                            active
                            avatar={{
                                shape: 'square',
                                style: { width: '100%', height: '200px' },
                            }}
                            paragraph={false}
                            title={false}
                        />
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <Skeleton active />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 search-result-shimmer">
                    <div className="md:col-span-4 col-span-12">
                        <Skeleton
                            active
                            avatar={{
                                shape: 'square',
                                style: { width: '100%', height: '200px' },
                            }}
                            paragraph={false}
                            title={false}
                        />
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <Skeleton active />
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
export default SearchPage
