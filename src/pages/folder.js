import Card from "../components/Card";
import AddLink from "../components/addLink";
import SearchLink from "../components/searchLink";
import Sorting from "../components/sorting";

function Folder() {
    return(
        <div>
            <AddLink />
            <SearchLink />
            <div>
                <Sorting />
                <Card />
            </div>
            
        </div>
    )
}
export default Folder;
