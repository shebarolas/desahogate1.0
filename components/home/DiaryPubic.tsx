import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { useMyPosts } from '@/hooks/useMyPosts'


export default function DiaryPubic() {
    const { data: posts } = useMyPosts();
    return (
        <div className="space-y-6 w-[50rem] mb-8">
            <h3 className="text-2xl font-bold text-gray-700 text-center">Tus últimos pensamientos</h3>
            {
                posts?.map((post, index) => {
                    return (
                        <Card key={index} className="border-0 shadow-lg bg-white/70 hover:bg-white/90 transition-all duration-300 hover:scale-[1.01] rounded-2xl">
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <Badge className="bg-rose-100 text-rose-700 border-rose-200 px-3 py-1 rounded-full font-medium">
                                        {post.createAt && !isNaN(new Date(post.createAt.trim()).getTime()) ? (
                                            new Date(post.createAt.trim()).toLocaleDateString('es-CL', {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric',
                                            })
                                        ) : (
                                            'Fecha inválida'
                                        )}
                                    </Badge>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    -{post.content}
                                </p>
                            </CardContent>
                        </Card>
                    )

                })
            }

        </div>
    )
}
