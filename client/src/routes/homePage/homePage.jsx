import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
    return (
        <div className="homePage">
           <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">Find Your Sakhli & Make Your Dream Come True
                 </h1>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                 </p>
                 <SearchBar />
                 <div className="boxes">
                        <div className="box">
                            <h1>20+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Winning</h2>
                        </div>
                        <div className="box">
                            <h1>209900</h1>
                            <h2>Property Ready</h2>
                        </div>
                 </div>
            </div>
            </div>
           <div className="imageContainer">
            <img src="bg.png" alt="home" />
           </div>
        </div>
    )
}
export default HomePage;