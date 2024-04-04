import { useContext } from 'react';
import {
  LoginUserContext,
  LoginUserContextType,
} from '../providers/LoginUserProvider';

export { useContext } from 'react';

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
