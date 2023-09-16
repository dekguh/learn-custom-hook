import { useEffect, useState } from 'react'

const useConnection = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true)

  const handleStatus = (status: boolean) => {
    setIsOnline(status)
  }

  useEffect(() => {
    window.addEventListener('online', () => handleStatus(true))
    window.addEventListener('offline', () => handleStatus(false))

    return () => {
      window.addEventListener('online', () => handleStatus(true))
      window.addEventListener('offline', () => handleStatus(false))
    }
  }, [])

  return isOnline
}

export default useConnection