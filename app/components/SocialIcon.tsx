export default function SocialIcon({
  icon,
  href
}: {
  icon: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-[#13131a] text-white hover:scale-110 hover:bg-[#1f1f2a] transition"
    >
      {icon}
    </a>
  )
}