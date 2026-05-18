#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing Email Sender
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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Regional Security &bull; Financial &bull; Local Updates</p>
    </div>

    <!-- ===================== ITEM 1: MARINE COMMANDANT ACKNOWLEDGES INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #dc2626; font-size: 10px; font-weight: 700; padding: 2px 6px; border: 1px solid #dc2626; margin-right: 8px;">BREAKING</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Acknowledges Indo-Pacific Gap After 31st MEU Middle East Deployment</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In testimony today before the House Armed Services Committee, Marine Corps Commandant <strong>Gen. Eric Smith</strong> acknowledged that the Indo-Pacific region faces an <strong>&ldquo;unfilled&rdquo; defense capability gap</strong> following the deployment of the <strong>31st Marine Expeditionary Unit</strong> from Okinawa to the Middle East. The 31st MEU &mdash; approximately <strong>2,500 Marines and three warships</strong> based on Okinawa &mdash; is currently deployed aboard the <strong>USS Tripoli</strong> in support of <strong>Operation Epic Fury</strong>, enforcing a blockade of Iranian ports since April 13.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          When Rep. Derek Tran (D-CA) pressed on how the Marine Corps addresses deterrence in the Indo-Pacific while forces are deployed elsewhere, Smith stated bluntly: <strong>&ldquo;Frankly, the gap is unfilled.&rdquo;</strong> The USS Boxer ARG and 11th MEU have been deployed from California to partially compensate, but analysts warn this leaves Okinawa-based rapid response capability significantly degraded at a critical moment for Taiwan Strait tensions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct impact on Camp Courtney / Camp Foster operations.</strong> The 31st MEU&rsquo;s absence removes the primary crisis-response force from the Western Pacific. The 12th Marine Littoral Regiment remains on Okinawa but is oriented toward stand-in forces, not traditional amphibious operations. Combined with heightened China-Japan tensions, this gap represents a significant deterrence concern for INDOPACOM.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 2: NANSEI ISLANDS EXERCISE UNDERWAY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #22c55e; font-size: 10px; font-weight: 700; padding: 2px 6px; border: 1px solid #22c55e; margin-right: 8px;">ACTIVE</span>
          <span style="color: #666; font-size: 11px;">Joint Exercise / Nansei Islands &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Historic JGSDF Exercise on Taiwan-Adjacent Islands Now Underway; 12th MLR Marines Participating</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> launched a <strong>first-of-its-kind exercise</strong> yesterday (May 17) focused on the Nansei Islands chain near Taiwan, running through May 22. This is the first time this high-level command has exercised specifically on Japan&rsquo;s southwestern islands.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Participating forces:</strong> ~300 Japanese soldiers from all regional armies and <strong>20 U.S. Marines from the 12th Marine Littoral Regiment</strong> (Okinawa-based). Training is concentrated on <strong>Ishigaki</strong> (~150 mi east of Taiwan), <strong>Yonaguni</strong> (~70 mi from Taiwan), and <strong>Miyakojima</strong> (~220 mi east of Taiwan). Key deployments include a <strong>Type-88 surface-to-ship missile launcher</strong> to Ishigaki and <strong>two ScanEagle II UAVs</strong> to Yonaguni. The first-ever <strong>U.S.-Japan bilateral coordination center</strong> has been established on Miyakojima. Nine ports are being used for logistics; no ammunition is being transported.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Signals deepening U.S.-Japan integration on Okinawa&rsquo;s southern flank.</strong> The 12th MLR&rsquo;s participation underscores the regiment&rsquo;s evolving role as the linchpin of allied stand-in operations across the Nansei chain. The bilateral coordination center on Miyakojima is a milestone for interoperability. Expect PLA monitoring activity to increase during the exercise window.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 3: CHINA-JAPAN TENSIONS ESCALATING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #f97316; font-size: 10px; font-weight: 700; padding: 2px 6px; border: 1px solid #f97316; margin-right: 8px;">ELEVATED</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / China-Japan &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Tensions at Highest Level Since Normalization; PLA Warships Deployed Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> continues to intensify. Following Japan&rsquo;s MSDF destroyer <strong>Ikazuchi&rsquo;s</strong> transit of the Taiwan Strait in April, the PLA <strong>Eastern Theater Command</strong> deployed <strong>J-20 stealth fighters</strong> and <strong>CH-4 attack drones</strong> to track the vessel, launched <strong>combat readiness patrols in the East China Sea</strong>, and <strong>sent warships near Okinawa</strong>. China&rsquo;s Ministry of National Defense told Tokyo to &ldquo;step back from the brink.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Near the disputed <strong>Senkaku/Diaoyu Islands</strong>, Chinese coast guard ships have <strong>increased patrol frequency</strong>. Beijing has also installed a <strong>23rd offshore structure near the East China Sea median line</strong>, which analysts assess could function as a forward monitoring outpost tracking JSDF movements. PM Takaichi&rsquo;s previous statements about defending Taiwan have made Japan a primary target of PRC pressure. The Trump-Xi Beijing summit on May 14&ndash;15 saw Xi warn that Taiwan mishandling risks &ldquo;collision or conflict.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct threat to Okinawa-based forces.</strong> PLA warships operating near Okinawa represent the most provocative Chinese naval activity near the island in years. Kadena Air Base and MCAS Futenma are within range of PLA intermediate-range ballistic missiles. The new East China Sea monitoring structure enhances PRC ISR capabilities directed at Okinawa. Analysts warn a &ldquo;limited air or naval clash within the next year or two cannot be dismissed.&rdquo;
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 4: 12th MLR DRONE WARFARE TRAINING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Modernization &mdash; May 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marines on Okinawa Scaling Up Drone Warfare Capability; Neros Archer Attack Drones in Training</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Marine Corps has launched new <strong>drone operator training courses at Camp Hansen</strong>, Okinawa, as part of an aggressive push to scale unmanned aerial systems across the force. The three-week <strong>Basic Drone Operator Course</strong> teaches Marines to assemble and fly seven-inch FPV drones, progressing through simulator exercises to tactical employment and live range testing. Okinawa serves as <strong>one of only three regional training hubs</strong> alongside Camp Pendleton and Camp Lejeune.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, the <strong>12th Littoral Combat Team</strong> conducted <strong>Neros Archer Strike Variant drone training</strong> at Camp Schwab on May 7, practicing with the attack drone system designed to deliver explosive payloads. After completing the basic course, Marines can advance to the <strong>Attack Drone Operator Course</strong> for combat UAS employment. Maj. Brant Wayson, Unmanned Systems Branch officer in charge, cited Ukraine, Azerbaijan, and Middle East conflicts as proof of drone warfare&rsquo;s effectiveness.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Okinawa is becoming a forward drone warfare hub.</strong> The 12th MLR&rsquo;s drone training aligns with Force Design 2030&rsquo;s vision of distributed, sensor-rich stand-in forces. Camp Hansen and Camp Schwab are central to this transformation. The Neros Archer system gives Okinawa-based Marines organic strike capability against maritime targets &mdash; directly relevant to an East China Sea contingency.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 5: FINANCIAL & ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Weakens to 158.9 as Oil Crisis Pressures Japan; Okinawa Development Funds Rise for First Time in Decade</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>USD/JPY exchange rate rose to 158.90</strong> on May 18, marking its sixth consecutive session of losses for the yen. The currency is approaching the critical <strong>160-per-dollar threshold</strong> that triggered Tokyo&rsquo;s intervention in late April. Japan&rsquo;s heavy dependence on Middle Eastern energy imports makes the Iran conflict&rsquo;s oil price shock (~$107/barrel Brent) particularly damaging. <strong>BOJ board member Kazuyuki Masu</strong> argued interest rates should be raised &ldquo;as soon as possible&rdquo; citing persistent inflation from the Iran war. U.S. Treasury Secretary Bessent has expressed support for Japan&rsquo;s yen stabilization efforts.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa-specific:</strong> The Japanese government approved a <strong>&yen;500 million increase to Okinawa development funds</strong>, bringing the total to <strong>&yen;264.7 billion</strong> for FY2026 &mdash; the <strong>first rise in 10 years</strong>. The increase is politically motivated ahead of the expected Okinawa gubernatorial election next summer. The Finance Ministry has also <strong>upgraded its economic assessment for Okinawa</strong>, citing strong tourism recovery and personal consumption growth. Okinawa&rsquo;s economy continues to benefit from record tourism inflows.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Yen weakness benefits dollar-earning service members</strong> but signals broader Japanese economic stress. A BOJ rate hike would be the first in this cycle and could strengthen the yen significantly. The Okinawa development fund increase signals Tokyo&rsquo;s political investment in the prefecture. Nikkei fell 0.98% on May 14 amid regional uncertainty. Energy import costs are a critical vulnerability for Japan&rsquo;s island economy.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 6: LOCAL & ENVIRONMENTAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #6b7280; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Local / Environment / Seismic &mdash; May 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Additional Okinawa Updates: Seismic Activity, PFAS Contamination, Futenma Relocation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Seismic Activity:</strong> A magnitude 3.0 earthquake was recorded in the East China Sea, 20 km north of Iriomote Jima Island, at 01:09 JST on May 17. A second earthquake occurred on May 18 at 08:36 JST. Neither event triggered tsunami warnings. Okinawa is entering <strong>typhoon season</strong> (May&ndash;October), though no tropical systems are currently threatening the region.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PFAS Contamination:</strong> Okinawa&rsquo;s latest groundwater survey (March 2026) found elevated PFAS levels at <strong>12 sites around Kadena Air Base</strong> and <strong>13 sites near MCAS Futenma</strong>. The highest reading &mdash; <strong>2,800 ppt (56x the national standard)</strong> &mdash; was at Yara Hijaga in Kadena town. This remains a significant source of local friction with U.S. base presence.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Futenma Relocation:</strong> The Pentagon confirmed MCAS Futenma will <strong>not be returned to Japan</strong> until an alternate runway of similar length is provided at Camp Schwab/Henoko. Construction continues with completion expected no earlier than <strong>2033</strong>. Japan&rsquo;s defense minister reiterated commitments to reduce the U.S. military footprint on Okinawa during a January visit.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa faces a convergence of strategic pressures.</strong> The 31st MEU&rsquo;s absence to the Middle East has created an acknowledged gap in Indo-Pacific deterrence at precisely the moment China-Japan tensions are at their highest point in decades. PLA warships are operating near Okinawa, combat readiness patrols are underway in the East China Sea, and Beijing has expanded monitoring infrastructure near the median line.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Countering this, allied integration is deepening.</strong> The ongoing Nansei Islands exercise &mdash; with 12th MLR Marines participating in the first-ever bilateral coordination center on Miyakojima &mdash; signals Japan and the U.S. are accelerating preparations for a Taiwan contingency. The 12th MLR&rsquo;s drone warfare build-up at Camp Hansen and Camp Schwab adds new organic strike capabilities to the island&rsquo;s defense architecture.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Nansei Islands exercise developments (through May 22) &bull; PLA response to allied exercises near Taiwan &bull; 31st MEU redeployment timeline &bull; Iran ceasefire status and oil price impact on Japan &bull; BOJ rate decision &bull; Yen approaching 160 intervention threshold &bull; Okinawa gubernatorial election positioning
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; AEI China-Taiwan Weekly &bull; South China Morning Post &bull; UPI &bull; Task and Purpose &bull; Defense News &bull; Military.com &bull; DVIDSHUB &bull; Trading Economics &bull; Reuters &bull; USMC Official &bull; Volcano Discovery &bull; JMA
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
