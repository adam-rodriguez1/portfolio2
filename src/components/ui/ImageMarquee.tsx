export default function ImageMarquee({ images }: { images: string[] }) {
    return (
      <div
        className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border"
        style={{ backgroundColor: '#FFF4E0' }}
      >
        <div className="animate-marquee whitespace-nowrap flex items-center py-12">
          {images.map((image, index) => (
            <img
              key={`image-${index}`}
              src={image}
              alt={`marquee-image-${index}`}
              className="mx-4"
              style={{
                width: '72px',
                height: '82px',
              }}
            />
          ))}
        </div>
  
        {/* Deuxième boucle pour l'effet infini */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-12">
          {images.map((image, index) => (
            <img
              key={`image-duplicate-${index}`}
              src={image}
              alt={`marquee-image-duplicate-${index}`}
              className="mx-4"
              style={{
                width: '72px',
                height: '82px',
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  