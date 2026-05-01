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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- FINANCIAL SNAPSHOT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Regional Market Snapshot &mdash; May 1, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">59,284.92 (-1.06%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">USD/JPY</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">&yen;156.54 (Yen strengthening after intervention)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$118/bbl (+6% &mdash; Iran blockade)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">S&amp;P 500</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right;">7,209.01 (All-Time High)</td>
        </tr>
      </table>
    </div>

    <!-- EVENT 1: Nansei Islands Military Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Regional Security &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF Announces First-Ever Ground Component Command Exercise on Nansei Islands &mdash; U.S. Marines to Participate</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Ground Self-Defense Force will conduct its first exercise focused specifically on the <strong>Nansei (Ryukyu) Island chain</strong> from <strong>May 17&ndash;22</strong>, marking a significant escalation in deterrence posture against China. Approximately <strong>300 JGSDF soldiers</strong> from all five regional armies will deploy across <strong>Ishigaki, Yonaguni, and Miyakojima</strong> &mdash; islands sitting roughly <strong>220 miles east of Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> will establish the first-ever U.S.-Japan coordination center on Miyakojima (May 17&ndash;20). The exercise includes deployment of a <strong>Type-88 surface-to-ship guided missile launcher</strong> on Ishigaki and two <strong>ScanEagle II UAVs</strong> on Yonaguni. Troop deployment and supply logistics will be tested across <strong>nine ports</strong>. The 3rd Marine Division spokesman stated the exercise &ldquo;strengthens 12th MLR and the JGSDF&rsquo;s interoperability, improving shared understanding, and enhancing the overall effectiveness of our combined partnership.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First time JGSDF Ground Component Command has focused on Nansei Islands. Signals Japan&rsquo;s accelerating military posture in the First Island Chain. The 12th MLR&rsquo;s involvement validates the USMC Force Design 2030 concept for distributed maritime operations. <strong>Key for forward-deployed forces on Okinawa:</strong> expect increased logistics and coordination tempo in the lead-up to exercise dates. China will likely respond with diplomatic protests and potential PLAN activity increases near Miyako Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Camp Foster Kishaba Return -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Base Operations / Community &mdash; Apr 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Corps to Return 12 Acres of Kishaba Housing on Camp Foster &mdash; Road Widening Planned</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan-U.S. Joint Committee finalized an agreement on <strong>April 17</strong> for the return of approximately <strong>12 acres and 32 housing units</strong> in the Kishaba Housing Area on Camp Foster. The return is expected by <strong>late fall 2026</strong>, with approximately one year needed for demolition and boundary fence installation. Approximately <strong>200 replacement units</strong> are under construction in northern Kishaba behind Zukeran Elementary School.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Once returned, Okinawa Prefecture plans to widen <strong>Prefectural Road 81 from two to four lanes</strong> to alleviate chronic traffic congestion connecting east and west Okinawa. Defense Minister Koizumi noted the road &ldquo;is a major thoroughfare&rdquo; suffering from chronic congestion. <strong>For personnel on Camp Foster:</strong> housing relocations to northern Kishaba units are contingent on operational utilities and livable condition requirements being met.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Impact on Personnel</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Affected families in the 32 Kishaba units should anticipate relocation to replacement housing. Route 81 widening will eventually improve commute times for personnel transiting between installations. This return is part of broader consolidation efforts under the 2013 Okinawa Consolidation Plan and signals continued progress on reducing the U.S. military footprint. Watch for further Joint Committee announcements regarding timeline adjustments.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Futenma / Naha Airport Controversy -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Political &mdash; Apr 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Stalled at 30 Years &mdash; Pentagon Links Naha Airport Runway to Handover</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The site of MCAS Futenma <strong>has yet to be returned to Japan despite 30 years</strong> since the 1996 bilateral agreement. The Pentagon has now conditioned the return of Futenma on <strong>designation of a new runway at Naha Airport for emergency military use</strong>, creating a fresh political flashpoint. Japan&rsquo;s government stated it &ldquo;takes seriously&rdquo; the delay but maintained that relocation to the <strong>Henoko coastal district in Nago</strong> remains &ldquo;the only viable solution.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The linkage between civilian airport infrastructure and military base relocation has emerged as a new complication. Governor Tamaki continues to oppose the Henoko plan, calling it <strong>&ldquo;absolutely unacceptable&rdquo;</strong> as it would lead to &ldquo;permanent consolidation of the base.&rdquo; This issue is expected to dominate the <strong>September 13 gubernatorial election</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Pentagon&rsquo;s Naha Airport requirement introduces a new variable that could further delay Futenma&rsquo;s closure. With the gubernatorial election approaching, expect heightened political rhetoric around base issues. The U.S.-Japan alliance management will be closely watched &mdash; any perception of backsliding on consolidation commitments risks fueling anti-base sentiment. The Henoko landfill project continues on soft seabed conditions that have already caused years of construction delays.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Governor Tamaki Third-Term Bid -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Elections &mdash; Apr 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Faces Wavering &ldquo;All Okinawa&rdquo; Coalition Support</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> formally announced his candidacy for the <strong>September 13, 2026 gubernatorial election</strong>, seeking an unprecedented third term. However, his &ldquo;All Okinawa&rdquo; coalition is showing cracks: the <strong>Centrist Reform Alliance remains undecided</strong> on its position regarding the Futenma relocation plan, a key litmus test for coalition membership.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely challenger is <strong>Genta Koja, 42</strong>, a former deputy mayor of Naha running as the de facto <strong>Liberal Democratic Party (LDP) candidate</strong> who supports the Henoko relocation plan. The political landscape has shifted following Japan&rsquo;s <strong>February 2026 general election</strong>, weakening some of Tamaki&rsquo;s traditional support base. The race will serve as a referendum on U.S. military presence in Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Political Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A Koja victory would represent a significant shift toward central government alignment on base issues and could accelerate Henoko construction. A Tamaki re-election would maintain the current adversarial dynamic with Tokyo on relocation. Either outcome will shape the operational environment for U.S. forces on Okinawa for the next four years. The February general election results suggest national-level LDP momentum that could benefit Koja.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: SOFA Orientation Changes -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Community Relations / SOFA &mdash; Apr 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Prefecture Requests Changes to SOFA Newcomer Orientation &mdash; Cultural Sensitivity Focus</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s prefectural government has formally requested modifications to the <strong>mandatory newcomers orientation briefing</strong> for all personnel arriving under the U.S.-Japan Status of Forces Agreement. Key proposed changes include revisions to the <strong>incidents and accidents section</strong> and updates to how <strong>Irei No Hi</strong> (Okinawa&rsquo;s June 23 WWII memorial day) is presented, emphasizing &ldquo;Okinawans&rsquo; desire for peace.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Okinawa Community Partnership Forum</strong> &mdash; established in response to sexual assault allegations involving service members beginning in late 2023 &mdash; held its first meeting and sought suggestions for improving the briefing. The review aims to ensure content &ldquo;effectively familiarizes new arrivals with Okinawa&rsquo;s unique history and culture&rdquo; and fosters understanding of &ldquo;the high expectations of the Okinawan people.&rdquo; No implementation timeline has been announced.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Personnel Note</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect updated orientation content for incoming personnel in the coming months. The Community Partnership Forum represents the most structured bilateral mechanism for addressing community relations since the 2024 incidents. All commands should anticipate heightened emphasis on cultural awareness and community engagement standards. Irei No Hi (June 23) is approaching &mdash; commands should ensure appropriate observance protocols are in place.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: Japan Economic / Financial Context -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Financial / Economic &mdash; Apr 30&ndash;May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tokyo Intervenes as Yen Breaches &yen;160 &mdash; BOJ Warns of Oil-Driven Slowdown; Okinawa Tourism Upgraded</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen <strong>surged as much as 3% overnight</strong> after Tokyo intervened in currency markets as USD/JPY breached the critical <strong>&yen;160 threshold</strong>. The pair settled near <strong>&yen;156.54</strong> on May 1, a level previously triggering official action in July 2024. The Bank of Japan&rsquo;s April outlook warned that <strong>crude oil price spikes</strong> from the Iran blockade would push down corporate profits and household real income in FY2026, decelerating economic growth.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa-specific:</strong> The Finance Ministry <strong>upgraded its economic assessment for Okinawa tourism</strong> in January 2026, citing strong visitor numbers despite Chinese government travel advisories. Personal consumption in Okinawa was also upgraded. Japan has committed to invest <strong>$550 billion in the U.S. economy</strong> as part of the bilateral trade relationship to prevent new tariffs from President Trump. The IMF&rsquo;s 2026 Article IV consultation flagged Japan&rsquo;s defense spending increases as a fiscal consideration.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Yen volatility directly affects purchasing power for U.S. personnel on Okinawa &mdash; the stronger yen at &yen;156.54 is more favorable than the &yen;160+ levels earlier this week. Elevated oil prices ($118/bbl) will increase cost of living across Okinawa. Japan&rsquo;s defense budget expansion supports continued investment in Nansei Island infrastructure. Okinawa&rsquo;s upgraded tourism outlook is a positive for the local economy but Chinese travel advisories remain a risk factor.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Commander&rsquo;s Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Nansei Islands exercise (May 17&ndash;22)</strong> is the headline event. The first-ever JGSDF Ground Component Command focus on the Ryukyu chain, combined with 12th MLR participation, signals a new phase of deterrence operations in the First Island Chain. Expect increased coordination requirements and possible Chinese military response activity in the Miyako Strait.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Political environment:</strong> The September 13 gubernatorial election will define civil-military relations on Okinawa for the next four years. Governor Tamaki&rsquo;s coalition is fragmenting, and the LDP-backed challenger could shift the dynamic on base realignment. Futenma&rsquo;s 30-year impasse and the new Naha Airport runway condition add complexity.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Economic conditions:</strong> Yen intervention provides temporary relief for dollar-earners, but $118 oil and BOJ growth warnings point to rising costs across the island. Irei No Hi (June 23) is approaching &mdash; ensure appropriate command awareness and observance.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Nikkei Asia &bull; The Japan Times &bull; Nippon.com &bull; Military.com &bull; Marines.mil &bull; Bank of Japan &bull; IMF &bull; Deloitte Japan Economic Outlook &bull; Trading Economics &bull; Kadena Air Base Public Affairs &bull; Okinawa Prefecture Government
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Okinawa Intelligence Briefing — ${today}`,
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
