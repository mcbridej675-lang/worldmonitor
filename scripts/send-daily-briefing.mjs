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

    <!-- ===================== EVENT 1: TYPHOON JANGMI ALL CLEAR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Weather / Base Operations / Okinawa &mdash; June 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi (No. 6) Passes Over Okinawa; Bases Return to All Clear After First Major Storm in Three Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi</strong> &mdash; the first major typhoon to strike Okinawa in nearly three years &mdash; passed directly over the island Monday evening with wind gusts reaching <strong>80 mph at MCAS Futenma</strong>. U.S. military installations entered <strong>TCCOR 1-Emergency</strong> at 10:30 a.m. June 1 and returned to <strong>&ldquo;all clear&rdquo; status at 10:38 a.m. Tuesday, June 2</strong>. The Joint Typhoon Warning Center had forecast the storm to pass <strong>7 miles west of Kadena Air Base</strong> around 7 p.m. Monday.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Air Base</strong> reported no injuries or significant damage. <strong>Torii Station</strong> sustained minor impacts including fallen trees and scattered debris. <strong>White Beach Naval Facility</strong> escaped major damage. The most significant disruption affected <strong>Camp Courtney family housing</strong>, where an undisclosed number of units on the south end lost electricity Monday afternoon amid mid-80s temperatures and high humidity. As of noon Tuesday, <strong>over 9,000 homes island-wide remained without power</strong>. All appointments at <strong>U.S. Naval Hospital Okinawa</strong> and the <strong>18th Medical Group</strong> were cancelled during the storm. <strong>Base schools resume normal operations Wednesday, June 3</strong>. Naha International Airport, the Okinawa Urban Monorail, and all local bus routes suspended operations Monday and gradually resumed Tuesday.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            As the typhoon tracked north-northeast, it weakened to a tropical storm but continued to bring hazardous conditions to mainland Kagoshima, Kyushu, and Shikoku through June 3. Rail disruptions may extend as far as the Tokyo metropolitan area. Off-base, a large banyan tree near Music Town on Gate 2 Street toppled and was removed by crews Tuesday. Marine Corps Installations Pacific confirmed: &ldquo;Our quick transition to all clear shows that our preparation for Typhoon Jangmi was effective.&rdquo;<br/><br/>
            <strong>Watch:</strong> Power restoration timeline for 9,000+ affected Okinawa households &bull; Any delayed damage reports from remote base facilities &bull; Continued storm impacts as Jangmi tracks toward mainland Japan through June 3 &bull; Whether typhoon disrupted any ongoing naval tracking operations in the East China Sea.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: SHANGRI-LA DIALOGUE — JAPAN VS CHINA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Defense Diplomacy / Indo-Pacific &mdash; May 31&ndash;June 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan&ndash;China Tensions Escalate at Shangri-La Dialogue; Koizumi Rejects &ldquo;New Militarism&rdquo; Label as Beijing Fires Back</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the <strong>23rd IISS Shangri-La Dialogue</strong> in Singapore (May 29&ndash;31), Japanese Defense Minister <strong>Shinjir&#333; Koizumi</strong> delivered a pointed rebuttal of China&rsquo;s accusation that Tokyo&rsquo;s historic defense buildup amounts to &ldquo;new militarism.&rdquo; Koizumi told the audience of defense officials from 40+ nations that <strong>&ldquo;it is strange for a country with large numbers of nuclear weapons and strategic bombers to apply the label&rdquo;</strong> to Japan, which possesses neither. He promoted Japan&rsquo;s revamped <strong>&ldquo;free and open Indo-Pacific&rdquo;</strong> vision and signaled Japan will assume a <strong>&ldquo;new role&rdquo; in regional defense equipment cooperation</strong>, following the Takaichi cabinet&rsquo;s decision last month to scrap Japan&rsquo;s ban on lethal weapons exports.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beijing responded sharply. On <strong>June 1</strong>, MFA spokesperson <strong>Lin Jian</strong> accused Japan of &ldquo;stirring up bloc confrontation&rdquo; under the guise of freedom and openness. On <strong>June 2</strong>, spokesperson <strong>Mao Ning</strong> escalated further, stating Japan is <strong>&ldquo;lifting the ban on lethal weapon export, rebuilding the war machine, and rapidly shifting to offense-oriented security and defense policies.&rdquo;</strong> China notably lacked high-level representation at the Dialogue for the second consecutive year. Total military spending across Asia is now approaching <strong>US$630 billion</strong>, with Japan having doubled its defense budget target to 2% of GDP.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance for Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The diplomatic exchange directly affects Okinawa as the front line of Japan&rsquo;s defense posture shift. The lifting of lethal weapons export bans, combined with Japan&rsquo;s ongoing deployment of Type-12 surface-to-ship missiles and Type-03 air defense systems on Ishigaki and Yonaguni, makes the Nansei chain the physical manifestation of the policies Beijing is condemning. The China&ndash;Japan diplomatic crisis &mdash; which began in November 2025 when PM Takaichi warned that a Chinese attack on Taiwan could trigger Japan&rsquo;s collective self-defense &mdash; shows no signs of de-escalation. Koizumi&rsquo;s statement that &ldquo;dialogue with China remains necessary&rdquo; is the only restraining signal.<br/><br/>
            <strong>Watch:</strong> Whether China retaliates economically or increases military activity near Okinawa in response &bull; Japan&rsquo;s next defense equipment cooperation agreements &bull; Any Chinese escalation around Taiwan or in the Miyako Strait &bull; Whether the diplomatic crisis affects the upcoming Resolute Dragon 26 exercise scope.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: LIAONING CSG + TYPE 054B IN WESTERN PACIFIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Liaoning Carrier Strike Group Operating in Western Pacific with New Type 054B Frigate; USS George Washington Deploys from Yokosuka</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>PLAN Liaoning carrier strike group</strong> continues live-fire drills and combat readiness training in the Western Pacific after transiting the <strong>Miyako Strait</strong> between Okinawa and Miyako Island. The JMSDF tracked the five-vessel formation approximately <strong>880 km southwest of Okinotorishima</strong> on May 26. The strike group composition: carrier <strong>CNS Liaoning (16)</strong>, Type 055 destroyer <strong>CNS Wuxi (104)</strong>, Type 052D destroyer <strong>CNS Kaifeng (124)</strong>, new Type 054B frigate <strong>CNS Luohe (545)</strong>, and fast combat support ship <strong>CNS Hulunhu (901)</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Type 054B (Jiangkai III-class) Luohe</strong> marks the <strong>first confirmed deployment of this new frigate class with a PLAN carrier group</strong>. The 054B features enhanced anti-submarine warfare capabilities with an integrated low-frequency sonar &mdash; purpose-built to counter U.S. and Japanese submarine advantages. A <strong>fourth hull</strong> is under construction at Hudong Changxingdao shipyard. Additionally, a <strong>Type 075 amphibious assault ship formation</strong> transited the Miyako Strait on May 22, indicating increased PLAN amphibious capability projection near Okinawa. In response, <strong>USS George Washington (CVN-73)</strong> departed Yokosuka on May 24 for a spring patrol in the Philippine Sea.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of the Liaoning CSG, a separate Type 075 amphibious formation, and enhanced ASW-capable frigates in the Western Pacific represents a significant escalation in PLAN blue-water operations near Okinawa. The Miyako Strait remains the most strategically significant chokepoint for PLAN Pacific access. These deployments coincide with the 31st MEU&rsquo;s continued absence from the region and are likely designed to normalize advanced platform operations beyond the first island chain while U.S. rapid-response capability is diminished. The USS George Washington&rsquo;s deployment partially compensates at the carrier level but does not replace the amphibious capability gap.<br/><br/>
            <strong>Watch:</strong> Duration and scope of the Liaoning CSG live-fire exercises &bull; Whether the strike group approaches the Luzon Strait or Philippine Sea &bull; JMSDF tracking and shadowing operations &bull; Any coordination between the Liaoning CSG and Type 075 formation &bull; USS George Washington patrol area and duration.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: 31ST MEU GAP + RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Middle East with No Return Timeline; Resolute Dragon 26 and Valiant Shield Set for June 20&ndash;30</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only MEU permanently stationed in the Indo-Pacific &mdash; remains deployed to the Middle East with <strong>no announced return date</strong>. Approximately <strong>2,500 Marines and three warships</strong>, including amphibious assault ship <strong>USS Tripoli</strong> homeported at Sasebo, departed Okinawa in March to support operations against Iran. The 31st MEU has been <strong>enforcing a blockade of Iranian ports since April 13</strong>. Marine Commandant <strong>Gen. Eric Smith</strong> acknowledged in May testimony before the House Armed Services Committee that the Corps has left the Indo-Pacific gap <strong>&ldquo;unfilled.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, preparations continue for two major exercises on Okinawa and the Nansei Islands. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will involve USMC and JGSDF forces across bases in Kyushu and Okinawa, including <strong>Miyako Island, Ishigaki Island, and Yonaguni Island</strong>. A <strong>GSDF V-22 Osprey will land at MCAS Futenma for the first time</strong>, airlifting a mock patient from Miyako Island &mdash; a milestone in U.S.-Japan logistics interoperability. The <strong>Japan segment of Valiant Shield 2026</strong> will run concurrently. The JGSDF&rsquo;s Ground Component Command completed its <strong>first-ever Nansei Islands deployment drill</strong> (May 17&ndash;22), with <strong>20 Marines from the 12th Marine Littoral Regiment</strong> establishing a <strong>first-ever U.S.-Japan coordination center on Miyakojima</strong> &mdash; only 220 miles from Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence is now in its third month with no end in sight. III MEF on Okinawa retains ground and air assets but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, humanitarian assistance, and noncombatant evacuation operations. The upcoming Resolute Dragon 26 and Valiant Shield exercises will demonstrate allied commitment to island defense, but these are preparation activities, not a substitute for standing capability. The GSDF Osprey operating from MCAS Futenma and the 12th MLR coordination center on Miyakojima signal deepening interoperability that partially compensates for the MEU gap.<br/><br/>
            <strong>Watch:</strong> Any announcement of a 31st MEU return timeline or temporary MEU rotation &bull; Resolute Dragon 26 exercise scope and any Chinese response &bull; Whether the 12th MLR coordination center on Miyakojima becomes permanent &bull; III MEF leadership transition &mdash; Lt. Gen. Watson nominated to replace Turner, while Turner is nominated for MARFORPAC.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT, POLITICS & PFAS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Environment &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">September 13 Gubernatorial Election Takes Shape; PFAS Levels at 56&times; Legal Limit Near Bases; Futenma Relocation Hits Runway Impasse</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>September 13 gubernatorial election</strong> is shaping up as a referendum on the U.S. military presence. <strong>Gov. Denny Tamaki</strong>, 66, announced his third-term bid backed by the anti-base-relocation &ldquo;All Okinawa&rdquo; coalition, but faces <strong>wavering support</strong> after the Centrist Reform Alliance (CRA) &mdash; formed by Komeito and the CDP &mdash; remained undecided on the Futenma issue. Challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor, is running as the de facto LDP candidate and <strong>supports the Henoko relocation</strong>. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports the relocation plan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> has hit a new impasse: the U.S. has stated it <strong>will not return the Futenma site unless Japan agrees to a longer runway at Henoko</strong> &mdash; the current V-shaped plan provides only 1,800m runways versus Futenma&rsquo;s 2,700m. Construction continues but is not expected to complete until <strong>at least 2033</strong>. Meanwhile, <strong>PFAS contamination</strong> continues to escalate. Okinawa prefecture surveys found PFAS levels up to <strong>2,800 parts per trillion &mdash; 56 times Japan&rsquo;s legal limit</strong> &mdash; at Yara Hijaga in Kadena town, downstream of Kadena Air Base. Elevated levels were found at <strong>28 of 40 sites</strong> near MCAS Futenma and at sites downstream of Camp Kinser and Camp Hansen. The U.S. military has <strong>denied all of Okinawa&rsquo;s requests for base access</strong> to conduct water sampling, calling the evidence of base-sourced contamination &ldquo;insufficient.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election will determine the trajectory of U.S. base relations for years. The PFAS issue is becoming a major campaign flashpoint and a source of growing friction in U.S.-Okinawa relations. The Futenma runway impasse adds a new dimension to the 30-year relocation saga &mdash; even if political will aligns, the U.S. may refuse the handover without runway modifications that could add years and billions to the project. Japan&rsquo;s economy is mixed: the Finance Ministry upgraded Okinawa&rsquo;s personal consumption outlook, and tourism is surging (expected to exceed 10 million visitors in FY2025, a new record), but a new 2% prefectural accommodation tax took effect in April 2026.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s formal position on Futenma relocation &bull; September 13 election polling &bull; PFAS litigation or diplomatic escalation &bull; Okinawa tourism numbers amid typhoon disruptions and the new accommodation tax &bull; Shuri Castle reconstruction milestones.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: DRONE WARFARE + FORCE MODERNIZATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Modernization / Okinawa &mdash; Recent</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">III MEF Drone Warfare Pipeline Active at Camp Schwab; 3rd MEB Stands Up New HQ for Joint Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Eighteen Marines</strong> from III MEF recently completed the <strong>Basic Drone Operator Course</strong> at <strong>Camp Schwab</strong> in northern Okinawa. Students built <strong>7-inch first-person-view (FPV) drones from kits</strong> and progressed through simulators to <strong>&ldquo;full acro mode&rdquo;</strong> &mdash; performing flips, rolls, and dives without flight stabilizers. Graduates advance to the <strong>Attack Drone Operator Course</strong>, where they learn to deliver <strong>explosive payloads using Neros Archer drones</strong>. The training reflects lessons from the Ukraine-Russia conflict and positions forward-deployed Marines to integrate drone warfare tactics into Pacific island defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, the <strong>3rd Marine Expeditionary Brigade</strong> stood up a new Headquarters Company at Camp Courtney in January 2026, aligning it with a <strong>Japanese amphibious brigade</strong> to streamline joint humanitarian and warfighting missions. III MEF commander <strong>Lt. Gen. Roger Turner</strong> has emphasized the force is <strong>&ldquo;embedding new capabilities and procedures into daily operations&rdquo;</strong> including drones, sea-denial missiles, and deeper SDF integration. The <strong>12th Marine Littoral Regiment</strong> continues to develop its distributed maritime operations concept, with organic anti-ship capability critical for Nansei chain island defense.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Modernization Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The drone operator pipeline on Okinawa provides Marines with organic anti-ship and anti-landing craft capability without relying on larger, more detectable weapons systems. For island defense in the Nansei chain, attack drones are a force multiplier. The 3rd MEB&rsquo;s realignment with JGSDF amphibious forces creates a joint command structure that can operate even with the 31st MEU absent. These modernization efforts are being proven in exercises and will be tested at scale during Resolute Dragon 26.<br/><br/>
            <strong>Watch:</strong> Integration of attack drones into Resolute Dragon 26 &bull; <strong>AVAV</strong> (AeroVironment) and <strong>KTOS</strong> (Kratos Defense) &mdash; drone defense contractors positioned to benefit from USMC procurement &bull; Whether drone courses expand to other III MEF units &bull; 12th MLR operational readiness milestone.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Typhoon Jangmi tested base readiness; the real storms are strategic.</strong> While Okinawa&rsquo;s military installations weathered the first major typhoon in three years with limited damage, the broader picture is more concerning. The Liaoning carrier strike group &mdash; now fielding China&rsquo;s new Type 054B ASW frigate &mdash; is conducting live-fire exercises in the Western Pacific while the 31st MEU remains 5,000 miles away in the Persian Gulf with no return date. The diplomatic temperature is rising: Japan and China traded sharp accusations at the Shangri-La Dialogue, and Beijing&rsquo;s &ldquo;new militarism&rdquo; rhetoric shows no signs of softening.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The next three weeks are critical.</strong> Resolute Dragon 26 (June 20&ndash;30) will be the largest allied exercise on the Nansei chain this year, featuring the first GSDF Osprey operations from a U.S. base on Okinawa and a new U.S.-Japan coordination center on Miyakojima. These exercises will test the island defense concepts that are meant to compensate for the 31st MEU&rsquo;s absence. China&rsquo;s response &mdash; whether diplomatic, naval, or aerial &mdash; will signal how far Beijing is willing to escalate.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> The September 13 gubernatorial election will determine whether Okinawa&rsquo;s governor supports or opposes U.S. base relocation for the first time in a decade. PFAS contamination at 56&times; legal limits with no base access granted is a slow-burning crisis. The III MEF leadership transition continues, with Turner headed to MARFORPAC and Watson incoming. Power restoration for 9,000+ homes after Typhoon Jangmi remains the immediate community priority.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; The Diplomat &bull; Military Times &bull; Military.com &bull; Naval News &bull; Army Recognition &bull; Defence Security Asia &bull; Newsweek &bull; Al Jazeera &bull; UPI &bull; South China Morning Post &bull; IISS Shangri-La Dialogue &bull; Nikkei Asia &bull; Japan Ministry of Defense &bull; U.S. Embassy Tokyo &bull; DVIDSHUB &bull; USMC III MEF &bull; Ryukyu Shimpo &bull; News On Japan &bull; Travel and Tour World
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
