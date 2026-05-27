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

    <!-- ===================== EVENT 1: SEXUAL ASSAULT CASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">SOFA / Base Relations / Criminal Incident &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Army Soldier at Kadena Referred to Prosecutors for Sexual Assault on Okinawan Woman</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefectural Police referred a sexual assault case to the <strong>Naha Public Prosecutors Office on May 23</strong> involving a U.S. Army soldier assigned to <strong>Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th Air Defense Artillery Brigade</strong> at <strong>Kadena Air Base</strong>. The soldier &mdash; an unidentified man in his 20s &mdash; is accused of sexually assaulting a woman older than 18 outdoors on the main island of Okinawa in <strong>late April</strong> and inflicting injuries requiring several weeks to heal when the victim struck a roadside barrier while fleeing.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki&rsquo;s</strong> office contacted the Okinawa Defense Bureau, stating the incident was <strong>&ldquo;extremely regrettable&rdquo;</strong> and requesting stronger preventive measures from the U.S. military. The case follows a string of sexual assault convictions involving U.S. service members since December 2023, including <strong>Senior Airman Brennon Washington</strong> (kidnapping/assault of a minor) and <strong>Marine Lance Cpl. Jamel Clayton</strong> (strangulation/attempted assault). The soldier remains at Kadena Air Base pending prosecution.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community &amp; Political Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This incident compounds tensions ahead of the September 13 gubernatorial election. The pattern of U.S. servicemember crimes is a politically explosive issue that Tamaki&rsquo;s anti-base camp will leverage against the LDP-backed challenger Genta Koja. Each incident strengthens public opposition to the U.S. military presence and complicates the Futenma-to-Henoko relocation process.<br/><br/>
            <strong>Watch:</strong> Whether Naha prosecutors file formal charges &bull; Any liberty or curfew restrictions imposed by USFJ &bull; Protest activity near Kadena Air Base &bull; Gubernatorial campaign rhetoric around U.S. crimes.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: LIAONING CSG + TYPE 054B ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">PLAN / Naval Intelligence / Western Pacific &mdash; May 25&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Liaoning Carrier Strike Group Detected 880 km from Okinotorishima with First-Ever Type 054B Deployment; USS George Washington Departs Yokosuka</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Liaoning carrier strike group</strong> was detected on <strong>May 25 approximately 880 km southwest of Okinotorishima</strong>, operating in the Western Pacific after transiting south through the Taiwan Strait on April 20. The formation includes carrier <strong>CV-16 Liaoning</strong>, cruiser <strong>CNS Wuxi (104)</strong>, destroyer <strong>CNS Kaifeng (124)</strong>, frigate <strong>CNS Luohe (545)</strong>, and fast combat support ship <strong>CNS Hulunhu (901)</strong>. The <strong>Type 054B (Jiangkai III-class) frigate Luohe</strong> marks the <strong>first confirmed deployment of a Type 054B with a Chinese carrier strike group</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Type 054B features <strong>enhanced anti-submarine warfare capabilities</strong> with an integrated low-frequency sonar suite &mdash; purpose-built to counter U.S. and Japanese submarine advantages. China has begun construction of a <strong>fourth hull</strong> at Hudong Changxingdao shipyard. Separately, <strong>USS George Washington (CVN-73)</strong> departed <strong>Yokosuka on May 24</strong> for a spring patrol in the <strong>Philippine Sea</strong>, partially restoring carrier-level deterrence in the Western Pacific while the 31st MEU remains in the Middle East.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of the Liaoning CSG near the Philippine Sea and USS George Washington&rsquo;s departure from Yokosuka creates a potential dual-carrier dynamic in the Western Pacific. The PLAN&rsquo;s integration of the Type 054B into its carrier group signals accelerated blue-water ASW capability &mdash; the Miyako Strait between Okinawa and Miyako Island remains the most strategically significant chokepoint for PLAN Pacific access. The deployment&rsquo;s timing coincides with the 31st MEU&rsquo;s absence.<br/><br/>
            <strong>Watch:</strong> Liaoning CSG track relative to the Philippine Sea &bull; USS George Washington patrol area and duration &bull; JMSDF tracking operations &bull; Any PLAN submarine activity through the Miyako Strait &bull; Whether additional Type 054Bs join the formation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Indo-Pacific &mdash; May 18 (Ongoing)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Confirms &ldquo;Unfilled&rdquo; Indo-Pacific Deterrence Gap; 31st MEU Still Enforcing Iran Blockade</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee on May 18 that the Corps has left a gap <strong>&ldquo;unfilled&rdquo;</strong> in the Indo-Pacific after redeploying the <strong>31st Marine Expeditionary Unit</strong> from Okinawa to the Middle East. Smith stated: <strong>&ldquo;When you move an amphibious ready group/Marine expeditionary unit, you simply don&rsquo;t replace it.&rdquo;</strong> The 31st MEU &mdash; approximately <strong>2,500 Marines aboard USS Tripoli, USS San Diego, and USS New Orleans</strong> homeported at Sasebo &mdash; has been <strong>enforcing a blockade of Iranian ports since April 13</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Former senior U.S. officials have warned the redeployment <strong>&ldquo;dangerously weakens deterrence against Beijing&rdquo;</strong> at a time when the PLA edges toward its reported 2027 Taiwan readiness timeline. The 31st MEU is the <strong>only MEU permanently stationed in the Indo-Pacific</strong>, and its absence represents the most significant force posture gap in the region since the unit&rsquo;s establishment. III MEF on Okinawa retains ground and air assets but lacks the amphibious ready group&rsquo;s rapid-response capability for Taiwan contingencies, humanitarian assistance, and noncombatant evacuation operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China is exploiting this gap: the Liaoning CSG&rsquo;s Western Pacific deployment with advanced platforms coincides with the 31st MEU&rsquo;s absence. The USS Boxer ARG with 11th MEU arrived in Singapore but is not a permanent Indo-Pacific asset. Congressional pressure is mounting on DoD to restore Pacific posture.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Any temporary MEU rotation to fill the gap &bull; Lt. Gen. Roger Turner&rsquo;s nomination to lead MARFORPAC (current III MEF commander) signaling leadership transition at Okinawa&rsquo;s top Marine command &bull; Lt. Gen. Watson nominated to take III MEF command.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: TRILATERAL EXERCISES + NANSEI ISLANDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan-Australia / Air Power / Nansei Islands &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trilateral Air Exercise East of Okinawa Wraps Up; First U.S.-Japan Coordination Center Established on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S., Japan, and Australia completed a <strong>trilateral air exercise in airspace east of Okinawa</strong> last week. The U.S. deployed <strong>3 F-22 Raptors, 4 F-35A Lightning IIs, 2 KC-135 tankers, 2 F/A-18 Hornets, and 1 KC-130 tanker</strong>. Japan deployed <strong>4 F-15Js and an RC-2 electronic intelligence aircraft</strong>. Australia contributed a <strong>P-8A Poseidon maritime patrol aircraft and KC-30A tanker</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, the <strong>JGSDF Ground Component Command</strong> completed a <strong>first-of-its-kind exercise</strong> (May 17&ndash;22) deploying <strong>300 soldiers</strong> to remote southwestern islands near Taiwan &mdash; <strong>Ishigaki, Yonaguni, and Miyakojima</strong>. Twenty Marines from the <strong>12th Marine Littoral Regiment</strong> joined command post training on Miyakojima, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island &mdash; only 220 miles from Taiwan. A <strong>GSDF V-22 Osprey</strong> will land at <strong>MCAS Futenma for the first time</strong> during <strong>Resolute Dragon 26</strong> (June 20&ndash;30). Russian IL-20 ELINT aircraft were detected near Honshu on May 21&ndash;22, likely monitoring the exercises.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 12th MLR&rsquo;s coordination center on Miyakojima establishes a new operational footprint for Taiwan contingency planning. Japan&rsquo;s GSDF Osprey use of U.S. bases deepens logistics interoperability. III MEF drone training at Camp Schwab (18 Marines completed the Basic Drone Operator Course, building FPV attack drones with lessons from Ukraine) adds organic anti-ship capability for distributed maritime operations.<br/><br/>
            <strong>Watch:</strong> Resolute Dragon 26 scope (June 20&ndash;30) &bull; Whether the Miyakojima coordination center becomes permanent &bull; Chinese response to JGSDF island presence &bull; Attack Drone Operator Course expansion across III MEF.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Economy &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tamaki&rsquo;s Coalition Strained Ahead of September Election; PFAS at 56x Legal Limit; Japan Intervenes to Prop Up Yen</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gov. Denny Tamaki&rsquo;s</strong> support is <strong>wavering</strong> ahead of Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. The 66-year-old anti-base relocation incumbent faces challenger <strong>Genta Koja</strong>, 42, a former Naha deputy mayor running as the de facto LDP candidate who <strong>supports the Futenma-to-Henoko relocation</strong>. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is strained after the Centrist Reform Alliance (CRA) remains undecided on the relocation issue. The <strong>MCAS Futenma relocation</strong> passed its <strong>30th anniversary</strong> in April; construction is not expected to complete until <strong>at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa prefecture surveys found <strong>PFAS contamination up to 56 times Japan&rsquo;s legal limit</strong> (2,800&ndash;3,000 parts per trillion) in groundwater near Kadena Air Base and MCAS Futenma. PFAS exceeded the 50 ppt standard at <strong>31 of 44 sampling sites</strong> around U.S. bases. The U.S. military has <strong>denied all four base-access requests</strong> for water sampling since 2016. Economically, Japan&rsquo;s Ministry of Finance spent an estimated <strong>&yen;5.48 trillion (~$35 billion)</strong> intervening to support the yen in late April after it weakened past 160/USD &mdash; the first yen-buying operation since July 2024. Okinawa&rsquo;s tourism sector remains strong with <strong>visitor arrivals up 18.6% year-on-year</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Economic Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The latest sexual assault case (Event 1) will intensify anti-base sentiment heading into September. A Koja victory would mark the first time in 8 years that Okinawa&rsquo;s governor supports the Henoko plan. The PFAS crisis is a growing flashpoint &mdash; Okinawa prefectural authorities consider it &ldquo;highly probable&rdquo; that U.S. bases are the contamination source. PM Takaichi has pledged to revise Japan&rsquo;s national security strategy in 2026 ahead of schedule.<br/><br/>
            <strong>Watch:</strong> CRA&rsquo;s position on Futenma relocation &bull; September 13 election polling &bull; PFAS litigation escalation &bull; BOJ rate decisions and further yen intervention &bull; Consumer price inflation (forecast 2.5&ndash;3.0% for FY2026).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: CYBER THREATS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Cyber / Intelligence / Regional Threat &mdash; May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Linked Mustang Panda Targets Japan; Okinawa Tourist Service Customer Database Exposed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China-linked threat group <strong>Mustang Panda</strong> conducted a <strong>long-running cyber espionage campaign</strong> targeting organizations across the Asia-Pacific region and Japan from <strong>September 2025 through April 2026</strong>, primarily focusing on the finance sector. Cybersecurity Minister <strong>Hisashi Matsumoto</strong> has been tasked with evaluating whether government systems can effectively detect and patch vulnerabilities, with calls for a broader review of national cybersecurity readiness across public infrastructure.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, a threat actor advertised the alleged sale of a <strong>large-scale customer database</strong> associated with <strong>Okinawa Tourist Service (OTS)</strong> &mdash; a major travel and vehicle rental provider operating across the prefecture. The breach potentially exposes personal data of tourists and residents who used OTS services. Japanese firms continue to suffer from ransomware campaigns, with attacks becoming increasingly automated according to CYFIRMA&rsquo;s weekly intelligence report (May 22).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Cyber Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Mustang Panda&rsquo;s campaign aligns with broader Chinese intelligence collection against Japan&rsquo;s financial sector and defense-adjacent industries. The OTS database breach is notable because Okinawa&rsquo;s tourism infrastructure processes data on U.S. military families and DoD civilians who use local rental and travel services. PM Takaichi&rsquo;s planned revision of Japan&rsquo;s national security strategy includes enhanced cyber defense provisions.<br/><br/>
            <strong>Watch:</strong> Attribution confirmation for OTS breach &bull; Mustang Panda TTPs targeting defense contractors &bull; Japan&rsquo;s active cyber defense legislation progress &bull; USFJ cybersecurity posture updates.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Tropical Cyclone Advisory &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi (TD 06W) Tracking Toward Okinawa; TCCOR-4 Expected Monday</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Tropical Depression 06W (Jangmi)</strong> was located approximately <strong>1,160 miles south-southeast of Kadena Air Base</strong> as of 0300L May 28, tracking <strong>north-northwest at 15 mph</strong> with sustained winds of <strong>35 mph and gusts to 45 mph</strong>. The Joint Typhoon Warning Center projects Jangmi will <strong>strengthen to Category 2-equivalent</strong> (105 mph sustained, 130 mph gusts) by early Sunday before weakening to <strong>Category 1-equivalent</strong> as it approaches Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          JTWC forecasts the closest approach at approximately <strong>60 miles east of Kadena early Tuesday morning</strong>. U.S. bases on Okinawa are expected to enter <strong>TCCOR-4 (Tropical Cyclone Condition of Readiness 4) on Monday</strong>. Flight operations, outdoor training, and base services may be affected. All personnel should monitor updates from Kadena Air Base and MCAS Futenma weather offices. The rainy season front remains active across the region with heavy rain and thunderstorms.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa faces converging pressures across every domain.</strong> The latest sexual assault case involving a Kadena-based soldier compounds the political toxicity of the U.S. military presence 109 days before the gubernatorial election. Meanwhile, the Liaoning carrier strike group &mdash; now fielding China&rsquo;s advanced Type 054B frigate for the first time &mdash; operates in the Western Pacific as the 31st MEU remains stuck enforcing an Iran blockade, leaving an acknowledged and &ldquo;unfilled&rdquo; deterrence gap.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Allied countermeasures are real but insufficient.</strong> USS George Washington&rsquo;s departure from Yokosuka partially restores carrier presence. Trilateral exercises, the first U.S.-Japan coordination center on Miyakojima, and III MEF&rsquo;s drone warfare pipeline demonstrate commitment to island defense. But these are preparation activities, not a substitute for the amphibious rapid-response capability now absent from the Pacific.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Near-term operational risk:</strong> Typhoon Jangmi is forecast to pass within 60 miles of Kadena as a Category 1-equivalent storm early Tuesday. TCCOR-4 is expected Monday. PFAS contamination at 56x legal limits continues to erode community trust. Japan&rsquo;s &yen;5.48 trillion yen intervention signals fiscal stress. And Mustang Panda&rsquo;s espionage campaign against Japanese institutions, combined with the OTS database breach, highlights the cyber dimension of the threat to Okinawa.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; Naval News &bull; The Diplomat &bull; CYFIRMA &bull; Military.com &bull; Defence Blog &bull; Newsweek &bull; CGTN &bull; Task &amp; Purpose &bull; CNBC &bull; Al Jazeera &bull; Japan Ministry of Defense &bull; Joint Typhoon Warning Center &bull; Nikkei Asia &bull; Ryukyu Shimpo &bull; Global Times
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
