"use client"

import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirstItem = rank === 1

  const handleCardClick = () => {
    window.open(site.url, "_blank")
  }

  return (
    <div className="relative">
      {site.badge && (
        <div className="absolute -top-3 left-6 z-30">
          <div className="bg-accent text-white px-4 py-2 rounded-full shadow-md border-2 border-accent">
            <span className="text-xs font-bold uppercase tracking-wider">{site.badge}</span>
          </div>
        </div>
      )}

      <div onClick={handleCardClick} className="block group cursor-pointer">
        <div
          className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.01] bg-white ${
            isFirstItem
              ? "border-2 border-primary hover:border-primary shadow-md"
              : "border-2 border-border hover:border-secondary shadow-sm"
          }`}
        >
          <div className="relative z-10">
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8 pt-4">
              <div
                className={`w-14 h-14 font-bold rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${
                  isFirstItem
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-muted text-foreground border border-border"
                }`}
              >
                {rank}
              </div>

              <div className="flex-shrink-0 bg-black rounded-lg p-3 border border-border">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[84px] lg:w-[160px] lg:h-[96px] object-contain"
                />
              </div>

              <div className="flex-1 text-center">
                <div className="text-secondary font-bold mb-2 text-lg uppercase tracking-wide">Bónus</div>
                <p className="text-foreground font-semibold leading-tight text-xl">{site.bonus}</p>
              </div>

              <div className="text-center flex-shrink-0">
                <div className="text-2xl font-bold text-primary mb-2">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <StarRating rating={site.rating / 2} size="md" showHover />
                </div>
                <div className="text-muted-foreground text-xs">({site.reviews})</div>
              </div>

              <div className="flex-shrink-0">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 text-base uppercase tracking-wide border-0"
                >
                  Jogar Agora
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-shrink-0 bg-black rounded-lg p-2 border border-border">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-[120px] h-[72px] object-contain"
                  />
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="text-secondary font-bold text-sm mb-1 uppercase">Bónus</div>
                <p className="text-foreground font-semibold leading-tight text-lg">{site.bonus}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-primary font-bold text-xl mb-1">
                    {site.rating.toFixed(1)}
                    <span className="text-sm text-muted-foreground">/10</span>
                  </span>
                  <StarRating rating={site.rating / 2} size="sm" showHover />
                </div>
                <div className="text-muted-foreground text-sm">({site.reviews})</div>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                className="bg-accent hover:bg-accent/90 text-white font-bold w-full py-3 uppercase tracking-wide"
              >
                Jogar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
