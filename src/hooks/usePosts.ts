import { useEffect, useState } from 'react';
import { ApiPosts } from '../http';

interface UsePostsProps {
  defaultParams?: Record<string, any>;
}

export const usePosts = ({ defaultParams = {} }: UsePostsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = (params = {}) => {
    setIsLoading(true);
    ApiPosts.fetchAll(params)
      .then((res) => {
        setPosts(res.hits);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPosts(defaultParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, posts };
};
