import { useEffect, useRef, useState } from 'react'

type Props = {
    currentLength: number
}

const AutoScrollToNewRows = ({currentLength}: Props) => {

    const scrollRef = useRef<HTMLDivElement>(null);
    
    const [prevRowsLength, setPrevRowsLength] = useState(0)

    useEffect(() => {

        if (scrollRef.current && currentLength > prevRowsLength) {
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    
        setPrevRowsLength(currentLength);
    
      }, [currentLength]);

  return (
    <div ref={scrollRef}></div>
  )
}

export default AutoScrollToNewRows