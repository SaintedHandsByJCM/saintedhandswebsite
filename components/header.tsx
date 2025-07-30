import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-emerald-700">
          Sainted Hands by JCM
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
            <Link href="#booking">Book Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
