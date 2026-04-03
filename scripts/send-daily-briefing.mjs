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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Intelligence Summary</p>
    </div>

    <!-- Market Snapshot -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; April 3, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">S&amp;P 500</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">6,582.69 (+0.11%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Dow Jones</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">46,504.67 (-0.13%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">53,123.49 (+1.3%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Kospi</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">5,377.30 (+2.7%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Shanghai Composite</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">3,880.10 (-1.0%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$112.42/bbl (+7.8%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">WTI Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right;">$111.54/bbl (+11.4%)</td>
        </tr>
      </table>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Energy / Gulf Security</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Iran Strikes Gulf Energy Infrastructure &mdash; UAE Habshan Gas Facility Shut Down, Kuwait Refinery Hit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a dramatic escalation of Iranian retaliatory strikes, Abu Dhabi suspended all operations at the Habshan gas facility &mdash; the UAE&rsquo;s largest, processing 6.1 billion standard cubic feet per day &mdash; after falling debris from intercepted Iranian drones and missiles sparked fires. One Egyptian national was killed during the evacuation and four were injured. Hours earlier, Iranian drone strikes hit Kuwait&rsquo;s Mina al-Ahmadi oil refinery (the third time it has been targeted) and a desalination plant, marking the second attack on Kuwaiti water infrastructure in four days. Neither the UAE nor Kuwait are members of the US-led coalition against Iran, raising alarm about the indiscriminate widening of the conflict to neutral Gulf states.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil &amp; Gas:</strong> WTI surged 11.4% to $111.54/bbl; Brent jumped 7.8% to $112.42/bbl. The IEA warns April will be &ldquo;much worse than March&rdquo; as pre-war cargo shipments are now fully depleted. The Habshan shutdown removes a major LNG and gas processing hub from the global supply chain.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>ExxonMobil (XOM), Chevron (CVX), ConocoPhillips (COP)</strong> &mdash; direct beneficiaries of crude above $110. <strong>Halliburton (HAL), Schlumberger (SLB)</strong> &mdash; oilfield services demand surge. <strong>ADNOC Drilling (UAE: ADNOCDRILL)</strong> &mdash; paradoxically benefits long-term from reconstruction.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Airlines: Delta (DAL), Lufthansa (DLAKY), Emirates Group</strong> &mdash; jet fuel costs exploding. <strong>Utilities exposed to LNG: NextEra (NEE)</strong> &mdash; natural gas price spike hits power generation costs. <strong>Kuwait Finance House (KFH)</strong> &mdash; infrastructure damage weighs on Kuwaiti financials.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Strait of Hormuz</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Iran Claims It Shot Down Two US Fighter Jets Near Strait of Hormuz &mdash; Search for Downed Pilot</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran&rsquo;s state media announced that its air defenses downed a US F-15 and an A-10 aircraft operating near the Strait of Hormuz. Search and rescue operations are reportedly underway for at least one downed pilot. This marks the first confirmed shoot-down of manned American aircraft in the conflict and represents a significant escalation in Iran&rsquo;s capability to contest the skies over the Persian Gulf. Despite the incident, Trump indicated that diplomatic channels would remain open. Casualty figures from the broader conflict now stand at 2,076 dead in Iran, 24 in Israel, 13 US soldiers, and 27 in Gulf states.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The shoot-down shattered the assumption of US air dominance and sent VIX volatility spiking. This signals a protracted conflict with higher risk of US escalation, further delaying any Hormuz reopening.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Lockheed Martin (LMT), Raytheon (RTX), Northrop Grumman (NOC)</strong> &mdash; defense spending acceleration inevitable. <strong>L3Harris (LHX)</strong> &mdash; electronic warfare and ISR demand. <strong>Palantir (PLTR)</strong> &mdash; intelligence and targeting platform.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Boeing (BA)</strong> &mdash; F-15 manufacturer faces scrutiny on platform survivability. <strong>Cruise lines: Carnival (CCL), Royal Caribbean (RCL)</strong> &mdash; Persian Gulf completely off-limits. <strong>Insurers: Lloyd&rsquo;s syndicates, Hiscox (HCXLF)</strong> &mdash; war risk premiums skyrocketing.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Trade / Shipping</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. First Western Vessel Transits Strait of Hormuz Since War Began &mdash; CMA CGM Breaks the Blockade</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Malta-flagged container ship owned by French shipping giant CMA CGM successfully passed through the Strait of Hormuz &mdash; the first Western European vessel to do so since the US-Israeli strikes on Iran began in late February. The ship, the <em>Kribi</em>, changed its AIS transponder destination to &ldquo;Owner France&rdquo; before entering Iranian territorial waters, signaling its non-belligerent nationality. CMA CGM reportedly coordinated the transit directly with Iranian maritime authorities. Omani and Japanese vessels also transited, suggesting Iran is selectively allowing passage for non-coalition nations. This could mark the beginning of a two-tier shipping regime in the Gulf.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A selective reopening could relieve some pressure on global supply chains &mdash; but only for non-US-aligned nations. This fragments the global shipping market and creates a geopolitical premium on trade routes.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>CMA CGM (private), Maersk (AMKBY), Hapag-Lloyd (HLAG.DE)</strong> &mdash; European shippers with potential safe-passage advantage. <strong>ZIM Integrated (ZIM)</strong> &mdash; container shipping rates surging. <strong>Frontline (FRO), Euronav (EURN)</strong> &mdash; tanker rates at historic highs.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Amazon (AMZN), Walmart (WMT)</strong> &mdash; supply chain delays on goods routed through the Gulf. <strong>FedEx (FDX), UPS (UPS)</strong> &mdash; global logistics costs rising. US-flagged shipping companies face exclusion from Hormuz transit.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Africa / Humanitarian</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Sudan&rsquo;s RSF Drone Strikes Hospital During Children&rsquo;s Vaccination Campaign &mdash; 10 Killed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Rapid Support Forces (RSF) launched two drone strikes on Al-Jabalain Hospital in White Nile State, Sudan, hitting an operating theater and a maternity ward during a children&rsquo;s immunization campaign. M&eacute;decins Sans Fronti&egrave;res confirmed 10 dead, including seven medical staff, and at least 19 wounded. Sudan&rsquo;s Foreign Ministry condemned the attack and called for designating the RSF a terrorist organization. The WHO reports over 200 attacks on healthcare facilities since the war began in April 2023. Last month, 70 people including 13 children were killed in a hospital strike in Darfur. The world&rsquo;s worst humanitarian crisis continues largely out of the global spotlight.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct market impact, but Sudan&rsquo;s collapse disrupts Red Sea shipping insurance costs and compounds the broader Africa risk premium. Gold mining operations near Sudan&rsquo;s borders face elevated security costs.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>AeroVironment (AVAV), Kratos Defense (KTOS)</strong> &mdash; counter-drone systems demand rising globally. <strong>Barrick Gold (GOLD)</strong> &mdash; safe-haven flows plus African mining proximity risk hedging.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Endeavour Mining (EDV.TO)</strong> &mdash; West/East African mining operations face security spillover. <strong>Red Sea shipping insurers</strong> &mdash; claims rising alongside Houthi and regional instability.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Space / Science</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Artemis II Astronauts En Route to the Moon &mdash; First Crewed Lunar Mission in 54 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two days after its historic April 1 launch, NASA&rsquo;s Artemis II mission is now in deep space with four astronauts aboard the Orion spacecraft heading for a lunar flyby &mdash; the first crewed mission beyond low-Earth orbit since Apollo 17 in 1972. The crew includes historic firsts: Victor Glover as the first person of color, Christina Koch as the first woman, and Jeremy Hansen as the first non-American to travel to the Moon&rsquo;s vicinity. The ten-day mission validates critical life support and navigation systems for the eventual Artemis III crewed landing. A rare bright spot in a week dominated by conflict.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Validates the Artemis contracting pipeline worth tens of billions over the next decade. Positive sentiment catalyst for the space sector amid broader market gloom.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Lockheed Martin (LMT)</strong> &mdash; Orion capsule builder. <strong>Boeing (BA)</strong> &mdash; SLS core stage contractor. <strong>Northrop Grumman (NOC)</strong> &mdash; SLS solid rocket boosters. <strong>Intuitive Machines (LUNR), Rocket Lab (RKLB)</strong> &mdash; broader space sector sentiment lift. <strong>Jacobs Solutions (J)</strong> &mdash; NASA ground systems engineering.
          </p>
        </div>
      </div>
    </div>

    <!-- Macro Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Macro Outlook &mdash; Key Themes</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The energy crisis is deepening, not stabilizing.</strong> Today&rsquo;s strikes on UAE and Kuwaiti infrastructure confirm that Iran is willing to target neutral Gulf states &mdash; dramatically widening the conflict&rsquo;s economic blast radius. With Habshan offline and the IEA warning that April will see &ldquo;zero&rdquo; new Hormuz cargo, oil above $110 is the new floor, not the ceiling.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">A two-tier global trade system is emerging.</strong> The CMA CGM transit proves the Strait isn&rsquo;t fully closed &mdash; it&rsquo;s selectively closed to US-allied nations. This fragments global shipping and creates a geopolitical premium: European and Asian companies with non-belligerent flags gain a structural advantage over US-aligned logistics.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Defensive positioning remains critical:</strong> Overweight energy, defense, gold, and European shippers. Underweight airlines, consumer discretionary, and US-flagged logistics. The shoot-down of US jets raises the floor on conflict duration.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Markets closed tomorrow (Good Friday).</strong> Thin pre-holiday liquidity amplified today&rsquo;s moves. Weekend developments could create significant gap risk on Monday&rsquo;s open.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Bloomberg &bull; CNBC &bull; Reuters &bull; Euronews &bull; CNN &bull; Washington Post &bull; M&eacute;decins Sans Fronti&egrave;res &bull; IEA &bull; NASA &bull; Maritime Executive &bull; US News &bull; Fortune &bull; The National (UAE) &bull; Xinhua
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
  subject: `[World Monitor] Top 5 Global Events & Market Impact \u2014 ${today}`,
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
