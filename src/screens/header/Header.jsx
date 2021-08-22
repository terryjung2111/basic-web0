import React from 'react'
import logoImage from '../../resources/images/send.png'
import mapImage from '../../resources/images/map.png'
import "./Header.css"
import { routeList } from '../../route'
import { useHistory } from 'react-router-dom';
const Header = () => {

  const history = useHistory();

  const onClickRoute = (path) => {
    history.push(path)
  }

  return (
    <div>
      <div className="header-container">
        <div>
          <img src={logoImage} alt="This is logo image" style={{ width: "auto", height: "50px" }}/>
        </div>
        <div style={{ display: 'flex' }}>
          {/* map은 for문이랑 같은 기능. 즉 차례대로 반복해서 나오는것*/}
          {routeList.map((element, index) => {
            return (         
              <div key={index} style={{ margin: '0 10px'}} onClick={() => onClickRoute(element.path)}>
                {element.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
  )
}

export default Header;