import "./filter.scss";
function Filter() {
    return (
        <div className="filter">
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" placeholder="City location" />
            </div>
        </div>
            <div className="bottom">
                <div className="item">
                <label htmlFor="type">type</label>
                <select name="type" id= "Type">
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                </select>
                <div className="item">
                    <label  htmlfor="property">Property</label>
                    <select name="property" id= "property">
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlfor = "minPrice">Min Price</label>
                    <input type="number">
                    </input>
                </div>
                <button>
                    <img src="/.search.png" alt= "srch"/>                       
                </button>
                </div>
            </div>
        </div>
    )
}
export default Filter;
