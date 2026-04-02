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
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; April 2, 2026</p>
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
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">52,463.27 (-2.38%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Kospi</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">5,234.05 (-4.47%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$109/bbl (+8%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">WTI Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right;">~$110/bbl (+10%)</td>
        </tr>
      </table>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Energy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. US-Iran War Escalation &mdash; Trump Vows Weeks More of Bombing; Strait of Hormuz in Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump declared in a televised address that US military objectives in Iran have been &ldquo;largely met&rdquo; but announced that strikes will continue for &ldquo;several more weeks.&rdquo; Preliminary casualty figures stand at 1,937 dead in Iran, 24 in Israel, 13 US soldiers, and 27 in Gulf states. Iranian drones struck fuel storage at Kuwait International Airport, causing a major fire. Iran also launched three missiles at Qatar &mdash; two were intercepted but a third hit an oil tanker registered by QatarEnergy. The Strait of Hormuz remains effectively closed, though Iranian state media reported negotiations with Oman on a protocol to &ldquo;monitor&rdquo; ship traffic, which briefly calmed markets before close.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent surged 8% to $109; WTI spiked nearly 10% to ~$110, briefly crossing $113. The IEA has called this the &ldquo;largest supply disruption in the history of the global oil market.&rdquo; Goldman Sachs projects US gasoline at $3.50/gal and warns of persistent inflation if closures continue.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>ExxonMobil (XOM), Chevron (CVX), ConocoPhillips (COP), Halliburton (HAL)</strong> &mdash; direct beneficiaries of elevated crude prices. <strong>Lockheed Martin (LMT), Raytheon (RTX), Northrop Grumman (NOC)</strong> &mdash; defense spending surge. <strong>Occidental Petroleum (OXY)</strong> &mdash; heavily levered to oil price.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Delta (DAL), United Airlines (UAL), American Airlines (AAL)</strong> &mdash; jet fuel costs crushing margins. <strong>Carnival (CCL), Royal Caribbean (RCL)</strong> &mdash; Gulf route cancellations. <strong>FedEx (FDX), UPS (UPS)</strong> &mdash; shipping cost inflation.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Conflict / Eastern Europe</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Russia Claims Full Control of Luhansk Oblast &mdash; Ukraine Denies</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia&rsquo;s Defence Ministry announced its forces have captured the entirety of Luhansk Oblast in eastern Ukraine, which would mark the first complete seizure of a Ukrainian administrative region since the 2022 invasion. Ukraine&rsquo;s military has denied the claim, stating that the 3rd Assault Brigade still holds positions near the front line. If confirmed, this represents a significant shift in the war&rsquo;s trajectory and a potential bargaining chip in any future negotiations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            European energy security concerns resurface. Natural gas futures likely to tick upward on renewed instability fears. European defense stocks continue their multi-year rally.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Rheinmetall (RNMBY), BAE Systems (BAESY), Leonardo (FINMY)</strong> &mdash; European defense spending acceleration. <strong>Cheniere Energy (LNG)</strong> &mdash; US LNG exports to Europe remain critical.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>European industrials, Volkswagen (VWAGY), BASF (BASFY)</strong> &mdash; energy cost pressure on German manufacturing. European banks with Eastern European exposure face uncertainty.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Middle East / Humanitarian</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Israel Pressures Ethnic Displacement in Southern Lebanon &mdash; Human Rights Groups Condemn</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The New York Times reports that Israeli military officials are privately urging Christian and Druze communities in southern Lebanon to force out Shiite Muslim residents sheltering among them. Human rights organizations, including Amnesty International and Human Rights Watch, have condemned the plan as ethnic cleansing. This expands Israel&rsquo;s military footprint in Lebanon amid the broader regional war with Iran, raising the risk of a wider multi-front conflict across the Levant.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Adds to the broader Middle East risk premium in commodity markets. Geopolitical uncertainty weighs on emerging market indices across the MENA region.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Elbit Systems (ESLT), Israel Aerospace Industries</strong> &mdash; Israeli defense demand. <strong>Gold miners: Barrick Gold (GOLD), Newmont (NEM)</strong> &mdash; safe-haven demand pushing gold higher.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Emerging market ETFs (EEM, INDA)</strong> &mdash; risk-off rotation from MENA-exposed assets. <strong>Tourism/hospitality in the Eastern Mediterranean</strong> &mdash; cancellations and insurance costs rising.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Space / Science</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. NASA Launches Artemis II &mdash; First Crewed Lunar Flyby Since 1972</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          NASA successfully launched the Artemis II mission on April 1, sending four astronauts on a flyby of the Moon &mdash; the first crewed mission beyond low-Earth orbit since Apollo 17 in December 1972. The mission, aboard the Orion spacecraft atop the Space Launch System (SLS) rocket, marks a major milestone in NASA&rsquo;s plan to return humans to the lunar surface with Artemis III. The mission validates critical life support systems and deep-space navigation for the crewed landing attempt.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Validates the Artemis pipeline and increases confidence in NASA&rsquo;s long-term contracting pipeline. Positive catalyst for aerospace contractors in the Artemis supply chain.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Lockheed Martin (LMT)</strong> &mdash; builds the Orion capsule. <strong>Boeing (BA)</strong> &mdash; SLS core stage contractor. <strong>Northrop Grumman (NOC)</strong> &mdash; SLS solid rocket boosters. <strong>Intuitive Machines (LUNR), Rocket Lab (RKLB)</strong> &mdash; broader space sector sentiment lift. <strong>Jacobs Solutions (J)</strong> &mdash; NASA ground systems engineering.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Defense</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Asian Markets Plunge as Regional Instability Compounds &mdash; Korea, Japan Lead Selloff</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Asia-Pacific markets suffered their worst session in months as Trump&rsquo;s war escalation speech shattered hopes for an imminent end to the Iran conflict. South Korea&rsquo;s Kospi crashed 4.47% to 5,234.05 &mdash; the steepest drop in the region. Japan&rsquo;s Nikkei 225 fell 2.38% to 52,463.27 as the yen strengthened on safe-haven flows. Hong Kong&rsquo;s Hang Seng dropped ~1%, and China&rsquo;s CSI 300 lost 1.04%. The selloff was amplified by the withdrawal of the US 31st Marine Expeditionary Unit from the Indo-Pacific to the Middle East, deepening concerns about regional security gaps as China maintains pressure near Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan&rsquo;s record &yen;9.04 trillion defense budget ($58B) partially offsets security fears but cannot replace US forward presence. Yen strength hurts Japanese exporters. South Korea&rsquo;s export-heavy economy faces dual headwinds of oil costs and regional risk.<br/><br/>
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish:</span> <strong>Mitsubishi Heavy Industries (MHVYF)</strong> &mdash; Japan&rsquo;s primary defense contractor, just deployed Type 25 long-range missiles. <strong>Kawasaki Heavy (KWHIY), IHI Corp</strong> &mdash; Japanese defense industrials. <strong>Hanwha Aerospace (Korea)</strong> &mdash; Korean defense export boom.<br/>
            <span style="color: #ef4444;">Bearish:</span> <strong>Toyota (TM), Sony (SONY), Samsung (SSNLF)</strong> &mdash; Asian exporters hit by yen/won strength and oil cost pressure. <strong>TSMC (TSM)</strong> &mdash; Taiwan proximity risk discount widens.
          </p>
        </div>
      </div>
    </div>

    <!-- Macro Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Macro Outlook &mdash; Key Themes</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Stagflation risk is the dominant macro concern.</strong> The Strait of Hormuz closure echoes the 1970s energy crisis &mdash; sustained oil above $100 feeds inflation, forces central banks to hold rates higher for longer, and drags on growth. The Dow and S&amp;P 500 are tracking their worst month since September 2022.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Defensive positioning recommended:</strong> Overweight energy, defense, and gold. Underweight consumer discretionary, airlines, and rate-sensitive growth. Watch for any Strait of Hormuz reopening signal as the key catalyst for a relief rally.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Markets closed tomorrow (Good Friday).</strong> Thin pre-holiday liquidity amplified today&rsquo;s volatility. Expect gap risk on Monday if weekend developments shift the war trajectory.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Bloomberg &bull; CNBC &bull; Reuters &bull; Al Jazeera &bull; The New York Times &bull; CNN Business &bull; Morgan Stanley &bull; Goldman Sachs &bull; Democracy Now &bull; Wikipedia Current Events &bull; NASA &bull; The Motley Fool &bull; Yahoo Finance &bull; NPR &bull; IEA
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
