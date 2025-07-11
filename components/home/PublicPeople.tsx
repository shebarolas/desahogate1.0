import { Heart, MessageCircle } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { getMoodColor } from "@/utils/getColor"
import { Badge } from "../ui/badge"

interface Post {
    id: string
    content: string
    timestamp: string
    reactions: {
        understand: number
        strength: number
    }
    mood?: string
}

export default function PublicPeople() {
    const communityPosts: Post[] = [
        {
            id: "1",
            content:
                "Hoy fue un día difícil en el trabajo. Siento que no importa cuánto me esfuerce, nunca es suficiente. Solo necesitaba escribir esto en algún lugar donde alguien pudiera entenderme sin juzgarme.",
            timestamp: "Hace 2 horas",
            reactions: { understand: 12, strength: 8 },
            mood: "Agotamiento",
        },
        {
            id: "2",
            content:
                "Perdí a mi mascota hace una semana y aún no puedo creer que ya no esté. Era mi compañero de 10 años. La casa se siente tan vacía sin él. Gracias por este espacio para poder decirlo.",
            timestamp: "Hace 5 horas",
            reactions: { understand: 24, strength: 18 },
            mood: "Tristeza",
        },
        {
            id: "3",
            content:
                "Después de meses de terapia, finalmente pude hablar con mi familia sobre lo que he estado sintiendo. Fue aterrador pero liberador al mismo tiempo. Pequeños pasos.",
            timestamp: "Hace 1 día",
            reactions: { understand: 15, strength: 22 },
            mood: "Esperanza",
        },
    ]
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Voces que resuenan</h3>
                <p className="text-gray-600">Historias reales de personas como tú</p>
            </div>

            {communityPosts.map((post, index) => (
                <Card
                    key={post.id}
                    className="border-0 shadow-xl bg-white/80 hover:bg-white/95 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl rounded-3xl overflow-hidden group w-[50rem]"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <Badge
                                className={`px-4 py-2 rounded-full font-medium text-sm border ${getMoodColor(post.mood || "")}`}
                            >
                                {post.mood}
                            </Badge>
                            <span className="text-sm text-gray-500 font-medium">{post.timestamp}</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg mb-8 group-hover:text-gray-800 transition-colors duration-300">
                            {post.content}
                        </p>

                        <div className="flex gap-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 font-medium"
                            >
                                <MessageCircle size={18} className="mr-2" />
                                Te entiendo ({post.reactions.understand})
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 font-medium"
                            >
                                <Heart size={18} className="mr-2" />
                                Fuerza ({post.reactions.strength})
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}

            {/* Empty state message */}
            <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                    <Heart size={48} className="mx-auto opacity-50" />
                </div>
                <p className="text-gray-600 text-lg">
                    Cada historia compartida aquí importa. Gracias por ser parte de esta comunidad.
                </p>
            </div>
        </div>
    )
}
