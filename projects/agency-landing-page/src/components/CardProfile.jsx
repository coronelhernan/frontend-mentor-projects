export function CardProfile({ imageProfile, description, name, role }) {
  return (
    <article className="flex flex-col gap-8 items-center py-6">
      {/* Avatar */}
      <img
        src={imageProfile}
        alt="Avatar profile card director marketing"
        className="h-18 w-18 rounded-full"
      />

      {/* Description */}
      <p className="font-body text-base text-gray-600 font-semibold">
        {description}
      </p>

      {/* Name */}
      <h3 className="text-xl font-heading font-bold text-black">
				{name}
			</h3>

      {/* Role */}
      <span className="text-base font-body font-semibold text-gray-400">
        {role}
      </span>
    </article>
  )
}
