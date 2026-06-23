#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const ALL_RECIPIENTS = [
  'johnmcbride2928@gmail.com',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa &amp; Indo-Pacific Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &amp; Indo-Pacific &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Force Posture &bull; Government &bull; Regional Security</p>
    </div>

    <!-- ===================== PRIORITY FLASH ===================== -->
    <div style="background: #1a0a0a; border: 1px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px; font-weight: 700;">&#9888; Priority Items &mdash; Last 24 Hours</p>
      <p style="color: #ccc; font-size: 13px; line-height: 1.7; margin: 0;">
        <strong style="color: #fff;">1.</strong> Exercises <strong>Valiant Shield 26</strong> and <strong>Resolute Dragon 26</strong> are now active in the Western Pacific including Okinawa-area facilities.<br/>
        <strong style="color: #fff;">2.</strong> <strong>12th MLR receives NMESIS &amp; MADIS</strong> &mdash; Okinawa-based Marines now equipped with ship-killer and counter-drone systems (reported today, June 23).<br/>
        <strong style="color: #fff;">3.</strong> <strong>Typhon mid-range missile system</strong> deployed to Kanoya Air Base, Kyushu &mdash; will be stored in Japan post-exercise for first time.<br/>
        <strong style="color: #fff;">4.</strong> <strong>Henoko landfill work resumes</strong> in new Oura Bay section (June 17) ahead of September gubernatorial election.
      </p>
    </div>

    <!-- ===================== EVENT 1: VALIANT SHIELD & RESOLUTE DRAGON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Exercises / Indo-Pacific &mdash; June 20&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Valiant Shield 26 &amp; Resolute Dragon 26 Now Active Across Western Pacific; Largest U.S.-Japan Joint Drills of 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two major exercises are now running simultaneously across the Indo-Pacific. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) is a bilateral U.S. Marine Corps&ndash;JGSDF field training exercise focused on southwestern island defense, with operations spanning Okinawa, Miyako, Ishigaki, Yonaguni, Amami Oshima, and multiple training areas across Kyushu. Approximately <strong>9,600 personnel</strong> are participating, led by III MEF with 3rd Marine Division, 12th MLR, 1st MAW, and the U.S. Army&rsquo;s 3rd Multi-Domain Task Force.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Valiant Shield 26</strong> (June 22&ndash;July 1) is a multinational exercise centered on Guam, the Mariana Islands, and Japanese waters, integrating forces from the U.S., Japan, Australia, Canada, and New Zealand. The USS George Washington Carrier Strike Group arrived in Guam on June 16; Japan is contributing the JS Kaga (helicopter destroyer), JS Fuyuzuki, and the JS Jingei (submarine), plus approximately <strong>4,100 JSDF troops, 150 vehicles, and 60 aircraft</strong>. Allied navies began formation sailing on June 21.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Notably, Japan&rsquo;s new <strong>Type 25 coastal anti-ship missile system</strong> is participating in mission training for the first time, and Japan Maritime Self-Defense Force transport ships are participating in a Resolute Dragon exercise for the first time.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous execution of these exercises demonstrates integrated multi-domain capability across the First Island Chain. Resolute Dragon directly rehearses the defense of southwestern islands &mdash; the most likely flashpoint in a Taiwan contingency. Expect increased military air and naval traffic around Okinawa through July 1.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: NMESIS & MADIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Okinawa &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives NMESIS Anti-Ship &amp; MADIS Counter-Drone Systems on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong> has formally received both the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and the <strong>Marine Air Defense Integrated System (MADIS)</strong> on Okinawa. This makes the 12th MLR the second MLR to field both systems, following the 3rd MLR in Hawaii (late 2024).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>NMESIS</strong> mounts a Naval Strike Missile on a Joint Light Tactical Vehicle (JLTV), providing a ground-based anti-ship capability with a striking range of approximately <strong>185 kilometers</strong> and semi-autonomous/fully autonomous launch options. <strong>MADIS</strong> operates on two JLTVs: one carrying 360-degree radar, C2, and electronic warfare suites; the second mounting a Multi-Stinger missile pod, 30mm cannon, and additional EW for countering drones, helicopters, and fixed-wing aircraft.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          These systems were proven operationally during <strong>Balikatan 26</strong> in the Philippines (May 2026), where Marines deployed NMESIS across Philippine islands to practice denial operations in the Luzon Strait.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is a cornerstone of the Marine Corps&rsquo; Force Design modernization. Okinawa-based Marines now possess organic ship-killer and counter-UAS capabilities tailored for contested littoral environments. The 185km anti-ship range from forward island positions significantly complicates adversary naval planning in the East China Sea and around the Miyako Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TYPHON MISSILE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Missile Defense / Kyushu &mdash; June 16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Army Deploys Typhon Mid-Range Missile System to Kyushu; Will Remain Stored in Japan Post-Exercise</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Army&rsquo;s <strong>3rd Multi-Domain Task Force</strong> (Fort Shafter, Hawaii) has deployed its <strong>Typhon mid-range missile system</strong> to JMSDF <strong>Kanoya Air Base</strong> on Kyushu for participation in Valiant Shield 26 and the September Orient Shield exercise. The Typhon can fire both <strong>SM-6 and Tomahawk cruise missiles</strong>, bridging the gap between precision-strike and long-range hypersonic capabilities.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a significant departure from last year&rsquo;s deployment, <strong>the Typhon system will be stored at a Japanese base after Valiant Shield rather than being flown out of theater</strong>. This reduces deployment friction and establishes a more persistent forward presence baseline in the southwestern island chain. Typhon and HIMARS will participate in Joint Integrated Anti-Ship Warfare training in waters around Kanoya and Amami Oshima, though no live firing is scheduled.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kanoya positions the Typhon significantly closer to Taiwan and East China Sea operational corridors. The decision to store the system in Japan permanently marks a qualitative shift in forward posture &mdash; transitioning from rotational presence to persistent positioning. This has already drawn strong condemnation from Beijing, with China&rsquo;s Eastern Theater Command launching combat readiness patrols in response. Expect continued Chinese diplomatic and military signaling against this deployment.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Regional Security / Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Diplomatic Crisis Deepens; Beijing Condemns Exercises, Sends Warships Near Okinawa, Restricts Rare Earth Exports</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> continues to escalate. Following PM Takaichi&rsquo;s November 2025 comments that Japan could come to Taiwan&rsquo;s defense, and Japan&rsquo;s second Taiwan Strait transit (April 2026), Beijing has intensified retaliatory measures: <strong>travel advisories, cultural exchange restrictions, seafood import bans, and restrictions on dual-use items and rare earth exports to Japan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s Eastern Theater Command has launched <strong>combat readiness patrols in the East China Sea</strong> and sent warships near Okinawa. Beijing&rsquo;s Ministry of Foreign Affairs, Ministry of National Defense, and Eastern Theater Command have all issued statements telling Japan to &ldquo;step back from the brink.&rdquo; The current joint U.S.-Japan exercises (Resolute Dragon, Valiant Shield) and Typhon deployment have further inflamed tensions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Analysts increasingly warn that the possibility of a <strong>limited air or naval clash</strong> within the next one to two years cannot be dismissed. The U.S.-Japan Extended Deterrence Dialogue (June 8&ndash;9 in Tokyo) reaffirmed the full range of U.S. defense capabilities for Japan, including nuclear, and discussed China&rsquo;s &ldquo;dramatic and opaque nuclear weapons buildup.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Risk Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #dc2626;">ELEVATED.</strong> The combination of active exercises near China&rsquo;s periphery, persistent Typhon basing, and the diplomatic crisis creates a compressed threat environment. Personnel in Okinawa should monitor for PLA Navy and Air Force activity around the Miyako Strait, East China Sea ADIZ incursions, and potential gray-zone provocations near Senkaku/Diaoyu Islands during the exercise window through July 1.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FUTENMA/HENOKO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Base Realignment / Okinawa &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Work Resumes in New Oura Bay Section; Futenma Relocation Target Pushed to 2033</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Defense Ministry began landfill dumping in a <strong>new section of Oura Bay</strong> on June 17 as part of the long-running plan to relocate MCAS Futenma from Ginowan to the Henoko coastal area in Nago. While southern-area landfill is largely complete (begun 2018), the Oura Bay section requires reinforcement of large areas of soft soil, with approximately <strong>71,000 sand piles</strong> being driven into the seabed alongside embankment construction and soil pouring.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The project is now expected to be completed around <strong>April 2033</strong>, with facility transfer adding another three years &mdash; roughly doubling the originally projected timeline and cost. The government is pressing ahead despite local opposition, viewed as an effort to demonstrate progress ahead of the <strong>September 13 gubernatorial election</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Governor <strong>Denny Tamaki</strong> (backed by the &ldquo;All Okinawa&rdquo; coalition including CDP, JCP, and SDP) is seeking a third term and opposes the relocation. The LDP is fielding <strong>Genta Koja</strong>, 42, former Naha deputy mayor, who supports the relocation plan. Tamaki&rsquo;s support base is reportedly wavering following changes in the national political landscape after the February general election. The September election will be a de facto referendum on the base issue and the U.S. military presence.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Military / Infrastructure / Okinawa &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Complex Opens at Camp Hansen; 1,096 Marines Moving In</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony was held on June 5 for a new <strong>$320 million barracks complex</strong> at Camp Hansen, funded by the Japanese government. The complex includes <strong>three barracks buildings housing 1,096 unaccompanied enlisted Marines</strong> through the rank of sergeant, with 184 housing modules per building designed for two Marines each. Each resident receives a <strong>private 155-square-foot bedroom</strong> with personal sink; roommates share a kitchen, restroom, shower, and washer/dryer within 710-square-foot units.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Eventually, <strong>11 more buildings</strong> will be constructed to replace barracks at Camp Hansen and Camp Kinser. The complex includes a 220-space detached parking garage and recreation field. Marines are expected to begin moving in this month. Planning began in 2019; construction started March 2022.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 7: EXTENDED DETERRENCE DIALOGUE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Diplomacy / Nuclear Deterrence / Tokyo &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S.-Japan Extended Deterrence Dialogue Reaffirms Nuclear Umbrella; Tabletop Exercise Conducted at Yokosuka</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. and Japan held the <strong>Extended Deterrence Dialogue (EDD)</strong> at Japan&rsquo;s Ministry of Foreign Affairs in Tokyo on June 8&ndash;9. The U.S. delegation was co-chaired by the Department of State and Department of War, with participants from the Joint Staff, U.S. Strategic Command, INDOPACOM, and U.S. Forces Japan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key outcomes: The U.S. <strong>reaffirmed its commitment to Japan&rsquo;s defense using the full range of capabilities, including nuclear</strong>. Delegations discussed U.S. nuclear force modernization, China&rsquo;s &ldquo;dramatic and opaque nuclear weapons buildup,&rdquo; and rejected Russia&rsquo;s position that DPRK nuclear weapons are a &ldquo;closed issue.&rdquo; Japan urged U.S. pursuit of <strong>multilateral strategic stability talks</strong> with China and Russia. A routine tabletop exercise was conducted, and delegations visited JMSDF Yokosuka Base to observe the JS Kirishima.
        </p>
      </div>
    </div>

    <!-- ===================== ADDITIONAL ITEMS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">+</span>
          <span style="color: #666; font-size: 11px;">Additional Items of Note</span>
        </div>
        <p style="color: #bbb; font-size: 13px; line-height: 1.8; margin: 0;">
          <strong style="color: #fff;">U.S.-Japan-Philippines Maritime Dialogue:</strong> The second trilateral dialogue was held in Manila on June 8, covering joint operations, exercises, capacity building, and foreign assistance alignment for a free and open Indo-Pacific.<br/><br/>
          <strong style="color: #fff;">Marine Relocation to Guam:</strong> Ongoing. Approximately 9,000 of 19,000 Marines are slated to leave Okinawa eventually. A small detachment of ~100 logistics support Marines has already transferred to Guam.<br/><br/>
          <strong style="color: #fff;">Bank of Japan Rate Decision:</strong> The BOJ is expected to raise its policy rate from 0.75% to 1.00% at the June 15&ndash;16 Monetary Policy Meeting, with two further hikes anticipated by year-end to 1.25%. Yen strength may affect on-base exchange rates and cost-of-living adjustments.<br/><br/>
          <strong style="color: #fff;">Weather:</strong> Okinawa is in the rainy season with average humidity ~84% and temperatures 25&ndash;29&deg;C (77&ndash;84&deg;F). Typhoon Jangmi (No. 6) caused 400+ flight cancellations and 16+ injuries in early June. Japan&rsquo;s Meteorological Agency forecasts an above-average typhoon season for 2026.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Situational Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The force posture around Okinawa is materially shifting.</strong> The fielding of NMESIS and MADIS to the 12th MLR, the persistent basing of Typhon on Kyushu, and the simultaneous execution of Valiant Shield and Resolute Dragon represent a step-change in integrated deterrence capability along the First Island Chain. These are not routine rotational deployments &mdash; they signal a transition toward persistent, distributed lethality designed for contested maritime operations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The China-Japan crisis remains the dominant risk vector.</strong> Every capability enhancement strengthens deterrence but also compresses the escalation space. PLA Navy and Air Force activity near Okinawa and in the Miyako Strait should be closely monitored during the exercise window through July 1. The rare-earth export restrictions add an economic warfare dimension that could impact defense supply chains.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">The September 13 gubernatorial election will shape the political landscape.</strong> Whether Tamaki retains office or the LDP recaptures the prefecture will directly influence the pace of Futenma relocation, community relations, and the broader political environment for U.S. forces on Okinawa.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; DVIDSHUB &bull; Military Times &bull; U.S. State Department &bull; Japan Ministry of Foreign Affairs &bull; Defence Industry EU &bull; Defence Blog &bull; Task and Purpose &bull; The Japan Times &bull; Foreign Policy &bull; South China Morning Post &bull; AEI &bull; Global Times &bull; Newsweek &bull; CSIS &bull; U.S. Embassy Japan &bull; NavyCRF &bull; Canadian Defence Review &bull; Responsible Statecraft
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence or policy guidance. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const sent = [];
const failed = [];

for (const recipient of ALL_RECIPIENTS) {
  const payload = JSON.stringify({
    from: 'World Monitor <onboarding@resend.dev>',
    to: [recipient],
    subject: `[World Monitor] Okinawa & Indo-Pacific Intelligence Briefing — ${today}`,
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

    if (httpCode.startsWith('2')) {
      const data = JSON.parse(body);
      console.log(`Sent to ${recipient} — Resend ID: ${data.id}`);
      sent.push(recipient);
    } else {
      console.error(`Failed for ${recipient} (HTTP ${httpCode}): ${body}`);
      failed.push(recipient);
    }
  } catch (err) {
    console.error(`Failed for ${recipient}: ${err.message}`);
    failed.push(recipient);
  }
}

console.log(`\nResults: ${sent.length} sent, ${failed.length} failed.`);
if (sent.length > 0) console.log('Delivered to:', sent.join(', '));
if (failed.length > 0) {
  console.log('Failed for:', failed.join(', '));
  console.log('\nNote: The Resend API key is in testing mode (no verified domain).');
  console.log('To send to all recipients, verify a domain at https://resend.com/domains');
}
if (sent.length === 0) process.exit(1);
