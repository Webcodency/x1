'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Code,
  Palette,
  Globe,
  TrendingUp,
  Play,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const metrics = [
    { number: '50+', label: 'Brands Served' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '5★', label: 'Average Rating' },
    { number: '24/7', label: 'Support' },
  ];

  const clients = [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'StartupX', logo: '/logos/startupx.svg' },
    { name: 'EcoCompany', logo: '/logos/ecocompany.svg' },
    { name: 'FinanceHub', logo: '/logos/financehub.svg' },
    { name: 'HealthPlus', logo: '/logos/healthplus.svg' },
    { name: 'EduTech', logo: '/logos/edutech.svg' },
  ];

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      features: ['React/Next.js', 'Node.js', 'Laravel', 'API Integration']
    },
    {
      icon: Globe,
      title: 'E-Commerce',
      description: 'Powerful online stores that drive sales and growth.',
      features: ['Shopify', 'WooCommerce', 'Payment Integration', 'Inventory Management']
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and organic traffic.',
      features: ['Technical SEO', 'Content Strategy', 'Analytics', 'Core Web Vitals']
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Web Codency transformed our digital presence completely. The team delivered beyond our expectations with incredible attention to detail.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      content: 'Working with Web Codency was a game-changer. They understood our vision and delivered a platform that scaled with our growth.',
      rating: 5,
      avatar: '/avatars/michael.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director, EcoCompany',
      content: 'The team\'s expertise in both design and development is unmatched. Our conversion rates increased by 150% after the redesign.',
      rating: 5,
      avatar: '/avatars/emily.jpg'
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-pattern opacity-20 animate-gradient"></div>
          <div className="noise opacity-10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container-width section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                Trusted by 50+ Brands Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Digital Vision
              </span>
              Into Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We craft exceptional web experiences that drive growth, engagement, and success 
              for modern businesses. From concept to launch, we&apos;re your digital transformation partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/portfolio" className="btn-primary text-lg px-8 py-4 flex items-center space-x-3">
                <span>View Portfolio</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Get a Quote
              </Link>
              <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="h-5 w-5 ml-1" />
                </div>
                <span>See Our Process</span>
              </button>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                    {metric.number}
                  </div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;ve partnered with innovative companies across various industries to deliver 
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity"
              >
                <div className="w-32 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From beautiful designs to powerful applications, we provide end-to-end services 
              that transform your digital presence and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>Explore All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
              working with Web Codency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-8 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-width section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let&apos;s discuss your project and create something amazing together. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-ghost border-white text-white hover:bg-white/10 px-8 py-4 text-lg flex items-center space-x-2">
                <span>View Our Work</span>
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
