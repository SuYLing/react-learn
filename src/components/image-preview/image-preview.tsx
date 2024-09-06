import img from "@/assets/images/sus.jpg"
import { cn } from "@/utils"
import { FilpPreview } from "@/utils/animate"
import { DetailedHTMLProps, forwardRef, useRef, useState } from "react"
import { createPortal } from "react-dom"
interface MaskProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isShowPreview: boolean
}
const Mask = forwardRef<HTMLImageElement, MaskProps>(
  ({ className, isShowPreview, onClick }, ref) => {
    return (
      <div
        className={cn(
          "w-svw h-svh absolute flex justify-center items-center top-0 left-0 ",
          isShowPreview ? "" : "hidden"
        )}
      >
        <div
          className={cn(`w-full h-full bg-black/80 absolute`, className)}
          onClick={onClick}
        ></div>
        <div className={cn("w-[400px]")}>
          <img
            src={img}
            ref={ref}
            className="w-full origin-top-right relative z-auto"
            alt=""
          />
        </div>
      </div>
    )
  }
)
interface ImagePreview
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  url: string
  maskClass?: string
}
const ImagePreview = forwardRef<HTMLImageElement, ImagePreview>(
  ({ className, maskClass, url }, ref) => {
    const [isShowPreview, setIsShowPreview] = useState(false)
    const filpPreviewRef = useRef<FilpPreview>(new FilpPreview())
    const preRef = useRef<HTMLImageElement | null>(null)
    const realRef = useRef<HTMLImageElement | null>(null)
    const onCLickMask = () => {
      const first = filpPreviewRef.current.measure(preRef.current as Element)
      setIsShowPreview(false)
      const last = filpPreviewRef.current.measure(realRef.current as Element)
      filpPreviewRef.current?.invert(
        realRef.current as Element,
        first.rect,
        last.rect,
        {
          duration: 200,
        }
      )
    }
    const onPreview = () => {
      setIsShowPreview(true)
      const first = filpPreviewRef.current.measure(realRef.current as Element)
      requestAnimationFrame(() => {
        const last = filpPreviewRef.current.measure(preRef.current as Element)
        filpPreviewRef.current?.invert(
          preRef.current as Element,
          first.rect,
          last.rect,
          {
            duration: 200,
          }
        )
      })
    }
    return (
      <div className={cn("w-[200px]", className)} ref={ref}>
        {createPortal(
          <Mask
            ref={preRef}
            isShowPreview={isShowPreview}
            onClick={onCLickMask}
            className={cn(maskClass)}
          />,
          document.body
        )}
        <div>
          <img
            src={url}
            alt=""
            className={cn(
              "w-full h-full duration-200 transition-all",
              isShowPreview ? "opacity-10" : ""
            )}
            onClick={onPreview}
            ref={realRef}
          />
        </div>
      </div>
    )
  }
)

export default ImagePreview
