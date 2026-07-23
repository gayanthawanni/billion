import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    title: "Call Us",
    value: "+94 11 234 5678",
    href: "tel:+94112345678",
    icon: Phone,
  },
  {
    title: "Email Us",
    value: "hello@jobs360.lk",
    href: "mailto:hello@jobs360.lk",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value: "Colombo, Sri Lanka",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon-Fri, 9:00 AM - 6:00 PM",
    icon: Clock3,
  },
];

export default function GetInTouch() {
  return (
    <section className="h-full rounded-[18px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.03)] sm:p-8">
      <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]">Get in Touch</h2>
      <p className="mt-3 max-w-[92%] text-[15px] font-medium leading-7 text-slate-500">
        Our friendly team is ready to assist you with any questions, feedback, or support you need.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={30} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-[16px] font-semibold text-slate-500">{item.value}</p>
              </div>
            </>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              className="flex min-h-[108px] items-center gap-6 rounded-[14px] border border-slate-200 bg-white px-5 text-left shadow-[0_6px_18px_rgba(15,23,42,0.02)] transition hover:border-blue-200"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.title}
              className="flex min-h-[108px] items-center gap-6 rounded-[14px] border border-slate-200 bg-white px-5 text-left shadow-[0_6px_18px_rgba(15,23,42,0.02)]"
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
