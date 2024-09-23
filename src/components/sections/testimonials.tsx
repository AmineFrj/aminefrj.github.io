"use client";

import { useRef } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Container from '@/components/layout/container';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importation des icônes de flèches

const TestimonialsSection = () => {
  const scrollRef = useRef(null); // Crée un ref pour le conteneur des témoignages

  // Fonction pour faire défiler vers la gauche
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  // Fonction pour faire défiler vers la droite
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <Container id="testimonials" className="bg-gray-50 py-12 relative">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="self-center">
          <Tag label="Talks" />
        </div>
      </div>

      {/* Flèche gauche */}
      <button
        onClick={scrollLeft}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg"
        aria-label="Scroll Left"
      >
        <FaArrowLeft />
      </button>

      {/* Conteneur défilant des témoignages */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 py-8 scrollbar-hide"
      >
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div>

      {/* Flèche droite */}
      <button
        onClick={scrollRight}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg"
        aria-label="Scroll Right"
      >
        <FaArrowRight />
      </button>
    </Container>
  );
};

export default TestimonialsSection;
