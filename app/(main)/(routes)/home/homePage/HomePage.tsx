'use client';
import DiaryCard from "@/components/home/DiaryCard";
import PublicCard from "@/components/home/PublicCard";
import TabSwitcher from "@/components/home/TabSwitcher";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useState } from "react";
export default function HomePage() {
    const [activeTab, setActiveTab] = useState<"diary" | "community">("diary")
    return (
        <div className="">
            <TabSwitcher setActiveTab={setActiveTab} activeTab={activeTab} />
            {
                activeTab === "diary" && (
                    <DiaryCard activeTab={activeTab} />
                )
            }
            {
                activeTab === 'community' && (
                    <PublicCard activeTab={activeTab} />
                )
            }


        </div>
    )
}
