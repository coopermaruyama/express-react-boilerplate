import { observable, autorun } from 'mobx';
import UserStore from './UserStore';

export default class AppStore {
  userStore = null;
  @observable view = 'HOME';

  subscribeViews() {
    return autorun(() => {
      if (this.view === 'HOME' && !this.userStore) {
        this.userStore = new UserStore();
      }
    });
  }

  route(view) {
    this.view = view;
  }
}
