import todosReducer, {
  todoAdded,
  todoDeleted,
  todoUpdated,
} from "../redux/todosSlice";

// For the sake of simplicity we are just going to test state CRUD operations
describe("Todo CRUD", () => {
  const initialState = [{ id: 0, text: "First Todo" }];

  it("Add Todo", async () => {
    expect(
      todosReducer(initialState, todoAdded({ id: 1, text: "New TODO Text" }))
    ).toEqual([
      { text: "First Todo", id: 0 },
      { text: "New TODO Text", id: 1 },
    ]);
  });

  it("Delete Todo", async () => {
    expect(todosReducer(initialState, todoDeleted({ id: 0 }))).toEqual([]);
  });

  it("Update Todo", async () => {
    expect(
      todosReducer(initialState, todoUpdated({ id: 0, text: "New text" }))
    ).toEqual([{ id: 0, text: "New text" }]);
  });
});
