import ImageCard from "../ImageCard/ImageCard"
import  './ImageGallery.css'


export default function ImageGallery({images, openModal}){
    console.log(images);
    return(
        <>
        <ul className='imagegallery'>
        {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => openModal(image)} />
        </li>
      ))}
</ul>
        </>
    )
}