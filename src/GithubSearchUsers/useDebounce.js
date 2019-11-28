import {useState, useEffect} from 'react'

export default function useDebouncer(value, delay = 300) {
  const [dv, setDV] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDV(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return dv
}
