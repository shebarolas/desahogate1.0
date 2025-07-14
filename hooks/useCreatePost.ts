// hooks/useCreatePost.ts
import api from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface NewPost {
  content: string;
  title?: string;
}


export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: NewPost) => {
      const res = await api.post('/post', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-posts'] });
    },
  });
};