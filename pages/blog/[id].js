import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.css';
import { useEffect } from 'react';
import { CategoryChip } from '../../components/chip/category_chip';

import { client } from "../../lib/client";
import { DayJs } from "../../utility/date";

import styles from './id.module.scss';

// どの言語をハイライトしたいかを登録
hljs.configure()
hljs.registerLanguage('javascript', javascript);

export default function Article({ blog }) {
  let publishedAt = DayJs(blog.publishedAt).format('YYYY年M月D日')
  let updatedAt = ''
  if (blog.updatedAt !== blog.publishedAt) {
    updatedAt = DayJs(blog.updatedAt).format(' (更新日 M月D日)')
  }

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <main className="min-h-screen m-6 mb-10">
      <div className="mb-2">
        <p className="text-3xl font-bold mb-2">{blog.title}</p>
        <p className="font-medium text-gray-700">{publishedAt} {updatedAt}</p>
        <div className='flex mt-2 mb-3'>
          <p className='text-sm mr-2'>
            カテゴリ : 
          </p>
          {
            blog.categorys.map((category) => {
              return <CategoryChip
                key={category.id}
                category={category.category}
              />
            })
          }
        </div>
      </div>
      <hr className="mb-4 border"></hr>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className={styles.blog_content}
      ></div>
    </main>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    }
  }
}