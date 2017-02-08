/* eslint-disable no-console, react/prop-types */
/**
* Below code is just for example. Don't actually write code like this, use something like redux or
* mobx for managing state and API concerns.
* @flow
*/
import React from 'react';

class Home extends React.Component {

  state: {
    isFetching: ?boolean,
    users: Object[]
  }

  state = {
    isFetching: false,
    users: []
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async function () {
    this.setState({ isFetching: true });
    try {
      const res = await fetch('/api/users');
      const users = await res.json();

      this.setState({ users, isFetching: false });
    } catch (err) {
      console.log(err.message);
    }
  }

  addUser = async function () {
    try {

      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: `User${Date.now()}`
        })
      });

      this.fetchUsers();
    } catch (err) {
      console.log(err.message);
    }
  }


  render() {
    return (
      <div>
        <h3>Homepage</h3>
        <button onClick={() => !this.state.isFetching && this.addUser()}>Add a user</button>
        <h5>Users</h5>
        <ul>
          {this.state.users.map(user =>
            <li key={user.username}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
