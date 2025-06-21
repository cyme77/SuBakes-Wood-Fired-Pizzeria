import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Pizza, Camera, FileText, MapPin, Phone, CakeSlice
} from "lucide-react";

export default function Gallery() {
  // FAB menu state and rotation (must be at the top, before any return)
  const [showFabMenu, setShowFabMenu] = useState(false);
  const [fabRotation, setFabRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFabRotation((prev) => prev + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Assign each image a specific category
  const galleryImages = [
    // Pizza
    { src: "gallery images/pizza/2X Chicken 8.png", title: "2X Chicken pizza", category: "Pizza" },
    { src: "gallery images/pizza/BBQ Chicken Pizza 2.png", title: "BBQ Chicken Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Chicken Kheema Pizza 4.png", title: "Chicken Kheema Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Chicken Pepperoni Pizza 3.png", title: "Chicken Pepperoni Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Chicken Verde Pizza 5.png", title: "Chicken Verde Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Classic Cheese Pizza 4.png", title: "Classic Cheese Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Fresh Mozzarella Chicken Verde Pizza 2.png", title: "Fresh Mozzarella Chicken Verde Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Fresh Mozzarella Classic Cheese 3.png", title: "Fresh Mozzarella Classic Cheese Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Fresh Mozzarella Mediterranean Pizza 7.png", title: "Fresh Mozzarella Mediterranean Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Fresh Mozzarella Pizza and Burger .png", title: "Fresh Mozzarella Pizza and Burger", category: "Pizza" },
    { src: "gallery images/pizza/Leopard Spotted Neapolitan Style Pizza 4.png", title: "Leopard Spotted Neapolitan Style Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Margherita Pizza 7.png", title: "Margherita Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Trio Pizza 7.png", title: "The Trio Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Vegetariana Pizza 11.png", title: "Vegetariana Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Pesto Mushroom 12.png", title: "Pesto Mushroom", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party .png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 1.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 17.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 18.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 19.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 20.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 27.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 29.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pizza Party 9.png", title: "Pizza Party", category: "Pizza" },
    { src: "gallery images/pizza/Pasta and Pizza.png", title: "Pasta and Pizza", category: "Pizza" },
    { src: "gallery images/pizza/Quattro Formaggi Pizza 1.png", title: "Quattro Formaggi Pizza", category: "Pizza" },

    // Quick bites
    
    { src: "gallery images/quick bites/Bombay Toast 1.png", title: "Bombay Toast", category: "Quick bites" },
    { src: "gallery images/quick bites/Burger 4.png", title: "BB (Big Burger)", category: "Quick bites" },
    { src: "gallery images/quick bites/Caesar Salad 15.png", title: "Caesar Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Caesar Salad.png", title: "Caesar Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Quinoa and Cous Cous Salad 10.png", title: "Quinoa and Cous Cous Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Caprese Sandwich 1.png", title: "Caprese Sandwich", category: "Quick bites" },
    { src: "gallery images/quick bites/Cilantro Chicken & Hummus Crostini  5.png", title: "Cilantro Chicken & Hummus Crostini", category: "Quick bites" },
    { src: "gallery images/quick bites/Chicken Fingers 13.png", title: "Chicken Fingers", category: "Quick bites" },
    { src: "gallery images/quick bites/Chicken Salami Sandwich .png", title: "Chicken Salami Sandwich", category: "Quick bites" },
    { src: "gallery images/quick bites/French Fries Salted.png", title: "French Fries Salted", category: "Quick bites" },
    { src: "gallery images/quick bites/French Fries Piri Piri 7.png", title: "French Fries Salted", category: "Quick bites" },
    { src: "gallery images/quick bites/Garlic Bread and Dip 2 .png", title: "Garlic Bread", category: "Quick bites" },
    { src: "gallery images/quick bites/Garlic Bread with Corn and Jalapeno 7.png", title: "Garlic Bread with Corn and Jalapeno", category: "Quick bites" },
    { src: "gallery images/quick bites/Garlic Bread with Cheese 1.png", title: "Garlic Bread with Cheese", category: "Quick bites" },
    { src: "gallery images/quick bites/Garlic Breads 2.png", title: "Our Garlic Breads", category: "Quick bites" },
    { src: "gallery images/quick bites/Garlic Bread 1.png", title: "Our Garlic Breads", category: "Quick bites" },
    { src: "gallery images/quick bites/Greek Salad 5.png", title: "Greek Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Harissa Hummus and Roasted Veggies Sandwich 2.png", title: "Harissa Hummus and Roasted Veggies Sandwich", category: "Quick bites" },
    { src: "gallery images/quick bites/Mixed Sprouts and Veggies Salad 2.png", title: "Mixed Sprouts and Veggies Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Nachos 1.png", title: "Nachos", category: "Quick bites" },
    { src: "gallery images/quick bites/Off Beet Burger 10.png", title: "(O.B.B.) Off Beet Burger", category: "Quick bites" },
    { src: "gallery images/quick bites/Sandwich and Salad.png", title: "Sandwich and Salad", category: "Quick bites" },
    { src: "gallery images/quick bites/Spaghetti Aglio Olio e Peperoncino Pasta 13.png", title: "Spaghetti Aglio Olio e Peperoncino Pasta", category: "Quick bites" },
    { src: "gallery images/quick bites/Spaghetti Aglio Olio e Peperoncino Pasta 14.png", title: "Spaghetti Aglio Olio e Peperoncino Pasta", category: "Quick bites" },
    { src: "gallery images/quick bites/Spaghetti Al'Arrabbiata Pasta 1.png", title: "Spaghetti Al'Arrabbiata Pasta", category: "Quick bites" },
    { src: "gallery images/quick bites/Lobster Bites 3.png", title: "Lobster Bites", category: "Quick bites" },
    { src: "gallery images/quick bites/Tomato Bruschetta 4.png", title: "Tomato Bruschetta", category: "Quick bites" },
    { src: "gallery images/quick bites/Penne Alfredo 3.png", title: "Penne Alfredo", category: "Quick bites" },
    { src: "gallery images/quick bites/Penne Parma Rosa Pasta 6.png", title: "Penne Parma Rosa Pasta", category: "Quick bites" },
    

    // Beverages
    { src: "gallery images/beverages/Banana Salted Caramel Milkshake 3.png", title: "Banana Salted Caramel Milkshake", category: "Beverages" },
    { src: "gallery images/beverages/Black Tea 3.png", title: "Black Tea", category: "Beverages" },
    { src: "gallery images/beverages/Cafe Mocha 1.png", title: "Cafe Mocha", category: "Beverages" },
    { src: "gallery images/beverages/Cappuccino 8.png", title: "Cappuccino", category: "Beverages" },
    { src: "gallery images/beverages/Caramel Frappe 4.png", title: "Caramel Frappe", category: "Beverages" },
    { src: "gallery images/beverages/Coolers - Tamarind Twist and Kiwi Mojito .png", title: "Tamarind Twist and Kiwi Mojito", category: "Beverages" },
    { src: "gallery images/beverages/Spicy Saffron .png", title: "Spicy Saffron", category: "Beverages" },
    { src: "gallery images/beverages/Coolers - Neil Island and Spicy Saffron .png", title: "Neil Island and Spicy Saffron", category: "Beverages" },
    { src: "gallery images/beverages/Cucumber Basil Cooler.png", title: "Cucumber Basil Cooler", category: "Beverages" },
    { src: "gallery images/beverages/French Onion Soup 6.png", title: "French Onion Soup", category: "Beverages" },
    { src: "gallery images/beverages/Espresso 4.png", title: "Espresso", category: "Beverages" },
    { src: "gallery images/beverages/Frappe 6.png", title: "Frappe", category: "Beverages" },
    { src: "gallery images/beverages/Hot Chocolate 1.png", title: "Hot Chocolate", category: "Beverages" },
    { src: "gallery images/beverages/Iced Americano 1.png", title: "Iced Americano", category: "Beverages" },
    { src: "gallery images/beverages/Iced Latte 4.png", title: "Iced Latte", category: "Beverages" },
    { src: "gallery images/beverages/Kiwi Mojito 2.png", title: "Kiwi Mojito", category: "Beverages" },
    { src: "gallery images/beverages/Lemon Iced Tea.png", title: "Lemon Iced Tea", category: "Beverages" },
    { src: "gallery images/beverages/Lemonade 2.png", title: "The Lemonade", category: "Beverages" },
    { src: "gallery images/beverages/Mango Milkshake 7.png", title: "Mango Milkshake", category: "Beverages" },
    { src: "gallery images/beverages/Mint Chocolate Milkshake 3.png", title: "Mint Chocolate Milkshake", category: "Beverages" },
    { src: "gallery images/beverages/Neil Island 1.png", title: "Neil Island", category: "Beverages" },
    { src: "gallery images/beverages/Strawberry Cheesecake Milkshake 8.png", title: "Strawberry Cheesecake Milkshake", category: "Beverages" },
    { src: "gallery images/beverages/Tamarind Twist 1.png", title: "Tamarind Twist", category: "Beverages" },
    { src: "gallery images/beverages/Tomato Basil Soup 5.png", title: "Tomato Basil Soup 5.png", category: "Beverages" },
    { src: "gallery images/beverages/Tea 2.png", title: "The Tea", category: "Beverages" },
    { src: "gallery images/beverages/Vietnamese Iced Coffee 1.png", title: "Vietnamese Iced Coffee", category: "Beverages" },

    // Desserts
    { src: "gallery images/desserts/Berry Vanilla Entremet 6.png", title: "Berry Vanilla Entremet", category: "Desserts" },
    { src: "gallery images/desserts/Carrot Cake 4.png", title: "Carrot Cake", category: "Desserts" },
    { src: "gallery images/desserts/Mango Swiss Roll 1.png", title: "Mango Swiss Roll", category: "Desserts" },
    { src: "gallery images/desserts/Devil's Cake 6.png", title: "Devil's Cake", category: "Desserts" },
    { src: "gallery images/desserts/Coffee and Dessert - Copy.png", title: "Coffee and Dessert", category: "Desserts" },
    { src: "gallery images/desserts/Tiramisu Entremet.jpg", title: "Tiramisu Entremet", category: "Desserts" },

    // Ingredients
    { src: "gallery images/ingredients/Basil Oil 1.png", title: "Basil Oil Pizza", category: "Pizza" },

    // Ambience

    { src: "gallery images/Ambience/open hours.jpg", title: "Our Cozy Ambience", category: "Ambience" },
    { src: "gallery images/Ambience/Ambience 2 (1).png", title: "Our Cozy Ambience", category: "Ambience" },
    { src: "gallery images/Ambience/IMG_50134.jpeg", title: "Our Cozy Ambience", category: "Ambience" },
    
    

    // Behind the scenes
    // { src: "gallery images/Behind the scenes/chef-prep.png", title: "Chef at Work", category: "Behind the scenes" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  // Add state for pagination
  const IMAGES_PER_PAGE = 18;
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  // List of categories for filtering
  const categories = [
    "All",
    "Pizza",
    "Quick bites",
    "Beverages",
    "Desserts",
    "Ambience",
    // "Behind the scenes",
  ];

  // Helper: beverage titles (for filtering)
  const beverageTitles = [
    "Black Tea", "Cafe Mocha", "Cappuccino", "Caramel Frappe", "Tamarind Twist and Kiwi Mojito",
    "Cucumber Basil Cooler", "Espresso", "Frappe", "Banana Salted Caramel Milkshake", "Mango Milkshake",
    "Mint Chocolate Milkshake", "Hot Chocolate", "Iced Americano", "Iced Latte", "Kiwi Mojito",
    "Lemon Iced Tea", "The Lemonade", "Strawberry Cheesecake Milkshake", "Tamarind Twist", "The Tea",
    "Vietnamese Iced Coffee", "Spicy Saffron", 
  ];

  // Shuffle helper
  function shuffleArray<T>(array: T[]): T[] {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Deterministic shuffle using a fixed seed (Fisher-Yates with seed)
  function seededShuffle<T>(array: T[], seed: number): T[] {
    const arr = array.slice();
    let random = mulberry32(seed);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Mulberry32 PRNG for deterministic shuffling
  function mulberry32(a: number) {
    return function () {
      var t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Filtering and shuffling logic
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      // Scramble only for "All" section, fixed order
      const seed = 12345; // any constant
      return seededShuffle(galleryImages, seed);
    } else {
      // Keep original order for other categories
      return galleryImages.filter(
        (img) => img.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    // eslint-disable-next-line
  }, [activeCategory, galleryImages]);

  // Only show up to visibleCount images, always append new images at the bottom
  const paginatedImages = filteredImages.slice(0, visibleCount);

  // Reset visibleCount when category changes
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
  }, [activeCategory]);

  // Cheese drop animation component
  const CheeseDrops = () => {
    const [drops, setDrops] = useState<Array<{ id: number; x: number; delay: number }>>([]);

    useEffect(() => {
      const generateDrops = () => {
        const newDrops = Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
        }));
        setDrops(newDrops);
      };

      generateDrops();
      const interval = setInterval(generateDrops, 8000);
      return () => clearInterval(interval);
    }, []);

    // Only render drops if window is defined (prevents SSR errors)
    if (typeof window === "undefined") return null;

    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute w-3 h-3 bg-[hsl(var(--golden-cheese))] rounded-full opacity-70"
            style={{ left: `${drop.x}%` }}
            initial={{ y: -20, rotate: 0 }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 20 : 1000,
              rotate: 360,
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 8,
              delay: drop.delay,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    // Preload all images in the background after initial loading
    if (!isLoading) {
      galleryImages.forEach((img) => {
        const preloadImg = new window.Image();
        preloadImg.src = img.src;
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--charcoal-black))] to-[hsl(var(--stone-gray))] flex items-center justify-center">
        <motion.div
          className="text-4xl font-bold text-[hsl(var(--fire-orange))]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🍕 Loading Gallery...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--charcoal-black))] via-[hsl(var(--stone-gray))] to-[hsl(var(--wood-brown))]">
      <CheeseDrops />

      {/* Fixed Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-[hsl(var(--fire-orange))] border-[hsl(var(--warm-amber))] text-white hover:bg-[hsl(var(--warm-amber))]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="relative z-20 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-center"
              style={{
                background: `linear-gradient(45deg, hsl(var(--fire-orange)), hsl(var(--golden-cheese)), hsl(var(--warm-amber)))`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,140,0,0.5)",
                  "0 0 40px rgba(255,140,0,0.8)",
                  "0 0 20px rgba(255,140,0,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Gallery
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <motion.div
        className="relative z-20 px-4 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[hsl(var(--fire-orange))] text-white shadow-lg shadow-[hsl(var(--fire-orange))]/50"
                    : "bg-[hsl(var(--cream-white))]/10 text-[hsl(var(--cream-white))] hover:bg-[hsl(var(--fire-orange))]/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pb-16">
        {/* Show "Coming soon" for Ingredients */}
        {activeCategory === "Ingredients" ? (
          <div className="flex flex-col items-center justify-center py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[hsl(var(--fire-orange))] mb-4"
            >
              🧀 Ingredients section coming soon!
            </motion.div>
            <p className="text-lg text-[hsl(var(--cream-white))]">
              Stay tuned for a behind-the-scenes look at our premium ingredients.
            </p>
          </div>
        ) : (
          <>
            <div
              // Masonry layout using CSS columns for tight packing, no empty space
              className="columns-1 sm:columns-2 md:columns-3 gap-2"
              style={{
                // Remove grid styles, use columns for masonry effect
              }}
            >
              {paginatedImages.map((image) => (
                <motion.div
                  key={image.src + image.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="mb-2 break-inside-avoid group cursor-pointer"
                  style={{ borderRadius: "0.75rem", overflow: "hidden" }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Card className="overflow-hidden bg-[hsl(var(--cream-white))]/10 border-[hsl(var(--warm-amber))]/30 backdrop-blur-sm rounded-xl p-0">
                    <div className="relative w-full">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 gallery-img-block"
                        style={{ display: "block" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--charcoal-black))]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-8 h-8 text-[hsl(var(--fire-orange))]" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-lg">{image.title}</h3>
                        <p className="text-[hsl(var(--golden-cheese))] text-sm">{image.category}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* See More Button */}
            {visibleCount < filteredImages.length && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setVisibleCount((c) => c + IMAGES_PER_PAGE)}
                  className="bg-[hsl(var(--fire-orange))] text-white px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--warm-amber))] transition-colors"
                >
                  See More
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
             
<button
  onClick={() => setSelectedImage(null)}
  className="absolute top-4 right-4 bg-[hsl(var(--fire-orange))] text-white p-2 rounded-full hover:bg-[hsl(var(--warm-amber))] transition-colors"
  title="Close image"
  aria-label="Close image"
>
  <X className="w-6 h-6" />
</button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Subakes FAB */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {showFabMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              // Premium FAB menu theme
              className="mb-3 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 border border-[hsl(var(--fire-orange))] bg-gradient-to-br from-white via-[hsl(var(--cream-white))] to-[hsl(var(--warm-amber))]/30 backdrop-blur-xl"
              style={{
                boxShadow: "0 8px 32px 0 rgba(255,140,0,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)"
              }}
            >
              {/* Home */}
              <button
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => {
                  setShowFabMenu(false);
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                }}
              >
                <Pizza className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                Home
              </button>
              {/* Find Us on Maps */}
              <a
                href="https://www.google.com/maps/place/SuBakes+-+Wood+Fired+Pizzeria/@18.506597,73.8481189,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c142642bd53b:0x656cf44988268095!8m2!3d18.506597!4d73.8506938!16s%2Fg%2F11n05c5gk1?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <MapPin className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                Find Us on Maps
              </a>
              {/* Leave a Review */}
              <a
                href="https://www.google.com/search?sca_esv=b81c990ea89a4bf5&rlz=1C1CHBF_enIN1130IN1130&sxsrf=AE3TifNgZXKEjlAhR5JqPvMWiluU-AoisA:1749404275618&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_RMPjiykuKinGuj1TOgFyvnFGRtXdWh_VN8wsUb5cLgOhbsrxRjAl0AclH6gbBKJBRqnzUmXFQx5TvMyLYdwZkf9JiAIQtKuuUYaDW9CvK95C_Kpg%3D%3D&q=SuBakes+-+Wood+Fired+Pizzeria+Reviews&sa=X&ved=2ahUKEwj706rjruKNAxVZd2wGHRkuOuwQ0bkNegQIIRAD&biw=606&bih=663&dpr=1.38#lrd=0x3bc2c142642bd53b:0x656cf44988268095,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <CakeSlice className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                Leave a Review
              </a>
              {/* Call */}
              <a
                href="tel:09021549565"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <Phone className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                Call 09021549565
              </a>
              {/* See Our Menu */}
              <Link href="/menu">
                <button
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                  style={{ letterSpacing: "0.01em" }}
                  onClick={() => setShowFabMenu(false)}
                >
                  <FileText className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                  See Our Menu
                </button>
              </Link>
              {/* Explore Our Gallery */}
              <Link href="/gallery">
                <button
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                  style={{ letterSpacing: "0.01em" }}
                  onClick={() => setShowFabMenu(false)}
                >
                  <Camera className="w-5 h-5 text-[hsl(var(--fire-orange))]" />
                  Explore Our Gallery
                </button>
              </Link>
              {/* Follow us on Instagram */}
              <a
                href="https://www.instagram.com/subakespune/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[#f9e6d0]/60 text-[#e1306c] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
                Follow us on Instagram
              </a>
              {/* Follow us on Facebook */}
              <a
                href="https://www.facebook.com/subakespune/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[#e6eaf9]/60 text-[#1877f3] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2.1h-3.2C9.6 2.1 8 3.7 8 6.2V8H5.5A.5.5 0 0 0 5 8.5v3a.5.5 0 0 0 .5.5H8v9a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-9h2.1a.5.5 0 0 0 .5-.5l.1-3a.5.5 0 0 0-.5-.5H12V6.2c0-.5.1-.7.7-.7H17a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                </svg>
                Follow us on Facebook
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="w-16 h-16 flex items-center justify-center transition bg-transparent shadow-none border-none outline-none"
          style={{ background: "none", boxShadow: "none", border: "none" }}
          onClick={() => setShowFabMenu((v) => !v)}
          aria-label="Open Subakes menu"
        >
          <motion.img
            src="/images/057f1b6c-ec55-47d9-8275-cabf3479c3fe.jpg"
            alt="FAB"
            className="w-16 h-16 rounded-full object-cover"
            style={{
              pointerEvents: "none",
              background: "none",
              border: "none",
              boxShadow: "none"
            }}
            animate={{ rotate: fabRotation }}
            transition={{ type: "linear", ease: "linear", duration: 0 }}
            draggable={false}
          />
        </button>
      </div>
    </div>
  );
}