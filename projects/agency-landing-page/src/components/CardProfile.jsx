export function CardProfile({ imageProfile, description, name, role }) {
  return (
    <article className="flex flex-col gap-8 items-center py-6">
      {/* Avatar */}
      <img
        src={imageProfile}
        alt="Avatar profile card director marketing"
        className="h-16 w-16 rounded-full"
      />

      {/* Description */}
      <p className="font-body text-sm text-gray-700 font-semibold">
        {description}
      </p>

      {/* Name */}
      <h3 className="font-heading font-bold text-black">
				{name}
			</h3>

      {/* Role */}
      <span className="text-base font-body font-normal text-gray-500">
        {role}
      </span>
    </article>
  )
}
