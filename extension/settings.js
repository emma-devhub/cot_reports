// settings.js

const PROFILE_FIELDS = [
  'first_name', 'last_name', 'email', 'phone',
  'linkedin', 'github', 'website', 'location',
  'work_auth', 'sponsorship', 'salary', 'start_date', 'years_exp',
];

// ── Emma's pre-filled data ─────────────────────────────────────────────────
const DEFAULT_PROFILE = {
  first_name:  'Emma',
  last_name:   'Sun',
  full_name:   'Yi "Emma" Sun',
  email:       'emmayisun@gmail.com',
  phone:       '(917) 741-8373',
  location:    'San Francisco, CA',
  linkedin:    '',
  github:      '',
  website:     '',
  work_auth:   'Yes, authorized to work in the US',
  sponsorship: 'No',
  salary:      'Open to discussion',
  start_date:  '2 weeks after offer',
  years_exp:   '7',
};

const DEFAULT_RESUME = `Yi "Emma" Sun | emmayisun@gmail.com | (917) 741-8373 | San Francisco, CA

EXPERIENCE

Product Manager, AI-Powered Enterprise Platforms — Commure (Oct 2023 – Apr 2024)
- Led product discovery across billing workflows at 150+ healthcare organizations, delivering an AI-assisted coding workflow with human review: 20% revenue uplift, 25% fewer denials
- Identified churn risk signals through customer interviews, led ML-driven health scoring model: reduced churn 50%, closed $2M in revenue gaps
- Defined success metrics benchmarking AI output against 3 years of historical claims data; designed CPT suggestion output with confidence scores and medical necessity evidence

Product Manager & AI Strategy — JPMorgan Securities (Sep 2021 – Sep 2023)
- Identified untapped alt data in earnings call audio; pitched, designed, and delivered speech-to-signal AI pipeline: improved LLM fine-tuning precision 30%, generated $5M in new revenue
- Led 0-to-1 NLP-powered research feed with personalized recommendations: grew DAU 15x, ranked #1 in annual client survey
- Led data strategy for trade-recommendation engine: increased trading volume 30%, profit 45%

Product Manager, Trading Platform & Algorithms — Société Générale (Feb 2019 – Jul 2021)
- User interviews revealed one missing feature drove 50% of flow to competitors; redesigned interaction model: 300% user growth, 170% trading flow increase, 120% profit uplift
- Proposed and led ML-based dynamic pricing algorithm: improved overall profitability 20%

AI PROJECTS

ChatGeneT (May–Nov 2025)
- Led AI patient simulator deployed across 30+ hospitals for standardized clinical training
- Defined dialogue taxonomy, annotation guidelines, synthetic SFT training data
- Achieved 0.31% hallucination rate, 0.87 anthropomorphism score, CSAT 4.5/5, 500+ doctors trained

Decoding the Beige Book — ACM ICAIF '25 Oral (Nov 2024 – Apr 2025)
- Built text-to-signal LLM pipeline: 526 Beige Book documents, 56,000+ topic entries → macro risk signals
- Multi-model evaluation (GPT/Claude/Gemini/FinBERT/Mistral), LiRA prompting, temporal masking
- Peak F1 0.89 in recession nowcasting; accepted as oral presentation (15% acceptance rate)

EDUCATION
Georgia Tech — MS Computer Science, AI concentration, GPA 4.00 (2024–2025)
Columbia University — MA Mathematics of Finance, GPA 3.84 (2017–2018)
Nankai University — BA Economics (2013–2017)

SKILLS
Product: user research, PRDs, prioritization, roadmapping, A/B testing
AI: prompt engineering, model evaluation, LLM fine-tuning, HITL systems
Tools: Python, SQL, PyTorch, LangChain, Figma, Looker, Tableau, Retool
Languages: Mandarin (native), English (fluent)`;

