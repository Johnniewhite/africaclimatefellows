"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'

export default function Contact() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      titleKey: 'email',
      details: 'ggcc@dean.com.ng',
      action: 'mailto:ggcc@dean.com.ng',
    },
    {
      icon: Phone,
      titleKey: 'phone',
      details: '+2347088160467',
      action: 'tel:+2347088160467',
    },
    {
      icon: MapPin,
      titleKey: 'location',
      details: 'Global Goals Community Center, No. 1 Q Close, opposite obana, Gwagwalada Abuja FCT',
      action: '#map',
    },
    {
      icon: Clock,
      titleKey: 'office_hours',
      details: 'Monday - Friday, 9:00 AM - 5:00 PM WAT',
      action: null,
    },
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-muted py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {mounted ? t('get_in_touch') : 'Get in Touch'}
            </h1>
            <p className="text-xl text-foreground/80">
              {mounted ? t('contact_description') : 'Have questions about the fellowship? We\'re here to help and would love to hear from you.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg"
                >
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{mounted ? t(item.titleKey) : item.titleKey}</h3>
                  {item.action ? (
                    <a
                      href={item.action}
                      className="text-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-foreground/80">{item.details}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{mounted ? t('send_us_message') : 'Send Us a Message'}</h2>
              <p className="text-foreground/80">
                {mounted ? t('contact_form_description') : 'Fill out the form below and we\'ll get back to you as soon as possible.'}
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {mounted ? t('first_name') : 'First Name'}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {mounted ? t('last_name') : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {mounted ? t('email_address') : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {mounted ? t('subject') : 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {mounted ? t('message') : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-200"
                >
                  {mounted ? t('send_message') : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg overflow-hidden">
              {/* Add an interactive map here */}
              <div className="w-full h-[400px] bg-accent/20 flex items-center justify-center">
                <p className="text-lg text-foreground/80">{mounted ? t('map_coming_soon') : 'Interactive Map Coming Soon'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
