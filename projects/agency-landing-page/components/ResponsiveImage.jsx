export function ResponsiveImage({ mobileSrc, desktopSrc, alt, className }) {
  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={desktopSrc} />
      <img
        src={mobileSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </picture>
  );
}
