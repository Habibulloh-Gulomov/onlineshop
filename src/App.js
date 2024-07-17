
import './App.css';
import List from './components/cardList/list';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import Mens from './components/mens/mensClother';
import Womens from './components/womens/womens';
import Jewelary from './components/Jewelary/jewelary';
import Electronics from './components/electronics/electronics';
import Filter from './components/filter/filter';

function App() {
  let a = 'a'
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({})
  const [search, setSearch] = useState();
  let searchdata;
  if(search){
   searchdata = data.filter(e=> e.title === search )
  }
  let filteredData;
    filteredData = data.filter(e => e.rating.rate > filter.num && e.price > filter.start &&  e.price < filter.end );
 console.log(filter.end);
  let i = filteredData.length ? filteredData : data
  useEffect(() => {
    axios
        .get("https://fakestoreapi.com/products")
        .then(response => setData(response.data))
        .catch(error => console.log(error));
  }, [a])
  return (
    <div >
      <Header {...{search, setSearch}} />
      <Filter {...{filter, setFilter}}/>   
      <Routes>
      <Route path='/' element={<List  data={searchdata? searchdata : i} />}/>
      <Route path='/mensclothes' element={<Mens data={searchdata? searchdata : i}/>}/>
      <Route path='/womensclothes' element={<Womens data={searchdata? searchdata : i}/>}/>
      <Route path='/jewelary' element={<Jewelary data={searchdata? searchdata : i} />}/>
      <Route path='/electronics' element={<Electronics data={searchdata? searchdata : i} />}/>
    </Routes>
    </div>
  );
}

export default App;
