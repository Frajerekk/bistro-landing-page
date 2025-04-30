import { useState } from 'react';
import interiorImg from '../assets/restaurant-interior.jpg';
import interiorImg2 from '../assets/bistro-interior-2.jpg';
import familyImg from '../assets/family-dining.jpg';

const images = [
  { src: interiorImg, alt: 'Main dining area' },
  { src: interiorImg2, alt: 'Cozy rustic bistro' },
  { src: familyImg, alt: 'Family enjoying meal' }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelectedImg(img.src)}
            className="zoomable"
          />
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Zoomed" />
        </div>
      )}
    </section>
  );
}