import { useRouter } from 'next/router';
import styles from './header.module.scss';

export function Header() {
  const router = useRouter()

  return (
    <div 
      className="w-full h-40 flex text-5xl justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800"
      onClick={() => {
        router.push('/')
      }}
    >
      <div>
        <span className={styles.shadow}>TACK BLOG</span>
      </div>
    </div>
  )
}