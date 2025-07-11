import { PenTool, Users } from 'lucide-react'
import React, { useState } from 'react'

interface Props {
    setActiveTab: (key: 'diary' | 'community' ) => void,
    activeTab: string
    
}

export default function TabSwitcher({setActiveTab, activeTab}: Props) {
    
    return (
        <div className = "flex mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-lg border border-rose-100/50 max-w-md mx-auto" >
          <button
            onClick={() => setActiveTab("diary")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-500 ease-out ${
              activeTab === "diary"
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg transform scale-[1.02] shadow-rose-200/50"
                : "text-gray-600 hover:text-gray-800 hover:bg-rose-50/50 hover:scale-[1.01]"
            }`}
          >
            <PenTool size={20} className={activeTab === "diary" ? "animate-pulse" : ""} />
            <span className="text-lg">Mi Diario</span>
          </button>
          <button
            onClick={() => setActiveTab("community")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-500 ease-out ${
              activeTab === "community"
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg transform scale-[1.02] shadow-rose-200/50"
                : "text-gray-600 hover:text-gray-800 hover:bg-rose-50/50 hover:scale-[1.01]"
            }`}
          >
            <Users size={20} className={activeTab === "community" ? "animate-pulse" : ""} />
            <span className="text-lg">Comunidad</span>
          </button>
        </div>
  )
}
