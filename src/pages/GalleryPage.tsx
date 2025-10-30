/*
The gallery page showcasing photos from our charity work and community impact.
Features a responsive image grid with lightbox functionality.
*/

import { ImageGrid } from '@components/common/ImageGrid'
import { motion } from 'framer-motion'
import { PageTitle } from '@components/common/PageTitle'

// Import all gallery images
import mainShot from '@/assets/images/Main_Shot.jpg'
import outside from '@/assets/images/Outside.jpg'
import outside2 from '@/assets/images/Outside_2.jpg'
import tableFood from '@/assets/images/Table_food.jpg'
import volunteers1 from '@/assets/images/Volunteers_1.jpg'

// Dishing images
import dishing from '@/assets/images/Dishing.jpg'
import dishing2 from '@/assets/images/Dishing_2.jpg'
import dishing4 from '@/assets/images/Dishing_4.jpg'
import dishingFood1 from '@/assets/images/Dishing_Food_1.jpg'
import dishingFood2 from '@/assets/images/Dishing_Food_2.jpg'
import dishingFood3 from '@/assets/images/Dishing_Food_3.jpg'
import dishingFood4 from '@/assets/images/Dishing_Food_4.jpg'
import dishingFood5 from '@/assets/images/Dishing_Food_5.jpg'

// Eating images
import eating2 from '@/assets/images/Eating_2.jpg'
import eating3 from '@/assets/images/Eating_3.jpg'
import eating4 from '@/assets/images/Eating_4.jpg'
import eating5 from '@/assets/images/Eating_5.jpg'
import eating from '@/assets/images/Eating.jpg'

// Food images
import food from '@/assets/images/Food.jpg'
import food2 from '@/assets/images/Food_2.jpg'
import food3 from '@/assets/images/Food_3.jpg'
import food4 from '@/assets/images/Food_4.jpg'
import foodForKid1 from '@/assets/images/Food_for_kid_1.jpg'
import foodForKid2 from '@/assets/images/Food_for_kid_2.jpg'

// Kid images
import kidWithFood1 from '@/assets/images/Kid_with_food_1.jpg'
import kidWithFood2 from '@/assets/images/Kid_with_food_2.jpg'
import kidWithFood3 from '@/assets/images/Kid_with_food_3.jpg'
import kidWithTeddy1 from '@/assets/images/Kid_with_teddy.jpg'
import kidWithTeddy2 from '@/assets/images/Kid_with_teddy_2.jpg'

// Kids group images
import kids1 from '@/assets/images/Kids_1.jpg'
import kids2 from '@/assets/images/Kids_2.jpg'
import kids3 from '@/assets/images/Kids_3.jpg'
import kids4 from '@/assets/images/Kids_4.jpg'
import kids5 from '@/assets/images/Kids_5.jpg'
import kids6 from '@/assets/images/Kids_6.jpg'
import kids7 from '@/assets/images/Kids_7.jpg'
import kids8 from '@/assets/images/Kids_8.jpg'
import kids9 from '@/assets/images/Kids_9.jpg'
import kids10 from '@/assets/images/Kids_10.jpg'
import kids11 from '@/assets/images/Kids_11.jpg'
import kids12 from '@/assets/images/Kids_12.jpg'
import kids13 from '@/assets/images/Kids_13.jpg'
import kids14 from '@/assets/images/Kids_14.jpg'
import kids15 from '@/assets/images/Kids_15.jpg'

const galleryImages = [
  { src: mainShot, alt: 'Children at feeding station' },
  { src: dishingFood1, alt: 'Volunteers serving meals' },
  { src: kids1, alt: 'Happy children' },
  { src: eating2, alt: 'Child enjoying a meal' },
  { src: outside, alt: 'Community gathering' },
  { src: food, alt: 'Nutritious meals prepared' },
  { src: kidWithFood1, alt: 'Child receiving food' },
  { src: volunteers1, alt: 'Dedicated volunteers' },
  { src: kids2, alt: 'Children waiting for meals' },
  { src: dishingFood2, alt: 'Food distribution' },
  { src: tableFood, alt: 'Meals ready to serve' },
  { src: eating3, alt: 'Mealtime joy' },
  { src: kids3, alt: 'Community children' },
  { src: foodForKid1, alt: 'Healthy portions' },
  { src: outside2, alt: 'Outdoor feeding program' },
  { src: kidWithFood2, alt: 'Grateful recipient' },
  { src: dishing, alt: 'Serving with love' },
  { src: kids4, alt: 'Growing community' },
  { src: eating4, alt: 'Satisfied smiles' },
  { src: dishingFood3, alt: 'Daily meal service' },
  { src: food2, alt: 'Fresh prepared food' },
  { src: kids5, alt: 'Future leaders' },
  { src: kidWithTeddy1, alt: 'Child with comfort toy' },
  { src: eating5, alt: 'Eating together' },
  { src: kids6, alt: 'Playful moments' },
  { src: dishingFood4, alt: 'Volunteer dedication' },
  { src: food3, alt: 'Balanced nutrition' },
  { src: kids7, alt: 'Children gathering' },
  { src: kidWithFood3, alt: 'Receiving with gratitude' },
  { src: eating, alt: 'Community meal' },
  { src: kids8, alt: 'Hope and joy' },
  { src: dishing2, alt: 'Food preparation' },
  { src: food4, alt: 'Quality meals' },
  { src: kids9, alt: 'Children playing' },
  { src: dishingFood5, alt: 'Serving the community' },
  { src: foodForKid2, alt: 'Kid-friendly portions' },
  { src: kids10, alt: 'Bright futures' },
  { src: kidWithTeddy2, alt: 'Comfort and care' },
  { src: kids11, alt: 'Growing strong' },
  { src: dishing4, alt: 'Meal distribution' },
  { src: kids12, alt: 'Community impact' },
  { src: kids13, alt: 'Making memories' },
  { src: kids14, alt: 'Together in community' },
  { src: kids15, alt: 'Building tomorrow' },
]

export function GalleryPage() {
  return (
    <div className="bg-white">
      <PageTitle title="Gallery" />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Gallery</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Witness the impact of our work through these moments captured at Mosadie Gives Back.
              Every image tells a story of hope, community, and the power of coming together to feed
              those in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <ImageGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Every photo represents a life touched. Join us in creating more moments like these.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="inline-block bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-smooth rounded-md">
                Volunteer With Us
              </a>
              <a href="/donations" className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-smooth rounded-md">
                Support Our Cause
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}