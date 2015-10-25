import alt from 'core/Dispatcher';

@alt.createActions
export default class ApplicationStyleActions {
  constructor() {
    this.generateActions('applyClass', 'removeClass', 'clearClass');
  }
}
