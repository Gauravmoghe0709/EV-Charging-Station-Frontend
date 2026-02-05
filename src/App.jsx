import AppRouter from './router/AppRouter'
import AppLoader from './components/AppLoader'
import { useState,useEffect } from 'react'

const App = () => {
  const [loading,setloading] = useState(true)
  return (
    useEffect(() => {
      const timer = setTimeout(() => {
        setloading(false)
      }, 3000);

      return () => clearTimeout(timer);
    }, []),
    loading ? <AppLoader /> :  
      <AppRouter />
  )
}

export default App
