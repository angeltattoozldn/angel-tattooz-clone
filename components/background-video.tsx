"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundVideo({ videoId }: { videoId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {shouldLoad && (
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&start=2&end=30&enablejsapi=1&iv_load_policy=3&showinfo=0&modestbranding=1`}
          title="Cinematic Tattoo Studio Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        />
      )}
    </div>
  )
}
