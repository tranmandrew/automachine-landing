'use client';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Diagonal Triangle Header */}
      <div
        className="bg-black h-20 w-full relative"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo/Brand Area - Left Side (in the diagonal cutout) */}
          <div className="flex items-center">
            {/* Add your logo/brand here */}
          </div>

          {/* Navigation - Center/Right */}
          <nav className="hidden md:flex items-center space-x-8 mr-40">
            {/* Add your navigation links here */}
          </nav>

          {/* CTA/Actions - Right Side */}
          <div className="hidden md:flex items-center space-x-4 mr-40">
            {/* Add your CTA buttons here */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-blue-electric transition-colors mr-40">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}