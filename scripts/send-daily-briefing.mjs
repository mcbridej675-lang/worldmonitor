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
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">ELEVATED &mdash; Y-9FQ ASW patrols; carrier drills near SW Japan</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">China-Japan Relations</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">CRISIS &mdash; Export bans on 40 Japanese entities</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Japan Defense Posture</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">HEIGHTENED &mdash; Type 25 missiles operational; Space Ops Squadron stood up</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">SDF Interoperability</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">EXPANDING &mdash; 11 weapons protection ops in 2025 (incl. UK firsts)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Liberty Status</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">RESTRICTED &mdash; Solo patrols paused</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">DPRK Posture</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">PROVOCATIVE &mdash; Condemns Japan Type 25 deployments</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">53,172 (+1.35%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">USD/JPY</td>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; font-weight: 700; text-align: right;">159.74</td>
        </tr>
      </table>
    </div>

    <!-- Event 1: Type 25 Missiles -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Japan Deploys Type 25 Stand-Off Missiles &mdash; First Domestically Developed Long-Range Strike Capability Now Operational</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On March 31, the JGSDF deployed two new domestically developed missile systems: the <strong>Type 25 SSM</strong> (an upgraded Type 12 surface-to-ship missile with <strong>1,000km range</strong>) at Camp Kengun in Kumamoto Prefecture, and the <strong>Type 25 HGP</strong> (Hyper Velocity Gliding Projectile, a hypersonic weapon) at Camp Fuji in Shizuoka Prefecture.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The &ldquo;25&rdquo; designation reflects FY2025 naming convention. The Type 25 SSM can strike targets across the East China Sea, Taiwan Strait, and beyond. Ship- and air-launched variants are planned for FY2027. Future deployments include <strong>Camp Kamifurano</strong> (Hokkaido) and <strong>Camp Ebino</strong> (Miyazaki) in FY2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is a watershed moment for Japan&rsquo;s defense posture. For the first time, Japan possesses domestically developed stand-off strike missiles capable of reaching Chinese military installations. Combined with the record defense budget and the new Pacific Defense Planning Office, Japan is rapidly building the infrastructure for a credible counter-strike capability &mdash; a concept that was politically unthinkable just five years ago.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2: Chinese ASW Aircraft -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Intelligence / PRC Military Activity</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. China Deploys New Y-9FQ Anti-Submarine Warfare Aircraft Near Okinawa &mdash; JASDF Scrambles Fighters</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On March 28, Japanese fighter pilots from the Southwestern Air Command intercepted an improved variant of China&rsquo;s Y-9 maritime patrol aircraft operating over the East China Sea approximately <strong>160 miles northeast of Okinawa</strong>. Identified as the <strong>Y-9FQ</strong>, a next-generation ASW platform first observed at a Chinese factory in 2022, officially unveiled during Beijing&rsquo;s Victory Day parade September 2025.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Features redesigned nose with AESA radar, advanced electro-optical sensors, upgraded ELINT systems. Paint scheme suggests <strong>full operational capability</strong>, likely PLA Naval Air Force units from Zhejiang province. Japan Joint Staff confirmed &ldquo;visible differences including the shape of the aircraft&rsquo;s nose and additional antennas.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China is actively improving its ability to detect and track US and allied submarine activity near Okinawa. The timing &mdash; coinciding with the 31st MEU&rsquo;s departure and reduced US force posture &mdash; suggests deliberate intelligence collection during a window of diminished US presence.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3: 31st MEU Departure -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. 31st MEU &amp; USS Tripoli Operating in CENTCOM &mdash; ~3,500 Marines and Sailors Now in Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The USS Tripoli ARG and 31st MEU (approximately <strong>3,500 Marines and Sailors</strong>) arrived in CENTCOM waters on March 27 after departing Sasebo on March 13. The force includes F-35B Lightning IIs from VMFA-121, MV-22B Ospreys, and MH-60S Seahawks. Deployed to support Strait of Hormuz operations amid the US-Iran conflict.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This removes one of the <strong>primary ground combat elements</strong> in the Pacific capable of rapid crisis response involving China, North Korea, or Taiwan. The US Navy lacks sufficient amphibious ships to backfill.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous deployment to CENTCOM and increased Chinese ASW activity near Okinawa represents a <strong>strategic vulnerability</strong>. Japan&rsquo;s record defense budget and new Type 25 missiles partially offset the gap, but cannot substitute for the expeditionary strike capability the MEU provides.
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
          Announced April 3: first-ever field evacuation drill for remote Okinawan islands under the civil protection law, scheduled <strong>January 2027</strong>. Includes tabletop and live field exercises involving five municipalities: <strong>Ishigaki, Miyakojima, Taketomi, Yonaguni, and Tarama</strong> &mdash; all in the Sakishima Island chain near Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All seven Kyushu prefectures plus Yamaguchi will participate as evacuee-receiving areas. Previous exercises (FY2022&ndash;FY2025) were tabletop-only. Plan calls for evacuation of <strong>120,000 residents and visitors within 6 days</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Transition from tabletop to field drills signals Japan is operationalizing Taiwan contingency plans. Yonaguni is just 68 miles from Taiwan. Combined with record defense spending and Type 25 deployments, Tokyo views a cross-strait crisis as a near-term planning scenario.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5: Marines Drone Strike Milestone -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Military / Innovation</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. USMC Conducts First-Ever Live-Fire Drone Strike Against Maritime Vessel &mdash; Naval Base White Beach, Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marines from <strong>III Expeditionary Operations Training Group</strong> alongside US Naval Special Warfare Command executed the USMC&rsquo;s first live-fire drone strike against a maritime surface vessel launched from a naval surface craft at Naval Base White Beach. The target USV was designed and constructed by the training group itself.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Major Brant Wayson called it &ldquo;a landmark in the increasingly close integration of special operations forces and conventional forces.&rdquo; Marines are being trained to construct unmanned systems from locally available materials during conflict scenarios.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Advances Marine Corps transformation toward distributed maritime operations and sea-denial in the First Island Chain. Aligns with III MEF&rsquo;s evolving role as a sea-denial force. Directly relevant to countering PRC naval expansion.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 6: China-Japan Diplomatic Crisis -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Government / Diplomatic</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6. China-Japan Diplomatic Crisis Deepens &mdash; Export Bans Target 40 Japanese Defense Entities</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The ongoing China-Japan diplomatic crisis, triggered by PM Takaichi&rsquo;s November remarks that a Chinese attack on Taiwan could constitute an &ldquo;existential crisis for Japan,&rdquo; continues to escalate. China has banned all dual-use exports to Japan for military use (January 6), restricted rare earth exports, and placed <strong>40 Japanese entities</strong> (including Mitsubishi Heavy Industries, Kawasaki Heavy Industries, Fujitsu subsidiaries) on export control/watchlists (February 25).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s 2026 Diplomatic Bluebook downgraded China from &ldquo;most important&rdquo; to &ldquo;an important neighboring country.&rdquo; Japan&rsquo;s vice foreign minister summoned the Chinese ambassador to protest; China rejected the demand.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The economic dimension of the China-Japan confrontation directly impacts defense supply chains and industrial readiness. The export restrictions on rare earth materials and dual-use items create vulnerabilities for Japan&rsquo;s defense industry at precisely the moment Tokyo is accelerating its military buildup.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 7: SDF Weapons Protection -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Military / Interoperability &mdash; REPORTED APR 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">7. Japan SDF Conducted 11 Weapons Protection Missions for Foreign Militaries in 2025 &mdash; Including First-Ever UK Assets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Defense Ministry disclosed April 4 that the SDF conducted <strong>11 weapons protection missions</strong> in 2025 to safeguard foreign military ships and aircraft under national security laws. Breakdown: <strong>4 cases</strong> protecting US warships during ISR activities related to ballistic missile threats; <strong>5 cases</strong> involving US warships and aircraft during joint training; <strong>2 cases</strong> protecting <strong>British warships</strong> during joint training &mdash; marking the <strong>first time the SDF has ever protected UK military assets</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The inclusion of UK assets signals Japan&rsquo;s security framework is expanding beyond the bilateral US-Japan alliance into a multilateral posture. This aligns with PM Takaichi&rsquo;s push for deeper ties with AUKUS partners and NATO. The volume of protection missions &mdash; 11 in a single year &mdash; underscores the operational tempo around Japan&rsquo;s southwestern waters.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 8: Space Operations -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Military / Force Restructuring &mdash; REPORTED APR 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">8. JASDF Space Operations Group Elevated to Squadron &mdash; Air &ldquo;Self-Defense Force&rdquo; to Be Renamed Aerospace SDF</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As part of a massive spring reorganization, Japan&rsquo;s <strong>Space Operations Group</strong> was elevated to <strong>Space Operations Squadron</strong> status. The unit will be further upgraded to a <strong>Space Operations Corps</strong> later this year. The Japan Air Self-Defense Force will be officially renamed the <strong>Aerospace Self-Defense Force</strong>, reflecting expanded domain responsibilities including space situational awareness and satellite defense.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is operationalizing its multi-domain defense strategy. The space domain is critical for ISR over the East and South China Seas. Elevating space units signals Japan&rsquo;s commitment to monitoring PRC and DPRK missile activities and satellite threats &mdash; capabilities directly relevant to Okinawa&rsquo;s defense.
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Items -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Additional Items of Note</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">DPRK Condemnation (Apr 4):</strong> KCNA published commentary denouncing Japan&rsquo;s &ldquo;dangerous military attempt,&rdquo; specifically targeting Type 25 missile deployments and the new Pacific Defense Planning Office. Pyongyang warned Japan&rsquo;s missile expansion could &ldquo;push the region into danger.&rdquo;
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Yonaguni Earthquake (Apr 5):</strong> M4.6 earthquake at 15:34 UTC near Yonaguni Island (68 mi from Taiwan), depth 135km. No tsunami warning issued. Follows M4.3 near Miyakojima on Apr 3.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Helicopter Incident Protests (Mar 30):</strong> Okinawa Prefectural Assembly formally protested Marine UH-1Y Venom precautionary landing near Kyoda Baseball Field in Nago. Formal protest letter expected mid-April to US authorities.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Defense Ministry Pacific Office (Apr 1):</strong> New Pacific Defense Planning Office established under Defense Minister Koizumi. Koizumi: &ldquo;Boosting defense posture in the vast Pacific region is an urgent priority.&rdquo;
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Solo Patrols Remain Paused:</strong> Solo military patrols in Okinawa nightlife districts remain suspended pending investigation into Nov 2025 assault incident. MP retraining ongoing with focus on de-escalation and jurisdictional authority under Japanese law.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa Development Funding (FY2026):</strong> State funds for Okinawa increased &yen;500M to &yen;264.7B &mdash; first rise in 10 years. Still short of &yen;300B+ requested by prefecture. Increase tied to upcoming gubernatorial election.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Military Spouse Leadership Seminar (Apr 14&ndash;16):</strong> Spring seminar at Butler Officers&rsquo; Club, Plaza Housing, near Camp Foster.
      </p>
    </div>

    <!-- Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Outlook &mdash; Key Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture is the #1 concern.</strong> The 31st MEU&rsquo;s absence creates the most significant gap in US forward presence in years. China&rsquo;s Y-9FQ patrol suggests Beijing is probing during this window.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan&rsquo;s military transformation is accelerating at unprecedented pace.</strong> Type 25 missile deployment, Pacific Defense Planning Office, Space Operations Squadron elevation, 11 weapons protection missions, record defense spending, and field evacuation drills &mdash; all within days &mdash; signal a fundamental shift in Japan&rsquo;s defense identity.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Multilateral security deepening.</strong> SDF protection of UK military assets for the first time marks Japan&rsquo;s evolution from bilateral to multilateral security partnerships. Watch for AUKUS integration and NATO engagement.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China-Japan economic decoupling adds a new dimension.</strong> Export restrictions on rare earths and dual-use items create defense supply chain vulnerabilities. ECFR analysts warn the crisis is becoming &ldquo;structural&rdquo; rather than episodic.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">DPRK rhetoric escalating.</strong> Pyongyang&rsquo;s April 4 KCNA commentary specifically targeting Japan&rsquo;s Type 25 deployments adds a second adversarial vector to Okinawa&rsquo;s security environment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Local political dynamics remain volatile.</strong> Base burden debate, Futenma timeline, helicopter incidents, liberty restrictions, and Okinawa development funding all contribute to friction. Upcoming gubernatorial election adds sensitivity.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Naval News &bull; Naval Today &bull; Military.com &bull; Military Times &bull; Nippon.com &bull; Japan Ministry of Defense / Joint Staff &bull; Janes Defence &bull; USNI News &bull; Army Recognition &bull; Defense News &bull; The Diplomat &bull; Al Jazeera &bull; South China Morning Post &bull; Responsible Statecraft &bull; War on the Rocks &bull; KCNA &bull; NK News &bull; Earthquake Track &bull; CSIS &bull; ECFR &bull; International Crisis Group
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
