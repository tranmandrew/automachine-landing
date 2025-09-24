'use client';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-40">
      {/* Flipped Diagonal Triangle Footer */}
      <div
        className="bg-black h-20 w-full relative"
        style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Left Content Area - positioned higher to avoid diagonal cut */}
          <div className="flex items-center mb-4">
            {/* Add your footer content here */}
          </div>

          {/* Right Content Area - full height available */}
          <div className="flex items-center space-x-4">
            {/* Add your footer links/content here */}
          </div>
        </div>
      </div>
    </footer>
  );
}