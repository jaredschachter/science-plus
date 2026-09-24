# Science Plus — Archive Content Plan

Source: Ray's Google Drive "Science Plus" folder (shared from schachter.ray@gmail.com).
Full per-session inventory lives in the three `drive-index-part*.md` files (scratchpad).

## 1. What's actually in the Drive

**~60 session folders spanning 2013–2026.** The archive splits cleanly into two eras:

| Era | Sessions | What exists |
|---|---|---|
| 2013–2019 (in person) | ~25 | Slide decks (PPT/PDF), Outlook announcement emails, a few description docs. **No recordings.** Several folders are empty. |
| 2020–2026 (Zoom) | ~45 | Full video recording + audio-only + chat log for nearly every session. Some have slides, abstracts, or Zoom AI summaries. |

**The recordings are the treasure.** ~45 talks, 200MB–1.6GB each, roughly 25GB total. Speakers include
Leonard Susskind (Stanford), Neil Turok (Perimeter), Suzanne Simard (UBC), Neil Shubin, Rebecca Goldstein,
Susan Neiman, James Galbraith, Michael Hayden, Marco Marra, Amy Kurzweil, Thomas Lin (Quanta),
Janice Stein, Tim Maudlin, Michel Laberge (General Fusion), and many more.

**Consent does NOT yet exist — corrected finding.** The 2026 email titled "Consent to put the recording of
your presentations on web-site" has now been extracted and read. It is Ray's *outbound request only*:

- Sent 2026-05-27 to exactly **three** speakers: Annie Ciernia, Andrew Standley, Graziella Caprarelli
- Verbatim ask: *"I have finally started working on a website. I would like to include a link to the
  recordings of your presentations. Can you give me consent to do this."*
- **No replies are contained in the file.** Consented: none documented. Declined: none.
- Every other speaker — Raussendorf, Dietrich, Braun, Lawrence/Shipman, Schensul, Lin, Shubin, Amruth,
  Shapiro, Dunlop, Maudlin and the rest — **was never asked.**

**Consequence: zero recordings currently have documented permission to publish.** No video goes on the site
yet. Ray needs to (a) find reply threads dated after 2026-05-27, and (b) send a consent request to every
speaker whose talk he wants published. The site can ship in the meantime with titles, abstracts and bios —
none of which require recording consent — and videos switch on per speaker as permissions arrive. This fits
the per-talk access model already chosen.

**Speaker name resolved: Andrew Standley** (he/him), not "Judith." Two independent emails confirm it,
including one addressed directly to apstandley@gmail.com, and the announcement uses his/he throughout while
attributing the art-history degree to him ("B.A. in History of Art from University of Cambridge"). The sole
"Judith" source was the Zoom AI summary, whose own footer says "AI can make mistakes." No site change needed —
the presenters page already says Andrew.

**Still unresolved: Bianca Dietrich vs. Diettrich.** The Zoom asset and one of Ray's emails spell it
differently. Verify against Perimeter Institute before publishing.

## 2. The three problems to solve

### Problem A: descriptions are trapped in Outlook `.msg` files
Most sessions' only written description is an announcement email saved as `.msg`. Google Drive can't read
these. Several are literally titled "Title, short description and articles." **Fix:** download the `.msg`
files locally and parse them (straightforward), or pull the same threads from Ray's Gmail.
This is the single highest-value unlock — it would give real titles and abstracts for ~30 sessions.

### Problem B: video hosting
25GB of MP4 cannot live in the website folder. Vercel is not a video host. Options in section 4.

### Problem C: privacy screening — REQUIRED before publishing
The indexing turned up material that must not go on a public site:
- **Ray's personal financial documents** (a bank reconciliation PDF, a contractor estimate) misfiled in a 2014 folder
- **Ray's personal medical history** inside the Bernstein 2026 Zoom summary
- **Health details about named attendees** in several Zoom chat logs ("Jay received her second Pfizer shot…"), plus a participant's COVID status and private host asides
- **17 scanned book pages** from Amy Kurzweil's memoir (copyright)
- **A 2.6GB film screener** ("Let There Be Light") with likely redistribution restrictions
- **Mark Jellinek's personal career-narrative draft**, marked "draft share"

Nothing gets published without a pass over the specific session's files.

## 3. Data quality notes (cleanup while we go)

- **Empty folders**: 2013 and 2018 year folders; Janice Stein (June 2025 — no recording anywhere);
  Bill Unruh/LIGO; Steve Sawyer; John Mail; Ron Burnett; Larry Wasserman; Autonomous Driving
- **Broken recordings**: Bossis (psychedelics) is seconds long; Rachlis is suspiciously small
- **Duplicates**: the "2022 01 18 Kojevnikov" folder is a byte-identical copy of the 2021-11-16 talk;
  two separate Daniel Schensul folders (one has the recording, one has the bio)
- **Misfiled**: 2013 Simon session under 2014; 2017 sessions under the 2016 folder; a "2027" typo
- **Wrong dates**: Caprarelli folder says 2025 (actually 2026); Ciernia says Apr 21 (recording is Mar 31);
  Kanter says May 21 (recording is May 17); Appelbaum video filename says Dec 18 (actually Nov 15)
