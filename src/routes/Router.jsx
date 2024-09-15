import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import ErrorPage from "../pages/error/ErrorPage";
import CardsPage from "../pages/cards/CardsPage";
import AboutPage from "../pages/about/AboutPage";
import LoginPage from "../pages/login/LoginPage";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            {/* <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} /> */}

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}