import BreadCrumb from "@/components/ui/BreadCrumb";

export default function ContactHero() {
  return (
    <section
      className="min-h-[260px] bg-[#eef5ff] bg-center bg-no-repeat sm:min-h-[285px]"
      style={{
        backgroundImage: "url('/contact/1.webp')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto flex min-h-[260px] max-w-[88%] items-center sm:min-h-[285px]">
        <div className="max-w-[46%] min-w-[280px] py-10">
          <BreadCrumb />
          <h1 className="mt-5 text-[38px] font-extrabold leading-tight text-slate-950 sm:text-[52px]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-[560px] text-[15px] font-medium leading-7 text-slate-600 sm:text-lg">
            We&apos;re here to help job seekers and employers connect with confidence. Reach out to our
            team anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
