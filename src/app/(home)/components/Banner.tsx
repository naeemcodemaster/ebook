import React from 'react';
import BannerImage from '../../../../public/banner.jpg'
import Image from 'next/image';

function Banner() {
  return (
    <div className="container py-2">
      <Image
        src={BannerImage} // Image source
        alt="Banner displaying the main promotion or event" // Meaningful alt text for accessibility
        width={0} // Set the width to optimize image rendering
        height={0} // Set the height to maintain aspect ratio
        placeholder="blur" // Optionally add a blur placeholder effect
        priority // Prioritize loading the image
        quality={75} // Set image quality (default is 75)
        className="md:h-80 w-full rounded-md" // Optional: Add custom styles, like rounded corners
        style={{objectFit:'cover'}}
        sizes='100vw'
      />
    </div>
  );
}

export default Banner;
