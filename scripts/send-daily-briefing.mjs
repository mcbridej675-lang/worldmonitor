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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Intelligence &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== EVENT 1: INDO-PACIFIC DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Acknowledges &ldquo;Unfilled&rdquo; Indo-Pacific Deterrence Gap After 31st MEU Deploys to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee that the Corps has left a gap <strong>&ldquo;unfilled&rdquo;</strong> in the Indo-Pacific after redeploying the <strong>31st Marine Expeditionary Unit</strong> &mdash; the only MEU permanently stationed in the region &mdash; from Okinawa to the Middle East. Approximately <strong>2,500 Marines and three warships</strong>, including amphibious assault ship <strong>USS Tripoli</strong> homeported at Sasebo, departed in March to support operations against Iran in the Strait of Hormuz.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 31st MEU has been <strong>enforcing a blockade of Iranian ports since April 13</strong>, with Marines rappelling from helicopters onto the Iranian-flagged <em>Touska</em> on April 20. Smith was responding to Rep. Derek Tran&rsquo;s question about how the Corps is filling gaps in its ability to deter adversaries &mdash; namely China &mdash; while its only forward-deployed Pacific MEU is in the Persian Gulf. Defense experts have warned that the redeployment <strong>&ldquo;dangerously weakens deterrence against Beijing&rdquo;</strong> at a time when the PLA edges toward its reported 2027 Taiwan readiness timeline.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The absence of the 31st MEU from the Western Pacific is the most significant force posture gap in the region since the unit&rsquo;s establishment. III MEF on Okinawa retains ground and air assets, but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, humanitarian assistance, and noncombatant evacuation operations. The USS Boxer ARG with the 11th MEU arrived in Singapore this week but is not a permanent Indo-Pacific asset.<br/><br/>
            <strong>Watch:</strong> Whether the 31st MEU receives a return timeline &bull; Any temporary MEU rotation to fill the gap &bull; Congressional pressure on DoD to restore Pacific posture &bull; Trump&rsquo;s nomination of Lt. Gen. Roger Turner (current III MEF commander) to lead MARFORPAC, signaling leadership transition at Okinawa&rsquo;s top Marine command.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: CHINESE TYPE 054B FRIGATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / First Island Chain &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Detects China&rsquo;s New Type 054B (Jiangkai III) Frigate Transiting Miyako Strait for the First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Maritime Self-Defense Force confirmed the <strong>first-ever detection</strong> of a <strong>PLAN Type 054B (Jiangkai III-class) guided-missile frigate</strong> operating beyond China&rsquo;s first island chain. The frigate <strong>CNS Luohe (545)</strong> and fast combat support ship <strong>CNS Hulunhu (901)</strong> were spotted sailing south approximately <strong>520 km northwest of Kume Island</strong>, transiting the <strong>Miyako Strait</strong> between Okinawa and Miyako Island into the Western Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Luohe has joined the <strong>Liaoning carrier strike group</strong>, marking the <strong>first confirmed deployment of a Type 054B with a Chinese carrier group</strong>. The Type 054B is a significant upgrade over the older Type 054A, featuring enhanced anti-submarine warfare capabilities with an integrated low-frequency sonar &mdash; a capability gap China has long sought to close. China has begun construction of a <strong>fourth hull</strong> at Hudong Changxingdao shipyard. The Miyako Strait transit demonstrates the PLAN&rsquo;s growing confidence in projecting new platforms beyond the first island chain in close proximity to Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Type 054B&rsquo;s enhanced ASW suite is purpose-built to counter U.S. and Japanese submarine advantages in the Western Pacific. Its integration into carrier strike groups signals the PLAN is accelerating its blue-water capability timeline. The Miyako Strait &mdash; between Okinawa and Miyako Island &mdash; remains the most strategically significant chokepoint for PLAN Pacific access, and this transit was likely coordinated to coincide with the 31st MEU&rsquo;s absence from the region.<br/><br/>
            <strong>Watch:</strong> Duration of the Liaoning CSG deployment in the Western Pacific &bull; Whether additional Type 054Bs join the formation &bull; JMSDF tracking and shadowing operations &bull; Any increase in PLAN submarine activity through the Miyako Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TRILATERAL AIR EXERCISE + NANSEI ISLANDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan-Australia / Air Power / Nansei Islands &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S.-Japan-Australia Trilateral Air Exercise East of Okinawa; JGSDF Conducts First-Ever Nansei Islands Deployment Drill</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S., Japan, and Australia conducted a <strong>trilateral air exercise Thursday in airspace east of Okinawa</strong>. The U.S. deployed <strong>3 F-22 Raptors, 4 F-35A Lightning IIs, 2 KC-135 tankers, 2 F/A-18 Hornets, and 1 KC-130 tanker</strong>. Japan deployed <strong>4 F-15Js and an RC-2 electronic intelligence aircraft</strong>. Australia contributed a <strong>P-8A Poseidon maritime patrol aircraft and KC-30A tanker</strong>. The exercise demonstrated high-end interoperability among the three allies at a time of heightened Chinese naval activity near the islands.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, the <strong>JGSDF Ground Component Command</strong> completed a <strong>first-of-its-kind exercise</strong> (May 17&ndash;22) focused on deploying troops and supplies to remote southwestern islands near Taiwan, including <strong>Ishigaki, Yonaguni, and Miyakojima</strong>. Approximately <strong>300 Japanese soldiers</strong> participated, with <strong>20 Marines from the 12th Marine Littoral Regiment</strong> joining command post training on Miyakojima &mdash; establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Additionally, a <strong>GSDF V-22 Osprey</strong> is planned to land at <strong>MCAS Futenma for the first time</strong> during the upcoming Resolute Dragon exercise (June 20&ndash;30).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of allied air exercises east of Okinawa and ground deployment drills on islands near Taiwan represents a clear signal of trilateral readiness for a Taiwan contingency. The 12th MLR&rsquo;s coordination center on Miyakojima &mdash; only 220 miles from Taiwan &mdash; establishes a new operational footprint. Japan&rsquo;s GSDF Osprey use of U.S. bases on Okinawa deepens logistics interoperability. Russian IL-20 ELINT aircraft were also detected near Honshu on May 21&ndash;22, likely monitoring the exercises.<br/><br/>
            <strong>Watch:</strong> Resolute Dragon 26 exercise scope (June 20&ndash;30) &bull; Whether the 12th MLR coordination center becomes a permanent fixture &bull; Chinese response to JGSDF presence on Miyakojima &bull; Future GSDF Osprey operations from U.S. bases.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: DRONE WARFARE TRAINING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Drone Warfare / Force Modernization &mdash; May 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">III MEF Marines Pioneer Attack Drone Operator Training at Camp Schwab, Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Eighteen Marines</strong> from III MEF completed the <strong>Basic Drone Operator Course</strong> at <strong>Camp Schwab</strong> in northern Okinawa &mdash; one of <strong>six new drone piloting courses</strong> announced by the Marine Corps in December. Students learned to <strong>build 7-inch first-person-view (FPV) drones from kits</strong>, practiced hovering and maneuvering through obstacles using simulators, and progressed to flying through 9-square-foot windows and around PVC obstacles in <strong>&ldquo;full acro mode&rdquo;</strong> &mdash; performing flips, rolls, and dives without flight stabilizers.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Graduates advance to the <strong>Attack Drone Operator Course</strong>, where they learn to deliver <strong>explosive payloads using Neros Archer drones</strong>. The training reflects lessons learned from the Ukraine-Russia conflict, where small FPV drones have become decisive battlefield weapons. III MEF&rsquo;s early adoption of this capability on Okinawa positions forward-deployed Marines to integrate drone warfare tactics into Pacific island defense scenarios &mdash; a critical capability for the distributed maritime operations concept that underpins the 12th Marine Littoral Regiment&rsquo;s mission.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Modernization Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The drone operator pipeline on Okinawa is a direct response to the Ukraine conflict&rsquo;s demonstration that small, cheap FPV drones can neutralize armored vehicles and fortified positions. For island defense in the Nansei chain, attack drones provide Marines with organic anti-ship and anti-landing craft capability without relying on larger, more detectable weapons systems.<br/><br/>
            <strong>Watch:</strong> Expansion of drone courses to other III MEF units &bull; Integration of attack drones into Resolute Dragon 26 &bull; <strong>AVAV</strong> (AeroVironment) and <strong>KTOS</strong> (Kratos Defense) &mdash; drone defense contractors positioned to benefit from USMC procurement &bull; How quickly the Attack Drone Operator Course scales across the Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor Tamaki&rsquo;s Re-Election Bid Faces Headwinds; Futenma Relocation Hits 30-Year Mark; PFAS Contamination Escalates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki&rsquo;s</strong> support is <strong>wavering</strong> ahead of Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. The 66-year-old anti-base relocation incumbent faces challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto LDP candidate who <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is strained after the Centrist Reform Alliance (CRA) &mdash; formed by Komeito and the CDP &mdash; remains undecided on the relocation issue, weakening his political base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> passed its <strong>30th anniversary</strong> in April with no resolution. The U.S. has stated it <strong>will not return the Futenma site unless Japan agrees to a longer runway at Henoko</strong> &mdash; the current V-shaped plan provides only 1,800m runways versus Futenma&rsquo;s 2,700m. Construction continues but is not expected to complete until <strong>at least 2033</strong>. Separately, Okinawa prefecture surveys found <strong>PFAS contamination up to 56 times Japan&rsquo;s legal limit</strong> in groundwater near Kadena Air Base and MCAS Futenma. The U.S. military has <strong>denied all four of Okinawa&rsquo;s requests</strong> for base access to conduct water sampling since 2016.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September gubernatorial election will be a referendum on the U.S. military presence. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports the Henoko relocation plan, potentially accelerating construction but increasing community friction. The PFAS issue is a growing flashpoint in U.S.-Okinawa relations and could become a campaign issue. Japan&rsquo;s Economy Watchers Survey fell for a second straight month (40.80 in April), though the Finance Ministry previously upgraded Okinawa&rsquo;s personal consumption outlook.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s formal position on Futenma relocation &bull; September 13 gubernatorial election polling &bull; PFAS litigation or diplomatic escalation &bull; III MEF leadership transition (Lt. Gen. Watson replacing Turner) &bull; USS George Washington (CVN-73) operations in the Philippine Sea after departing Yokosuka May 24.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: WEATHER & ENVIRONMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Tropical Cyclone Advisory &mdash; May 26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Cyclone Potentially Forming Near Nansei Islands; Rainy Season Active Across Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A cloud mass near the Nansei Islands has the <strong>possibility of developing into a tropical cyclone</strong>, with forecast models predicting potential typhoon classification by <strong>May 27 at 2100 local</strong>. The rainy season front remains stationary over the region, producing <strong>heavy rain and thunderstorms</strong> across Amami and the main island of Okinawa. Base operations and flight schedules may be affected. Military personnel should monitor TCCOR (Tropical Cyclone Condition of Readiness) updates from Kadena Air Base and MCAS Futenma.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the center of a widening strategic paradox.</strong> The 31st MEU&rsquo;s redeployment to the Middle East has created an acknowledged deterrence gap in the Indo-Pacific at the precise moment China is demonstrating new capabilities near the island chain. The first-ever detection of a Type 054B frigate transiting the Miyako Strait &mdash; integrated with the Liaoning carrier group &mdash; signals that the PLAN is exploiting this gap to normalize advanced platform operations beyond the first island chain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Allied response is intensifying but stretched thin.</strong> The U.S.-Japan-Australia trilateral air exercise, the JGSDF&rsquo;s first Nansei Islands deployment drill, the new U.S.-Japan coordination center on Miyakojima, and the drone warfare training pipeline at Camp Schwab all demonstrate commitment to island defense. But these are preparation activities, not a substitute for the 31st MEU&rsquo;s rapid-response capability. The USS George Washington&rsquo;s departure from Yokosuka into the Philippine Sea partially compensates at the carrier level.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground in Okinawa:</strong> The September gubernatorial election will shape the trajectory of U.S. base relations for years. The PFAS contamination crisis is deepening with no resolution in sight. A potential tropical cyclone may affect operations in the coming 48 hours. III MEF&rsquo;s leadership is in transition, with Turner nominated for MARFORPAC and Watson nominated to take command.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; Janes Defence &bull; The Diplomat &bull; Military Times &bull; Military.com &bull; Foreign Policy &bull; AEI &bull; CNN &bull; Naval News &bull; Defence Blog &bull; DVIDSHUB &bull; Japan Ministry of Defense &bull; USMC Okinawa &bull; PredictWind &bull; Ryukyu Shimpo
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
    console.log('\nNote: Sent in testing mode to verified email only.');
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
