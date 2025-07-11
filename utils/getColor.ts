export function getMoodColor (mood: string) {
    switch (mood) {
      case "Agotamiento":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "Tristeza":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Esperanza":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "Ansiedad":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Alegría":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }
