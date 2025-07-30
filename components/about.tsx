import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sainted Hands by JCM</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Sainted Hands by JCM, where healing meets expertise. Our licensed massage therapist brings
              years of experience in therapeutic bodywork, specializing in pain relief, stress reduction, and overall
              wellness enhancement.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of therapeutic touch to restore balance and promote natural healing. Each session
              is customized to address your specific needs, whether you're seeking relaxation, pain relief, or injury
              recovery.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-emerald-700" />
                <span className="text-gray-700">Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-emerald-700" />
                <span className="text-gray-700">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-emerald-700" />
                <span className="text-gray-700">Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-emerald-700" />
                <span className="text-gray-700">Professional Studio</span>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                  <span className="text-gray-600">Personalized treatment plans for optimal results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                  <span className="text-gray-600">Clean, comfortable, and relaxing environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                  <span className="text-gray-600">Ongoing education in latest therapeutic techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                  <span className="text-gray-600">Commitment to your health and wellness journey</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
