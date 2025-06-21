import { Coffee, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const contactDetails = [
    { icon: MapPin, text: "123 Coffee Street" },
    { icon: Phone, text: "(555) 123-CAFE" },
    { icon: Mail, text: "hello@subakes.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(var(--dark-coffee))] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="text-2xl mr-3 h-8 w-8" />
              <h3 className="text-3xl font-bold">Subakes</h3>
            </div>
            <p className="text-white/80 mb-6 font-script text-xl">
              Where every cup tells a story
            </p>
            <p className="text-white/60 text-sm max-w-md">
              Your neighborhood cafe serving artisan coffee and fresh pastries
              since 2018. Come for the coffee, stay for the community.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-[hsl(var(--golden-brown))] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-[hsl(var(--golden-brown))] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              {contactDetails.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <contact.icon className="mr-2 h-4 w-4" />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p className="text-sm">
            © 2024 Subakes Cafe. All rights reserved. | Crafted with ❤️ for our
            community
          </p>
        </div>
      </div>
    </footer>
  );
}
