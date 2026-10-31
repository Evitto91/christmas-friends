import React from "react";
import {
  AbsoluteFill,
  CanvasImage,
  Easing,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { bodyFont, headlineFont } from "./fonts";

export const COLORS = {
  red: "#C32A32",
  redDark: "#7E171D",
  redDeep: "#4A0C10",
  green: "#2E7350",
  cream: "#FFF8EC",
  sky: "#EAF3FB",
  skyDeep: "#BEE0F6",
  ink: "#152635",
  gold: "#C98A1E",
};

export const CHARACTER_NAMES: Record<string, string> = {
  "pin01-santa-claus": "Santa Claus",
  "pin02-helper-elf": "Helper Elf",
  "pin03-magical-reindeer": "Magical Reindeer",
  "pin04-snowman": "Snowman",
  "pin05-christmas-angel": "Christmas Angel",
  "pin06-candy-elf": "Candy Elf",
  "pin07-christmas-fairy": "Christmas Fairy",
  "pin08-christmas-teddy-bear": "Christmas Teddy Bear",
  "pin09-christmas-gnome": "Christmas Gnome",
  "pin10-festive-penguin": "Festive Penguin",
  "pin11-christmas-owl": "Christmas Owl",
  "pin12-polar-bear-cub": "Polar Bear Cub",
  "pin13-mouse-in-a-hat": "Mouse in a Hat",
  "pin14-christmas-bunny": "Christmas Bunny",
  "pin15-fox-with-fairy-lights": "Fox with Fairy Lights",
  "pin16-magical-deer": "Magical Deer",
  "pin17-smiling-star": "Smiling Star",
  "pin18-christmas-ornament": "Christmas Ornament",
  "pin19-candy-cane": "Candy Cane",
  "pin20-the-smiling-gift": "The Smiling Gift",
  "pin21-jingle-bell": "Jingle Bell",
  "pin22-christmas-eve-candle": "Christmas Eve Candle",
  "pin23-dancing-snowflake": "Dancing Snowflake",
  "pin24-chief-toy-elf": "Chief Toy Elf",
};

export const ALL_CHARACTER_FILES = Object.keys(CHARACTER_NAMES);

// ---------- animation helpers ----------

export const popIn = (frame: number, start: number, dur = 16) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 200 }),
    output: "perceptual-scale",
  });

export const fadeIn = (frame: number, start: number, dur = 14) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

