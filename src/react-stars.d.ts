declare module "react-stars" {
    import React from "react";
  
    interface ReactStarsProps {
      count?: number; // Number of stars (default: 5)
      value?: number; // Current rating value
      onChange?: (newRating: number) => void; // Callback when rating changes
      size?: number; // Size of stars (default: 24)
      color1?: string; // Inactive star color
      color2?: string; // Active star color
      edit?: boolean; // Whether stars are editable (default: true)
      isHalf?: boolean; // Allow half stars (default: false)

    }
  
    const ReactStars: React.FC<ReactStarsProps>;
    export default ReactStars;
  }