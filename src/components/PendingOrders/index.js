import { useEffect, useState } from "react";
import { db, collection, query, where, onSnapshot } from "../../confiq/Firebase";
import { DenseTable } from '../index';
import "./css/style.css"
import Grid from "@mui/material/Grid"


export default function PendingOrders() {
    const [pendingOrders, setPendingOrder] = useState([]);
    useEffect(() => {
        console.log("UseEffect start")
        const q = query(collection(db, "orders"), where("orderStatus", "==", "pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setPendingOrder(orders);
        });
    }, [])
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                item xs={9}>
                <Grid className="mt-20" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <div className="pendingDiv">
                        <h1>Pending Orders</h1>
                    </div>
                    <div className="pendingDiv">
                        <DenseTable rows={pendingOrders} />
                    </div>
                </Grid>
            </Grid>


        </>
    )
}