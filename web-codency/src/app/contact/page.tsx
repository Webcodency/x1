'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Briefcase,
  DollarSign,
  Zap,
  Shield,
  Award,
  HeadphonesIcon
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('quote');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'ecommerce', label: 'E-Commerce Solutions' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'cms', label: 'CMS Solutions' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consulting', label: 'Digital Consulting' },
    { value: 'other', label: 'Other' },
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s discuss' },
  ];

  const timelines = [
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: '1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@webcodency.com',
      description: 'Send us an email anytime',
      action: 'mailto:hello@webcodency.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm PST',
      action: 'tel:+15551234567'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Chat with us',
      description: 'Get instant support',
      action: '#'
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      value: 'Schedule meeting',
      description: 'Free 30-min consultation',
      action: '#'
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Suite 400, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@webcodency.com',
      timezone: 'PST',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, Floor 15, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@webcodency.com',
      timezone: 'EST',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'London',
      address: '789 Digital Street, Level 8, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@webcodency.com',
      timezone: 'GMT',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM'
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes! We provide comprehensive maintenance packages including updates, security monitoring, backups, and technical support to keep your website running smoothly.'
    },
    {
      question: 'Can you work with our existing design or brand guidelines?',
      answer: 'Absolutely! We can work with your existing brand guidelines, design systems, or help you create new ones. Our team adapts to your brand requirements and preferences.'
    },
    {
      question: 'What\'s included in the project cost?',
      answer: 'Our quotes include all development work, testing, basic SEO setup, and initial training. Additional services like content creation, advanced integrations, or ongoing maintenance are quoted separately.'
    },
  ];

  const stats = [
    { number: '24hrs', label: 'Response Time', icon: Clock },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '50+', label: 'Projects Delivered', icon: Briefcase },
    { number: '24/7', label: 'Support Available', icon: HeadphonesIcon },
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
              Let&apos;s Work <span className="text-primary-600">Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team 
              and let&apos;s discuss how we can bring your vision to life.
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

      {/* Quick Contact */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-width section-padding">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon className="h-8 w-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {info.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {info.description}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                {/* Tab Navigation */}
                <div className="flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`pb-4 px-2 font-medium transition-colors ${
                      activeTab === 'quote'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Get a Quote
                  </button>
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`pb-4 px-2 font-medium transition-colors ${
                      activeTab === 'general'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    General Inquiry
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          className="input"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="input"
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Company
                        </label>
                        <input
                          {...register('company')}
                          className="input"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="input"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Project Details (only for quote) */}
                    {activeTab === 'quote' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                            Service Needed *
                          </label>
                          <select {...register('service')} className="input">
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service.value} value={service.value}>
                                {service.label}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                              Budget Range *
                            </label>
                            <select {...register('budget')} className="input">
                              <option value="">Select budget range</option>
                              {budgetRanges.map(budget => (
                                <option key={budget.value} value={budget.value}>
                                  {budget.label}
                                </option>
                              ))}
                            </select>
                            {errors.budget && (
                              <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                              Timeline *
                            </label>
                            <select {...register('timeline')} className="input">
                              <option value="">Select timeline</option>
                              {timelines.map(timeline => (
                                <option key={timeline.value} value={timeline.value}>
                                  {timeline.label}
                                </option>
                              ))}
                            </select>
                            {errors.timeline && (
                              <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className="input resize-none"
                        placeholder={activeTab === 'quote' 
                          ? "Tell us about your project requirements, goals, and any specific features you need..."
                          : "How can we help you today?"
                        }
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-3">
                      <input
                        {...register('terms')}
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the{' '}
                        <a href="/privacy" className="text-primary-600 hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms" className="text-primary-600 hover:underline">
                          Terms of Service
                        </a>
                        . *
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm">{errors.terms.message}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>{activeTab === 'quote' ? 'Get Quote' : 'Send Message'}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Work With Web Codency?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
                    { icon: Shield, title: 'Reliable Support', desc: '24/7 support and maintenance services' },
                    { icon: Award, title: 'Proven Results', desc: '98% client satisfaction and measurable ROI' },
                    { icon: Users, title: 'Expert Team', desc: 'Experienced designers and developers' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FAQs */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With offices around the world, we&apos;re always available to support your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <p>{office.address}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{office.hours} ({office.timezone})</span>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Don&apos;t wait any longer. Take the first step towards your digital transformation 
              and let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Get Your Quote Now
              </button>
              <a 
                href="tel:+15551234567" 
                className="btn-ghost border-white text-white hover:bg-white/10 px-8 py-4 text-lg flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}