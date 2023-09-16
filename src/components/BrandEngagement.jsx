// import "./brandengagement.css";
const BrandEngagement = () => {
  return (
    <>
      <div className="brand-engagement">
        {/*  TODO: Change heading*/}
        <div className="brand-engagement__text">
          <h3 className="text-5xl">
            Bringing you the <span style={{ color: "orange" }}>best</span> audio
            gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio
            equipment.p
          </p>
        </div>
        <img
          className="brand-engagement__image"
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default BrandEngagement;
