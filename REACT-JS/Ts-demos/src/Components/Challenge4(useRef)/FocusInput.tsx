import { useRef } from "react"

function FocusInput() {

    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        inputRef.current?.focus();
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Focus on me by click"/>
        <button onClick={handleFocus}>Click</button>
    </div>
  )
}

export default FocusInput