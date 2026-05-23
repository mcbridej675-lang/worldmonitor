#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== EVENT 1: JIANGKAI III FIRST DETECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">PRC Naval Activity / First Island Chain &mdash; May 18&ndash;19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JMSDF Detects Jiangkai III-Class Frigate Near Okinawa for First Time; PLA Navy Transits Miyako Strait</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Maritime Self-Defense Force confirmed the <strong>first-ever detection of a People&rsquo;s Liberation Army Navy (PLAN) Jiangkai III (Type 054B)-class frigate</strong> operating beyond China&rsquo;s first island chain. On <strong>May 18</strong>, JMSDF spotted the frigate <strong>CNS Luohe (545)</strong> and the fast combat support ship <strong>CNS Hulunhu (901)</strong> approximately <strong>520 km northwest of Kume Island</strong>. By <strong>May 19</strong>, the two vessels <strong>transited southeast through the Miyako Strait</strong> &mdash; between Okinawa Island and Miyako Island &mdash; entering the <strong>Philippine Sea</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Jiangkai III is China&rsquo;s newest guided-missile frigate class, representing a significant leap in PLA Navy surface combatant capability with advanced radar and weapons systems. The transit through the Miyako Strait &mdash; a critical chokepoint in Japan&rsquo;s southwestern island defense perimeter &mdash; underscores <strong>Beijing&rsquo;s accelerating power projection into the Western Pacific</strong>. This detection coincides with the deployment of the <strong>Liaoning carrier strike group</strong> for live-fire drills in the Western Pacific announced on <strong>May 19</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First operational deployment of a next-generation Chinese frigate near Japanese waters signals increased PLA Navy confidence in blue-water operations. Combined with the Liaoning carrier group deployment, this represents a coordinated multi-axis push into the Western Pacific. JMSDF and U.S. 7th Fleet anti-submarine and surface surveillance operations in the Miyako Strait corridor will likely intensify.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TRILATERAL AIR EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Allied Operations / Air Power &mdash; May 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S., Japan &amp; Australia Execute Trilateral Air Exercise East of Okinawa with F-22s, F-35s &amp; F-15Js</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>May 21</strong>, the United States, Japan and Australia conducted a <strong>trilateral air exercise over the Pacific Ocean east of Okinawa</strong>. The combined force included a significant array of advanced combat and support aircraft:
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.S. Air Force:</strong> 3&times; F-22 Raptor, 4&times; F-35A Lightning II, 2&times; KC-135 Stratotanker<br/>
          <strong>U.S. Marine Corps:</strong> 2&times; F/A-18 Hornet, 1&times; KC-130 tanker<br/>
          <strong>Japan Air Self-Defense Force:</strong> 4&times; F-15J, 1&times; RC-2 Electronic Intelligence aircraft<br/>
          <strong>Royal Australian Air Force:</strong> 1&times; P-8A Poseidon, 1&times; KC-30A Multi-Role Transport Tanker
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise is part of an ongoing series of trilateral engagements designed to enhance interoperability and demonstrate allied resolve in the Indo-Pacific. The inclusion of JASDF&rsquo;s <strong>RC-2 ELINT aircraft</strong> and Australia&rsquo;s <strong>P-8A maritime patrol platform</strong> signals integration of intelligence, surveillance, and reconnaissance capabilities alongside fighter operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The timing &mdash; one day after the Liaoning carrier strike group deployment &mdash; is not coincidental. Trilateral air exercises east of Okinawa rehearse air superiority and sea-denial scenarios directly relevant to a Taiwan contingency. The mix of 5th-gen fighters (F-22/F-35), legacy platforms (F-15J/F-18), ISR assets and tanker support simulates a full-spectrum air campaign.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Japan / USMC / Island Defense &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan&rsquo;s First-Ever Nansei Islands Defense Exercise Wraps Up; 12th MLR Integrates with JGSDF</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> concluded a landmark exercise on <strong>May 22</strong> &mdash; the <strong>first time Japan&rsquo;s highest army operational command specifically focused on the Nansei (Ryukyu) Islands</strong> for training. Approximately <strong>300 JGSDF soldiers from all regional armies</strong> and <strong>20 U.S. Marines from the Okinawa-based 12th Marine Littoral Regiment</strong> participated in operations across <strong>Ishigaki, Yonaguni, and Miyakojima</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key activities included: <strong>bilateral command post training</strong> in Miyakojima with a U.S.-Japan coordination center; deployment of <strong>Type-88 surface-to-ship missile launchers</strong> to Ishigaki; deployment of <strong>two ScanEagle II UAVs</strong> to Yonaguni; and <strong>supply transport exercises using nine ports across Japan</strong>. The exercise aimed to &ldquo;improve deterrence and response in the region through mobile deployment and material transportation.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This exercise marks a doctrinal shift for the JGSDF. Deploying anti-ship missiles to Ishigaki (approx. 270 km from Taiwan) and UAVs to Yonaguni (approx. 110 km from Taiwan) rehearses a distributed maritime defense concept that mirrors USMC&rsquo;s Expeditionary Advanced Base Operations (EABO). The 12th MLR&rsquo;s participation signals deepening bilateral interoperability for island defense scenarios.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: GSDF OSPREY TO USE FUTENMA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC-JGSDF / Aviation / Okinawa &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">GSDF V-22 Osprey to Use MCAS Futenma for First Time During Resolute Dragon Exercise</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Japan Ground Self-Defense Force <strong>V-22 Osprey</strong> is expected to land at <strong>MCAS Futenma in Okinawa Prefecture</strong> for the first time, as part of the upcoming <strong>Resolute Dragon exercise</strong> between JGSDF and U.S. Marine Corps, scheduled for <strong>June 20&ndash;30</strong>. The GSDF is planning to have the Osprey <strong>airlift a mock patient from Miyako Island to Futenma</strong> &mdash; a CASEVAC drill that would also mark the first GSDF Osprey landing on Miyako Island.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Futenma landing is politically sensitive. The base sits in <strong>densely populated Ginowan</strong>, and <strong>Governor Denny Tamaki</strong> &mdash; who announced his bid for a <strong>third term in the Sept. 13 gubernatorial election</strong> &mdash; continues to <strong>oppose the Futenma-to-Henoko relocation plan</strong>. The Futenma site has <strong>not been returned to Japan 30 years after the 1996 agreement</strong>, and a recent dispute over the Henoko replacement facility&rsquo;s shorter runway (1,800m vs. Futenma&rsquo;s 2,700m) has further complicated the timeline.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Operational Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A GSDF Osprey at Futenma deepens the base&rsquo;s operational role even as the relocation debate lingers. The Pentagon has conditioned Futenma&rsquo;s return on a long runway at Henoko, which Japan says can be met by using a civilian airport. With Tamaki running on an anti-relocation platform ahead of the September election, Osprey operations at Futenma will amplify local opposition. Construction at Henoko is not expected to finish until <strong>at least 2033</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: LIAONING CARRIER STRIKE GROUP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">PRC Power Projection / Western Pacific &mdash; May 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Deploys Liaoning Carrier Strike Group for Live-Fire Drills in Western Pacific</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>May 19</strong>, Beijing dispatched the <strong>Liaoning carrier strike group</strong> into the Western Pacific for a series of drills including <strong>long-range tactical flight operations, live-fire exercises, escort missions, and integrated search-and-rescue training</strong>. The PLA described the drills as part of its &ldquo;regular annual training program&rdquo; aimed at improving combat readiness.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The deployment came <strong>days after the Trump-Xi summit in Beijing on May 14&ndash;15</strong>, during which the two leaders agreed to establish a &ldquo;constructive strategic stability relationship.&rdquo; Chinese state media framed the drills as a &ldquo;strong deterrent against certain ill-intentioned countries and Taiwan independence separatist forces.&rdquo; The carrier operations are occurring in the same waters where the U.S.-Japan-Australia trilateral air exercise took place on May 21, underscoring the intensifying <strong>great-power military competition in Okinawa&rsquo;s maritime approaches</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Beijing is demonstrating that diplomatic engagement with Washington does not equate to military restraint. The concurrent Liaoning deployment and Jiangkai III transit through the Miyako Strait constitute a coordinated show of force in the waters surrounding Okinawa. For U.S. forces on Okinawa, this reinforces the operational imperative behind the 12th MLR&rsquo;s stand-in force concept and the broader Nansei Islands defense buildup.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== FINANCIAL & ECONOMIC SNAPSHOT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">&#9733;</span>
          <span style="color: #666; font-size: 11px;">Financial &amp; Economic Snapshot</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa &amp; Japan Economic Indicators</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Japan GDP:</strong> Real GDP rose <strong>2.1% annualized</strong> in Q1 2026 (Cabinet Office).<br/>
          <strong>BOJ Policy:</strong> Board member Junko Koeda stated the BOJ should raise rates &ldquo;at an appropriate pace&rdquo;; rates held steady at the April 28 meeting. JGB yields rose in sympathy with the global bond sell-off.<br/>
          <strong>Exports:</strong> Japan&rsquo;s chip exports surged <strong>44% YoY</strong> in May, driven by AI demand. Trade surplus held positive in April.<br/>
          <strong>Sentiment:</strong> Economy Watchers Survey fell to <strong>40.80</strong> in April (from 42.20 in March), signaling weakening domestic confidence across all 11 regions including Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa Tourism:</strong> Named <strong>Expedia&rsquo;s #2 Destination of the Year 2026</strong> after a 71% YoY surge in searches. FY2025 visitors expected to exceed <strong>10 million for the first time</strong>. A new <strong>2% prefectural accommodation tax</strong> took effect in April 2026 &mdash; Japan&rsquo;s first prefectural-level lodging tax &mdash; projected to generate <strong>&yen;7.8 billion annually</strong>.<br/>
          <strong>Okinawa Development:</strong> Junglia theme park opened in Nakijin Village. <strong>Shuri Castle main hall restoration</strong> expected to complete by autumn 2026. Finance Ministry upgraded Okinawa&rsquo;s economic assessment to &ldquo;recovering&rdquo; in January 2026.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">&#9733;</span>
          <span style="color: #666; font-size: 11px;">Government &amp; Political</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Political Landscape</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gubernatorial Election:</strong> Gov. <strong>Denny Tamaki</strong> (age 66) announced he will seek a <strong>third term</strong> in the <strong>September 13 gubernatorial election</strong>, running on continued opposition to the Futenma-to-Henoko relocation. His candidacy sets the stage for another referendum on the U.S. military presence.<br/><br/>
          <strong>Futenma 30th Anniversary:</strong> April 2026 marked <strong>30 years since the 1996 U.S.-Japan agreement</strong> to return MCAS Futenma. The original 5&ndash;7 year timeline has been blown through with no concrete return date. The Pentagon insists on a long runway at the Henoko replacement facility (current plans: 1,800m V-shaped runways vs. Futenma&rsquo;s 2,700m).<br/><br/>
          <strong>Defense Minister Visit:</strong> Japan&rsquo;s Defense Minister <strong>Koizumi</strong> pledged to reduce the U.S. military footprint on his first visit to Okinawa, while denying any discrepancy with Washington over the Futenma return timeline.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the center of an accelerating military buildup on all sides.</strong> Within a single week: China pushed a next-generation frigate and a carrier strike group through the Miyako Strait and into the Western Pacific; the U.S., Japan and Australia responded with a trilateral air exercise east of Okinawa; and Japan concluded its first-ever Nansei Islands defense exercise with anti-ship missiles deployed to islands visible from Taiwan. The tempo of military activity around Okinawa is the highest in decades.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Futenma question remains unresolved after 30 years</strong> and will dominate the September gubernatorial election. Gov. Tamaki&rsquo;s third-term bid ensures the anti-relocation movement stays politically viable. Meanwhile, GSDF Osprey operations at Futenma deepen the base&rsquo;s operational integration even as its replacement remains a decade away.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Liaoning carrier group exercise track and duration &bull; PLA Navy Jiangkai III return transit through Miyako Strait &bull; Resolute Dragon exercise (Jun 20&ndash;30) and GSDF Osprey at Futenma &bull; September 13 Okinawa gubernatorial election dynamics &bull; BOJ rate decision impact on Okinawa tourism sector &bull; Shuri Castle restoration completion timeline
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; USNI News &bull; Janes Defence &bull; Defence Blog &bull; UPI &bull; Global Times &bull; South China Morning Post &bull; Defence Security Asia &bull; Japan Ministry of Defense Joint Staff Office &bull; Ryukyu Shimpo &bull; Military.com &bull; Asia Times &bull; NHK &bull; Expedia &bull; Japan Cabinet Office &bull; Bank of Japan
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
