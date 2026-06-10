import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  priority?: boolean
  compact?: boolean
}

export default function Logo({ size = 'md', priority = false, compact = false }: LogoProps) {
  const sizes = {
    sm: { className: 'h-14 sm:h-16', displaySize: '64px' },
    md: { className: 'h-20 sm:h-24', displaySize: '96px' },
    lg: { className: 'h-28 sm:h-32', displaySize: '128px' },
  }
  const s = sizes[size]

  return (
    <div className="flex shrink-0 items-center">
      <Image
        src="/Images/ptc-header-footer-logo.png"
        alt="PTC Group India official logo"
        width={1485}
        height={1508}
        priority={priority}
        sizes={s.displaySize}
        quality={85}
        className={`${compact ? 'h-16 sm:h-20' : s.className} w-auto rounded-sm object-contain`}
      />
    </div>
  )
}
