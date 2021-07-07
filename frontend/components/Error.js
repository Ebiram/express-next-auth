import { useState, useEffect } from 'react'

const Error = ({ errors }) => {
    const [inputErrors, setInputErrors] = useState()

    useEffect(() => {
        if (typeof errors === 'object') {
            setInputErrors(errors.errors)
        } else {
            setInputErrors(errors)
        }
    }, [errors])

    // console.log(typeof inputErrors)

    if (typeof inputErrors === 'object') {
        return (
            <div className="bg-yellow-50 border border-yellow-400 text-yellow-600 text-md font-medium p-5 mb-10 rounded-md leading-6">
                <ul>
                    {inputErrors.map((err, index) => (
                        <li key={index} className="mb-3 list-disc ml-4">{err.msg}</li>
                    ))}
                </ul>
            </div>
        )
    }

    if (typeof inputErrors === 'string') {
        return (
            <div className="bg-yellow-50 border border-yellow-400 text-yellow-600 text-md font-medium p-5 mb-10 rounded-md leading-6">
                <ul><li className="mb-3 list-disc ml-4">{inputErrors}</li></ul>
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default Error
