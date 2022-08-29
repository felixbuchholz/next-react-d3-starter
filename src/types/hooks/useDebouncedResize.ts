import { Dispatch, RefObject, SetStateAction } from 'react'

import { Dimensions } from '../Dimensions'

export type OnResize = (props: ResizeObserverEntry[]) => void

export type ResizeDimensionsProps = {
  resizeObserverEntries: ResizeObserverEntry[]
  setDimensions: Dispatch<SetStateAction<Dimensions>>
}

export type ResizeDimensions = (props: ResizeDimensionsProps) => void

export type UseDebouncedResize = (
  delay?: number
) => { ref: RefObject<HTMLDivElement>; dimensions: Dimensions }
