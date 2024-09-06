import img from "@/assets/images/sus.jpg"
import ImagePreview from "../image-preview/image-preview"

function Filp() {
  return (
    <div>
      <ImagePreview url={img} className="w-[300px]" />

      {/* <div ref={box} className="bg-slate-500 w-[200px] h-[200px]">
      </div> */}
      {/* <div onClick={onClick}>move</div> */}
    </div>
  )
}

export default Filp
