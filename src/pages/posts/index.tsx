import { Post } from '@elanum/types';
import { getPosts } from '@services/posts';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

const Posts: FC<Props> = ({ posts }) => {
  return (
    <>
      <NextSeo title="Blog" />
      <div className="container">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
