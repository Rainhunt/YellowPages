import { CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayBody({ description, phone, email, web, address, serialNum }) {
    return (
        <CardContent>
            <Typography variant="body2" my={2} color="text.secondary" fontSize={26}>
                {description}
            </Typography>
            <Divider />
            <Typography variant="body2" mt={2} color="text.secondary" fontSize={18}>
                <strong>Phone: </strong> {phone}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={18}>
                <strong>Email: </strong> {email}
            </Typography>
            <Typography variant="body2" mb={2} color="text.secondary" fontSize={18} noWrap>
                <strong>Web: </strong> <Link to={web}>{web}</Link>
            </Typography>
            <Divider />
            <Typography variant="body2" mt={2} color="text.secondary" fontSize={18}>
                <strong>Address: </strong> {address.houseNumber} {address.street}, {address.city}, {address.country}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={18}>
                <strong>Zip: </strong> {address.zip}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={18}>
                <strong>Card Number: </strong> {serialNum}
            </Typography>
        </CardContent>
    )
}
