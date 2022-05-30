import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HomePage.css";

export default function HomePage() {

  const {ref, inView} = useInView({
    threshold: 0.2
  })

  const fade = useAnimation();

  useEffect(() => {
    if (inView) {
      fade.start({
        opacity: 1,
        transition: {
          duration: 0.8
        }
      })
    }

    if (!inView) {
      fade.start({
        opacity: 0,
        transition: {
          duration: 0.8
        }
      })
    }
  }, [fade, inView])

  return (
    <>
      <div className="homepage-container" ref={ref}>
        <motion.div className="homepage_title_button" animate={fade}>
          <div className="homepage-title-container">
            <span className="homepage_title">
              Succulents from around the globe
            </span>
            <span className="homepage_title">shipped right to your door</span>
          </div>
          <Link to="#shop" smooth>
            <motion.button
              className="homepage_button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
