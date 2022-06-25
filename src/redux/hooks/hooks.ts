import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../reducers/combine';
import { AppDispatch } from '../store';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch