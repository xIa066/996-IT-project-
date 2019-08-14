import React from 'react';
import {Link} from 'react-router-dom';
class Titles extends React.Component{
   render(){
     return(
        <Link to='/' style={{textDecoration: 'none'}}>
         <div className="row">
           <div className="col-7 titleWHERE">WEATHER</div>
           <div className="col-7 titleTO">TO <div className="titleBIKE">BIKE?</div></div>
         </div>
       </Link>

     );
   }
};

export default Titles;
