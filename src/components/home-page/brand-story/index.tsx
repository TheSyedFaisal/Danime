
import Image from "next/image";

const Brand = () => {
  return (
    <section className="relative bg-foreground overflow-hidden container">
      {/* FLEX WRAPPER */}
      <div
        className="
          relative flex
          pl-4 md:pl-14 pt-10 pb-10 small-padding lg:pb-18 


        "
      >
        {/* LEFT TEXT */}
        <div className="text-white max-w-[clamp(240px,44vw,500px)] custom-width sm:max-w-[clamp(400px,63vw,1200px)] 2xl:max-w-[clamp(400px,63vw,800px)]">
          <h3 className="text-xs sm:text-3xl md:text-5xl page-font mb-2 md:mb-6">
            Brand Story
          </h3>

          <p className="mb-1.5 md:mb-3 text-[6px] sm:text-xs md:text-base lg:text-xl ">
            Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit
            laoreet. Dictum eget est hac est. Facilisi odio neque at dis
            pulvinar lacus morbi. Volutpat eu elit est commodo at viverra
            consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis
            id arcu. Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu
            blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis
            pulvinar lacus morbi. Volutpat eu elit est commodo at viverra
            consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis
            id arcu. Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu
            blandit laoreet. Dictum eget est hac est. Facilisi odio neque at dis
            pulvinar lacus morbi. Volutpat eu elit est commodo at viverra
            consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis
            id arcu.
          </p>

          <p className="text-[6px] sm:text-xs md:text-base lg:text-xl max-w-[clamp(200px,26vw,620px)] custom sm:max-w-[clamp(280px,58vw,820px)] 2xl:max-w-[clamp(280px,58vw,620px)]">
            Lorem ipsum dolor sit amet consectetur. Tempor ut quam arcu blandit
            laoreet. Dictum eget est hac est. Facilisi odio neque at dis
            pulvinar lacus morbi. Volutpat eu elit est commodo at viverra
            consequat laoreet. Nascetur et sit amet enim vestibulum aliquam quis
            id arcu. Lorem ipsum dolor sit amet consectetur..
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          absolute right-0 top-26 sm:top-40 md:top-55 lg:top-40
          w-[170px] h-[160px]
          sm:w-[260px] sm:h-[240px]
          md:w-[360px] md:h-[320px]
          lg:w-[520px] lg:h-[500px]
        "
      >
        <Image
          src="/new-logo.png"
          fill
          priority
          alt=""
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Brand;
