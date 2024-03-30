import { Dispatch, SetStateAction, createContext, useState } from 'react'

export interface GlobalStateInterface {
  firstname: string
  lastname: string
  age: string
}
export const globalContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
})

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState()

  const values = {
    city,
    setCity,
  }

  const Component = globalContext.Provider

  return <Component value={values}>{children}</Component>
}
