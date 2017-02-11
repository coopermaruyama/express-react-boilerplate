export default class User {
  store = null;
  id = null;
  username = null;

  constructor(store, id, username) {
    this.store = store;
    this.id = id;
    this.username = username;
  }

  destroy() {
    this.store.users.remove(this);
  }

  toJS() {
    return {
      id: this.id,
      username: this.username
    };
  }

  static fromJS(store, object) {
    return new User(store, object.id, object.username);
  }
}
