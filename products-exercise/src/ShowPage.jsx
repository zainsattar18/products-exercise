import React from 'react'
import { withRouter } from "react-router-dom"

function ShowPage(props) {
  const info = props.data.find((image) => image.name === props.match.params.name)
  console.log(info);

  return (
    <div>

      {info && <div className="show">

        <img src={info.imgURL} alt="portrait" width="300px" className="showPhoto" />

        <div className="insideArea">
          <div className="showName">{info.name}</div>
          <div className="showPrice">${info.price}</div>
          <div className="showInfo">{info.description}</div>
        </div>
      </div>

      }
    </div>
  )
}
export default withRouter(ShowPage)