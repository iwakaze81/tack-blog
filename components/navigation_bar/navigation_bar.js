import { useCallback, useEffect, useState } from "react"
import { client } from "../../lib/client"

export function NavigationBar() {
  const [categorys, categorysSet] = useState([])
  const [ids, idsSet] = useState([])

  const fetchCategory = useCallback(async () => {
    const res = await client.get({ endpoint: 'category' })
    const tempCategorys = []
    const tempIds = []
    res.contents.map((item) => {
      tempCategorys.push(item.category)
      tempIds.push(item.id)
    })

    idsSet(tempIds)
    categorysSet(tempCategorys)
  }, [])

  useEffect(() => {
    fetchCategory()
  }, [fetchCategory])

  return (
    <div className="hidden xl:block lg:block md:block w-64 mt-8 mb-16 mr-4">
      <div className="bg-white shadow-xl rounded p-2">
        <p className="font-bold">カテゴリ</p>
        <div className="m-2">
          {
            categorys.length !== 0 ?
              categorys.map((category, index) => {
                const key = categorys[index] + ids[index]
                console.log(key)
                return <>
                  <div key={key} className="mb-0.5">
                    <p>
                      {category}
                    </p>
                  </div>
                </>
              }) : <></>
          }
        </div>
      </div>
    </div>
  )
}
