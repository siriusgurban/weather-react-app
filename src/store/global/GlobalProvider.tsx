import { createContext, useState } from 'react'

// type ApiResponse = {
//   name: string
//   country: string
// }

export const globalContext = createContext()

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState<{ name: string; country: string }>()

  const values = {
    city,
    setCity,
  }

  const Component = globalContext.Provider

  return <Component value={values}>{children}</Component>
}
