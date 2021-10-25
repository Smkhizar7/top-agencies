import { useEffect, useState } from "react";
import { db,collection, query, where, onSnapshot } from "../../confiq/Firebase";
import {DenseTable} from '../index';

export default function PendingOrders(){
    const [pendingOrders,setPendingOrder] = useState([]);
    useEffect(()=>{
        console.log("UseEffect start")
        const q = query(collection(db, "orders"), where("orderStatus", "==", "pending"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setPendingOrder(orders);
        });
    },[])
    return(
        <div>
            <h1>Pending Orders</h1>
            <DenseTable rows={pendingOrders} />      
        </div>
    )
}