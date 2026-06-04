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

    <!-- ===================== EVENT 1: TYPHOON JANGMI AFTERMATH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Weather / Base Operations / Force Protection &mdash; Jun 1&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Clears Okinawa; Bases Resume Operations After First Major Storm in Three Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (Typhoon No. 6)</strong> &mdash; the first major storm to strike Okinawa in nearly three years &mdash; passed directly over the island Monday evening (June 1) with <strong>wind gusts up to 80 mph</strong> recorded at MCAS Futenma. U.S. bases on Okinawa moved to <strong>&ldquo;all clear&rdquo; status at 10:38 a.m. Tuesday (June 2)</strong>, according to Kadena Air Base&rsquo;s official announcement. Military installations reported <strong>limited damage</strong> thanks to advance TCCOR protocols and preparation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, the broader civilian impact was significant: over <strong>9,000 homes remained without power</strong> across Okinawa as of noon Tuesday. Jangmi subsequently weakened to a tropical storm and tracked northeast, battering <strong>Kyushu, Shikoku, and western Honshu</strong> with record-breaking rainfall, widespread flooding, and landslides. Tokyo issued its <strong>first-ever Level 4 danger alert</strong> under Japan&rsquo;s new weather warning system. At least <strong>16 people were injured</strong> across western Japan. The storm reached the Kanto region by June 3, with damage reported at <strong>Himeji Castle</strong> (UNESCO World Heritage site). Yokosuka Naval Base near Tokyo weathered the storm June 4 with no significant damage reported.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Base operations on Okinawa have fully resumed. Flight schedules at Kadena AB and MCAS Futenma are returning to normal. The storm&rsquo;s rapid transit minimized military infrastructure damage, but civilian recovery continues across the island. The U.S. Consulate General in Naha issued a weather alert on May 31 advising personnel to shelter in place.<br/><br/>
            <strong>Watch:</strong> Continued civilian power restoration on Okinawa &bull; Any residual damage assessments at military installations &bull; Whether storm damage affects pre-positioning for Resolute Dragon 26 exercises later this month &bull; Typhoon season outlook for remaining summer months.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON & VALIANT SHIELD ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USMC-JGSDF / Major Exercises / Force Projection &mdash; Jun 20&ndash;Jul 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two Major Exercises Announced: Resolute Dragon 26 Across Nansei Islands; Typhon Missile System to Be Permanently Stored in Japan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan announced two major Western Pacific exercises with the United States in late June. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will see the USMC and JGSDF conduct field training across <strong>Okinawa, Miyako Island, Ishigaki Island, Yonaguni Island</strong>, and JASDF Naha Air Base, along with multiple sites on Kyushu (Oita, Saga, Kumamoto, Kagoshima) and Tokuno and Amami Oshima Islands. The exercise spans the full length of the Nansei island chain &mdash; the most geographically dispersed iteration of Resolute Dragon to date.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Valiant Shield 2026</strong> (June 22&ndash;July 1) will feature the <strong>deployment of the Army&rsquo;s containerized Typhon mid-range missile system</strong> to Japan. In a major shift from last year&rsquo;s deployment &mdash; when the system was flown out of Japan after the exercise &mdash; the Typhon will be <strong>stored on a U.S. military base in Japan</strong> following completion. This effectively establishes a <strong>permanent ground-based intermediate-range strike capability</strong> in Japan for the first time, capable of launching <strong>SM-6 and Tomahawk missiles</strong>. The JSDF will participate in Valiant Shield for the first time.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The permanent basing of the Typhon missile system in Japan is the most consequential U.S. force posture change in the region this year. It gives the U.S. a ground-based anti-ship and land-attack capability covering the Taiwan Strait, East China Sea, and approaches to the Miyako Strait from Japanese territory. China and Russia have both condemned the move. Resolute Dragon 26&rsquo;s expansion to Yonaguni Island (110 km from Taiwan) signals the exercise is rehearsing real-world Taiwan contingency scenarios across the Nansei chain.<br/><br/>
            <strong>Watch:</strong> Which U.S. base hosts the Typhon system permanently &bull; Chinese diplomatic and military response &bull; Whether Resolute Dragon 26 integrates the 12th MLR&rsquo;s Miyakojima coordination center &bull; GSDF V-22 Osprey landing at MCAS Futenma (first ever) during the exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: LIAONING CSG + TYPE 054B ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; May 25&ndash;ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Liaoning Carrier Strike Group Operating in Western Pacific with New Type 054B Frigate; JMSDF Tracking Fighter Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Joint Staff Office confirmed on May 25&ndash;26 the <strong>first operational deployment of a PLAN Type 054B (Jiangkai III-class) frigate</strong> with a Chinese carrier strike group. The <strong>Liaoning CSG</strong> &mdash; consisting of carrier <strong>CNS Liaoning (16)</strong>, Type 055 destroyer <strong>CNS Wuxi (104)</strong>, Type 052D destroyer <strong>CNS Kaifeng (124)</strong>, the new Type 054B frigate <strong>CNS Luohe (545)</strong>, and Type 901 supply ship <strong>CNS Hulunhu (901)</strong> &mdash; transited the <strong>Miyako Strait</strong> into the Western Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          JMSDF units observed <strong>repeated fighter aircraft and helicopter flight operations</strong> from the Liaoning southwest of Okinotorishima. The Type 054B&rsquo;s enhanced anti-submarine warfare suite &mdash; featuring an integrated low-frequency sonar &mdash; is purpose-built to counter U.S. and Japanese submarine advantages in the Western Pacific. A <strong>Type 075 amphibious assault ship formation</strong> also transited the Miyako Strait on May 22, indicating an unusually high tempo of PLAN activity through Okinawa&rsquo;s most strategically significant chokepoint. China is <strong>shifting pressure beyond the Taiwan Strait</strong> to the broader Western Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of the Liaoning CSG and a separate amphibious formation transiting the Miyako Strait within days of each other represents the highest tempo of PLAN capital ship activity near Okinawa observed this year. The Type 054B&rsquo;s integration demonstrates accelerated blue-water capability. Beijing appears to be normalizing advanced platform operations beyond the first island chain while the 31st MEU remains deployed to the Middle East. The PLAN is likely preparing to demonstrate these capabilities during or in response to Resolute Dragon 26 and Valiant Shield 2026.<br/><br/>
            <strong>Watch:</strong> Duration and scope of the Liaoning CSG deployment &bull; Whether additional PLAN formations transit the Miyako Strait during allied exercises &bull; Any increase in PLAN submarine activity &bull; Chinese response to permanent Typhon missile basing.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: F-15EX DELAY + KADENA STATUS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USAF / Kadena Air Base / Fighter Gap &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-15EX Delivery to Kadena Delayed to 2027; F-22 Raptors Rotating Through to Fill Fighter Gap</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Air Force Secretary <strong>Troy Meink</strong> testified before the Senate Armed Services Committee on May 21 that the first <strong>F-15EX Eagle II</strong> fighters will not arrive at Kadena Air Base until <strong>2027</strong> &mdash; nearly a year behind the original spring 2026 delivery schedule. The delay stems from the <strong>August&ndash;November 2025 Boeing strike</strong> at the St. Louis production facility. All <strong>36 F-15EX aircraft</strong> are expected to be delivered by 2028&ndash;2029, replacing the legacy F-15C/D Eagles that departed Kadena in <strong>January 2025</strong> after 45 years of operations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          To fill the gap, <strong>F-22 Raptors</strong> from the <strong>90th Fighter Squadron (JBER, Alaska)</strong> and the <strong>27th Fighter Squadron (JB Langley-Eustis, Virginia)</strong> have deployed to Kadena on rotation. The <strong>18th Aircraft Maintenance Squadron</strong> was activated at Kadena on May 15, 2026, to support the transition. Additionally, <strong>Red Flag-Alaska 26-2</strong> is currently running (May 28&ndash;June 12) as a PACAF-sponsored exercise with participation from Kadena-assigned units.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Air Power Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena Air Base &mdash; the largest U.S. air base in the Pacific &mdash; has been without a permanently assigned fighter squadron for 17 months. While F-22 rotations maintain a tactical presence, the lack of a permanent fighter wing degrades readiness, pilot familiarity with the local operating environment, and deterrence signaling. The F-15EX will bring advanced capabilities (AESA radar, 12 missile hardpoints, electronic warfare suite) but the 2027 timeline means Kadena remains in a transitional state for at least another year.<br/><br/>
            <strong>Watch:</strong> Boeing F-15EX production timeline adherence &bull; Whether additional fighter rotations are announced &bull; Red Flag-Alaska 26-2 participation from 18th Wing units &bull; <strong>BA</strong> (Boeing) and <strong>RTX</strong> (Raytheon) &mdash; key contractors for the F-15EX platform and its weapons systems.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: 31ST MEU + DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">USMC / Indo-Pacific Deterrence / Iran War &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Middle East for Iran Operations; Indo-Pacific Deterrence Gap Persists Into Third Month</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only MEU permanently stationed in the Indo-Pacific &mdash; remains deployed to the Middle East, now entering its <strong>third month away from Okinawa</strong>. Approximately <strong>2,200&ndash;2,500 Marines</strong> aboard the <strong>USS Tripoli</strong> amphibious assault ship departed Okinawa in mid-March to support U.S. operations in the <strong>2026 Iran War</strong>, which began February 28 when the U.S. and Israel launched strikes on Iranian military and government targets.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 31st MEU has been operating in the <strong>Strait of Hormuz</strong>, supporting efforts to reopen the strategic waterway. Marine Commandant <strong>Gen. Eric Smith</strong> acknowledged before Congress in May that the redeployment has left a gap <strong>&ldquo;unfilled&rdquo;</strong> in the Indo-Pacific. Defense experts from the Atlantic Council, Military Times, and Asia Times have argued the absence <strong>&ldquo;dangerously weakens deterrence against Beijing&rdquo;</strong> and that the Marine pullback from Okinawa should be halted as the China threat rises.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            III MEF on Okinawa retains ground and air assets, but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, humanitarian assistance, and noncombatant evacuation operations. The Liaoning CSG&rsquo;s current Western Pacific deployment coincides with this gap. The Resolute Dragon 26 and Valiant Shield exercises will partially compensate by demonstrating allied capability, but the underlying force structure deficit remains until the 31st MEU returns or a replacement rotation is assigned.<br/><br/>
            <strong>Watch:</strong> Any 31st MEU return timeline from CENTCOM &bull; Whether a temporary MEU rotation fills the Pacific gap &bull; Congressional pressure to restore Indo-Pacific posture &bull; III MEF leadership transition (Lt. Gen. Turner to MARFORPAC, Lt. Gen. Watson to III MEF).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor Race Intensifies; Naha Airport International Routes Reopening Mid-June; PFAS Crisis Unresolved</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki&rsquo;s</strong> support is <strong>wavering</strong> ahead of Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. The 66-year-old anti-base relocation incumbent faces challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto LDP candidate who <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is strained after the Centrist Reform Alliance (CRA) &mdash; formed by Komeito and the CDP &mdash; remains undecided on the relocation issue. Japan&rsquo;s defense minister visited Okinawa in January and pledged to <strong>reduce the U.S. military footprint</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Naha Airport&rsquo;s international routes</strong> &mdash; suspended since March 2020 &mdash; are set to <strong>reopen in mid-June</strong>, a significant milestone for Okinawa&rsquo;s tourism-dependent economy. On the base front, the <strong>MCAS Futenma relocation</strong> passed its 30th anniversary with no resolution; the U.S. has stated it will not return Futenma unless Japan agrees to a longer runway at Henoko. <strong>PFAS contamination up to 56 times Japan&rsquo;s legal limit</strong> in groundwater near Kadena and Futenma remains unresolved, with the U.S. military having <strong>denied all four Okinawan requests</strong> for base access to conduct water sampling since 2016.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Economic Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September gubernatorial election will be a referendum on the U.S. military presence. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports the Henoko relocation plan, potentially accelerating construction but increasing community friction. Naha Airport&rsquo;s international reopening signals economic recovery and could boost Okinawa&rsquo;s tourism sector ahead of the election. The PFAS issue remains a growing flashpoint in U.S.-Okinawa community relations.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s formal position on Futenma relocation &bull; September 13 election polling &bull; Naha Airport international route announcements &bull; PFAS litigation or diplomatic escalation &bull; Impact of Okinawa&ndash;Guam Marine realignment plan (5,000 Marines + 1,300 dependents).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa enters a critical two-week window.</strong> Typhoon Jangmi&rsquo;s passage has cleared and bases are fully operational, but the island now faces back-to-back major exercises (Resolute Dragon 26 and Valiant Shield 2026) beginning June 20 that will reshape the regional security architecture. The permanent basing of the Typhon missile system in Japan is the most significant U.S. force posture change in the Indo-Pacific this year &mdash; and will draw sharp responses from Beijing.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China is testing the limits.</strong> The Liaoning CSG&rsquo;s Western Pacific deployment with the new Type 054B frigate, combined with a separate amphibious formation transit through the Miyako Strait, represents the highest tempo of PLAN capital ship activity near Okinawa this year. This activity coincides with the 31st MEU&rsquo;s continued absence in the Middle East &mdash; now in its third month &mdash; and a 17-month fighter gap at Kadena while awaiting F-15EX deliveries delayed to 2027.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> The September 13 gubernatorial election will shape U.S. base relations for years. Naha Airport&rsquo;s international route reopening in mid-June is a positive economic signal. III MEF leadership is in transition. The PFAS crisis continues to strain community relations with no resolution in sight. Typhoon season is now active with Jangmi as the first reminder.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; The Diplomat &bull; Military Times &bull; Military.com &bull; Atlantic Council &bull; Asia Times &bull; Naval News &bull; Newsweek &bull; Army Recognition &bull; Zona Militar &bull; Air &amp; Space Forces Magazine &bull; The War Zone &bull; National Interest &bull; Janes Defence &bull; Japan Ministry of Defense &bull; Kadena Air Base Public Affairs &bull; U.S. Embassy Tokyo &bull; CENTCOM &bull; Ryukyu Shimpo
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
