import axios from 'axios';
import {create} from 'zustand';

interface IUserProfile {
  name: string;
  age: number;
  address: string;
  changeName: (newName: string) => void;
  getListPost: () => void;
  loading: boolean;
  listPost: {
    id: number;
    title: string;
    body: string;
  }[];
}

export const useAccount = create<IUserProfile>(set => ({
  name: 'Charisma',
  age: 25,
  address: 'Indonesia',
  changeName: (newName: string) => {
    set(() => ({name: newName}));
  },
  loading: false,
  listPost: [],
  getListPost: async () => {
    set(() => ({loading: true}));
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    set(() => ({
      loading: false,
      listPost: result.data,
    }));
  },
}));
