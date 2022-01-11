import { BsImage } from 'react-icons/bs'

export function ImageBox(props) {
  if ((props.src === undefined ||
    props.src === '') && (
      props.art === undefined ||
      props.art === '')) {
    return (
      <div
        className="h-36 w-full flex rounded-t justify-center items-center bg-gray-300"
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
        className="h-36 w-full rounded-t bg-blue-300 bg-image"
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