"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"

interface CasinoModalProps {
  site: BettingSite
  rank: number
  isOpen: boolean
  onClose: () => void
}

export function CasinoModal({ site, rank, isOpen, onClose }: CasinoModalProps) {
  if (!isOpen) return null

  const isFirstItem = rank === 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl">
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-20 rounded-full p-2 bg-white border-2 border-border hover:bg-muted transition-colors shadow-lg"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        <div
          className={`rounded-lg p-8 bg-white ${
            isFirstItem ? "border-2 border-primary shadow-xl" : "border-2 border-border shadow-xl"
          }`}
        >
          {isFirstItem && <div className="portugal-accent-line absolute top-0 left-0 right-0 rounded-t-lg"></div>}

          <div className="flex items-center gap-8 pt-2">
            {/* Rank */}
            <div
              className={`w-20 h-20 font-bold rounded-lg flex items-center justify-center text-3xl flex-shrink-0 ${
                isFirstItem
                  ? "bg-primary text-white border-2 border-primary"
                  : "bg-muted text-foreground border border-border"
              }`}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 bg-white rounded-lg p-4 border border-border">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[200px] h-[120px] object-contain"
              />
            </div>

            {/* Bonus */}
            <div className="flex-1 text-center">
              <div className="text-secondary font-bold mb-2 text-xl uppercase tracking-wide">Bónus</div>
              <p className="text-foreground font-semibold leading-tight text-2xl">{site.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center flex-shrink-0">
              <div className="text-3xl font-bold text-primary mb-2">
                {(site.rating * 2).toFixed(1)}
                <span className="text-base text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <StarRating rating={site.rating} size="lg" showHover />
              </div>
              <div className="text-muted-foreground text-sm">({site.reviews} avaliações)</div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg uppercase tracking-wide border-0"
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
