import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  ALL_CHARACTER_FILES,
  Beat,
  CHARACTER_NAMES,
  COLORS,
  CardItem,
  CardReel,
  MessageCard,
  TextBeats,
  textBeatsDuration,
} from "./sharedScenes";

// ---------- Day 6 (Mon 11.09) — Pillar B: tier list ----------

const day06Items: CardItem[] = [
  { file: "pin01-santa-claus", label: "Santa Claus", badge: "S TIER" },
  { file: "pin24-chief-toy-elf", label: "Chief Toy Elf", badge: "S TIER" },
  { file: "pin03-magical-reindeer", label: "Magical Reindeer", badge: "A TIER" },
  { file: "pin17-smiling-star", label: "Smiling Star", badge: "A TIER" },
  { file: "pin19-candy-cane", label: "Candy Cane", badge: "B TIER" },
];
const DAY06_REEL_FRAMES = 60;
export const DAY06_DURATION = day06Items.length * DAY06_REEL_FRAMES + 90;

export const Day06TierList: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day06Items.length * DAY06_REEL_FRAMES}
      layout="absolute-fill"
    >
      <CardReel
        items={day06Items}
        frameEach={DAY06_REEL_FRAMES}
        headline="Ranking all 24 Christmas Friends"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
    <Sequence
      from={day06Items.length * DAY06_REEL_FRAMES}
      durationInFrames={90}
      layout="absolute-fill"
    >
      <MessageCard
        headline="Don't @ me about where Santa landed 😭"
        subhead="Which tier would YOU put yours in?"
        background={`linear-gradient(180deg, ${COLORS.redDark} 0%, ${COLORS.redDeep} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 7 (Tue 11.10) — Pillar D: classroom gift use-case ----------

const day07IntroBeats: Beat[] = [
  {
    kicker: "This year",
    text: "What I'm sending to my son's classroom\ninstead of candy:",
    fontSize: 52,
    frames: 85,
  },
];
const day07IntroDuration = textBeatsDuration(day07IntroBeats);
export const DAY07_DURATION = day07IntroDuration + 190;

export const Day07ClassroomGift: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day07IntroDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day07IntroBeats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day07IntroDuration}
      durationInFrames={190}
      layout="absolute-fill"
    >
      <MessageCard
        headline="25 kids. 1 easy gift. $0 stress."
        bullets={["✅ No wrapping marathon", "✅ Works for every kid", "✅ Teachers will thank you 🙏"]}
        ctaLine="Link in bio — before the holiday rush"
        image="cover.png"
        headlineColor={COLORS.red}
        background={`linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.sky} 55%, #FFFFFF 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 8 (Wed 11.11) — Pillar C: flip-through all 24 ----------

const day08Items: CardItem[] = ALL_CHARACTER_FILES.map((file) => ({
  file,
  label: CHARACTER_NAMES[file],
}));
const DAY08_REEL_FRAMES = 14;
export const DAY08_DURATION = day08Items.length * DAY08_REEL_FRAMES + 90;

export const Day08FlipThrough24: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day08Items.length * DAY08_REEL_FRAMES}
      layout="absolute-fill"
    >
      <CardReel
        items={day08Items}
        frameEach={DAY08_REEL_FRAMES}
        headline="The full 24-character flip-through 📖"
        background={`linear-gradient(180deg, ${COLORS.green} 0%, ${COLORS.ink} 100%)`}
      />
    </Sequence>
    <Sequence
      from={day08Items.length * DAY08_REEL_FRAMES}
      durationInFrames={90}
      layout="absolute-fill"
    >
      <MessageCard
        headline="Save this for when you need a gift idea 🎄"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 9 (Thu 11.12) — Pillar A: setup vs. color comparison ----------

const day09Beats: Beat[] = [
  {
    kicker: "Real talk",
    text: "Nobody warns you that 'educational toy' means...",
    fontSize: 52,
    frames: 75,
  },
  { text: "45 minutes of setup", emoji: "🔧", frames: 60 },
  { text: "...for 3 minutes of play.", frames: 60 },
  { text: "Meanwhile:", frames: 45 },
];
const day09BeatsDuration = textBeatsDuration(day09Beats);
export const DAY09_DURATION = day09BeatsDuration + 140;

export const Day09SetupVsColor: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day09BeatsDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day09Beats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day09BeatsDuration}
      durationInFrames={140}
      layout="absolute-fill"
    >
      <MessageCard
        headline="Zero setup. Zero batteries. Zero regret."
        ctaLine="Link in bio"
        image="cover.png"
        headlineColor={COLORS.red}
        background={`linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.sky} 55%, #FFFFFF 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 10 (Fri 11.13) — Pillar D: Christmas Eve box ----------

const day10IntroBeats: Beat[] = [
  {
    text: "What's going in our Christmas Eve box this year",
    emoji: "📦🎄",
    fontSize: 54,
    frames: 85,
  },
];
const day10IntroDuration = textBeatsDuration(day10IntroBeats);
export const DAY10_DURATION = day10IntroDuration + 200;

export const Day10ChristmasEveBox: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day10IntroDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day10IntroBeats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day10IntroDuration}
      durationInFrames={200}
      layout="absolute-fill"
    >
      <MessageCard
        bullets={[
          "🧦 Cozy pajamas",
          "☕ Hot cocoa",
          "🎨 Christmas Friends — keeps them busy till Santa gets there",
        ]}
        headline="The Christmas Eve box essential"
        ctaLine="Grab yours before the 24th — link in bio"
        image="cover.png"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);