- **Name spellings to normalize**: Volter/Volker → Markus Völter; Van Werbeke → Ludovic Van Waerbeke;
  Victor → Viktor T. Toth; Jessie → B. Jesse Shapiro; Michael → Michel Laberge; Kumar Marty → Kumar Murty;
  Bianca Deitrich → Bianca Dietrich; Huntingdon's → Huntington's; "BNI" → BNL (Brookhaven)
- **Verify**: the Standley Zoom summary calls the speaker "Judith Standley"; everything else says Andrew

## 4. Proposed site structure

### The core idea
Turn the Archive page from a "request access" form into a **real browsable archive** — one page per session,
with the recording embedded, the abstract, the speaker bio, and any slides. Roughly 45 session pages.

### Video hosting — recommendation
**YouTube, unlisted, on Ray's own account.** Free, unlimited, handles any device and connection speed,
gives automatic captions (a real accessibility win for this audience), and unlisted means only people with
the link — or the embed on the site — can watch. Nothing is searchable on YouTube itself. Uploading ~45
videos is a one-time afternoon of work.

Alternatives: keep them on Drive and link out (free, works today, but clunky playback and Drive quotas),
or Vimeo (nicer player, ~$20/mo, real privacy controls including domain-locking).

### Page structure
```
/archive              → year-grouped index of all sessions (filterable by topic, searchable)
/session/<slug>       → one page per talk: video, abstract, bio, slides, date
/presenters           → existing page, now linking to each speaker's session(s)
/about                → add Ray's origin story (see below)
```

### Content we already have good copy for
Several sessions have genuinely strong material ready to use:
- **Ray's own origin statement** (from his 2020 Galbraith introduction): *"Science Plus is a salon which I
  created to bring together a group of curious people… I have indulged in this since 2014 so this is our
  6th year of presentations."* — this belongs on the About page.
- **Annabel Beichman (2023)**: full abstract + *"For billions of years, the solutions to life's problems have
  been tested massively in parallel through the crucible of evolution."*
- **Mark Bernstein (2026)**: his "three A's" for surgeons who err — acknowledge, acquire knowledge, ask forgiveness
- **Michel Laberge (2022)**: *"People say that fusion power is always 40 years in the future no matter when you ask."*
- **Robert Gray (2019)**: *"the more we suppress fires, the worse they will eventually become."*
- **Jeff Joyce (2016)**, **Marco Marra (2017)**, **Miguel Palacios (2019)**, **Andrew Standley (2026)**,
  **Cascade Institute (2026)** — all have real abstracts already readable.

The Zoom chat logs also contain warm audience reactions that would make excellent Quotes-page material
once screened — e.g. *"my 7 year old daughter, who now has new heroes, watched as long as she could."*

### Related content
`architects_of_physics_book.docx` — a complete ~246k-word manuscript, *"The Architects of Physics: Thirty
Minds That Wrote the History of the Physical World"* (Hong Kong Physics Club, 2026), profiling 30 physicists
from Democritus to the Standard Model. Near-final, awaiting portrait artwork. Not Science Plus material
strictly, but from the same community — could be its own page or a "Related" mention if Ray wants.

## 5. Suggested build order

1. **Decide hosting + access** (questions below)
2. **Extract the `.msg` descriptions** — unlocks real abstracts for ~30 sessions
3. **Build one session page** as a template, get Ray's sign-off on the design
4. **Inventory consent** per speaker — publish only what's cleared
5. **Bulk-generate the remaining session pages** from the index
6. **Upload videos** and wire the embeds
7. **Backfill 2013–2019** as text-and-slides entries (no recordings exist)

## Ray's locked wording for session-page recording boxes (email, Aug 1 2026)

- Consent received: "This session was recorded. The link to the recording is: [link]"
- Consent + slides: add "There is also a powerpoint and the link to it is [link]"
- No consent yet: "This session was recorded but consent to publication from the presenter has not yet been received."
- Every session page carries the presenter-recommendations note (see Beichman page) pointing to schachter.ray@gmail.com.
- Aug 13 2026 email: say "online" not "Zoom" site-wide (platform may change); email-only contact confirmed (no phone/address, no contact tab); philosophy row stays; Merrill stays consenting.

## Description-extraction status (2026-08-17, complete)

Drive fully mined across ~20 agent sweeps: every year folder 2013-2026, Other Speakers, Wizards (empty),
Emails from Synergy (2 files), plus full-text search. 33 of 77 session pages now carry verbatim
Ray-written talk descriptions (announcement .msg files parsed via extract-msg; large files recovered from
on-disk tool-result JSON). Remaining ~44 sessions have NO written source anywhere — only recordings,
slides, or scheduling email; they keep card bios until Ray dictates content.

- Session pages are generated by gen_sessions.py (session scratchpad); its SKIP set protects 39
  hand-edited pages — never regenerate those. Deploy ONLY from repo root (vercel from a subdir creates a
  stray project).
- Unpublished finds: Sandy (Alexandra) Steffen tentative fall-2026 session (description in scratchpad
  syn-steffen.md); Kissoon folder holds a confidential personal email (never extract; Ray to move it).
- Open with Ray: Bernstein consent confirm, Schmidt vs Schmitt spelling, recording/powerpoint link
  hosting (Drive link-sharing), Lawrence & Shipman text bios.
