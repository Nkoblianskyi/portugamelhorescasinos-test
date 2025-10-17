import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-primary py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        <div className="portugal-accent-line mb-8 rounded-full"></div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          <div className="text-center">
            {/* Logo */}
            <Link href="/" className="flex justify-center items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="" />
              <h1 className="text-sm sm:text-lg md:text-xl font-bold pt-2">
                <span className="text-accent">Portugal</span>
                <span className="text-primary mx-1">Melhores</span>
                <span className="text-secondary">Casinos</span>
              </h1>
            </Link>

          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-2 border-secondary">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <div className="text-muted-foreground text-sm text-center">
              <p className="text-secondary font-bold">Jogo responsável</p>
              <p>Proibido a menores</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
              <Link href="/politica-privacidade" className="hover:text-primary">
                Privacidade
              </Link>
              <Link href="/politica-cookies" className="hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4 group">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
                <span className="text-accent">Portugal</span>
                <span className="text-primary mx-1">Melhores</span>
                <span className="text-secondary">Casinos</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <Link href="/politica-privacidade" className="hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/politica-cookies" className="hover:text-primary">
              Política de Cookies
            </Link>
          </div>

          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-2 border-secondary">
            <span className="text-white font-bold text-sm">18+</span>
          </div>
        </div>

        {/* Section Organizações */}
        <div className="mt-8 pt-6 border-t border-primary">
          <h4 className="text-foreground font-bold mb-6 text-center text-base">
            <span className="text-accent">Organizações</span> <span className="text-secondary">de</span>{" "}
            <span className="text-primary">Apoio</span>
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-white hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/srij.svg"
                alt="SRIJ"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.sicad.pt"
              target="_blank"
              className="bg-white hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/icad.png"
                alt="SICAD"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="bg-black hover:bg-muted border-2 border-border rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-6 text-center text-muted-foreground text-sm">
          <div className="portugal-accent-line w-32 mx-auto mb-4 rounded-full"></div>
          <p className="text-foreground font-semibold">&copy; 2025 PortugaMelhoresCasinos.com</p>
          <p className="mt-2">Comparador independente de casinos online licenciados em Portugal</p>
          <p className="mt-2 text-secondary font-bold">
            Apenas para maiores de 18 anos - O jogo pode causar dependência
          </p>
        </div>
      </div>
    </footer>
  )
}
