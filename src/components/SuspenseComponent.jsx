import { Suspense } from 'react';
import Loader from './Loader';

export default function SuspenseComponent({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
