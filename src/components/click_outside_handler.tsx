import { useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the ref element
      console.log('click');
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('click outside');
        handler(event);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]); // Only re-run if ref or handler changes
}

export default useOnClickOutside;