import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 190, height: 52 },
    md: { width: 240, height: 66 },
    lg: { width: 300, height: 82 },
  }
  const s = sizes[size]

  return (
    <div className="shrink-0">
      <Image
        src="/Images/Logo.png"
        alt="PTC Group India"
        width={s.width}
        height={s.height}
        priority
        className="h-auto w-[140px] sm:w-[160px] md:w-[190px] lg:w-[210px]"
      />
    </div>
  )
}
