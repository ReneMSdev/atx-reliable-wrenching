import React, { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const updateButtons = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }

    // attach events
    emblaApi.on('init', updateButtons)
    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)

    // run once to set initial state
    updateButtons()

    return () => {
      // detach events
      emblaApi.off('init', updateButtons)
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='w-10 h-10 bg-accent text-white flex items-center justify-center shadow-sm disabled:opacity-70 cursor-pointer'
    >
      <FaArrowLeft />
    </button>
  )
}

export const NextButton = ({ onClick, disabled }: { onClick: () => void; disabled: boolean }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='w-10 h-10 bg-black text-white flex items-center justify-center shadow-sm disabled:opacity-70 cursor-pointer'
    >
      <FaArrowRight />
    </button>
  )
}
