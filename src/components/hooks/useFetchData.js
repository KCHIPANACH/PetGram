import { useEffect, useState } from 'react'

export function useFetchData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch(url)
      .then(resp => resp.json())
      .then(response => {
        setLoading(false)
        setData(response)
      })
  }, [])
  return [data, loading]
}
