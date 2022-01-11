import { useRouter } from 'next/router';
import styles from './header.module.scss';

export function Header() {
  const router = useRouter()

  return (
    <div 
      className="w-full h-40 flex justify-center items-center bg-gray-800"
      onClick={() => {
        router.push('/')
      }}
    >
      <div>
        <span className={styles.shadow}>Tack BLOG</span>
      </div>
    </div>
  )
}