import { Post } from '@elanum/types';
import axios from 'axios';

export async function getPosts(): Promise<Post[]> {
  const posts = await axios.get('http://localhost:5000/posts');

  return posts.data;
}

export async function getPostById(id: number): Promise<Post[]> {
  const post = await axios.get(`http://localhost:5000/posts/${id}`);

  return post.data;
}
