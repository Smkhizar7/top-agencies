import { useEffect, useState } from "react";
import { db,collection, query, where, onSnapshot } from "../../confiq/Firebase";

export default function PendingOrders(){
    const [pendingOrders,setPendingOrder] = useState([]);
    useEffect(()=>{
        const q = query(collection(db, "orders"), where("orderStatus", "==", "pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
        // pending.join(", ")
        setPendingOrder(orders);
        });
        console.log("Current Pending Orders: ",pendingOrders)
    },[])
    return(
        <h1>Pending Orders</h1>
    )
}