const DEFAULT_CORPUS = [
  `At Commure, a key client came in with an urgent dashboarding request and a hard deadline. No single team owned it — ops could do it manually, product could build it properly, but eng had a packed backlog. I reframed the problem: instead of "who builds this," I asked "what does the client actually need to not churn right now." I pulled together a Looker-based solution with manual ops adjustments. The client accepted it, hit the deadline, didn't churn. The Looker UI became a working prototype that de-risked eng's eventual build and pre-answered half the PRD questions.`,

  `At Commure I identified churn risk through customer interviews and usage data, then pitched and led the build of an ML-driven customer health scoring system. I defined the KPIs, worked with data science to identify leading churn signals, and enabled ops teams to proactively reach at-risk accounts. We cut churn by 50% and recovered $2M in revenue gaps.`,

  `At JPMorgan I proposed the Fedspeak audio-to-signal pipeline after noticing analysts were manually transcribing Fed speeches to extract trading signals. I translated qualitative analyst judgment into labeling logic engineers could build against — a structured spec with examples and edge cases, not code. I stayed in the loop reviewing outputs and flagging when the pipeline missed what a human reader would catch. Result: 30% improvement in LLM fine-tuning precision, $5M in new revenue.`,

  `At JPMorgan I led data strategy for a trade-recommendation engine. I defined ground truth standards, built annotation guidelines, and operationalized labeling workflows across large-scale unstructured client conversations. I also ran A/B tests to validate the feed UI and deliberately constrained v1 KPIs to accuracy and speed of information delivery. Post-launch: 80% of active users made it must-read content, trading volume up 30%, profit up 45%.`,

  `At Société Générale, user interviews revealed one missing feature was driving 50% of flow to competitors. I redesigned the interaction model to ship a lightweight alternative without a full rebuild. That single change drove 300% user growth, 170% trading flow increase, and 120% profit uplift.`,

  `I led ChatGeneT, an AI patient simulator deployed across 30+ hospitals for standardizing clinical training. I designed a verification layer that caught a dangerous failure mode where the model cited sources that existed but didn't match the referenced content. That human-review-to-prompt-design feedback loop is how we reached 0.31% hallucination rate, CSAT 4.5/5, and supported 500+ junior doctors. I also used Claude Code to prototype clinical data dashboard designs — showing working prototypes instead of static mockups completely changed how fast we aligned on direction.`,

  `For the Beige Book project I built an end-to-end text-to-signal LLM pipeline converting 526 Beige Book documents and 56,000+ topic entries into macro risk signals. I designed the topic taxonomy and annotation standards, then evaluated across GPT/Claude/Gemini/FinBERT/Mistral using LiRA-style prompting and temporal masking to prevent data leakage. Peak F1 0.89 in recession nowcasting. Accepted as oral presentation at ACM ICAIF '25 (15% acceptance rate).`,

  `What I'm looking for is a role where the product actually has to work — not good enough for a demo, but reliable enough that a doctor, a trader, or an engineer would stake something real on it. At Commure the margin for error was different when output affected patient records or billing decisions. At JPMorgan it was financial signals. I went back for CS to close the gap between what I could specify and what I could actually build. Now I want to bring both together where technical depth makes a real difference in what gets shipped.`,
];
// ──────────────────────────────────────────────────────────────────────────


async function load() {
  const stored = await chrome.storage.local.get([
    'profile', 'corpus', 'apiKey', 'model', 'wordLimit', 'resumeText',
  ]);

  // Use stored values if they exist, otherwise fall back to defaults
  const profile = (stored.profile && Object.keys(stored.profile).length)
    ? stored.profile
    : DEFAULT_PROFILE;

  document.getElementById('api-key').value    = stored.apiKey    ?? '';
  document.getElementById('model').value      = stored.model     ?? 'gemini-2.0-flash';
  document.getElementById('word-limit').value = stored.wordLimit ?? 150;
  document.getElementById('resume_text').value =
    stored.resumeText ?? DEFAULT_RESUME;
  document.getElementById('corpus').value =
    stored.corpus?.length ? stored.corpus.join('\n\n') : DEFAULT_CORPUS.join('\n\n');

  for (const key of PROFILE_FIELDS) {
    const el = document.getElementById(key);
    if (el) el.value = profile[key] ?? '';
  }
}

async function save() {
  const profile = {};
  for (const key of PROFILE_FIELDS) {
    const val = document.getElementById(key)?.value.trim();
    if (val) profile[key] = val;
  }

  if (profile.first_name && profile.last_name) {
    profile.full_name = `${profile.first_name} ${profile.last_name}`;
  }

  const corpusRaw = document.getElementById('corpus').value.trim();
  const corpus = corpusRaw
    ? corpusRaw.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean)
    : [];

  await chrome.storage.local.set({
    profile,
    corpus,
    resumeText: document.getElementById('resume_text').value.trim(),
    apiKey:     document.getElementById('api-key').value.trim(),
    model:      document.getElementById('model').value,
    wordLimit:  parseInt(document.getElementById('word-limit').value, 10),
  });

  const msg = document.getElementById('saved-msg');
  msg.classList.remove('hidden');
  setTimeout(() => msg.classList.add('hidden'), 2000);
}

document.getElementById('btn-save').addEventListener('click', save);

load();
