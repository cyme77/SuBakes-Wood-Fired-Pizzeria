import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Coffee Street", "Downtown District", "City, State 12345"],
      action: { text: "Get Directions", href: "#" },
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Monday - Friday: 6:30 AM - 8:00 PM",
        "Saturday: 7:00 AM - 9:00 PM",
        "Sunday: 7:00 AM - 7:00 PM",
      ],
    },
    {
      icon: Phone,
      title: "Contact Us",
      details: ["(555) 123-CAFE", "hello@subakes.com"],
      socials: [
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Twitter, href: "#" },
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[hsl(var(--warm-beige))] section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--coffee-brown))] mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-[hsl(var(--dark-coffee))] max-w-2xl mx-auto">
            Come experience the warmth and flavor that makes Subakes your
            neighborhood's favorite cafe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-[hsl(var(--coffee-brown))] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <info.icon className="text-white text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[hsl(var(--coffee-brown))] mb-4">
                    {info.title}
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                  </div>
                  
                  {info.action && (
                    <a
                      href={info.action.href}
                      className="text-[hsl(var(--golden-brown))] font-medium hover:underline mt-4 inline-block"
                    >
                      {info.action.text}
                    </a>
                  )}
                  
                  {info.socials && (
                    <div className="flex justify-center space-x-4 mt-6">
                      {info.socials.map((social, socialIndex) => (
                        <a
                          key={socialIndex}
                          href={social.href}
                          className="text-[hsl(var(--golden-brown))] hover:text-[hsl(var(--coffee-brown))] transition-colors duration-200"
                        >
                          <social.icon className="text-2xl h-6 w-6" />
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
