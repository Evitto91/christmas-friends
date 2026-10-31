import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  Beat,
  COLORS,
  CardItem,
  CardReel,
  ColorRevealHero,
  MessageCard,
  TextBeats,
  textBeatsDuration,
} from "./sharedScenes";

// ---------- Day 1 (Mon 11.02) — Pillar A: pain point hook, no product ----------

const day01Beats: Beat[] = [
  { kicker: "POV", text: "It's December 23rd.", frames: 70 },
  {
    text: "He's already bored of every single toy you bought him.",
    emoji: "😩",
    fontSize: 56,
    frames: 95,
  },
  { text: "Every. Single. Year.", emoji: "🎄", frames: 65 },
];
const day01BeatsDuration = textBeatsDuration(day01Beats);
export const DAY01_DURATION = day01BeatsDuration + 90;

export const Day01HookBoredToys: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day01BeatsDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day01Beats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day01BeatsDuration}
      durationInFrames={90}
      layout="absolute-fill"
    >
      <MessageCard
        kicker="The fix is coming"
        headline="Follow for the fix 👀"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 2 (Tue 11.03) — Pillar A: "3 signs" listicle ----------

const day02Beats: Beat[] = [
  {
    kicker: "Be honest",
    text: "3 signs your kid has officially hit\n'too much screen time' this break:",
    fontSize: 54,
    frames: 80,
  },
  { text: "1. Negotiating screen time like a lawyer", emoji: "⚖️", frames: 70 },
  { text: "2. Meltdown the second the tablet's gone", emoji: "📱", frames: 70 },
  { text: "3. '5 more minutes'... for the 5th time", emoji: "😅", frames: 70 },
];
const day02BeatsDuration = textBeatsDuration(day02Beats);
export const DAY02_DURATION = day02BeatsDuration + 90;

export const Day02ScreenTimeSigns: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day02BeatsDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day02Beats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day02BeatsDuration}
      durationInFrames={90}
      layout="absolute-fill"
    >
      <MessageCard
        headline="Raise your hand if this is your house 🙋‍♀️"
        subhead="Comment your kid's age 👇"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 3 (Wed 11.04) — Pillar C: satisfying color reveal ----------

export const DAY03_DURATION = 24 + 140 + 8 + 70;

export const Day03ColoringReveal: React.FC = () => (
  <ColorRevealHero
    file="pin01-santa-claus"
    kicker="Okay but this is strangely satisfying"
    closingText="Which character would YOU color first? 🎨"
    background={`linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.sky} 100%)`}
  />
);

// ---------- Day 4 (Thu 11.05) — Pillar B: character spotlight (3 of 24) ----------

const day04Items: CardItem[] = [
  { file: "pin24-chief-toy-elf", label: "Chief Toy Elf" },
  { file: "pin03-magical-reindeer", label: "Magical Reindeer" },
  { file: "pin07-christmas-fairy", label: "Christmas Fairy" },
];
const DAY04_REEL_FRAMES = 70;
export const DAY04_DURATION = day04Items.length * DAY04_REEL_FRAMES + 90;

export const Day04MeetTheElf: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day04Items.length * DAY04_REEL_FRAMES}
      layout="absolute-fill"
    >
      <CardReel
        items={day04Items}
        frameEach={DAY04_REEL_FRAMES}
        headline="24 characters. Meet 3 of them 🎄"
        background={`linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`}
      />
    </Sequence>
    <Sequence
      from={day04Items.length * DAY04_REEL_FRAMES}
      durationInFrames={90}
      layout="absolute-fill"
    >
      <MessageCard
        headline="Follow to meet all 24 👀"
        background={`linear-gradient(180deg, ${COLORS.redDark} 0%, ${COLORS.redDeep} 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);

// ---------- Day 5 (Fri 11.06) — Pillar A/D: listicle -> product reveal, first CTA ----------

const day05Beats: Beat[] = [
  {
    text: "Things that survive a car ride, a waiting room,\nAND a sugar crash:",
    fontSize: 52,
    frames: 80,
  },
  { text: "✅ No batteries to lose", frames: 55 },
  { text: "✅ No tiny pieces to step on", frames: 55 },
  { text: "✅ No screen required", frames: 55 },
];
const day05BeatsDuration = textBeatsDuration(day05Beats);
export const DAY05_DURATION = day05BeatsDuration + 110;

export const Day05SurvivalKit: React.FC = () => (
  <AbsoluteFill>
    <Sequence
      from={0}
      durationInFrames={day05BeatsDuration}
      layout="absolute-fill"
    >
      <TextBeats beats={day05Beats} background={COLORS.ink} />
    </Sequence>
    <Sequence
      from={day05BeatsDuration}
      durationInFrames={110}
      layout="absolute-fill"
    >
      <MessageCard
        kicker="The answer:"
        headline="Christmas Friends"
        subhead="24 characters to color. Zero chaos."
        ctaLine="🔗 Link in bio"
        image="cover.png"
        headlineColor={COLORS.red}
        background={`linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.sky} 55%, #FFFFFF 100%)`}
      />
    </Sequence>
  </AbsoluteFill>
);
