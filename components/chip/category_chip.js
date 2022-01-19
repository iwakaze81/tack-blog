export function CategoryChip(props) {
  return (
    <div className="py-0.5 px-2 mr-2 rounded-full bg-gray-200">
      <p className="text-xs whitespace-nowrap overflow-hidden overflow-ellipsis">
        {props.category}
      </p>
    </div>
  )
}