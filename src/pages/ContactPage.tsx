/*
The contact page where visitors can send messages to the charity.
Features a contact form with validation and contact information display.
*/

import { ContactForm } from '@components/forms/ContactForm'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

// Import contact image
import kidsImage from '@/assets/images/Kids_5.jpg'

export function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

return (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Have a question or want to get involved? We would love to hear from you. Send us a
            message and we will respond as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Form & Info Section */}
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </motion.div>

          {/* Image & Contact Info */}
          <motion.div
            className="space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Image */}
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img src={kidsImage} alt="Children at Mosadie Gives Back" className="w-full h-full object-cover" />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:0782007604" className="text-gray-600 hover:text-black transition-smooth">
                      078 200 7604
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:mosadiegivesback@gmail.com" className="text-gray-600 hover:text-black transition-smooth">
                      mosadiegivesback@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Tafelsig, Cape Town, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Operating Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Map or Additional Info Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Visit Us</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our feeding stations are located in the Tafelsig area. If you would like to visit or
              volunteer in person, please contact us to arrange a time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}