import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCards } from '../../../providers/CardProvider';
import { Box, CardActions, IconButton } from '@mui/material'

export default function StandardActionBar({ cardId }) {
    const { handleDelete, handleEdit, handleLike } = useCards();
    const navigate = useNavigate();

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handleDelete(cardId)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(cardId)}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={() => console.log("phone")}>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => handleLike(cardId)}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    )
}
