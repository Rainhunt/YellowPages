import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import ErrorPage from "../pages/error/ErrorPage";
import CardsPage from "../pages/cards/CardsPage";
import AboutPage from "../pages/about/AboutPage";
import LoginPage from "../pages/login/LoginPage";
import ViewCard from "../pages/viewCard/ViewCard";
import MyCards from "../pages/myCards/MyCards";
import NewCard from "../pages/newCard/NewCard";
import FavoriteCards from "../pages/favoriteCards/FavoriteCards";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
            <Route path={ROUTES.CARD_INFO + "/:id"} element={<ViewCard />} />
            <Route path={ROUTES.CREATE_CARD} element={<NewCard />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}