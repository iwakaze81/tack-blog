import { BsImage } from 'react-icons/bs'

export function ImageBox(props) {
  if ((props.src === undefined ||
    props.src === '') && (
      props.art === undefined ||
      props.art === '')) {
    return (
      <div
        className="h-36 w-full md:w-1/3 lg:w-full flex sm:rounded-t md:rounded-tr-none md:rounded-l lg:rounded-t lg:rounded-bl-none justify-center items-center bg-gray-300"
      >
        <div className="justify-center">
          <BsImage className="text-6xl ml-1 mb-1" />
          <span>No Image</span>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className="h-36 w-full md:w-1/3 lg:w-full sm:rounded-t md:rounded-tr-none md:rounded-l lg:rounded-t lg:rounded-bl-none  bg-blue-300 bg-image"
      > 
        <style jsx>{`
          .bg-image {
            background: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url('${props.src}');
          }
        `}
        </style>
      </div>
    )
  }
}