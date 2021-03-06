import * as React from 'react'
import { AuthContext } from '../AuthProvider'
import {TokenInterface} from "../types";

/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
function useAuth(): () => TokenInterface{
  const c = React.useContext(AuthContext)

  return (): TokenInterface => {
    return <TokenInterface>c?.authState.authState
  }
}

export default useAuth
