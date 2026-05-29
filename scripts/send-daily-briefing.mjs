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

    <!-- ===================== EVENT 1: TROPICAL STORM JANGMI ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ALERT</span>
          <span style="color: #666; font-size: 11px;">Weather / Tropical Cyclone / Force Protection &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Jangmi (06W) Bearing Down on Okinawa; Category 1 Typhoon Expected Monday Night; Bases at TCCOR 4</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As of <strong>9:00 p.m. Friday, May 29</strong>, Tropical Storm Jangmi is located approximately <strong>735 miles south-southeast of Kadena Air Base</strong>, moving west-northwest at <strong>14 mph</strong> with sustained winds of <strong>50 mph</strong> and gusts to <strong>65 mph</strong>. The storm is forecast to strengthen significantly and make closest approach to Okinawa around <strong>1:00 a.m. Monday (June 1)</strong>, passing approximately <strong>40 miles west of Kadena Air Base</strong> as a <strong>Category 1-equivalent typhoon</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Peak intensity is forecast at <strong>90 mph sustained winds with 115 mph gusts</strong> by mid-evening Sunday. U.S. bases on Okinawa are currently at <strong>TCCOR 4</strong> (Tropical Cyclone Condition of Readiness 4), indicating destructive winds are possible within 72 hours. Weather officials are urging completion of all preparations during the weekend as conditions will deteriorate rapidly from Sunday evening. The storm is projected to curve northeast toward the Tokyo area by Wednesday-Thursday as a weakening tropical storm. Okinawa has been in its rainy season since May 4 (six days earlier than average), compounding flood risk.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect TCCOR escalation through the weekend: TCCOR 3 (Saturday), TCCOR 2 (Sunday morning), TCCOR 1 (Sunday evening), TCCOR 1-Emergency (Monday). All non-essential flight operations at Kadena Air Base and MCAS Futenma will likely be suspended by Sunday. Base housing, outdoor equipment, and vehicle staging should be secured by Saturday evening. A 40-mile closest approach west of Kadena puts the island on the storm&rsquo;s dangerous right side, maximizing wind and rainfall impacts.<br/><br/>
            <strong>Watch:</strong> TCCOR updates from Kadena and MCAS Futenma &bull; F-22 Raptor repositioning (rotational aircraft may evacuate to Guam or mainland Japan) &bull; Impact on ongoing drone training at Camp Schwab &bull; Post-storm damage assessment and recovery timeline.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: F-15EX DELAY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">USAF / Force Modernization / Kadena Air Base &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Air Force Secretary Confirms F-15EX Delivery to Kadena Delayed to 2027; Boeing Strike Pushes Full Fleet to 2028&ndash;2029</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Air Force Secretary <strong>Troy Meink</strong> confirmed during testimony before the <strong>Senate Armed Services Committee</strong> on May 21 that the first <strong>F-15EX Eagle II</strong> multirole fighters will not arrive at <strong>Kadena Air Base</strong> until <strong>2027</strong> &mdash; nearly a year behind the original spring 2026 delivery schedule. The full fleet of <strong>36 F-15EXs</strong> replacing 48 aging F-15C/D Eagles is now expected to complete delivery by <strong>&ldquo;'28 or '29,&rdquo;</strong> Meink stated.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The delay stems from a <strong>Boeing strike at its St. Louis plant</strong> (August 4 &ndash; November 17, 2025) that disrupted production. Meink noted the Air Force is working with Boeing to exceed the current rate of <strong>two aircraft per month</strong>. In the interim, Kadena is relying on <strong>rotational F-22 Raptor deployments</strong> &mdash; two squadrons from the <strong>90th Expeditionary Fighter Squadron (JBER, Alaska)</strong> and <strong>27th Expeditionary Fighter Squadron (Langley, Virginia)</strong> arrived in early May. The F-15EXs will be assigned to the <strong>18th Wing, 85th Test and Evaluation Squadron</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena has been without a permanently assigned fighter squadron since the last F-15C/Ds were retired. The F-22 rotations provide superior air-to-air capability but are temporary and strain readiness at home stations. The F-15EX brings next-generation avionics, networking, and a larger weapons payload than the F-15C/D, but lacks stealth. The delay extends Kadena&rsquo;s reliance on rotational forces during a period of escalating Chinese air and naval activity near the Nansei Islands.<br/><br/>
            <strong>Watch:</strong> Boeing production rate milestones &bull; Whether delays push 36-jet delivery past 2029 &bull; F-22 rotation schedule continuity &bull; Congressional reaction to prolonged Kadena fighter gap &bull; <strong>$BA</strong> (Boeing) production and labor risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SOLDIER SEXUAL ASSAULT CASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USFJ / Community Relations / Law Enforcement &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena-Based Army Soldier Referred to Prosecutors for Sexual Assault; Latest in Pattern of Incidents Since 2023</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese police referred a <strong>U.S. Army soldier in his 20s</strong> from <strong>Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th ADA Brigade</strong> at <strong>Kadena Air Base</strong> to the Naha Public Prosecutors Office on <strong>May 24</strong> on allegations of <strong>sexual assault and injury</strong> to a woman over 18. The soldier allegedly committed the assault outdoors, injured the woman&rsquo;s arm, and while fleeing by car struck a roadside barrier without reporting the collision. The suspect remains at Kadena during the investigation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is the latest in a series of sexual assault cases involving U.S. service members on Okinawa since December 2023, including: <strong>Senior Airman Brennon Washington</strong> (convicted Dec. 2024 for kidnapping and assault of a minor); <strong>Marine Lance Cpl. Jamel Clayton</strong> (convicted June 2026 for strangling and attempted assault); <strong>Marine Pfc. Austin Wedington</strong> (trial scheduled); and <strong>Marine Lance Cpl. Michael Hofmaster</strong> (pending). The ongoing pattern has triggered stricter <strong>USFJ liberty restrictions</strong> since October 2024, including off-base drinking bans from 1&ndash;5 a.m. and joint nightlife district patrols.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community &amp; Political Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Each new incident deepens Okinawan public anger and strengthens the anti-base movement ahead of the September 13 gubernatorial election. Gov. Tamaki&rsquo;s office is tracking these cases closely. This directly coincides with the Community Partnership Forum meeting (see below), creating an awkward backdrop for U.S. military claims of progress on crime prevention.<br/><br/>
            <strong>Watch:</strong> Naha prosecutors&rsquo; charging decision &bull; Whether USFJ further tightens liberty restrictions &bull; Okinawan media and political reaction &bull; Impact on September gubernatorial election dynamics.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: COMMUNITY PARTNERSHIP FORUM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">USFJ / Base Relations / Okinawa Prefecture &mdash; May 28&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Community Partnership Forum Meets at Camp Foster; Crime Data Shows Increase in Unlawful Entry and Property Damage by U.S. Personnel</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The second <strong>Okinawa Community Partnership Forum</strong> convened Thursday at <strong>Ocean Breeze, Camp Foster</strong> for 2.5 hours, bringing together <strong>19 U.S. military and U.S. Consulate General Naha officials</strong> with <strong>18 representatives</strong> from Okinawa prefectural government, Ministry of Foreign Affairs, police, and the Okinawa Defense Bureau. The meeting was led by <strong>U.S. Army Col. Thomas Scott</strong> (J5 Strategy, Plans &amp; Policy, USFJ) and <strong>Kazuhiro Tarama</strong>, director of Gov. Tamaki&rsquo;s executive office.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key discussion points included: <strong>progress on joint nightlife area patrols</strong> since April 2025; enforcement of updated USFJ drinking ban (1&ndash;5 a.m.); and <strong>crime data showing increased unlawful entry and property damage</strong> attributed to U.S. personnel in 2025. The forum proposed <strong>adding sexual offense awareness and DUI prevention content</strong> to mandatory newcomer orientation briefings. USFJ plans to resume <strong>solo military police patrols</strong> (dates/locations unannounced). Tarama told reporters the assessment period was <strong>&ldquo;too short&rdquo;</strong> and they lacked sufficient data for a full evaluation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The forum&rsquo;s timing &mdash; days after another soldier was referred to prosecutors for sexual assault &mdash; underscores the gap between process and outcomes. USFJ declared itself &ldquo;particularly pleased&rdquo; with patrol results, while the Japanese side signaled the data is inconclusive. The increase in property damage and unlawful entry incidents suggests the liberty restrictions have not fully curbed misconduct. Solo MP patrols may help but risk being perceived as the U.S. policing itself rather than accepting host-nation oversight.<br/><br/>
            <strong>Watch:</strong> Whether Okinawa media highlights the disconnect between USFJ optimism and rising crime data &bull; Solo MP patrol effectiveness &bull; Next forum session and any measurable targets.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: NORTH KOREA MISSILE + CHINA NAVAL PRESSURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Regional Security / DPRK &amp; PRC / Indo-Pacific &mdash; May 25&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Fires Ballistic Missile Into Yellow Sea; China Conducts Fourth &ldquo;Combat Readiness Patrol&rdquo; Around Taiwan in May; 100+ PLAN Vessels Deployed Across First Island Chain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>North Korea</strong> launched a <strong>ballistic missile into the Yellow Sea on May 26</strong>, the latest in a 2026 flurry of tests that has included launches in January, March, and April (including a 3-day multi-weapon test series April 7&ndash;9). Analysts assess Pyongyang is exploiting eroding international norms to cement its nuclear status. The Yellow Sea trajectory does not directly threaten Okinawa but reinforces the multi-axis threat environment facing U.S. forces in Japan. Kadena-based <strong>P-8A Poseidon maritime patrol aircraft</strong> and the <strong>38th ADA Brigade&rsquo;s Patriot batteries</strong> remain critical to regional missile defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>China</strong> conducted its <strong>fourth joint combat readiness patrol around Taiwan in May</strong> (May 1, 6, 19, and 25), an unusually high operational tempo. Reports indicate <strong>more than 100 PLAN vessels</strong> have been deployed across the First Island Chain. A <strong>Type 075 amphibious assault ship formation</strong> transited the <strong>Miyako Strait on May 22</strong>, and the <strong>Liaoning carrier strike group</strong> &mdash; now including the new <strong>Type 054B (Jiangkai III) frigate CNS Luohe</strong> &mdash; continues operating in the Western Pacific. The PLAN is conducting training described as <strong>&ldquo;far-seas and distant-area realistic combat exercises.&rdquo;</strong>
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of DPRK missile tests and PLAN force projection creates a dual-axis pressure on Japan&rsquo;s southwestern defense posture. With the 31st MEU still in the Persian Gulf and Kadena lacking permanently assigned fighters, Okinawa&rsquo;s deterrence posture is at its most strained point in years. The 100+ PLAN vessel deployment across the First Island Chain &mdash; combined with four Taiwan patrols in a single month &mdash; represents a sustained show of force rather than an exercise-specific surge, suggesting a new baseline of Chinese naval activity near Okinawa.<br/><br/>
            <strong>Watch:</strong> Whether PLAN vessels conduct a fifth Taiwan patrol before month-end &bull; Liaoning CSG return timeline &bull; DPRK follow-on launches &bull; JMSDF shadowing and tracking operations in the Miyako Strait &bull; Any escalation of PLAN activity during Typhoon Jangmi (adversaries have historically probed during natural disaster response periods).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: 31ST MEU + DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Persian Gulf; Indo-Pacific Deterrence Gap Persists; Marine Commandant Testified Gap Is &ldquo;Unfilled&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; remains in the <strong>Persian Gulf enforcing a blockade of Iranian ports</strong> since departing Okinawa in March. Approximately <strong>2,500 Marines and three warships</strong>, including amphibious assault ship <strong>USS Tripoli</strong> (homeported at Sasebo), continue operations in the Strait of Hormuz. Marine Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee on May 18 that the Corps has left this gap <strong>&ldquo;unfilled&rdquo;</strong> in the Indo-Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense experts continue to warn the redeployment <strong>&ldquo;dangerously weakens deterrence against Beijing&rdquo;</strong> at a time when the PLA edges toward its reported 2027 Taiwan readiness timeline. III MEF on Okinawa retains ground and air assets but lacks the amphibious ready group&rsquo;s rapid-response capability. In February, a group of defense analysts argued that the <strong>planned Marine pullback from Okinawa should be halted</strong> given the rising China threat. The nomination of <strong>Lt. Gen. Roger Turner</strong> (current III MEF commander) to lead MARFORPAC signals a leadership transition at Okinawa&rsquo;s top Marine command, with <strong>Lt. Gen. Watson</strong> nominated to replace him.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence is now entering its third month with no announced return timeline. The gap in amphibious rapid-response capability cannot be fully compensated by ground-based III MEF assets or the 12th Marine Littoral Regiment, which is designed for distributed maritime operations rather than traditional MEU missions (NEO, HA/DR, crisis response). The upcoming Resolute Dragon 26 exercise (June 20&ndash;30) will test allied coordination but highlights the gap between exercise capability and standing force posture.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Any temporary MEU rotation to fill the Pacific gap &bull; Congressional pressure on DoD to restore Pacific posture &bull; III MEF leadership transition timeline &bull; Iran situation evolution that could extend or expand the MEU&rsquo;s Middle East deployment.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: FINANCIAL & ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ECON</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy / Tourism &mdash; May 27&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Targets Record &yen;1 Trillion Tourism Revenue; Lodging Tax Planned for FY2026; OHA Increase for Service Members</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture announced on <strong>May 27</strong> during a tourism industry meeting that it is targeting <strong>&yen;1.006 trillion in annual tourism revenue</strong> for the first time, alongside a goal of <strong>10.4 million visitors</strong> (surpassing the pre-COVID record of 10.18 million in FY2018). The prefecture plans to introduce a <strong>lodging tax during FY2026</strong> as a dedicated &ldquo;purpose tax&rdquo; for tourism development. Japan&rsquo;s Finance Ministry previously upgraded Okinawa&rsquo;s economic outlook to <strong>&ldquo;recovering,&rdquo;</strong> driven by new attractions including the <strong>Junglia Okinawa</strong> theme park and increased flight routes.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          For U.S. service members: <strong>Overseas Housing Allowance (OHA) increases of $400&ndash;$500/month</strong> took effect <strong>May 16</strong> for active-duty troops across all branches on Okinawa, announced by <strong>Brig. Gen. John Gallemore</strong>. The increase reflects rising off-base rental costs. Separately, Okinawa&rsquo;s position as a <strong>budget-friendly alternative to Hawaii</strong> is driving record international tourist interest, with media outlets naming it a <strong>top 2026 travel destination</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Okinawa&rsquo;s tourism-driven economic recovery creates a growing tension with the military presence that dominates 15% of the island&rsquo;s land. The lodging tax will fund tourism infrastructure but may face coordination challenges with municipalities pursuing their own taxes. The OHA increase benefits local landlords and the off-base economy but reflects broader inflationary pressure in the housing market. Typhoon Jangmi could temporarily disrupt tourism arrivals in the coming week.<br/><br/>
            <strong>Watch:</strong> FY2026 tourism revenue tracking toward &yen;1T target &bull; Lodging tax implementation timeline and rate &bull; Weak yen impact on inbound tourism &bull; Typhoon economic disruption costs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 8: GOVERNMENT / PFAS / ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Environment &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Receives Death Threat; September 13 Election Looms; PFAS at 56x Legal Limit; Futenma Stalled Past 30 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki received a death threat on May 23</strong> ahead of a supporters&rsquo; meeting on May 25. The threat referenced his alleged &ldquo;ties to the Japanese Communist Party&rdquo; and his September re-election campaign. Police strengthened security; the meeting concluded without incident. Tamaki told reporters: <em>&ldquo;Thorough measures were taken to ensure that no harm would come to prefectural residents.&rdquo;</em> His re-election bid faces headwinds ahead of the <strong>September 13 gubernatorial election</strong>. Challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor and de facto LDP candidate, <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; anti-base coalition is strained after the Centrist Reform Alliance remains undecided on the relocation issue.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PFAS contamination</strong> remains a critical flashpoint: Okinawa surveys found concentrations up to <strong>56 times Japan&rsquo;s legal limit (2,800 ppt vs. 50 ppt standard)</strong> in groundwater near Kadena Air Base and MCAS Futenma, with <strong>31 of 44 sampling sites</strong> exceeding limits. The U.S. military has <strong>denied all four base access requests</strong> for water sampling since 2016, and Japan&rsquo;s Ministry of Defense <strong>rejected Okinawa&rsquo;s funding request</strong> for PFAS filter replacement at the Chatan Water Purification Plant. The <strong>Futenma relocation passed its 30th anniversary</strong> in April with no resolution; construction at Henoko continues but completion is not expected until <strong>at least 2033</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election is a referendum on the U.S. military presence. The convergence of sexual assault cases, PFAS contamination, and stalled Futenma relocation gives Tamaki potent campaign issues, but his coalition weakness and voter fatigue create an opening for Koja. The PFAS crisis has no resolution path while the U.S. denies base access, and could escalate to litigation or diplomatic friction. The new soldier sexual assault case adds fuel to an already volatile political environment.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s formal position on Futenma &bull; September 13 polling data &bull; PFAS litigation or diplomatic escalation &bull; Whether the sexual assault pattern becomes a central campaign issue &bull; Impact of Tamaki&rsquo;s &ldquo;too short&rdquo; assessment of U.S. crime prevention efforts.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Immediate priority: Typhoon Jangmi bearing down on Okinawa.</strong> A Category 1-equivalent typhoon is forecast to pass approximately 40 miles west of Kadena Air Base around 1 a.m. Monday with 90 mph sustained winds. Expect TCCOR escalation through the weekend and suspension of flight operations. All outdoor preparations should be completed by Saturday evening.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The deterrence gap is widening, not closing.</strong> The 31st MEU remains in the Persian Gulf with no return timeline. Kadena&rsquo;s permanent fighter squadron won&rsquo;t arrive until 2027 due to Boeing delays. Meanwhile, China has deployed 100+ vessels across the First Island Chain, conducted four Taiwan patrols in May alone, and transited new warship classes through the Miyako Strait. North Korea fired another ballistic missile on May 26. The gap between threat tempo and U.S. force posture on Okinawa continues to widen.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground: community relations remain fragile.</strong> A new sexual assault case emerged days before the U.S.-Okinawa Community Partnership Forum, where crime data showed increasing unlawful entry and property damage by U.S. personnel. These issues feed directly into the September 13 gubernatorial election. The PFAS contamination crisis &mdash; 56x legal limits with no U.S. cooperation on base access &mdash; adds a persistent environmental dimension to already strained relations.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; The Diplomat &bull; Military Times &bull; Newsweek &bull; Air &amp; Space Forces Magazine &bull; Defense Blog &bull; South China Morning Post &bull; News On Japan &bull; Japan Ministry of Defense &bull; USFJ &bull; Naha Prosecutors Office &bull; Okinawa Prefectural Government &bull; Ryukyu Shimpo &bull; Al Jazeera &bull; Foreign Policy
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
