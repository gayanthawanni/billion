import Image from "next/image";

export const CTA_banner = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">

        {/* 3D Illustration Graphic (Visible on PC only) */}
        <div className="cta-image-container">
          <Image src="/cta_banner/3.png" alt="Job Opportunities" width={200} height={140} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </div>

          {/* Left Content Column */}
          <div className="cta-left" style={{ flex: 1, minWidth: 0 }}>
            <h2>Looking to hire top talent?</h2>
            <p>Post your job and connect with thousands of qualified candidates.</p>
          </div>

          {/* Action Call Buttons */}
          <div className="cta-buttons">
            <button className="cta-btn-primary">Post a Job Now</button>
            <button className="cta-btn-outline">Learn More</button>
          </div>

        </div>
      </section>
  );
};