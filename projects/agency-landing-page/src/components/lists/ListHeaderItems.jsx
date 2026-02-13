const LINKS = [
  { title: "About" },
  { title: "Services" },
  { title: "Projects" },
  { title: "Contact" },
];

export function ListHeaderItems() {
  return (
    <>
      {LINKS.map((item) => {
        return (
          <a
            href="#"
            key={item.title}
            className="text-base text-white font-body font-semibold py-3 px-6 rounded-4xl inline-flex items-center justify-center w-[120px]
					  hover:bg-sky-300 hover:font-heading hover:uppercase
						transition-all duration-200">
            {item.title}
          </a>
        );
      })}
    </>
  )
}
