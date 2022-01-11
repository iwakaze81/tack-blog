import { DayJs } from "../../utility/date"
import { useRouter } from "next/router"
import { ImageBox } from "../box/image_box"

export function ArticleCard(props) {
  const router = useRouter()
  let url = props.image == undefined ? '' : props.image.url

  let publishedAt = DayJs(props.publishedAt).format('投稿日 YYYY年M月D日')
  let updatedAt = ''
  if (props.updatedAt !== props.publishedAt) {
    updatedAt = DayJs(props.updatedAt).format(' (更新日 M月D日)')
  }
  
  return (
    <div
      className="h-56 mb-1 bg-white shadow-xl rounded cursor-pointer"
      onClick={() => {
        router.push(`/blog/${props.id}`)
      }}
    >
      <ImageBox
        src={url}
        alt={props.id}
      />
      <div className="m-4">
        <p className="text-sm mb-1">
          {publishedAt} 
          {updatedAt}
        </p>
        <p className="font-semibold underline whitespace-nowrap overflow-hidden overflow-ellipsis">
          {props.title}
        </p>
      </div>
    </div>
  )
}
