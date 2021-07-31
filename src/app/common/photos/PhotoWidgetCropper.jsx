import React, { useRef } from "react"
import Cropper from "react-cropper"
import 'cropperjs/dist/cropper.css'


export default function PhotoWidgetCropper({ setImage, imagePreview }) {
  const cropper = useRef(null)

  function cropImage() {
    if (typeof cropper.current.cropper.getCroppedCanvas() === 'undefined') {
      return
    }
    cropper.current.cropper.getCroppedCanvas().toBlob(blob => {
      setImage(blob)
    }, 'image/jpeg')
  }

  return (
    <Cropper
      src={imagePreview}
      style={{ height: 400, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={1}
      preview='.img-preview'
      guides={false}
      viewMode={1}
      dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={cropImage}
      ref={cropper}
    />
  )
}