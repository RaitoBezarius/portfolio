import alt from 'core/Dispatcher';

import ApplicationStyleActions from 'actions/ApplicationStyleActions';

class ApplicationStyleStoreModel {
  constructor() {
    this.bindListeners({
      handleApplyClass: ApplicationStyleActions.applyClass,
      handleRemoveClass: ApplicationStyleActions.removeClass,
      handleClearClass: ApplicationStyleActions.clearClass
    });

    this.currentClasses = {};
  }

  handleApplyClass(newClass) {
    this.setState(prevState => {
      prevState.currentClasses[newClass] = true;
      return prevState;
    });
  }

  handleRemoveClass(newClass) {
    this.setState(prevState => {
      delete prevState.currentClasses[newClass];
      return prevState;
    });
  }

  handleClearClass() {
    alt.recycle(ApplicationStyleStore);
  }
}

const ApplicationStyleStore = alt.createStore(ApplicationStyleStoreModel);
export default ApplicationStyleStore;
