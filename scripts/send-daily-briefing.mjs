#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Events &amp; Market Intelligence</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Briefing</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Specific Stock Impacts</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px;">Market Snapshot &mdash; May 6, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr>
          <td style="color: #888; padding: 4px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 4px 0;">7,365 &uarr; +1.46%</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">Brent Crude</td>
          <td style="color: #dc2626; text-align: right; padding: 4px 0;">$101.27 &darr; -7.8%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 4px 0;">25,839 &uarr; +2.02%</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">WTI Crude</td>
          <td style="color: #dc2626; text-align: right; padding: 4px 0;">$95.08 &darr; -7.0%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 4px 0;">7,385 &uarr; +6.45%</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 4px 0;">Safe haven bid</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy &mdash; May 5&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz: Iran Deal Hopes Crash Oil 7%, Then Combat Flares Again</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a whiplash 24 hours for global energy markets, reports emerged that the <strong>U.S. and Iran are nearing a deal</strong> to end the 38-day conflict that has choked the world&rsquo;s most critical oil chokepoint. Trump paused &ldquo;Project Freedom&rdquo; &mdash; the naval escort mission through the Strait &mdash; citing &ldquo;Great Progress&rdquo; on a deal that would include a moratorium on nuclear enrichment. <strong>Oil prices plunged: Brent crude fell 7.8% to $101.27 and WTI dropped 7.0% to $95.08</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, the ceasefire remains fragile. Iran launched <strong>missiles and drones at the UAE&rsquo;s Fujairah Petroleum Industries Zone</strong>, injuring three Indian nationals and setting fires at the critical oil hub. The IMF warned that if the conflict drags into 2027 and oil hits $125/barrel, <strong>global growth could slow to 2.5% with inflation reaching 5.4%</strong>. Fertilizer costs have already risen 30&ndash;40%, threatening food security in developing nations across Africa and South Asia.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
            <strong style="color: #22c55e;">Winners:</strong> Airlines (<strong>Ryanair RYAAY</strong>, <strong>Delta DAL</strong>, <strong>United UAL</strong>) surged on falling fuel costs. Broad equities rallied &mdash; S&amp;P 500 hit record 7,365. Shipping insurers and Asian importers (Japan, South Korea, India) benefit from lower crude.<br/>
            <strong style="color: #dc2626;">Losers:</strong> Oil majors (<strong>Shell SHEL</strong>, <strong>TotalEnergies TTE</strong>, <strong>Saudi Aramco 2222.SR</strong>) fell with crude. Tanker stocks (<strong>Frontline FRO</strong>) down on normalizing freight rates. Defense names that rallied on the conflict may give back gains.<br/>
            <strong style="color: #eab308;">Watch:</strong> U.S. gas at $4.45/gal. A confirmed deal would send oil sub-$90, benefiting consumer discretionary broadly. A collapse sends Brent back above $115 within hours.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Geopolitics &mdash; May 5&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine &amp; Russia Declare Competing Ceasefires; European Defense Stocks Tumble</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In an extraordinary diplomatic moment, both Russia and Ukraine announced <strong>separate unilateral ceasefires</strong> around Moscow&rsquo;s May 9 Victory Day. President Zelenskyy initiated Ukraine&rsquo;s ceasefire at midnight May 5&ndash;6, declaring <strong>&ldquo;human life is more valuable than any anniversary celebration.&rdquo;</strong> Moscow announced its own truce for May 8&ndash;9 but <strong>warned of massive missile strikes on Kyiv</strong> if Ukraine disrupts the Victory Day parade. Senior Ukrainian negotiators signaled a resolution &ldquo;may not take long.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, the withdrawal of <strong>5,000 U.S. troops from Germany</strong> &mdash; including cancellation of a Tomahawk missile deployment &mdash; rattled NATO allies. Canadian PM <strong>Mark Carney</strong> criticized the move at the European Political Community summit, saying Europe must &ldquo;rebuild world order&rdquo; independently. Armenia&rsquo;s PM <strong>Pashinyan</strong> hosted European leaders and NATO&rsquo;s secretary general as the continent recalibrates its security architecture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
            <strong style="color: #dc2626;">Under pressure:</strong> European defense stocks sold off sharply. <strong>Rheinmetall (RHM.DE)</strong> &darr;5.9%, <strong>Hensoldt (HAG.DE)</strong> &darr;5.9%, <strong>Renk (RENK.DE)</strong> &darr;3.9%, <strong>Saab (SAAB-B.ST)</strong> &darr;2.2%, <strong>BAE Systems (BA.L)</strong> &darr;3.3%. A Goldman Sachs defense basket fell 5.1%.<br/>
            <strong style="color: #22c55e;">Winners:</strong> European construction &amp; materials stocks rallied on Ukraine reconstruction bets: <strong>Holcim (HOLN.SW)</strong>, <strong>Heidelberg Materials (HEI.DE)</strong>, <strong>Vinci (DG.FP)</strong>. European natural gas futures dropped, benefiting industrials.<br/>
            <strong style="color: #eab308;">Nuance:</strong> Analysts note NATO defense spending targets (3.5% GDP) are unlikely to reverse even with peace &mdash; ammunition stocks need rebuilding. Long-term defense thesis intact; short-term pain from headline rotation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">South Asia / Political &mdash; May 4&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">India: BJP Captures West Bengal for First Time; Modi Strengthens Grip Ahead of Vietnam Defense Talks</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a landmark political shift, Prime Minister <strong>Narendra Modi&rsquo;s BJP won West Bengal for the first time</strong>, capturing over <strong>205 of 294 assembly seats</strong> and ending the Trinamool Congress&rsquo;s 15-year control of the state. This is the most significant BJP expansion into eastern India in the party&rsquo;s history, consolidating Modi&rsquo;s dominance midway through his third term. Southern India remains the last holdout against BJP national expansion.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The victory comes as Modi prepares to host <strong>Vietnamese President To Lam</strong> for talks on deepening economic and defense ties &mdash; part of India&rsquo;s broader Indo-Pacific counter-China strategy. Separately, in Manila, workers clashed with police near the U.S. Embassy protesting higher fuel and commodity prices linked to the Hormuz crisis, with demonstrators parading effigies of Trump and Philippine President Marcos Jr.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
            <strong style="color: #22c55e;">Bullish for India:</strong> Political stability is the #1 factor for foreign institutional flows into India. Expect Nifty 50 and Sensex to rally. <strong>Hindustan Aeronautics (HAL.NS)</strong> and <strong>Bharat Electronics (BEL.NS)</strong> benefit from India-Vietnam defense partnership. Infrastructure plays <strong>Larsen &amp; Toubro (LT.NS)</strong> benefit from BJP&rsquo;s spending agenda in newly won West Bengal.<br/>
            <strong style="color: #eab308;">Watch:</strong> India is a top oil importer &mdash; the Hormuz deal matters enormously. <strong>Reliance Industries (RELIANCE.NS)</strong> and <strong>Indian Oil (IOC.NS)</strong> are key beneficiaries if crude drops further. The rupee could strengthen on easing energy import costs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">East Asia / Industrial &mdash; May 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China: Hunan Fireworks Factory Explosion Kills 21 &mdash; Industrial Safety Crackdown Expected</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An explosion at the <strong>Huasheng Fireworks plant in Liuyang, Hunan Province</strong> killed at least <strong>21 workers and injured 61</strong>, with nearly 500 rescue personnel deployed. Two unexploded gunpowder warehouses pose ongoing hazards. President <strong>Xi Jinping ordered maximum rescue efforts</strong> and a full investigation. Liuyang is China&rsquo;s fireworks capital, responsible for the majority of global pyrotechnics exports.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The disaster comes amid a broader pattern of deadly industrial accidents in China. Authorities are expected to launch a <strong>nationwide safety inspection campaign</strong> targeting chemical, mining, and manufacturing facilities. Meanwhile, South Korea&rsquo;s <strong>KOSPI surged 6.45%</strong> on the day, with <strong>Samsung Electronics</strong> crossing $1 trillion in market cap for the first time &mdash; rising 14% on strong semiconductor demand from AI infrastructure buildout.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
            <strong style="color: #dc2626;">Risk:</strong> Chinese industrial/chemical stocks may face regulatory headwinds. Fireworks export disruption could temporarily benefit Indian and Southeast Asian competitors.<br/>
            <strong style="color: #22c55e;">Asia bright spot:</strong> <strong>Samsung Electronics (005930.KS)</strong> hit $1T market cap. Korean semiconductor names and the broader AI supply chain (<strong>SK Hynix 000660.KS</strong>, <strong>TSMC 2330.TW</strong>) continue their historic run. <strong>Corning (GLW)</strong> soared 17% on a new Nvidia partnership for optical manufacturing.<br/>
            <strong style="color: #eab308;">Watch:</strong> Scope of China&rsquo;s safety crackdown &mdash; could slow industrial output at the margin. Insurance costs for Chinese manufacturers may rise.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Africa / Conflict &mdash; May 5&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Sudan: Drones Strike Khartoum Airport; Boko Haram Kills 23 Soldiers in Chad</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Rapid Support Forces (RSF) launched a suspected drone attack on Khartoum International Airport</strong> and surrounding areas &mdash; the first such strike since October &mdash; just as the airport had resumed international flights following the army&rsquo;s recapture of the capital in March 2025. Sudan&rsquo;s armed forces blamed the <strong>UAE and Ethiopia</strong> for supporting the RSF; neither nation commented. The strike threatens to derail nascent humanitarian access to a famine affecting millions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In the Lake Chad Basin, <strong>Boko Haram militants attacked a military base in Chad, killing at least 23 security personnel</strong> and injuring 26 &mdash; one of the deadliest strikes in months. The U.S. is reportedly <strong>lifting sanctions on Eritrea</strong>, linked to the strategic Horn of Africa nation&rsquo;s position on the Red Sea shipping route, which connects to the broader Hormuz crisis narrative and global trade lane security.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
            <strong style="color: #22c55e;">Safe havens:</strong> Gold maintains its bid as geopolitical risk remains elevated across the Middle East and Africa. <strong>Barrick Gold (GOLD)</strong> and <strong>Newmont (NEM)</strong> benefit from persistent uncertainty.<br/>
            <strong style="color: #dc2626;">Risk:</strong> Red Sea &amp; Horn of Africa instability keeps shipping insurance premiums elevated. <strong>Maersk (MAERSK-B.CO)</strong> and <strong>Hapag-Lloyd (HLAG.DE)</strong> face continued route disruption costs. Grain and fertilizer supply chains to East Africa under pressure &mdash; food commodity futures remain volatile.<br/>
            <strong style="color: #eab308;">Watch:</strong> Eritrea sanctions removal could open new shipping lane security arrangements. Sudan&rsquo;s humanitarian crisis is the world&rsquo;s largest &mdash; any aid corridor disruption will move agricultural commodity prices.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Portfolio Positioning &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Hormuz deal is the single biggest swing factor for global markets right now.</strong> A confirmed Iran agreement would send oil below $90, spark a broad risk-on rally, and rotate capital from energy/defense into consumer discretionary, airlines, and emerging market importers. Failure means $115+ Brent and recession risk per the IMF&rsquo;s warning.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Europe is at a pivot point.</strong> Ukraine ceasefire progress is a headwind for defense names short-term but a tailwind for European equities broadly. Construction, materials, and infrastructure stocks are the peace-deal trade. NATO spending floors keep the defense thesis alive longer-term.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Asia&rsquo;s tech rally has legs.</strong> Samsung at $1T, KOSPI +6.45% in a day, and Nvidia/Corning optical partnerships signal the AI infrastructure buildout is accelerating. Semiconductor names remain the strongest secular trend in global equities.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Key tickers to watch:</strong> SHEL, TTE, DAL, RYAAY (Hormuz trade) &bull; RHM.DE, BA.L, HOLN.SW (Ukraine ceasefire) &bull; HAL.NS, RELIANCE.NS (India) &bull; 005930.KS, GLW (Asia tech) &bull; GOLD, NEM (safe haven)
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Reuters &bull; Al Jazeera &bull; CNN Business &bull; CNBC &bull; Bloomberg &bull; The Washington Times &bull; Democracy Now &bull; The Motley Fool &bull; CaixaBank Research &bull; IMF World Economic Outlook &bull; Goldman Sachs Research &bull; Morning Star &bull; AllAfrica &bull; Fox News &bull; NPR &bull; Schwab Market Commentary &bull; Crestwood Advisors &bull; 10Things Global News &bull; Everything Briefing
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
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
