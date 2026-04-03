export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      <div className="absolute top-20 left-10 w-72 h-72 blob animate-float opacity-20 bg-gradient-to-r from-red-400 to-yellow-400" />

      <div className="absolute top-40 right-20 w-96 h-96 blob animate-float-delay opacity-15 bg-gradient-to-r from-sky-400 to-pink-400" />

      <div className="absolute bottom-20 left-1/3 w-64 h-64 blob animate-float opacity-10 bg-gradient-to-r from-yellow-400 to-sky-400" />

    </div>
  )
}