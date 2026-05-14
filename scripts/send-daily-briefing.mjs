#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: TRUMP-XI BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Trade / Indo-Pacific &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Beijing Summit: Xi Warns Taiwan Mishandling Risks &ldquo;Conflict&rdquo;; U.S. Clears Nvidia AI Chip Sales to China</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump landed in Beijing for a high-stakes two-day summit with Chinese President Xi Jinping &mdash; the most consequential bilateral meeting of 2026. Xi reserved his sharpest rhetoric for <strong>Taiwan</strong>, warning that mishandling the issue would put the relationship in &ldquo;great jeopardy&rdquo; and that the two nations risk &ldquo;collision or conflict.&rdquo; He called Taiwan &ldquo;the most important issue in U.S.-China relations.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On the economic front, Washington reportedly cleared sales of <strong>Nvidia&rsquo;s H200 AI chips</strong> to major Chinese firms including Alibaba, Tencent, ByteDance, and JD.com. Xi told visiting U.S. tech leaders including <strong>Elon Musk and Jensen Huang</strong> that &ldquo;China&rsquo;s door will only open wider.&rdquo; Both leaders agreed the <strong>Strait of Hormuz must remain open</strong> and discussed Chinese purchases of U.S. agriculture and fentanyl precursor flows.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>S&amp;P 500 rose 0.58% to 7,444</strong> (new all-time high); <strong>Nasdaq +1.2%</strong>. European markets rallied: <strong>DAX +1.4%, CAC 40 +0.6%</strong>. Asia mixed: <strong>Nikkei &minus;0.98%</strong>, <strong>Kospi +1.75%</strong>.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>NVDA</strong> (Nvidia) &mdash; direct beneficiary of H200 China sales clearance, jumped on the news. <strong>BABA</strong> (Alibaba), <strong>TCEHY</strong> (Tencent), <strong>JD</strong> (JD.com) &mdash; approved H200 buyers, Chinese tech rally revived. <strong>TSM</strong> (TSMC) &mdash; Xi&rsquo;s Taiwan rhetoric adds geopolitical risk premium to the world&rsquo;s most critical chipmaker. <strong>AAPL</strong> (Apple) &mdash; major China revenue exposure benefits from thawing trade relations. <strong>ADM, BG</strong> (Archer-Daniels-Midland, Bunge) &mdash; potential uplift from increased Chinese agricultural purchases.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA-UKRAINE MASSIVE AERIAL ASSAULT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe &mdash; May 13&ndash;14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Unleashes Largest Aerial Assault of the War: 800+ Drones Hit Ukraine, 14+ Killed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia launched its <strong>heaviest wartime aerial assault</strong> on Ukraine across a devastating two-day campaign. On May 13, over <strong>800 drones</strong> struck central Ukraine in a massive daytime attack, killing at least <strong>14 people and injuring over 80</strong>, including children. A follow-up overnight barrage hit <strong>Kyiv</strong> with ballistic missiles and drones, partially collapsing a multistory residential building and burying civilians under rubble.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine&rsquo;s air defenses intercepted <strong>693 targets overnight</strong>, including 41 missiles and 652 drones. However, 15 missiles and 23 drones struck targets across <strong>24 locations</strong>. Cities hit included <strong>Kremenchuk, Bila Tserkva, Kharkiv, Sumy, and Odesa</strong>. The scale represents a dramatic escalation in Russia&rsquo;s drone warfare capacity and suggests a new phase of intensified long-range bombardment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalation supports <strong>defense and grain</strong> sectors while pressuring European equities. European natural gas futures ticked higher on renewed supply anxiety.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RTX</strong> (RTX Corp) &mdash; Patriot air defense systems are the backbone of Ukraine&rsquo;s shield; demand accelerates. <strong>LMT</strong> (Lockheed Martin) &mdash; HIMARS, JASSM-ER supplier; benefits from NATO replenishment orders. <strong>NOC</strong> (Northrop Grumman) &mdash; builds ammunition and integrated air defense systems. <strong>RHEINMETALL</strong> (RHM.DE) &mdash; Germany&rsquo;s top defense contractor is surging on European rearmament demand. <strong>Wheat futures</strong> &mdash; Odesa and Kharkiv are key grain export hubs; disruption bullish for WEAT and global food prices. <strong>BG</strong> (Bunge) &mdash; Ukrainian grain supply disruption affects global agricultural trading.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: IRAN CEASEFIRE BREAKING DOWN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Energy / Middle East / Global Economy &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Ceasefire on &ldquo;Life Support&rdquo;: Oil Above $105, Strait of Hormuz Still Disrupted</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile ceasefire between the U.S. and Iran is rapidly deteriorating. Trump called Tehran&rsquo;s 14-point counter-proposal &ldquo;garbage&rdquo; and said the ceasefire was on &ldquo;massive life support.&rdquo; Iran&rsquo;s chief negotiator issued an ultimatum: accept their conditions &mdash; including recognition of sovereignty over the <strong>Strait of Hormuz</strong>, lifting the naval blockade, and unfreezing Iranian assets &mdash; or face &ldquo;failure.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brent crude</strong> settled at <strong>$107.77/barrel</strong> (+3.4%), while <strong>WTI</strong> closed at <strong>$102.18</strong> (+4.2%). Crude flows through the Strait of Hormuz have declined by <strong>nearly 6 million barrels per day</strong> since the conflict began. The <strong>IEA warned</strong> that the global market could remain &ldquo;severely undersupplied until October&rdquo; even if the conflict ends next month. U.S. inflation hit <strong>3.8% annually</strong>, driven heavily by energy costs. Meanwhile, <strong>Nigeria&rsquo;s Dangote Refinery</strong> exported a record <strong>1.66 billion liters</strong> in April, emerging as a critical alternative supplier.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Energy is the dominant macro driver. Oil above $100 creates stagflationary pressure globally, hurting consumer stocks while boosting energy producers. Airlines and shipping face margin compression.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell), <strong>BP</strong> &mdash; all benefit from elevated crude prices; XOM and CVX at or near 52-week highs. <strong>DAL, UAL, AAL</strong> (Delta, United, American Airlines) &mdash; jet fuel costs squeezing margins; downside risk if oil stays above $100. <strong>DANGOTE</strong> (NGX: DANGCEM) &mdash; the refinery&rsquo;s emergence as a global alternative supplier is transforming Nigeria&rsquo;s oil economy. <strong>HAL</strong> (Halliburton) &mdash; oilfield services demand rising as producers push output. <strong>GLD/Gold</strong> &mdash; safe-haven flows accelerating on ceasefire collapse fears.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: JERUSALEM DAY & AL-AQSA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Middle East / Religious Tensions &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Jerusalem Day: Israeli Minister Ben Gvir Storms Al-Aqsa; Jordan Condemns &ldquo;Flagrant Breach&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli National Security Minister <strong>Itamar Ben Gvir</strong> stormed the <strong>Al-Aqsa Mosque compound</strong> (Temple Mount) during Jerusalem Day, waving an Israeli flag in front of the Dome of the Rock alongside far-right MK who called to &ldquo;get rid of all the mosques&rdquo; and build the Temple. Thousands of ultranationalist Israelis marched through occupied <strong>East Jerusalem&rsquo;s Damascus Gate</strong> as Palestinian shops were forced to close.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Jordan&rsquo;s Foreign Ministry</strong> condemned the incursion as a &ldquo;blatant violation of international law&rdquo; and a &ldquo;flagrant breach of the historical and legal status quo.&rdquo; The provocation comes at a particularly dangerous moment, as the region is already inflamed by the Iran conflict and ongoing Israeli military operations in Lebanon and Gaza. The event risks igniting broader unrest across the Muslim world during an already volatile period.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Adds another flashpoint to an already-overloaded Middle East risk premium. Markets largely priced in regional instability, but a broader escalation (e.g., Third Intifada triggers) would spike safe havens and oil further.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven demand rises with each new Middle East flashpoint. <strong>TEVA</strong> (Teva Pharmaceutical) &mdash; Israel&rsquo;s largest publicly traded company; exposed to domestic instability risk. <strong>Tel Aviv 125 Index</strong> &mdash; Israeli equities face headwinds from political instability and regional conflict. <strong>Defense sector</strong> (RTX, LMT, ESLT/Elbit Systems) &mdash; sustained demand for Iron Dome systems and border security. <strong>Oil futures</strong> &mdash; any widening of the conflict adds to the existing energy supply risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: KEVIN WARSH FED CHAIR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Monetary Policy / Global Finance &mdash; May 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kevin Warsh Confirmed as Federal Reserve Chair in Closest Vote in Modern Era (54&ndash;45)</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Senate confirmed <strong>Kevin Warsh</strong> as the next Federal Reserve Chair in a <strong>54&ndash;45 vote</strong>, the most divisive confirmation for a Fed chair in modern history. Only Sen. John Fetterman (D-PA) crossed party lines. Warsh, 56, replaces Jerome Powell and will chair his first FOMC meeting on <strong>June 16&ndash;17</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump has publicly pressured Warsh to cut rates, but markets are pricing a <strong>97% chance rates stay unchanged</strong> at 3.50&ndash;3.75% through 2026. With U.S. inflation at <strong>3.8% annually</strong> &mdash; the highest in three years, driven by the Iran energy crisis &mdash; rate cuts are effectively off the table. The appointment introduces uncertainty into the global monetary policy outlook and has implications for every central bank&rsquo;s calculus, from the ECB to the BOJ to the PBOC.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The &ldquo;higher for longer&rdquo; rate environment persists. Dollar strength pressures emerging market currencies and commodity importers. Bond markets remain volatile ahead of Warsh&rsquo;s first meeting.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>JPM, GS, BAC</strong> (JPMorgan, Goldman Sachs, Bank of America) &mdash; banks benefit from sustained higher rates via net interest income; financials sector is a relative winner. <strong>TLT</strong> (iShares 20+ Year Treasury ETF) &mdash; long-duration bonds under pressure if Warsh signals hawkishness. <strong>XLK/QQQ</strong> (Tech sector) &mdash; growth stocks face headwinds from no rate relief; watch AAPL, MSFT, GOOGL for rate sensitivity. <strong>O, AMT</strong> (Realty Income, American Tower) &mdash; REITs disadvantaged in higher-rate environment. <strong>EEM</strong> (Emerging Markets ETF) &mdash; strong dollar and elevated U.S. rates create capital outflow risk from EM economies.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Three simultaneous crises are converging.</strong> The Iran ceasefire collapse is keeping oil above $100 and driving inflation, while Russia&rsquo;s record aerial assault on Ukraine signals a new phase of escalation in Europe. Meanwhile, the Trump-Xi summit is attempting to stabilize the world&rsquo;s most important bilateral relationship even as Xi draws a red line on Taiwan.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro picture is stagflationary.</strong> Oil above $100, inflation at 3.8%, and the new Fed chair boxed in by conflicting pressures. The market rally is being carried by AI/tech optimism from the Nvidia-China deal, but the energy shock is a slow-moving weight on consumer spending and corporate margins.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi summit Day 2 outcomes &bull; Iran ceasefire deadline &bull; Warsh&rsquo;s first public statements as Fed Chair &bull; Oil price reaction to Hormuz developments &bull; European defense spending commitments post-Ukraine escalation &bull; Al-Aqsa fallout across the Muslim world &bull; Dangote Refinery&rsquo;s growing role in global energy supply
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; CNN &bull; NPR &bull; Al Jazeera &bull; The Washington Post &bull; Reuters &bull; Euronews &bull; Kyiv Independent &bull; Haaretz &bull; The Times of Israel &bull; CBS News &bull; PBS News &bull; Fox News &bull; Yahoo Finance &bull; S&amp;P Global &bull; IEA &bull; Axios &bull; Democracy Now &bull; Arab News
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
