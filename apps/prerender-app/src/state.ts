import { ApplicationState } from './model';

let appState: ApplicationState = {
  fruits: [],
  loading: true
};

export function updateAppState(state: ApplicationState) {
  console.log('Update State', state);
  appState = state;
}

export function getAppState(): ApplicationState {
  return appState;
}
