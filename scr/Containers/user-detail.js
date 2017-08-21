import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{

render(){
    if(!this.props.user)
        {
            return(<h4>select somthing</h4>);
        }
    return(       
      <div>
          <h1>
              {this.props.user.first}</h1>
          </div>
        )
    }   
}
function mapStateToProps(state){
    return {
        user:state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail)