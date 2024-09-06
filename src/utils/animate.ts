export class Filp {
  // Filp 动画 四要素
  // https://aerotwist.com/blog/flip-your-animations/
  /**
   * 1. first：初始状态
   * 2. Last：最终状态
   * 3. Invert：***反转***
   * 4. Play：过渡
   */
  #element: Element
  constructor(el: Element) {
    this.#element = el
    this.#first = this.measure()
  }
  measure() {
    return this.#element.getBoundingClientRect()
  }
  #first: DOMRect
  invert() {
    const form = this.#first
    return new Promise((resolve, reject) => {
      requestAnimationFrame(async () => {
        const to = this.measure()
        console.log(form, to)
        const dx = form.left - to.left
        const dy = form.top - to.top
        try {
          await this.#element.animate(
            [
              {
                transform: `translate(${dx}px, ${dy}px)`,
              },
              {
                transform: "none",
              },
            ],
            {
              duration: 500,
              easing: "ease-in",
            }
          ).finished
          this.#first = this.measure()

          resolve("")
        } catch (err) {
          reject(err)
        }
      })
    })
  }
}
export class FilpPreview {
  // Filp 动画 四要素
  // https://aerotwist.com/blog/flip-your-animations/
  /**
   * 1. first：初始状态
   * 2. Last：最终状态
   * 3. Invert：***反转***
   * 4. Play：过渡
   */

  constructor() {}
  measure(el: Element) {
    return {
      el,
      rect: el.getBoundingClientRect(),
    }
  }

  invert(
    el: Element,
    form: DOMRect,
    to: DOMRect,
    options?: KeyframeAnimationOptions
  ) {
    return new Promise<string>((resolve) => {
      const dx = form.left - to.left
      const dy = form.top - to.top
      const scaleRatio = form.width / to.width
      const a = el.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px) scale(${scaleRatio})`,
          },
          {
            transform: `none`,
          },
        ],
        options
      )
      a.addEventListener("finish", () => {
        resolve("success")
      })
    })
  }
}
