import Card from "../card/card"
import './list.css'
const List = (data) => {
  let datain = data.data;
        if (datain.length <= 0 ) {
          return <div class="loader"></div>
        }
         return <div className="container">
           <div className="list">{
          datain.length && datain.map((e) => (<Card id={e.id} img={e.image} title={e.title} description={e.description} rate={e.rating.rate} count={e.rating.count} price={e.price}/>))
}</div>
         </div>
        
      
}

export default List