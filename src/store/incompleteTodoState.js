import { atom, selector } from "recoil";
import { v4 as uuidv4 } from 'uuid';

export const incompleteTodoState = atom({
  key: 'incompleteTodoState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: uuidv4(),
      text: 'aaa'
    },
    {
      id: uuidv4(),
      text: 'bbb'
    }
  ], // default value (aka initial value)
});

export const incompleteTodoNumState = selector({
  key: 'incompleteTodoNumState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const incompleteTodoList = get(incompleteTodoState);
    const incompleteTotalNum = incompleteTodoList.length;
    return incompleteTotalNum;
  }
});