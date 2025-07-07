'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services/development' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'E-Commerce', href: '/services/ecommerce' },
      { name: 'SEO Optimization', href: '/services/seo' },
      { name: 'CMS Solutions', href: '/services/cms' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@webcodency.com', href: 'mailto:hello@webcodency.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600"></div>
        <div className="noise"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container-width section-padding py-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Stay Updated with Web Codency
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on web development, design trends, and digital marketing 
                  delivered to your inbox every month.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="btn-primary flex items-center justify-center space-x-2">
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-width section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Code2 className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-bold">
                  Web<span className="text-primary-500">Codency</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming digital visions into reality. We craft exceptional web experiences 
                that drive growth and engagement for modern businesses.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.text}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Awards */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-sm text-gray-400">Follow us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-sm text-gray-400">
                  <span className="font-medium text-white">50+</span> Happy Clients
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium text-white">98%</span> Satisfaction Rate
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium text-white">5★</span> Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-width section-padding py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <span>© {currentYear} Web Codency. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>in San Francisco.</span>
              </div>
              <div className="mt-2 md:mt-0">
                <span>All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;