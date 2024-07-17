
import { useRef } from 'react'
import searchlogo from '../../img/search.png'

const Search = ({search, setSearch}) => {
   
  const searchtxt = useRef()
  const SearchForm = (evt) => {
    evt.preventDefault()
    setSearch(searchtxt.current.value) 
  }
  return (
    <form className='search-form' action="post">
        <input className='search-txt' type="text" ref={searchtxt} required placeholder='search...' />
        <button className="search-btn" onClick={SearchForm}><img className='search-icon' src={searchlogo} alt="" /></button>
       </form>
  )
}

export default Search