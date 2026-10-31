import { Composition } from "remotion";
import { CONVERSION_REEL_DURATION, ConversionReel } from "./ConversionReel";
import {
  DAY01_DURATION,
  DAY02_DURATION,
  DAY03_DURATION,
  DAY04_DURATION,
  DAY05_DURATION,
  Day01HookBoredToys,
  Day02ScreenTimeSigns,
  Day03ColoringReveal,
  Day04MeetTheElf,
  Day05SurvivalKit,
} from "./week1Reels";
import {
  DAY06_DURATION,
  DAY07_DURATION,
  DAY08_DURATION,
  DAY09_DURATION,
  DAY10_DURATION,
  Day06TierList,
  Day07ClassroomGift,
  Day08FlipThrough24,
  Day09SetupVsColor,
  Day10ChristmasEveBox,
} from "./week2Reels";

const VERTICAL = { fps: 30, width: 1080, height: 1920 } as const;

export const MyComposition = () => {
  return (
    <>
      <Composition
        id="ConversionReel"
        component={ConversionReel}
        durationInFrames={CONVERSION_REEL_DURATION}
        {...VERTICAL}
      />

      {/* Week 1 — growth, no hard CTA until day 5 */}
      <Composition
        id="Day01-HookBoredToys"
        component={Day01HookBoredToys}
        durationInFrames={DAY01_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day02-ScreenTimeSigns"
        component={Day02ScreenTimeSigns}
        durationInFrames={DAY02_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day03-ColoringReveal"
        component={Day03ColoringReveal}
        durationInFrames={DAY03_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day04-MeetTheElf"
        component={Day04MeetTheElf}
        durationInFrames={DAY04_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day05-SurvivalKit"
        component={Day05SurvivalKit}
        durationInFrames={DAY05_DURATION}
        {...VERTICAL}
      />

      {/* Week 2 — show the product, CTA stays light */}
      <Composition
        id="Day06-TierList"
        component={Day06TierList}
        durationInFrames={DAY06_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day07-ClassroomGift"
        component={Day07ClassroomGift}
        durationInFrames={DAY07_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day08-FlipThrough24"
        component={Day08FlipThrough24}
        durationInFrames={DAY08_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day09-SetupVsColor"
        component={Day09SetupVsColor}
        durationInFrames={DAY09_DURATION}
        {...VERTICAL}
      />
      <Composition
        id="Day10-ChristmasEveBox"
        component={Day10ChristmasEveBox}
        durationInFrames={DAY10_DURATION}
        {...VERTICAL}
      />
    </>
  );
};
