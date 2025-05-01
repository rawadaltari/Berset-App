export function HeroSection({ title, imageUrl, imageAlt }) {
    return (
      <>
        <h1 className="text-4xl font-bold text-pink-900 mb-6 text-center">
          {title}
        </h1>
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </>
    );
  }