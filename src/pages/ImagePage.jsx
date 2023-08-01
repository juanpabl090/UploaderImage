import { useState } from "react"
import { uploadImage } from "../api/image.api";
import Alert from "../components/Alert";

var response;
export default function ImagePage() {
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(false);

  const formData = new FormData();

  // SELECT image

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append('image', image);

    try {
      response = await uploadImage(formData);
      console.log(response)
      setAlert(true)
    } catch (error) {
      console.error(error);
    }
  }

  // DRAG & DROP images
  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
    formData.append('image', file);
    try {
      response = await uploadImage(formData);
      console.log(response)
      setAlert(true)
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragOver = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {
        alert && <Alert kind={response} />
      }
      <div className="grid place-content-center h-screen">
        <h1 className="text-3xl m-5">Upload your image</h1>
        <p className="text-xl m-5">Files should be jpeg, jpg, png...</p>
        <div
          className="grid 
          place-items-center h-52 
          border-dashed border-2 
          border-sky-500 rounded-xl"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <img src="/image.svg" alt="" className="h-1/2 w-1/2" />
          <p>Drag and Drop your images here</p>
        </div>
        <p className="grid place-content-center pt-5">Or</p>
        <form onSubmit={handleSubmit} className="grid m-5">
          <input
            type="file"
            id="imagen"
            accept="image/*"
            onChange={handleImage}
            className="m-5"
          />
          {
            image == null
              ? <button type="submit" className="bg-gray-500 m-5 text-gray-400" disabled>Subir imagen</button>
              : <button type="submit" className="bg-blue-500 m-5">Subir imagen</button>
          }
        </form>
      </div>
    </>
  )
}
