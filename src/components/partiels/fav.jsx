import React , {useEffect, useState} from 'react'

const Favourites = (added) => {

    const [recpies , setItems] = useState([])
    const [del, setdel] = useState('')
   

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('favs'))
        setItems(items)
    }, [del , setdel , added])

  


   function deleteit(index){
       recpies.splice(index , 1)
       localStorage.setItem('favs' , JSON.stringify(recpies))
   }
    return(
        <div className="list-favs">
        {recpies && 
        recpies.map((item , index) => {
            return(
                <div className="fav-item" key={index}>
                    <img src={item.image} alt="fav img" />
                    <h4>{item.label}</h4>
                    <button className="btn" onClick={()=> {deleteit(index) ; setdel(index)}}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            )
        })
        }
        </div>
    )
}

export default Favourites