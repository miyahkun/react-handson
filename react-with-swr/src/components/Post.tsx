import { type FC } from 'react';
import useSWR from 'swr';

type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const Post: FC = () => {
  const { data, error, isLoading } = useSWR<Post>(API_BASE + '/posts/1');

  if (error) return <div>Falied to load posts 😭</div>;
  if (isLoading || !data) return <div>Loading posts...</div>;

  return (
    <div>
      <dl>
        <dt>User Id: </dt>
        <dd>{data.userId}</dd>

        <dt>Post title</dt>
        <dd>{data.title}</dd>
      </dl>
    </div>
  );
};
