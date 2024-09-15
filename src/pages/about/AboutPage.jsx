import React from 'react'
import Centered from '../../components/Centered'
import Spinner from '../../components/Spinner'

export default function AboutPage() {
    return (
        <Centered sx={{ flexGrow: 1 }}>
            <Spinner />
        </Centered>
    )
}
