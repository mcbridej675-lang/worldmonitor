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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== EVENT 1: 31ST MEU INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; May 22&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Acknowledges Indo-Pacific Security Gap After Okinawa-Based 31st MEU Deploys to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee that the Indo-Pacific has an <strong>&ldquo;unfilled&rdquo; security gap</strong> after the Okinawa-based <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently stationed MEU in the Indo-Pacific &mdash; was deployed to the Middle East to support <strong>Operation Epic Fury</strong> against Iran. Smith stated: <em>&ldquo;When you move one force from one combatant command theater to another, you don&rsquo;t replace it.&rdquo;</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 31st MEU &mdash; approximately <strong>2,500 Marines and three warships</strong> aboard USS Tripoli &mdash; has been enforcing a blockade of Iranian ports since April 13, including helicopter raids onto Iranian-flagged vessels. The Marine Corps is partially offsetting the gap by deploying the <strong>USS Boxer ARG and 11th MEU</strong> to the 7th Fleet region. <strong>III Marine Expeditionary Force</strong> on Okinawa confirmed readiness but acknowledged the challenge of maintaining full regional capabilities. This gap directly impacts rapid-response capacity for Taiwan contingencies, Korean Peninsula escalation, and humanitarian operations across the western Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence from Okinawa is the most significant force posture shift in the western Pacific since the Ukraine crisis drawdowns. Regional allies Japan and South Korea are closely monitoring the gap. China may view this as a window of reduced U.S. amphibious capability near Taiwan. Personnel on Okinawa should expect increased readiness posture from remaining III MEF units and potential extension of deployment cycles.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Japan-U.S. Alliance / Training / Taiwan Strait &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">First-Ever JGSDF Command Exercise on Islands Near Taiwan; 12th Marine Littoral Regiment Participates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> conducted its first-ever training exercise focused on the <strong>Nansei (Ryukyu) Islands</strong> near Taiwan from <strong>May 17&ndash;22</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies deployed to <strong>Ishigaki, Yonaguni, and Miyakojima</strong> &mdash; islands located just 70&ndash;220 miles from Taiwan. <strong>20 U.S. Marines from the 12th Marine Littoral Regiment</strong> (Okinawa-based) participated in command post training on Miyakojima from May 17&ndash;20.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This marked the <strong>first U.S.-Japan bilateral communication center</strong> established on Miyakojima. Assets deployed included a <strong>Type-88 surface-to-ship guided missile launcher</strong> on Ishigaki and <strong>two ScanEagle II UAVs</strong> on Yonaguni. This exercise signals a significant escalation in Japan&rsquo;s southwestern island defense posture and deepening interoperability between JGSDF and the 12th MLR, which was specifically established to operate in contested maritime environments.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise demonstrates Japan&rsquo;s accelerating shift from a purely defensive posture to an active denial strategy in the First Island Chain. The 12th MLR&rsquo;s participation validates the Marine Corps&rsquo; force design transformation for distributed maritime operations. Anti-ship missile deployments on Ishigaki directly threaten any naval force attempting to transit between Taiwan and Okinawa. Beijing will view this as further evidence of a de facto U.S.-Japan military encirclement strategy.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: GSDF OSPREY / RESOLUTE DRAGON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Interoperability / Aviation / Okinawa Bases &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">GSDF Osprey to Use MCAS Futenma for First Time; Resolute Dragon Exercise Set for June</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>Japan Ground Self-Defense Force V-22 Osprey</strong> is set to use a U.S. military base in Okinawa Prefecture for the <strong>first time ever</strong> during the upcoming <strong>Resolute Dragon exercise</strong> (June 20&ndash;30), a bilateral JGSDF-USMC exercise. The plan calls for a GSDF Osprey to <strong>airlift a mock patient from Miyako Island to MCAS Futenma</strong> in a medical evacuation scenario.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This milestone deepens <strong>cross-servicing logistics</strong> between Japanese and U.S. forces on Okinawa. The use of Futenma by GSDF aircraft &mdash; the very base at the center of the contentious relocation debate &mdash; adds a new operational dimension to the base&rsquo;s role. This development is likely to draw scrutiny from local anti-base activists and factor into the September gubernatorial election campaign.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Local Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect increased Osprey flight operations around Futenma and Miyako Island corridors in late June. Japanese Osprey operations at U.S. bases could become a flashpoint in the Okinawa gubernatorial race, as opponents argue it expands rather than reduces the military footprint. This also sets precedent for future JSDF use of U.S. installations across Okinawa.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINESE NAVAL ACTIVITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">PLA Navy / ISR / East China Sea &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">First-Ever Jiangkai III-Class Frigate Detected Operating Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Maritime Self-Defense Force spotted a <strong>PLA Navy frigate</strong> sailing south approximately <strong>520 kilometers northwest of Kume Island</strong> (west of Okinawa main island). This marks the <strong>first time</strong> Japan&rsquo;s maritime forces have observed a <strong>Jiangkai III-class frigate</strong> operating in waters around Japan. The Jiangkai III is China&rsquo;s newest guided-missile frigate class, representing an upgrade in PLA Navy surface combatant capability.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The sighting underscores the <strong>increasing frequency and sophistication of Chinese naval operations</strong> in the East China Sea near Okinawa. JMSDF assets continue to track the vessel. This transit comes amid the Nansei Islands exercise and heightened tensions over Taiwan, suggesting China may be conducting intelligence-gathering operations to monitor U.S.-Japan military activity in the region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The debut of a new frigate class near Okinawa signals the PLA Navy is fielding next-generation surface combatants in operationally relevant waters rather than limiting them to home waters for work-ups. The timing &mdash; concurrent with the Nansei Islands exercise &mdash; strongly suggests this was a deliberate ISR mission. Expect JMSDF and U.S. 7th Fleet to increase surveillance patrols in response. This vessel class is assessed to carry improved anti-ship cruise missiles and enhanced electronic warfare suites.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: POLITICAL / ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Economy / Weather &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki&rsquo;s Coalition Wavers Ahead of Sept. 13 Election; Japan GDP Rises 2.1%; Rainy Season Storms Hit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>POLITICAL:</strong> Support for Okinawa Gov. <strong>Denny Tamaki</strong> is wavering ahead of the <strong>September 13 gubernatorial election</strong>. The &ldquo;All Okinawa&rdquo; coalition that backs Tamaki&rsquo;s opposition to the Futenma-to-Henoko relocation is fracturing after the <strong>Centrist Reform Alliance</strong> (CRA) &mdash; formed by the CDP and Komeito &mdash; remains undecided on the base relocation issue. Former Naha deputy mayor <strong>Genta Koja</strong> (42) plans to run as the de facto LDP candidate supporting the relocation plan. The U.S. base relocation issue remains the defining political fault line in Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>ECONOMIC:</strong> Japan&rsquo;s real GDP rose <strong>2.1% annualized in Q1 2026</strong>. Chip exports surged <strong>44%</strong> on AI demand. The Finance Minister pledged &ldquo;bold action&rdquo; on the weak yen. The domestic corporate goods price index for April was up <strong>4.9% year-over-year</strong>, beating consensus. Japanese Government Bond yields rose in sympathy with the global bond rout.<br/><br/>
          <strong>WEATHER:</strong> Okinawa is experiencing <strong>heavy rainy season conditions</strong> with unstable atmospheric conditions due to an active front. Heavy rain with thunder, risk of landslides, and wind gusts are expected through May 25. Precipitation forecasts of <strong>80mm over 24 hours</strong> for the main island region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial &amp; Local Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks/indices to watch:</strong> <strong>Nikkei 225</strong> &mdash; Japan GDP beat supports equities but JGB yield rise creates headwinds. <strong>USD/JPY</strong> &mdash; yen weakness may trigger BOJ intervention; watch for policy signals. <strong>7011.T</strong> (Mitsubishi Heavy Industries) &mdash; Japan&rsquo;s top defense contractor benefits from southwestern island buildup. <strong>6503.T</strong> (Mitsubishi Electric) &mdash; defense electronics demand rising. <strong>9020.T</strong> (JR East) &mdash; tourism recovery benefits Okinawa-linked transport. The gubernatorial election outcome will directly impact the pace and scope of U.S. base realignment on Okinawa through 2027 and beyond.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s strategic environment is shifting on multiple fronts simultaneously.</strong> The 31st MEU&rsquo;s absence in the Middle East has created the most significant amphibious capability gap in the western Pacific in years, even as Chinese naval activity near the island chain intensifies with new-generation warships. Japan is responding with unprecedented exercises on its southwestern islands, deploying anti-ship missiles within strike range of the Taiwan Strait and establishing the first bilateral command center on Miyakojima with the 12th MLR.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The political landscape is becoming more contested.</strong> Governor Tamaki&rsquo;s coalition is fracturing ahead of September&rsquo;s election, and the GSDF Osprey use of Futenma will add fuel to the base relocation debate. Meanwhile, Japan&rsquo;s strong GDP growth and export boom contrast with yen weakness and rising bond yields that could complicate defense spending plans.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> 31st MEU return timeline and III MEF readiness posture &bull; Chinese naval movements near Kume Island &bull; Resolute Dragon exercise preparations (June 20&ndash;30) &bull; Okinawa gubernatorial campaign developments &bull; BOJ policy response to yen weakness &bull; Rainy season severe weather impacts on operations &bull; 12th MLR integration milestones with JGSDF
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; USNI News &bull; Military.com &bull; The Defense Post &bull; DVIDSHUB &bull; USMC Okinawa &bull; Japan Ministry of Defense &bull; Kadena Air Base Public Affairs &bull; Ryukyu Shimpo &bull; AccuWeather &bull; Japan Meteorological Agency &bull; MUFG Research
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
