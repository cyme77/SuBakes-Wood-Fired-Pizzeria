import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Cookie, Utensils, Star, Heart, Award, Snowflake, Crown } from "lucide-react";
import { menuData } from "@/data/menu-data";

export default function MenuSection() {
  const iconMap = {
    star: Star,
    heart: Heart,
    award: Award,
    snowflake: Snowflake,
    crown: Crown,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="menu" className="py-20 bg-[hsl(var(--warm-beige))] section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--coffee-brown))] mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-[hsl(var(--dark-coffee))] max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, fresh
            pastries, and delicious meals
          </p>
        </motion.div>

        {/* Coffee Menu */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <Coffee className="text-[hsl(var(--golden-brown))] mr-3 h-8 w-8" />
            <h3 className="text-3xl font-semibold text-[hsl(var(--coffee-brown))]">
              Premium Coffee
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.coffee.map((item, index) => {
              const IconComponent = iconMap[item.badge.icon as keyof typeof iconMap];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="menu-card-hover bg-white border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-[hsl(var(--dark-coffee))]">
                          {item.name}
                        </h4>
                        <span className="text-[hsl(var(--golden-brown))] font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <Badge
                        variant="secondary"
                        className="text-[hsl(var(--coffee-brown))] bg-[hsl(var(--coffee-brown))]/10"
                      >
                        <IconComponent className="w-3 h-3 mr-1" />
                        {item.badge.text}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pastries Menu */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <Cookie className="text-[hsl(var(--golden-brown))] mr-3 h-8 w-8" />
            <h3 className="text-3xl font-semibold text-[hsl(var(--coffee-brown))]">
              Fresh Pastries & Baked Goods
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.pastries.map((item, index) => {
              const IconComponent = iconMap[item.badge.icon as keyof typeof iconMap];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="menu-card-hover bg-white border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-[hsl(var(--dark-coffee))]">
                          {item.name}
                        </h4>
                        <span className="text-[hsl(var(--golden-brown))] font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <Badge
                        variant="secondary"
                        className="text-[hsl(var(--coffee-brown))] bg-[hsl(var(--coffee-brown))]/10"
                      >
                        <IconComponent className="w-3 h-3 mr-1" />
                        {item.badge.text}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Light Meals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <Utensils className="text-[hsl(var(--golden-brown))] mr-3 h-8 w-8" />
            <h3 className="text-3xl font-semibold text-[hsl(var(--coffee-brown))]">
              Light Meals & Sandwiches
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.meals.map((item, index) => {
              const IconComponent = iconMap[item.badge.icon as keyof typeof iconMap];
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="menu-card-hover bg-white border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-[hsl(var(--dark-coffee))]">
                          {item.name}
                        </h4>
                        <span className="text-[hsl(var(--golden-brown))] font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <Badge
                        variant="secondary"
                        className="text-[hsl(var(--coffee-brown))] bg-[hsl(var(--coffee-brown))]/10"
                      >
                        <IconComponent className="w-3 h-3 mr-1" />
                        {item.badge.text}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
