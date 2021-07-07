import React from 'react'
import { isLoggedIn, logOut } from './auth'
import redirectTo from './redirectTo'

export default function withAuth(Component) {
    const AuthComponent = (props) => {
        return <Component {...props} />
    }

    AuthComponent.getInitialProps = (context) => {
        const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || '')

        if (!isUserLoggedIn) {
            redirectTo('/auth/login', context)
        }

        return { user: { isLoggedIn: isUserLoggedIn } }
    }

    return AuthComponent
}