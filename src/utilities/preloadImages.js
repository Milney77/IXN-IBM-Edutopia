// Utility function to load all the images first
// Good practice for working with canvas objects, avoids issues where game tries to render images before they have been loaded.
// Returns a promise, to use this to determine when to go to the next step.
export const preloadImages = (sources) => {
    return new Promise((resolve, reject) => {

      const images = {};
      let loadedImages = 0;
      const numImages = sources.length;

      
  
      sources.forEach((source) => {
        const img = new Image();
        img.src = source.url;

        //console.log('Image Numb:', loadedImages, 'img:', img.src)
        
        img.onload = () => {
          loadedImages++;
          images[source.name] = img;
          if (loadedImages === numImages) {
            resolve(images);
          }
        };
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${source.url}`));
        };
      });
    });
  };