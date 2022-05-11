import React from "react";
import { RiWindyFill } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'
import { GiHealingShield } from 'react-icons/gi'
import "./InformationCard.css";

export default function InformationCard() {
  return (
    <>
      <div className="information-card-container">
        <RiWindyFill className="information-card_icon" />
        <span className="information-card_title">Purify the Air</span>
        <p className="information-card_para">
          These plants emit water vapor, which causes a pumping action that
          pulls contanimated air down to the roots of the plan, in which they
          convert the contaminates to plant food
        </p>
      </div>

      <div className="information-card-container">
        <WiHumidity className="information-card_icon" />
        <span className="information-card_title">Improve Humidity</span>
        <p className="information-card_para">
            Since they release water, they improve the humidity in your home. Because of increased moisture they can improve common health complaints such as: 
        </p>
        <div className="information-card_list">
            <ul>
                <li>Dry cough</li>
                <li>Dry skin</li>
                <li>Sore throat</li>
            </ul>
        </div>
      </div>

      <div className="information-card-container">
        <GiHealingShield className="information-card_icon" />
        <span className="information-card_title">Help with Healing</span>
        <p className="information-card_para">
          Agave and Aloe Vera succulents can be used to reduce inflammation, treat cuts and burns, and speed up wound healin
        </p>
      </div>
    </>
  );
}
