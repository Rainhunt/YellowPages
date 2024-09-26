import { TextField } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

export default function SearchField({ setSearchParams, label }) {
    const [param, setParam] = useState("");
    const titleSearch = useCallback((filteredCards) => {
        return filteredCards.filter((card) => card.title.toLowerCase().startsWith(param.toLowerCase()));
    }, [param]);
    useEffect(() => {
        setSearchParams((prev) => ({ ...prev, titleSearch: titleSearch }));
    }, [titleSearch]);

    return (
        <TextField
            id={label}
            label={label}
            variant="outlined"
            value={param}
            onChange={(e) => setParam(e.target.value)}
            sx={{
                color: "text.primary",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "primary.contrastText"
                    },
                    "&:hover fieldset": {
                        borderColor: "red"
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#626262"
                    }
                },
                "& .MuiInputLabel-root": {
                    color: "primary.contrastText",
                    "&.Mui-focused": {
                        color: "primary.contrastText"
                    }
                }
            }}
        />
    )
}
