import { useRef, useState } from "react";
import './filter.css'

const Filter = ({filter, setFilter}) => {
  const [num, setNum] = useState(0);
  const descrease = (e) => {
    e.preventDefault();
    if(num > 0){
      setNum(num - 0.5)
    }
  }

  const increase = (e) => {
    e.preventDefault();

    if(num < 5){
      setNum(num + 0.5)
      
    }
  }

  const startCost = useRef()
  const endCost = useRef()

  const [modal, setModal] = useState(false)
  const filterFunc = () => {
    setModal(!modal)
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')

  }

  const filterHandle = (e) => {
    e.preventDefault();
    setFilter({
      'num' : num,
      'start':startCost.current.value,
      'end': endCost.current.value
    })
    setModal(!modal)
  }
  return (
    <div className='container'>

      <button className="filter-btn" onClick={filterFunc}>Filter</button>
      {modal &&  <>
        <div className='login-background'></div>
        <div className="filter-cover">
        <form action="post" className="rate-form">
         <div className="rate-box">
         <p className="filter-title">
           Rate:
         </p>
         <button type='button' onClick={increase} className="rate-btn">+</button>
         <span className="rate-num">{num}</span>
         <button type='button' onClick={descrease} className="rate-btn">-</button>
         </div>
         <div className="price-box">
           <p className="price-from">Start cost:</p>
           <input className="price-input" type="number" ref={startCost} placeholder="from" defaultValue={0} />
           <p className="price-to">To: </p>
           <input className="price-input" type="number" ref={endCost} placeholder="to" defaultValue={1000}/>
         </div>
         <button className="rate-submit" type="post" onClick={filterHandle}>Sort</button>
        </form>
    
   </div>
      </>}
    </div>
  )
}

export default Filter