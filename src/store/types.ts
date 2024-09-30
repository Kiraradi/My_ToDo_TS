export interface IStore<T> {
  currentFilter: string,
  tasksList: T[]
}