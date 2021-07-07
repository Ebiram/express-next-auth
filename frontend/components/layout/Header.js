import Link from 'next/link'
import Head from 'next/head'
import Account from './Account'

const Header = () => {
    return (
        <div className="bg-gradient-to-tr from-gray-700 to-gray-900 text-white text-sm">
            <Head>
                <title>TaskMan</title>
            </Head>
            <div className="container mx-auto w-1/2 flex items-center py-3">
                <div className="font-bold text-xl mr-auto">
                    <Link href="/">
                        TaskMan
                    </Link>
                </div>
                <div className="font-bold">
                    <Account />
                </div>
            </div>
        </div>
    )
}

export default Header
