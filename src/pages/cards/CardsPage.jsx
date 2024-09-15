import PageHeader from '../../components/PageHeader';
import CardsStatus from '../../components/Cards/CardsStatus';
import CardProvider from '../../providers/CardProvider';

export default function CardsPage() {
    return (
        <CardProvider>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all business cards from all categories"
            />
            <CardsStatus />
        </CardProvider>
    )
}
