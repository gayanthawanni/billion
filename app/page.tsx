import Hero from "@/components/Home/hero";
import HotJobs from "@/components/Home/HotJobs";
import JobAlert from "@/components/Home/JobAlert";
import { SidebarCategories } from "@/components/Home/SidebarCategories";
import { MobileCategoryDropdown } from "@/components/Home/MobileCategoryDropdown";
import { Browse_jobs_categories } from "@/components/Home/Browse_jobs_categories";
import { Top_companies } from "@/components/Home/Top_companies";
import { How_it_works } from "@/components/Home/How_it_works";
import { Career_resources } from "@/components/Home/career_resources";
import { CTA_banner } from "@/components/Home/CTA_banner";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="home-main-align">
        <div className="main-grid">

          {/* ── LEFT SIDEBAR — desktop only ── */}
          <div className="desktop-sidebar" style={{ alignSelf: "stretch" }}>
            <SidebarCategories />
          </div>

          {/* ── RIGHT CONTENT ── */}
          <div>
            <div className="lg:hidden">
              <MobileCategoryDropdown />
            </div>
            <HotJobs />
            <JobAlert />
            <Browse_jobs_categories />      
            <Top_companies />
          </div>

        </div>
      </div>

      <How_it_works />
      <Career_resources />
      <CTA_banner />
    </>
  );
}