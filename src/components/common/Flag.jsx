import React from "react";
import canada from "../../assets/flags/canada.svg";
import unitedStates from "../../assets/flags/united-states.svg";
import mexico from "../../assets/flags/mexico.svg";
import costaRica from "../../assets/flags/costa-rica.svg";
import france from "../../assets/flags/france.svg";
import italy from "../../assets/flags/italy.svg";
import spain from "../../assets/flags/spain.svg";
import unitedKingdom from "../../assets/flags/united-kingdom.svg";
import switzerland from "../../assets/flags/switzerland.svg";
import morocco from "../../assets/flags/morocco.svg";
import vietnam from "../../assets/flags/vietnam.svg";

const map = {
  ca: canada,
  us: unitedStates,
  mx: mexico,
  cr: costaRica,
  fr: france,
  it: italy,
  es: spain,
  gb: unitedKingdom,
  ch: switzerland,
  ma: morocco,
  vn: vietnam,
};

export default function Flag({ iso, alt }) {
  const src = map[iso?.toLowerCase()];
  if (!src) return null;
  return (
    <div className="inline-block w-6 h-4 mr-2 rounded-sm overflow-hidden align-middle">
      <img
        src={src}
        alt={alt || `${iso.toUpperCase()} flag`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{ aspectRatio: "3/2" }}
      />
    </div>
  );
}
