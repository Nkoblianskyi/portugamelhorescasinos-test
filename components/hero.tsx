import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full">
      <div
        className="w-full min-h-[300px] flex items-center relative"
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10 w-full py-6 sm:py-8">
          <div className="portugal-accent-line w-16 sm:w-24 mx-auto mb-4 sm:mb-6 rounded-full"></div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-primary">MELHORES</span>
            <br />
            <span className="text-white">CASINOS</span> <span className="text-secondary">ONLINE</span>
            <br />
            <span className="text-primary">PORTUGAL</span>
          </h1>

          <div className="text-primary mb-3 sm:mb-4 text-sm sm:text-base font-semibold">
            Última atualização: {formattedDate}
          </div>

          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Descubra os melhores casinos online licenciados em Portugal. Análise completa de bónus, jogos, segurança e
            métodos de pagamento para escolher a melhor plataforma de casino online.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Image src="/srij.svg" alt="SRIJ logo" width={32} height={32} />
              <span className="text-white font-semibold">Licenciados SRIJ</span>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <Image src="/flag.png" alt="Testados & Aprovados" width={32} height={32} />
              <span className="text-white font-semibold">Testados & Aprovados</span>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-white font-semibold">Atualizados Diariamente</span>
            </div>

            <div className="w-8 h-8 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-secondary">
              <span className="text-white font-bold text-xs sm:text-xs">18+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
