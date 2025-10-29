/*
The main landing page of the application.
Features a hero carousel, mission statement, and calls to action.
*/

import { Link } from 'react-router-dom'
import { Carousel } from '@components/common/Carousel'
import { Heart, Users, Target } from 'lucide-react'

// Import carousel images
import mainShot from '@/assets/images/Main_Shot.jpg'
import outside from '@/assets/images/Outside.jpg'
import outside2 from '@/assets/images/Outside_2.jpg'
import tableFood from '@/assets/images/Table_food.jpg'

const carouselImages = [
  {
    src: mainShot,
    alt: 'Children receiving meals',
  },
  {
    src: outside,
    alt: 'Community outreach',
  },
  {
    src: outside2,
    alt: 'Volunteers at work',
  },
  {
    src: tableFood,
    alt: 'Prepared meals',
  },
]

export function HomePage() {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel images={carouselImages} />

      {/* Mission Statement */}
      <section className="bg-black text-white py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
            Feeding from the heart to the Soul
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg md:text-xl text-gray-300">
              At Mosadie Gives Back (MGB) our goal is to provide healthy and nutritious meals to
              families in the Tafelsig area that are unable to feed their children on a regular
              basis.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              What started in 2017 as providing meals to a few hundred children has grown into
              serving 40,000 meals per month.
            </p>
            <p className="text-2xl font-bold text-white mt-8">
              If we do not feed these children they do not eat
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide nutritious meals and support to families in need, ensuring no child goes
                hungry.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Our Community</h3>
              <p className="text-gray-600">
                Building a strong network of volunteers, donors, and supporters committed to making
                a difference.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Our Impact</h3>
              <p className="text-gray-600">
                Serving 40,000 meals per month and growing, touching lives one meal at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to feed families in need. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donations"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-smooth"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="inline-block bg-white text-black border-2 border-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-smooth"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}