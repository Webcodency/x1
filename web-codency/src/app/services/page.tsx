'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette,
  Code,
  Globe,
  TrendingUp,
  Settings,
  Shield,
  CheckCircle,
  ArrowRight,
  Calculator,
  Clock,
  Users,
  Star,
  Zap,
  Award,
  Target,
  Layers,
  Database,
  Smartphone,
  Search,
  BarChart,
  HeadphonesIcon
} from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('design');
  const [projectType, setProjectType] = useState('website');
  const [complexity, setComplexity] = useState('medium');
  const [timeline, setTimeline] = useState('standard');

  const services = [
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers and enhance user experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Design Systems Creation',
        'Usability Testing',
        'Mobile-First Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      startingPrice: 2500,
      deliveryTime: '2-4 weeks',
      process: [
        'Discovery & Research',
        'Wireframing',
        'Visual Design',
        'Prototyping',
        'Testing & Refinement'
      ]
    },
    {
      id: 'development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies, scalable architecture, and best practices.',
      features: [
        'Frontend Development',
        'Backend Development',
        'API Development & Integration',
        'Database Design',
        'Performance Optimization',
        'Security Implementation'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'AWS'],
      startingPrice: 5000,
      deliveryTime: '4-12 weeks',
      process: [
        'Technical Planning',
        'Architecture Design',
        'Development',
        'Testing & QA',
        'Deployment & Launch'
      ]
    },
    {
      id: 'ecommerce',
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores that drive sales with seamless shopping experiences and robust features.',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Management System',
        'Multi-currency Support',
        'Analytics & Reporting'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Square'],
      startingPrice: 7500,
      deliveryTime: '6-16 weeks',
      process: [
        'Requirements Analysis',
        'Platform Selection',
        'Store Development',
        'Payment Setup',
        'Testing & Launch'
      ]
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and organic traffic with comprehensive SEO strategies and implementation.',
      features: [
        'Technical SEO Audit',
        'Keyword Research & Strategy',
        'On-page Optimization',
        'Content Strategy',
        'Link Building',
        'Performance Monitoring'
      ],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
      startingPrice: 1500,
      deliveryTime: '3-6 months',
      process: [
        'SEO Audit',
        'Strategy Development',
        'Implementation',
        'Content Creation',
        'Monitoring & Optimization'
      ]
    },
    {
      id: 'cms',
      icon: Settings,
      title: 'CMS Solutions',
      description: 'Flexible content management systems that empower you to manage your website with ease.',
      features: [
        'Custom CMS Development',
        'WordPress Development',
        'Headless CMS Setup',
        'Content Migration',
        'User Training',
        'Ongoing Support'
      ],
      technologies: ['WordPress', 'Sanity', 'Strapi', 'Contentful', 'Ghost', 'Drupal'],
      startingPrice: 3000,
      deliveryTime: '3-8 weeks',
      process: [
        'Requirements Gathering',
        'CMS Selection',
        'Development & Setup',
        'Content Migration',
        'Training & Handover'
      ]
    },
    {
      id: 'support',
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your website secure and performing optimally.',
      features: [
        'Regular Updates & Backups',
        'Security Monitoring',
        'Performance Optimization',
        'Bug Fixes & Improvements',
        'Technical Support',
        'Analytics Reporting'
      ],
      technologies: ['Monitoring Tools', 'Security Suites', 'Backup Solutions', 'Analytics'],
      startingPrice: 500,
      deliveryTime: 'Ongoing',
      process: [
        'Initial Assessment',
        'Monitoring Setup',
        'Regular Maintenance',
        'Performance Reviews',
        'Continuous Support'
      ]
    },
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  const pricingFactors = {
    projectType: {
      website: 1,
      webapp: 1.5,
      ecommerce: 2,
      platform: 2.5
    },
    complexity: {
      simple: 0.8,
      medium: 1,
      complex: 1.5,
      enterprise: 2.2
    },
    timeline: {
      rush: 1.4,
      standard: 1,
      flexible: 0.9
    }
  };

  const calculatePrice = () => {
    const basePrice = currentService.startingPrice;
    const multiplier = pricingFactors.projectType[projectType as keyof typeof pricingFactors.projectType] * 
                      pricingFactors.complexity[complexity as keyof typeof pricingFactors.complexity] * 
                      pricingFactors.timeline[timeline as keyof typeof pricingFactors.timeline];
    return Math.round(basePrice * multiplier);
  };

  const testimonials = [
    {
      text: "Web Codency's design team created an interface that our users absolutely love. Conversion rates increased by 40%.",
      author: "Sarah Chen, Product Manager at TechFlow",
      service: "UI/UX Design"
    },
    {
      text: "The development quality exceeded our expectations. The platform handles thousands of users seamlessly.",
      author: "Michael Rodriguez, CTO at DataHub",
      service: "Web Development"
    },
    {
      text: "Our e-commerce sales tripled after the redesign. The new platform is fast, secure, and user-friendly.",
      author: "Emily Johnson, Founder of StyleShop",
      service: "E-Commerce"
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '150%', label: 'Avg. Performance Boost', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: HeadphonesIcon },
    { number: '50+', label: 'Projects Delivered', icon: Award },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. 
              From design to development, we&apos;ve got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className={`card p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 ${
                    selectedService === service.id ? 'ring-2 ring-primary-500 shadow-lg' : ''
                  }`}>
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          ${service.startingPrice.toLocaleString()}+
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Starting from
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Service Info */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mr-4">
                  <currentService.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Starting from ${currentService.startingPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  What&apos;s Included
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentService.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Technologies We Use
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Our Process
                </h4>
                <div className="space-y-3">
                  {currentService.process.map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pricing Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-8"
            >
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Project Estimator
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'website', label: 'Website' },
                        { id: 'webapp', label: 'Web App' },
                        { id: 'ecommerce', label: 'E-commerce' },
                        { id: 'platform', label: 'Platform' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setProjectType(type.id)}
                          className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                            projectType === type.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Complexity
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'simple', label: 'Simple' },
                        { id: 'medium', label: 'Medium' },
                        { id: 'complex', label: 'Complex' },
                        { id: 'enterprise', label: 'Enterprise' }
                      ].map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setComplexity(level.id)}
                          className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                            complexity === level.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {level.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Timeline
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'rush', label: 'Rush (2-4 weeks)', note: '+40% fee' },
                        { id: 'standard', label: 'Standard (4-8 weeks)', note: 'Standard pricing' },
                        { id: 'flexible', label: 'Flexible (8+ weeks)', note: '10% discount' }
                      ].map((time) => (
                        <button
                          key={time.id}
                          onClick={() => setTimeline(time.id)}
                          className={`w-full p-3 rounded-lg text-left transition-colors ${
                            timeline === time.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          <div className="font-medium">{time.label}</div>
                          <div className={`text-sm ${timeline === time.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-500'}`}>
                            {time.note}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Price */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Estimated Project Cost
                      </div>
                      <div className="text-4xl font-bold text-primary-600 mb-4">
                        ${calculatePrice().toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        *Final price may vary based on specific requirements
                      </div>
                      <Link
                        href="/contact"
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <span>Get Detailed Quote</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real feedback from clients who&apos;ve experienced the quality of our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-8 h-full">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.service}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let&apos;s discuss your project requirements and create a custom solution 
              that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-ghost border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}