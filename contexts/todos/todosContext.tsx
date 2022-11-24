import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { GetAction } from "types/reducerAction";
import { initialState, todoReducer } from "./reducer";
import { StateInterface, TodoPayload } from "./reducer/types";

interface TodosContextInterface {
  state: StateInterface;
  dispatch: Dispatch<GetAction<TodoPayload>>;
}

const TodosContext = createContext<TodosContextInterface>({
  state: initialState,
  dispatch: () => {},
});

const TodosProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosProvider, TodosContext };
