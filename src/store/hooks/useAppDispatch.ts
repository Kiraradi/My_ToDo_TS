import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch } from '..';

export const useAppDispatch: TypedUseSelectorHook<AppDispatch> = useDispatch;