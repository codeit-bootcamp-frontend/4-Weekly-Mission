import { useEffect, useState } from "react";
function Profile(){
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
                const data = await response.json();
                if (response.ok) {
                    setUser(data.email);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
        
    },[])

    return(
        <div>
            <img alt="userImg"></img>
            {user==null?(<button>로그인</button>):(<p>{user}</p>)}
        </div>
    )
}
export default Profile;