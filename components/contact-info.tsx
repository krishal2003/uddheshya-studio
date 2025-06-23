import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: ["123 Marketing Avenue", "Creative District", "Innovation City, 10001"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@uddheshyastudio.com", "support@uddheshyastudio.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm", "Sunday: Closed"],
    },
  ]

  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src="/placeholder.svg?height=400&width=800&text=Contact+Us"
          alt="Contact Us"
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30"></div>
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
