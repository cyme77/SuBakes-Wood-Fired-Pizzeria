import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, FileText, Pizza } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Menu() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPDF, setShowPDF] = useState(false);
  // Add FAB menu state
  const [showFabMenu, setShowFabMenu] = useState(false);
  const [fabRotation, setFabRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFabRotation((prev) => prev + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Full list of menu images (1 to 14)
  const menuImages = [
    "/pdf images/subakes-menu_page-0001.jpg",
    "/pdf images/subakes-menu_page-0002.jpg",
    "/pdf images/subakes-menu_page-0003.jpg",
    "/pdf images/subakes-menu_page-0004.jpg",
    "/pdf images/subakes-menu_page-0005.jpg",
    "/pdf images/subakes-menu_page-0006.jpg",
    "/pdf images/subakes-menu_page-0007.jpg",
    "/pdf images/subakes-menu_page-0008.jpg",
    "/pdf images/subakes-menu_page-0009.jpg",
    "/pdf images/subakes-menu_page-0010.jpg",
    "/pdf images/subakes-menu_page-0011.jpg",
    "/pdf images/subakes-menu_page-0012.jpg",
    "/pdf images/subakes-menu_page-0013.jpg",
    "/pdf images/subakes-menu_page-0014.jpg",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--charcoal-black))] to-[hsl(var(--rustic-red))] flex items-center justify-center">
        <motion.div
          className="text-center"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="text-4xl font-bold text-[hsl(var(--fire-orange))]">
            Wood-Firing Our Menu...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--charcoal-black))] via-[hsl(var(--rustic-red))]/20 to-[hsl(var(--wood-brown))]">
      {/* Sticky Back Button for Mobile */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-[hsl(var(--charcoal-black))]/90 to-transparent px-2 pt-2 pb-1 md:hidden flex justify-start">
        <Link href="/">
          <Button variant="outline" className="bg-[hsl(var(--fire-orange))] border-[hsl(var(--warm-amber))] text-white hover:bg-[hsl(var(--warm-amber))] w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="relative z-20 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Hide on mobile, show on md+ */}
            <div className="hidden md:block">
              <Link href="/">
                <Button variant="outline" className="bg-[hsl(var(--fire-orange))] border-[hsl(var(--warm-amber))] text-white hover:bg-[hsl(var(--warm-amber))] w-fit">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-center flex items-center gap-2 md:gap-4"
              style={{
                background: `linear-gradient(45deg, hsl(var(--fire-orange)), hsl(var(--golden-cheese)), hsl(var(--warm-amber)))`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,140,0,0.5)",
                  "0 0 40px rgba(255,140,0,0.8)", 
                  "0 0 20px rgba(255,140,0,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Pizza className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-[hsl(var(--fire-orange))]" />
              Menu
            </motion.h1>
            <div className="w-full flex justify-end md:w-auto">
              <Button
                onClick={() => setShowPDF(true)}
                className="bg-[hsl(var(--rustic-red))] hover:bg-[hsl(var(--rustic-red))]/80 text-white w-full md:w-auto"
              >
                <FileText className="w-4 h-4 mr-2" />
                Full Menu PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Menu Images Gallery */}
      <div className="relative z-20 max-w-7xl mx-auto px-1 xs:px-2 sm:px-4 pb-16">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[hsl(var(--cream-white))] mb-2 sm:mb-4">
            Our Menu
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-[hsl(var(--smoke-gray))] max-w-2xl mx-auto">
            Browse our full menu below.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 sm:gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {menuImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              className="w-full flex justify-center overflow-x-auto"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <img
                src={src}
                alt={`Menu page ${idx + 1}`}
                className="w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl h-auto rounded-xl shadow-lg border border-[hsl(var(--fire-orange))]/30 object-contain"
                style={{ maxWidth: "100%" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-10 sm:mt-16 px-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="bg-[hsl(var(--wood-brown))]/50 backdrop-blur-sm rounded-2xl p-4 xs:p-6 sm:p-8 border border-[hsl(var(--fire-orange))]/30 max-w-xl mx-auto">
          <motion.h3 
            className="text-xl xs:text-2xl sm:text-3xl font-bold text-[hsl(var(--fire-orange))] mb-2 sm:mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255,140,0,0.5)",
                "0 0 20px rgba(255,140,0,0.8)", 
                "0 0 10px rgba(255,140,0,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Experience Authentic Wood-Fired Flavor
          </motion.h3>
          <p className="text-[hsl(var(--cream-white))] text-base xs:text-lg mb-4 sm:mb-6">
            Every pizza is cooked at 900°F in our traditional wood-fired oven for that perfect leopard-spotted crust
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setShowPDF(true)}
              size="lg"
              className="bg-[hsl(var(--fire-orange))] hover:bg-[hsl(var(--warm-amber))] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full Menu
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-1 xs:p-2 sm:p-4"
            onClick={() => setShowPDF(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              className="bg-[hsl(var(--cream-white))] rounded-lg p-2 xs:p-4 sm:p-6 max-w-full w-full max-h-[90vh] overflow-hidden"
              style={{ maxWidth: "600px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-2xl font-bold text-[hsl(var(--charcoal-black))]">
                  Subakes Complete Menu
                </h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => window.open('/subakes-menu.pdf', '_blank')}
                    className="bg-[hsl(var(--fire-orange))] hover:bg-[hsl(var(--warm-amber))]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={() => setShowPDF(false)}
                    variant="outline"
                  >
                    Close
                  </Button>
                </div>
              </div>
              
              <div className="h-[60vh] sm:h-[70vh] border border-gray-300 rounded">
                <iframe
                  src="/subakes-menu.pdf"
                  className="w-full h-full"
                  title="Subakes Menu PDF"
                />
              </div>
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
              className="mb-3 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 border border-[hsl(var(--fire-orange))] bg-gradient-to-br from-white via-[hsl(var(--cream-white))] to-[hsl(var(--warm-amber))]/30 backdrop-blur-xl"
              style={{
                boxShadow: "0 8px 32px 0 rgba(255,140,0,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)"
              }}
            >
              <Link href="/">
                <button
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                  style={{ letterSpacing: "0.01em" }}
                  onClick={() => setShowFabMenu(false)}
                >
                  <span>
                    <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 18l-6-6 6-6" /></svg>
                  </span>
                  Home
                </button>
              </Link>
              <a
                href="https://www.google.com/maps/place/SuBakes+-+Wood+Fired+Pizzeria/@18.506597,73.8481189,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c142642bd53b:0x656cf44988268095!8m2!3d18.506597!4d73.8506938!16s%2Fg%2F11n05c5gk1?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z" /></svg>
                Find Us on Maps
              </a>
              <a
                href="https://www.google.com/search?sca_esv=b81c990ea89a4bf5&rlz=1C1CHBF_enIN1130IN1130&sxsrf=AE3TifNgZXKEjlAhR5JqPvMWiluU-AoisA:1749404275618&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_RMPjiykuKinGuj1TOgFyvnFGRtXdWh_VN8wsUb5cLgOhbsrxRjAl0AclH6gbBKJBRqnzUmXFQx5TvMyLYdwZkf9JiAIQtKuuUYaDW9CvK95C_Kpg%3D%3D&q=SuBakes+-+Wood+Fired+Pizzeria+Reviews&sa=X&ved=2ahUKEwj706rjruKNAxVZd2wGHRkuOuwQ0bkNegQIIRAD&biw=606&bih=663&dpr=1.38#lrd=0x3bc2c142642bd53b:0x656cf44988268095,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2" /><path d="M7 8V6a5 5 0 0 1 10 0v2" /><rect width="20" height="14" x="2" y="8" rx="2" /></svg>
                Leave a Review
              </a>
              <a
                href="tel:09021549565"
                className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                style={{ letterSpacing: "0.01em" }}
                onClick={() => setShowFabMenu(false)}
              >
                <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" /></svg>
                Call 09021549565
              </a>
              <Link href="/menu">
                <button
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                  style={{ letterSpacing: "0.01em" }}
                  onClick={() => setShowFabMenu(false)}
                >
                  <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>
                  See Our Menu
                </button>
              </Link>
              <Link href="/gallery">
                <button
                  className="flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-[hsl(var(--fire-orange))]/10 text-[hsl(var(--charcoal-black))] font-semibold text-lg transition"
                  style={{ letterSpacing: "0.01em" }}
                  onClick={() => setShowFabMenu(false)}
                >
                  <svg className="w-5 h-5 text-[hsl(var(--fire-orange))]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                  Explore Our Gallery
                </button>
              </Link>
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
