import List from "../cardList/list"


const Mens = (data) => {
  let obj = []
  
  for (let index = 0; index < data.data.length; index++) {

     if (    data.data[index].category === "men's clothing"
     ) {
      obj.push(data.data[index]) 
     }    
  }
  return (
    <List data={obj}/>
  )
}

export default Mens