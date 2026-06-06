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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Defense &bull; Government &bull; Regional Security &bull; Economy</p>
    </div>

    <!-- ===================== 1: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">NEW</span>
          <span style="color: #666; font-size: 11px;">Military / Infrastructure / Camp Hansen &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Opens at Camp Hansen; 1,096 Marines to Move In by July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>$320 million bachelor enlisted quarters complex</strong> was formally opened at <strong>Camp Hansen on June 5</strong> in a ribbon-cutting ceremony. The complex includes three barracks housing <strong>1,096 unaccompanied enlisted Marines</strong> (through the rank of sergeant). Each Marine receives a <strong>private 155-sq-ft bedroom</strong>; roommates share a 710-sq-ft unit with kitchen, restroom, shower, and laundry. The project is <strong>fully funded by the Japanese government</strong> under the Defense Policy Review Initiative (DPRI).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marines are expected to move in by <strong>July 2026</strong>. Maj. Gen. Brian Wolford (MCIPAC commander) called it <strong>&ldquo;the first domino that starts falling&rdquo;</strong> for the rest of Camp Hansen construction, signaling additional infrastructure investments to come.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Quality of Life</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Significance:</strong> Largest single barracks investment on Okinawa in decades. Japanese-funded construction demonstrates continued host-nation commitment to the alliance despite political friction over base issues. Move-in by July will improve QoL for over 1,000 Marines currently in older facilities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 2: 31st MEU INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Acknowledges &ldquo;Unfilled&rdquo; Indo-Pacific Gap After 31st MEU Deploys from Okinawa to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant Gen. Eric Smith has publicly acknowledged that the deployment of the <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently stationed MEU in the Indo-Pacific &mdash; from Okinawa to the Middle East has left the region&rsquo;s rapid-response capability <strong>&ldquo;unfilled.&rdquo;</strong> Approximately <strong>2,200&ndash;2,500 Marines</strong> from the 31st MEU and the amphibious assault ship <strong>USS Tripoli</strong> (homeported in Sasebo) deployed in March to support <strong>Operation Epic Fury</strong> against Iran and enforce the blockade of Iranian ports near the Strait of Hormuz.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The gap has been partially mitigated by the <strong>USS Boxer ARG and 11th MEU</strong> from California, which rapidly deployed ahead of schedule to the 7th Fleet area of operations. However, defense experts warn this is <strong>not a true replacement</strong> &mdash; it represents a net reduction in expeditionary capacity across the Indo-Pacific at a time of heightened China-Taiwan tensions and North Korean provocations. The 31st MEU&rsquo;s absence from Okinawa is the most significant shift in forward-deployed Marine posture in the Western Pacific in recent years.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force Readiness:</strong> III MEF&rsquo;s expeditionary response capability in the Western Pacific is degraded. The 31st MEU traditionally provides the region&rsquo;s only standing amphibious rapid-response force for contingencies from Taiwan Strait scenarios to humanitarian assistance/disaster relief across INDOPACOM.<br/><br/>
            <strong style="color: #ef4444;">RISK:</strong> Reduced deterrence posture in the First Island Chain &bull; Increased burden on allied partners (Japan, Australia) &bull; Potential exploitation window for adversary probing operations near Senkaku/Nansei Islands
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 2: RESOLUTE DRAGON EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise / U.S.-Japan Alliance &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: Japan GSDF Ospreys to Operate from MCAS Futenma for First Time; Major Island-Defense Drill Set for June 20&ndash;30</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three <strong>Japan Ground Self-Defense Force V-22 Ospreys</strong> will deploy to <strong>Marine Corps Air Station Futenma</strong> during Resolute Dragon 26, the sixth iteration of the bilateral exercise, running <strong>June 20&ndash;30</strong>. This marks the <strong>first time Japanese Ospreys have operated from a U.S. Marine base on Okinawa</strong> and the first time they will operate at <strong>Miyako Island</strong> (~220 miles east of Taiwan).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise will involve approximately <strong>7,300 JGSDF personnel and 2,300 U.S. service members</strong> across Okinawa and Kyushu (Kagoshima, Kumamoto, Saga, Oita prefectures). Training will focus on <strong>air-ground integration, logistics, and defense of key maritime terrain</strong>. Advanced Marine Corps systems will be featured, including the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and the <strong>Marine Air-Defense Integrated System (MADIS)</strong> &mdash; both central to Force Design 2030 modernization. The Ospreys will also conduct medical evacuation exercises to and from <strong>Miyako and Ishigaki islands</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Alliance Deepening:</strong> Japanese military aircraft operating from U.S. bases represents a major interoperability milestone. NMESIS and MADIS deployment signals rehearsal of anti-ship and air-defense missions in a contested island-chain environment &mdash; directly relevant to Taiwan contingency planning.<br/><br/>
            <strong style="color: #22c55e;">KEY:</strong> First JGSDF Osprey ops from a U.S. base &bull; First JGSDF Osprey ops at Miyako &bull; 9,600 total personnel &bull; Nansei Island defense focus
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 3: KADENA FIGHTER GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Air Force / Kadena AB / Force Structure &mdash; Late May&ndash;June</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-22 Raptors Rotate Into Kadena to Fill Fighter Gap; F-15EX Delivery Delayed to 2027; New Maintenance Squadron Activates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two F-22 Raptor squadrons &mdash; the <strong>90th Expeditionary Fighter Squadron</strong> (JBER, Alaska) and the <strong>27th Expeditionary Fighter Squadron</strong> (JB Langley-Eustis, Virginia) &mdash; arrived at <strong>Kadena Air Base</strong> in May for rotational duty with the 18th Wing. The deployment addresses the persistent <strong>fighter gap</strong> left by the retirement of the F-15C/D fleet, which defended Okinawa&rsquo;s airspace for 50 years.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Air Force Secretary <strong>Troy Meink</strong> confirmed during May 21 Senate Armed Services Committee testimony that the first <strong>F-15EX Eagle II</strong> multirole fighters will not arrive at Kadena until <strong>2027</strong> &mdash; nearly a year behind schedule. The Air Force plans to permanently station <strong>36 F-15EXs</strong> with the 18th Wing to replace the 48 retired F-15C/Ds. Meanwhile, the <strong>18th Aircraft Maintenance Squadron activated on May 15</strong>, standing up infrastructure for the eventual F-15EX transition. Housing Allowance for all Okinawa-based service members increased <strong>$400&ndash;$500/month</strong> effective May 16.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Readiness Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Air Superiority:</strong> Kadena remains reliant on rotational deployments (F-22s, F-16s, F-15Es, F-35s) rather than a permanent fighter wing. The F-22 rotations are expensive in Raptor flight hours but necessary &mdash; the Western Pacific threat environment demands continuous coverage.<br/><br/>
            <strong style="color: #ef4444;">GAP:</strong> No permanent fighter squadron at Kadena until F-15EX arrives (~2027) &bull; Rotational model creates coverage risk during transition periods &bull; F-15EX delay reflects broader production/supply chain constraints
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 4: CHINA-JAPAN TENSIONS & NANSEI DEFENSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Regional Security / China-Japan / Defense Buildup &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Accelerates Nansei Island Defense: Type 25 Missiles Fielded, Yonaguni EW Unit Planned; China Patrols Near Okinawa After Taiwan Strait Transits</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan has begun fielding the upgraded <strong>Type 25 Surface-to-Ship Missile</strong> (redesignated from Type 12) and the <strong>Type 25 Hyper Velocity Gliding Projectile</strong> across the Nansei island chain. These systems extend engagement ranges <strong>beyond 1,000 km</strong>, enabling Japan to hold adversary naval targets at risk from outside contested zones. The FY2026 defense budget allocates <strong>&yen;970 billion ($6.2B)</strong> to standoff missile capability, including <strong>&yen;177 billion ($1.13B)</strong> specifically for Type 12/25 missiles. Plans to deploy upgraded <strong>Type-03 air defense missiles to Camp Yonaguni</strong> (110 km from Taiwan) by FY2030 were briefed to residents in April.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tensions remain elevated after China&rsquo;s Eastern Theater Command launched <strong>combat readiness patrols in the East China Sea</strong> and sent warships near Okinawa in April, responding to a Japanese destroyer transiting the Taiwan Strait. Defense Minister <strong>Koizumi dismissed claims of &ldquo;new militarism&rdquo;</strong> at the Shangri-La Dialogue (May 31), accusing China of rapidly expanding its military with limited transparency. Japan&rsquo;s record <strong>$58 billion FY2026 defense budget</strong> (up 9.4% YoY) marks the fourth year of the five-year plan to reach 2% of GDP on defense spending.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Environment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Escalation Indicators:</strong> Chinese military activity near Okinawa has increased following PM Takaichi&rsquo;s November statement that Japan could use military force to defend Taiwan. North Korea conducted three ballistic missile launches in 2026 (Jan, Jan, Mar), with a U.S. defense official confirming NK can strike Japan with nuclear or conventional warheads.<br/><br/>
            <strong style="color: #ef4444;">WATCH:</strong> Chinese naval patrols near Miyako Strait &bull; Senkaku Islands incursions &bull; North Korea ICBM/IRBM tests &bull; Japan&rsquo;s next defense buildup program (due end 2026)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 5: HORMUZ ENERGY IMPACT ON JAPAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Energy / Economy / Strategic Impact &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Crisis Hammers Japan: 93% of Oil Imports Disrupted; Kadena Airmen Deployed to Iran Operations; Energy Rethink Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Strait of Hormuz closure</strong> since late February 2026 continues to directly impact Japan and Okinawa-based forces. Japan imports <strong>93% of its oil</strong> through the Strait, making it the most exposed major economy. PM Takaichi has called the crisis&rsquo;s economic impact <strong>&ldquo;enormous&rdquo;</strong> across the Asia-Pacific. Japan released <strong>80 million barrels</strong> (45 days of domestic demand) from strategic petroleum reserves in March to stabilize markets, and Goldman Sachs warns elevated prices could persist <strong>through 2027</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa-based forces are directly involved: <strong>airmen from Kadena Air Base</strong> have been deployed <strong>&ldquo;in harm&rsquo;s way&rdquo;</strong> in support of Iran operations (Operation Epic Fury), according to the 18th Wing commanding general. The Air Force also <strong>barred the Okinawa Times</strong> from a base briefing in April amid a dispute over Iran war coverage. The crisis is forcing Japan into a broader <strong>energy strategy rethink</strong>, including accelerated nuclear reactor restarts and diversification of oil supply away from Gulf dependence.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Economic &amp; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Fuel Prices:</strong> Brent crude remains near $96/bbl. Japan&rsquo;s yen has weakened significantly; Finance Minister Katayama has warned currency intervention is &ldquo;on the table.&rdquo; 90% of Japanese citizens report anxiety over economic impact (Asahi Shimbun poll).<br/><br/>
            <strong style="color: #ef4444;">LOCAL IMPACT:</strong> Rising fuel costs for Okinawa-based operations &bull; Kadena personnel supporting Epic Fury in forward-deployed roles &bull; Potential impact on base readiness if energy supply disruptions worsen &bull; Okinawa tourism could be affected by higher travel costs
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 6: FUTENMA RELOCATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Base Politics / Infrastructure &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Stalls at 30-Year Mark: Pentagon Demands Long Runway at Henoko; Construction Pushed to 2033+</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The relocation of <strong>MCAS Futenma</strong> to Henoko, Camp Schwab, has passed its <strong>30th anniversary</strong> with no concrete return date set. The U.S. Department of Defense has stated it <strong>will not return the Futenma site</strong> unless a long runway is secured at the replacement facility &mdash; the current Futenma runway is ~2,700 meters, while the planned Henoko V-shaped runways will be only ~1,800 meters each. Defense Minister <strong>Koizumi visited Okinawa in January</strong>, pledging to reduce the U.S. military footprint while affirming that relocation to Henoko remains &ldquo;the only viable solution.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Henoko construction continues but is not expected to be completed until <strong>at least 2033</strong>, complicated by the need to reinforce soft seabed discovered at the site. Tragically, <strong>two people, including a teenage girl, died</strong> when boats carrying students capsized near the Henoko construction site earlier this year. The base relocation remains the most politically sensitive U.S. military issue in Okinawa, with the prefectural government continuing to oppose the Henoko plan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Status:</strong> No change in the fundamental impasse. Tokyo insists Henoko is the only option; Okinawa Prefecture opposes. The runway-length dispute adds a new U.S.-Japan friction point. Construction timeline continues to slip.<br/><br/>
            <strong style="color: #ef4444;">FRICTION POINTS:</strong> Pentagon runway demands vs. Henoko design &bull; Okinawa prefectural opposition &bull; Seabed reinforcement delays &bull; 2033+ completion timeline &bull; Local community sentiment
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 7: TYPHOON & WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Weather / Base Operations / Travel &mdash; June 1&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Hits Okinawa; Bases Locked Down; Additional Heavy Rain Expected June 9&ndash;10</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (Typhoon No. 6)</strong> struck Okinawa on June 1 &mdash; the island&rsquo;s <strong>first major typhoon in nearly three years</strong>. U.S. military bases across Okinawa battened down and set <strong>Tropical Cyclone Condition of Readiness (TCCOR)</strong>. Naha Airport was <strong>fully closed</strong>, with over <strong>400 flights canceled</strong> across Japan. Route buses, the Okinawa Urban Monorail, and all ferry services to outlying islands were suspended. The U.S. Consulate General Naha issued weather alerts.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As the rainy season enters its second half, forecasters warn of <strong>additional warning-level heavy rain from June 9&ndash;10</strong>. The Okinawa Prefectural Government has also issued a <strong>box jellyfish (habu kurage) warning</strong> through September 30 &mdash; 81 sting cases reported in 2025. Base outdoor activities and beach liberty may be impacted.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Weather Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Current:</strong> Post-typhoon recovery; normal operations resumed. <strong>Upcoming:</strong> Heavy rain risk June 9&ndash;10. Rainy season expected to end late June. Typhoon season continues through November &mdash; monitor Pacific tropical development closely.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 8: ECONOMY & TOURISM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Economy / Tourism / Local Development &mdash; June</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Economy Upgraded to &ldquo;Recovering&rdquo;; Tourism Set to Exceed 10M Visitors; Marubeni Enters Tourism Sector; Shuri Castle Reopening November</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Finance Ministry has <strong>upgraded Okinawa&rsquo;s economic assessment to &ldquo;recovering&rdquo;</strong> from &ldquo;moderately recovering,&rdquo; driven primarily by a tourism surge. Tourist arrivals in FY2025 are expected to <strong>exceed 10 million for the first time</strong>, with inbound visitors up <strong>23% year-on-year</strong>. Tourism revenue has increased approximately <strong>50% over the past decade</strong>. Expedia named Okinawa one of the world&rsquo;s top destinations for 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Marubeni Corporation</strong> acquired a stake in <strong>Okinawa Tourist Service Inc.</strong> in June, making it a subsidiary and signaling a full-scale entry into the tourism business. <strong>Shuri Castle&rsquo;s main hall</strong>, destroyed by fire in 2019, will reopen to the public on <strong>November 23</strong>, with a government ceremony on November 22 &mdash; a significant cultural and tourism milestone. The OHA (Overseas Housing Allowance) increase of <strong>$400&ndash;$500/month</strong> for service members may boost off-base spending in local communities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Economic Indicators</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #22c55e;">POSITIVE:</strong> Record tourism arrivals &bull; Finance Ministry economic upgrade &bull; Major corporate investment (Marubeni) &bull; Shuri Castle reopening will boost cultural tourism &bull; OHA increase supports local economy<br/>
            <strong style="color: #ef4444;">HEADWINDS:</strong> Hormuz-driven fuel cost inflation &bull; Yen weakness pressuring import costs &bull; Typhoon season disruptions to travel &bull; Potential tourism slowdown if global energy crisis deepens
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 9: CIVIL-MILITARY & POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">Civil-Military / Political / Law Enforcement &mdash; May&ndash;June</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Soldier Referred for Sexual Assault Prosecution; Gubernatorial Election Set for September 13; Solo MP Patrols Remain Suspended</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>U.S. Army soldier</strong> (male, 20s) assigned to Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th ADA Brigade at Kadena Air Base was <strong>referred to the Naha Public Prosecutors Office</strong> on May 22 for allegedly sexually assaulting a woman on Okinawa&rsquo;s main island in April. He allegedly caused arm injuries, fled by car, struck a guardrail, and failed to report the accident. Governor <strong>Tamaki called the incident &ldquo;extremely regrettable&rdquo;</strong>. This is the latest in a series of sexual assault cases involving U.S. service members since late 2023, fueling anti-base sentiment ahead of the election.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Okinawa gubernatorial election is set for September 13, 2026</strong>. Governor <strong>Denny Tamaki</strong> (66) will seek a third term on an anti-base platform. His challenger is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as the de facto LDP candidate who supports the Henoko relocation. Tamaki faces weakened support after the &ldquo;All Okinawa&rdquo; anti-base coalition <strong>failed to win any of Okinawa&rsquo;s four single-seat constituencies</strong> in the February 8 lower house election. Separately, <strong>solo Military Police patrols</strong> in nightlife districts remain suspended since November 2025 following an excessive-force incident; joint patrols with Japanese police continue.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Election Watch:</strong> A Koja victory could signal weakening of the anti-base movement and potentially ease Futenma relocation obstacles. A Tamaki re-election maintains the status quo of prefectural opposition. Criminal incidents by service members remain the most potent political ammunition for anti-base advocates.<br/><br/>
            <strong style="color: #ef4444;">WATCH:</strong> September 13 gubernatorial election &bull; Ongoing service member misconduct cases &bull; MP patrol policy review &bull; &ldquo;All Okinawa&rdquo; coalition viability
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Situational Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture on Okinawa is stretched thin.</strong> The 31st MEU&rsquo;s absence in the Middle East, combined with Kadena&rsquo;s reliance on rotational fighter deployments pending F-15EX arrival in 2027, creates the most significant capability gap in the Western Pacific in years. The upcoming Resolute Dragon exercise (June 20&ndash;30) will partially offset this by demonstrating deepened U.S.-Japan interoperability, but it does not replace standing combat power.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The regional threat environment continues to intensify.</strong> China&rsquo;s combat readiness patrols near Okinawa, Japan&rsquo;s accelerated missile deployments across the Nansei chain, and PM Takaichi&rsquo;s unprecedented statements on defending Taiwan are collectively reshaping Okinawa&rsquo;s strategic posture. Japan&rsquo;s $58B defense budget and new Type 25 missile deployments represent the most significant island-chain defense buildup since the Cold War.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">The Hormuz crisis is Okinawa&rsquo;s silent disruptor.</strong> With 93% of Japan&rsquo;s oil transiting the Strait, the energy crisis touches everything &mdash; from base operational costs to local fuel prices to Kadena airmen deployed in harm&rsquo;s way supporting Epic Fury. Monitor the Iran situation closely; any escalation will have direct and immediate impact on Okinawa-based operations and the local economy.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Military Times &bull; Air &amp; Space Forces Magazine &bull; USNI News &bull; Al Jazeera &bull; Foreign Policy &bull; The Diplomat &bull; Defense News &bull; Army Recognition &bull; Asian Military Review &bull; Eurasian Times &bull; CSIS &bull; ORF Online &bull; Japan Ministry of Defense &bull; Travel and Tour World &bull; Nippon.com &bull; CBS News &bull; ABC News &bull; CNN &bull; Military.com &bull; DVIDSHUB &bull; Kadena Air Base Public Affairs &bull; Marubeni Corp
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
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
