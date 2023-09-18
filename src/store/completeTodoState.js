import { atom, selector } from "recoil";
import { v4 as uuidv4 } from 'uuid';

export const completeTodoState = atom({
  key: 'completeTodoState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: uuidv4(),
      text: 'ccc'
    },
  ],// default value (aka initial value)
});

export const completeTodoNumState = selector({
  key: 'completeTodoNumState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const completeTodoList = get(completeTodoState);
    const completeTotalNum = completeTodoList.length;
    return completeTotalNum;
  }
});