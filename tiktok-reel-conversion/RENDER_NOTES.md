# Render notes

Questo progetto Remotion (composizione `ConversionReel`, 1080x1920, 30fps, 750 frame / 25s) è stato
reso su un Mac con **macOS 12.3 (Monterey)**. I binari bundled di Remotion 4.0.539
(`@remotion/compositor-darwin-arm64`: `ffmpeg`, `remotion`, e lo Chrome Headless Shell scaricato
automaticamente) richiedono **macOS 14+** (linkano simboli AVFoundation introdotti con Continuity
Camera) e crashano con `dyld: Symbol not found` su versioni precedenti.

Workaround usato per rigenerare il video su una macchina con macOS vecchio:

1. Node richiede `^18.18.0 || ^20.9.0 || >=21.1.0`: se il Node di sistema è più vecchio, scaricare
   un tarball Node 20 LTS (`nodejs.org/dist/...darwin-arm64.tar.gz`) e anteporlo al `PATH`.
2. Puntare Remotion a Google Chrome già installato in `/Applications` invece dello Chrome Headless
   Shell bundled: `--browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`.
3. Renderizzare come sequenza PNG invece di MP4 diretto (il muxing via `--codec h264` passa dal
   compositor Rust bundled, che crasha):
   `npx remotion render src/index.ts ConversionReel out/frames --sequence --image-format=png --concurrency=1 --browser-executable="..."`
4. Comporre i PNG in MP4 con un ffmpeg compatibile (il pacchetto npm `ffmpeg-static` ha un binario
   che funziona su macOS più vecchi):
   `ffmpeg -y -framerate 30 -i out/frames/element-%03d.png -c:v libx264 -pix_fmt yuv420p -profile:v high -movflags +faststart -r 30 out/conversion-reel.mp4`

Su un Mac aggiornato (macOS 14+) questo non serve: basta `npx remotion render src/index.ts ConversionReel out/conversion-reel.mp4`.

## Rigenerare da zero

```bash
npm i
npx remotion studio   # preview interattiva
npx remotion render src/index.ts ConversionReel out/conversion-reel.mp4
```
