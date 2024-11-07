import { forwardRef, HTMLAttributes } from "react";

export const Brands = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(() => (
  <div className="relative flex flex-col justify-center overflow-hidden">
    <div className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6">
      <div className="text-center">
        {/* Logo Carousel animation */}
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          >
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                alt="Facebook"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                alt="Disney"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                alt="Airbnb"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                alt="Apple"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
                alt="Spark"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                alt="Samsung"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                alt="Quora"
              />
            </li>
            <li>
              <img
                src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
                alt="Sass"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
));

Brands.displayName = "brands";
