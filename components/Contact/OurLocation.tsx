import { Mail, MapPin, Phone, Globe2 } from "lucide-react";

const locationLinks = [
  {
    label: "+94 11 234 5678",
    href: "tel:+94112345678",
    icon: Phone,
  },
  {
    label: "hello@jobs360.lk",
    href: "mailto:hello@jobs360.lk",
    icon: Mail,
  },
  {
    label: "www.jobs360.lk",
    href: "https://www.jobs360.lk",
    icon: Globe2,
    external: true,
  },
];

export default function OurLocation() {
  return (
    <section className="mx-auto max-w-[88%] rounded-[18px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.03)] sm:p-8">
      <h2 className="text-[28px] font-extrabold text-slate-950">Our Location</h2>
      <p className="mt-2 text-[15px] font-medium text-slate-500">
        Visit our office or get in touch with us during working hours.
      </p>

      <div className="mt-6 grid overflow-hidden rounded-[14px] border border-slate-200 lg:grid-cols-[32%_68%]">
        <div className="flex flex-col justify-center gap-7 bg-white p-6">
          <div className="flex gap-5">
            <MapPin size={30} className="mt-1 shrink-0 text-blue-600" strokeWidth={2.6} />
            <div>
              <h3 className="text-[17px] font-extrabold text-slate-950">Jobs360.lk (Pvt) Ltd</h3>
              <p className="mt-2 text-[14px] font-semibold leading-6 text-slate-500">
                123 Union Place, Colombo 02,
                <br />
                Western Province, Sri Lanka.
              </p>
            </div>
          </div>

          {locationLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="flex items-center gap-5 text-[15px] font-semibold text-slate-500 transition hover:text-blue-600"
              >
                <Icon size={28} className="shrink-0 text-blue-600" strokeWidth={2.5} />
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="min-h-[260px] overflow-hidden bg-slate-100 lg:min-h-[315px]">
          <iframe
            title="Jobs360.lk office location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7529.916382147216!2d79.977409!3d6.897503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253870d31d00f%3A0xafa8a1c99febf4bf!2sCloudeDesign(Pvt)Ltd!5e1!3m2!1sen!2slk!4v1781605523843!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[260px] w-full lg:min-h-[315px]"
          />
        </div>
      </div>
    </section>
  );
}
