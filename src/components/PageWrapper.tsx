const PageWrapper = ({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div
            className={`m-auto lg:max-w-[1440px] md:min-h-screen p-5 ${className}`}
        >
            {children}
        </div>
    )
}
export default PageWrapper
