import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    // debugger;
    const users = this.props.users ? this.props.users.map(user => <li>{user.username}</li>) : null;
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {users}
        </ul>
        <p>Count: {this.props.userCount ? this.props.userCount : 0}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { 
    users: state.users,
    userCount: state.users.length 
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
