import "./listPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";

function ListPage() {
    const data = listData;
    
    return (
        <div className="listPage">
        
        <div className="listConatiner">
            <div className="wrapper">
                <Filter />
                {data.map(item=>(
                    <Card key={item.id} item={item} />

                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map />
        </div>
         
        
        </div>
    )
}

export default ListPage;