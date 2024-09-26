import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from 'react'
import { useCards } from '../../../providers/CardProvider';
import { Box, CardActions, IconButton } from '@mui/material'
import { useUser } from "../../../providers/UserProvider";
import PhonePopUp from "../../PhonePopUp";

export default function StandardActionBar({ cardId, userId, likes, phone }) {
    const { userData } = useUser();
    const [liked, setLiked] = useState(userData ? likes.includes(userData._id) : false);
    const [phoneOpen, setPhoneOpen] = useState(false);

    const { handleDelete, handleEdit, handleLike } = useCards();

    return (
        <>
            <PhonePopUp phone={phone} open={phoneOpen} setOpen={setPhoneOpen} />
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                    {userData && userData._id === userId &&
                        <>
                            <IconButton onClick={() => handleDelete(cardId)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => handleEdit(cardId)}>
                                <ModeEditIcon />
                            </IconButton>
                        </>
                    }
                </Box>
                <Box>
                    <IconButton onClick={() => setPhoneOpen(true)}>
                        <CallIcon />
                    </IconButton>
                    <IconButton onClick={async () => {
                        const response = await handleLike(cardId);
                        if (response) setLiked((prev) => !prev);
                    }}>
                        {userData && (liked ? <FavoriteIcon style={{ color: "#FAC205" }} /> : <FavoriteIcon />)}
                    </IconButton>
                </Box>
            </CardActions>
        </>
    )
}
