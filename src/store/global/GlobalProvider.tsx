// @ts-nocheck

import { createContext, useState } from 'react'

type Item = {
  name: string
  country: string
  temp: number
  wind: number
  humidity: number
  icon: number
  type: string
  id: number
}

type ItemCity = {
  city: Item
  setCity: (item: Item) => void
}

export const globalContext = createContext<ItemCity | undefined>(undefined)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState<Item | undefined>(undefined)

  const values: ItemCity = {
    city,
    setCity,
  }

  const Component = globalContext.Provider

  return <Component value={values}>{children}</Component>
}
