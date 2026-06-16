#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const FALLBACK_RECIPIENTS = [
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
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">\${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Defense Posture &bull; Regional Risk</p>
    </div>

    <!-- ===================== EVENT 1: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise / Indo-Pacific &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: Major USMC-JGSDF Exercise Launches June 20 Across Okinawa and Kyushu &mdash; 9,600 Personnel, NMESIS and JGSDF Ospreys Deploying</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The sixth iteration of <strong>Exercise Resolute Dragon</strong> kicks off <strong>June 20&ndash;30</strong>, bringing together approximately <strong>7,300 JGSDF troops and 2,300 U.S. Marines</strong> from III Marine Expeditionary Force. The bilateral exercise will span JGSDF bases and training areas across <strong>Oita, Saga, Kumamoto, and Kagoshima prefectures</strong> on Kyushu, plus <strong>Tokuno Island, Amami Oshima, Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong>. JASDF Naha Air Base on Okinawa will also participate.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Notably, <strong>three JGSDF V-22 Ospreys will deploy to MCAS Futenma</strong> for the first time, then fly to Miyako and Ishigaki islands &mdash; a first for Japanese Ospreys at those locations. The exercise will feature advanced Marine Corps Force Design systems including the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and the <strong>Marine Air Defense Integrated System (MADIS)</strong>. The exercise simulates <strong>remote island defense operations</strong> directly aligned with First Island Chain contingencies.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force Posture:</strong> Expect increased military air and ground traffic across Okinawa bases June 20&ndash;30. MCAS Futenma will host JGSDF Ospreys alongside USMC assets. Noise and traffic advisories likely for communities near Futenma, Kadena, and Camp Hansen.<br/><br/>
            <strong>Deterrence Signal:</strong> The exercise is a direct response to China&rsquo;s growing assertiveness in the East and South China Seas. Deployment of NMESIS anti-ship missiles to remote islands signals enhanced stand-in force capability along the Nansei chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: INDO-PACIFIC SECURITY GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Strategic &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Still Deployed to Middle East; Commandant Smith Tells Congress Indo-Pacific Gap Is &ldquo;Unfilled&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Okinawa-based <strong>31st Marine Expeditionary Unit (~2,500 Marines)</strong> and the amphibious assault ship <strong>USS Tripoli</strong> remain deployed to the Middle East supporting <strong>Operation Epic Fury</strong> since departing in mid-March. The unit has been enforcing a blockade against Iranian ports and participated in the boarding of the Iranian-flagged vessel <em>Touska</em> on April 20.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On May 18, Marine Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee: <em>&ldquo;Well, frankly, the gap is unfilled. When you move an ARG/MEU, you simply don&rsquo;t replace it.&rdquo;</em> The 31st MEU is the <strong>only permanently deployed Marine expeditionary unit in the Indo-Pacific</strong>. The USS Boxer ARG and 11th MEU from California are being surged to 7th Fleet as a partial mitigation, but defense experts warn the absence creates a <strong>critical rapid-response vacuum on the First Island Chain</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Readiness:</strong> Okinawa&rsquo;s forward-deployed amphibious capability is significantly degraded. No timeline for 31st MEU return has been announced. The Resolute Dragon 26 exercise (above) partially compensates by demonstrating bilateral capacity, but the absence of a dedicated MEU limits real-world crisis response options in the Taiwan Strait, Senkaku Islands, and Korean Peninsula contingencies.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SEXUAL ASSAULT CASE DROPPED ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Legal / SOFA / Community Relations &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Naha Prosecutors Drop Sexual Assault Case Against U.S. Soldier at Kadena; Timing Sensitive Ahead of Memorial Day</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Naha District Public Prosecutors Office</strong> on June 11 declined to indict a U.S. Army soldier accused of sexually assaulting a woman in Okinawa in April 2026. The soldier, an unidentified man in his 20s assigned to <strong>Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th ADA Brigade at Kadena Air Base</strong>, had been accused of sexual assault and bodily injury. Prosecutors did not disclose the reason for dropping the case.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The decision comes amid a <strong>historically sensitive period</strong> for U.S.-Okinawa relations. In February 2026, Japan&rsquo;s Supreme Court dismissed the final appeal of a U.S. airman convicted of sexual assault on Okinawa. The series of cases in 2024&ndash;2026 has fueled anti-base sentiment. With <strong>Okinawa Memorial Day on June 23</strong> approaching &mdash; a day that historically amplifies public discourse on the U.S. military presence &mdash; this remains a closely watched issue for base relations and SOFA dynamics.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Base Relations:</strong> Liberty restrictions and heightened good-order-and-discipline messaging may follow. Expect increased media coverage and potential protests in the lead-up to June 23 Memorial Day ceremonies. Okinawa Prefectural Government may use the case to reinforce demands for base burden reduction in upcoming gubernatorial campaign.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Military / Infrastructure / Quality of Life &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Complex Opens at Camp Hansen; 1,096 Marines Get Private Rooms Starting July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Installations Pacific commander <strong>Maj. Gen. Brian Wolford</strong> and Japanese officials cut the ribbon on June 5 at Camp Hansen&rsquo;s new <strong>$320 million barracks complex</strong> (Buildings 2302, 2303, 2304). The three buildings will house <strong>1,096 unaccompanied enlisted Marines through the rank of sergeant</strong>, with each service member receiving a <strong>private 155-sq-ft bedroom</strong> connected to a shared bathroom, kitchenette, and in-unit washer/dryer within 710-sq-ft units.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Construction broke ground in March 2022 and completed in May 2026. Gen. Wolford noted the facility <em>&ldquo;is the first domino that is starting the rest of the construction on Camp Hansen&rdquo;</em> &mdash; replacing six older facilities as part of <strong>Camp Hansen&rsquo;s broader consolidation plan and Okinawa base realignment</strong>. First residents move in <strong>July 2026</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Quality of Life:</strong> Addresses longstanding barracks quality issues that have contributed to retention challenges. The private-room model aligns with DoD&rsquo;s post-2023 barracks reform initiative. Consolidation of six older facilities into three modern buildings also supports Camp Hansen&rsquo;s footprint reduction, a key element of the SACO/Okinawa Consolidation Plan.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FUTENMA/HENOKO & GOVERNOR RACE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Politics / Base Relocation / Governance &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Stalls Over Runway Dispute; Gov. Tamaki&rsquo;s Third-Term Bid Faces Headwinds as Sept. 13 Election Nears</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Futenma-to-Henoko relocation</strong> remains in limbo 30 years after the original agreement. The U.S. Department of Defense has stated it <strong>will not return the Futenma site unless a long runway is secured at the Henoko replacement facility</strong>. Construction at Henoko is now expected to continue <strong>until at least 2033</strong>. Tokyo maintains the relocation is &ldquo;the only viable solution&rdquo; but local opposition persists.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>Gov. Denny Tamaki&rsquo;s bid for a third term</strong> faces uncertainty ahead of the <strong>September 13 gubernatorial election</strong>. The newly formed <strong>Centrist Reform Alliance (CRA)</strong> &mdash; a coalition of the CDP and Komeito &mdash; is split on the Henoko issue, with Komeito tolerating the relocation plan while Tamaki opposes it. The political realignment following February&rsquo;s Lower House elections has complicated Tamaki&rsquo;s coalition-building.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Base Policy:</strong> The runway dispute introduces a new wrinkle &mdash; if the U.S. insists on a longer runway than currently planned, it could delay Futenma&rsquo;s return even further and energize anti-base candidates. The September election outcome will determine whether Okinawa&rsquo;s prefectural government continues its legal and political opposition to Henoko construction or pivots toward accommodation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: NATURAL DISASTERS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Weather / Natural Disaster / Force Protection &mdash; June 1&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi and Mindanao Tsunami Advisory Hammer Okinawa in Back-to-Back Events; 2026 Typhoon Season Forecasted as Severe</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (No. 6)</strong> battered Okinawa June 1&ndash;3, shutting down <strong>all flights at Naha, Miyako, and Ishigaki airports</strong>, injuring 16+ people, cutting power to thousands of homes, and suspending rail and sea transport. The typhoon then tracked northeast across Kyushu and triggered <strong>Tokyo&rsquo;s first-ever Level 4 danger alert</strong>. Mie Prefecture recorded an entire month&rsquo;s rainfall in a single day.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Days later, a <strong>7.8-magnitude earthquake off Mindanao</strong> on June 8 triggered tsunami advisories from Okinawa to Tokyo, forcing evacuations of <strong>195,000+ residents</strong>. Minor tsunami waves were recorded in Okinawa around 12:58 p.m.; the advisory was lifted by 4:50 p.m. with no structural damage. Forecasters warn 2026 could see <strong>up to 28 tropical cyclones and 14 landfalls</strong> &mdash; well above average &mdash; with peak season ahead.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Protection Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>TCCOR Readiness:</strong> With the severe typhoon season forecast, expect frequent Tropical Cyclone Condition of Readiness (TCCOR) escalations through November. Back-to-back natural disaster events in early June stress-tested emergency response coordination between U.S. bases and Japanese authorities. Tourism disruptions reduced off-base economic activity but recovery has been swift.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: DEFENSE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Defense / Regional Security / China-Taiwan &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Bolsters First Island Chain: Type 03 Missiles Planned for Yonaguni; JGSDF Nansei Islands Exercise Completed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Defense Minister confirmed plans to deploy <strong>Type 03 medium-range surface-to-air missiles to Yonaguni Island</strong> &mdash; just 110 km from Taiwan &mdash; by 2030. The systems are designed to intercept aircraft and ballistic missiles. Beijing has protested the deployment, claiming sovereignty over Yonaguni.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JGSDF&rsquo;s <strong>Ground Component Command</strong> completed a Nansei Islands exercise <strong>May 17&ndash;22</strong>, practicing troop deployment and supply transport across <strong>Ishigaki, Yonaguni, and Miyakojima</strong> with command-and-control integration with U.S. Marines. This was the <strong>first time Japan&rsquo;s highest operational ground command</strong> focused training specifically on the southwestern islands near Taiwan. Japan&rsquo;s next five-year defense plan is expected to be largely complete by late 2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Deterrence Posture:</strong> Japan is systematically fortifying its southwestern island chain with anti-air, anti-ship, and ground force capabilities. Combined with the Resolute Dragon exercise and ongoing U.S. Force Design modernization, the Nansei chain is transforming from a permissive environment to a contested defensive zone. This fundamentally reshapes the military calculus for any Taiwan Strait contingency.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming Events &mdash; Next 14 Days</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700; width: 100px;">Jun 18</td>
          <td style="color: #bbb; padding: 8px 0;"><strong>Haarii Festival (Yukkanuhi)</strong> &mdash; Traditional dragon boat races at multiple locations across Okinawa. Cultural significance and potential off-base liberty event.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Jun 20&ndash;30</td>
          <td style="color: #bbb; padding: 8px 0;"><strong>Exercise Resolute Dragon 26</strong> &mdash; Major USMC-JGSDF bilateral exercise across Okinawa and Kyushu. ~9,600 personnel. JGSDF Ospreys at Futenma.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Jun 23</td>
          <td style="color: #bbb; padding: 8px 0;"><strong>Okinawa Memorial Day (Irei no Hi)</strong> &mdash; Prefectural holiday commemorating Battle of Okinawa. Main ceremony at Peace Memorial Park, Itoman at 11:50 a.m. Island-wide moment of silence at noon. Schools closed. Traffic restrictions near memorial park. Historically amplifies public discourse on U.S. military presence.</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Jul 2026</td>
          <td style="color: #bbb; padding: 8px 0;"><strong>Camp Hansen New Barracks Move-In</strong> &mdash; First residents begin occupying the new $320M barracks complex.</td>
        </tr>
      </table>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Operational Picture</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The 31st MEU gap remains the defining force posture issue.</strong> Okinawa&rsquo;s only permanently forward-deployed MEU is still in the Middle East with no announced return date. Resolute Dragon 26 and the Boxer ARG surge provide partial mitigation, but rapid-response capability for a Taiwan Strait or Korean Peninsula contingency is materially degraded. Gen. Smith&rsquo;s candid congressional testimony underscores the severity.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan is accelerating First Island Chain hardening.</strong> The convergence of Nansei Islands exercises, Yonaguni missile deployments, JGSDF Osprey integration at Futenma, and the upcoming Resolute Dragon exercise signals a deliberate shift toward a distributed, resilient defensive posture. This transforms Okinawa from a rear-area staging base into a forward-edge contested zone.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Political and community dynamics demand attention.</strong> The dropped sexual assault case, approaching Memorial Day, the Futenma runway dispute, and Governor Tamaki&rsquo;s uncertain re-election create a volatile mix for base relations. The September gubernatorial election could shift Okinawa&rsquo;s political stance on U.S. basing.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Marine Corps Times &bull; USNI News &bull; Japan Times &bull; DVIDSHUB &bull; Atlantic Council &bull; AEI China-Taiwan Update &bull; Al Jazeera &bull; CSIS &bull; NHK &bull; Military.com &bull; Naval News &bull; Taiwan News &bull; Travel and Tour World &bull; Nippon.com &bull; Japan Today &bull; U.S. Embassy Tokyo
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

function sendEmail(recipients) {
  const payload = JSON.stringify({
    from: 'World Monitor <onboarding@resend.dev>',
    to: recipients,
    subject: `[World Monitor] Okinawa Regional Intelligence Briefing — ${today}`,
    html,
  });

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
  return { httpCode, body, recipients };
}

try {
  const primary = sendEmail(RECIPIENTS);
  if (!primary.httpCode.startsWith('2')) {
    console.warn(`Primary send failed (${primary.httpCode}): ${primary.body}`);
    console.log('Attempting fallback to verified email...');
    const fallback = sendEmail(FALLBACK_RECIPIENTS);
    if (!fallback.httpCode.startsWith('2')) {
      console.error(`Fallback also failed (${fallback.httpCode}): ${fallback.body}`);
      process.exit(1);
    }
    const data = JSON.parse(fallback.body);
    console.log(`Email sent to fallback: ${FALLBACK_RECIPIENTS.join(', ')}`);
    console.log('Resend ID:', data.id);
    console.log(`\nNote: Resend testing mode only allows sending to the verified account email.`);
    console.log(`To send to ${RECIPIENTS.join(', ')}, verify a domain at resend.com/domains.`);
  } else {
    const data = JSON.parse(primary.body);
    console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
    console.log('Resend ID:', data.id);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
