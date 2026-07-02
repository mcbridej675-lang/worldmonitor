#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];

const INTENDED_RECIPIENTS = [
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Economy &bull; Weather</p>
    </div>

    <!-- ===================== PRIORITY INTEL BANNER ===================== -->
    <div style="background: #1a0a0a; border: 1px solid #dc2626; padding: 14px 18px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 6px; font-weight: 800;">&#9888; Priority Intelligence</p>
      <p style="color: #eee; font-size: 13px; line-height: 1.5; margin: 0;">
        China warned Japanese survey ships in East China Sea (Jul 2) &bull; 10 PLAN warships transited First Island Chain in past week &bull; F-15EX Eagle II arrives Kadena for pre-deployment familiarization &bull; Three new weapon systems (NMESIS, MADIS, MRIC) fielded with 12th MLR
      </p>
    </div>

    <!-- ===================== EVENT 1: CHINA ECS ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Security / East China Sea &mdash; July 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Warns Japanese Survey Ships in East China Sea; 10 PLAN Warships Transit First Island Chain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a notable escalation, China warned two <strong>Japanese Coast Guard survey vessels</strong> to cease operations in the East China Sea on July 2, according to Japan&rsquo;s Chief Cabinet Secretary. The incident underscores worsening diplomatic relations between Beijing and Tokyo over competing maritime boundary claims.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, <strong>eight Chinese navy vessels</strong> were spotted heading toward the Pacific Ocean between June 26 and July 2, transiting through Japan&rsquo;s stretch of the First Island Chain &mdash; bringing the total to <strong>10 PLAN warships</strong> passing through Japanese maritime chokepoints in the past week. A Japan Joint Staff spokesman stated their operations are &ldquo;certainly expanding and intensifying.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Additionally, Japan previously detected a <strong>Chinese survey ship deploying seabed sensors near the Senkaku Islands</strong>, assessed as supporting submarine operations. The vessel was observed extending pipe-like and wire-like objects into the ocean within Japan&rsquo;s EEZ. Foreign Minister Iwaya characterized the situation as &ldquo;clearly escalating.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Chinese maritime assertiveness continues to escalate across the Nansei Chain. The combination of survey ship warnings, increased naval transits through the First Island Chain, and seabed sensor deployment near the Senkakus suggests a coordinated effort to test Japanese responses and expand PLA Navy operational reach. Direct relevance to Okinawa-based force readiness.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: F-15EX AT KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Air Power &mdash; July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-15EX Eagle II Arrives at Kadena Air Base for Pre-Deployment Training; Permanent Stationing Pushed to 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A U.S. Air Force <strong>F-15EX Eagle II</strong> from the 85th Test and Evaluation Squadron (Eglin AFB, Florida) landed at Kadena Air Base on June 29 and was formally announced July 1. The aircraft arrived alongside <strong>two F-15E Strike Eagles</strong> for training and familiarization with the 18th Wing.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is a preparatory visit ahead of the permanent stationing of <strong>36 F-15EX fighters</strong> at Kadena, originally planned for spring 2026 but delayed to 2027 due to a Boeing labor strike (August&ndash;November 2025). The F-15EX will replace <strong>48 aging F-15C/D jets</strong> that have been Kadena&rsquo;s primary air superiority platform. Despite fewer airframes, the EX variant offers significantly enhanced radar, weapons capacity, and electronic warfare capabilities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The F-15EX familiarization visit signals the modernization of Kadena&rsquo;s fighter fleet is advancing despite production delays. The transition from 48 legacy fighters to 36 next-gen platforms represents a net capability increase. Kadena remains the USAF&rsquo;s premier air superiority hub in the Western Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: NEW WEAPON SYSTEMS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Force Modernization &mdash; June 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Fields NMESIS, MADIS, and MRIC &mdash; Iron Dome-Derived Air Defense Now Operational in Western Pacific</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong>, formally received three critical new weapon systems during the Resolute Dragon 26 closing ceremony on June 30:
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>&bull; NMESIS</strong> (Navy-Marine Expeditionary Ship Interdiction System) &mdash; Ground-based anti-ship missile system for sea denial operations near coastlines.<br/>
          <strong>&bull; MADIS</strong> (Marine Air Defense Integrated System) &mdash; Short-range surface-to-air system for countering drones, helicopters, and fixed-wing aircraft.<br/>
          <strong>&bull; MRIC</strong> (Medium-Range Intercept Capability) &mdash; Mobile air defense incorporating <strong>Iron Dome-derived SkyHunter/Tamir interceptors</strong>, with a range of 2.5 to 44 miles. Integrated into III MEF in June 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          These systems represent the Marine Corps&rsquo; latest integration of modernized defenses in the increasingly contested Indo-Pacific, transforming the 12th MLR into a stand-in force capable of both anti-ship and air defense missions across the Nansei Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous fielding of anti-ship, counter-drone, and medium-range air defense systems marks a significant capability leap for Okinawa-based Marines. The MRIC (Iron Dome variant) in particular fills a critical gap in defending distributed Marine positions across the island chain against cruise missiles, drones, and aircraft.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: RESOLUTE DRAGON & ESG-7 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Military / Exercises &amp; Command &mdash; June 30 &ndash; July 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 Concludes; RADM Mutty Assumes Command of Expeditionary Strike Group 7</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26</strong>, the annual U.S.-Japan island defense exercise, concluded June 30 after spanning training areas across Kyushu, Okinawa, and the southwestern Nansei Chain islands (Miyako, Ishigaki, Yonaguni). Led by III MEF and the JGSDF Western Army, participants included the U.S. Army&rsquo;s <strong>3rd Multi-Domain Task Force</strong>, U.S. Navy 7th Fleet, and USAF 18th Wing. A JGSDF V-22 Osprey operated from MCAS Futenma for the first time during the exercise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>Rear Adm. Brian Mutty</strong> assumed command of Expeditionary Strike Group 7 / Task Group 76 from Rear Adm. Tom Shultz during a ceremony aboard USS John L. Canley off Singapore. Mutty also took responsibility for Task Force 78, which coordinates military, interagency, and international partners across the Indo-Pacific. ESG-7 is headquartered at <strong>White Beach, Okinawa</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Resolute Dragon&rsquo;s expanded scope across the full Nansei Chain reflects deepening U.S.-Japan interoperability in island defense scenarios. The JGSDF Osprey operating from Futenma is a first, signaling closer integration of Japanese airlift capabilities with U.S. base infrastructure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: 31ST MEU GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East &mdash; Indo-Pacific Amphibious Gap Persists</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> (~2,200&ndash;2,500 Marines aboard USS Tripoli) remains deployed to the Middle East since March 2026 to support operations against Iran. Marine Commandant Gen. Eric Smith acknowledged in May testimony that this left an &ldquo;unfilled&rdquo; gap in the Indo-Pacific. The 31st MEU is the <strong>only permanently forward-deployed MEU</strong> in the Indo-Pacific, and the Navy lacks sufficient amphibious ships to backfill the capability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence from the Western Pacific creates a significant readiness gap for crisis response, humanitarian assistance, and amphibious operations in the Nansei Chain &mdash; precisely as Chinese naval activity is intensifying. No backfill timeline has been announced.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: GOVERNMENT / POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Political &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Seeks Third Term; Futenma Relocation Marks 30 Years Without Resolution</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> has formally announced his bid for a third term in the <strong>September 13 gubernatorial election</strong>, running on his signature anti-base-relocation platform. His challenger, <strong>Genta Koja</strong> (42, former deputy mayor of Naha), is running as a de facto LDP candidate supporting the Futenma-to-Henoko relocation. Tamaki&rsquo;s support has reportedly softened following political shifts after the February general election.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Futenma relocation issue recently passed its <strong>30th anniversary</strong> without resolution. Key friction points: the U.S. DoD will not return Futenma unless a long runway (~2,700m) is secured at Henoko, where the planned V-shaped runways will be only ~1,800m each. Fresh land reclamation has resumed at Henoko, but soft seabed conditions in Oura Bay are driving up costs and timelines.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Additionally, the <strong>U.S.-Japan Host Nation Support Agreement</strong> (entered into force 2022) runs through FY2026 and requires renegotiation, with implications for force posture, base operations, and military family stability.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 7: JAPAN DEFENSE BUILD-OUT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Defense / Infrastructure &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Constructing Fighter Shelter at Naha Air Base; SAM Deployment Planned for Yonaguni by FY2030</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is building a <strong>fighter aircraft shelter at Naha Air Base</strong> (cost: ~$96M / 14.4 billion yen) designed to counter Chinese satellite surveillance and protect aircraft from first-strike scenarios. Japan also plans to deploy <strong>upgraded Type-03 medium-range surface-to-air missiles on Yonaguni Island</strong> (within visual range of Taiwan) by FY2030.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          New <strong>Marine barracks</strong> at Camp Hansen opened June 5, housing nearly 1,100 enlisted Marines in modern &ldquo;barracks of the future&rdquo; with private bedrooms for ranks through Sergeant.
        </p>
      </div>
    </div>

    <!-- ===================== ECONOMY / WEATHER ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Economic &amp; Weather Snapshot</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Tourism</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">On pace to exceed 10M visitors (record)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Accommodation Tax</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">2% tax in effect since April 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Economic Assessment</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Finance Ministry: &ldquo;Recovering&rdquo;</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Rainy Season</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Ended June 29 (JMA confirmed)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Current Conditions</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">84&ndash;91&deg;F highs / 76&ndash;82&deg;F lows</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Active Typhoons</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">None (clear window)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">2026 Typhoon Outlook</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">~28 projected (above avg 25.1)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Recent Seismic</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">M4.3 near Hirara (Jun 30) &mdash; no damage</td>
        </tr>
      </table>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming Events</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0; width: 90px;">Jul 4&ndash;5</td>
          <td style="color: #ccc; padding: 6px 0;">Camp Foster Festival (DoD ID &amp; local civilians; feat. Gavin DeGraw)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jul 4</td>
          <td style="color: #ccc; padding: 6px 0;">Ocean Expo Churaumi Fireworks &mdash; Emerald Beach, Motobu</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jul 7</td>
          <td style="color: #ccc; padding: 6px 0;">Tanabata (Star Festival)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jul 20</td>
          <td style="color: #ccc; padding: 6px 0;">Umi-no-hi (Ocean Day) &mdash; National Holiday</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Sep 13</td>
          <td style="color: #ccc; padding: 6px 0;">Okinawa Gubernatorial Election (Tamaki vs. Koja)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Chinese maritime activity around the Nansei Chain is at its most assertive level this year.</strong> The combination of survey ship confrontations in the East China Sea, expanded naval transits through the First Island Chain, and seabed sensor deployment near the Senkakus represents a coordinated increase in gray-zone pressure. The fielding of NMESIS, MADIS, and MRIC with the 12th MLR &mdash; and the F-15EX preview at Kadena &mdash; are direct U.S. responses to this trend, but the 31st MEU&rsquo;s continued absence in the Middle East leaves a meaningful gap in amphibious crisis response capability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the political front,</strong> the September gubernatorial election will be a bellwether for base politics. If Koja defeats Tamaki, it would mark the first pro-relocation governor in over a decade and could accelerate the Henoko timeline. The concurrent host nation support renegotiation adds another variable to force posture planning.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Bloomberg &bull; Stars and Stripes &bull; USNI News &bull; Defense News &bull; Task and Purpose &bull; Air and Space Forces Magazine &bull; Japan Times &bull; Atlantic Council &bull; Military.com &bull; Army Recognition &bull; CBS News &bull; Tokyo Weekender &bull; AccuWeather &bull; Japan Meteorological Agency
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

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
