export function Photography() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[650px] w-full">

      <picture>
        {/* Imagen para desktop */}
        <source 
          media="(min-width: 1024px)" 
          srcSet="/images/desktop/image-photography.jpg"
        />

        {/* Imagen para mobile */}
        <img
          src="/images/mobile/image-photography.jpg"
          alt="Graphic Design"
          className="w-full h-full min-h-[500px] object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex items-end justify-center text-photography">
        <div className="max-w-lg flex flex-col text-center gap-6 py-14">
          <h2 className="text-3xl font-heading font-bold">
            Photography
          </h2>
          <p className="text-xs font-semibold">
            Increase your credibility by getting the most <br />
            stunning, high-quality photos that improve your <br />
            business image.
          </p>
        </div>
      </div>

    </section>
  );
}
