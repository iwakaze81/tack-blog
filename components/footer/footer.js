import Image from "next/image"
import { BsGithub, BsTwitter } from "react-icons/bs"

export function Footer() {
  return (
    <div className="bottom-0 w-full h-40 pb-10 flex flex-col justify-between bg-gray-800">
      <div className="p-4 text-white">
        <div>
          <span></span>
        </div>
        <div className="m-2 flex items-center">
          <Image 
            src="https://images.microcms-assets.io/assets/c7f638adc3f64d9192bd4907efc2835a/8364714ee36d49e8a119d8489d494080/IMG_98C696D2B7E0-1.png"
            alt=""
            width="38"
            height="38"
          ></Image>
          <div className="ml-3 mr-2">
            <div className="flex items-center mb-0.5">
              <BsTwitter className="mr-2"></BsTwitter>
              <a href="https://twitter.com/wasakiT" className="underline">
                wasakiT
              </a>
              <BsGithub className="ml-4 mr-2"></BsGithub>
              <a href="https://github.com/iwakaze81" className="underline">
                iwakaze81
              </a>
            </div>
            <p className="text-sm">田舎県のサラリーマンエンジニア。Next.js/Flutter勉強中。</p>
          </div>
        </div>
      </div>
      <div className="text-right mr-4">
        <p className="copyright text-gray-200">&copy; 2022 TACK</p>
      </div>
    </div>
  )
}