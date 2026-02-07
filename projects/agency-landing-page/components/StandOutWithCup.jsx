export function StandOutWithCup() {
  return (
    <section
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        grid-areas-standout-mobile
        lg:grid-areas-standout-desktop
        min-h-[600px]
      "
    >
      <div className="grid-area-cup bg-red-300 p-16">
        <h1 className="text-3xl">CUP IMAGE</h1>
      </div>
      <div className="grid-area-standout bg-white p-16">
        <h1 className="text-3xl">STAND OUT</h1>
      </div>

      
    </section>
  );
}
