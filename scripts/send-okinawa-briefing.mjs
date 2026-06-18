#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const TARGET_RECIPIENTS = [
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">USMC &bull; Defense &bull; Geopolitics &bull; Local Government &bull; Security Assessment</p>
    </div>

    <!-- ===================== PRIORITY INTEL SUMMARY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px; font-weight: 700;">Priority Intel Summary</p>
      <p style="color: #ccc; font-size: 13px; line-height: 1.7; margin: 0;">
        <strong style="color: #fff;">1.</strong> Defense Ministry expanded Henoko landfill operations into a new section east of Cape Henoko (Jun 17).<br/>
        <strong style="color: #fff;">2.</strong> Exercise Resolute Dragon 26 begins Jun 20 &mdash; ~9,600 troops; first-ever JGSDF Osprey deployment from MCAS Futenma.<br/>
        <strong style="color: #fff;">3.</strong> 31st MEU remains deployed to Middle East (Operation Epic Fury) &mdash; Indo-Pacific amphibious gap persists.<br/>
        <strong style="color: #fff;">4.</strong> Sexual assault charges against U.S. Army soldier at Kadena dropped by Naha prosecutors (Jun 11).<br/>
        <strong style="color: #fff;">5.</strong> Okinawa Memorial Day (Irei no Hi, 81st anniversary) approaching Jun 23.
      </p>
    </div>

    <!-- ===================== EVENT 1: HENOKO EXPANSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Base Construction / Henoko &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Defense Ministry Expands Henoko Landfill Into New Section East of Cape Henoko</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 17</strong>, the Defense Ministry notified Okinawa Prefecture that it has begun pouring earth and sand in a <strong>new area east of Cape Henoko</strong> in Oura Bay for the Futenma Replacement Facility. This new section neighbors the area where earth-filling began in November 2025 as the first round of full-scale reclamation on the eastern side. The southern section landfill, underway since 2018, is <strong>nearly complete</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The project remains only <strong>17% complete</strong> nearly 30 years after the 1996 SACO agreement. Soft ground pile driving is just <strong>6.6% complete</strong>. Government projects completion by <strong>April 2033</strong> with the facility operational by ~2036; however, U.S. military estimates suggest <strong>2037 or later</strong>. Total cost is estimated at approximately <strong>2.65 trillion yen (~$17B)</strong>. Governor Tamaki has called the construction &ldquo;absolutely unacceptable&rdquo; and opposes relocation within the prefecture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expansion of landfill work signals the central government&rsquo;s intent to maintain construction momentum ahead of the <strong>September 13 gubernatorial election</strong> where Henoko is the central issue. Governor Tamaki (anti-base) faces challenger Genta Koja (pro-relocation, LDP-backed). The &ldquo;All Okinawa&rdquo; coalition lost all four Okinawa seats in the February Lower House election, suggesting weakening anti-base political strength.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military Exercise / USMC-JGSDF &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 Begins June 20: ~9,600 Troops; First JGSDF Osprey Deployment from Futenma</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The sixth iteration of <strong>Exercise Resolute Dragon</strong> launches June 20, the largest bilateral exercise between the USMC and JGSDF. Approximately <strong>7,300 Japanese and 2,300 U.S. service members</strong> will participate across Okinawa, Miyako Island, Ishigaki Island, Yonaguni Island, and Kyushu (Oita, Saga, Kumamoto, Kagoshima prefectures).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Historic first:</strong> Three JGSDF V-22 Ospreys will deploy to MCAS Futenma &mdash; the first time Japanese Ospreys have operated from a U.S. Marine base. The aircraft will conduct flights to <strong>Miyako Island</strong> (~220 mi east of Taiwan) and <strong>Ishigaki Island</strong>, reflecting heightened focus on island defense amid Taiwan Strait tensions. Advanced systems include the <strong>NMESIS</strong> anti-ship missile system and <strong>MADIS</strong> air defense system. A combined force of 70 personnel will conduct drills on Miyako Island.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise demonstrates deepening U.S.-Japan interoperability along the First Island Chain and signals a capability projection toward Taiwan contingencies. JGSDF Osprey operations from Futenma mark a meaningful step in bilateral integration. The NMESIS deployment gives 12th MLR ground-based anti-ship capability critical for distributed maritime operations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East; Indo-Pacific Amphibious Gap Persists</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU &mdash; departed Okinawa on <strong>March 13</strong> aboard USS Tripoli with approximately 2,500 Marines. Since <strong>April 13</strong>, the unit has been enforcing a blockade of Iranian ports as part of <strong>Operation Epic Fury</strong>, accompanied by USS San Diego and USS New Orleans (Sasebo).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee on May 18: <em>&ldquo;The gap is unfilled. When you move an ARG/MEU, you simply don&rsquo;t replace it.&rdquo;</em> USS Boxer ARG and 11th MEU (Camp Pendleton) deployed ahead of schedule to partially mitigate. III MEF on Okinawa remains operational. As of <strong>April 4</strong>: 36 Air Force wounded, 6 deaths; total across services: 365 injured, 13 deaths in Epic Fury operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence creates a meaningful gap in rapid-response amphibious capability in the Western Pacific. Analysts warn China, Russia, and North Korea may seek to exploit the gap. III MEF and 12th MLR remain on Okinawa, but the lack of an embarked MEU reduces surge capacity for Taiwan or Korean Peninsula contingencies.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: KADENA / AIR OPERATIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Air Operations / Kadena &mdash; Current Status</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base: F-22 Raptors on Station; F-15EX Delivery Delayed; Personnel Supporting Epic Fury</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>12 F-22 Raptors</strong> arrived at Kadena in early May from JBER Alaska (90th EFS) and JB Langley-Eustis (27th EFS), replacing two F-35A squadrons that rotated home. The permanent <strong>F-15EX Eagle II</strong> replacement &mdash; 36 aircraft planned for Kadena &mdash; has been <strong>delayed</strong> due to the Boeing St. Louis plant strike (Aug&ndash;Nov 2025). Originally expected March&ndash;June 2026, no updated timeline has been announced.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          18th Wing Commander <strong>Brig. Gen. Gallemore</strong> confirmed Kadena personnel are deployed in support of Operation Epic Fury against Iran. Space Force CMSSF <strong>John Bentivegna</strong> toured Okinawa installations on <strong>June 12</strong>, visiting Camp Kinser (161st EW Combat Detachment) and Fort Buckner (53rd Space Operations Squadron) to assess space-enabled capabilities supporting regional readiness.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena continues rotational fighter deployments to maintain air superiority presence despite F-15EX delivery delays. The Space Force chief&rsquo;s visit underscores growing emphasis on space-domain integration at Okinawa installations. A planned <strong>$96M camouflage shelter</strong> at Naha Air Base for F-15J/DJs aims to counter Chinese satellite surveillance capabilities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: SEXUAL ASSAULT CASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">SOFA / Community Relations &mdash; June 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Naha Prosecutors Drop Sexual Assault Charges Against U.S. Soldier from Kadena; Third Dismissal in Two Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Naha Public Prosecutors Office dismissed sexual assault and bodily injury charges against a U.S. Army soldier (Echo Battery, 1st Bn, 1st ADA Regiment, 38th ADA Brigade) at Kadena Air Base. The incident occurred outdoors in April 2026 against a woman over 18. The soldier was separately fined approximately <strong>$125 for a hit-and-run traffic violation</strong> while fleeing the scene. No explanation was given for the dismissal. This is at least the <strong>third sexual assault case against service members dropped in two years</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Forces Japan implemented stricter off-base liberty restrictions in October 2024 (no off-base drinking 1&ndash;5 a.m.). The mandatory <strong>Okinawa Orientation Overview</strong> briefing for newcomers is being revised after recent incidents; Okinawa Prefecture proposed updates to sections on incidents/accidents. The Okinawa Community Partnership Forum held its first meeting on <strong>May 9</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Repeated case dismissals fuel local resentment and strengthen anti-base political narratives ahead of the gubernatorial election. Community relations remain a sensitive factor in SOFA negotiations &mdash; the Special Measures Agreement governing base costs expires in FY2026, requiring renegotiation. Japan currently provides ~<strong>$1.9B annually</strong> for utilities, base labor, and training relocation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: CHINESE MILITARY ACTIVITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / China / Nansei Islands &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Chinese Naval Activity Near Okinawa; Japan Accelerates Nansei Islands Missile Deployments</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese naval activity around the Nansei Islands chain continues at an elevated tempo. In <strong>April</strong>, a Chinese destroyer and frigate (Formation 133) transited the <strong>Yonaguni-Iriomote Waterway</strong> &mdash; approximately 70 miles from Taiwan. In <strong>January</strong>, four Chinese warships transited the <strong>Miyako Strait</strong>. JASDF responded to <strong>464 Chinese air incursions</strong> in 2024. China also initiated installation of a new structure west of the equidistance line in the <strong>East China Sea</strong> in January 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s response: <strong>Type-03 Medium-Range SAMs</strong> (enhanced for hypersonic glide vehicles) planned for Yonaguni by FY2030, adding ~100 personnel. In May, the JGSDF conducted its <strong>first-ever exercise focused on the Nansei Islands</strong> with 300 Japanese and 20 U.S. Marines, deploying Type-88 anti-ship missiles to Ishigaki and ScanEagle II UAVs to Yonaguni. Japan&rsquo;s record <strong>9 trillion yen ($58B) defense budget</strong> is the fourth year of a five-year plan to reach 2% of GDP.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The PLA is edging toward a 2027 capability timeline for Taiwan operations. PM Takaichi has stated Japan could deploy SDF alongside U.S. forces if China attacked Taiwan. The Nansei Islands buildup &mdash; missiles, radars, UAVs, shelters &mdash; transforms the archipelago from a logistics corridor into a defended battlespace. Mage Island base under construction to house all three Japanese service branches plus U.S. forces by ~2030.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: PFAS & ENVIRONMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Environment / Public Health &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near U.S. Bases: 31 of 44 Sites Exceed Standards; MoD Rejects Filter Funding</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Elevated PFAS levels were found at <strong>31 of 44 sampling sites</strong> around U.S. military bases, exceeding Japan&rsquo;s 50 ppt standard. The highest contamination measured <strong>2,800 ppt</strong> (56 times the standard) near Kadena Air Base and MCAS Futenma. Blood tests of residents near Futenma found <strong>PFOS concentrations 4 times the national average</strong>. New Japanese PFAS regulations took effect <strong>April 1, 2026</strong>. Japan&rsquo;s Ministry of Defense <strong>rejected</strong> Okinawa&rsquo;s request to fund new PFAS filters for a central water purification plant.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 8: WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Natural Hazards &mdash; Current</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Rainy Season Ending; Record Rainfall on Kumejima; 28-Typhoon Season Forecast</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s rainy season (began May 4, six days early) is in its <strong>final phase</strong> as the front moves northward toward Honshu. Kumejima received <strong>1.6 times average rainfall</strong> with record-breaking totals. Heavy rain with thunder expected June 18 in southern Kyushu and Amami regions; landslide risk elevated.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi</strong> (Category 1) struck Okinawa on June 1 &mdash; the island&rsquo;s first major direct hit in nearly 3 years. Wind gusts up to 70 mph; the storm passed 7 miles west of Kadena. All U.S. installations entered TCCOR 1-Emergency. The <strong>2026 season forecast projects 28 typhoons</strong> (above 25.1 average), with 14 expected to approach Japan. El Ni&ntilde;o conditions could intensify the late season (September).
        </p>
      </div>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming &mdash; Key Dates</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700; width: 110px;">Jun 20&ndash;30</td>
          <td style="color: #bbb; padding: 8px 0;">Exercise Resolute Dragon 26 &mdash; USMC/JGSDF bilateral, ~9,600 troops</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Jun 23</td>
          <td style="color: #bbb; padding: 8px 0;">Okinawa Memorial Day (Irei no Hi) &mdash; 81st anniversary, Peace Memorial Park ceremony</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Jun 28</td>
          <td style="color: #bbb; padding: 8px 0;">OIST Innovation Accelerator 2027&ndash;28 applications close</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Sep 13</td>
          <td style="color: #bbb; padding: 8px 0;">Okinawa gubernatorial election &mdash; Tamaki (anti-base) vs. Koja (pro-relocation)</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">FY2026</td>
          <td style="color: #bbb; padding: 8px 0;">Special Measures Agreement (base cost sharing) expires &mdash; renegotiation required</td>
        </tr>
      </table>
    </div>

    <!-- ===================== ECONOMIC SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Economic Snapshot</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Tourism boom:</strong> Okinawa ranked <strong>#2 global destination</strong> on Expedia&rsquo;s 2026 list (71% YoY increase in searches). On track to exceed <strong>10 million tourists</strong> in FY2025 for the first time. Junglia theme park generated <strong>&yen;32.2B economic impact</strong> in its first six months (650K visitors). A new <strong>2% accommodation tax</strong> (capped at &yen;2,000/night) took effect, expected to generate ~&yen;7.8B annually.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Investment:</strong> Marubeni acquired Okinawa Tourist Service (OTS) on June 2, targeting the inbound market projected to grow ~9.5% annually. State development funds for Okinawa increased to <strong>&yen;264.7B</strong> in FY2026. Japan&rsquo;s Finance Ministry <strong>upgraded its economic assessment</strong> for the Okinawa region in January.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Financial sector:</strong> Okinawa Financial Group (TSE:7350) reported <strong>35% earnings growth</strong> with 15.9% net margin. However, subsidiary Bank of Okinawa holds <strong>&yen;9.41B in unrealized bond losses</strong> (56x book-to-market gap). Shuri Castle main hall restoration expected completion <strong>autumn 2026</strong>.
      </p>
    </div>

    <!-- ===================== DRONE PROGRAMS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">USMC Force Modernization &mdash; Okinawa</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Drone training hub:</strong> Okinawa designated as one of four regional drone training hubs. Camp Schwab hosts the <strong>Basic Drone Operator Course</strong> (18 students, 3 weeks, build FPV drones from kits) and <strong>Attack Drone Operator Course</strong> (Neros Archer drones for explosive payloads). Marines tested and destroyed an unmanned surface vessel off White Beach with a drone on March 22 &mdash; a first.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">12th MLR capabilities:</strong> Alpha Company, 12th Littoral Combat Team executed the <strong>first-ever overhead live-fire range at Camp Schwab</strong> in January using M3E1 weapons. Starting FY2026, the 12th LCT will receive <strong>NMESIS</strong> ground-based anti-ship missiles. Naval Special Warfare forces conducted <strong>precision free-fall insertion training</strong> over Okinawa from UH-1Y/AH-1Z helicopters in January.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Japan Times &bull; Stars and Stripes &bull; USNI News &bull; Military Times &bull; Nikkei Asia &bull; SCMP &bull; Taipei Times &bull; Space Force News &bull; DVIDSHUB &bull; Atlantic Council &bull; Army Recognition &bull; GlobalSecurity &bull; Marubeni Corp &bull; OIST News &bull; Simply Wall St &bull; Expedia &bull; Ground News &bull; Tokyo Weekender &bull; CFR &bull; Militarnyi
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

const useTestingMode = !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : TARGET_RECIPIENTS;

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
    console.log(`Target recipients (requires verified domain): ${TARGET_RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
