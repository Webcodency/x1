'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ExternalLink,
  Github,
  Play,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Filter,
  Search,
  Eye,
  Heart,
  Star
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'ecommerce', name: 'E-Commerce', count: 4 },
    { id: 'saas', name: 'SaaS', count: 3 },
    { id: 'corporate', name: 'Corporate', count: 3 },
    { id: 'ngo', name: 'Non-Profit', count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStore Pro',
      category: 'ecommerce',
      description: 'Modern e-commerce platform with advanced features, personalized recommendations, and seamless checkout experience.',
      image: '/portfolio/techstore.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechStore Inc.',
      duration: '3 months',
      year: '2024',
      stats: {
        conversionIncrease: '150%',
        trafficGrowth: '200%',
        satisfaction: '98%'
      },
      features: [
        'Advanced product filtering',
        'AI-powered recommendations',
        'Multi-currency support',
        'Real-time inventory tracking'
      ],
      testimonial: {
        text: 'Web Codency delivered an exceptional e-commerce platform that exceeded our expectations.',
        author: 'John Smith, CEO of TechStore Inc.'
      },
      links: {
        live: 'https://techstore-demo.com',
        github: '#',
        case: '/portfolio/techstore'
      }
    },
    {
      id: 2,
      title: 'CloudFlow Dashboard',
      category: 'saas',
      description: 'Comprehensive SaaS analytics dashboard with real-time data visualization and advanced reporting capabilities.',
      image: '/portfolio/cloudflow.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
      client: 'CloudFlow Technologies',
      duration: '4 months',
      year: '2024',
      stats: {
        userEngagement: '75%',
        loadTime: '2.1s',
        satisfaction: '96%'
      },
      features: [
        'Real-time analytics',
        'Custom dashboard builder',
        'Advanced data visualization',
        'API integrations'
      ],
      testimonial: {
        text: 'The dashboard transformed how we analyze and present data to our clients.',
        author: 'Sarah Johnson, Product Manager'
      },
      links: {
        live: 'https://cloudflow-demo.com',
        github: '#',
        case: '/portfolio/cloudflow'
      }
    },
    {
      id: 3,
      title: 'GreenEarth Foundation',
      category: 'ngo',
      description: 'Impactful website for environmental NGO with donation platform, volunteer management, and awareness campaigns.',
      image: '/portfolio/greenearth.jpg',
      tags: ['WordPress', 'PHP', 'MySQL', 'PayPal'],
      client: 'GreenEarth Foundation',
      duration: '2 months',
      year: '2023',
      stats: {
        donationIncrease: '300%',
        volunteerSignups: '180%',
        satisfaction: '100%'
      },
      features: [
        'Donation management',
        'Volunteer portal',
        'Event calendar',
        'Impact tracking'
      ],
      testimonial: {
        text: 'Our new website has significantly increased our reach and impact in the community.',
        author: 'Maria Garcia, Director'
      },
      links: {
        live: 'https://greenearth-demo.com',
        case: '/portfolio/greenearth'
      }
    },
    {
      id: 4,
      title: 'InnovateCorp',
      category: 'corporate',
      description: 'Professional corporate website with modern design, CMS integration, and lead generation optimization.',
      image: '/portfolio/innovatecorp.jpg',
      tags: ['Next.js', 'Sanity CMS', 'Tailwind', 'Vercel'],
      client: 'InnovateCorp Ltd.',
      duration: '6 weeks',
      year: '2024',
      stats: {
        leadGeneration: '120%',
        pageViews: '85%',
        satisfaction: '97%'
      },
      features: [
        'Content management system',
        'SEO optimization',
        'Lead capture forms',
        'Multi-language support'
      ],
      testimonial: {
        text: 'Professional, modern website that perfectly represents our brand and values.',
        author: 'David Chen, Marketing Director'
      },
      links: {
        live: 'https://innovatecorp-demo.com',
        case: '/portfolio/innovatecorp'
      }
    },
    {
      id: 5,
      title: 'FitLife Marketplace',
      category: 'ecommerce',
      description: 'Fitness equipment marketplace with subscription model, personal trainer booking, and workout tracking.',
      image: '/portfolio/fitlife.jpg',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
      client: 'FitLife Inc.',
      duration: '5 months',
      year: '2023',
      stats: {
        salesIncrease: '250%',
        userRetention: '80%',
        satisfaction: '99%'
      },
      features: [
        'Subscription management',
        'Trainer booking system',
        'Workout tracking',
        'Social features'
      ],
      testimonial: {
        text: 'The marketplace exceeded our expectations and transformed our business model.',
        author: 'Alex Thompson, Founder'
      },
      links: {
        live: 'https://fitlife-demo.com',
        github: '#',
        case: '/portfolio/fitlife'
      }
    },
    {
      id: 6,
      title: 'EduPlatform',
      category: 'saas',
      description: 'Online learning platform with video streaming, interactive quizzes, progress tracking, and certification system.',
      image: '/portfolio/eduplatform.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      client: 'EduTech Solutions',
      duration: '4 months',
      year: '2024',
      stats: {
        studentEngagement: '90%',
        completionRate: '75%',
        satisfaction: '95%'
      },
      features: [
        'Video streaming',
        'Interactive assessments',
        'Progress tracking',
        'Certification system'
      ],
      testimonial: {
        text: 'The platform revolutionized how we deliver online education to our students.',
        author: 'Dr. Lisa Wang, Academic Director'
      },
      links: {
        live: 'https://eduplatform-demo.com',
        case: '/portfolio/eduplatform'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150%', label: 'Avg. ROI Increase' },
    { number: '24/7', label: 'Support Available' },
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
              Our <span className="text-primary-600">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Explore our carefully crafted digital solutions that have transformed businesses 
              and delivered exceptional results for our clients worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <Link href="#projects" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search */}
      <section id="projects" className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-width section-padding">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center">
                          <Eye className="h-8 w-8 text-primary-600" />
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        <Link
                          href={project.links.case}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Play className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category & Year */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.year}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                        {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                            <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Link
                        href={project.links.case}
                        className="w-full btn-primary text-center flex items-center justify-center space-x-2"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search terms.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-width section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              Every project follows our systematic approach to ensure exceptional results 
              and client satisfaction from concept to launch.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
                { step: '02', title: 'Design', desc: 'Creating beautiful and functional interfaces' },
                { step: '03', title: 'Development', desc: 'Building robust and scalable solutions' },
                { step: '04', title: 'Launch', desc: 'Deployment and ongoing support' },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {phase.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join our growing list of satisfied clients. Let&apos;s discuss your project 
              and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Your Project
              </Link>
              <Link href="/about" className="btn-ghost border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}