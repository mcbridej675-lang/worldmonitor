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

    <!-- ===================== EVENT 1: LIAONING CSG + TYPE 054B LIVE-FIRE OPS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; May 27&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Liaoning Carrier Strike Group Conducting Live-Fire Drills South of Miyako Island; Type 054B Frigate Operational Debut Confirmed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>PLAN Liaoning carrier strike group</strong> is actively conducting live-fire drills and flight operations in the Western Pacific south of Miyako Island. As of <strong>8 p.m. May 27</strong>, Liaoning was positioned <strong>211 miles south of Miyako Island</strong> alongside cruiser <strong>CNS Nanchang</strong> and destroyer <strong>CNS Qiqihar</strong>. By <strong>8 p.m. May 28</strong>, the group had moved to <strong>497 miles south of Miyako Island</strong> with destroyer <strong>CNS Tangshen</strong>. Over the 72-hour period of May 27&ndash;29, Liaoning conducted <strong>80 fixed-wing and 60 helicopter sorties</strong> &mdash; totaling <strong>140 take-offs and recoveries</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The strike group includes the newly commissioned <strong>Type 054B (Jiangkai III-class) guided-missile frigate CNS Luohe (545)</strong>, marking its <strong>first confirmed deployment within a carrier formation beyond the first island chain</strong>. The Luohe and fast combat support ship <strong>CNS Hulunhu (901)</strong> were first detected transiting the <strong>Miyako Strait</strong> on <strong>May 19</strong> &mdash; the first-ever Type 054B transit of this strategic waterway between Okinawa and Miyako Island. The Type 054B features enhanced anti-submarine warfare capabilities with an integrated low-frequency sonar suite, purpose-built to counter U.S. and Japanese submarine advantages. China has begun construction of a <strong>fourth hull</strong> at Hudong Changxingdao shipyard, just <strong>16 months after the lead ship commissioned</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Liaoning CSG&rsquo;s southward movement away from Miyako Island toward the Philippine Sea suggests a deliberate positioning to operate near the Luzon Strait and Bashi Channel &mdash; the second key chokepoint for Pacific access. The 140-sortie tempo over three days demonstrates increasing carrier aviation proficiency. The Type 054B&rsquo;s rapid integration into carrier operations &mdash; 16 months from commissioning to CSG deployment &mdash; compresses PLAN platform-to-fleet timelines faster than Western intelligence estimates anticipated.<br/><br/>
            <strong>Watch:</strong> Whether the Liaoning CSG moves toward the Bashi Channel or Philippine Sea &bull; USS George Washington CSG counter-positioning &bull; Additional Type 054B deployments with other PLAN formations &bull; JMSDF shadowing and P-1 patrol aircraft activity.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: USS GEORGE WASHINGTON DEPLOYMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USN / 7th Fleet / Indo-Pacific Patrol &mdash; May 24&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">USS George Washington (CVN-73) Begins Indo-Pacific Patrol; Dual Carrier Dynamic with Liaoning in Western Pacific</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The aircraft carrier <strong>USS George Washington (CVN-73)</strong> departed <strong>Yokosuka Naval Base</strong> on <strong>May 24</strong> to begin its second Indo-Pacific patrol since returning to 7th Fleet in 2024. <strong>Carrier Air Wing 5</strong> completed 10 days of field carrier landing practice on May 17, with the carrier conducting a brief at-sea period May 10&ndash;17 before the formal deployment. The patrol is expected to last approximately <strong>six months</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The timing creates a <strong>dual-carrier dynamic</strong> in the Western Pacific, with the George Washington CSG and the Liaoning CSG operating simultaneously in the region. This is the first time since the George Washington&rsquo;s return to Yokosuka that both carrier groups have been at sea concurrently in such close proximity. The George Washington partially compensates for the <strong>31st MEU&rsquo;s continued absence</strong> from the Indo-Pacific &mdash; still deployed to the Middle East enforcing the Iranian port blockade since April 13.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The George Washington&rsquo;s departure restores a U.S. carrier presence in the Western Pacific after a brief maintenance window. However, a carrier is not a substitute for the amphibious rapid-response capability that the 31st MEU provides. The Commandant&rsquo;s May 18 testimony acknowledging the &ldquo;unfilled&rdquo; Indo-Pacific gap remains operative. The dual-carrier scenario south of Japan will test both navies&rsquo; ability to track and shadow each other in open ocean conditions.<br/><br/>
            <strong>Watch:</strong> George Washington&rsquo;s initial operating area (Philippine Sea vs. South China Sea) &bull; Whether the two CSGs approach each other &bull; 31st MEU return timeline from the Middle East &bull; Any temporary MEU rotation to fill the Pacific gap.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: U.S. SOLDIER SEXUAL ASSAULT CASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">SOFA / Criminal Case / Base Relations &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Army Soldier at Kadena Referred to Prosecutors for Sexual Assault of Okinawan Woman</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese police on <strong>May 22</strong> referred a <strong>U.S. Army soldier</strong> assigned to the <strong>38th Air Defense Artillery Brigade at Kadena Air Base</strong> to prosecutors over allegations he <strong>sexually assaulted and injured</strong> an Okinawan woman older than 18. The unidentified soldier, a man in his 20s, allegedly assaulted the woman outdoors on Okinawa&rsquo;s main island and injured her arm. While fleeing the scene by car, the soldier allegedly <strong>struck a roadside barrier but failed to report the crash</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Investigators said the soldier and the woman knew each other. The soldier voluntarily submitted to questioning, and investigators reviewed surveillance footage. This is the <strong>latest in an ongoing string of sexual assault cases</strong> involving U.S. service members on Okinawa since late 2023, which has fueled significant public anger and strained the U.S.-Japan alliance at the local level. A separate case &mdash; a <strong>Marine facing trial at Camp Foster for sexual assault</strong> &mdash; is proceeding with an unusual <strong>sleep-disorder insanity defense</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community &amp; Alliance Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Each new incident compounds the political damage to the U.S. military&rsquo;s standing on Okinawa and provides ammunition for anti-base candidates ahead of the September 13 gubernatorial election. Gov. Tamaki has previously demanded stricter SOFA enforcement and greater Japanese jurisdiction over off-base crimes. Defense Minister Koizumi&rsquo;s January pledge to reduce the U.S. military footprint on Okinawa adds political pressure from Tokyo as well.<br/><br/>
            <strong>Watch:</strong> Prosecutor&rsquo;s charging decision &bull; Any liberty restrictions or curfew changes from USARJ or III MEF &bull; Okinawan public response and protests &bull; Impact on September election dynamics.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: NANSEI ISLANDS EXERCISE + RESOLUTE DRAGON PREVIEW ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan / Exercises / Force Posture &mdash; May 22&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF Nansei Islands Deployment Drill Complete; 12th MLR Coordination Center on Miyakojima; Resolute Dragon 26 Approaching</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>JGSDF Ground Component Command</strong> completed its <strong>first-of-its-kind exercise</strong> (May 17&ndash;22) focused on deploying troops and supplies to remote southwestern islands near Taiwan, including <strong>Ishigaki, Yonaguni, and Miyakojima</strong>. Approximately <strong>300 Japanese soldiers</strong> from all regional armies participated, alongside <strong>20 Marines from the 12th Marine Littoral Regiment</strong> who joined command post training on Miyakojima &mdash; establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island, only <strong>220 miles from Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Concurrently, the <strong>U.S.-Japan-Australia trilateral air exercise</strong> on May 21 deployed <strong>3 F-22 Raptors, 4 F-35As, 2 F/A-18s, 4 F-15Js, a P-8A Poseidon, and multiple tankers</strong> east of Okinawa. Looking ahead, a <strong>GSDF V-22 Osprey</strong> will land at <strong>MCAS Futenma for the first time</strong> during <strong>Resolute Dragon 26</strong> (June 20&ndash;30), with the Osprey airlifting a mock patient from Miyako Island &mdash; deepening logistics interoperability between U.S. and Japanese forces. Separately, Russian <strong>IL-20 ELINT aircraft</strong> were detected near Honshu on May 21&ndash;22, likely monitoring the allied exercises.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of allied exercises on islands near Taiwan, air drills east of Okinawa, and upcoming GSDF Osprey operations from U.S. bases represents a rapid deepening of interoperability specifically tailored to a Taiwan contingency. The 12th MLR&rsquo;s presence on Miyakojima establishes a new operational footprint that could become permanent. Russia&rsquo;s ELINT monitoring adds a complicating dimension.<br/><br/>
            <strong>Watch:</strong> Resolute Dragon 26 scope and participation (June 20&ndash;30) &bull; Whether the 12th MLR coordination center on Miyakojima becomes permanent &bull; Chinese response to JGSDF buildup &bull; Future GSDF Osprey rotations through U.S. bases.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT, POLITICS & BASE RELATIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">September 13 Gubernatorial Election Shaping Up; Futenma Relocation at 30-Year Impasse; PFAS Contamination at 56x Legal Limit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki</strong>, 66, has announced his bid for a <strong>third term</strong> in Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. The incumbent&rsquo;s &ldquo;All Okinawa&rdquo; anti-base coalition faces a serious challenge from <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto <strong>LDP candidate</strong> who <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s support is <strong>wavering</strong> after the Centrist Reform Alliance &mdash; a key coalition partner formed by Komeito and the CDP &mdash; remains undecided on the relocation issue, weakening his political base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> passed its <strong>30th anniversary</strong> in April with no resolution. The U.S. has stated it <strong>will not return the Futenma site unless Japan agrees to a longer runway at Henoko</strong> &mdash; the current V-shaped plan provides only 1,800m runways versus Futenma&rsquo;s 2,700m. Construction at Camp Schwab continues but is not expected to complete until <strong>at least 2033</strong>, with the airfield operational possibly by <strong>2036</strong>. On environmental issues, Okinawa prefecture surveys found <strong>PFAS contamination up to 56 times Japan&rsquo;s legal limit</strong> (2,800 ppt) in groundwater near Kadena Air Base. The U.S. military has <strong>denied all four of Okinawa&rsquo;s requests</strong> for base access to conduct water sampling since 2016. A January court ruling awarded <strong>$16.3 million</strong> to Okinawans affected by Kadena aircraft noise.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election is a referendum on the U.S. military presence. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports the Henoko relocation, potentially accelerating construction but increasing community friction. The latest sexual assault case (Event 3) adds fuel to anti-base sentiment at a critical moment. Defense Minister Koizumi&rsquo;s January pledge to &ldquo;reduce the U.S. military footprint&rdquo; signals Tokyo is also feeling the political pressure.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s formal position on Futenma relocation &bull; September 13 polling trends &bull; PFAS litigation or diplomatic escalation &bull; III MEF leadership transition (Lt. Gen. Watson replacing Turner) &bull; Impact of ongoing criminal cases on election dynamics.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: WEATHER — TYPHOON NO. 6 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Typhoon Advisory &mdash; May 28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon No. 6 (Jangmi) Intensifying East of Philippines; Expected to Become &ldquo;Very Strong&rdquo; System Near Okinawa by May 31</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon No. 6 (Jangmi)</strong> is moving slowly northward east of the Philippines as of 9 p.m. May 28. The storm is forecast to <strong>strengthen steadily</strong>, becoming a <strong>strong typhoon by the evening of May 30</strong> before intensifying into a <strong>very strong system south of Okinawa on May 31</strong>. Central pressure is expected to drop to <strong>945 hPa</strong> with maximum sustained winds reaching <strong>45 meters per second (101 mph)</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Typhoon No. 6 is expected to <strong>maintain strong intensity while passing near Okinawa through June 2</strong>, bringing the risk of <strong>violent winds, high waves, and heavy rain</strong>. Large amounts of moist air are being sent toward Japan, raising concerns over heavy rainfall across western to eastern Japan even before the storm approaches land. Military personnel should <strong>monitor TCCOR (Tropical Cyclone Condition of Readiness) updates</strong> from Kadena Air Base and MCAS Futenma. Base closures, flight cancellations, and shelter-in-place orders are likely if the typhoon tracks directly over Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Advisory</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A direct hit or close pass on Okinawa at 945 hPa / 45 m/s would trigger TCCOR-1 (destructive winds within 12 hours), halting all base operations including flight ops, port operations, and outdoor training. The Liaoning CSG operating south of Miyako Island may also be affected by the typhoon&rsquo;s outer bands. Resolute Dragon 26 preparations (June 20&ndash;30) are unlikely to be impacted at this range.<br/><br/>
            <strong>Timeline:</strong> May 30 &mdash; Strong typhoon &bull; May 31 &mdash; Very strong south of Okinawa &bull; June 1&ndash;2 &mdash; Closest approach to Okinawa main island.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">A dual-carrier Western Pacific is now in play.</strong> The Liaoning CSG &mdash; now featuring the Type 054B in its first-ever carrier group deployment &mdash; is conducting 140-sortie live-fire drills south of Miyako Island while the USS George Washington begins its Indo-Pacific patrol from Yokosuka. This is the most significant concurrent U.S.-China carrier activity near Okinawa in recent memory, occurring precisely during the 31st MEU&rsquo;s continued absence in the Middle East.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The alliance is deepening but under strain.</strong> The JGSDF&rsquo;s first Nansei Islands deployment drill, the 12th MLR coordination center on Miyakojima, trilateral air exercises, and upcoming Resolute Dragon 26 all signal accelerating interoperability for a Taiwan contingency. But another sexual assault case involving a U.S. soldier at Kadena compounds the political damage ahead of September&rsquo;s gubernatorial election, where anti-base incumbent Tamaki faces a pro-relocation LDP challenger.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Immediate concern:</strong> Typhoon No. 6 (Jangmi) is intensifying toward Okinawa with 945 hPa and 45 m/s winds forecast by May 31. TCCOR escalation and base closures are likely within 48&ndash;72 hours. All personnel should prepare for potential shelter-in-place conditions through June 2.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        USNI News &bull; Stars and Stripes &bull; Naval News &bull; The Diplomat &bull; The Japan Times &bull; Janes Defence &bull; Newsweek &bull; Defence Security Asia &bull; SOFX &bull; Zona Militar &bull; Global Times &bull; DVIDSHUB &bull; Japan Ministry of Defense &bull; News On Japan &bull; CGTN &bull; Military.com &bull; Ryukyu Shimpo &bull; Japan Today &bull; Nikkei Asia &bull; South China Morning Post
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
