export function TransformWithEgg() {
  return (
    <section
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        grid-areas-transform-mobile
        lg:grid-areas-transform-desktop
        min-h-[600px]
      "
    >
      <div className="grid-area-transform bg-white p-16">
        <h1 className="text-3xl">TRANSFORM</h1>
      </div>

      <div className="grid-area-egg bg-yellow-300 p-16">
        <h1 className="text-3xl">EGG IMAGE</h1>
      </div>
    </section>
  );
}
