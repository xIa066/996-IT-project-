import React from 'react';
import ReactLoading from 'react-loading';

class Loading extends React.Component{
    render(){
        return(
            <div className="container-fluid">'
                <div className="row align-items-center justify-content-center spinner">
                    <ReactLoading type={"spin"} color={"#c69963"} height={'20%'} width={'20%'} className=""/>
                </div>
            </div>
        );
    }
}

export default Loading;