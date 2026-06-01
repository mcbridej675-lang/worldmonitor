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

    <!-- ===================== EVENT 1: TYPHOON JANGMI ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #f59e0b; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ALERT</span>
          <span style="color: #666; font-size: 11px;">Weather / Force Protection / Okinawa &mdash; June 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Makes Direct Hit on Okinawa; TCCOR 1-Emergency Declared Across All U.S. Installations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (No. 6)</strong> &mdash; Okinawa&rsquo;s first major typhoon in nearly three years &mdash; struck the main island today with <strong>destructive force</strong>. All U.S. military installations entered <strong>TCCOR 1-Emergency at 10:30 a.m.</strong>, indicating sustained destructive winds of 58 mph or greater were occurring. <strong>Kadena Air Base recorded gusts of 74 mph</strong> and <strong>Naha International Airport recorded 77 mph</strong>, with 5 to 8 inches of rain falling across the island.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Consulate General Naha issued a <strong>formal weather alert</strong>. Marine Corps installations secured all facilities and equipment, canceled all appointments at <strong>U.S. Naval Hospital Okinawa</strong> and the <strong>18th Medical Group</strong>, and adjusted operations island-wide. Sandbags were deployed at Camp Foster building entrances. <strong>All 405+ commercial flights were canceled</strong> on June 1, with an additional 130+ cancellations already announced for June 2. The Okinawa Urban Monorail, all route buses, and all ferry services to Miyakojima and surrounding islands were <strong>suspended</strong>. Jangmi is forecast to pass Okinawa&rsquo;s main island tonight and track toward Amami Oshima by Tuesday morning, then approach Kansai by late June 2.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All flight operations at Kadena AB and MCAS Futenma are halted. The typhoon will disrupt any ongoing surveillance and maritime patrol missions from Okinawa at a time when PLAN activity near the island chain is at historic highs. Recovery operations and TCCOR downgrade are expected within 24&ndash;48 hours as Jangmi exits the region.<br/><br/>
            <strong>Watch:</strong> TCCOR downgrade timeline from Kadena and MCAS Futenma &bull; Structural damage assessments to base infrastructure &bull; Impact on ongoing 18th Wing support to Operation Epic Fury rotational deployments &bull; Ferry and air link restoration to Miyako and outlying islands.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: CHINA 100+ WARSHIPS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">PLAN / First Island Chain / Unprecedented Buildup &mdash; May 22&ndash;Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Deploys 100+ Warships Across First Island Chain; Taiwan Accuses Beijing of &ldquo;Wrecking the Status Quo&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan announced detection of an <strong>unprecedented deployment of over 100 PLAN warships</strong> simultaneously operating across the First Island Chain &mdash; <strong>more than double the normal 50&ndash;60 vessel presence</strong>. The deployment stretches from the <strong>Yellow Sea to the South China Sea</strong>, with increased activity near the <strong>Miyako Strait</strong>, waters east of Taiwan, the <strong>Bashi Channel</strong>, and the northern South China Sea. The fleet includes a notable concentration of <strong>destroyers, frigates, amphibious ships, and support vessels</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s national security chief directly linked the deployment to the recent <strong>Trump&ndash;Xi Beijing summit</strong>, accusing China of deliberately <strong>&ldquo;wrecking the status quo&rdquo;</strong> in the region. Taiwan conducted a <strong>second &ldquo;joint combat readiness patrol&rdquo; in one week</strong>, dispatching ships and fighter jets to monitor Chinese movements. The <strong>PLAN Type 054B frigate CNS Luohe (545)</strong> was detected transiting the Miyako Strait for the first time, joining the <strong>Liaoning carrier strike group</strong> &mdash; the first confirmed deployment of the new advanced ASW frigate with a Chinese carrier group.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the largest simultaneous PLAN deployment across the First Island Chain on record and coincides with the 31st MEU&rsquo;s absence from the Western Pacific. The Type 054B&rsquo;s enhanced ASW suite is purpose-built to counter U.S. and Japanese submarine advantages. The timing &mdash; post-Trump-Xi summit &mdash; suggests Beijing is demonstrating coercive capability while diplomatically engaged, a pattern consistent with the PLA&rsquo;s 2027 Taiwan readiness timeline.<br/><br/>
            <strong>Watch:</strong> Duration and composition of the deployment &bull; Whether the Liaoning CSG enters the Philippine Sea &bull; JMSDF tracking operations (degraded by Typhoon Jangmi) &bull; Any PLAN submarine activity through the Miyako Strait &bull; Taiwan&rsquo;s escalation posture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU / OPERATION EPIC FURY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USMC / Operation Epic Fury / Indo-Pacific Gap &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Middle East; Kadena Airmen &ldquo;In Harm&rsquo;s Way&rdquo;; 13 U.S. Service Members Killed in Iran Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; remains in the <strong>Persian Gulf supporting Operation Epic Fury</strong> against Iran. Approximately <strong>2,500 Marines</strong> and the amphibious assault ship <strong>USS Tripoli</strong> (homeported at Sasebo) departed Okinawa in mid-March. The operation began February 28 and was briefly paused during a two-week ceasefire on April 9 before resuming. Marine Commandant <strong>Gen. Eric Smith</strong> told Congress the gap in the Pacific remains <strong>&ldquo;unfilled.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>18th Wing at Kadena Air Base</strong> confirmed that Okinawa-based airmen are deployed <strong>&ldquo;in harm&rsquo;s way&rdquo;</strong> supporting CENTCOM operations. The Air Force has reported <strong>36 wounded and 6 killed</strong>; across all services, <strong>365 U.S. service members have been wounded and 13 killed</strong> in Operation Epic Fury. CENTCOM listed 26 aircraft types in use, from <strong>B-1 Lancer bombers to LUCAS one-way attack drones</strong>. The 18th Wing barred a local Okinawa newspaper from a base briefing amid a dispute over Iran coverage, highlighting tensions between operational security and local media relations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous deployment of the 31st MEU and Kadena airmen to the Middle East while China surges 100+ warships across the First Island Chain represents the most acute strategic stretch for Okinawa-based forces in decades. III MEF retains ground and air assets on island but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, HA/DR, and NEO operations.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Any temporary MEU rotation to the Pacific &bull; Congressional pressure on DoD to restore Indo-Pacific posture &bull; Kadena 18th Wing force generation capacity while supporting both Epic Fury and Pacific deterrence &bull; Lt. Gen. Turner&rsquo;s nomination to MARFORPAC (III MEF leadership transition).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: NANSEI ISLANDS + RESOLUTE DRAGON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan / Nansei Islands / Force Posture &mdash; May 17&ndash;22 + Upcoming</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF Completes First-Ever Nansei Islands Deployment Drill; 12th MLR Establishes Coordination Center on Miyakojima; Resolute Dragon 26 Begins June 20</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>JGSDF Ground Component Command</strong> completed a <strong>first-of-its-kind exercise</strong> (May 17&ndash;22) deploying troops and supplies to remote southwestern islands near Taiwan: <strong>Ishigaki, Yonaguni, and Miyakojima</strong>. Approximately <strong>300 Japanese soldiers</strong> participated, with <strong>20 Marines from the 12th Marine Littoral Regiment</strong> joining command post training on Miyakojima &mdash; establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island, only <strong>220 miles from Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Concurrently, the U.S., Japan, and Australia conducted a <strong>trilateral air exercise east of Okinawa</strong> featuring <strong>F-22 Raptors, F-35A Lightning IIs, F-15Js, F/A-18 Hornets, P-8A Poseidon</strong>, and multiple tankers. Looking ahead, <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will feature the first-ever landing of a <strong>GSDF V-22 Osprey at MCAS Futenma</strong>, deepening logistics interoperability. Japan&rsquo;s new <strong>SDF Maritime Transport Group</strong> &mdash; tasked with rapid sealift to the Nansei chain &mdash; is scheduled for deployment by fiscal 2026. The JMSDF also completed its most sweeping reorganization since 1954, replacing the &ldquo;Fleet Escort Force&rdquo; with a new <strong>&ldquo;Fleet Surface Force&rdquo;</strong> and creating an <strong>Information Warfare/Operations Command</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is rapidly building its &ldquo;southern shield&rdquo; as confidence in the U.S. security umbrella wavers due to Middle East commitments. The 12th MLR coordination center on Miyakojima, GSDF Osprey integration at U.S. bases, and the JMSDF&rsquo;s structural overhaul all signal Japan is preparing for independent and allied action in a Taiwan contingency. The convergence of these activities with China&rsquo;s 100+ warship deployment creates a dangerous escalation dynamic.<br/><br/>
            <strong>Watch:</strong> Resolute Dragon 26 scope (June 20&ndash;30) &bull; Whether the 12th MLR Miyakojima center becomes permanent &bull; JGSDF deployment of upgraded Type-12 anti-ship missiles to Nansei Islands &bull; Chinese response to expanding allied presence near Taiwan.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor Race Heats Up; Futenma Relocation Hits 30-Year Mark; Camp Foster Land Return Moves Forward</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki</strong> formally announced his bid for a <strong>third term</strong> ahead of Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. The 66-year-old anti-base relocation incumbent faces challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto LDP candidate who <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition faces strain as key coalition partners remain undecided on the relocation issue.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> passed its <strong>30th anniversary</strong> in April with no resolution. The U.S. has stated it <strong>will not return the Futenma site unless Japan agrees to a longer runway at Henoko</strong> &mdash; the current V-shaped plan provides only 1,800m runways versus Futenma&rsquo;s 2,700m. Construction continues but completion is not expected until <strong>at least 2033</strong>. In a positive development, the Japan-U.S. Joint Committee finalized an agreement to return approximately <strong>12 acres of Kishaba Housing area on Camp Foster</strong> by fall &mdash; a tangible step in base burden reduction. PFAS contamination up to <strong>56 times Japan&rsquo;s legal limit</strong> near Kadena and Futenma remains unresolved, with the U.S. military having <strong>denied all four Okinawa requests</strong> for on-base water sampling since 2016.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election will be a referendum on the U.S. military presence. A Koja victory would be the first pro-relocation governor in 8 years, potentially accelerating Henoko construction but increasing community friction. The Camp Foster land return shows progress on burden reduction, while the PFAS crisis and Futenma impasse continue to fuel local opposition. The upcoming U.S.-Japan base cost-sharing negotiations will shape force posture, troop quality of life, and Okinawa realignment for years.<br/><br/>
            <strong>Watch:</strong> September 13 gubernatorial polling &bull; PFAS litigation or diplomatic escalation &bull; U.S.-Japan cost-sharing agreement deadline &bull; Kishaba Housing area return timeline &bull; III MEF leadership transition (Lt. Gen. Watson replacing Turner).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: DRONE WARFARE + FORCE MODERNIZATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Modernization / Kadena &mdash; Recent</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">III MEF Pioneers Attack Drone Training at Camp Schwab; F-15EX Eagles Deploy to Kadena as Base Prepares for Fighter Transition</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Eighteen Marines</strong> from III MEF completed the <strong>Basic Drone Operator Course</strong> at <strong>Camp Schwab</strong>, learning to build and fly <strong>7-inch FPV attack drones</strong> from kits in &ldquo;full acro mode.&rdquo; Graduates advance to the <strong>Attack Drone Operator Course</strong> using <strong>Neros Archer drones</strong> capable of delivering explosive payloads &mdash; a direct application of Ukraine-Russia conflict lessons to Pacific island defense scenarios supporting the <strong>12th Marine Littoral Regiment&rsquo;s</strong> distributed maritime operations concept.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At <strong>Kadena Air Base</strong>, <strong>F-15EX Eagle II fighters</strong> have deployed for training missions as the base prepares for its long-anticipated fighter transition from legacy F-15C/Ds. The F-15EX brings significantly enhanced radar, weapons capacity, and electronic warfare capabilities. Combined with Kadena&rsquo;s ongoing support to Operation Epic Fury and its role as the primary ISR hub for the Western Pacific, the base remains the most operationally stressed U.S. air installation in the Indo-Pacific theater.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Modernization Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The drone operator pipeline and F-15EX transition represent complementary modernization tracks on Okinawa: low-cost, attritable platforms for distributed island defense and high-end air superiority for conventional deterrence. Both capabilities are critically needed given the 31st MEU&rsquo;s absence and China&rsquo;s naval surge.<br/><br/>
            <strong>Watch:</strong> Integration of attack drones into Resolute Dragon 26 &bull; F-15EX permanent basing timeline at Kadena &bull; <strong>AVAV</strong> (AeroVironment) and <strong>KTOS</strong> (Kratos Defense) drone procurement contracts &bull; Expansion of drone courses across III MEF.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Typhoon Jangmi has shut down Okinawa at a moment of maximum strategic tension.</strong> As the island hunkers down under TCCOR 1-Emergency, China has more than 100 warships operating across the First Island Chain &mdash; the largest simultaneous PLAN deployment on record &mdash; while the 31st MEU remains 6,000 miles away in the Persian Gulf and Kadena airmen are deployed &ldquo;in harm&rsquo;s way&rdquo; supporting Operation Epic Fury. The typhoon temporarily degrades allied ISR and maritime patrol coverage at the worst possible time.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan is accelerating its own deterrence posture.</strong> The JGSDF&rsquo;s first Nansei Islands drill, the 12th MLR coordination center on Miyakojima, the JMSDF&rsquo;s historic reorganization into a &ldquo;Fleet Surface Force,&rdquo; and the upcoming GSDF Osprey operations from U.S. bases all reflect Japan building a &ldquo;southern shield&rdquo; as confidence in the U.S. security umbrella wavers. Resolute Dragon 26 (June 20&ndash;30) will be the next major test of allied interoperability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> The September 13 gubernatorial election (Tamaki vs. Koja) will determine the future of U.S. base relations. The Futenma relocation is at a 30-year impasse over runway length. The Camp Foster Kishaba land return offers a modest goodwill signal. PFAS contamination remains a flashpoint. And the human cost of Okinawa&rsquo;s strategic importance continues to mount &mdash; 13 U.S. service members killed and 365 wounded in Operation Epic Fury, many from Okinawa-based units.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Nippon.com &bull; U.S. Embassy Japan &bull; USNI News &bull; Janes Defence &bull; The Diplomat &bull; Military Times &bull; Military.com &bull; Al Jazeera &bull; South China Morning Post &bull; The Epoch Times &bull; Naval News &bull; Asian Military Review &bull; Air &amp; Space Forces Magazine &bull; Japan Ministry of Defense &bull; Fox News &bull; CBS News &bull; Newsweek &bull; U.S. News
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
