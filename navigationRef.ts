import { CommonActions } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef = React.createRef<any>()

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params)
}

export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  )
}
