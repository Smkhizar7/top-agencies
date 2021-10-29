import { useDispatch, useSelector } from "react-redux";
import {auth} from '../../confiq/Firebase';
function Profile(){
    const store = useSelector(state => state);
    console.log("Store==>",store);
    const CurrentUser = auth.currentUser;
    const dispatch = useDispatch();
    return (
    <div>
        <h1>Hello</h1>
        <button onClick={()=>dispatch({type:"User",User:CurrentUser})}>Click</button>
    </div>);
}
export default Profile;