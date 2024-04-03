import { useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export function useToastHook() {
  const [state, setState] = useState(undefined)
  const toast = useToast()

  useEffect(() => {
    if (state) {
      toast({
        // title: 'Error',
        description: "Couldn't found city",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [state, toast])

  return [state, setState]
}
