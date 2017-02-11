/* eslint-disable no-console, react/prop-types */
/**
* Below code is just for example. Don't actually write code like this, use
* something like redux or mobx for managing state and API concerns.
*/
import React from 'react';
import { observer } from 'mobx-react';

@observer
class Home extends React.Component {
  render() {
    const { userStore: { users, addUser, isFetching }} = this.props;

    return (
      <div>
        <h3>Homepage</h3>
        <button onClick={() => !isFetching && addUser()}>Add a user</button>
        <h5>Users</h5>
        <ul>
          {users.map(user =>
            <li key={user.username}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
