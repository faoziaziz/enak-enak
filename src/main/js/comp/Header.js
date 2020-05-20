import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div className="center"> 
        <h3 style={style}><Link to='/'>Home</Link></h3>
        <h3 style={style}><Link to='/contact'>Contact</Link></h3>
        <h3 style={style}><Link to="/notes">Notes</Link></h3>
        <h3 style={style}><Link to="/cats">Notes</Link></h3>
       
      </div>
      {children}
    </div>
  )
}

export default Header;