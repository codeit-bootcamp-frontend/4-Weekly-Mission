import { useEffect,useState} from "react";

function Card(){
    const [items,setItems]=useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
                const data = await response.json();
                if (response.ok) {
                    setItems(data.folder.links);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            {items && items.map((item, index) => (
                <div key={index}>
                    <img src={item.imageSource} alt="img"></img>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )


}
export default Card;