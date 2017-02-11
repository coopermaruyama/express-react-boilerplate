import { observable, reaction } from 'mobx';
import UserModel from './UserModel';

export default class UserStore {
  @observable users = [];
  @observable didInvalidate = false;
  @observable isFetching = false;
  dispose = null;

  constructor() {
    this.dispose = this.connect();
  }

  // Connect store to server
  connect() {
    // If the store is invalidated by adding a user, or is empty, fetch users.
    return reaction(
      () => this.didInvalidate || !this.users.length,
      () => this.fetchUsers(),
      { fireImmediately: true }
    );
  }

  fetchUsers() {
    this.isFetching = true;
    fetch('/api/users').then(r => r.json()).then(this.receiveUsers);
  }

  receiveUsers = (users) => {
    this.users = users.map(
      user => new UserModel(this, user._id, user.username)
    );
    this.didInvalidate = false;
    this.isFetching = false;
  }

  addUser = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: `User${Date.now()}`
      })
    };

    fetch('/api/users', options).then(() => {
      this.didInvalidate = true;
    });
  }

  toJS() {
    return this.users.map(user => user.toJS());
  }

  static fromJS(array) {
    const userStore = new UserStore();

    userStore.todos = array.map(item => UserModel.fromJS(userStore, item));
    return userStore;
  }
}
