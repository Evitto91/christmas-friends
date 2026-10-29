import { loadFont as loadBaloo2 } from "@remotion/google-fonts/Baloo2";
import { loadFont as loadFigtree } from "@remotion/google-fonts/Figtree";

export const headlineFont = loadBaloo2("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
}).fontFamily;

export const bodyFont = loadFigtree("normal", {
  weights: ["500", "600", "700"],
  subsets: ["latin"],
}).fontFamily;
