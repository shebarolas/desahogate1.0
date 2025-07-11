import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export default function DiaryPubic() {
    return (
        <div className="space-y-6 w-[50rem] mb-8">
            <h3 className="text-2xl font-bold text-gray-700 text-center">Tus últimos pensamientos</h3>
            <Card className="border-0 shadow-lg bg-white/70 hover:bg-white/90 transition-all duration-300 hover:scale-[1.01] rounded-2xl">
                <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-rose-100 text-rose-700 border-rose-200 px-3 py-1 rounded-full font-medium">
                            Ayer, 8:30 PM
                        </Badge>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Hoy fue un día de muchas emociones. Me di cuenta de que está bien no tener todas las respuestas. A
                        veces solo necesito respirar y recordar que todo pasa...
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
