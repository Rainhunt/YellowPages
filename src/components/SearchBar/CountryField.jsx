import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function CountryField({ setSearchParams, filteredCards }) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const uniqueCountries = [];
        for (const card of filteredCards) {
            const country = card.address.country;
            if (!uniqueCountries.includes(country)) uniqueCountries.push(country);
        }
        setCountries(uniqueCountries.sort());
    }, [filteredCards]);

    const [param, setParam] = useState([]);
    const countrySearch = useCallback((filteredCards) => {
        return filteredCards.filter((card) => param.length === 0 || param.includes(card.address.country));
    }, [param]);
    useEffect(() => {
        setSearchParams((prev) => ({ ...prev, countrySearch: countrySearch }));
    }, [countrySearch]);

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="countries-label" sx={{
                color: "primary.contrastText",
                "&.Mui-focused": {
                    color: "inherit"
                }
            }}>Countries</InputLabel>
            <Select
                labelId="countries-label"
                multiple
                value={param}
                onChange={(e) => {
                    const value = e.target.value;
                    setParam(typeof value === "string" ? value.split(",") : value)
                }}
                input={<OutlinedInput label="Countries" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={menuProps}
                sx={{
                    color: "inherit",
                    "& .MuiSelect-icon": {
                        color: "inherit"
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "inherit"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "red"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#626262"
                    }
                }}
            >
                {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                        <Checkbox checked={param.includes(country)} color="secondary" />
                        <ListItemText primary={country} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
