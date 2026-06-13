#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Security &bull; Regional Threats &bull; Infrastructure</p>
    </div>

    <!-- ===================== EVENT 1: MCIPAC CHANGE OF COMMAND ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Command &amp; Control / MCIPAC &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">MCIPAC Change of Command: BGen Rizzo Assumes Command at MCAS Futenma Ceremony</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>BGen Ralph Rizzo Jr.</strong> assumed command of Marine Corps Installations Pacific at a ceremony at MCAS Futenma on <strong>June 12, 2026</strong>, relieving <strong>MajGen Brian Wolford</strong>, who departs for the Pentagon to lead Marine Corps Installations Command. Over <strong>500 attendees</strong> including U.S. and Japanese officials were present. Rizzo previously served as <strong>III MEF Chief of Staff (2021&ndash;2023)</strong> and most recently commanded MCI-East at Camp Lejeune.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The transition comes at a critical juncture for Okinawa installations: Camp Hansen&rsquo;s new barracks complex is opening, Resolute Dragon 26 begins in 8 days, and the Futenma-to-Henoko relocation remains contested. Rizzo&rsquo;s III MEF background gives him deep familiarity with the theater&rsquo;s operational and political dynamics.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Command Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            New MCIPAC commander arrives with prior III MEF staff experience &mdash; expect continuity in installation management priorities. Key early challenges: overseeing Camp Hansen barracks transition, supporting Resolute Dragon 26 logistics, and managing community relations ahead of Memorial Day (June 23).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: SEXUAL ASSAULT CASES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Legal / SOFA / Community Relations &mdash; June 10&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two Active Sexual Assault Cases Involving U.S. Service Members: One Dismissed, One at Trial Ahead of Memorial Day</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Naha Public Prosecutors Office</strong> on June 11 declined to pursue sexual assault and bodily injury charges against a soldier assigned to <strong>Echo Battery, 1-1 ADA, 38th Air Defense Artillery Brigade</strong> at Kadena Air Base. The soldier was accused of sexually assaulting a woman during an outdoor encounter in April 2026. He received only a <strong>~$125 traffic fine</strong> for hitting a roadside barrier while fleeing the scene. The prosecution declined to explain its reasoning.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, testimony began June 10 in the trial of <strong>Pfc. Austin Wedington</strong>, 28, USMC, who pleaded not guilty by reason of insanity to <strong>forcible sexual intercourse</strong> and injuring a second woman at Gunners Fitness Center on Camp Foster in March 2025. Both cases come ahead of <strong>Okinawa Memorial Day (June 23)</strong>, when anti-base sentiment peaks. USFJ implemented stricter liberty restrictions in October 2024 including off-base drinking bans from 0100&ndash;0500.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Command Attention Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Heightened media coverage and potential protests expected in the lead-up to Memorial Day (June 23). Commands should reinforce liberty policy awareness, off-base conduct standards, and buddy system requirements. SOFA-related incidents continue to fuel anti-base political movements in Okinawa Prefecture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise / Force Posture &mdash; T-7 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 (June 20&ndash;30): Largest Iteration Yet; JSDF Ospreys at Futenma; NMESIS &amp; MADIS Deploy to Nansei Islands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26</strong> begins in 7 days, the annual bilateral exercise between USMC and JGSDF. Approximately <strong>7,300 JGSDF and 2,300 USMC personnel</strong> will operate across Kyushu, Okinawa, Miyako, Ishigaki, and Yonaguni. For the first time, <strong>three JGSDF V-22 Ospreys</strong> will deploy to MCAS Futenma and conduct flights to <strong>Miyako and Ishigaki islands</strong> &mdash; the first JSDF Osprey operations from a U.S. base and the first at Miyako (~220 miles east of Taiwan).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise will feature the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine-Air Defense Integrated System (MADIS)</strong>. Key scenarios include <strong>casualty evacuation rehearsals from Miyako Island</strong> and multi-domain island defense operations. The geographic scope &mdash; extending to Yonaguni, just 110 km from Taiwan &mdash; is a clear signal to Beijing about allied readiness in a potential Taiwan contingency.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Largest Resolute Dragon to date in geographic dispersion and system integration. NMESIS deployment signals live testing of anti-ship capabilities across the Nansei chain. Expect PRC diplomatic protests and possible PLAN/PLAAF activity near the exercise area. JSDF Osprey ops from Futenma is a milestone for alliance interoperability.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: 12TH MLR & KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Force Structure / Capability Gaps / Aviation &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Approaching IOC at Camp Hansen; Kadena F-15EX Deliveries Delayed to 2027&ndash;2028</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> at Camp Hansen is expected to reach <strong>Initial Operating Capability in FY2026</strong>. The 12th Littoral Combat Team, activated March 2025, is slated to receive <strong>NMESIS anti-ship missile capability</strong> this fiscal year, giving III MEF its <strong>first organic anti-ship missile battery on Okinawa</strong>. This transforms the Marine Corps posture on the island from primarily an infantry/expeditionary force to one with stand-off anti-ship fires.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At Kadena Air Base, <strong>F-15EX Eagle II deliveries to the 18th Wing have been delayed until 2027</strong>, caused by the Boeing St. Louis plant strike (Aug&ndash;Nov 2025). The full complement of <strong>36 F-15EXs may not arrive until 2028</strong>. In the interim, <strong>two squadrons of F-22 Raptors</strong> arrived at Kadena in May 2026 for rotational duty, alongside continuing F-35A rotations. Two F-15EX test aircraft remain on-station for familiarization.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Capability Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>12th MLR IOC</strong> is a Force Design 2030 milestone &mdash; organic anti-ship fires on Okinawa fundamentally changes the Marine Corps&rsquo; role in a Taiwan contingency from &ldquo;reinforcement&rdquo; to &ldquo;denial.&rdquo; <strong>Kadena fighter gap</strong> is being backfilled by F-22/F-35 rotations, but rotational forces lack the institutional knowledge and community integration of permanent units. Monitor Boeing delivery timeline for updates.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CHINA-JAPAN TENSIONS / MISSILE DEFENSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Regional Security / China-Japan / Missile Buildup &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Tensions at Multi-Year High: PLA Patrols Near Okinawa; Japan Deploys HVGP Hypersonic Missiles and Accelerates Nansei Buildup</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Following JMSDF destroyer <em>Ikazuchi</em>&rsquo;s April transit of the Taiwan Strait, China&rsquo;s <strong>Eastern Theater Command launched combat readiness patrols in the East China Sea</strong> and sent warships near Okinawa. Beijing&rsquo;s response was markedly harsher than to the previous transit, reflecting escalating friction since PM Takaichi&rsquo;s November 2025 statement that Japan could defend Taiwan. China has imposed economic countermeasures including <strong>banning Japanese seafood imports</strong> and canceling cultural exchanges.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan deployed <strong>Hyper Velocity Gliding Projectile (HVGP) Block I</strong> ballistic missiles to Camp Fuji on March 31 (range: 500&ndash;600 km, planned extension to 2,000 km). The U.S. approved a <strong>$340M support package</strong> for the HVGP program. Upgraded <strong>Type-12 SSMs</strong> deployed to Camp Kengun, with the <strong>7th SSM Regiment on Okinawa</strong> next. <strong>Yonaguni Island</strong> is receiving electronic warfare units in FY2026 and Type-03 SAMs by FY2030. Patriot batteries are positioned on Miyako, Okinawa, and Ishigaki. Japan&rsquo;s 2026 defense budget: a record <strong>&yen;9 trillion</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PLA activity near the Nansei chain has increased measurably. The combination of Resolute Dragon 26, HVGP deployment, and Nansei missile buildup will likely provoke further PRC military signaling through end of June. China condemned Yonaguni missile plans as &ldquo;extremely dangerous.&rdquo; The escalation cycle shows no signs of de-escalating &mdash; both sides are hardening positions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: FUTENMA / HENOKO / POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Base Politics / Elections &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Marks 30 Years Unresolved; Governor Tamaki to Seek Anti-Base Third Term in September Election</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>April 2026 marked 30 years</strong> since the U.S. and Japan agreed to return MCAS Futenma. The Pentagon demands a <strong>full-length runway at Henoko</strong> (Futenma: 2,700m vs. Henoko: ~1,800m each), construction extends to <strong>at least 2033</strong>, and Tokyo and Okinawa remain at odds. Chief Cabinet Secretary Kihara insists the site will be returned; Defense Minister Koizumi notes civilian facilities could serve as emergency alternatives.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Governor Denny Tamaki</strong> (age 66) announced he will run for a <strong>third term in the September 13, 2026 gubernatorial election</strong>, campaigning on opposition to the Henoko relocation. He is backed by the &ldquo;All Okinawa&rdquo; coalition. The LDP&rsquo;s candidate is <strong>Genta Koja</strong>, former deputy mayor of Naha, who supports the relocation. The election is a <strong>proxy battle over the base issue</strong> and will shape the trajectory of U.S. military presence on Okinawa for the next four years.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The runway length dispute introduces a new variable into the Futenma saga. Tamaki&rsquo;s re-election bid ensures the anti-base movement retains political leadership through at least 2030 if he wins. A Koja victory would mark a significant shift toward Tokyo-aligned base policy. The September election will be closely watched by both USFJ and the Japanese government.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: 31ST MEU / FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Force Posture / INDOPACOM / Deployments &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU &amp; USS Tripoli Remain in Middle East: 2,200+ Okinawa Marines Absent from Indo-Pacific Theater</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit (~2,200 Marines)</strong> and <strong>USS Tripoli</strong> deployed to the Middle East in <strong>mid-March 2026</strong> and remain forward in that theater. The 31st MEU is the only continuously forward-deployed MEU in the Marine Corps and serves as the <strong>primary rapid-response force for the Indo-Pacific</strong>. Its absence creates a notable gap in amphibious crisis-response capability across the Western Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          III MEF headquarters elements and other Okinawa-based units remain in place, but the loss of the theater&rsquo;s primary amphibious ARG/MEU during elevated China-Japan tensions and an active exercise calendar underscores <strong>competing demands on U.S. force projection</strong> between the Middle East and Indo-Pacific. No public timeline has been announced for the MEU&rsquo;s return.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 8: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Infrastructure / Quality of Life / MCIPAC &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Camp Hansen &ldquo;Barracks of the Future&rdquo; Opens: 1,096 Marines Get Private Rooms; Move-In Begins July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>MajGen Brian Wolford</strong> (outgoing MCIPAC CG) joined U.S. and Japanese officials on June 5 for the ribbon-cutting at Camp Hansen&rsquo;s new bachelor enlisted quarters near Kin Bay. <strong>Three six-story buildings</strong> replacing six older facilities will house <strong>1,096 unaccompanied Marines through the rank of sergeant</strong>. Each Marine gets an <strong>individual room</strong> with shared bathroom, kitchenette, and in-unit washer/dryer. Amenities include a parking garage, 50-yard turf field, and military gear wash station. Move-in begins <strong>July 2026</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Readiness</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Addresses a top-tier quality-of-life concern for forward-deployed Marines. The &ldquo;1+1&rdquo; configuration aligns with DoD-wide barracks modernization. Funded through the Japan Facilities Improvement Program (JFIP) under the U.S.-Japan Alliance cost-sharing agreement. Expected to positively impact morale, retention, and unit cohesion.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 9: NATURAL HAZARDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">Natural Hazards / Weather / Force Protection &mdash; June 1&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Passes with Minimal Base Damage; M7.8 Philippine Earthquake Triggers Okinawa Tsunami Advisory; Active Season Forecast</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (No. 6)</strong> &mdash; the first major storm in nearly three years &mdash; passed over Okinawa June 1&ndash;2 with gusts up to <strong>80 mph at MCAS Futenma</strong>. At least 16 people injured; nearly <strong>48,000 homes lost power</strong> in Okinawa and Kagoshima. U.S. bases moved to &ldquo;all clear&rdquo; by 10:38 AM June 2 with limited damage. Over <strong>400 flights canceled</strong>; monorail, buses, and ferries suspended island-wide.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 8, a <strong>M7.8 earthquake off Mindanao</strong> triggered tsunami advisories from Okinawa to Ibaraki, evacuating <strong>195,000+ residents</strong>. A tropical depression near Taiwan on June 9 intensified rainfall across Okinawa through June 11. Forecasters project <strong>up to 28 tropical cyclones</strong> in the western North Pacific in 2026, with ~14 potentially impacting Japan. Peak season: June&ndash;October.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Preparedness</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Peak typhoon season is underway with an above-average forecast. Verify TCCOR readiness plans and ensure personnel are briefed on evacuation procedures. The Mindanao earthquake is a reminder that seismic/tsunami events can disrupt operations with little warning &mdash; confirm tsunami evacuation routes are current.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 10: ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">10</span>
          <span style="color: #666; font-size: 11px;">Economy / Tourism / Infrastructure &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Tourism Boom: On Track to Exceed 10M Visitors; Junglia Theme Park Generates &yen;32B in First 6 Months</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa is on track to exceed <strong>10 million tourists in FY2025</strong> for the first time, with inbound visitor numbers growing <strong>23% year-on-year</strong>. Expedia named Okinawa a <strong>top global destination for 2026</strong> following a 71% YoY increase in flight and accommodation searches. The prefecture is positioning itself as an affordable luxury alternative to Hawaii. <strong>Marubeni Corporation</strong> acquired a stake in Okinawa Tourist Service Inc. in June, signaling major corporate entry into the tourism sector.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Junglia Okinawa</strong>, the new theme park, generated <strong>&yen;32.2 billion (~$210M) in economic impact</strong> during its first six months with approximately 650,000 visitors. The prefectural government plans to introduce an <strong>accommodation tax in FY2026</strong> to support sustainable tourism infrastructure. Growing tourism strengthens the local economy but also increases traffic congestion and infrastructure strain around military installations.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Commander&rsquo;s Assessment &mdash; Key Takeaways</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Alliance integration is accelerating.</strong> Resolute Dragon 26 (T-7 days) will be a milestone: JSDF Ospreys from Futenma, NMESIS/MADIS on the Nansei chain, exercises reaching Yonaguni. The 12th MLR approaching IOC with organic anti-ship fires fundamentally changes the Marine Corps&rsquo; role in island defense. Expect PRC counter-signaling.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Community relations at a critical moment.</strong> Two sexual assault cases, new MCIPAC leadership, and Memorial Day (June 23) converge in the next 10 days. Commands should proactively engage local counterparts and reinforce good order and discipline. The September gubernatorial election makes every incident politically consequential.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture is strained but modernizing.</strong> The 31st MEU&rsquo;s Middle East deployment removes the theater&rsquo;s primary amphibious force during peak China-Japan tensions. Kadena&rsquo;s F-15EX gap persists through 2027. However, the 12th MLR&rsquo;s NMESIS capability and Japan&rsquo;s HVGP/Type-12 missile deployments are reshaping the deterrence posture across the Nansei chain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Natural hazard season is active.</strong> Typhoon Jangmi was the opener; 28 cyclones are forecast this season. Verify TCCOR and tsunami plans before the next system forms.
      </p>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Dates &mdash; Next 90 Days</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #eab308; padding: 8px 0; width: 90px; font-weight: 700;">Jun 20&ndash;30</td>
          <td style="color: #ccc; padding: 8px 0;">Resolute Dragon 26 &mdash; USMC/JGSDF bilateral exercise across Kyushu, Okinawa, and Nansei Islands</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #eab308; padding: 8px 0; font-weight: 700;">Jun 23</td>
          <td style="color: #ccc; padding: 8px 0;">Okinawa Memorial Day &mdash; Cornerstone of Peace ceremony, Itoman. Potential protests near bases.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #eab308; padding: 8px 0; font-weight: 700;">Jul 2026</td>
          <td style="color: #ccc; padding: 8px 0;">Camp Hansen BEQ move-in begins &mdash; 1,096 Marines transition to new barracks</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #eab308; padding: 8px 0; font-weight: 700;">FY2026</td>
          <td style="color: #ccc; padding: 8px 0;">12th MLR IOC expected &mdash; First organic NMESIS anti-ship missile battery on Okinawa</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #eab308; padding: 8px 0; font-weight: 700;">Sep 13</td>
          <td style="color: #ccc; padding: 8px 0;">Okinawa Gubernatorial Election &mdash; Tamaki (anti-base) vs. Koja (LDP/pro-relocation)</td>
        </tr>
        <tr>
          <td style="color: #eab308; padding: 8px 0; font-weight: 700;">Jun&ndash;Oct</td>
          <td style="color: #ccc; padding: 8px 0;">Peak typhoon season &mdash; Up to 28 cyclones forecast; above-average activity expected</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Marine Corps Times &bull; USNI News &bull; Taiwan News &bull; Al Jazeera &bull; South China Morning Post &bull; Foreign Policy &bull; Asian Military Review &bull; Air &amp; Space Forces Magazine &bull; Defense News &bull; The Diplomat &bull; Army Recognition &bull; U.S. Embassy Japan &bull; DVIDSHUB &bull; Military.com &bull; Okinawa Marines (MCIPAC) &bull; Newsweek &bull; Breaking Travel News &bull; News On Japan &bull; Travel and Tour World
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is compiled from open-source reporting and is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
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
  console.log(`\nNote: Resend account is in testing mode (no verified domain).`);
  console.log(`Intended recipients requiring domain verification: ${INTENDED_RECIPIENTS.join(', ')}`);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
