import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routerModel";
import Centered from "../../components/Centered";
import AndroidIcon from '@mui/icons-material/Android';

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <Centered sx={{ flexGrow: 1 }}>
            <AndroidIcon color="inherit" sx={{ fontSize: "200pt" }} />
            <PageHeader title="404 - PAGE NOT FOUND" subtitle="The page you are looking for may have been removed, had its name changed, or be temporarily unavailable." />
            <Button variant="contained" onClick={() => navigate(ROUTES.ROOT)}>Return to Home page</Button>
        </Centered>
    );
}