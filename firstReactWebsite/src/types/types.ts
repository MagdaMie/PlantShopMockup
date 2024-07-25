import { IconType } from "react-icons";

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  counter: number;
};

export type Question = {
  question: string;
  anwser: string;
  id: number;
};

export type Benefit = {
  title: string;
  content: string;
  icon: IconType;
  id: number;
};

export type RawPost = {
  id: number;
  title: string;
  content: string;
};

export type Post = RawPost & {
  author: string;
  date: string;
  authorImg: string;
  postImg: string;
};

export type UseFetchPostsReturnType = {
  posts?: Post[] | null;
  error?: string | null;
  loading?: boolean;
};
