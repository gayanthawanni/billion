import Link from "next/link";
import Image from "next/image";
import { Search, BriefcaseBusiness } from "lucide-react";

export const AboutCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        {/* 3D Illustration Graphic (Visible on PC only) */}
        <div className="cta-image-container">
          <Image
            src="/cta_banner/3.png"
            alt="Career growth opportunities"
            width={200}
            height={140}
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Left Content Column */}
        <div className="cta-left" style={{ flex: 1, minWidth: 0 }}>
          <h2>Ready to Take The Next Step?</h2>
          <p>
            Whether you&apos;re searching for your dream job or looking for
            exceptional talent, Jobs360.lk provides the tools and opportunities
            to help you succeed.
          </p>
        </div>

        {/* Action Call Buttons */}
        <div className="cta-buttons">
          <Link href="/jobs" className="cta-btn-primary"><Search size={16} />Search Jobs</Link>
          <button className="cta-btn-outline"><BriefcaseBusiness size={16} />Post a Job</button>
        </div>
      </div>
    </section>
  );
};