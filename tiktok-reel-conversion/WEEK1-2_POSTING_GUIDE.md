# Christmas Friends — Week 1–2 TikTok videos (growth phase)

10 video renderizzati in `out/`, uno per ciascun giorno del calendario (Mon–Fri, 2 settimane).
Nessuna musica incorporata — aggiungi un trending sound al momento della pubblicazione (vedi nota audio
in fondo), come per il reel di conversione.

| # | File | Data | Pillar | Durata |
|---|------|------|--------|--------|
| 1 | `out/day01-hook-bored-toys.mp4` | Lun 02/11 | A · Hook | 10.7s |
| 2 | `out/day02-screen-time-signs.mp4` | Mar 03/11 | A · Hook | 12.3s |
| 3 | `out/day03-coloring-reveal.mp4` | Mer 04/11 | C · Satisfying | 8.1s |
| 4 | `out/day04-meet-the-elf.mp4` | Gio 05/11 | B · Spotlight | 10s |
| 5 | `out/day05-survival-kit.mp4` | Ven 06/11 | A/D · Hook→Reveal | 11.5s |
| 6 | `out/day06-tier-list.mp4` | Lun 09/11 | B · Spotlight | 12.5s |
| 7 | `out/day07-classroom-gift.mp4` | Mar 10/11 | D · Use-case | 9.2s |
| 8 | `out/day08-flip-through-24.mp4` | Mer 11/11 | C · Satisfying | 14.2s |
| 9 | `out/day09-setup-vs-color.mp4` | Gio 12/11 | A · Hook | 12.8s |
| 10 | `out/day10-christmas-eve-box.mp4` | Ven 13/11 | D · Use-case | 9s |

---

### Day 1 — Lun 02/11 — `day01-hook-bored-toys.mp4`
**Caption:** Every. Single. Year. 🎄 Tell me this isn't you by the 23rd.
**CTA on-screen:** Follow for the fix 👀 (nessun prodotto mostrato)
**Hashtag:** #ChristmasTok #ParentsOfTikTok #HolidayFinds

### Day 2 — Mar 03/11 — `day02-screen-time-signs.mp4`
**Caption:** Raise your hand if this is your house rn 🙋‍♀️
**CTA on-screen:** Comment your kid's age — I've got something for you 👇
**Hashtag:** #ChristmasTok #ParentsOfTikTok #KidsOfTikTok

### Day 3 — Mer 04/11 — `day03-coloring-reveal.mp4`
**Caption:** Found the most satisfying way to kill screen time this Christmas 🎨🎄
**CTA on-screen:** nessuna — "Which character would YOU color first?"
**Hashtag:** #ColoringBookTok #ChristmasTok #BookTok

### Day 4 — Gio 05/11 — `day04-meet-the-elf.mp4`
**Caption:** 24 characters, 1 book, 0 screens. Which one's your favorite? 🎄
**CTA on-screen:** Follow to meet all 24 👀
**Hashtag:** #ChristmasFriends #ChristmasTok #KidsOfTikTok

### Day 5 — Ven 06/11 — `day05-survival-kit.mp4` — prima CTA prodotto del mese
**Caption:** The holiday survival kit nobody tells you about 🎄 Christmas Friends — 24 characters to color, zero chaos.
**CTA on-screen:** 🔗 Link in bio
**Hashtag:** #ChristmasFriends #ChristmasGiftIdeas #HolidayFinds

### Day 6 — Lun 09/11 — `day06-tier-list.mp4`
**Caption:** Don't @ me about where Santa landed 😭🎄
**CTA on-screen:** Which tier would YOU put yours in?
**Hashtag:** #ChristmasFriends #ChristmasTok #ColoringBookTok

### Day 7 — Mar 10/11 — `day07-classroom-gift.mp4`
**Caption:** 25 kids, 1 easy gift, $0 stress. Teachers will thank you 🙏🎄
**CTA on-screen:** Link in bio — before the holiday rush
**Hashtag:** #ChristmasGiftIdeas #BookTok #ParentsOfTikTok

### Day 8 — Mer 11/11 — `day08-flip-through-24.mp4`
**Caption:** The full 24-character flip-through you asked for 🎄📖
**CTA on-screen:** Save this for when you need a gift idea
**Hashtag:** #ColoringBookTok #ChristmasFriends #BookTok

### Day 9 — Gio 12/11 — `day09-setup-vs-color.mp4`
**Caption:** Zero setup. Zero batteries. Zero regret. 🎄
**CTA on-screen:** Link in bio
**Hashtag:** #ChristmasGiftIdeas #ParentsOfTikTok #HolidayFinds

### Day 10 — Ven 13/11 — `day10-christmas-eve-box.mp4`
**Caption:** The Christmas Eve box essential that keeps them busy till Santa gets there 🎅
**CTA on-screen:** Grab yours before the 24th — link in bio
**Hashtag:** #ChristmasEveBox #ChristmasGiftIdeas #ChristmasFriends

---

## Nota audio (vale per tutti e 10)
Upload senza audio incorporato e aggiungi un trending sound TikTok al momento della pubblicazione —
il nativo performa meglio dell'audio pre-cotto. I tagli vanno dagli 8 ai 14s, compatibili con la
maggior parte dei suoni trend brevi.

## Nota sui contenuti
Day 3, 4, 6, 8 mostrano le pagine da colorare così come sono (line art bianco e nero) — è il contenuto
reale del libro, non un errore: coerente con l'MVP del prodotto ("24 characters to color"). Day 3 usa
una passata di colore sfumata in overlay (non un filtro sull'immagine) per dare un effetto "coloring in
progress" senza inventare un colore che l'illustrazione non ha.

## Rigenerare / modificare un video
```bash
cd tiktok-reel-conversion
npx remotion studio   # preview interattiva di tutte le composizioni Day01–Day10
```
Per il render su questo Mac (macOS 12.3), vedi il workaround in [RENDER_NOTES.md](RENDER_NOTES.md) —
stesso procedimento, cambia solo il composition id (es. `Day03-ColoringReveal`).
