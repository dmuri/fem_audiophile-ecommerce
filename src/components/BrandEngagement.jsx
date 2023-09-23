const BrandEngagement = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-items-center md:items-start md:flex-row md:order-2  mb-24 ">
      <div className="flex-1">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            className="mx-auto rounded-lg overflow-hidden w-full md:max-w-[31rem] "
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Responsive content"
          />
        </picture>
      </div>
      <div className="flex-col gap-5 md:gap-8 flex-1 md:order-first  flex  md:self-center text-center md:text-left">
        <h3 className="text-28 sm:text-[44px] sm:font-bolder sm:tracking-wider sm:leading-10 md:max-w-[17ch] uppercase">
          Bringing you the <span className="text-custom-orange-d8">best</span>{" "}
          audio gear
        </h3>
        <p className="opacity-50 max-w-[65ch] md:max-w-[50ch]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BrandEngagement;
