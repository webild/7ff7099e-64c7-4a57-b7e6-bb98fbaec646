"use client";
import { SlideText } from '@/components/text/SlideText';
import { MinimalAbout } from '@/components/sections/layouts/about/MinimalAbout';
import { SimpleHero } from '@/components/sections/layouts/hero/SimpleHero';
import { BentoFAQ } from '@/components/sections/layouts/faq/BentoFAQ';
import { SimpleFooter } from '@/components/sections/layouts/footer/SimpleFooter';

const heroSection = () => (
  <section id="hero" className="bg-gradient-to-r from-gray-100 to-white py-20">
    <SimpleHero
      title="Your Brand"
      description="Welcome to your one-stop solution."
      primaryButtonText="Get Started"
      secondaryButtonText="Learn More"
    />
  </section>
);

const aboutSection = () => (
  <section id="about" className="bg-white py-20">
    <MinimalAbout
      description="We are committed to providing the best services to our clients."
    />
  </section>
);

const servicesSection = () => (
  <section id="services" className="bg-white py-20">
    <SlideText
      text="Our Services"
      className="text-lg mb-5"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Replace with actual service cards */}
    </div>
  </section>
);

const termsSection = () => (
  <section id="terms" className="bg-gray-100 py-20">
    <SlideText
      text="Terms & Conditions"
    />
    <p className="mt-4">Read our terms <a href="#" className="text-blue-500">here</a>.</p>
  </section>
);

const privacySection = () => (
  <section id="privacy-policy" className="bg-white py-20">
    <SlideText
      text="Privacy Policy"
    />
    <p className="mt-4">View our policy <a href="#" className="text-blue-500">here</a>.</p>
  </section>
);

const contactSection = () => (
  <section id="contact" className="bg-white py-20">
    <SlideText
      text="Contact Us"
    />
    <form className="flex flex-col gap-4 mt-4">
      <input type="text" placeholder="Name" className="border p-2" required />
      <input type="email" placeholder="Email" className="border p-2" required />
      <textarea placeholder="Message" className="border p-2" required></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
    </form>
  </section>
);

export default function Home() {
  return (
    <>
      {heroSection()}
      {aboutSection()}
      {servicesSection()}
      {termsSection()}
      {privacySection()}
      {contactSection()}
      <SimpleFooter
        columns={[
          { title: 'Policies', items: [{ label: 'Terms', onClick: () => {} }, { label: 'Privacy', onClick: () => {} }] },
        ]}
        copyrightText="© 2023 YourBrand"
        onPrivacyClick={() => {}}
      />
    </>
  );
}
