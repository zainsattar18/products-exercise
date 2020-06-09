import React from 'react'
import {Link} from "react-router-dom"


function MainPage(props) {

  const filteredData =
      props.data.filter(images => {
        return images.name.includes(props.inputValue)
      })
      // console.log(filteredData)


  return (
    <div>

        <form className="search">
        <input type="text" value={props.inputValue} onChange={props.onChange} placeholder="Search" />
        </form>

      <div className="center">
        {filteredData.map(images =>
          <div className="artwork" key={images.name}>
            <Link to={`image/${images.name}`} className="link-to">
            <img src={images.imgURL} alt={images.name} width="250px" className="mainImage"/>
            <h2 className="mainName">{images.name}</h2>
            <h4 className="mainPrice">${images.price}</h4>
              
            </Link>            
        </div>
        )}
        
        

        {/* <div className="filteredData">
          {props.filter.map(filtered =>
            <div className="filteredArt">
              <h2>{filtered.name}</h2> 

            </div>
            )}

        </div> */}

      </div>
      
    </div>
  )
}

export default MainPage