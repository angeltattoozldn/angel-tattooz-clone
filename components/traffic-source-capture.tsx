"use client"

import { useEffect } from "react"
import { captureTrafficContext } from "@/lib/traffic-source-client"

export function TrafficSourceCapture() {
  useEffect(() => {
    captureTrafficContext()
  }, [])
  return null
}
