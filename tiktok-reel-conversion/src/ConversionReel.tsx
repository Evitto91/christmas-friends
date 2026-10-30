import React from "react";
import {
  AbsoluteFill,
  CanvasImage,
  Easing,
  Interactive,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { bodyFont, headlineFont } from "./fonts";

const COLORS = {
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

const CHARACTERS = [
  "pin01-santa-claus.png",
  "pin02-helper-elf.png",
  "pin03-magical-reindeer.png",
  "pin04-snowman.png",
  "pin05-christmas-angel.png",
  "pin09-christmas-gnome.png",
  "pin10-festive-penguin.png",
  "pin11-christmas-owl.png",
  "pin12-polar-bear-cub.png",
  "pin14-christmas-bunny.png",
  "pin15-fox-with-fairy-lights.png",
  "pin08-christmas-teddy-bear.png",
  "pin19-candy-cane.png",
  "pin18-christmas-ornament.png",
  "pin23-dancing-snowflake.png",
  "pin24-chief-toy-elf.png",
];

const FRAME_PER_CHAR = 15;

// ---------- Shared pieces ----------

const SnowLayer: React.FC<{ seedOffset?: number }> = ({ seedOffset = 0 }) => {
  const frame = useCurrentFrame();
  const flakes = new Array(26).fill(0).map((_, i) => {
    const seed = i * 97 + seedOffset * 13;
    const x = (seed * 37) % 1080;
    const size = 4 + (seed % 7);
    const speed = 0.9 + ((seed * 7) % 10) / 10;
    const sway = 18 + (seed % 20);
    const startY = (seed * 53) % 1920;
    const y = ((startY + frame * speed * 2) % (1920 + 40)) - 20;
    const swayX = x + Math.sin(frame / 28 + seed) * sway;
    return { key: i, x: swayX, y, size, opacity: 0.35 + (seed % 5) / 14 };
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none", zIndex: 50 }}>
      {flakes.map((f) => (
        <div
          key={f.key}
          style={{
            position: "absolute",
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            borderRadius: "50%",
            background: "#FFFFFF",
            opacity: f.opacity,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

const popIn = (frame: number, start: number, dur = 16) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 200 }),
    output: "perceptual-scale",
  });

const fadeIn = (frame: number, start: number, dur = 14) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

const fadeInOut = (
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

const Kicker: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = COLORS.gold,
}) => (
  <div
    style={{
      fontFamily: bodyFont,
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: 4,
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </div>
);

// ---------- Scene 1: HOOK (0-90) ----------

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${COLORS.redDark} 0%, ${COLORS.redDeep} 70%, #2A0608 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 90px",
      }}
    >
      <Interactive.Div
        name="HookKicker"
        style={{
          opacity: fadeIn(frame, 2),
          marginBottom: 26,
        }}
      >
        <Kicker color="#FFD7A8">Honestly...</Kicker>
      </Interactive.Div>
      <Interactive.Div
        name="HookHeadline"
        style={{
          scale: popIn(frame, 10, 18),
          opacity: fadeIn(frame, 10, 10),
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 104,
          lineHeight: 1.04,
          textAlign: "center",
          color: "#FFFFFF",
          textShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        Still hunting for the
        <br />
        <span style={{ color: COLORS.gold }}>PERFECT</span> Christmas gift?
      </Interactive.Div>
    </AbsoluteFill>
  );
};

// ---------- Scene 2: PROBLEM (90-180) ----------

const PROBLEM_LINES = [
  { text: "Another year of the SAME toys?", emoji: "😩" },
  { text: "More screen time than you'd like?", emoji: "📱" },
  { text: "Nothing to do on long holiday afternoons?", emoji: "😴" },
];

const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.ink} 0%, #0B1620 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 86px",
      }}
    >
      {PROBLEM_LINES.map((line, i) => {
        const start = i * 45;
        const opacity = fadeInOut(frame, start + 3, start + 32, 10);
        const slide = interpolate(frame, [start, start + 10], [40, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        return (
          <Interactive.Div
            key={i}
            name={`ProblemLine${i}`}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 86px",
              opacity,
              translate: `${slide}px 0px`,
              textAlign: "center",
              fontFamily: headlineFont,
              fontWeight: 700,
              fontSize: 70,
              lineHeight: 1.15,
              color: "#FFFFFF",
            }}
          >
            {line.text} <span style={{ fontSize: 76 }}>{line.emoji}</span>
          </Interactive.Div>
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- Scene 3: REVEAL (180-300) ----------

const RevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.skyDeep} 0%, ${COLORS.sky} 55%, #FFFFFF 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 70px",
      }}
    >
      <Interactive.Div
        name="RevealKicker"
        style={{ opacity: fadeIn(frame, 2), marginBottom: 20 }}
      >
        <Kicker color={COLORS.green}>Meet your new favorite</Kicker>
      </Interactive.Div>

      <Interactive.Div
        name="RevealCover"
        style={{
          scale: popIn(frame, 10, 20),
          opacity: fadeIn(frame, 10, 12),
          width: 620,
          height: 620,
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 30px 60px -20px rgba(21,38,53,0.45)",
          border: "6px solid #FFFFFF",
        }}
      >
        <CanvasImage
          src={staticFile("cover.png")}
          fit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="RevealTitle"
        style={{
          opacity: fadeIn(frame, 50, 12),
          marginTop: 34,
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 76,
          color: COLORS.red,
          textAlign: "center",
        }}
      >
        Christmas Friends
      </Interactive.Div>
      <Interactive.Div
        name="RevealSubtitle"
        style={{
          opacity: fadeIn(frame, 76, 12),
          marginTop: 14,
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 42,
          color: COLORS.ink,
          textAlign: "center",
        }}
      >
        24 characters to color. One very happy kid.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

// ---------- Scene 4: MONTAGE (300-540) ----------

const MontageChip: React.FC<{
  frame: number;
  from: number;
  dur: number;
  children: React.ReactNode;
}> = ({ frame, from, dur, children }) => {
  const opacity = fadeInOut(frame, from + 2, from + dur - 12, 8);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 230,
        left: 60,
        right: 60,
        opacity,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(21,38,53,0.85)",
          borderRadius: 999,
          padding: "20px 40px",
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 40,
          color: "#FFFFFF",
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const MontageScene: React.FC = () => {
  const frame = useCurrentFrame();
  const total = CHARACTERS.length * FRAME_PER_CHAR;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
      }}
    >
      <Interactive.Div
        name="MontageHeadline"
        style={{
          position: "absolute",
          top: 150,
          left: 60,
          right: 60,
          textAlign: "center",
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 58,
          color: "#FFFFFF",
          opacity: fadeIn(frame, 2, 10),
        }}
      >
        24 Christmas Friends inside
      </Interactive.Div>

      {CHARACTERS.map((file, i) => {
        const from = i * FRAME_PER_CHAR;
        const rotate = i % 2 === 0 ? "-2deg" : "2deg";
        return (
          <Sequence
            key={file}
            from={from}
            durationInFrames={FRAME_PER_CHAR}
            layout="absolute-fill"
          >
            <MontageCard file={file} rotate={rotate} />
          </Sequence>
        );
      })}

      <MontageChip frame={frame} from={0} dur={Math.floor(total / 3)}>
        24 HOLIDAY CHARACTERS
      </MontageChip>
      <MontageChip
        frame={frame}
        from={Math.floor(total / 3)}
        dur={Math.floor(total / 3)}
      >
        AGES 3–6 · PRINTABLE
      </MontageChip>
      <MontageChip
        frame={frame}
        from={Math.floor((2 * total) / 3)}
        dur={total - Math.floor((2 * total) / 3)}
      >
        CHRISTMAS EVE BOX FAVORITE
      </MontageChip>
    </AbsoluteFill>
  );
};

const MontageCard: React.FC<{ file: string; rotate: string }> = ({
  file,
  rotate,
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, FRAME_PER_CHAR], [1, 1.09], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(
    frame,
    [0, 3, FRAME_PER_CHAR - 3, FRAME_PER_CHAR],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", opacity }}
    >
      <div
        style={{
          scale,
          rotate,
          width: 760,
          height: 760,
          background: "#FFFFFF",
          borderRadius: 36,
          boxShadow: "0 24px 50px -16px rgba(0,0,0,0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CanvasImage
          src={staticFile(`characters/${file}`)}
          fit="contain"
          style={{ width: "92%", height: "92%" }}
        />
      </div>
    </AbsoluteFill>
  );
};

// ---------- Scene 5: URGENCY (540-630) ----------

const UrgencyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 6) * 0.03;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 100% at 50% 50%, ${COLORS.redDeep} 0%, #220507 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      <Interactive.Div
        name="UrgencyEmoji"
        style={{
          fontSize: 120,
          opacity: fadeIn(frame, 2, 10),
          scale: pulse,
          marginBottom: 20,
        }}
      >
        ⏳
      </Interactive.Div>
      <Interactive.Div
        name="UrgencyHeadline"
        style={{
          scale: popIn(frame, 6, 16),
          opacity: fadeIn(frame, 6, 10),
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 86,
          lineHeight: 1.08,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Christmas is closer
        <br />
        than you think.
      </Interactive.Div>
      <Interactive.Div
        name="UrgencySub"
        style={{
          opacity: fadeIn(frame, 36, 12),
          marginTop: 26,
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 44,
          color: "#FFD7A8",
          textAlign: "center",
        }}
      >
        Don't wait for the last-minute rush.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

// ---------- Scene 6: CTA (630-750) ----------

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 7) * 0.035;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      <Interactive.Div
        name="CtaCover"
        style={{
          scale: popIn(frame, 4, 16),
          opacity: fadeIn(frame, 4, 10),
          width: 420,
          height: 420,
          borderRadius: 24,
          overflow: "hidden",
          border: "6px solid #FFFFFF",
          boxShadow: "0 24px 50px -16px rgba(0,0,0,0.45)",
          marginBottom: 40,
        }}
      >
        <CanvasImage
          src={staticFile("cover.png")}
          fit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="CtaButton"
        style={{
          opacity: fadeIn(frame, 24, 10),
          scale: pulse,
          background: COLORS.gold,
          color: "#3A2A05",
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 56,
          padding: "26px 56px",
          borderRadius: 999,
          boxShadow: "0 18px 34px -10px rgba(0,0,0,0.5)",
        }}
      >
        GET YOUR COPY
      </Interactive.Div>

      <Interactive.Div
        name="CtaLink"
        style={{
          opacity: fadeIn(frame, 46, 10),
          marginTop: 30,
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 42,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        🔗 Link in bio · mybook.to/ChristmasFriends
      </Interactive.Div>

      <Interactive.Div
        name="CtaFooter"
        style={{
          opacity: fadeIn(frame, 60, 10),
          marginTop: 22,
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 32,
          color: "#FFD7A8",
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Christmas Friends · Pencildale · Available on Amazon
      </Interactive.Div>
    </AbsoluteFill>
  );
};

// ---------- Root ----------

export const ConversionReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Sequence from={0} durationInFrames={90} layout="absolute-fill">
        <HookScene />
      </Sequence>
      <Sequence from={90} durationInFrames={135} layout="absolute-fill">
        <ProblemScene />
      </Sequence>
      <Sequence from={225} durationInFrames={120} layout="absolute-fill">
        <RevealScene />
      </Sequence>
      <Sequence from={345} durationInFrames={240} layout="absolute-fill">
        <MontageScene />
      </Sequence>
      <Sequence from={585} durationInFrames={90} layout="absolute-fill">
        <UrgencyScene />
      </Sequence>
      <Sequence from={675} durationInFrames={120} layout="absolute-fill">
        <CtaScene />
      </Sequence>
      <SnowLayer />
    </AbsoluteFill>
  );
};

export const CONVERSION_REEL_DURATION = 795;
