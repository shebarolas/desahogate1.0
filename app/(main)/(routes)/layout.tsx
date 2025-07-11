import HeaderSaludo from "@/components/home/HeaderSaludo";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderSaludo/>
      {children}
    </div>
  )
}
