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
            className="text-muted text-xl color-muted font-body bg-white py-4 px-10 rounded-4xl hover:bg-secondary"
            style={{ boxShadow: 
							`rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;`, }}
          >
            {item.title}
          </a>
        );
      })}
    </>
  );
}
