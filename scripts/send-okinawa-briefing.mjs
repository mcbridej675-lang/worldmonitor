#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &amp; Indo-Pacific &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Force Posture &bull; Regional Security &bull; Financial</p>
    </div>

    <!-- ===================== EVENT 1: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military Exercise / Indo-Pacific &mdash; May 17&ndash;22 (Commencing Tomorrow)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF Launches First-Ever Nansei Islands Exercise Near Taiwan; 12th MLR Marines to Establish Coordination Center on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused specifically on the <strong>Nansei (Ryukyu) Islands</strong> from May 17&ndash;22, practicing troop deployment and supply transportation across <strong>Ishigaki, Yonaguni, and Miyakojima</strong> &mdash; islands geographically positioned within 100&ndash;300 km of Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>300 JGSDF personnel</strong> drawn from all five regional armies will participate. Critically, <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Schwab, Okinawa) will establish the <strong>first-ever U.S.-Japan coordination center on Miyakojima</strong> from May 17&ndash;20. This represents a significant escalation in bilateral operational integration on Japan&rsquo;s southwestern frontier and signals both nations&rsquo; commitment to deterrence along the First Island Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First time Japan&rsquo;s highest operational ground command has focused training on islands closest to Taiwan. Establishes precedent for forward-deployed U.S.-Japan coordination centers. Expected to draw Chinese condemnation and potential PLA counter-exercises. Aligns with January 2026 bilateral agreements to expand joint training along the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: F-22 RAPTORS KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Air Power &mdash; May 6 (Ongoing)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two F-22 Raptor Squadrons Deploy to Kadena Air Base; F-15EX Delivery Indefinitely Delayed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptors</strong> from Joint Base Elmendorf-Richardson, Alaska have arrived at <strong>Kadena Air Base</strong> for rotational duty with the <strong>18th Wing</strong>. The deployment fills a critical air superiority gap as the permanent fleet of replacement <strong>F-15EX Eagle II</strong> fighters remains indefinitely delayed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The F-15EXs were originally planned to arrive in spring 2026, but a <strong>months-long Boeing factory strike in 2025</strong> left production behind schedule. The Air Force announced in February it has <strong>postponed F-15EX delivery plans</strong> with no updated timeline. Kadena &mdash; the largest U.S. air base in the Pacific &mdash; has relied on rotational deployments since its legacy F-15C/D fleet retired in 2023, creating what analysts have called a &ldquo;fighter gap&rdquo; at a strategically critical moment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            F-22s provide 5th-gen stealth air superiority but the rotational model introduces gaps during transitions. Boeing&rsquo;s delays leave Kadena without a permanent fighter presence for the first time in decades. This coincides with increased Chinese air and naval activity in the East China Sea. Watch for Congressional pressure on Boeing delivery timelines.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA MILITARY POSTURING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Regional Threat / China &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PLA Eastern Theater Command Maintains Elevated Posture; 40-Day Airspace Lockdown Concluded; Xi Warns of &ldquo;Conflict&rdquo; Over Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s <strong>Eastern Theater Command</strong> launched combat readiness patrols in the East China Sea and sent warships near Okinawa in April after the JMSDF destroyer <em>Ikazuchi</em> transited the Taiwan Strait. China&rsquo;s MFA, MOD, and Eastern Theater Command all issued condemnation statements. The <strong>Liaoning carrier strike group</strong> conducted cross-theater exercises in both the Philippine Sea and South China Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China imposed its <strong>longest unexplained offshore airspace restriction in recent memory</strong> &mdash; reserving enormous sections over the Yellow Sea and East China Sea for <strong>40 consecutive days</strong> (March 27&ndash;May 6). The restricted zones sat directly overlooking approaches facing Japan and South Korea. At the ongoing <strong>Trump-Xi Beijing Summit</strong>, Xi warned that mishandling Taiwan risks &ldquo;collision or conflict&rdquo; and called it &ldquo;the most important issue in U.S.-China relations.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of PLA Eastern Theater patrols near Okinawa, the 40-day airspace lockdown, and Xi&rsquo;s sharp Taiwan rhetoric at the Beijing summit indicates a sustained period of elevated Chinese military posturing in the approaches to Okinawa. Japan&rsquo;s upcoming Nansei exercise will likely trigger further PLA responses. Foreign Policy assessed a Japan-China military clash as &ldquo;dangerously likely.&rdquo;
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: OHA INCREASE & BASE DEVELOPMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Force Support / Quality of Life &mdash; Effective May 16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Overseas Housing Allowance Increase Effective Today: $400&ndash;$500/Month Boost for Okinawa Service Members</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>18th Wing Commander</strong> at Kadena Air Base confirmed that U.S. service members living off-base on Okinawa will receive a <strong>$400&ndash;$500 per month increase</strong> in Overseas Housing Allowance (OHA), effective <strong>May 16, 2026</strong> (today). The increase applies across all ranks and is managed through the Okinawa Family Housing Office at Kadena.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The increase comes as the <strong>USD/JPY exchange rate has risen to 158.5</strong>, making the yen weaker against the dollar. While this partially offsets housing costs for dollar-earners, the OHA boost reflects rising local rental market pressures. Separately, the <strong>Kishaba Housing Area</strong> (~12 acres at Camp Foster) will be returned to Okinawa by fall 2026 to alleviate traffic congestion on Route 58.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Largest single-month OHA increase in recent memory for Okinawa. Addresses quality-of-life concerns that affect retention. The weak yen (158.5/USD) benefits dollar-earners for daily expenses but housing market remains tight. Kishaba return demonstrates incremental progress on reducing the U.S. military footprint as pledged by Japan&rsquo;s defense minister in January.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FUTENMA / 12TH MLR / FORCE STRUCTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Force Structure / Basing &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Stalls at 30-Year Mark; 12th MLR Advances Drone &amp; Live-Fire Capabilities at Camp Schwab</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> remains in limbo 30 years after the 1996 agreement. The Pentagon will not return the Futenma site unless Japan secures a <strong>longer runway</strong> than the 1,800m V-shaped runways planned at Henoko (Futenma&rsquo;s current runway is 2,700m). Construction at Henoko is not expected to complete until <strong>2033</strong>, with the earliest possible land return pushed to <strong>2036</strong>. Japan&rsquo;s Defense Ministry said it takes the delay &ldquo;seriously.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, the <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues advancing its operational capabilities at Camp Schwab. On May 7, Marines trained with the <strong>Neros Archer Strike Variant drone system</strong>. Earlier this year, the unit executed the <strong>first-ever overhead live-fire range</strong> in Okinawa (January 28) and crew-served weapons training (March 10). The 12th MLR is building toward full operational capability as the Marine Corps&rsquo; forward-deployed stand-in force for the First Island Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Futenma delay creates sustained friction with the Okinawan community and complicates U.S.-Japan alliance management. The 12th MLR&rsquo;s Neros Archer drone training and live-fire firsts demonstrate the regiment is rapidly building organic precision strike and ISR capabilities tailored for distributed maritime operations &mdash; exactly the force design needed for a Taiwan contingency.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the center of an accelerating military buildup on both sides.</strong> Tomorrow&rsquo;s Nansei Islands exercise marks a watershed &mdash; the first time Japan&rsquo;s top ground command trains specifically on islands near Taiwan, with U.S. Marine coordination. China&rsquo;s Eastern Theater Command has already demonstrated willingness to respond with patrols near Okinawa. The 12th MLR is rapidly maturing as a stand-in force with organic drone strike capability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Trump-Xi summit adds a diplomatic overlay.</strong> Xi&rsquo;s explicit warning that Taiwan mishandling risks &ldquo;conflict&rdquo; comes just as Japan and the U.S. are expanding exercises on the very islands China considers within its sphere. The next 7 days (summit conclusion + exercise window) represent a period of elevated risk for incidents or provocative PLA responses near Okinawa.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PLA response to Nansei exercise (May 17&ndash;22) &bull; Trump-Xi summit Day 2 Taiwan outcomes &bull; F-15EX delivery timeline update &bull; Chinese naval activity near Miyako Strait &bull; Local protests around upcoming exercises &bull; BOJ rate decision impact on yen/OHA dynamics &bull; Futenma runway negotiations
      </p>
    </div>

    <!-- ===================== FINANCIAL SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Financial Snapshot &mdash; Okinawa Impact</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; color: #ccc;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">USD/JPY</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 700;">158.58</td>
          <td style="padding: 8px 0; text-align: right; color: #22c55e; font-size: 11px;">Favorable for dollar-earners</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Brent Crude</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 700;">$107.77/bbl</td>
          <td style="padding: 8px 0; text-align: right; color: #dc2626; font-size: 11px;">Elevated (Iran crisis)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Nikkei 225</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 700;">&minus;0.98%</td>
          <td style="padding: 8px 0; text-align: right; color: #dc2626; font-size: 11px;">Under pressure</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">OHA Increase</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 700;">+$400&ndash;500/mo</td>
          <td style="padding: 8px 0; text-align: right; color: #22c55e; font-size: 11px;">Effective today</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888;">BOJ Policy Rate</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 700;">0.50%</td>
          <td style="padding: 8px 0; text-align: right; color: #eab308; font-size: 11px;">Hike expected soon</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars &amp; Stripes &bull; The Japan Times &bull; Air &amp; Space Forces Magazine &bull; DVIDSHUB &bull; South China Morning Post &bull; The Diplomat &bull; Foreign Policy &bull; Defence Security Asia &bull; AEI China-Taiwan Update &bull; Military.com &bull; Defense News &bull; Reuters &bull; Trading Economics &bull; Bank of Japan
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

const TESTING_RECIPIENTS = ['johnmcbride2928@gmail.com'];
const useTestingMode = !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Okinawa Regional Intelligence Briefing — ${today}`,
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
    console.log(`\nNote: Sent in testing mode to verified email only.`);
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
