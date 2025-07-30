import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Sainted Hands by JCM</h3>
            <p className="text-gray-300 mb-4">
              Professional therapeutic massage therapy for healing, relaxation, and wellness.
            </p>
            <p className="text-gray-400 text-sm">Licensed Massage Therapist</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(555) 123-4567</li>
              <li>info@saintedhandsbyjcm.com</li>
              <li>Professional Wellness Studio</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Sainted Hands by JCM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
