// We need this to use useSelector  (You can Export this as a react-hook to use separately)
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/combine';
import { AppDispatch } from '../store';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch