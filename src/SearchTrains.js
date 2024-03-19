import './SearchTrains.css';
export default function SearchTrains(){
    return(
        <div className="container">
      <h1>Search Trains</h1>
      <div className="search-form">
        <label htmlFor="source">Source:</label>
        <input type="text" id="source" placeholder="Enter source place" />
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" placeholder="Enter destination place" />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" />
        <button onClick={SearchTrains}>Search Trains</button>
      </div>
      <div id="results"></div>
    </div>
    )
}