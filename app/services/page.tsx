import { ServicesPage } from "../page"

export default function Services() {
  // Mock data that would normally come from the main page
  const services = [
    {
      name: "Deep Tissue Massage",
      duration: "60-90 minutes",
      price: "$100-130",
      description: "Therapeutic massage targeting deep muscle layers",
    },
    {
      name: "Hot Stone Therapy",
      duration: "60-90 minutes",
      price: "$100-130",
      description: "Relaxing massage using heated stones",
    },
    {
      name: "Cupping Massage",
      duration: "60-90 minutes",
      price: "$100-130",
      description: "Traditional cupping therapy for muscle relief",
    },
  ]

  return <ServicesPage initialService={null} setPage={() => {}} services={services} />
}
