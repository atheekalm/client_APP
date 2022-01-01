import { Typography } from "@mui/material";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../test_redux/configureStore";
import { fetchServiceAsync, serviceSelectors } from "./serviceSlice";

export default function ServiceCardDetails() {
    const { id } = useParams<{ id: string }>();
    const service = useAppSelector(state => serviceSelectors.selectById(state, id))
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!service) dispatch(fetchServiceAsync(parseInt(id)))
    }, [service, dispatch, id])
    return (
        <>
            <Typography>
                {service?.email}
            </Typography>
        </>
    )
}