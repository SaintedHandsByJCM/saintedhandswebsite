import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Healing Touch for
          <span className="text-emerald-700 block">Body & Soul</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience therapeutic massage therapy that restores balance, relieves tension, and promotes natural healing
          in a peaceful, professional environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-emerald-700 hover:bg-emerald-800">
            <Link href="#booking">Book Your Session</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
