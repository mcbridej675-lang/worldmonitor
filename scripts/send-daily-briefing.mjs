#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitical &bull; Financial Markets &bull; Humanitarian &bull; Industrial</p>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Strait of Hormuz / Middle East &mdash; May 4&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Iran Attacks UAE &amp; Ships in Strait of Hormuz; U.S. Sinks 7 Iranian Boats &mdash; Ceasefire in Tatters</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile U.S.-Iran ceasefire collapsed in practice as Iran launched <strong>drone and missile attacks against the United Arab Emirates</strong>, striking the <strong>Fujairah Oil Industry Zone</strong> and targeting an oil tanker in the Strait of Hormuz. The U.S. Navy responded by sinking <strong>7 small Iranian military vessels</strong> while attempting to reopen the strait to commercial shipping. President Trump warned Iran would be &ldquo;blown off the face of the earth&rdquo; if U.S. warships are targeted. Day 66 of the conflict marks the most dangerous escalation since the ceasefire was declared on April 9.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz handles roughly <strong>20% of global oil supply</strong>. Brent crude surged 6% to <strong>$114/barrel</strong>, with U.S. crude at <strong>$105</strong>. Analysts now see <strong>$80&ndash;90 as the new price floor</strong>, with knock-on effects across LNG, chemicals, and fertilizers. CNBC warns of &ldquo;misplaced euphoria&rdquo; in equity markets, with growing recession and stagflation risks.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.7; margin: 0;">
            <strong style="color: #22c55e;">BULLISH:</strong> Energy majors <strong>ExxonMobil (XOM)</strong>, <strong>Chevron (CVX)</strong>, <strong>Shell (SHEL)</strong> benefit directly from elevated crude. Oilfield services <strong>Halliburton (HAL)</strong>, <strong>Schlumberger (SLB)</strong> gain on sustained drilling demand. Defense contractors <strong>Lockheed Martin (LMT)</strong>, <strong>Raytheon (RTX)</strong>, <strong>Northrop Grumman (NOC)</strong> gain on escalation risk.<br/><br/>
            <strong style="color: #dc2626;">BEARISH:</strong> Airlines <strong>Delta (DAL)</strong>, <strong>United (UAL)</strong>, <strong>Lufthansa (LHA.DE)</strong> face margin compression from fuel costs. Consumer discretionary hit as inflation expectations rise. <strong>S&amp;P 500</strong> retreated from record highs on the 6% crude surge. Shipping and logistics stocks face route disruption risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Elections / South Asia &mdash; May 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. India: BJP Wins West Bengal in Landslide, Ending 15 Years of TMC Rule &mdash; Modi Consolidates Power</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Prime Minister Narendra Modi&rsquo;s <strong>Bharatiya Janata Party (BJP)</strong> secured a commanding <strong>206-seat majority</strong> in West Bengal&rsquo;s state assembly elections, toppling <strong>Mamata Banerjee&rsquo;s Trinamool Congress (TMC)</strong> after 15 years and simultaneously winning a hat trick in Assam. This is one of the most consequential Indian state elections in a decade &mdash; the NDA coalition now controls states accounting for <strong>68% of India&rsquo;s GDP</strong>, further strengthening Modi&rsquo;s grip midway through his third term.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The victory is expected to unlock stalled infrastructure investment and corporate interest in West Bengal, which had languished under TMC governance. Analysts highlight potential for real estate development, port expansion, and manufacturing investment in the state. The Sensex surged <strong>840 points</strong> in pre-market trading and held 0.9% gains through the session.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.7; margin: 0;">
            <strong style="color: #22c55e;">BULLISH:</strong> Indian infrastructure giants <strong>Larsen &amp; Toubro (L&amp;T)</strong> and <strong>Adani Ports (ADANIPORTS.NS)</strong> benefit from expected state-level project unlocks. Banks <strong>HDFC Bank</strong>, <strong>SBI</strong>, and <strong>ICICI Bank</strong> gain from improved credit environment. Real estate names poised for &ldquo;achhe din&rdquo; (good days) in Bengal. <strong>iShares MSCI India ETF (INDA)</strong> for broad exposure.<br/><br/>
            <strong style="color: #ea580c;">CAUTION:</strong> Rally durability is uncertain &mdash; analysts warn election euphoria fades quickly. Crude oil prices remain the largest short-term risk to Indian equities, as India imports ~85% of its oil. Watch the <strong>INR/USD</strong> pair for rupee weakness on oil import bills.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Conflict / Eastern Europe &mdash; May 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Ukraine &amp; Russia Trade Ceasefire Proposals &mdash; Markets React to Peace Signals</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russian President <strong>Vladimir Putin</strong> declared a <strong>two-day ceasefire for May 8&ndash;9</strong> to commemorate Russia&rsquo;s WWII Victory Day. Ukrainian President <strong>Volodymyr Zelenskyy</strong> countered with his own proposed pause beginning at <strong>midnight May 5</strong>, framing it as a broader test of Russian sincerity. Ukraine&rsquo;s senior negotiator has signaled a resolution &ldquo;could be in sight,&rdquo; triggering sharp sector rotations in European markets.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          European equities broadly rose on peace optimism, but the reaction was uneven. Defense stocks plunged while construction and banking sectors rallied on reconstruction and reduced energy cost expectations. Natural gas prices remain a key variable &mdash; a durable ceasefire could reopen Russian gas flows, dramatically reducing European energy costs.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.7; margin: 0;">
            <strong style="color: #dc2626;">BEARISH (on peace):</strong> Defense stocks sold off sharply &mdash; <strong>Rheinmetall (RHM.DE)</strong> &minus;5.9%, <strong>Hensoldt (HAG.DE)</strong> &minus;5.9%, <strong>BAE Systems (BA.L)</strong> &minus;3.3%, <strong>Saab (SAAB-B.ST)</strong> &minus;2.2%, <strong>Renk (RENK.DE)</strong> &minus;3.9%.<br/><br/>
            <strong style="color: #22c55e;">BULLISH (on peace):</strong> Construction &amp; materials &mdash; <strong>Holcim (HOLN.SW)</strong>, <strong>Heidelberg Materials (HEI.DE)</strong>, <strong>Buzzi (BZU.MI)</strong> rally on Ukraine reconstruction potential. European banks and manufacturers benefit from reduced energy costs. Eastern European logistics &amp; transport stocks positioned for recovery. <strong>European natural gas futures</strong> declined on potential supply normalization.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Conflict / East Africa &mdash; May 4&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Sudan Accuses UAE &amp; Ethiopia of Drone Attack on Khartoum Airport &mdash; Ambassador Recalled</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Sudan&rsquo;s military government accused both the <strong>UAE and Ethiopia</strong> of orchestrating drone strikes on <strong>Khartoum International Airport</strong>, shattering months of relative calm in the capital three years into a devastating civil war. Military officials presented evidence that a drone with serial number <strong>S88, identified as Emirati property</strong>, was tracked entering Sudanese airspace from <strong>Ethiopia&rsquo;s Bahir Dar airport</strong>. Sudan has <strong>recalled its ambassador from Addis Ababa</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ethiopia denied involvement and counter-accused Sudan of supporting hostile actors. The UN has labeled Sudan&rsquo;s civil war the <strong>world&rsquo;s worst humanitarian disaster</strong>, with hundreds of thousands killed and millions displaced. The UAE&rsquo;s alleged involvement adds a new dimension, linking the Horn of Africa conflict to broader Gulf geopolitics already strained by the Iran-U.S. confrontation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.7; margin: 0;">
            <strong style="color: #22c55e;">BULLISH:</strong> <strong>Gold (GLD, IAU)</strong> benefits as a safe-haven asset amid expanding geopolitical instability across multiple theaters. Defense/drone manufacturers like <strong>AeroVironment (AVAV)</strong> and <strong>Kratos Defense (KTOS)</strong> see elevated demand signals.<br/><br/>
            <strong style="color: #dc2626;">BEARISH:</strong> East African trade routes face disruption risk. <strong>Ethiopian Airlines</strong> (state-owned) and regional logistics face operational uncertainty. Red Sea shipping, already strained, faces additional pressure. UAE-linked investments in the Horn of Africa face political risk repricing. Agricultural commodity futures (wheat, sorghum) could spike on supply concerns from Sudan, a major producer.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Industrial Disaster / China &mdash; May 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. China Fireworks Factory Explosion Kills 26, Injures 61 in Liuyang &mdash; Xi Orders Accountability</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A massive explosion at <strong>Liuyang Huasheng Fireworks Manufacturing</strong> in Hunan Province killed at least <strong>26 people and injured 61</strong>. The blast at 4:43 PM local time sent a shockwave across the city, shattering windows and damaging buildings. <strong>482 emergency personnel</strong> were deployed, and surrounding areas evacuated due to risk of secondary explosions from nearby warehouses.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>President Xi Jinping</strong> ordered &ldquo;all-out efforts&rdquo; to find those still missing and called for full accountability. Liuyang is known as the <strong>world&rsquo;s fireworks capital</strong>, producing the majority of global fireworks exports. All fireworks and firecracker manufacturers in the city have been <strong>ordered to halt production</strong> pending investigation, creating potential supply disruption for the global pyrotechnics industry.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.7; margin: 0;">
            <strong style="color: #ea580c;">NOTABLE:</strong> Limited broad market impact, but signals renewed Beijing focus on <strong>industrial safety crackdowns</strong>. Chinese industrial &amp; chemical stocks may face regulatory headwinds &mdash; watch <strong>CSC (Shanghai-listed)</strong> and Hunan-based manufacturers. Global fireworks supply chain disruption could affect U.S. importers ahead of July 4th season. <strong>China A-shares (FXI, KWEB)</strong> may see marginal sentiment drag from governance concerns. Insurance stocks in China may face claims pressure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SUMMARY ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Cross-Event Market Thesis</p>
    </div>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px; margin-bottom: 24px;">
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">The dominant macro theme is energy-driven stagflation risk.</strong> With Brent at $114 and the Strait of Hormuz effectively contested, the oil price shock is the single largest variable across all asset classes. Energy and defense remain the clear sector winners, while airlines, consumer discretionary, and import-heavy emerging markets (especially India) face sustained headwinds.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Geopolitical risk is expanding, not contracting.</strong> Simultaneous escalation across the Persian Gulf, Horn of Africa, and contested Eastern European ceasefires means <strong>safe-haven assets (gold, U.S. Treasuries, Swiss franc)</strong> remain well-supported. The USD is likely to strengthen on relative safety, pressuring EM currencies.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Contrarian watch:</strong> If the Ukraine ceasefire gains traction and Iran tensions de-escalate, the reversal trade is dramatic &mdash; defense stocks dump, European construction and energy-intensive industrials surge, and oil collapses toward $80. Position sizing around binary geopolitical outcomes is critical this week.
      </p>
    </div>

    <!-- KEY WATCHLIST -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">This Week&rsquo;s Watchlist</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #22c55e; font-weight: 700;">LONG BIAS</td>
          <td style="padding: 8px 0; color: #ccc;">XOM, CVX, SHEL, HAL, LMT, RTX, GLD, L&amp;T, HOLCIM</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #dc2626; font-weight: 700;">SHORT BIAS</td>
          <td style="padding: 8px 0; color: #ccc;">DAL, UAL, LHA.DE, Consumer Discretionary (XLY)</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #ea580c; font-weight: 700;">VOLATILE</td>
          <td style="padding: 8px 0; color: #ccc;">RHM.DE, BAE.L, SAAB-B.ST (binary on Ukraine ceasefire)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; NPR &bull; CNBC &bull; Bloomberg &bull; Al Jazeera &bull; Reuters &bull; CBS News &bull; The Motley Fool &bull; Business Today India &bull; South China Morning Post &bull; Sudan Tribune &bull; Euronews &bull; The Washington Post &bull; U.S. News &bull; China Daily &bull; Investing.com &bull; BNP Paribas &bull; eToro &bull; Morning Star &bull; Just Security &bull; Havana Times
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <span style="color: #7c3aed;">World Monitor</span> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
