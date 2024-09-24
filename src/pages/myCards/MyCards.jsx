import React, { useEffect } from 'react'
import { getMyCards } from '../../services/cardApi'
import { useUser } from '../../providers/UserProvider'
import CardProvider from '../../providers/CardProvider';
import CardsStatus from '../../components/Cards/CardsStatus';
import PageHeader from '../../components/PageHeader';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routerModel';
import CardSearch from '../../components/SearchBar/CardSearch';

export default function MyCards() {
    //validate page auth
    const { token, userData } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData || !userData.isBusiness) navigate(ROUTES.ROOT, { replace: true });
    }, []);

    return (
        <CardProvider fetch={getMyCards(token)} searchBar={<CardSearch />}>
            <PageHeader
                title="My Cards"
                subtitle="On this page you can find cards you created."
            />
            <CardsStatus type={"cards"} />
        </CardProvider>
    )
}
