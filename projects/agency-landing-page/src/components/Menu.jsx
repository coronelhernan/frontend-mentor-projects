import { ListHeaderItems } from "./ListHeaderItems";

export function Menu() {
  return (
    <div className="absolute top-full right-0 mt-6 w-86">
      {/* TRIÁNGULO */}
      <div
        className="absolute -top-5 right-0 w-0 h-0 border-l-[24px] border-l-transparent
        border-b-[24px] border-b-white"
      />

      {/* MENÚ */}
      <div
        className="flex flex-col items-center justify-center gap-6 py-10 bg-white 
				cursor-pointer"
      >
        <ListHeaderItems />
      </div>
    </div>
  )
}
