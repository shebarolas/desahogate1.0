// hooks/useMyPosts.ts
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';
import { Post } from '@/types/post';

export const useMyPosts = () => {
  return useQuery<Post[]>({
    queryKey: ['my-posts'],
    queryFn: async () => {
      const res = await api.get<Post[]>('/post/me');
      return res.data;
    },
    refetchOnWindowFocus: false,
  });
};