import { useEffect, useRef, useState, useMemo } from 'react'

const initialOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

type Args = {
  options?: IntersectionObserverInit
  toggle?: boolean
}

const useIntersectionObserver = (args?: Args) => {
  const options = useMemo(() => ({ ...initialOptions, ...args?.options }), [args?.options])
  const toggle = args?.toggle ?? true

  const elRef = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const createObserver = () => {
      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            return
          }

          if (toggle) {
            setIsIntersecting(false)
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      if (elRef.current) observer.observe(elRef.current)
    }

    createObserver()
  }, [options, toggle])

  return {
    ref: elRef,
    isIntersecting,
  }
}

export default useIntersectionObserver
