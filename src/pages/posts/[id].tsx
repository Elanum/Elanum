import { Post } from '@elanum/types';
import { getPostById, getPosts } from '@services/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';

interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(Number(params!.id));

  return { props: { post } };
};

const PostPage: FC<Props> = ({ post }) => {
  return (
    <>
      <NextSeo title={post.title} />
      <div>
        <p>{post.title}</p>
      </div>
    </>
  );
};

export default PostPage;
