/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Linkedin,
  ArrowRight,
  Plus,
  Send,
  User,
  Mail,
  Smartphone,
  MessageSquare
} from "lucide-react";
import React, { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formStep, setFormStep] = useState('filling'); // 'filling' | 'submitting' | 'success'
  const [scrolled, setScrolled] = useState(false);
  const [marqueeDuration, setMarqueeDuration] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStep('success');
    }, 1500);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    // Reset form after closing animation
    setTimeout(() => setFormStep('filling'), 500);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`glass-nav transition-all duration-500 ${scrolled ? 'py-4' : 'py-8 border-transparent'}`}>
        <div className="container-limit flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter uppercase whitespace-nowrap">LUMODERM</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            {['Services', 'Clinical Lab', 'Specialists', 'Reviews'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-[13px] font-semibold text-gray-500 hover:text-accent tracking-wider uppercase transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-primary text-white px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/10"
            >
              Consultation
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {['Services', 'Clinical Lab', 'Specialists', 'Reviews'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-2xl font-display font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
              className="bg-primary text-white w-full py-5 rounded-2xl text-lg font-bold tracking-widest uppercase mt-4"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-36 overflow-hidden">
        <div className="container-limit grid lg:grid-cols-2 gap-20 lg:gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col gap-8 md:gap-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-accent/5 text-accent px-3 py-1 rounded-full border border-accent/10 w-fit">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">World Class Dermatology</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn} 
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-xl"
            >
              Elevating the <br /> 
              <span className="text-gray-300 font-light italic">science of skin.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              className="text-base md:text-lg text-gray-500 max-w-md font-normal leading-relaxed"
            >
              A clinical approach to aesthetics. Our dermatologists combine medical precision with bespoke artistry to reveal your skin's natural potential.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-primary text-white px-7 py-3.5 rounded-full text-[12px] font-extrabold uppercase tracking-[0.15em] hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/10 flex items-center justify-center gap-2"
              >
                Book Consultation <ArrowRight size={16} />
              </button>
              <a href="#specialists" className="bg-white text-primary px-7 py-3.5 rounded-full text-[12px] font-extrabold uppercase tracking-[0.15em] hover:bg-gray-50 transition-all border border-gray-100 flex items-center justify-center shadow-sm">
                Our Specialists
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-10 flex items-center gap-10">
              <div className="flex -space-x-3">
                {[
                  { id: 1, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100' },
                  { id: 2, img: '/src/assets/images/regenerated_image_1778434022230.jpg' },
                  { id: 3, img: '/src/assets/images/regenerated_image_1778434026812.png' },
                  { id: 4, img: '/src/assets/images/regenerated_image_1778434018325.png' }
                ].map((avatar) => (
                  <div key={avatar.id} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <img 
                      src={avatar.img} 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-accent flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                  12K+
                </div>
              </div>
              <div className="text-gray-400">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FCD34D" stroke="#FCD34D" />)}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Highest Rated Clinical Group</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-12"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
                alt="Dermatology Specialist" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-12 md:-right-20 top-20 bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-xl border border-white/50 z-20 max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-0.5">Verified</p>
                  <p className="text-sm font-bold">Board Certified</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Over 10 years of clinical experience in advanced skin care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Precision Stats */}
      <section className="bg-medical border-y border-gray-100 section-padding">
        <div className="container-limit">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: 'Founded', value: '2012' },
              { label: 'Success Rate', value: '99.4%' },
              { label: 'Innovation', value: '18+' },
              { label: 'Presence', value: '03' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">{stat.label}</p>
                <p className="text-4xl lg:text-5xl font-display font-bold tracking-tighter">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-limit">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-xl">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-6 block"
              >
                Specialties
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">Precision care <br /> for your <span className="text-gray-300 italic font-light">unique profile.</span></h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                idx: '01', 
                title: 'Clinical Therapy', 
                desc: 'Advanced acne protocols and complex condition management.',
                img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800'
              },
              { 
                idx: '02', 
                title: 'Laser Suite', 
                desc: 'Non-ablative technology for resurfacing and correction.',
                img: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800'
              },
              { 
                idx: '03', 
                title: 'Molecular Facials', 
                desc: 'Deep dermal revitalization using ultrasonic technology.',
                img: '/src/assets/images/regenerated_image_1778433673268.png'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="modern-card group overflow-hidden relative bg-white flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-gray-50">
                  <img 
                    src={service.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title} 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black tracking-[0.2em] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-accent shadow-sm border border-white/20">{service.idx}</span>
                  </div>
                </div>
                <div className="p-8 pb-10 flex flex-col flex-1 justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm font-normal leading-relaxed mb-8 text-gray-400">{service.desc}</p>
                  </div>
                  <button className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] transition-all px-5 py-2.5 rounded-full border border-gray-100 text-accent hover:border-accent hover:bg-accent hover:text-white">
                    Learn More <Plus size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Human Section - INNOVATORS */}
      <section id="specialists" className="section-padding bg-medical">
        <div className="container-limit grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-3 bg-accent/5 text-accent px-4 py-1.5 rounded-full border border-accent/10 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scientific Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Led by true <br /><span className="italic font-light text-gray-300">innovators.</span></h2>
            <p className="text-base text-gray-500 font-normal mb-12 leading-relaxed max-w-md">Our clinics are supervised by world-renowned specialists committed to ethical practice and transformative results. We prioritize patient safety and technological precision above all else.</p>
            <div className="grid grid-cols-2 gap-12">
               {[
                 { name: 'Dr. Sarah Mitchell', role: 'Chief Medical Officer', credentials: 'MD, PhD Harvard Medical' },
                 { name: 'Dr. Arthur Chen', role: 'Director of Laser Surgery', credentials: 'MD Stanford Dermatology' }
               ].map((spec, i) => (
                 <div key={i} className="flex flex-col gap-2">
                    <p className="text-lg font-bold tracking-tight text-primary leading-none">{spec.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent">{spec.role}</p>
                    <p className="text-[10px] font-medium text-gray-400 mt-1">{spec.credentials}</p>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 bg-gray-100">
              <img 
                src="/src/assets/images/regenerated_image_1778433762830.png" 
                className="w-full h-full object-cover transition-all duration-700" 
                alt="Clinic Specialist" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-[2rem] -z-10 opacity-10" />
          </motion.div>
        </div>
      </section>

      {/* Reviews - MARQUEE */}
      <section id="reviews" className="section-padding overflow-hidden">
        <div className="container-limit mb-20 text-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-6 block"
            >
              Testimonials
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Patient <span className="italic font-light text-gray-300">perspectives.</span></h2>
        </div>
        
        <div className="relative">
          {/* Faders */}
          <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden gap-8 py-10 relative">
            <motion.div 
               animate={{ x: ["-50%", "0%"] }}
               transition={{ 
                 duration: marqueeDuration, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
               onMouseEnter={() => setMarqueeDuration(120)}
               onMouseLeave={() => setMarqueeDuration(40)}
               className="flex gap-8 shrink-0 min-w-full"
               style={{ width: "fit-content" }}
            >
              {[...Array(2)].map((_, listIdx) => (
                <div key={listIdx} className="flex gap-8">
                  {[
                    { name: 'Julianne Vance', text: 'Lumoderm changed my perspective on skin health. Their approach is unlike any clinic I have visited.', img: 'https://images.unsplash.com/photo-1544005313-94ddf028fb8d?q=80&w=200' },
                    { name: 'Robert Sterling', text: 'The precision in their diagnostic lab is unmatched. Finally solved my chronic skin issues.', img: '/src/assets/images/regenerated_image_1778434962771.jpg' },
                    { name: 'Sofia Martinez', text: 'Beautiful space with world-class clinical results. I highly recommend their laser therapies.', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200' },
                    { name: 'Elena Rostova', text: 'Professionalism at its finest. The staff is knowledgeable and the results are truly visible.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200' },
                  ].map((testi, i) => (
                    <div 
                      key={i} 
                      className="w-[400px] p-10 rounded-[3rem] border border-gray-100 bg-white shadow-sm flex flex-col justify-between hover:border-accent transition-all duration-500 hover:shadow-xl group shrink-0"
                    >
                      <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#2563EB" stroke="#2563EB" />)}
                      </div>
                      <p className="text-lg font-light italic text-gray-500 leading-relaxed mb-10">"{testi.text}"</p>
                      <div className="flex items-center gap-4">
                        <img src={testi.img} className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-accent transition-all" alt="" referrerPolicy="no-referrer" />
                        <div>
                          <span className="text-sm font-bold tracking-tight block">{testi.name}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Verified Patient</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-limit">
          <motion.div 
             whileInView={{ opacity: 1, scale: 1 }}
             initial={{ opacity: 0, scale: 0.98 }}
             className="bg-primary rounded-[5rem] min-h-[500px] flex flex-col lg:flex-row items-center justify-between overflow-hidden text-white relative"
          >
            <div className="p-16 lg:p-24 lg:w-3/5 text-left relative z-10">
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-10 tracking-tighter">Your skin's <br /><span className="text-white/30 italic font-light">brightest era.</span></h2>
              <p className="text-lg text-white/50 font-normal mb-12 max-w-md leading-relaxed">Schedule your first clinical analysis today. Our specialists are ready to design your path to radiant health.</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-accent text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all shadow-xl"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 h-full relative self-stretch">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000" 
                className="w-full h-full object-cover lg:scale-125 lg:origin-left transition-transform duration-1000 group-hover:scale-110" 
                alt="Skin detail" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-transparent lg:block hidden" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100">
        <div className="container-limit flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
              <div className="w-3.5 h-3.5 border-2 border-white rounded-full" />
            </div>
            <span className="text-lg font-display font-bold tracking-tighter uppercase">LUMODERM</span>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">© 2026 Lumoderm Clinical Group LLC.</p>
          <div className="flex gap-8">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-300 hover:text-accent transition-colors"><Icon size={18} /></a>
            ))}
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBooking}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={closeBooking}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-50 transition-colors z-20"
              >
                <X size={24} className="text-gray-400" />
              </button>

              <div className="grid md:grid-cols-[1fr_1.5fr] min-h-[600px]">
                {/* Modal Sidebar */}
                <div className="bg-medical p-10 hidden md:flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-12">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white rounded-full" />
                      </div>
                      <span className="text-sm font-display font-bold tracking-tighter uppercase whitespace-nowrap">LUMODERM</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Personalized <br />Analysis</h3>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">Schedule a scientific evaluation of your skin with our senior medical staff.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm">
                        <ShieldCheck size={20} />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Board Certified <br />Specialists</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm">
                        <Clock size={20} />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Prompt Clinical <br />Consultations</p>
                    </div>
                  </div>
                </div>

                {/* Modal Form */}
                <div className="p-10 md:p-12">
                  <AnimatePresence mode="wait">
                    {formStep === 'filling' || formStep === 'submitting' ? (
                      <motion.div 
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="mb-10">
                          <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Booking Portal</span>
                          <h2 className="text-3xl font-bold tracking-tight">Clinical Intake</h2>
                        </div>

                        <form onSubmit={handleBookingSubmit} className="space-y-5">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            <input 
                              required
                              type="text" 
                              placeholder="FULL NAME"
                              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-[12px] font-bold tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                              <input 
                                required
                                type="email" 
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-[12px] font-bold tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                              />
                            </div>
                            <div className="relative">
                              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                              <input 
                                required
                                type="tel" 
                                placeholder="PHONE NUMBER"
                                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-[12px] font-bold tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                              <Plus size={18} />
                            </span>
                            <select 
                              required
                              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-[12px] font-bold tracking-widest text-primary focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none uppercase"
                            >
                              <option value="">PREFERRED TREATMENT</option>
                              <option value="dermal">CLINICAL THERAPY</option>
                              <option value="laser">LASER SUITE</option>
                              <option value="facial">MOLECULAR FACIALS</option>
                              <option value="other">GENERAL CONSULTATION</option>
                            </select>
                          </div>

                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-5 text-gray-300" size={18} />
                            <textarea 
                              placeholder="CLINICAL NOTES / CONCERNS"
                              rows={3}
                              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-[12px] font-bold tracking-widest placeholder:text-gray-300 focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                            ></textarea>
                          </div>

                          <button 
                            disabled={formStep === 'submitting'}
                            className="bg-primary text-white w-full py-5 rounded-2xl text-[12px] font-black tracking-[0.2em] uppercase hover:bg-accent transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3 disabled:opacity-50"
                          >
                            {formStep === 'submitting' ? (
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>SUBMIT REQUEST <Send size={16} /></>
                            )}
                          </button>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-20"
                      >
                        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200 }}
                          >
                            <ShieldCheck size={48} />
                          </motion.div>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Request Received</h2>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-[280px]">
                          Our medical coordinators will contact you within 2 clinical hours to confirm your analysis appointment.
                        </p>
                        <button 
                          onClick={closeBooking}
                          className="mt-12 text-[11px] font-black uppercase tracking-[0.3em] text-accent hover:text-primary transition-colors"
                        >
                          Return to Home
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

