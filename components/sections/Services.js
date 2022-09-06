import Image from "next/image";
import webImage from "assets/icons8-web-100.png";
import mobileImage from "assets/icons8-touchscreen-100.png";
import uiImage from "assets/icons8-paint-palette-100.png";
import mlImage from "assets/icons8-artificial-intelligence-100.png";

const SERVICES = [
  {
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore, commodi molestias libero ipsam quos quasi officia eius quo ullam?",
    icon: mlImage,
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore, commodi molestias libero ipsam quos quasi officia eius quo ullam?",
    icon: webImage,
  },
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore, commodi molestias libero ipsam quos quasi officia eius quo ullam?",
    icon: mobileImage,
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore, commodi molestias libero ipsam quos quasi officia eius quo ullam?",
    icon: uiImage,
  },
];

function Services() {
  return (
    <div
      id="services"
      className="mx-auto max-w-7xl bg-white px-6 py-10 md:px-8"
    >
      <h2 className="mb-8 text-2xl text-slate-700">Our Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {SERVICES.map(service => (
          <div key={service.title}>
            <div className="mb-1 flex w-full items-center">
              <div className="h-[32px] min-w-[32px] drop-shadow-xl">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <h3 className="ml-1 text-lg font-semibold text-slate-700">
                {service.title}
              </h3>
            </div>

            <p className="pl-4 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
