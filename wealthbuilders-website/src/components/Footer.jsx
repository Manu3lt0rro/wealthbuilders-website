import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';
import logo from '../assets/wealthbuilders_logo.png';

const Footer = () => {
  const footerLinks = {
    'Programs': [
      'WealthBuilders University',
      'AI Hustle Challenge',
      '1:1 Coaching',
      'Free Resources'
    ],
    'Company': [
      'About Manu',
      'Our Story',
      'Community Guidelines',
      'Success Stories'
    ],
    'Resources': [
      'AI Hustle Handbook',
      'The FAITH Code Book',
      'Blog',
      'Podcast'
    ],
    'Support': [
      'Contact Us',
      'FAQ',
      'Terms of Service',
      'Privacy Policy'
    ]
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="WealthBuilders" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering faith-led families to build generational wealth through ethical AI strategies 
              and biblical principles. Join thousands who are creating financial freedom without 
              compromising their values.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">hello@wealthbuilders.cc</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">New Zealand</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background/5 p-8 rounded-lg mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI wealth building, biblical financial principles, 
              and exclusive community updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-background/60 mt-2">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-background/60 text-sm">
              © 2025 WealthBuilders. All rights reserved. Built with faith and integrity.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-background/60 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/60 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Faith Statement */}
        <div className="text-center mt-8 pt-8 border-t border-background/20">
          <p className="text-background/60 text-sm italic">
            "Trust in the Lord with all your heart and lean not on your own understanding; 
            in all your ways submit to him, and he will make your paths straight." - Proverbs 3:5-6
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

