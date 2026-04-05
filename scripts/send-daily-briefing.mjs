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
  <div style="background: linear-gradient(90deg, #dc2626, #f59e0b, #3b82f6); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #dc2626;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Energy &bull; Markets &bull; Diplomacy &bull; Global Affairs</p>
    </div>

    <!-- MARKET SNAPSHOT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #3b82f6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">WTI Crude Oil</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$113+/bbl &mdash; Highest since 2022</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">~$110/bbl &mdash; Strait of Hormuz closed</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">European Natural Gas</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">ELEVATED &mdash; TurkStream sabotage threat</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Fed Rate Outlook</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">No cuts until mid-2027 priced in</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">Global Risk Sentiment</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right;">RISK-OFF &mdash; Multi-front conflict escalation</td>
        </tr>
      </table>
    </div>

    <!-- Event 1: Oil Crisis & Strait of Hormuz -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Energy / Global Economy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Global Oil Crisis Deepens &mdash; Crude Surges Past $113/Barrel as Strait of Hormuz Remains Closed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Crude oil prices surged past <strong>$113 per barrel</strong> (WTI) and Brent hit approximately <strong>$110/bbl</strong> &mdash; the highest levels since June 2022. The price spike is driven by Iran&rsquo;s ongoing closure of the <strong>Strait of Hormuz</strong>, which handles roughly one-fifth of global oil and LNG supplies. The closure came in retaliation for US-Israeli strikes on Iran that began February 28.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          International diesel rates have climbed from ~$88/bbl in late February to approximately <strong>$238/bbl</strong> by early April &mdash; a 170%+ increase. The energy shock is now cascading through developing economies, with Pakistan forced to raise petrol prices by <strong>42.7%</strong> and diesel by <strong>54.9%</strong>. Goldman Sachs has reset its oil price forecast for the remainder of 2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #22c55e;">Winners:</strong> Energy majors &mdash; <strong>Exxon Mobil (XOM)</strong>, <strong>Chevron (CVX)</strong>, <strong>ConocoPhillips (COP)</strong>, <strong>Devon Energy (DVN)</strong>, and <strong>Diamondback Energy (FANG)</strong> all rallied ~3-4%. <strong>APA Corp (APA)</strong> gained 4.3%. Oil services firms like <strong>Halliburton (HAL)</strong> and <strong>Schlumberger (SLB)</strong> also benefit.<br/><br/>
            <strong style="color: #ef4444;">Losers:</strong> Airlines &mdash; <strong>Delta (DAL)</strong>, <strong>United (UAL)</strong>, <strong>Southwest (LUV)</strong>, <strong>Alaska Air (ALK)</strong> all fell ~4%. Cruise lines &mdash; <strong>Carnival (CCL)</strong>, <strong>Royal Caribbean (RCL)</strong>, <strong>Norwegian (NCLH)</strong> dropped ~4%. Shipping and logistics costs rising across the board. Consumer discretionary under pressure from higher transport costs.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2: Israel Invades Lebanon -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Conflict / Middle East</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Israel&rsquo;s Ground Invasion of Lebanon Intensifies &mdash; 1,400+ Killed, Nearly 1 Million Displaced</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israel&rsquo;s ground invasion of southern Lebanon, launched March 16, continues to escalate. At least <strong>54 health workers</strong> are among the <strong>1,400+ people killed</strong>. Nearly <strong>1 million Lebanese</strong> &mdash; 20% of the population &mdash; have been displaced. Israeli strikes hit Beirut&rsquo;s southern suburbs on April 5, killing at least 4 people, while 10 more were killed in southern Lebanon including a family of six.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense Minister Katz announced plans to establish a permanent <strong>&ldquo;security zone&rdquo;</strong> covering nearly one-tenth of Lebanon, barring 600,000 people from returning to their homes. Canadian PM Carney condemned it as an &ldquo;illegal invasion,&rdquo; and ten EU nations called for a ceasefire. Jordan reported intercepting <strong>261 missiles and drones</strong> from Iran over five weeks.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Multi-front Middle Eastern conflict is the primary driver of the global risk-off environment. <strong>Defense stocks</strong> benefit: <strong>Lockheed Martin (LMT)</strong>, <strong>RTX Corp (RTX)</strong>, <strong>Northrop Grumman (NOC)</strong>, <strong>General Dynamics (GD)</strong>, and <strong>L3Harris (LHX)</strong> see sustained demand. <strong>Gold (GLD ETF)</strong> and <strong>safe-haven assets</strong> continue to attract inflows. Israeli tech stocks face geopolitical discount &mdash; <strong>CyberArk (CYBR)</strong>, <strong>Check Point (CHKP)</strong> may underperform peers despite strong fundamentals. <strong>Insurance/reinsurance</strong> firms like <strong>Munich Re</strong> and <strong>Swiss Re</strong> face elevated war-risk claims.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3: Turkish Stream Pipeline Sabotage -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Energy Security / Europe</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Explosives Found Near TurkStream Gas Pipeline in Serbia &mdash; European Energy Security Threatened</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Serbian President Vu&#269;i&#263; announced that army and police discovered <strong>two large packages of explosives with detonators</strong> inside backpacks just meters from the TurkStream gas pipeline in northern Serbia&rsquo;s Kanji&#382;a. The Balkan Stream extension of TurkStream carries Russian natural gas to Serbia and Hungary &mdash; one of Europe&rsquo;s last remaining Russian gas supply routes.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Hungarian PM Orb&aacute;n accused Ukraine of the sabotage attempt. Ukraine&rsquo;s Foreign Ministry denied involvement, suggesting a &ldquo;Russian false-flag operation&rdquo; ahead of Hungary&rsquo;s pivotal <strong>April 12 elections</strong>, where Orb&aacute;n&rsquo;s party trails the opposition Tisza party. Hungary, Russia, Serbia, and Turkey agreed to strengthen pipeline protection. Hungary announced military deployment to guard the pipeline.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            European natural gas futures spiked on the news. Coming on top of the Hormuz closure, this is a <strong>dual energy supply shock</strong> for Europe. <strong>European gas utilities</strong> face cost pressure &mdash; watch <strong>E.ON (EOAN.DE)</strong>, <strong>Engie (ENGI.PA)</strong>, and <strong>RWE (RWE.DE)</strong>. LNG suppliers benefit &mdash; <strong>Cheniere Energy (LNG)</strong>, <strong>Shell (SHEL)</strong>, and <strong>TotalEnergies (TTE)</strong> gain from higher spot prices and rerouting demand. Pipeline security firms and defense contractors with European exposure benefit. <strong>Gazprom (GAZP.ME)</strong> faces revenue risk if the pipeline is disrupted. Hungarian and Serbian equities face political uncertainty ahead of the April 12 election.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4: Pakistan Energy Crisis -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Economic Crisis / South Asia</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Pakistan Raises Fuel Prices by Up to 55% &mdash; Developing World Bears Brunt of Global Energy Shock</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan announced its <strong>second massive fuel price hike in one month</strong>: petrol surged <strong>42.7%</strong> to Rs458.40/litre and diesel jumped <strong>54.9%</strong> to Rs520.35/litre ($1.88/litre). Hi-Octane crossed Rs580/litre. This is the steepest fuel price increase in Pakistan&rsquo;s history, driven directly by the global oil crisis from the Iran conflict and Hormuz closure.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The government announced emergency relief: <strong>Rs100/litre subsidies</strong> for motorcycle, rickshaw, and intercity transport users, plus agricultural support during harvest season. The crisis illustrates how Middle Eastern conflict is cascading through emerging markets &mdash; countries dependent on oil imports face spiraling inflation, currency pressure, and social instability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This signals broader <strong>emerging market contagion risk</strong>. Oil-importing nations across South Asia, Africa, and Southeast Asia face similar inflationary pressure. <strong>Emerging market ETFs</strong> like <strong>iShares MSCI Emerging Markets (EEM)</strong> and <strong>Vanguard FTSE Emerging Markets (VWO)</strong> face headwinds. <strong>Frontier market bonds</strong> are under stress &mdash; Pakistan sovereign debt risk is elevated. Countries with IMF programs face fiscal strain. Conversely, <strong>Gulf state sovereign wealth funds</strong> and oil exporters like Saudi Aramco benefit from elevated revenues. <strong>Remittance companies</strong> may see increased flows as diaspora supports families facing higher costs.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5: Pope Leo XIV Easter -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Global Affairs / Diplomacy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Pope Leo XIV Celebrates First Easter &mdash; Calls for Peace Amid Multi-Front Wars</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pope Leo XIV celebrated his <strong>first Easter vigil</strong> as pontiff at St. Peter&rsquo;s Basilica on April 4, baptizing and confirming 10 new Catholics. In his homily, the Pope said Easter &ldquo;drives out hatred, fosters concord, and brings down the mighty,&rdquo; reflecting on &ldquo;tombs still to be opened today&rdquo; including &ldquo;war, injustice, and the isolation of peoples and nations.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pope announced a special <strong>prayer vigil for peace</strong> in St. Peter&rsquo;s Square on April 11. His Easter Urbi et Orbi message urged those who &ldquo;unleash wars&rdquo; to choose peace. The message carries particular weight given the simultaneous conflicts in Iran, Lebanon, Gaza, and Ukraine &mdash; the most volatile geopolitical landscape since World War II.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact &amp; Stocks to Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            While primarily a moral and diplomatic event, papal peace calls historically signal the severity of global instability. The Vatican&rsquo;s moral authority can influence European political sentiment toward ceasefire negotiations. If diplomatic momentum builds, <strong>risk-on assets</strong> would rally and oil would retreat sharply. Watch for any Vatican-mediated backchannel diplomacy &mdash; a ceasefire announcement would trigger a sharp reversal in energy stocks and a rally in beaten-down travel, airline, and consumer sectors. <strong>Italian tourism stocks</strong> see a modest boost from Easter pilgrimage traffic to Rome.
          </p>
        </div>
      </div>
    </div>

    <!-- Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Week Ahead &mdash; Key Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Trump&rsquo;s &ldquo;Tuesday 8:00 PM&rdquo; announcement.</strong> A cryptic social media post has triggered speculation about a major Iran escalation or potential diplomatic development. Markets will be on edge until Tuesday evening.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Hungary elections April 12.</strong> The TurkStream pipeline incident adds a wild card to already tight polls. Outcome affects EU energy policy and Russia-Europe gas flows.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Private credit redemption wave.</strong> Apollo, Blackstone, Ares, and Blue Owl face unprecedented redemption requests. A liquidity crunch in private credit could spill into broader financial markets.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Oil above $110 is unsustainable for most economies.</strong> If Hormuz remains closed, expect more developing nations to follow Pakistan with emergency price hikes, potential social unrest, and IMF interventions. The longer oil stays elevated, the higher recession risk globally.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Reuters &bull; Bloomberg &bull; CNBC &bull; CNN &bull; NPR &bull; Euronews &bull; The Washington Post &bull; Fortune &bull; Council on Foreign Relations &bull; Foreign Policy &bull; Vatican News &bull; Dawn (Pakistan) &bull; Daily Sabah &bull; BusinessToday &bull; Goldman Sachs Research &bull; Northeastern University &bull; Deloitte Insights
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
  subject: `[World Monitor] Global Daily Briefing \u2014 ${today}`,
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
