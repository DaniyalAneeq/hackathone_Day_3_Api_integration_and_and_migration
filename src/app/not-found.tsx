import { Button } from "@/components/ui/button"
import Link from "next/link"

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-[384px] gap-4">
        <p className="text-3xl font-bold">! ERROR 404</p>
        <p className="text-slate-600 italic">This pages doesn&apos;t exist !</p>
        <Button variant="outline" className="bg-slate-300"><Link href="/">Go To Home Page</Link></Button>
    </div>
  )
}

export default Error