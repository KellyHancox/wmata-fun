import './App.css';
import trainData from './data.json';
import {ReactComponent as Logo} from './logo.svg'
import React, {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState(0);

  //https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
  //https://www.golangprograms.com/display-json-data-in-reactjs.html
  const tableData = trainData.Trains.filter((item)=> {
    if(searchTerm == null || searchTerm == ''){
      return item
    }
    else if(item.DestinationName.toLowerCase().includes(searchTerm.toLowerCase())){
      return item
    }
  }).map(item=>{
    return(
      <tr>
  <td>{item.LocationName}</td>
  <td>{item.DestinationName}</td>
  <td>{item.Line}</td>
  <td>{item.Min}</td>
  </tr>
  )})



  return (
    <div>
    <header>
      <Logo id='logo'></Logo>
      <p className='headerText'>Not The FBI</p>
    </header>

    <div class='searchArea'><input id='searchBar' type='text' placeholder='Search' onChange={()=>setSearchTerm(document.getElementById('searchBar').value)}></input><button id='searchButton' onClick={()=>setSearchTerm(document.getElementById('searchBar').value)}>Search</button></div>
    
    <table id='myTable'>
      <tr><th>Location Name</th><th>Destination Name</th><th>Line</th><th>Min</th></tr>
        {tableData}
      </table>

    </div>
  );
}

export default App;
