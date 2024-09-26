import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function PageHeader({ title, subtitle }) {
    return (
        <Box sx={{
            px: {
                xs: 5,
                sm: 10,
                md: 15
            },
            py: {
                xs: 2,
                sm: 3,
                md: 5
            }
        }}>
            <Typography variant="h2" component="h1" sx={{
                textAlign: "center",
                fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4rem"
                }
            }}>
                {title}
            </Typography>
            <Typography variant="h5" component="h2">
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </Box>
    );
}