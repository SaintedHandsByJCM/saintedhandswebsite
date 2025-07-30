"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your wellness journey? Contact us to schedule your appointment or ask any questions about our
            services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">(555) 123-4567</p>
                <p className="text-gray-600">Call or text for appointments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-emerald-700" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@saintedhandsbyjcm.com</p>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-emerald-700" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Professional Wellness Studio</p>
                <p className="text-gray-600">Address provided upon booking</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-emerald-700" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 10:00 AM - 5:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> By appointment only
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div id="booking" className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Appointment</h3>
            <p className="text-gray-600 mb-8 text-center">
              Choose your preferred service and schedule your session using our online booking system.
            </p>

            <div className="space-y-4">
              <Button
                className="w-full bg-emerald-700 hover:bg-emerald-800 py-6 text-lg"
                onClick={() => window.open("https://calendly.com/saintedhandsbyjcm/60-minute-massage", "_blank")}
              >
                Book 60-Minute Session
              </Button>
              <Button
                className="w-full bg-emerald-700 hover:bg-emerald-800 py-6 text-lg"
                onClick={() => window.open("https://calendly.com/saintedhandsbyjcm/90-minute-massage", "_blank")}
              >
                Book 90-Minute Session
              </Button>
              <Button
                variant="outline"
                className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-50 py-6 text-lg bg-transparent"
                onClick={() => window.open("https://calendly.com/saintedhandsbyjcm/consultation", "_blank")}
              >
                Schedule Consultation
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">* 24-hour cancellation policy applies</p>
          </div>
        </div>
      </div>
    </section>
  )
}
