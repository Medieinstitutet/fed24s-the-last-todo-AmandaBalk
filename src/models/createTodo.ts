export class CreateTodo {
  id: number;

  constructor(public todo: string, public done: boolean, id?: number) {
    this.id = id ?? Date.now();
  }
}
