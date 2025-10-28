/*
The Our Story page tells the charity's history, mission, and introduces the team.
Features animated sections, team profiles, and engaging visuals.
*/

import { AnimatedHero } from '@/components/ui/animated-hero'
import { motion } from 'framer-motion'

// Team member images
import faranaazImage from '@/assets/images/Faranaaz_dramat.png'
import kimImage from '@/assets/images/Kim_Prissman.png'
import shanaazImage from '@/assets/images/Shanaaz_allie.png'

// Story images
import mainShotImage from '@/assets/images/Main_Shot.jpg'
import foodImage from '@/assets/images/Food.jpg'
import dishingFoodImage from '@/assets/images/Dishing_Food_1.jpg'

const teamMembers = [
  {
    name: 'Faranaaz Dramat',
    role: 'Founder & Director',
    image: faranaazImage,
    bio: 'Passionate about making a difference in the Tafelsig community since 2017.',
  },
  {
    name: 'Kim Prissman',
    role: 'Operations Manager',
    image: kimImage,
    bio: 'Dedicated to ensuring every meal reaches those who need it most.',
  },
  {
    name: 'Shanaaz Allie',
    role: 'Community Coordinator',
    image: shanaazImage,
    bio: 'Building strong relationships with volunteers and beneficiaries.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function OurStoryPage() {
  return (
    <div className="bg-white">
      {/* Animated Hero */}
      <AnimatedHero
        titles={['compassionate', 'dedicated', 'impactful', 'life-changing', 'transformative']}
        mainText="Our mission is"
        description="At Mosadie Gives Back, we believe that no child should go hungry. Since 2017, we've been providing nutritious meals to families in the Tafelsig area who cannot afford to feed their children regularly."
        primaryButton={{ text: 'Get Involved', href: '/volunteer' }}
        secondaryButton={{ text: 'Donate Now', href: '/donations' }}
      />

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mosadie Gives Back (MGB) was born from a simple yet powerful vision: to ensure that
                  no child in our community goes to bed hungry. What started in 2017 as a small
                  initiative to feed a few hundred children has blossomed into a movement that serves
                  over 40,000 meals per month.
                </p>
                <p>
                  Our founder, Faranaaz Dramat, witnessed firsthand the devastating impact of hunger
                  on children in the Tafelsig area. She knew that education, growth, and development
                  were impossible on an empty stomach. This realization sparked the creation of MGB.
                </p>
                <p>
                  Today, we work tirelessly to provide healthy, nutritious meals to families who
                  struggle to put food on the table. Our mission extends beyond just feeding children
                  – we are building a community where every child has the opportunity to thrive.
                </p>
              </div>
            </div>
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={mainShotImage}
                alt="Children at Mosadie Gives Back"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={foodImage} alt="Prepared meals" className="w-full h-full object-cover" />
            </motion.div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">What We Do</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Every day, our dedicated team and volunteers work together to prepare and distribute
                  nutritious meals to families in need. We focus on providing balanced, healthy food
                  that supports childrens growth and development.
                </p>
                <p>
                  Our feeding program operates throughout the week, ensuring consistency and
                  reliability for the families who depend on us. We believe that proper nutrition is a
                  fundamental right, not a privilege.
                </p>
                <p>
                  Beyond meals, we create a sense of community and belonging. Our feeding stations
                  serve as gathering places where families connect, children play, and hope is
                  restored.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Commitment</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are committed to transparency, dignity, and respect in everything we do. Every
                  child who receives a meal from us is treated with love and care, ensuring they feel
                  valued and supported.
                </p>
                <p>
                  Our motto, If we do not feed these children, they do not eat drives us every single
                  day. It is not just about providing food its about creating opportunities for
                  children to learn, grow, and dream.
                </p>
                <p>
                  With the support of our donors, volunteers, and community partners, we continue to
                  expand our reach and deepen our impact. Together, were building a future where no
                  child goes hungry.
                </p>
              </div>
            </div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={dishingFoodImage}
                alt="Volunteers serving food"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated individuals who make our mission possible every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg"
                  whileHover={{ scale: 1.05, borderColor: '#000' }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether through volunteering, donating, or spreading the word, every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/volunteer"
                className="inline-block bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-smooth rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Volunteer
              </motion.a>
              <motion.a
                href="/donations"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-smooth rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make a Donation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}