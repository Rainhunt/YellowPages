import PageHeader from '../../components/PageHeader';
import CardsStatus from '../../components/Cards/CardsStatus';
import CardProvider from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import CardSearch from '../../components/SearchBar/CardSearch';

export default function CardsPage() {
    return (
        <CardProvider fetch={getCardData()} searchBar={<CardSearch />}>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all business cards from all categories"
            />
            <CardsStatus type={"cards"} />
        </CardProvider>
    )
}
