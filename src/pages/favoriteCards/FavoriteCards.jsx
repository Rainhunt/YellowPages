import PageHeader from '../../components/PageHeader';
import CardsStatus from '../../components/Cards/CardsStatus';
import CardProvider from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import favFilter from './favFilter';

export default function FavoriteCards() {
    return (
        <CardProvider fetch={getCardData()} filter={favFilter}>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all business cards from all categories"
            />
            <CardsStatus type={"cards"} />
        </CardProvider>
    )
}
