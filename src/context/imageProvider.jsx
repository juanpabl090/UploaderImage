import { useContext, useState } from "react"
import imageContext from "./imageContext"

export const useImage = () => {
  const context = useContext(imageContext);
  if (!context)
    throw new Error('useImage must be use within a TaskContextProvider');
  return context
}

export default function imageProvider({ children }) {
  const [image, setImage] = useState();
  return (
    <div>image.context</div>
  )
}
