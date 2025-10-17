import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white border-b-2 border-primary relative z-50 w-full shadow-sm">
      <div className="container mx-auto max-w-[1220px] px-2 sm:px-4 py-3 sm:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex justify-center items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} className=""/>
            <h1 className="text-sm sm:text-lg md:text-xl font-bold pt-2">
              <span className="text-accent">Portugal</span>
              <span className="text-primary mx-1">Melhores</span>
              <span className="text-secondary">Casinos</span>
            </h1>
          </Link>

          {/* Badges de Segurança */}
          <div className="flex items-center gap-3">
            <Link href="https://www.srij.com/" className=" flex items-center justify-center">
              <Image src="/srij.svg" alt="SRIJ logo" width={32} height={32} />
            </Link>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 rounded-full h-1 bg-primary shadow-sm"></div>
      </div>
    </header>
  )
}
