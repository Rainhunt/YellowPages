import { useCallback, useEffect, useState } from 'react'

export default function useMenu() {
    const [anchor, setAnchor] = useState(undefined);
    const [open, setOpen] = useState(false);
    useEffect(() => { setOpen(Boolean(anchor)) }, [anchor]);

    const handleClick = useCallback((e) => {
        setAnchor(e.currentTarget);
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return { anchor, open, handleClick, handleClose }
}
