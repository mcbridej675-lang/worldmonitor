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
  <div style="background: linear-gradient(90deg, #dc2626, #ffffff); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #dc2626;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence &amp; Markets Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Energy &bull; Diplomacy &bull; Financial Markets &bull; Stocks</p>
    </div>

    <!-- MARKET SNAPSHOT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Global Market Snapshot</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude Oil</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$113+ / barrel &mdash; Multi-year highs</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225 (Japan)</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">52,463 (-2.38%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">KOSPI (South Korea)</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">-4.2% &mdash; Worst session in months</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">MSCI EM Asia</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">-2.3%</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Global Status</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">Most Western markets CLOSED (Good Friday)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">Sentiment</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right;">RISK-OFF &mdash; Stagflation fears rising</td>
        </tr>
      </table>
    </div>

    <!-- Event 1: Iran Strikes Gulf States -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy Security</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Iran Launches Missile &amp; Drone Attacks on Kuwait, Qatar, and UAE &mdash; Gulf Energy Infrastructure Hit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a dramatic escalation of the ongoing conflict, <strong>Iran launched direct attacks on three Gulf Cooperation Council states</strong>. Iranian drones struck a fuel storage facility at <strong>Kuwait International Airport</strong>, igniting a major fire. Three ballistic missiles were fired at <strong>Qatar</strong> &mdash; two intercepted, but the third struck an oil tanker registered to QatarEnergy. The <strong>UAE</strong> intercepted 18 ballistic missiles, 4 cruise missiles, and 47 drones, though falling debris killed one person and injured others at the Habshan oil facility.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The International Energy Agency has characterized the broader Strait of Hormuz disruption as the <strong>&ldquo;largest supply disruption in the history of the global oil market.&rdquo;</strong> Crude oil has surged past $113/barrel. The attacks mark the first time Iran has directly targeted GCC member states&rsquo; civilian infrastructure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil &amp; Energy:</strong> Brent crude above $113. Energy stocks surging &mdash; <strong>ExxonMobil (XOM), Chevron (CVX), Shell (SHEL), TotalEnergies (TTE)</strong> all benefiting from elevated prices. Saudi Aramco and ADNOC-linked stocks on watch.<br/><br/>
            <strong>Defense:</strong> <strong>Raytheon (RTX), Lockheed Martin (LMT), Northrop Grumman (NOC)</strong> continue to benefit from missile defense demand. Israel&rsquo;s <strong>Elbit Systems (ESLT)</strong> and Rafael-linked firms also gaining.<br/><br/>
            <strong>Airlines &amp; Transport:</strong> Massive headwind for airlines &mdash; <strong>Emirates, Qatar Airways</strong> (private), <strong>Turkish Airlines (THYAO.IS)</strong> face route disruptions and jet fuel cost spikes. <strong>Delta (DAL), Lufthansa (LHA.DE)</strong> under pressure.<br/><br/>
            <strong>Risk:</strong> Sustained Hormuz disruption pushes the global economy toward stagflation. Central banks face impossible choice between fighting inflation and supporting growth.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2: Israel Invasion of Lebanon -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Middle East / Humanitarian</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Israel Invades Lebanon as Regional War Expands &mdash; Hezbollah Commander Killed in Beirut Strike</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Israeli military has launched a <strong>ground invasion of southern Lebanon</strong>, declaring the operation targets Iran-backed Hezbollah fighters. Israeli airstrikes in Beirut and nearby Khalde killed seven people including <strong>Youssef Hashem, Hezbollah&rsquo;s commander for Iraq</strong>, and injured dozens. The IDF also announced completion of strikes against &ldquo;vital targets in Iran, including military and nuclear facilities.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Lebanon&rsquo;s government reports <strong>over 1 million civilians displaced</strong> and more than <strong>1,300 killed</strong> in Israeli attacks. Two additional MQ-9 Reaper drones have been shot down over Iranian territory. The humanitarian crisis is accelerating, with Lebanon&rsquo;s already-fragile economy in freefall.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Safe Havens:</strong> Gold, US Treasuries, Swiss Franc all seeing inflows. <strong>Gold miners (NEM, GOLD, AEM)</strong> outperforming.<br/><br/>
            <strong>Israeli Markets:</strong> Tel Aviv Stock Exchange under sustained pressure. <strong>Bank Leumi (LUMI.TA), Teva (TEVA)</strong> face operational disruption risk.<br/><br/>
            <strong>Shipping &amp; Insurance:</strong> War-risk premiums for Eastern Mediterranean shipping soaring. <strong>ZIM Integrated Shipping (ZIM)</strong> and global reinsurers like <strong>Munich Re (MUV2.DE), Swiss Re</strong> exposed to elevated claims.<br/><br/>
            <strong>Reconstruction plays:</strong> Long-term, Lebanese and regional reconstruction will benefit infrastructure and building materials firms, but timing remains uncertain.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3: Pakistan Fuel Price Shock -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">South Asia / Energy &amp; Inflation</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Pakistan Raises Fuel Prices by Up to 55% &mdash; Inflation Shock Hits 230 Million People</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan&rsquo;s government announced staggering fuel price increases: <strong>petrol up 42.7%</strong> and <strong>diesel up 54.9%</strong>, directly linked to soaring global energy costs from the Iran war and Strait of Hormuz disruption. Pakistan, which imports the vast majority of its petroleum, had no choice but to pass costs to consumers.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The increase will cascade through Pakistan&rsquo;s entire economy &mdash; food transport costs, industrial production, and electricity generation will all spike. The Pakistani rupee is under pressure, and the country&rsquo;s IMF bailout program faces new stress tests. Analysts warn of potential social unrest in a country already struggling with economic instability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Emerging Markets:</strong> Pakistan is the canary in the coal mine for oil-importing developing nations. <strong>iShares MSCI Frontier &amp; Select EM ETF (FM)</strong> and <strong>iShares MSCI Emerging Markets ETF (EEM)</strong> under pressure. Pakistan&rsquo;s KSE-100 index facing heavy selling.<br/><br/>
            <strong>Contagion Risk:</strong> Other oil-importing nations (India, Bangladesh, Kenya, Egypt) face similar subsidy crises. Watch <strong>Indian Oil Corp (IOC.NS)</strong> and <strong>Hindustan Petroleum (HINDPETRO.NS)</strong> for downstream margin pressure.<br/><br/>
            <strong>Fertilizer &amp; Agriculture:</strong> Higher diesel = higher food prices globally. <strong>Nutrien (NTR), Mosaic (MOS), Deere &amp; Co (DE)</strong> see mixed impact &mdash; input cost inflation but elevated commodity demand.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4: Pakistan-Afghanistan Peace Talks Brokered by China -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Central Asia / Diplomacy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. China Brokers Pakistan&ndash;Taliban Peace Talks in Beijing &mdash; Ceasefire Sought After Weeks of Border Clashes</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan confirmed it is holding <strong>peace negotiations with Afghanistan&rsquo;s Taliban government in Beijing</strong>, with China serving as mediator. The talks come after weeks of military clashes along the Pakistan-Afghanistan border that have destabilized the region and threatened critical infrastructure, including segments of the <strong>China-Pakistan Economic Corridor (CPEC)</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beijing&rsquo;s role as broker signals China&rsquo;s expanding diplomatic footprint in Central and South Asia &mdash; following its 2023 Iran-Saudi mediation. Stability in the region is essential for China&rsquo;s Belt &amp; Road investments and rare earth mineral access in Afghanistan, estimated at over <strong>$1 trillion in untapped reserves</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Rare Earth &amp; Mining:</strong> If peace holds, Afghanistan&rsquo;s lithium and rare earth deposits become more accessible. Watch <strong>Ganfeng Lithium (1772.HK), CMOC Group (3993.HK)</strong>, and China-linked miners. Western competitors like <strong>MP Materials (MP), Lynas (LYC.AX)</strong> could face long-term pricing pressure.<br/><br/>
            <strong>Infrastructure:</strong> CPEC-linked Chinese firms benefit from reduced security risk &mdash; <strong>China Communications Construction (1800.HK), Power Construction Corp of China (POWERCC.SS)</strong>.<br/><br/>
            <strong>Geopolitical Signal:</strong> China positioning itself as global mediator while the West is consumed by the Iran conflict. Long-term implications for dollar hegemony and multilateral realignment.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5: Cuba Mass Prisoner Pardon -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Latin America / Political</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Cuba Announces Pardon of 2,010 Prisoners &mdash; Largest Release in Decades Amid Economic Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Cuba announced the <strong>pardon of 2,010 prisoners</strong>, with releases scheduled over the coming months. The move is one of the largest mass releases in the island&rsquo;s recent history and comes amid severe economic hardship &mdash; Cuba faces chronic food shortages, fuel scarcity exacerbated by the global oil crisis, and a collapsing peso.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Analysts see the pardons as a pressure-relief valve for a government struggling with domestic unrest since the July 2021 protests. Many of those detained were political prisoners from those demonstrations. The move may also be calibrated to ease tensions with international human rights bodies and open the door to humanitarian aid negotiations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct market impact: Limited.</strong> Cuba&rsquo;s economy is largely isolated from global capital markets. However, this signals broader instability in oil-dependent Caribbean/Latin American economies.<br/><br/>
            <strong>Tourism &amp; Travel:</strong> If political liberalization continues, <strong>Carnival (CCL), Royal Caribbean (RCL)</strong> could eventually benefit from renewed Cuba cruise routes, though this remains a longer-term play.<br/><br/>
            <strong>Broader LatAm:</strong> Cuba&rsquo;s crisis mirrors pressures across the region. Watch <strong>MercadoLibre (MELI)</strong> and <strong>iShares Latin America 40 ETF (ILF)</strong> for regional sentiment shifts. Venezuela&rsquo;s post-Maduro transition (now 3 months in) adds further uncertainty.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAYS -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Portfolio Watchlist &mdash; Key Themes</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #22c55e;">BULLISH:</strong> Energy majors (XOM, CVX, SHEL, TTE), defense contractors (RTX, LMT, NOC), gold miners (NEM, GOLD), rare earth miners on peace talks.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #ef4444;">BEARISH:</strong> Airlines (DAL, LHA, THYAO), oil-importing EM equities (EEM, FM), shipping insurers, consumer discretionary in inflation-hit economies.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #eab308;">WATCH:</strong> Monday&rsquo;s market reopening after Good Friday &mdash; four days of pent-up news could trigger volatile price discovery. Central bank statements on inflation vs. growth trade-offs will set the tone for Q2.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Bloomberg &bull; CNBC &bull; Al Jazeera &bull; Reuters &bull; Euronews &bull; Morgan Stanley &bull; Oxford Economics &bull; NPR &bull; Wikipedia (Current Events) &bull; CNN Business &bull; The Motley Fool &bull; Investopedia &bull; Nikkei Asia &bull; IEA
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #dc2626; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Intelligence & Markets Briefing \u2014 ${today}`,
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
