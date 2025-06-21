import { motion } from "framer-motion";
import { Award, Cookie, Heart, Leaf } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      text: "Award-winning coffee blends",
    },
    {
      icon: Cookie,
      text: "Fresh baked goods daily",
    },
    {
      icon: Heart,
      text: "Community-focused atmosphere",
    },
    {
      icon: Leaf,
      text: "Sustainable sourcing practices",
    },
  ];

  const specialties = [
    {
      icon: "☕",
      title: "Premium Coffee",
      description:
        "Hand-selected beans from sustainable farms, roasted to perfection for the ultimate coffee experience.",
    },
    {
      icon: "🧁",
      title: "Artisan Baking",
      description:
        "Traditional techniques meet modern flavors in our daily selection of fresh pastries and breads.",
    },
    {
      icon: "👥",
      title: "Community Hub",
      description:
        "A welcoming space where neighbors meet, students study, and friendships flourish over great coffee.",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--coffee-brown))] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Subakes began as a dream to create a
                neighborhood gathering place where exceptional coffee meets
                artisan baking. Our passion for quality drives us to source the
                finest beans and use traditional baking techniques passed down
                through generations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every morning, our skilled bakers arrive before dawn to create
                fresh pastries, breads, and desserts. Our baristas craft each
                cup with precision, ensuring every visit to Subakes is a
                memorable experience.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <feature.icon className="text-[hsl(var(--golden-brown))] text-xl mr-4 h-6 w-6" />
                    <span className="text-[hsl(var(--dark-coffee))] font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Subakes cafe interior with baking area"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--coffee-brown))] to-[hsl(var(--golden-brown))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover what makes Subakes special - our signature items crafted
              with love
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-4xl">
                  {specialty.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {specialty.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
