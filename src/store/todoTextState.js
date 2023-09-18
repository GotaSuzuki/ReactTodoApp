import { atom } from "recoil";

export const todoTextState = atom({
  key: 'todoTextState', // unique ID (with respect to other atoms/selectors)
  default: (''), // default value (aka initial value)
});