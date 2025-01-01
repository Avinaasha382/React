import {styled} from "styled-components";

export default function Button({children,...props}) {
  return (
    <button className="py-4 px-8 uppercase rounded text-[#1f2937] bg-[#f0b322] hover:bg-amber-500" {...props}>{children}</button>
  )
}

