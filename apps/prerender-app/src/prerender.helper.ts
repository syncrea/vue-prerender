import { ApplicationState } from './model';
import { updateAppState } from './state';

export function prerenderPrepare(state?: ApplicationState) {
  document.getElementById('app').setAttribute('data-server-rendered', 'true');
  if (state) {
    document.documentElement.setAttribute('data-state', btoa(JSON.stringify(state)));
  }
  document.dispatchEvent(new Event('after-load'));

}

export function hydrateState() {
  const stateAttribute = document.documentElement.getAttribute('data-state');
  if (stateAttribute) {
    updateAppState(JSON.parse(atob(stateAttribute)));
  }
}
