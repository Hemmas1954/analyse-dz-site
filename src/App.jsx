import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Calculator from './components/Calculator';
import SystemModules from './components/SystemModules';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import GuaranteeAndPayment from './components/GuaranteeAndPayment';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import RecentSalesToast from './components/RecentSalesToast';

export default function App() {
  return (
    <div className="min-h-screen bg-[#071326] text-slate-100 font-['Cairo'] relative selection:bg-emerald-500 selection:text-slate-950">
      {/* Sticky Header */}
      <Navbar />

      {/* Main High-Converting Funnel Sections */}
      <main>
        {/* A. Hero Section with Live Mockup Dashboard & Telegram Bot */}
        <Hero />

        {/* B. The 3 Silent Killers (Pain Mirror) */}
        <PainPoints />

        {/* C. Interactive Dead Stock & Cash Bleed Mini-Calculator */}
        <Calculator />

        {/* D. What's Inside the System (5-in-1 Digital Modules) */}
        <SystemModules />

        {/* E. Before vs After Visual Transformation */}
        <BeforeAfter />

        {/* F. Two-Tier Pricing & Pre-Filled WhatsApp Checkout */}
        <Pricing />

        {/* G. Real Algerian Trader Testimonials & Social Proof */}
        <Testimonials />

        {/* H. Guarantee & Algerian Payment Methods (BaridiMob & CCP) */}
        <GuaranteeAndPayment />

        {/* I. FAQ Addressing All Merchant Objections */}
        <FAQ />
      </main>

      {/* Trust Footer */}
      <Footer />

      {/* Floating Bottom-Left WhatsApp Consultation Button with Badge (1) */}
      <FloatingWhatsApp />

      {/* Recent Purchases Social Proof Toast */}
      <RecentSalesToast />
    </div>
  );
}
