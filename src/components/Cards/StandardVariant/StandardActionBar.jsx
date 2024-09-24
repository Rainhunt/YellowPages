import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from 'react'
import { useCards } from '../../../providers/CardProvider';
import { Box, CardActions, IconButton } from '@mui/material'
import { useUser } from "../../../providers/UserProvider";

export default function StandardActionBar({ cardId, userId, likes }) {
    const { userData } = useUser();
    const [liked, setLiked] = useState(userData ? likes.includes(userData._id) : false);

    const { handleDelete, handleEdit, handleLike } = useCards();

    return (
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
                <IconButton onClick={() => console.log("phone")}>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={async () => {
                    const response = await handleLike(cardId);
                    if (response) setLiked((prev) => !prev);
                }}>
                    {liked ? <FavoriteIcon style={{ color: "E5C933" }} /> : <FavoriteIcon />}
                </IconButton>
            </Box>
        </CardActions>
    )
}
