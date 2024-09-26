import PageHeader from '../../components/PageHeader';
import CardsStatus from '../../components/Cards/CardsStatus';
import CardProvider from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import favFilter from './favFilter';
import CardSearch from '../../components/SearchBar/CardSearch';
import { useUser } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function FavoriteCards() {
    //validate page auth
    const { userData } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData) navigate(ROUTES.ROOT, { replace: true });
    }, []);

    return (
        <CardProvider fetch={getCardData()} filter={favFilter} searchBar={<CardSearch />}>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all business cards from all categories"
            />
            <CardsStatus type={"cards"} />
        </CardProvider>
    )
}
