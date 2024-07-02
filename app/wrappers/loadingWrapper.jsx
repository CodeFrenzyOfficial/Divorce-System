"use client"

import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

export default function LoadingWrapper({ children }) {
    const { loading } = useSelector(item => item)
    
    if (loading) return <Loader />

    return (
        <>{children}</>
    )
}
