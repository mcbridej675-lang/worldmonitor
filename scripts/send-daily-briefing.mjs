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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Financial &bull; Seismic Activity</p>
    </div>

    <!-- ===================== EVENT 1: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Indo-Pacific / Taiwan Strait &mdash; May 17&ndash;22 (ONGOING)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Conducts First-Ever Nansei Islands Defense Exercise with U.S. Marines Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Japan Ground Self-Defense Force&rsquo;s Ground Component Command</strong> is conducting a landmark military exercise across the <strong>Nansei Island chain</strong> from <strong>May 17&ndash;22</strong> &mdash; the first time Japan&rsquo;s highest operational army command has focused specifically on these strategically critical islands near Taiwan. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies are participating alongside <strong>20 U.S. Marines from the 12th Marine Littoral Regiment</strong> (headquartered on Okinawa).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise spans three key islands: <strong>Miyakojima</strong> (220 mi east of Taiwan) hosts joint command-post training and the <strong>first-ever U.S.-Japan coordination center</strong> on the island. <strong>Ishigaki</strong> (150 mi east of Taiwan) saw deployment of <strong>Type-88 surface-to-ship guided missile launchers</strong>. <strong>Yonaguni</strong> (just 70 mi east of Taiwan) is conducting <strong>ScanEagle II drone reconnaissance drills</strong>. Transportation exercises are using nine ports across the chain. The exercise reinforces &ldquo;first island chain defense coordination around the Taiwan Strait&rdquo; and complements concurrent <strong>U.S.-Philippines Balikatan exercises</strong> to the south, forming a coordinated Indo-Pacific defense posture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This exercise signals a major escalation in Japan&rsquo;s posture toward a potential Taiwan contingency. The establishment of a joint coordination center on Miyakojima and anti-ship missile deployments on Ishigaki demonstrate concrete preparation for sea-denial operations in the Taiwan Strait. China has not yet publicly responded, but previous Nansei chain militarization has drawn strong PRC objections. The timing &mdash; concurrent with U.S. force drawdowns from Okinawa for Middle East operations &mdash; underscores Japan&rsquo;s growing role as the primary first-island-chain defender.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: MARINE COMMANDANT INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / USMC &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Confirms &ldquo;Unfilled&rdquo; Indo-Pacific Gap After 31st MEU Deploys from Okinawa to Iran Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the <strong>House Armed Services Committee</strong> on May 18 that the deployment of the <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; to the Middle East has created a capability gap that remains <strong>&ldquo;unfilled.&rdquo;</strong> Smith stated bluntly: <em>&ldquo;When you move one force from one combatant command theater to another, you don&rsquo;t replace it.&rdquo;</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st MEU (~2,500 Marines)</strong> and the <strong>USS Tripoli</strong> amphibious assault ship deployed from Okinawa/Sasebo in March to support <strong>Operation Epic Fury</strong> against Iran, including enforcing a blockade of Iranian ports and conducting ship-boarding operations in the Strait of Hormuz. The <strong>USS Boxer ARG</strong> and <strong>11th MEU</strong> (Camp Pendleton) have been sent to the 7th Fleet AOR as partial backfill, but Smith acknowledged these cannot fully replace the 31st MEU&rsquo;s persistent presence. <strong>No return date</strong> has been announced. Rep. Derek Tran (D-Calif.) pressed Smith on how the Corps plans to address this deterrence gap vis-&agrave;-vis China.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The absence of the 31st MEU from the Western Pacific represents the most significant gap in U.S. amphibious capability in the region since the unit&rsquo;s establishment. This comes at a time when China is conducting increased military activity around Taiwan and Japan is compensating through its own Nansei Islands exercises. Kadena Air Base airmen are also deployed to the Middle East for Iran operations (Operation Epic Fury), further thinning Okinawa-based U.S. assets. The dual-theater strain is forcing difficult prioritization choices between the Middle East and Indo-Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Seismic / Natural Hazard &mdash; May 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 5.9 Earthquake Strikes Near Okinawa &mdash; Strongest in Region in 3+ Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 5.9 earthquake</strong> struck at <strong>11:46 AM local time on May 20</strong>, centered approximately 10.7 km north of China, Kagoshima Prefecture &mdash; between Kagoshima and Okinawa. This is the <strong>strongest earthquake to hit the area in over three years</strong>. The quake was widely felt across Okinawa, with the majority of reports coming from <strong>Chatan</strong> (home to Camp Foster and Camp Lester) and <strong>Naha</strong> (Okinawa&rsquo;s capital). The tremor was felt in areas with up to <strong>140,000 inhabitants</strong> and as far as <strong>160 km</strong> from the epicenter.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This followed a separate <strong>magnitude 4.4 earthquake</strong> on <strong>May 19 at 05:04 UTC</strong> near <strong>Tarama, Okinawa</strong> at a depth of 101 km. No tsunami warnings were issued for either event. No significant structural damage has been reported at U.S. military installations. The cluster of seismic activity along the Ryukyu Trench is being monitored by the Japan Meteorological Agency.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Base Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Chatan &mdash; where the quake was most strongly felt &mdash; hosts <strong>Camp Foster</strong> (MCIPAC HQ) and <strong>Camp Lester</strong>. Kadena Air Base and Marine Corps bases on Okinawa&rsquo;s central belt are within the primary shaking zone. While no damage has been reported, the multi-year seismic gap in this region means the Ryukyu Trench subduction zone bears continued monitoring. Service members should review earthquake preparedness protocols.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: F-22 DEPLOYMENT & KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Air Power / Force Posture / Kadena AB &mdash; May 5&ndash;Present</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Deploy to Kadena Air Base; F-15EX Permanent Replacement Delayed Indefinitely</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptors</strong> have arrived at <strong>Kadena Air Base</strong> for rotational duty with the 18th Wing. The <strong>90th Expeditionary Fighter Squadron</strong> from Joint Base Elmendorf-Richardson, Alaska deployed <strong>12 aircraft</strong>, joined by the <strong>27th Expeditionary Fighter Squadron</strong> from Joint Base Langley-Eustis, Virginia. The stealth fighters ($143M per airframe) will &ldquo;integrate with the 18th Wing&rsquo;s operations and refine tactics, strengthen interoperability and sustain readiness for real-world contingencies.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The deployment continues the Air Force&rsquo;s rotational fighter model at Kadena since the aging <strong>F-15C/D fleet was retired</strong> in late 2022. The planned permanent replacement &mdash; <strong>36 Boeing F-15EX Eagle IIs</strong> &mdash; was originally scheduled to arrive between <strong>March and June 2026</strong>, but delivery has been <strong>postponed indefinitely</strong> due to a strike at Boeing&rsquo;s St. Louis plant (August&ndash;November 2025). No updated timeline has been released. The rotational model creates readiness gaps during transition periods and limits deep integration with Japan Air Self-Defense Force counterparts.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Readiness Note</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena&rsquo;s air superiority mission has been in transition for over three years. While F-22s provide unmatched stealth capability, the rotational model means constant squadron changeovers and reduced institutional knowledge. The F-15EX delays compound concerns about Kadena&rsquo;s long-term fighter posture &mdash; particularly with China&rsquo;s J-20 fleet expanding and tensions around Taiwan elevated. Boeing (<strong>BA</strong>) faces scrutiny over defense production timelines.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & FINANCIAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Economy / Quality of Life &mdash; May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Government &amp; Financial Roundup: OHA Increase, Gubernatorial Race, Tourism Boom &amp; Rising Costs</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Housing Allowance Increase (Effective May 16):</strong> U.S. service members living off-base on Okinawa received a significant <strong>Overseas Housing Allowance increase of $400&ndash;$504/month</strong> depending on rank, announced by 18th Wing Commander <strong>Brig. Gen. John Gallemore</strong>. E-1 through E-4 receive an additional $396/month; O-1/O-2/E-5 receive $504/month; O-3/E-6&ndash;E-8 receive $450/month. The increase addresses a gap where service members were paying approximately <strong>$300/month out of pocket</strong> as OHA rates failed to keep pace with rising local rents. The adjustment applies <strong>only to Okinawa</strong> at this time.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gubernatorial Election:</strong> Governor <strong>Denny Tamaki</strong> announced he will seek a <strong>third term</strong> in the <strong>September 13 election</strong>, reaffirming his opposition to the Futenma-to-Henoko relocation &mdash; a position that will keep U.S.-Okinawa base politics contentious through the fall.<br/><br/>
          <strong>Tourism &amp; Economy:</strong> Okinawa is on track to surpass <strong>10 million annual tourists</strong> for the first time. A new <strong>2% prefectural accommodation tax</strong> takes effect in April 2026 (capped at &yen;2,000/night). The Finance Ministry <strong>upgraded its economic assessment</strong> for Okinawa, citing strong tourism despite some cancellations from Chinese group travelers. Japan&rsquo;s domestic corporate goods prices rose <strong>4.9% YoY</strong> in April, well above consensus, reflecting persistent inflationary pressure. Japan is also diversifying energy imports, planning to source <strong>70% of June oil from outside the Middle East</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial &amp; Market Notes</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Japanese Yen</strong> remains under pressure from the global bond rout (30-yr UST at 5.19%) and persistent domestic inflation. <strong>Nikkei 225</strong> faces headwinds from capital outflows and strong dollar. <strong>Okinawa real estate</strong> continues appreciating, driven by tourism demand and military base proximity. <strong>BA</strong> (Boeing) &mdash; F-15EX production delays add to existing reputational pressure. <strong>Japan departure tax</strong> tripling to &yen;3,000 in July 2026 may slow inbound tourism growth. <strong>Energy stocks</strong> &mdash; Japan&rsquo;s Middle East oil diversification benefits non-OPEC producers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the center of a strategic tug-of-war between two theaters.</strong> The 31st MEU&rsquo;s absence in the Middle East has left the most significant amphibious capability gap in the Western Pacific in decades, even as Japan accelerates Nansei Islands defense preparations just 70 miles from Taiwan. The Marine Commandant&rsquo;s candid congressional admission that this gap is &ldquo;unfilled&rdquo; underscores the strain of simultaneous Iran operations and China deterrence.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Kadena&rsquo;s fighter posture remains in limbo.</strong> F-22 rotations provide world-class capability but lack the permanence and deep integration of a home-stationed wing. The F-15EX delays &mdash; now with no updated timeline &mdash; mean Kadena has operated without a permanent fighter squadron for over three years. This is the longest gap in the base&rsquo;s operational history.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Nansei Islands exercise conclusion (May 22) and any Chinese response &bull; 31st MEU return timeline from Middle East &bull; F-15EX delivery rescheduling from Boeing &bull; Governor Tamaki&rsquo;s campaign and Futenma relocation politics &bull; Ryukyu Trench seismic monitoring after M5.9 event &bull; OHA rate adjustments for mainland Japan bases &bull; Japan&rsquo;s energy diversification away from Middle East oil
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Taiwan News &bull; The Defense News &bull; Military.com &bull; The Japan Times &bull; Air &amp; Space Forces Magazine &bull; Volcano Discovery &bull; Earthquake Track &bull; Atlantic Council &bull; ABC News &bull; CNN &bull; Naval News &bull; DVIDSHUB &bull; Ryukyu Shimpo &bull; Travel and Tour World &bull; MUFG Research &bull; IMF &bull; Deloitte
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
