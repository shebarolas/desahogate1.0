import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import PublicPeople from './PublicPeople'


export default function PublicCard({ activeTab }: { activeTab: string }) {
   
    return (
        <div className='space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full flex flex-col items-center justify-center'>
            {activeTab === 'community' && (
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm transition-all duration-500 rounded-3xl overflow-hidden w-[50rem] h-[30rem]">
                    <CardContent className="p-10 flex flex-col items-center justify-center h-full">
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Heart className="text-rose-400" size={24} />
                                <h2 className="text-2xl font-bold text-gray-800">Comparte tu sentir</h2>
                                <Heart className="text-rose-400" size={24} />
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Tu identidad está protegida. Solo se verá tu mensaje y tu humanidad.
                            </p>
                        </div>

                        <div className="relative w-full">
                            <textarea
                                placeholder="Quiero compartir que me siento..."
                                className="min-h-[240px] border-2 w-full border-rose-100 focus:border-rose-300 focus:ring-4 focus:ring-rose-100 rounded-2xl resize-none text-gray-700 placeholder:text-gray-400 text-lg leading-relaxed p-6 bg-gradient-to-br from-white to-rose-50/30 transition-all duration-300"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-8 w-full">
                            <div className="flex items-center gap-2 text-rose-600 font-medium">
                                <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                                Anónimo • Visible con amor
                            </div>
                            <Button
                                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"

                            >
                                Compartir con cariño
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
            <PublicPeople/>
        </div>
    )
}
