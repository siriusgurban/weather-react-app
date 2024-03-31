import { createContext, useState } from 'react'

interface Item {
  name: string
  country: string
  city: string
}

interface GlobalContextType {
  city: Item
  setCity: (item: Item) => void
}

export const globalContext = createContext<GlobalContextType | undefined>(
  undefined,
)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState<Item>()

  const values: GlobalContextType = {
    city,
    setCity,
  }

  const Component = globalContext.Provider

  return <Component value={values}>{children}</Component>
}
