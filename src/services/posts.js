import { get, post } from '../request';

export const getPosts = () => get('https://jsonplaceholder.typicode.com/posts');

export const addPost = data =>
  post('https://jsonplaceholder.typicode.com/posts', data);
