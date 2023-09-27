const ProductDecorativeGallery = ({ slug }) => {
  const startUrl = `/assets/product-${slug}/`;
  return (
    <>
      <div className="my-32 flex flex-col gap-2 overflow-hidden sm:flex-row sm:gap-4 md:gap-8">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
          <div className="">
            <picture className="">
              <source
                media="(max-width: 768px)"
                srcSet={`${startUrl}mobile/image-gallery-1.jpg`}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={`${startUrl}tablet/image-gallery-1.jpg`}
              />
              <img
                className=""
                src={`${startUrl}desktop/image-gallery-1.jpg`}
                alt="decorative pictures"
              />
            </picture>
          </div>
          <div className="">
            <picture className="">
              <source
                media="(max-width: 768px)"
                srcSet={`${startUrl}mobile/image-gallery-2.jpg`}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={`${startUrl}tablet/image-gallery-2.jpg`}
              />
              <img
                className=""
                alt="decorative pictures"
                src={`${startUrl}desktop/image-gallery-2.jpg`}
              />
            </picture>
          </div>
        </div>

        <div className="overflow-hidden">
          <picture className="-translate-y-6">
            <source
              media="(max-width: 768px)"
              srcSet={`${startUrl}mobile/image-gallery-3.jpg`}
            />
            <source
              media="(max-width: 1024px)"
              srcSet={`${startUrl}tablet/image-gallery-3.jpg`}
            />
            <img
              alt="decorative pictures"
              className=""
              src={`${startUrl}desktop/image-gallery-3.jpg`}
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default ProductDecorativeGallery;
