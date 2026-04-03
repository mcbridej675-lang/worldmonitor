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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Intelligence &bull; Government &bull; Financial</p>
    </div>

    <!-- THREAT ENVIRONMENT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Current Threat Environment &mdash; Okinawa AOR</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Force Posture</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">DEGRADED &mdash; 31st MEU deployed to CENTCOM</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">PRC Activity Level</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">ELEVATED &mdash; New ASW aircraft operating near Okinawa</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Liberty Status</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">RESTRICTED &mdash; Solo patrols paused</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Japan Defense Posture</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">HEIGHTENED &mdash; Record &yen;9.04T defense budget</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right;">52,463.27 (-2.38%)</td>
        </tr>
      </table>
    </div>

    <!-- Event 1: Chinese ASW Aircraft -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Intelligence / PRC Military Activity</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. China Deploys New Y-9FQ Anti-Submarine Warfare Aircraft Near Okinawa &mdash; JASDF Scrambles Fighters</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On March 28, Japanese fighter pilots from the Southwestern Air Command intercepted an improved variant of China&rsquo;s Y-9 maritime patrol aircraft operating over the East China Sea approximately <strong>160 miles northeast of Okinawa</strong>. Aviation analyst J. Michael Dahm identified the aircraft as the <strong>Y-9FQ</strong>, a next-generation anti-submarine warfare platform first observed at a Chinese factory in 2022 and officially unveiled during Beijing&rsquo;s Victory Day parade in September 2025.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Y-9FQ features a redesigned nose housing a high-definition AESA radar (relocated from the KQ-200&rsquo;s chin mount), advanced electro-optical sensors, and upgraded ELINT systems. Paint scheme analysis suggests the aircraft has achieved <strong>full operational capability</strong> and likely belongs to PLA Naval Air Force units based in Zhejiang province. The Japan Joint Staff confirmed &ldquo;visible differences including the shape of the aircraft&rsquo;s nose and additional antennas.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China is actively improving its ability to detect and track US and allied submarine activity in the waters surrounding Okinawa. This is especially significant given the 31st MEU&rsquo;s departure from the region, which reduces the US naval presence and anti-access capabilities. The timing of this patrol &mdash; coinciding with reduced US force posture &mdash; suggests deliberate intelligence collection during a window of diminished US presence.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2: 31st MEU Departure -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. 31st MEU &amp; USS Tripoli Now in CENTCOM Waters &mdash; Indo-Pacific Security Gap Widens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2,200+ Marines of the 31st Marine Expeditionary Unit</strong> and the amphibious assault ship <strong>USS Tripoli</strong> (homeported in Sasebo) have arrived in U.S. Central Command waters after departing Okinawa on March 13 to support Strait of Hormuz operations amid the US-Iran conflict. Defense analysts warn this creates a <strong>critical gap in Indo-Pacific force projection</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 31st MEU possesses &ldquo;unique capabilities&rdquo; that cannot be easily replaced without moving another expeditionary unit into the region &mdash; and the US Navy lacks sufficient amphibious ships to keep enough MEUs fully operational and deployable. The removal of this unit eliminates one of the <strong>primary ground combat elements</strong> in the Pacific capable of rapid response to a crisis involving China, North Korea, or Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous deployment of the 31st MEU to CENTCOM and increased Chinese ASW activity near Okinawa represents a <strong>strategic vulnerability</strong>. Japan&rsquo;s record defense budget partially offsets the gap, but cannot substitute for the expeditionary strike capability the MEU provides. Allies in the region are watching closely.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3: Marines Drone Strike Milestone -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Military / Innovation</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. USMC Conducts First-Ever Live-Fire Drone Strike Against Maritime Vessel &mdash; Naval Base White Beach, Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marines from the <strong>III Expeditionary Operations Training Group</strong> in Okinawa, alongside US Naval Special Warfare Command operators, executed the Marine Corps&rsquo; <strong>first live-fire drone strike against a maritime surface vessel</strong> launched from a naval surface craft at Naval Base White Beach. The target was an unmanned surface vessel (USV) designed and constructed by the training group itself.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise demonstrated the ability to investigate vessels of interest using combined unmanned surface and aerial assets, then engage confirmed hostile targets with organic unmanned firepower. Major Brant Wayson called it &ldquo;a landmark in the increasingly close integration of special operations forces and conventional forces.&rdquo; Marines are being trained to construct unmanned systems from locally available materials during conflict scenarios.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This milestone advances the Marine Corps&rsquo; transformation toward distributed maritime operations and sea-denial in the First Island Chain. The capability to build, deploy, and employ strike drones from surface craft aligns with III MEF&rsquo;s evolving role as a sea-denial force in the Okinawa operating environment. Directly relevant to countering PRC naval expansion.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4: Evacuation Drill -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Government / Civil Defense</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Japan Announces First Field Evacuation Drill for Remote Okinawan Islands &mdash; Taiwan Contingency</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese central government and Okinawa Prefecture announced plans for the <strong>first-ever field evacuation drill</strong> for remote Okinawan islands under the civil protection law, scheduled for January 2027. The drill will include both tabletop and live field exercises involving <strong>five municipalities</strong>: Ishigaki, Miyakojima, Taketomi, Yonaguni, and Tarama &mdash; all located in the strategically critical Sakishima Island chain near Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All seven Kyushu prefectures plus Yamaguchi Prefecture will participate as evacuee-receiving areas. Previous exercises (FY2022&ndash;FY2025) were tabletop-only. The escalation to field training reflects growing urgency around <strong>Taiwan contingency planning</strong> and Japan&rsquo;s assessment that civilian evacuation readiness on its southwestern islands is insufficient.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The transition from tabletop to field evacuation drills signals that Japan is operationalizing its Taiwan contingency plans. Yonaguni Island is just 68 miles from Taiwan. This announcement, combined with Japan&rsquo;s record defense budget and accelerated missile deployments, indicates that Tokyo views a potential cross-strait crisis as a near-term planning scenario, not a distant hypothetical.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5: Base Negotiations & Okinawa Funding -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Government / Financial</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Okinawa Development Funds Rise for First Time in a Decade &mdash; &yen;264.7B Allocated; Base Negotiations Continue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The ruling LDP approved <strong>&yen;264.7 billion ($1.72B)</strong> in Okinawa development funds for the fiscal year beginning April 2026, marking the <strong>first increase in 10 years</strong> (+&yen;500M). The increase includes &yen;73.6B in discretionary grants. However, the allocation still falls short of the &yen;300B+ requested by Gov. Denny Tamaki&rsquo;s prefectural government for the fifth consecutive year. The increase is widely viewed as politically motivated ahead of next summer&rsquo;s gubernatorial election.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, the <strong>MCAS Futenma relocation</strong> to Camp Schwab remains on track but won&rsquo;t complete until at least 2033. Japan&rsquo;s Defense Minister Koizumi pledged on his first Okinawa visit to reduce the US military footprint while maintaining alliance deterrence. The Finance Ministry also upgraded its economic assessment for Okinawa, citing strong tourism recovery. US-Japan base cost-sharing negotiations ahead of the 2026 deadline will shape force posture across the island.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Tokyo is attempting to balance Okinawa&rsquo;s base-hosting burden with political concessions ahead of elections. The tension between reducing the military footprint and maintaining deterrence against China has never been sharper, especially with the 31st MEU deployed outside the theater. Any significant changes to basing arrangements during this vulnerable period would amplify the security gap.
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Items -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Additional Items of Note</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">CH-53E Emergency Landing (Mar 30):</strong> A Marine CH-53E Super Stallion made an emergency landing near a baseball field in Nago city, interrupting a game and prompting formal objections from the Okinawa Prefectural Assembly. This fuels ongoing local tensions over aircraft safety near residential areas.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Solo Patrols Remain Paused:</strong> Solo military patrols in Okinawa nightlife districts remain suspended pending an ongoing investigation into an assault incident captured on viral video. Liberty restrictions continue to apply.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Military Spouse Leadership Seminar (Apr 14&ndash;16):</strong> A spring leadership and community-building seminar is scheduled at Butler Officers&rsquo; Club, Plaza Housing, near Camp Foster for military spouses.
      </p>
    </div>

    <!-- Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Outlook &mdash; Key Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture is the #1 concern.</strong> The 31st MEU&rsquo;s absence from the Indo-Pacific creates the most significant gap in US forward presence in the region in years. China&rsquo;s deployment of the Y-9FQ near Okinawa suggests Beijing is actively probing during this window. Monitor for additional PLA Navy or Air Force activity in the East China Sea.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Taiwan contingency planning accelerating.</strong> The field evacuation drill announcement, combined with Japan&rsquo;s record defense spending and Type 25 missile deployments to southwestern islands, indicates Japan is preparing for scenarios that were previously considered low-probability. Coordination with US forces on Okinawa will be essential.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Local political dynamics remain volatile.</strong> The base burden debate, Futenma relocation timeline, helicopter incidents, and liberty restrictions all contribute to friction between the US military presence and local communities. The upcoming gubernatorial election adds political sensitivity to every incident.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Naval Today &bull; Military.com &bull; Military Times &bull; Nippon.com &bull; Japan Ministry of Defense / Joint Staff &bull; Janes Defence &bull; Aviation News EU &bull; UNITED24 Media &bull; ABC News &bull; Japan Today &bull; Nikkei Asia &bull; South China Morning Post &bull; Breaking Defense &bull; Responsible Statecraft
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
  subject: `[World Monitor] Okinawa Regional Intelligence Briefing \u2014 ${today}`,
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
