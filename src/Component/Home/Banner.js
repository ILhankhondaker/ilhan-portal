import React from "react";
import TypeAnimation from "react-type-animation";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen banner">
      <div class="hero-content text-center">
        <div class="max-w-lg">
          <button class="btn hover:bg-none bg-transparent px-8 rounded-bl-3xl rounded-tr-3xl capitalize">
            Hello There!
          </button>
          <div className="py-10">
            <h1 class="text-4xl font-bold">
              <TypeAnimation
                cursor={true}
                sequence={[
                  "I'm Ilhan Khondaker",
                  2000,
                  "I'm Front-end Developer",
                  3000,
                  "Welcome To My Portfolio",
                  4000,
                ]}
                wrapper="h2"
                repeat={Infinity}
              />
            </h1>
          </div>

          <a
            // href="https://drive.google.com/u/0/uc?id=1W2yNWz9CUFkGHB4vQMPvzk3h5DonSQmj&export=download"
            href="https://doc-00-6s-docs.googleusercontent.com/docs/securesc/ht3108a8ma1d5rb6r2f8pi9kkru5siam/gu2g1meo19fn524mo1d9b023ettvb4fh/1654868625000/05578925655227653750/05578925655227653750/1XbBaQ1ITfqQIV6mP5fmMD-tnKlVIP4MO?e=download&ax=ACxEAsbZBRCLLEkTkoVPKboJ__DZ3meGN6TVNbcZA78X4_oo0DLPF30bBRbEmTNSBQDSUqc3Qv_38ybgl0lYJn9QcMH1nbKDzuCl2VKc4TiOH8kcYhhYH2ay39HQs4zH1sWJMBeuuWP6WLVOZRM5mx2FJeXBJv1i6uxa1-y3j91l0P4jlwCuXijBGIVg5TuQJ-I3-kCM38yn8uYvyaG5-wWUuGT-YLMXdUJ5wu_qDrWCLPvEVm8vR0qflRGYL-mnCTa2IQNKG8yXfMeZ4o5kX4sTyK_CY57qwhGyVJTphfvCPtY_WZWRkb2jUfTEhGSg3nyYd5kxdv3l6pxgeH_Q3lNf8BlvWQloizDz6fTEHbFKO8R56sfbINDJ4b_i34PQ409XZwGKzmgs0LfNyI6R1zBmBiTPNvNZK5DRR1GhEKat5rlsWm6qls7CFXmLO2reNMatPnAtJuO86ybkVHrrWeGzUl-r6HgHwq2kcIFpyMJw5l50E3gbMdsGkM-c-BSx-onPihMFYSPml5OytKzPXQ2vvyoZeNJzAeIX_xyNjTpE9d5-XFSGzKJ_hvdRJSNUCewlHqyzZ2p8hAeP1jDOMz8Ru2nuaW913-28v79nY7OyhPjv71I813rjlUjA6Usk78HvCT2iJ-NxdDp7t8KPxhTAtPpQU0Tl-wXWBsJmn6dwH-c4zegtxy1reG6ncuh92PWV6ST73qkze3k&authuser=0&nonce=0fd0hla8ul25u&user=05578925655227653750&hash=ln7j809kevtdstmalgo2sh3omurgkoui"
            class="btn btn-primary mt-10"
          >
            resume download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
