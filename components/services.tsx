"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Heart, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "60-Minute Therapeutic Massage",
      duration: "1 Hour",
      price: "Starting at $90",
      description:
        "Full body therapeutic massage focusing on tension relief and relaxation. Perfect for regular maintenance and stress relief.",
      icon: <Clock className="h-8 w-8 text-emerald-700" />,
      calendlyUrl: "https://calendly.com/saintedhandsbyjcm/60-minute-massage",
    },
    {
      title: "90-Minute Deep Healing Session",
      duration: "1.5 Hours",
      price: "Starting at $130",
      description:
        "Extended therapeutic session for deep muscle work, injury recovery, and comprehensive wellness treatment.",
      icon: <Heart className="h-8 w-8 text-emerald-700" />,
      calendlyUrl: "https://calendly.com/saintedhandsbyjcm/90-minute-massage",
    },
    {
      title: "Specialized Treatment",
      duration: "Varies",
      price: "Custom Pricing",
      description:
        "Customized massage therapy for specific conditions, injuries, or wellness goals. Consultation included.",
      icon: <Sparkles className="h-8 w-8 text-emerald-700" />,
      calendlyUrl: "https://calendly.com/saintedhandsbyjcm/consultation",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Massage Therapy Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional therapeutic massage services tailored to your individual needs and wellness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-emerald-700 font-semibold">
                  {service.duration} • {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  className="w-full bg-emerald-700 hover:bg-emerald-800"
                  onClick={() => window.open(service.calendlyUrl, "_blank")}
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
