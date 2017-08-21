import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectItem} from '../Actions/index'
class UserList extends Component{
 CreateListItems(){
    return this.props.users.map((user)=>
{
    return (<li 
            key={user.id}
            onClick={()=> this.props.selectItem(user)}
            >
            {user.first} {user.last} 
            </li>
            )
})

 }
render(){
    return(
        <ul>{this.CreateListItems()}</ul>
        )
        }   
}
function mapStateToProps(state){
    return {
        users:state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectItem:selectItem},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(UserList)