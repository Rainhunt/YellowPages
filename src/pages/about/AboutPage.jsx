import { List, ListItem, Typography } from '@mui/material';
import Centered from '../../components/Centered'
import PageHeader from '../../components/PageHeader';
import BulletPoint from '../../components/BulletPoint';

export default function AboutPage() {
    return (
        <Centered sx={{ mb: 10 }}>
            <PageHeader title="ABOUT US" subtitle="Your Local Yellow Pages" />
            <Typography width="50vw" mb={5}>
                Welcome to Yellow Pages, your trusted resource for connecting with local businesses and services. We have found that in the age of the internet the difference between business and customer are less and less relevant, but the tools for such small businesses are still catching up. So we created Yellow Pages, dedicated to helping our community thrive by making it easy for residents and visitors alike to set up shop and find the best local services, all right at their fingertips.
            </Typography>
            <Typography width="50vw" fontSize={22}>
                <strong>Our Mission</strong>
            </Typography>
            <Typography width="50vw" mb={5}>
                At Yellow Pages, our mission is to empower consumers with the information they need to make informed decisions about local businesses. We believe in supporting our local economy by promoting small businesses and connecting them with the customers who need them most.
            </Typography>
            <Typography width="50vw" fontSize={22}>
                <strong>What We Offer</strong>
            </Typography>
            <Typography width="50vw" fontSize={18}>
                <strong>Comprehensive Listings:</strong>Our extensive database is a fast growing system of every local business in the area, from restaurants to craft shops to high end services.
            </Typography>
            <Typography width="50vw" fontSize={18}>
                <strong>User-Friendly Search:</strong>Easily search for businesses by name or location. Our intuitive platform ensures that you can find what you're looking for quickly and efficiently.
            </Typography>
            <Typography width="50vw" fontSize={18}>
                <strong>Community Focused:</strong>We prioritize local businesses, highlighting the unique services and products that our community has to offer.
            </Typography>

        </Centered>
    )
}
