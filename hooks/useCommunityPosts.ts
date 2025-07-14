// hooks/useCommunityPosts.ts
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';

export const useCommunityPosts = () => {
  return useQuery({
    queryKey: ['community-posts'],
    queryFn: async () => {
      const res = await api.get('/posts');
      return res.data;
    },
  });
};