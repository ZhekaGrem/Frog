import { lazy, Suspense } from 'react';
import Loading from '@/app/loading';

import InfiniteLogoSlider from '@/app/components/layout/InfiniteLogoSlider'
const One = lazy(() => import('@/app/components/section/One'));
const Two = lazy(() => import('@/app/components/section/Two'));
const Three = lazy(() => import('@/app/components/section/Three'));
const Four = lazy(() => import('@/app/components/section/Four'));
// const Five = lazy(() => import('@/app/components/section/Five'));
// const Six = lazy(() => import('@/app/components/section/Six'));
// const Seven = lazy(() => import('@/app/components/section/Seven'));
// const Eighth = lazy(() => import('@/app/components/section/Eighth'));
// const Nine = lazy(() => import('@/app/components/section/Nine'));

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <One />
      </Suspense>
      <InfiniteLogoSlider  />
      <Suspense fallback={<Loading />}>
        <Two />
      </Suspense>
      <InfiniteLogoSlider  />
      <Suspense fallback={<Loading />}>
        <Three />
      </Suspense>
      <InfiniteLogoSlider  />
      <Suspense fallback={<Loading />}>
        <Four />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <Five />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Six />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Seven />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Eighth />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Nine />
      </Suspense> */}
    </>
  );
}
