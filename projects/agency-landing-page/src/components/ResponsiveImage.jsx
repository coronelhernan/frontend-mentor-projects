export function ResponsiveImage({ mobileSrc, desktopSrc, alt, className = "" }) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopSrc} />
      <img
        src={mobileSrc}
        alt={alt}
        className={`w-full h-auto object-cover ${className}`}
      />
    </picture>
  );
}