export const fadeInOut = (
  frame: number,
  inStart: number,
  outStart: number,
  dur = 10,
) =>
  interpolate(
    frame,
    [inStart, inStart + dur, outStart, outStart + dur],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

// ---------- TextBeats: sequential full-screen lines ----------

export type Beat = {
  text: string;
  emoji?: string;
  kicker?: string;
  fontSize?: number;
  frames?: number;
};

const BEAT_DEFAULT_FRAMES = 65;

export const textBeatsDuration = (beats: Beat[]) =>
  beats.reduce((sum, b) => sum + (b.frames ?? BEAT_DEFAULT_FRAMES), 0);

export const TextBeats: React.FC<{
  beats: Beat[];
  background: string;
  textColor?: string;
}> = ({ beats, background, textColor = "#FFFFFF" }) => {
  const frame = useCurrentFrame();
  let cursor = 0;
  const positioned = beats.map((b) => {
    const dur = b.frames ?? BEAT_DEFAULT_FRAMES;
    const start = cursor;
    cursor += dur;
    return { ...b, start, dur };
  });

  return (
    <AbsoluteFill style={{ background }}>
      {positioned.map((b, i) => {
        const opacity = fadeInOut(frame, b.start + 3, b.start + b.dur - 14, 10);
        const slide = interpolate(frame, [b.start, b.start + 10], [40, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 86px",
              opacity,
              translate: `${slide}px 0px`,
              textAlign: "center",
            }}
          >
            {b.kicker && (
              <div
                style={{
                  fontFamily: bodyFont,
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  marginBottom: 20,
                }}
              >
                {b.kicker}
              </div>
            )}
            <div
              style={{
                fontFamily: headlineFont,
                fontWeight: 800,
                fontSize: b.fontSize ?? 66,
                lineHeight: 1.18,
                color: textColor,
              }}
            >
              {b.text}
              {b.emoji && (
                <span style={{ fontSize: (b.fontSize ?? 66) + 10 }}>
                  {" "}
                  {b.emoji}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- MessageCard: single reveal/CTA screen ----------

export const MessageCard: React.FC<{
  kicker?: string;
  headline: string;
  subhead?: string;
  bullets?: string[];
  ctaLine?: string;
  image?: string; // staticFile path, e.g. "cover.png"
  background: string;
  headlineColor?: string;
}> = ({
  kicker,
  headline,
  subhead,
  bullets,
  ctaLine,
  image,
  background,
  headlineColor = "#FFFFFF",
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      {kicker && (
        <div
          style={{
            opacity: fadeIn(frame, 2, 12),
            marginBottom: 22,
            fontFamily: bodyFont,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: COLORS.gold,
          }}
        >
          {kicker}
        </div>
      )}

      {image && (
        <div
          style={{
            scale: popIn(frame, 8, 18),
            opacity: fadeIn(frame, 8, 12),
            width: 420,
            height: 420,
            borderRadius: 24,
            overflow: "hidden",
            border: "6px solid #FFFFFF",
            boxShadow: "0 24px 50px -16px rgba(0,0,0,0.4)",
            marginBottom: 32,
          }}
        >
          <CanvasImage
            src={staticFile(image)}
            fit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      <div
        style={{
          opacity: fadeIn(frame, image ? 24 : 10, 12),
          scale: image ? 1 : popIn(frame, 10, 16),
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 68,
          lineHeight: 1.15,
          textAlign: "center",
          color: headlineColor,
        }}
      >
        {headline}
      </div>

      {subhead && (
        <div
          style={{
            opacity: fadeIn(frame, (image ? 24 : 10) + 24, 12),
            marginTop: 18,
            fontFamily: bodyFont,
            fontWeight: 600,
            fontSize: 38,
            color: headlineColor,
            textAlign: "center",
          }}
        >
          {subhead}
        </div>
      )}

      {bullets && (
        <div
          style={{
            opacity: fadeIn(frame, (image ? 24 : 10) + 24, 12),
            marginTop: 22,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          {bullets.map((bul, i) => (
            <div
              key={i}
              style={{
                fontFamily: bodyFont,
                fontWeight: 600,
                fontSize: 34,
                color: headlineColor,
              }}
            >
              {bul}
            </div>
          ))}
        </div>
      )}

      {ctaLine && (
        <div
          style={{
            opacity: fadeIn(frame, (image ? 24 : 10) + 48, 12),
            marginTop: 30,
            fontFamily: bodyFont,
            fontWeight: 700,
            fontSize: 42,
            color: COLORS.gold,
            textAlign: "center",
          }}
        >
          {ctaLine}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ---------- CardReel: sequence of character cards ----------

export type CardItem = { file: string; label: string; badge?: string };

export const CardReel: React.FC<{
  items: CardItem[];
  frameEach: number;
  headline?: string;
  background: string;
}> = ({ items, frameEach, headline, background }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background }}>
      {headline && (
        <div
          style={{
            position: "absolute",
            top: 140,
            left: 60,
            right: 60,
            textAlign: "center",
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 54,
            color: "#FFFFFF",
            opacity: fadeIn(frame, 2, 10),
          }}
        >
          {headline}
        </div>
      )}

      {items.map((item, i) => (
        <Sequence
          key={item.file}
          from={i * frameEach}
          durationInFrames={frameEach}
          layout="absolute-fill"
        >
          <ReelCard item={item} frameEach={frameEach} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const ReelCard: React.FC<{ item: CardItem; frameEach: number }> = ({
  item,
  frameEach,
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, frameEach], [1, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(
    frame,
    [0, 3, frameEach - 4, frameEach],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", opacity }}
    >
      {item.badge && (
        <div
          style={{
            position: "absolute",
            top: 360,
            background: COLORS.gold,
            color: "#3A2A05",
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 38,
            padding: "10px 28px",
            borderRadius: 999,
            boxShadow: "0 12px 24px -8px rgba(0,0,0,0.4)",
          }}
        >
          {item.badge}
        </div>
      )}
      <div
        style={{
          scale,
          width: 640,
          height: 640,
          background: "#FFFFFF",
          borderRadius: 32,
          boxShadow: "0 24px 50px -16px rgba(0,0,0,0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CanvasImage
          src={staticFile(`characters/${item.file}.png`)}
          fit="contain"
          style={{ width: "90%", height: "90%" }}
        />
      </div>
      <div
        style={{
          marginTop: 28,
          fontFamily: headlineFont,
          fontWeight: 700,
          fontSize: 46,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {item.label}
      </div>
    </AbsoluteFill>
  );
};

// ---------- ColorRevealHero: grayscale-to-color "coloring" reveal ----------

export const ColorRevealHero: React.FC<{
  file: string;
  kicker: string;
  closingText: string;
  background: string;
  revealFrames?: number;
}> = ({ file, kicker, closingText, background, revealFrames = 140 }) => {
  const frame = useCurrentFrame();
  const revealStart = 24;
  // The source pin is a black-and-white coloring page, not a colored
  // illustration — so instead of faking a grayscale->color reveal, sweep a
  // soft multi-color blur across it (multiply blend keeps the ink lines
  // dark) to read as "coloring in progress".
  const sweepX = interpolate(
    frame,
    [revealStart, revealStart + revealFrames],
    [-70, 170],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const closingStart = revealStart + revealFrames + 8;

  return (
    <AbsoluteFill
      style={{
        background,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 70px",
      }}
    >
      <div
        style={{
          opacity: fadeIn(frame, 2, 14),
          marginBottom: 26,
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: 2,
          color: COLORS.gold,
          textAlign: "center",
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          position: "relative",
          width: 640,
          height: 640,
          borderRadius: 32,
          overflow: "hidden",
          background: "#FFFFFF",
          border: "6px solid #FFFFFF",
          boxShadow: "0 30px 60px -20px rgba(21,38,53,0.45)",
        }}
      >
        <CanvasImage
          src={staticFile(`characters/${file}.png`)}
          fit="contain"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-25%",
            left: `${sweepX}%`,
            width: "65%",
            height: "150%",
            background: `linear-gradient(120deg, ${COLORS.red}, ${COLORS.gold}, ${COLORS.green})`,
            filter: "blur(55px)",
            opacity: 0.82,
            mixBlendMode: "multiply",
            transform: "rotate(8deg)",
          }}
        />
      </div>
      <div
        style={{
          opacity: fadeIn(frame, closingStart, 14),
          marginTop: 34,
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 54,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {closingText}
      </div>
    </AbsoluteFill>
  );
};
