type GradientOverlayProps = {
  className?: string
}

export const GradientOverlay = ({ className }: GradientOverlayProps) => {
  return (
    <div className="absolute z-0 top-0 left-0 right-0 w-full h-full">
        <div className="w-full h-[70%] mx-auto bg-gradient-to-b from-emerald-400/70 to-transparent" />
    </div>
  )
}
