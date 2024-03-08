import { createContext, useState, ReactNode, useEffect } from 'react'

import {
  StorageCartProps,
  storageProductSave,
  storageProductRemove,
  storageProductGetAll,
} from '../storage/storageCart'
import { updateTagCartItemsCount } from '~/notifications/notifications-tags'

export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>
  removeProductCart: (productId: string) => Promise<void>
  cart: StorageCartProps[]
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([])

  async function addProductCart(newProduct: StorageCartProps) {
    const storageResponse = await storageProductSave(newProduct)
    setCart(storageResponse)
    updateTagCartItemsCount(storageResponse.length.toString())
  }

  async function removeProductCart(productId: string) {
    const response = await storageProductRemove(productId)
    setCart(response)
    updateTagCartItemsCount(response.length.toString())
  }

  useEffect(() => {
    storageProductGetAll()
      .then((products) => setCart(products))
      .catch((error) => console.log(error)) //eslint-disable-line
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
