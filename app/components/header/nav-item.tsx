import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-1 font-medium font-roboto',
        isActive && 'text-gray-50',
      )}
    >
      <span className={cn('text-purple-400', isActive && 'font-bold')}>
        ../
      </span>
      {label}
    </Link>
  )
}
