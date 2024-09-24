import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { useCards } from '../../providers/CardProvider'
import SearchField from './SearchField';
import CountryField from './CountryField';

export default function CardSearch() {
    const { setSearchParams, filteredCards } = useCards();
    return (
        <AppBar position="sticky">
            <Toolbar
                elevate={10}
                sx={{ justifyContent: "center" }}
            >
                <CountryField setSearchParams={setSearchParams} filteredCards={filteredCards} />
                <SearchField label="Search" setSearchParams={setSearchParams} />
            </Toolbar>
        </AppBar>
    )
}
