'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Award,
  Users,
  TrendingUp,
  Heart,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Code,
  Palette,
  Linkedin,
  Twitter,
  Github,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We love what we do and it shows in every project we deliver.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Your success is our success. We deliver measurable results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and embrace cutting-edge technologies.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable partnerships built on trust and transparency.'
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to transform digital experiences for businesses worldwide.'
    },
    {
      year: '2020',
      title: 'First Milestone',
      description: 'Reached 10 successful projects and established our core development team.'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded services to include UI/UX design and e-commerce solutions.'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Won "Best Digital Agency" award and served 25+ happy clients.'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on AI and emerging technologies.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving 50+ brands worldwide with 98% client satisfaction rate.'
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in digital transformation. Former lead developer at top tech companies.',
      avatar: '/team/alex.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@webcodency.com'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer with expertise in user experience and brand identity. Passionate about human-centered design.',
      avatar: '/team/sarah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@webcodency.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in React, Node.js, and cloud architectures. Open source contributor.',
      avatar: '/team/michael.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@webcodency.com'
      }
    },
    {
      name: 'Emily Johnson',
      role: 'Project Manager',
      bio: 'Agile expert ensuring seamless project delivery. Previously managed digital projects at Fortune 500 companies.',
      avatar: '/team/emily.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@webcodency.com'
      }
    },
    {
      name: 'David Kim',
      role: 'UI/UX Designer',
      bio: 'Creative problem-solver focused on creating intuitive and beautiful user interfaces that drive engagement.',
      avatar: '/team/david.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@webcodency.com'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Digital Strategist',
      bio: 'Data-driven strategist specializing in SEO, analytics, and conversion optimization for maximum ROI.',
      avatar: '/team/lisa.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@webcodency.com'
      }
    },
  ];

  const awards = [
    { name: 'Best Digital Agency 2024', organization: 'Tech Excellence Awards' },
    { name: 'Innovation in Web Design', organization: 'Design Masters' },
    { name: 'Top Development Team', organization: 'Industry Leaders' },
    { name: 'Client Satisfaction Excellence', organization: 'Business Awards' },
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '120+', label: 'Projects Delivered' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '5', label: 'Years Experience' },
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
              We&apos;re <span className="text-primary-600">Web Codency</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              A passionate team of designers, developers, and digital strategists 
              dedicated to transforming your digital vision into extraordinary reality.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Web Codency was born from a simple belief: that exceptional digital experiences 
                  should be accessible to businesses of all sizes. Founded in 2019 by a team of 
                  passionate developers and designers, we set out to bridge the gap between 
                  cutting-edge technology and meaningful business outcomes.
                </p>
                <p>
                  What started as a small team working out of a shared office space has grown 
                  into a full-service digital agency serving clients worldwide. Our journey has 
                  been marked by continuous learning, adaptation, and an unwavering commitment 
                  to excellence.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 50 brands transform their digital 
                  presence, achieving measurable growth and creating lasting relationships built 
                  on trust, transparency, and results.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-6 opacity-90">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting value in an ever-evolving 
                  digital landscape.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="opacity-90">
                  To be the leading digital agency that transforms how businesses connect 
                  with their audiences through exceptional web experiences and cutting-edge 
                  technology solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here&apos;s how we&apos;ve grown over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind Web Codency who bring your digital visions to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-primary-600 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We&apos;re proud to be recognized by industry leaders for our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {award.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {award.organization}
                </p>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let&apos;s bring your digital vision to life. Our team is ready to help you 
              achieve your goals with innovative solutions and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
                Get In Touch
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