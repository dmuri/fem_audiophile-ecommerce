const BrandEngagement = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-items-center gap-10 md:order-2 md:flex-row  md:items-start ">
      <div className="flex-1">
        <picture>
          <source
            media="(max-width: 375px)"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            className="mx-auto w-full overflow-hidden rounded-lg md:max-w-[31rem] "
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Responsive content"
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col gap-5 text-center  md:order-first  md:gap-8 md:self-center md:text-left">
        <h2 className="text-28 uppercase sm:text-[44px] sm:font-bolder sm:leading-10 sm:tracking-wider md:max-w-[17ch]">
          Bringing you the <span className="text-custom-orange-d8">best</span>{" "}
          audio gear
        </h2>
        <p className="max-w-[65ch] opacity-50 md:max-w-[50ch]">
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
