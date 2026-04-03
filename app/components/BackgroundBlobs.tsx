export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <div
        className="absolute top-20 left-10 w-72 h-72 animate-float opacity-20"
        style={{
          background: "linear-gradient(135deg,#ff6b6b,#feca57)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute top-40 right-20 w-96 h-96 animate-float opacity-15"
        style={{
          background: "linear-gradient(135deg,#48dbfb,#ff9ff3)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          animationDelay: "-3s"
        }}
      />

      {/* Blob 3 */}
      <div
        className="absolute bottom-20 left-1/3 w-64 h-64 animate-float opacity-10"
        style={{
          background: "linear-gradient(135deg,#feca57,#48dbfb)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
        }}
      />

    </div>
  )
}