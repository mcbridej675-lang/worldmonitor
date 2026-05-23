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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: IRAN-US PEACE DEAL IMMINENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; May 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran&ndash;U.S. Peace Deal Draft Expected Within 24 Hours; Strait of Hormuz Reopening at Centre of Negotiations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Top negotiators from both sides &mdash; including Iranian Parliament Speaker <strong>Mohammad Bagher Qalifbaf</strong>, Vice President <strong>J.D. Vance</strong>, special envoy <strong>Steve Witkoff</strong>, and <strong>Jared Kushner</strong> &mdash; have reportedly approved a draft peace deal expected to be announced by <strong>Sunday afternoon</strong>. The agreement would end hostilities on all fronts in the largest military conflict the Middle East has seen in decades.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The critical sticking point remains the <strong>Strait of Hormuz</strong>, through which <strong>20% of global oil supply</strong> flows. Iran has demanded ships pay a transit levy; Washington insists on unconditional, toll-free reopening. The U.S. blockade has now redirected over <strong>100 commercial vessels</strong>. Cumulative global supply losses exceed <strong>1 billion barrels</strong>, with <strong>14 mb/d</strong> shut in. Oil has whipsawed between <strong>$100&ndash;$144/bbl</strong> on conflicting deal signals, currently around <strong>$110/bbl</strong>. Pakistan is mediating. A successful deal would be the single most consequential geopolitical event of 2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A deal would trigger the largest single-day oil price decline in years, potentially crashing Brent below $80. Failure would send crude back toward $140+. This is the binary event dominating all global asset pricing right now.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM, CVX, SHEL</strong> (ExxonMobil, Chevron, Shell) &mdash; energy majors face massive downside if deal reopens Hormuz supply; currently near 52-week highs. <strong>DAL, UAL, LUV</strong> (Delta, United, Southwest) &mdash; airlines rally hard on any deal as jet fuel costs collapse. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services priced for elevated demand; vulnerable to correction. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven unwind on deal, rally on failure. <strong>USO</strong> (Oil ETF) &mdash; extreme volatility expected either direction. <strong>DANGCEM.NG</strong> (Dangote) &mdash; Nigeria&rsquo;s mega-refinery positioned as alternative supplier regardless of outcome.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: QUAD DIPLOMACY / INDIA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Diplomacy / Trade &mdash; May 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Rubio Arrives in New Delhi; Invites Modi to White House as Quad Foreign Ministers Prepare May 26 Summit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Secretary of State <strong>Marco Rubio</strong> arrived in New Delhi on Saturday for his first official visit to India, meeting <strong>Prime Minister Narendra Modi</strong> and delivering a personal invitation from President Trump for a White House visit in the &ldquo;near future.&rdquo; Rubio called India a &ldquo;cornerstone&rdquo; of U.S. Indo-Pacific policy and the two sides agreed to deepen <strong>defence, strategic technology, trade, and energy security</strong> cooperation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The visit is a reset attempt after relations soured over Washington&rsquo;s <strong>tariff policies</strong>. The <strong>Quad Foreign Ministers&rsquo; Meeting</strong> (India, Japan, Australia, U.S.) is set for <strong>May 26 at Hyderabad House</strong>. The summit comes as the Indo-Pacific alliance seeks to counterbalance China&rsquo;s growing regional influence. The Trump-Xi summit on May 15 produced a $17 billion agricultural purchase commitment from China, but both sides disagreed on what else was agreed &mdash; making the Quad alignment all the more critical for Washington&rsquo;s Asia strategy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Indo-Pacific trade realignment creates winners in Indian defence and infrastructure. A U.S.-India rapprochement could unlock defence contracts worth billions. Watch for trade concessions that benefit Indian tech and pharma exports.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>INDA</strong> (iShares MSCI India ETF) &mdash; broad India exposure; benefits from warming U.S. ties. <strong>HAL.NS</strong> (Hindustan Aeronautics) &mdash; Indian defence champion positioned for joint production deals. <strong>INFY, WIT</strong> (Infosys, Wipro) &mdash; Indian IT services benefit from reduced trade friction. <strong>RDY</strong> (Dr. Reddy&rsquo;s Laboratories) &mdash; Indian pharma stands to gain from tariff rollbacks. <strong>LMT, RTX</strong> (Lockheed, RTX) &mdash; U.S. defence primes in line for Indian procurement contracts. <strong>FXI</strong> (China Large-Cap ETF) &mdash; Quad solidarity pressures Chinese equities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EUROPEAN ECONOMIC DETERIORATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Economy / Labour Markets &mdash; May 22&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Europe&rsquo;s Three Largest Economies Show Simultaneous Labour-Market Strain; France Hits 5-Year Unemployment High</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>France&rsquo;s unemployment rate</strong> climbed to <strong>8.1% in Q1 2026</strong> &mdash; its highest level in five years &mdash; with the European Commission projecting further deterioration to <strong>8.3%</strong> this year and <strong>8.7% in 2027</strong>. <strong>Germany</strong>, after two consecutive years of recession, is forecast to grow just <strong>0.6% in 2026</strong>, with unemployment rising to <strong>4.0%</strong> and its fiscal deficit ballooning to <strong>3.7% of GDP</strong> due to surging defence spending and the energy crisis.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          European equity markets sold off sharply: <strong>Germany&rsquo;s DAX fell 1.59%</strong>, <strong>France&rsquo;s CAC 40 dropped 1.97%</strong>, <strong>Italy&rsquo;s FTSE MIB lost 0.35%</strong>, and the <strong>UK&rsquo;s FTSE 100 slipped 0.37%</strong>. Three of Europe&rsquo;s four largest economies &mdash; Germany, the UK, and France &mdash; are all showing labour-market weakness simultaneously for the first time since the eurozone crisis. The Middle East energy shock is driving inflation, squeezing consumers, and forcing governments into deficit spending just as the ECB faces pressure to hold rates.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Simultaneous weakness across Europe&rsquo;s core economies signals a potential eurozone-wide downturn. Rising deficits could trigger bond vigilante pressure on peripheral EU debt. The ECB is trapped between inflation and recession.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>EZU</strong> (iShares MSCI Eurozone ETF) &mdash; broad eurozone exposure under pressure. <strong>SAP.DE</strong> (SAP) &mdash; Germany&rsquo;s largest company; bellwether for European tech sentiment. <strong>MC.PA</strong> (LVMH) &mdash; French luxury giant vulnerable to consumer weakness and tourism slowdown. <strong>SIE.DE</strong> (Siemens) &mdash; industrial bellwether facing demand headwinds. <strong>BNP.PA, DBK.DE</strong> (BNP Paribas, Deutsche Bank) &mdash; European banks face rising credit risk from unemployment. <strong>RHM.DE</strong> (Rheinmetall) &mdash; counter-trend winner; German defence spending surge offsets broader weakness.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: RUSSIA-UKRAINE WAR MOMENTUM SHIFT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Conflict / Eastern Europe / Black Sea &mdash; May 19&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Loses 69 Square Miles in Four Weeks as War Momentum Shifts; Record 8,000+ Drone Strikes in Single Month</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a significant shift, <strong>Russian forces registered a net loss of 69 square miles</strong> of Ukrainian territory over the past four weeks (April 21&ndash;May 19) &mdash; a reversal from the slow but steady gains Moscow had been making. In the most recent week alone, Russia lost a net <strong>29 square miles</strong>. Russia launched more than <strong>8,000 drones</strong> last month, the highest monthly total since the February 2022 invasion, but territorial momentum has swung against them.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Estimated casualties now stand at approximately <strong>1 million Russian</strong> and <strong>250,000&ndash;300,000 Ukrainian</strong> military personnel killed and wounded. Critically, <strong>62% of Russians now support peace negotiations</strong> and <strong>61% of Ukrainians</strong> support territorial compromises to end the war &mdash; suggesting public appetite for a settlement is growing on both sides. Ukraine&rsquo;s electrical infrastructure remains devastated, with only <strong>30&ndash;40% of capacity</strong> potentially restorable before next winter.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Growing peace sentiment on both sides creates a potential catalyst for a ceasefire. European energy and reconstruction plays could see massive upside on any settlement signal. Defence stocks face a paradox: near-term orders accelerating, but long-term demand depends on war duration.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Europe&rsquo;s top defence play; orders locked in regardless of peace timeline. <strong>AVAV</strong> (AeroVironment) &mdash; Switchblade and drone warfare leader. <strong>Wheat futures / WEAT</strong> &mdash; Black Sea corridor stability critical for global food prices. <strong>EQNR</strong> (Equinor) &mdash; Norwegian energy giant benefits as Europe seeks non-Russian gas. <strong>HEI</strong> (HEICO) &mdash; aerospace parts supplier surging on military restocking demand. <strong>STLA</strong> (Stellantis) &mdash; has significant exposure to Eastern European manufacturing; peace catalyst.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL MARKET SELLOFF & OIL VOLATILITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Energy Markets &mdash; May 22&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Equity Sell-Off Deepens as Oil Volatility, Bond Yields, and Iran Uncertainty Converge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Global equity markets sold off across all regions ahead of the Memorial Day weekend. In Asia, <strong>Japan&rsquo;s Nikkei 225 fell 1.23%</strong> and <strong>South Korea&rsquo;s Kospi dropped 0.86%</strong>. European indices were hit harder: <strong>CAC 40 &minus;1.97%</strong>, <strong>DAX &minus;1.59%</strong>. Oil prices have posted extreme swings, with <strong>North Sea Dated</strong> plunging from a high of <strong>$144/bbl to below $100/bbl</strong> before rebounding to <strong>~$110/bbl</strong> &mdash; all driven by whiplash between Iran deal optimism and collapse fears.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The IEA confirmed the <strong>largest disruption in global oil supply in history</strong>, with global demand expected to <strong>contract 2.4 mb/d year-over-year in Q2 2026</strong>. Jet fuel prices have nearly <strong>tripled</strong>. Qatar&rsquo;s LNG infrastructure damage will delay the global LNG supply wave by <strong>at least two years</strong>, with a cumulative loss of <strong>~120 bcm</strong> of supply through 2030. Consumer price inflation hit <strong>3.8%</strong> with energy as the primary driver. China&rsquo;s weak retail sales (<strong>1.7% growth</strong>) add to the global demand slowdown picture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of supply destruction, demand contraction, and rate uncertainty creates a classic stagflationary environment. Defensive positioning is dominant. The Iran deal binary is the single biggest catalyst for a relief rally or further crash.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>JPM, GS</strong> (JPMorgan, Goldman Sachs) &mdash; banks benefit from elevated rates and trading volatility. <strong>TLT</strong> (20+ Year Treasury ETF) &mdash; long-duration bonds under severe pressure; contrarian opportunity if Iran deal lands. <strong>AAPL, MSFT, NVDA</strong> &mdash; mega-cap tech faces valuation compression from rising discount rates. <strong>LNG</strong> (Cheniere Energy) &mdash; U.S. LNG exports critical as Qatar supply delayed. <strong>EEM</strong> (Emerging Markets ETF) &mdash; strong dollar and capital outflows create headwinds. <strong>VIX</strong> &mdash; volatility index elevated; options markets pricing extreme tail risk through June.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran deal is the event that moves everything.</strong> A draft agreement is reportedly hours away. If it lands, expect a massive oil crash, an equity relief rally, airline stocks surging, and energy producers selling off. If it collapses, oil retests $140+, equity markets face another leg down, and the stagflationary spiral deepens. Every other global risk &mdash; from European recession to the Ukraine war &mdash; is amplified or dampened by this single outcome.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro backdrop is deteriorating on multiple fronts.</strong> Europe&rsquo;s three largest economies are weakening simultaneously. China&rsquo;s consumer is stalling at 1.7% retail growth. The IEA is calling this the largest oil supply disruption in history. Qatar&rsquo;s LNG damage extends the energy crisis timeline through 2030. Russia is losing ground in Ukraine while both populations shift toward peace &mdash; creating a potential second major geopolitical catalyst.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran deal announcement (expected Sunday) &bull; Strait of Hormuz reopening terms &bull; Quad Foreign Ministers summit May 26 &bull; Modi White House visit timing &bull; Russia-Ukraine territorial momentum &bull; European unemployment trajectory &bull; China retail sales and consumer confidence &bull; Oil price reaction to deal/no-deal
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CBS News &bull; Washington Times &bull; Axios &bull; Al Jazeera &bull; The Print &bull; Military.com &bull; IEA Oil Market Report &bull; Wikipedia &bull; World Economic Forum &bull; European Commission &bull; S&amp;P Global Ratings &bull; Russia Matters (Harvard) &bull; CNBC &bull; UK House of Commons Library &bull; T. Rowe Price &bull; Metaintro &bull; Visual Capitalist
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
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
  subject: `[World Monitor] Global Intelligence Briefing — ${today}`,
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
