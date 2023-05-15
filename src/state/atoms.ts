import { atom } from "recoil";
import { Trick } from "../types/types";

// ! Remove when auth is implemented
export const userState = atom({
  key: 'userState',
  default: {
    id: 1234,
    name: 'Pijus',
    email: 'serapinaspijus@gmail.com',
    progress: 5,
    createdAt: new Date(),
  },
})

export const tricksState = atom<Trick[] | null>({
  key: 'tricksState',
  default: null,
})