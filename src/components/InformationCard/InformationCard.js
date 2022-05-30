import React from "react";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { GiHealingShield } from "react-icons/gi";

import "./InformationCard.css";
import { useMediaQuery } from "@mui/material";

export default function InformationCard() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const fade = useAnimation();

  const isLarge = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (inView && isLarge) {
      leftAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.8,
        },
      });
      
      rightAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.8,
        },
      });

      fade.start({
        opacity: 1,
        transition: {
          duration: 0.8
        }
      })
    }

    if (!inView && isLarge) {
      leftAnimation.start({
        x: "-100vw",
      });

      rightAnimation.start({
        x: "100vw",
      });

      fade.start({
        opacity: 0,
        transition: {
          duration: 0.8
        }
      })
    }
  }, [leftAnimation, rightAnimation, fade, isLarge, inView]);

  return (
    <>
      <div className="information-card" ref={ref}>
        <motion.div
          className="information-card-container"
          animate={leftAnimation}
        >
          <RiWindyFill className="information-card_icon" />
          <span className="information-card_title">Purify the Air</span>
          <p className="information-card_para">
            These plants emit water vapor, which causes a pumping action that
            pulls contanimated air down to the roots of the plan, in which they
            convert the contaminates to plant food
          </p>
        </motion.div>
        <motion.div className="information-card-container" animate={fade}>
          <WiHumidity className="information-card_icon" />
          <span className="information-card_title">Improve Humidity</span>
          <p className="information-card_para">
            Since they release water, they improve the humidity in your home.
            Because of increased moisture they can improve common health
            complaints such as:
          </p>
          <div className="information-card_list">
            <ul>
              <li>Dry cough</li>
              <li>Dry skin</li>
              <li>Sore throat</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="information-card-container"
          animate={rightAnimation}
        >
          <GiHealingShield className="information-card_icon" />
          <span className="information-card_title">Help with Healing</span>
          <p className="information-card_para">
            Agave and Aloe Vera succulents can be used to reduce inflammation,
            treat cuts and burns, and speed up wound healin
          </p>
        </motion.div>
      </div>
    </>
  );
}
