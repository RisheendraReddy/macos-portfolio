const CinematicWallpaper = () => {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      
      {/* Base static wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat wallpaper-ambient-drift"
        style={{
          backgroundImage: 'url(/oxana-wallpaper.jpg)', // Using Oxana photo as main wallpaper
          // Slight zoom-in to provide margin for horizontal drift without exposing edges
          backgroundSize: '110%',
        }}
      />
      
      {/* Dark overlay for moody atmosphere - reduced for better visibility */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />

    </div>
  )
}

export default CinematicWallpaper

