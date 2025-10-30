/*
The volunteer application page with multi-step form.
Users can apply to become volunteers and help with our mission.
*/

import { VolunteerForm } from '@components/forms/VolunteerForm'
import { motion } from 'framer-motion'
import { Heart, Users, Calendar, Award } from 'lucide-react'
import { PageTitle } from '@components/common/PageTitle'

export function VolunteerPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="bg-white">
      <PageTitle title="Volunteer" />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Become a Volunteer
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Join our team of dedicated volunteers making a real difference in the lives of
              families in need. Your time and skills can help us feed more children every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Volunteer With Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: 'Make an Impact',
                description: 'Directly help families and children in need',
              },
              {
                icon: Users,
                title: 'Join a Community',
                description: 'Be part of a caring, dedicated team',
              },
              {
                icon: Calendar,
                title: 'Flexible Schedule',
                description: 'Volunteer when it works for you',
              },
              {
                icon: Award,
                title: 'Gain Experience',
                description: 'Develop new skills and meet amazing people',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Apply to Volunteer
            </h2>
            <VolunteerForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}