export interface Fruit {
  readonly name: string;
  readonly color: string;
}

export interface ApplicationState {
  readonly fruits: Fruit[];
  readonly loading: boolean;
}
