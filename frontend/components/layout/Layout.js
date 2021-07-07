import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <section className="container mx-auto w-1/2">
                <div className="my-20">{children}</div>
            </section>
        </div>
    )
}

export default Layout
