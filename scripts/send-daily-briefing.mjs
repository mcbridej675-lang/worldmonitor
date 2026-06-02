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
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Weather / Base Operations / Okinawa &mdash; June 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Crosses Okinawa Main Island; U.S. Bases Weather First Major Storm in 3 Years with Limited Damage</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (Typhoon No. 6)</strong> &mdash; Okinawa&rsquo;s first major typhoon in nearly three years &mdash; made landfall on the main island <strong>Monday evening, June 1</strong>, bringing wind gusts up to <strong>80 mph</strong> at MCAS Futenma. The storm knocked out power to more than <strong>7,000 homes</strong> across Okinawa, grounded over <strong>400 flights</strong>, and shut down all route buses, the Okinawa Urban Monorail, and ferry services to Miyakojima and surrounding islands. The U.S. Consulate General Naha closed on June 1.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.S. bases reported no injuries or significant damage.</strong> Kadena Air Base&rsquo;s 18th Wing confirmed no personnel injuries. Family housing units at <strong>Camp Courtney</strong> lost power Monday afternoon, affecting towers and quadplexes on the south end. All U.S. bases moved to <strong>&ldquo;all clear&rdquo; status at 10:38 a.m. Tuesday, June 2</strong>. Base schools are scheduled to resume Wednesday. As of June 2, the typhoon continues north-northeast toward mainland Kagoshima, with ANA and JAL canceling <strong>130+ flights</strong> for today. Authorities warn disruptions could spread to Kyushu, Shikoku, Kansai, and Kanto through June 3.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Bases are returning to normal operations but personnel should continue to monitor TCCOR conditions. The storm&rsquo;s rapid passage minimized damage to military infrastructure. Flight operations at Kadena and Futenma are expected to resume imminently. The typhoon&rsquo;s track away from Okinawa reduces further risk to the island.<br/><br/>
            <strong>Watch:</strong> Restoration of civilian utilities on Okinawa &bull; Any residual infrastructure damage assessments &bull; Impact to scheduled military training and exercises &bull; Typhoon Jangmi&rsquo;s impact on mainland Japan bases (Yokosuka, Yokota, Sasebo).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: LIAONING CSG + TYPE 054B ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; May 19&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Liaoning Carrier Strike Group Conducts Live-Fire Drills in Western Pacific with First-Ever Type 054B Frigate Deployment</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Joint Staff Office confirmed a <strong>five-vessel PLAN formation</strong> in the Western Pacific led by aircraft carrier <strong>CNS Liaoning (CV-16)</strong>, detected <strong>880 km southwest of Okinotorishima</strong> on May 25&ndash;26. The formation includes the Type 055 destroyer <strong>Wuxi (104)</strong>, Type 052D destroyer <strong>Kaifeng (124)</strong>, the newly commissioned Type 054B (Jiangkai III) frigate <strong>CNS Luohe (545)</strong>, and fast combat support ship <strong>CNS Hulunhu (901)</strong>. The Luohe and Hulunhu had transited the <strong>Miyako Strait</strong> on May 19 &mdash; marking the <strong>first-ever passage of a Type 054B beyond the first island chain</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The carrier group has been conducting <strong>live-fire drills</strong> in the Western Pacific. The Type 054B&rsquo;s integration into the Liaoning CSG just <strong>16 months after commissioning</strong> signals a significant compression of the PLAN&rsquo;s platform-to-fleet-integration timeline. The frigate features enhanced <strong>anti-submarine warfare capabilities with integrated low-frequency sonar</strong> &mdash; a capability gap China has long sought to close. China has begun construction of a <strong>fourth Type 054B hull</strong> at Hudong Changxingdao shipyard. The Chinese Defense Ministry highlighted the deployment as part of <strong>&ldquo;training expansion toward far-seas combat application.&rdquo;</strong>
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Type 054B&rsquo;s ASW suite is purpose-built to counter U.S. and Japanese submarine advantages in the Western Pacific. Its rapid integration into carrier strike groups &mdash; combined with the Liaoning CSG&rsquo;s live-fire exercises &mdash; signals the PLAN is accelerating blue-water combat readiness. The Miyako Strait transit coincides with the 31st MEU&rsquo;s continued absence from the region, suggesting the PLAN is exploiting the deterrence gap to normalize advanced platform operations beyond the first island chain.<br/><br/>
            <strong>Watch:</strong> Duration of the Liaoning CSG deployment &bull; Whether the Shandong deploys simultaneously (as in June 2025&rsquo;s dual-carrier operation) &bull; JMSDF tracking and shadowing operations &bull; Any increase in PLAN submarine activity through the Miyako Strait &bull; Total carrier takeoff/landing operations tracked by JMSDF.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TYPHON MISSILE + EXERCISES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan / Force Posture / Missile Defense &mdash; Announced May 25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Typhon Missile System to Be Permanently Stored in Japan; Two Major Exercises Set for Late June</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan announced two major U.S.-Japan exercises for late June: <strong>Resolute Dragon 26</strong> (June 20&ndash;30) and <strong>Valiant Shield 2026</strong> (June 22&ndash;July 1). In a significant escalation of forward posture, the <strong>containerized Typhon mid-range missile system</strong> and <strong>HIMARS</strong> will be deployed to <strong>JMSDF Kanoya Air Base</strong> for Valiant Shield and the follow-on Orient Shield exercise. <strong>Unlike last year&rsquo;s deployment, the Typhon system will be stored on a U.S. base in Japan after the exercises conclude</strong> &mdash; making this effectively a permanent forward positioning of the system in the Indo-Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Resolute Dragon 26 will involve USMC and JGSDF forces training across <strong>Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong>, with a <strong>GSDF V-22 Osprey planned to land at MCAS Futenma for the first time</strong>. The exercise builds on the <strong>first-ever U.S.-Japan coordination center</strong> established on Miyakojima in May, where <strong>20 Marines from the 12th Marine Littoral Regiment</strong> joined JGSDF command post training. Valiant Shield will include <strong>Joint Integrated Anti-Ship Warfare training</strong> in waters around Kanoya and Amami Oshima. No live firing is scheduled for the Typhon or HIMARS during the exercises.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The decision to store the Typhon system in Japan permanently marks a watershed in U.S.-Japan alliance posture. The Typhon can launch Tomahawk cruise missiles and SM-6 missiles &mdash; putting Chinese coastal targets within range from Japanese soil for the first time. China and Russia have strongly protested the deployment. Combined with the 12th MLR coordination center on Miyakojima (220 miles from Taiwan) and the GSDF Osprey integration at Futenma, these exercises demonstrate deepening alliance interoperability for a Taiwan contingency.<br/><br/>
            <strong>Watch:</strong> Chinese and Russian diplomatic response to permanent Typhon storage &bull; Resolute Dragon 26 scope and MLR activities on Nansei Islands &bull; Whether the coordination center on Miyakojima becomes permanent &bull; <strong>LMT</strong> (Lockheed Martin, Typhon prime), <strong>RTX</strong> (Raytheon, SM-6/Tomahawk) &mdash; defense contractors benefiting from forward deployment.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: 31ST MEU DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East; Indo-Pacific Deterrence Gap Persists with No Return Timeline</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only MEU permanently stationed in the Indo-Pacific &mdash; remains deployed to the Middle East with <strong>no announced return timeline</strong>. Approximately <strong>2,500 Marines and three warships</strong> (USS Tripoli, USS San Diego, USS New Orleans) departed Sasebo in March to support operations in the Strait of Hormuz during the ongoing Iran crisis. Marine Commandant <strong>Gen. Eric Smith</strong> testified before Congress that the redeployment has left the Indo-Pacific gap <strong>&ldquo;unfilled.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense experts from the Atlantic Council and multiple think tanks have warned the redeployment <strong>&ldquo;dangerously weakens deterrence against Beijing&rdquo;</strong> as the PLA approaches its reported 2027 Taiwan readiness timeline. Separately, experts argue that the <strong>Defense Policy Review Initiative (DPRI)</strong> &mdash; which would relocate <strong>9,800 Marines</strong> from Okinawa to Guam, Hawaii, Australia, and CONUS &mdash; should be <strong>frozen or reversed</strong> given the current threat environment. III MEF retains ground and air assets on Okinawa but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, humanitarian assistance, and NEO operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence coincides directly with the Liaoning CSG&rsquo;s live-fire exercises in the Western Pacific and the debut of China&rsquo;s Type 054B frigate beyond the first island chain. This creates a compounding vulnerability: the primary rapid-response force is absent while China tests new capabilities near the very chokepoints that force is designed to defend.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Any temporary MEU rotation to fill the gap &bull; Congressional pressure to restore Pacific posture &bull; DPRI review or freeze decisions &bull; III MEF leadership transition (Lt. Gen. Turner nominated for MARFORPAC, Watson nominated for III MEF command).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor Tamaki Seeks Third Term Against Pro-Relocation Challenger; PFAS Contamination Hits Record Levels Near U.S. Bases</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki</strong>, 66, formally announced his bid for a <strong>third term</strong> in Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>, reaffirming opposition to the Futenma-to-Henoko relocation. His challenger, <strong>Genta Koja</strong>, 42, a former Naha deputy mayor and de facto LDP candidate, <strong>supports the relocation plan</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is under strain after the February general election shifted the political landscape, with the Centrist Reform Alliance remaining undecided on the relocation issue.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation passed its 30th anniversary</strong> in April with no resolution; construction at Henoko is not expected to complete until <strong>at least 2033</strong>. Meanwhile, Okinawa prefecture surveys found <strong>PFAS contamination at 2,800 parts per trillion</strong> &mdash; <strong>56 times Japan&rsquo;s 50 ppt standard</strong> &mdash; near Kadena Air Base. Elevated levels were found at <strong>31 of 44 sampling sites</strong> around U.S. bases, with contamination also detected downstream of Camp Hansen and around Futenma (28 of 40 sites). The U.S. military has <strong>denied all four of Okinawa&rsquo;s requests for base access</strong> to conduct water sampling since 2016, citing insufficient evidence its installations are sources.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election is a referendum on the U.S. military presence. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports Henoko relocation, potentially accelerating construction. The PFAS crisis is a growing flashpoint in U.S.-Okinawa relations and could become a decisive campaign issue. Japan&rsquo;s defense minister pledged to reduce the U.S. military footprint during a January visit to Okinawa, adding pressure.<br/><br/>
            <strong>Watch:</strong> September 13 gubernatorial election polling &bull; CRA&rsquo;s formal position on Futenma relocation &bull; PFAS litigation or diplomatic escalation &bull; U.S.-Japan base negotiations (next round in 2026) &bull; Impact of Japan&rsquo;s record $58B defense budget on Okinawa base infrastructure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: JAPAN DEFENSE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Japan / Defense Modernization / Southern Shield &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Builds &ldquo;Southern Shield&rdquo; Along First Island Chain; Record $58B Defense Budget Funds Standoff Missiles and Nansei Island Defenses</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s JSDF has deployed a range of weapons platforms, electronic warfare, and air assets across its southwestern islands as part of a new <strong>&ldquo;southern shield&rdquo; defense strategy</strong> creating <strong>anti-access/area-denial layers along the First Island Chain</strong>. The strategy is designed to complicate potential Chinese operations near Taiwan or in the East China Sea. Japan&rsquo;s record <strong>FY2026 defense budget of 9+ trillion yen ($58 billion)</strong> &mdash; up 9.4% from 2025 &mdash; allocates over <strong>970 billion yen ($6.2B) for standoff missile capability</strong>, including <strong>177 billion yen for upgraded Type-12 surface-to-ship missiles</strong> with a 1,000 km range.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is the <strong>fourth year of Japan&rsquo;s five-year plan to double defense spending to 2% of GDP</strong>. Japan&rsquo;s defense minister visited Okinawa in January and pledged to <strong>reduce the U.S. military footprint</strong>, even as the buildup of Japanese forces in the region accelerates. The International Crisis Group released a major report describing Japan&rsquo;s shift as <strong>&ldquo;embracing arms&rdquo;</strong> in a &ldquo;new era of crisis,&rdquo; noting that faith in U.S. security guarantees is faltering under the current administration, driving Japan toward greater self-reliance.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan&rsquo;s defense modernization is reshaping the security architecture around Okinawa. The Type-12 missile with 1,000 km range places Chinese coastal targets in reach from Nansei Island positions. Combined with the Typhon system&rsquo;s permanent forward positioning, the First Island Chain is becoming a layered missile defense barrier. However, the parallel track of reducing U.S. Marine presence (DPRI) while building Japanese capability creates a transition risk.<br/><br/>
            <strong>Watch:</strong> Type-12 missile deployment timeline to Nansei Islands &bull; Japan&rsquo;s FY2027 defense budget (final year of doubling plan) &bull; GSDF force buildup on Ishigaki, Yonaguni, Miyakojima &bull; <strong>MHI</strong> (Mitsubishi Heavy Industries, Type-12 prime) &mdash; key defense contractor benefiting from procurement surge.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Typhoon Jangmi has passed Okinawa with minimal military impact.</strong> U.S. bases returned to &ldquo;all clear&rdquo; at 10:38 a.m. today (June 2) with no injuries or significant infrastructure damage reported. Normal operations are resuming, though the storm continues tracking toward mainland Japan.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The strategic picture around Okinawa is tightening.</strong> China&rsquo;s Liaoning carrier strike group &mdash; now fielding the advanced Type 054B frigate &mdash; is conducting live-fire exercises in the Western Pacific while the 31st MEU remains in the Middle East with no return date. The U.S. and Japan are responding with the permanent forward positioning of the Typhon missile system and two major exercises in late June (Resolute Dragon 26 and Valiant Shield 2026), including the first GSDF Osprey operations from a U.S. base on Okinawa.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> Japan is building a &ldquo;southern shield&rdquo; with record defense spending and standoff missile deployments, even as experts warn against proceeding with plans to relocate 9,800 Marines away from Okinawa. The September 13 gubernatorial election will determine whether the Futenma relocation &mdash; now in its 30th year &mdash; gains new political momentum. PFAS contamination near U.S. bases has hit record levels with no resolution in sight.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; Naval News &bull; The Diplomat &bull; Military Times &bull; Military.com &bull; South China Morning Post &bull; Newsweek &bull; Al Jazeera &bull; Atlantic Council &bull; International Crisis Group &bull; Defense News &bull; Nippon.com &bull; News on Japan &bull; U.S. Embassy Japan &bull; Japan Joint Staff Office &bull; DVIDSHUB &bull; USMC Okinawa
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
