import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

export const useDotButton = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  // Scroll to a specific slide
  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  // Set up scroll snaps (one per slide)
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  // Update the currently selected dot
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // Function to update scroll snaps and selected index
    const updateState = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    // Run once to set initial state
    requestAnimationFrame(() => updateState())

    // Subscribe to Embla events
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    // Cleanup
    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

interface DotButtonProps {
  isSelected: boolean
  onClick: () => void
}

export const DotButton = ({ isSelected, onClick }: DotButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-colors duration-300 mt-2 ${
        isSelected ? 'bg-accent' : 'bg-gray-300'
      }`}
    />
  )
}
