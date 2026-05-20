import React, { useState, useRef, useEffect } from 'react';
import './HeroBannerVideo.css';

const HeroBannerVideo = ({ heroBanner, onError }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Handle video load
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    console.error('Video failed to load');
    onError && onError();
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
      setIsPlaying(true);
    }
  }, []);

  return (
    <section className="hero-video">
      {/* Video Background */}
      <div className="video-container">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster={heroBanner.thumbnailUrl || ''}
        >
          <source src={heroBanner.mediaUrl} type="video/mp4" />
          <source src={heroBanner.mediaUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="video-loading">
            <div className="video-spinner">🍽️</div>
          </div>
        )}

        {/* Video Overlay */}
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>OnePlus 13 Pro</h1>
          <p>Designed for creators and power users who want premium speed, camera excellence, and sleek design.</p>
        </div>

        {/* Quick Links */}
        <div className="hero-links">
          <div className="quick-links">
            <a href="/menu" className="quick-link">
              <i className="fas fa-mobile-alt"></i> Explore Features
            </a>
            <a href="/offers" className="quick-link">
              <i className="fas fa-bolt"></i> Pre-order Now
            </a>
            <a href="/profile" className="quick-link">
              <i className="fas fa-star"></i> Product Highlights
            </a>
            <a href="/onlyveg?type=non-veg" className="quick-link">
              <i className="fas fa-headphones"></i> Explore Accessories
            </a>
          </div>
        </div>

        {/* Video Controls 
        <div className="video-controls">
          <button 
            className="video-control-btn play-pause-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          
          <button 
            className="video-control-btn mute-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
          </button>
        </div>  */}
      </div>

      {/* Banner Info */}
      {heroBanner.title && (
        <div className="banner-info">
          <h3>{heroBanner.title}</h3>
          {heroBanner.description && <p>{heroBanner.description}</p>}
        </div>
      )}
    </section>
  );
};

export default HeroBannerVideo;
