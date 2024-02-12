import { useEffect } from "react";
import FetchData from "../FetchData";
function Card(){
    useEffect(()=>{
        const data=FetchData("sample/data");
    },[]);

}
export default Card;