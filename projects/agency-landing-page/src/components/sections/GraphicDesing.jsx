export function GraphicDesign() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[650px] w-full">
      <picture>
        {/* Imagen para desktop */}
        <source 
          media="(min-width: 1024px)" 
          srcSet="/images/desktop/image-graphic-design.jpg"
        />

        {/* Imagen para mobile */}
        <img
          src="/images/mobile/image-graphic-design.jpg"
          alt="Graphic Design"
          className="w-full h-full min-h-[500px] object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex items-end justify-center py-6 px-2 text-graphic">
        <div className="max-w-lg flex flex-col text-center gap-8 py-12">
          <h2 className="text-3xl font-heading font-extrabold">
            Graphic Design
          </h2>
          <p className="text-sm font-semibold">
            Great desing makes you memorable. We deliver <br />
            artwork that underscores your brand message <br />
            and captures potential clients attention.
          </p>
        </div>
      </div>
    </section>
  );
}
