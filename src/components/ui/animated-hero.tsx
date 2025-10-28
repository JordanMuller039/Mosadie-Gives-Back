import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface HeroProps {
  titles?: string[]
  mainText?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

function AnimatedHero({
  titles = ['compassionate', 'dedicated', 'impactful', 'meaningful', 'transformative'],
  mainText = 'This is something',
  description = 'Our mission is to make a difference in the lives of those we serve.',
  primaryButton = { text: 'Get Involved', href: '/volunteer' },
  secondaryButton = { text: 'Learn More', href: '/our-story' },
}: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0)
  const titlesMemo = useMemo(() => titles, [titles])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titlesMemo.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titlesMemo])

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="flex gap-8 py-12 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
           <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-heading px-4">
              <span className="text-gray-900">{mainText}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-16 sm:h-20 md:h-24">
                &nbsp;
                {titlesMemo.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-black"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-3xl text-center px-4">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4">
            <Link to={primaryButton.href} className="w-full sm:w-auto">
                <Button size="lg" className="gap-4 w-full">
                {primaryButton.text} <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to={secondaryButton.href} className="w-full sm:w-auto">
                <Button size="lg" className="gap-4 w-full" variant="outline">
                {secondaryButton.text} <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AnimatedHero }