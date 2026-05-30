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

    <!-- ===================== EVENT 1: TYPHOON CHANTHU ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ALERT</span>
          <span style="color: #666; font-size: 11px;">Weather / Tropical Cyclone / TCCOR &mdash; May 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon No. 6 (Chanthu) Strengthening Rapidly; Expected to Strike Okinawa June 1&ndash;2</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As of <strong>2100 local May 30</strong>, Typhoon No. 6 (Chanthu) is moving northwest at approximately <strong>20 km/h east of the Philippines</strong>, with central pressure at <strong>985 hPa</strong> and maximum sustained winds of <strong>30 m/s (58 kts)</strong>. The storm is forecast to intensify into a <strong>strong typhoon by the night of May 31</strong>, with sustained winds reaching <strong>35 m/s (68 kts)</strong>, and is expected to <strong>approach Okinawa Main Island closely on the night of June 1</strong> while maintaining that strength.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Parts of Okinawa Main Island are already experiencing <strong>waves exceeding 3 meters</strong> as of this afternoon. Wave heights are forecast to reach <strong>7&ndash;8 meters around Okinawa by June 1</strong>. Strong winds will begin affecting Okinawa Main Island and the Miyako Islands during June 1. The typhoon is then expected to track northeastward along Japan&rsquo;s Pacific coast toward Shikoku and the Kanto region by June 3.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Action Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All military personnel should monitor TCCOR (Tropical Cyclone Condition of Readiness) updates from Kadena Air Base and MCAS Futenma. Expect TCCOR-3 or higher to be set by May 31. Base operations, flight schedules, and port activities will likely be affected. Secure outdoor equipment, review typhoon preparedness plans, and monitor AFN Okinawa and base social media channels for shelter and curfew guidance.<br/><br/>
            <strong>Watch:</strong> TCCOR elevation timeline &bull; Impact on Liaoning CSG operations in the Western Pacific &bull; Port closures at White Beach and Naha &bull; Potential disruption to Resolute Dragon 26 pre-positioning.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: CHINA LIAONING CARRIER GROUP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Confirms Liaoning Carrier Group Conducting &ldquo;Far-Seas Combat Application&rdquo; Training; 260 Takeoffs/Landings in 5 Days; Type 054B Makes Carrier Debut</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s Ministry of National Defense confirmed on <strong>May 29</strong> that the <strong>Liaoning (CV-16) carrier task force</strong> is conducting <strong>&ldquo;far-seas combat application&rdquo; training</strong> in the Western Pacific, describing the operations as routine and part of the PLAN&rsquo;s annual plan. Spokesperson <strong>Senior Colonel Jiang Bin</strong> stated that exercises include <strong>far-seas tactical flight, live firing, support and cover, and integrated search and rescue</strong>, aimed at forming &ldquo;system-of-systems combat capabilities.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JMSDF confirmed <strong>260 fixed-wing and rotary-wing takeoffs and landings from Liaoning&rsquo;s deck between May 25&ndash;29</strong> &mdash; an exceptionally high sortie rate indicating intense operational training. The five-vessel formation, tracked <strong>880 km southwest of Okinotorishima</strong>, includes the newly commissioned <strong>Type 054B frigate CNS Luohe (545)</strong> &mdash; marking its <strong>first-ever deployment with a carrier strike group</strong> &mdash; along with <strong>Type 055 destroyer Wuxi (104)</strong>, <strong>Type 052D destroyer Kaifeng (124)</strong>, and <strong>fast combat support ship Hulunhu (901)</strong>. The Type 054B previously transited the <strong>Miyako Strait</strong> between Okinawa and Miyako Island on May 22 to join the group.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 260-sortie figure across five days represents a significant increase in the Liaoning&rsquo;s operational tempo and suggests the PLAN is stress-testing carrier air wing capabilities. The Type 054B&rsquo;s enhanced ASW suite &mdash; featuring integrated low-frequency sonar &mdash; is purpose-built to counter U.S. and Japanese submarine advantages. Its pairing with a Type 055 mirrors U.S. Navy CSG escort architecture. China&rsquo;s characterization of these operations as &ldquo;far-seas combat application&rdquo; (rather than routine training) signals a doctrinal shift toward blue-water power projection. This deployment coincides with the 31st MEU&rsquo;s continued absence from the Indo-Pacific.<br/><br/>
            <strong>Watch:</strong> Whether the Liaoning CSG alters course due to Typhoon Chanthu &bull; Duration of the deployment &bull; Additional Type 054Bs joining the formation &bull; JMSDF tracking operations &bull; Whether sortie rates increase further.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: COMMUNITY PARTNERSHIP FORUM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USFJ / Community Relations / Crime Prevention &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Community Partnership Forum Meets at Camp Foster; Joint Patrol Progress &ldquo;Too Early to Evaluate&rdquo;; New Sexual Assault Case Roils Relations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Okinawa Community Partnership Forum</strong> convened on <strong>May 29</strong> for <strong>2&frac12; hours at Ocean Breeze, Camp Foster</strong>, with <strong>19 U.S. military and consular representatives</strong> and <strong>18 prefectural government, police, and defense officials</strong>. The forum reviewed the progress of <strong>joint U.S.-Japanese police patrols</strong> in Okinawa city nightlife areas, operating since April 2025. However, <strong>Kazuhiro Tarama</strong>, director of Gov. Tamaki&rsquo;s executive office, stated that joint patrols have <strong>&ldquo;not reached a point where we can evaluate them&rdquo;</strong> and that &ldquo;the period is too short.&rdquo; USFJ plans to <strong>resume solo U.S. military police patrols</strong>, but dates and locations remain unannounced.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The forum occurs against the backdrop of a <strong>new sexual assault case</strong>: a U.S. soldier from the <strong>38th Air Defense Artillery Brigade at Kadena</strong> was referred to prosecutors on <strong>May 22</strong> for allegedly assaulting and injuring a female acquaintance outdoors on Okinawa&rsquo;s main island. The soldier, an unidentified man in his 20s, allegedly struck a roadside barrier while fleeing by car and failed to report the crash. This is the <strong>latest in a string of cases since late 2023</strong>. Separately, a Marine at Camp Hansen faces trial with an <strong>insanity defense based on a sleep disorder</strong> for a separate sexual assault charge.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community Relations Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The continuing pattern of sexual assault cases is the most corrosive issue in U.S.-Okinawa relations and will feature prominently in the September 13 gubernatorial race. The Forum&rsquo;s inability to assess patrol effectiveness after a full year suggests the program lacks metrics for success. A positive counterpoint: five Kadena airmen recently received Air Force Achievement Medals after rescuing an injured 79-year-old Japanese man on Ikei Island beach, demonstrating individual-level goodwill.<br/><br/>
            <strong>Watch:</strong> Whether solo MP patrols resume and in which areas &bull; Prosecution outcome for the 38th ADA soldier &bull; Camp Hansen Marine trial proceedings &bull; Okinawa gubernatorial candidates&rsquo; positions on the crime issue.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: F-15EX DELAY + F-22 GAP-FILL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">USAF / Air Power / Kadena Air Base &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-15EX Eagle II Delivery to Kadena Delayed to 2027; F-22 Raptors From Alaska and Virginia Fill the Gap</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Air Force Secretary <strong>Troy Meink</strong> testified before the Senate Armed Services Committee on <strong>May 21</strong> that the first <strong>F-15EX Eagle II</strong> multirole fighters will not arrive at Kadena Air Base until <strong>2027</strong> &mdash; almost a year behind the original spring 2026 schedule. The delay stems from a <strong>monthslong strike in 2025 at Boeing&rsquo;s St. Louis factory</strong>, which left the company behind on production. The Air Force originally planned to station <strong>36 F-15EXs at Kadena</strong> to replace the retired F-15C/D fleet.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          To fill the gap, two squadrons of <strong>F-22 Raptors</strong> arrived at Kadena in early May: the <strong>90th Expeditionary Fighter Squadron from JBER, Alaska</strong> and the <strong>27th EFS from JBLE, Virginia</strong>, with <strong>12 aircraft from Alaska</strong> touching down on May 3&ndash;4. Kadena is the Air Force&rsquo;s <strong>closest installation to Taiwan at approximately 450 miles</strong>, from which F-22s can reach Taiwan Strait operating areas in <strong>under one hour</strong>. The F-22 presence &mdash; while providing fifth-generation stealth capability that the F-15EX lacks &mdash; is rotational and does not represent the permanent fighter presence Kadena needs.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Air Power Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena has operated without a permanently assigned fighter squadron since the last F-15C/Ds departed. The F-22 rotations provide a more capable but temporary solution. The F-15EX delay to 2027 means Kadena will rely on rotational fighters for at least another year &mdash; a vulnerability in the context of growing PLAN air activity near the first island chain. Boeing&rsquo;s production challenges affect broader U.S. defense readiness beyond Okinawa.<br/><br/>
            <strong>Watch:</strong> Updated F-15EX delivery timeline &bull; Whether additional F-22 squadrons rotate through Kadena &bull; <strong>BA</strong> (Boeing) production recovery at St. Louis &bull; Impact of Typhoon Chanthu on Kadena flight operations &bull; Any acceleration of F-35 deployments to the Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: INDO-PACIFIC DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Persian Gulf; Indo-Pacific Gap &ldquo;Unfilled&rdquo;; Allies Compensate with Trilateral Exercises and Nansei Islands Drills</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only MEU permanently stationed in the Indo-Pacific &mdash; remains deployed to the <strong>Middle East enforcing a blockade of Iranian ports</strong> since departing Okinawa in March. Marine Commandant <strong>Gen. Eric Smith</strong> testified on <strong>May 18</strong> that the gap is <strong>&ldquo;unfilled,&rdquo;</strong> with approximately <strong>2,500 Marines and three warships</strong>, including <strong>USS Tripoli</strong> homeported at Sasebo, operating in the Strait of Hormuz. III MEF retains ground and air assets on Okinawa but lacks the amphibious ready group&rsquo;s rapid-response capability.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Allied forces are partially compensating: the <strong>U.S.-Japan-Australia trilateral air exercise</strong> on May 21 deployed <strong>F-22s, F-35As, F-15Js, F/A-18s, and a P-8A Poseidon</strong> east of Okinawa. The <strong>JGSDF conducted its first-ever Nansei Islands deployment drill</strong> (May 17&ndash;22) with <strong>300 soldiers on Ishigaki, Yonaguni, and Miyakojima</strong>, and <strong>20 Marines from the 12th MLR</strong> established the <strong>first U.S.-Japan coordination center on Miyakojima</strong> &mdash; only 220 miles from Taiwan. III MEF also graduated <strong>18 Marines from the Basic Drone Operator Course</strong> at Camp Schwab, advancing them to the <strong>Attack Drone Operator Course</strong> using <strong>FPV and Neros Archer drones</strong> &mdash; a direct application of Ukraine conflict lessons to Pacific island defense.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of the 31st MEU&rsquo;s absence, the Liaoning CSG&rsquo;s intensified operations, and F-15EX delivery delays creates a multi-domain capability gap around Okinawa. Allied exercises and new coordination centers are building long-term capacity but do not replace the 31st MEU&rsquo;s on-call responsiveness for Taiwan contingencies, NEOs, and HA/DR missions. A GSDF V-22 Osprey is planned to land at MCAS Futenma for the first time during Resolute Dragon 26 (June 20&ndash;30), deepening logistics interoperability.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Resolute Dragon 26 scope (June 20&ndash;30) &bull; Whether 12th MLR Miyakojima coordination center becomes permanent &bull; Lt. Gen. Turner&rsquo;s nomination to MARFORPAC and Watson&rsquo;s nomination to III MEF command &bull; Congressional pressure on DoD to restore Pacific posture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Gubernatorial Race Intensifies; Futenma Relocation Stalled at 30 Years; PFAS Contamination Reaches 60x Legal Limit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>September 13 gubernatorial election</strong> is shaping into a referendum on the U.S. military presence. Incumbent <strong>Gov. Denny Tamaki</strong>, 66, who opposes the Futenma-to-Henoko relocation, faces challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto LDP candidate who <strong>supports the relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is weakening after the Centrist Reform Alliance remains undecided on the base issue. The <strong>Futenma relocation passed its 30th anniversary</strong> in April with no resolution &mdash; the U.S. has stated it will not return Futenma unless Japan agrees to a longer runway at Henoko. Construction is not expected to complete until <strong>at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa prefecture surveys continue to reveal alarming <strong>PFAS contamination</strong> near U.S. bases. The highest level recorded &mdash; <strong>3,000 parts per trillion at Ijunga spring downstream of MCAS Futenma</strong> &mdash; is <strong>60 times Japan&rsquo;s legal standard</strong>. Near Kadena Air Base, levels of <strong>2,800 ppt (56x the limit)</strong> were found at Yara Hijaga. PFAS exceeded legal limits at <strong>31 of 44 sampling sites</strong> around U.S. bases. The U.S. military has <strong>denied all four of Okinawa&rsquo;s base access requests</strong> for water sampling since 2016, calling evidence of base-origin contamination &ldquo;insufficient.&rdquo; Meanwhile, service members received positive news: <strong>Overseas Housing Allowance increased $400&ndash;$500/month</strong> effective May 16 for all branches on Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A Koja victory in September would mark the first time in 8 years that Okinawa&rsquo;s governor supports the Henoko relocation, potentially accelerating construction but increasing grassroots friction. PFAS and the sexual assault cases are converging into a potent campaign issue that could galvanize anti-base sentiment. The OHA increase provides some quality-of-life relief for service members navigating Okinawa&rsquo;s rising off-base housing costs.<br/><br/>
            <strong>Watch:</strong> September 13 election polling &bull; CRA&rsquo;s formal position on Futenma &bull; PFAS litigation or diplomatic escalation &bull; Whether the OHA increase is sufficient given Okinawa&rsquo;s rental market inflation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Immediate: Typhoon Chanthu is the top operational concern.</strong> The strengthening typhoon is expected to make its closest approach to Okinawa on the night of June 1, with 7&ndash;8 meter seas and 68-knot winds. Expect TCCOR escalation by tomorrow. All base operations, flight schedules, and port activities should plan for 48&ndash;72 hours of disruption. The Liaoning CSG in the Western Pacific may also need to alter course.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Strategic: The deterrence gap is widening at the worst possible time.</strong> China&rsquo;s defense ministry openly confirmed the Liaoning group is conducting &ldquo;far-seas combat application&rdquo; training with 260 sorties in five days &mdash; directly challenging the U.S. posture vacuum left by the 31st MEU&rsquo;s Middle East deployment. The Type 054B&rsquo;s carrier group debut and Miyako Strait transit signal normalization of advanced PLAN operations near Okinawa. F-22 rotations and allied exercises compensate but cannot replace permanent force presence.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> The Community Partnership Forum&rsquo;s inability to evaluate joint patrol effectiveness after a year, combined with yet another sexual assault case, underscores the fragility of U.S.-Okinawa relations heading into the September gubernatorial election. PFAS contamination levels continue to set records with no access resolution in sight. The upcoming Resolute Dragon 26 exercise (June 20&ndash;30) will be the next major test of allied interoperability.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; The Diplomat &bull; Naval News &bull; South China Morning Post &bull; Global Times &bull; Air &amp; Space Forces Magazine &bull; Defence Blog &bull; DVIDSHUB &bull; Japan Joint Staff Office &bull; China Ministry of National Defense &bull; News on Japan &bull; AccuWeather &bull; Ryukyu Shimpo
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
