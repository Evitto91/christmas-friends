import { Composition } from "remotion";
import { CONVERSION_REEL_DURATION, ConversionReel } from "./ConversionReel";

export const MyComposition = () => {
  return (
    <Composition
      id="ConversionReel"
      component={ConversionReel}
      durationInFrames={CONVERSION_REEL_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
