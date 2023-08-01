/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Alert({ kind }) {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Cambia 3000 por el tiempo deseado en milisegundos (en este ejemplo, 3 segundos)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (kind === 200) {
    return (
      <>
        {
          isVisible && (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium">Uploaded Successfully!</span> you can see the image now
            </div>
          )
        }
      </>
    )
  } else if (kind === 400) {
    return (
      <>
        {
          isVisible && (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">Uploaded Error!</span> please, try again
            </div>
          )
        }
      </>
    )
  } else if (kind === 500) {
    return (
      <>
        {
          isVisible && (
            <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
              <span className="font-medium">Something went wrong! </span> Please, try again later
            </div>
          )
        }
      </>
    )
  }
}