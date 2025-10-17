"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  // Auto-open after 10 seconds if no site prop provided
  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  // Sync with prop when controlled
  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  const isFirstItem = rank === 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute -right-3 -top-3 z-20 rounded-full p-2 bg-white border-2 border-border hover:bg-muted transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div
          className={`rounded-lg p-6 bg-white ${
            isFirstItem ? "border-2 border-primary shadow-xl" : "border-2 border-border shadow-xl"
          }`}
        >
          {isFirstItem && <div className="portugal-accent-line absolute top-0 left-0 right-0 rounded-t-lg"></div>}

          <div className="flex flex-col items-center gap-4 pt-2">

            {/* Logo */}
            <div className="flex-shrink-0 bg-white rounded-lg p-3 border border-border">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[160px] h-[80px] object-contain"
              />
            </div>

            {/* Bonus */}
            <div className="text-center w-full">
              <div className="text-secondary font-bold mb-1 text-base uppercase tracking-wide">Bónus</div>
              <p className="text-foreground font-semibold leading-tight text-lg">{site.bonus}</p>
            </div>

            {/* Rating */}
            <div className="text-center w-full">
              <div className="text-2xl font-bold text-primary mb-1">
                {site.rating.toFixed(1)}
                <span className="text-sm text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                <StarRating rating={site.rating / 2} size="md" showHover />
              </div>
              <div className="text-muted-foreground text-xs">({site.reviews} avaliações)</div>
            </div>

            {/* CTA Button */}
            <div className="w-full">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 text-base uppercase tracking-wide border-0"
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
