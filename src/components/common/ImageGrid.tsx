/*
A responsive image grid component with fade-in animations on scroll.
Displays images in a masonry-style grid with hover effects.
*/

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface ImageGridProps {
  images: Array<{
    src: string
    alt: string
    title?: string
  }>
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-200 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={e => {
              e.stopPropagation()
              setSelectedImage(prev => (prev! > 0 ? prev! - 1 : images.length - 1))
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors text-6xl font-thin"
          >
            ‹
          </button>

          <motion.img
            key={selectedImage}
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <button
            onClick={e => {
              e.stopPropagation()
              setSelectedImage(prev => (prev! < images.length - 1 ? prev! + 1 : 0))
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors text-6xl font-thin"
          >
            ›
          </button>
        </motion.div>
      )}
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export type { ImageGridProps }