"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = 400
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a placeholder map
        ctx.fillStyle = "#e2e8f0"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#cbd5e1"
        ctx.lineWidth = 8
        ctx.beginPath()
        ctx.moveTo(0, 200)
        ctx.lineTo(canvas.width, 200)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, canvas.height)
        ctx.stroke()

        // Draw a marker for the office location
        ctx.fillStyle = "#27295C"
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 7, 0, Math.PI * 2)
        ctx.fill()

        // Add some text
        ctx.fillStyle = "#27295C"
        ctx.font = "bold 16px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("UDDHESHYA STUDIO", canvas.width / 2, canvas.height / 2 + 40)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <Card className="overflow-hidden">
      <div ref={mapRef} className="h-[400px]"></div>
    </Card>
  )
}
