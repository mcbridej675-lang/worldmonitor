#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const TESTING_RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  process.exit(1);
}

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 720px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; padding: 0;">
  <div style="background: linear-gradient(90deg, #1e40af, #7c3aed, #dc2626); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #7c3aed;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Defense &bull; Health &bull; Financial Markets &bull; Stocks</p>
    </div>

    <!-- ===================== EVENT 1: STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy &mdash; May 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Skirmishes Threaten Fragile Iran Ceasefire &mdash; Oil Spikes, Equities Slide</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile ceasefire between the U.S. and Iran was tested again on May 8 as skirmishes erupted near the <strong>Strait of Hormuz</strong>. Iran intercepted attacks targeting three Navy ships, while the UAE responded to Iranian missile and drone strikes for a second consecutive day. Saudi Arabia and Kuwait announced they had lifted restrictions on U.S. military access, further escalating tensions. The waterway &mdash; through which <strong>20% of global oil and gas</strong> transits &mdash; has been effectively disrupted since late February.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, the White House claims it is the <strong>closest it has been to a one-page framework agreement</strong> to limit Tehran&rsquo;s nuclear program. Iran&rsquo;s Foreign Minister visited Beijing &mdash; his first trip since the war began &mdash; with China purchasing over 90% of Iran&rsquo;s oil exports. About 50% of China&rsquo;s seaborne oil transited Hormuz before the conflict.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude surged to $101.26 (+1.2%), WTI at $95.64 (+0.9%) after earlier plunging on peace talk optimism. Brent has swung between $108 and $95 this week alone. The Dow shed ~560 points on escalation fears.<br/><br/>
            <strong>Stocks to watch:</strong> Energy majors <strong>Shell (SHEL)</strong>, <strong>BP (BP)</strong>, <strong>TotalEnergies (TTE)</strong>, and <strong>Saudi Aramco (2222.SR)</strong> benefit from elevated crude. Tanker stocks <strong>Frontline (FRO)</strong> and <strong>Euronav (EURN)</strong> rally on rerouting premiums. On the downside, airlines <strong>Lufthansa (LHA.DE)</strong>, <strong>IAG (IAG.L)</strong>, and <strong>Air France-KLM (AF.PA)</strong> face margin compression from jet fuel costs. Defense plays <strong>BAE Systems (BA.L)</strong>, <strong>Rheinmetall (RHM.DE)</strong>, and <strong>Leonardo (LDO.MI)</strong> continue benefiting from heightened regional tensions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TURKEY ICBM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Defense / NATO &mdash; May 6&ndash;7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Turkey Unveils Y&#305;ld&#305;r&#305;mhan ICBM &mdash; 6,000 km Range Puts Europe, Africa &amp; Asia in Crosshairs</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the <strong>SAHA 2026 Defence and Aerospace Exhibition</strong> in Istanbul, Turkey unveiled the <strong>Y&#305;ld&#305;r&#305;mhan</strong>, its first domestically developed intercontinental ballistic missile. With a stated range of <strong>6,000 km</strong>, a top speed of <strong>Mach 25</strong>, and a <strong>3,000 kg payload capacity</strong>, the weapon would put most of Europe, Africa, the Middle East, and much of Central Asia within striking distance. Turkey joins the U.S., Russia, China, France, India, and North Korea in possessing ICBM technology.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The missile remains a <strong>concept/mock-up with no confirmed flight tests</strong>, but its unveiling sends a powerful deterrence signal. NATO allies are watching closely &mdash; Turkey is the first NATO member besides the U.S., UK, and France to develop an intercontinental-range weapon, and it comes at a time when Ankara&rsquo;s relationship with the alliance is already strained over Iran policy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Turkey&rsquo;s domestic defense ambitions accelerate a global arms race dynamic. <strong>Turkish defense firms</strong> like <strong>Aselsan (ASELS.IS)</strong> and <strong>Turkish Aerospace (TUSAS.IS)</strong> on the Borsa Istanbul stand to gain from increased state procurement. European defense stocks <strong>Rheinmetall (RHM.DE)</strong>, <strong>Thales (HO.PA)</strong>, and <strong>SAAB (SAAB-B.ST)</strong> benefit from anticipated NATO spending increases in response. Missile defense specialists <strong>Raytheon/RTX (RTX)</strong> and <strong>MBDA</strong> (Airbus/BAE JV) see heightened relevance. Greek defense spending may accelerate, pressuring Athens&rsquo; fiscal outlook and <strong>Greek sovereign bonds</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: HANTAVIRUS CRUISE SHIP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Travel &mdash; May 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">MV Hondius Hantavirus Outbreak &mdash; 7 Cases, 3 Dead, Global Contact Tracing Launched</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The cruise ship <strong>MV Hondius</strong> is heading to Spain&rsquo;s Canary Islands carrying more than <strong>140 passengers and crew</strong> after a hantavirus outbreak that has killed <strong>3 people</strong> and infected at least 7. Spanish authorities are preparing emergency evacuations upon the ship&rsquo;s expected arrival on <strong>May 9</strong>. The virus has been identified as the <strong>Andes strain</strong>, which is notable for its ability to spread via <strong>limited human-to-human transmission</strong> &mdash; unlike most hantavirus strains.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Contact tracing is now underway in <strong>at least 5 U.S. states, Switzerland, Singapore</strong>, and multiple other countries after 30 passengers disembarked on the remote island of <strong>St. Helena</strong> on April 24, nearly two weeks after the first death. The <strong>WHO</strong> considers the risk to the wider public as low, and the <strong>ECDC</strong> has published assessment guidelines. Repatriation flights for American passengers are being arranged.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Cruise stocks already under pressure: <strong>Norwegian Cruise Line (NCLH)</strong> dropped 8.6% after slashing 2026 guidance, closing at $17.20. <strong>Carnival (CCL)</strong> and <strong>Royal Caribbean (RCL)</strong> face sentiment headwinds even though fuel costs and weak forward pricing &mdash; not the outbreak &mdash; drove the guidance cut. The hantavirus scare adds a new overhang. Expedition operator <strong>Oceanwide Expeditions</strong> (private) faces severe reputational damage. Conversely, diagnostic and biotech names like <strong>bioM&eacute;rieux (BIM.PA)</strong> and <strong>Hologic (HOLX)</strong> may see renewed interest in infectious disease preparedness plays. Travel insurance demand could benefit <strong>Allianz (ALV.DE)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: BOJ / BOE CENTRAL BANK DIVERGENCE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Central Banks / Macro &mdash; May 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Central Bank Divergence: BOJ Doubles Inflation Forecast, BOE Holds at 3.75%, Spain Unemployment Surges</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Bank of Japan</strong> revised its FY2026 inflation forecast sharply higher to <strong>2.8% (from 1.9%)</strong> while <strong>halving its growth forecast to just 0.5%</strong> &mdash; a classic stagflation signal driven by the Middle East energy shock. The BOJ faces an impossible trade-off: inflation demands tightening, but collapsing growth argues against it. The yen remains under pressure at <strong>&yen;156.5/USD</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Bank of England</strong> held its base rate at <strong>3.75%</strong>, noting &ldquo;highly uncertain&rdquo; energy price prospects and pledging to &ldquo;stand ready to act as necessary.&rdquo; Meanwhile, <strong>Spain&rsquo;s unemployment climbed to 10.83%</strong> in Q1 2026 &mdash; markedly above expectations &mdash; raising concerns about the eurozone&rsquo;s southern periphery. South Korean inflation hit <strong>near two-year highs</strong> due to the same oil shock.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            USD strengthened against both EUR and JPY. Eurozone sovereign yields edged higher at the short end, flat at longer maturities. U.S. Treasury yields rose.<br/><br/>
            <strong>Stocks to watch:</strong> Japanese exporters <strong>Toyota (7203.T)</strong>, <strong>Sony (6758.T)</strong>, and <strong>Nintendo (7974.T)</strong> benefit from yen weakness but face domestic cost pressures. UK homebuilders <strong>Persimmon (PSN.L)</strong> and <strong>Barratt (BDEV.L)</strong> remain under pressure with rates on hold. Spanish banks <strong>CaixaBank (CABK.MC)</strong> and <strong>Bankinter (BKT.MC)</strong> face credit risk from rising unemployment. Currency plays: long USD/JPY remains the consensus macro trade. <strong>WisdomTree Japan Hedged ETF (DXJ)</strong> benefits from the weak-yen/export dynamic.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: DUTCH POLITICAL BOMBING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Europe / Political Violence &mdash; May 7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Letter Bomb Explodes at Dutch PM&rsquo;s D66 Party Headquarters in The Hague</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A bomb <strong>pushed through a letter box</strong> exploded at the headquarters of <strong>D66</strong>, the party of Dutch Prime Minister <strong>Rob Jetten</strong>, in The Hague on Thursday. No one was injured. Police arrested a <strong>37-year-old suspect</strong> late Thursday at the scene. The attack marks a rare act of political violence in the Netherlands and comes amid heightened tensions across European politics.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, police in <strong>Germany</strong> stormed a Volksbank branch in the Rhine valley town of <strong>Sinzig</strong> near Koblenz, rescuing two hostages unharmed from a locked room. Special forces found no hostage-takers upon entry. In <strong>Uganda</strong>, parliament passed a controversial sovereignty law that critics fear could be &ldquo;weaponized to further crush dissent.&rdquo; The pattern of political instability across multiple continents continues to unsettle investors.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Political violence in a stable Western European democracy raises the risk premium on European assets. The <strong>AEX index (Amsterdam)</strong> showed muted reaction given no casualties, but the broader signal of political radicalization weighs on European equity sentiment alongside the ongoing energy shock. European security firms <strong>Securitas (SECU-B.ST)</strong> and <strong>G4S/Allied Universal</strong> (private) see demand tailwinds. Dutch government bonds (DSLs) were stable but watch for widening if political instability persists. The euro&rsquo;s weakness against the dollar partly reflects this accumulation of European political and economic risks.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Market Snapshot &mdash; May 8, 2026</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
          <tr style="border-bottom: 1px solid #222;">
            <td style="color: #888; padding: 8px 0; font-weight: 700;">Asset</td>
            <td style="color: #888; padding: 8px 0; text-align: right; font-weight: 700;">Level</td>
            <td style="color: #888; padding: 8px 0; text-align: right; font-weight: 700;">Signal</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #ccc; padding: 8px 0;">Brent Crude</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">$101.26</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">&#9650; Volatile</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #ccc; padding: 8px 0;">WTI Crude</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">$95.64</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">&#9650; Volatile</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #ccc; padding: 8px 0;">USD/JPY</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">&yen;156.5</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">&#9650; USD strong</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #ccc; padding: 8px 0;">EUR/USD</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">Weakening</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">&#9660; EUR pressure</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #ccc; padding: 8px 0;">European Equities</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">Down</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">&#9660; Risk-off</td>
          </tr>
          <tr>
            <td style="color: #ccc; padding: 8px 0;">US Treasuries</td>
            <td style="color: #fff; padding: 8px 0; text-align: right;">Yields rising</td>
            <td style="color: #ea580c; padding: 8px 0; text-align: right;">&#9650; Hawkish tilt</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Strait of Hormuz remains the single biggest variable for global markets.</strong> Oil has swung $13/barrel this week alone on alternating ceasefire hopes and escalation fears. Any confirmed deal would send crude plunging and trigger a massive rotation out of energy into beaten-down consumer discretionary and airline names. Conversely, a ceasefire collapse could push Brent past $120, further squeezing an already stagflationary global economy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Central banks are trapped.</strong> The BOJ&rsquo;s stagflation dilemma (2.8% inflation, 0.5% growth) mirrors the global challenge: energy-driven inflation that monetary policy can&rsquo;t solve without crushing growth. Expect rate decisions to remain on hold across major economies until the Hormuz situation resolves.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Turkey&rsquo;s ICBM signals a new arms race dynamic.</strong> While the Y&#305;ld&#305;r&#305;mhan is years from deployment, the strategic signal is immediate: NATO cohesion is under pressure, and European defense spending will accelerate regardless of the Iran outcome. Defense stocks remain a structural buy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran-U.S. nuclear framework response (48 hrs) &bull; MV Hondius arrival in Tenerife (May 9) &bull; WHO hantavirus risk reassessment &bull; BOJ policy meeting minutes &bull; China-Iran diplomatic outcome &bull; European political security posture &bull; Norwegian Cruise Line forward bookings data
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; NPR &bull; Al Jazeera &bull; CNN &bull; Bloomberg &bull; The National &bull; Fortune &bull; NBC News &bull; STAT News &bull; Reuters &bull; Breaking Defense &bull; Aviation Week &bull; CaixaBank Research &bull; Bank of Japan &bull; Bank of England &bull; ECDC &bull; WHO &bull; Euronews &bull; The Washington Post &bull; PBS &bull; Time &bull; Yahoo Finance &bull; The Motley Fool
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Top 5 Global Events & Market Impact — ${today}`,
  html,
});

try {
  const result = execSync(
    `curl -s -w "\\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ` +
    `-H "Content-Type: application/json" ` +
    `-H "Authorization: Bearer ${RESEND_KEY}" ` +
    `-d @-`,
    { input: payload, encoding: 'utf8', timeout: 60000 },
  );
  const lines = result.trim().split('\n');
  const httpCode = lines.pop();
  const body = lines.join('\n');

  if (!httpCode.startsWith('2')) {
    console.error(`Resend API error ${httpCode}: ${body}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  console.log(`Email sent successfully to ${recipients.join(', ')}`);
  console.log('Resend ID:', data.id);
  if (useTestingMode) {
    console.log('\nNote: Sent in testing mode to verified email only.');
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
