import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  priority?: boolean
}

export default function Logo({ size = 'md', priority = false }: LogoProps) {
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
        alt="PTC Group India official logo"
        width={s.width}
        height={s.height}
        priority={priority}
        sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 190px, 210px"
        quality={80}
        className="h-auto w-[140px] sm:w-[160px] md:w-[190px] lg:w-[210px]"
      />
    </div>
  )
}
