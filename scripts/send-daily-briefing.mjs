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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Regional Threats &bull; Weather &bull; Economy</p>
    </div>

    <!-- ===================== EVENT 1: RESOLUTE DRAGON 26 LIVE FIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Exercise / USMC &mdash; June 28 (Active)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: Marines and JGSDF Conduct Live-Fire Island Warfare Drills Across Nansei Chain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Exercise Resolute Dragon 26 &mdash; the annual bilateral U.S.-Japan island defense exercise &mdash; is currently <strong>active through June 30</strong>, operating across JGSDF bases and training areas on Kyushu and several Nansei Islands including <strong>Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong>. Led by <strong>III Marine Expeditionary Force</strong> and the <strong>JGSDF Western Army</strong>, this is the exercise&rsquo;s sixth year.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 28</strong>, 90 Marines from the <strong>12th Littoral Combat Team (12th MLR)</strong> and 300 soldiers from the JGSDF 8th Division executed a combined-arms live-fire exercise at Hijyudai Maneuver Area, Oita Prefecture. Japanese <strong>Type 19 155mm self-propelled howitzers</strong> and <strong>Type-16 Maneuver Combat Vehicles</strong> engaged targets alongside Marine infantry firing from armored personnel carriers. Marines deployed <strong>Neros Archer FPV drones</strong> (payload-capable) and a <strong>Stalker VXE30 ISR drone</strong> with infrared payload for night surveillance. Military observers from the <strong>UK, Philippines, France, and Australia</strong> attended. The exercise emphasizes <strong>Expeditionary Advanced Base Operations (EABO)</strong> &mdash; small, dispersed mobile groups operating within enemy missile range to seize islands and deny vessel access.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Participating U.S. forces:</strong> 3rd Marine Division, 3rd Marine Expeditionary Brigade, 1st Marine Air Wing, 12th Marine Littoral Regiment, U.S. Army 3rd Multi-Domain Task Force, U.S. Navy 7th Fleet, U.S. Air Force 18th Wing.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First time the JGSDF Ground Component Command focused exercises specifically on the Nansei Islands. Bilateral Communication Center established on Miyakojima &mdash; a first for the island. Demonstrates growing U.S.-Japan interoperability for First Island Chain defense in a Taiwan contingency scenario. Multi-national observer presence signals broadening coalition interest.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: NMESIS / MADIS DELIVERY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Weapons Systems / Force Design &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives NMESIS Anti-Ship Missiles and MADIS Air Defense at Camp Courtney</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong> formally received its first <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine Air Defense Integrated System (MADIS)</strong> platforms at <strong>Camp Courtney, Okinawa</strong> on June 23. The 12th MLR is now the <strong>second active Marine Littoral Regiment</strong> to field both systems, following the 3rd MLR in Hawaii.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>NMESIS</strong> is a remotely operated, ground-based anti-ship missile system mounted on a Joint Light Tactical Vehicle (JLTV), firing <strong>Naval Strike Missiles with a 115-mile range</strong>. It supports both semi-autonomous and fully autonomous launch modes for sea denial and littoral protection. <strong>MADIS</strong> is a short-range surface-to-air system enabling Low Altitude Air Defense Battalions to deter and neutralize <strong>UAS, fixed-wing, and rotary-wing threats</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Cornerstone of the Marine Corps&rsquo; <strong>Force Design 2030</strong> initiative. The 12th MLR is now fully equipped to operate as a distributed, low-signature force focused on sea denial within the First Island Chain. NMESIS gives Okinawa-based Marines organic anti-ship capability to threaten adversary naval vessels transiting the East China Sea, Miyako Strait, or Taiwan Strait approaches without relying on naval or air platforms.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINESE INCURSION SENKAKU ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Security / China / Senkaku Islands &mdash; June 24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Four Armed Chinese Coast Guard Vessels Enter Japanese Territorial Waters Near Senkaku Islands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Four <strong>Haijing-class Chinese coast guard ships</strong> entered Japanese territorial waters near the <strong>Senkaku Islands (Minamikojima)</strong> in Okinawa Prefecture on <strong>June 24</strong>. The vessels entered between 10:15&ndash;10:30 a.m. and departed around noon. The Japan Coast Guard documented and tracked the intrusion.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This latest incursion follows an escalating pattern of Chinese maritime provocations. In April, the PLA Eastern Theater Command launched <strong>combat readiness patrols in the East China Sea</strong> and sent warships near Okinawa after a JMSDF destroyer transited the Taiwan Strait. China&rsquo;s two aircraft carriers &mdash; <strong>Liaoning and Shandong</strong> &mdash; were observed operating simultaneously in the western Pacific for the first time. PM Takaichi&rsquo;s statements that a Taiwan conflict could constitute a <strong>&ldquo;survival-threatening situation&rdquo;</strong> (legally enabling Japanese military intervention) have sharply escalated Beijing-Tokyo tensions. China&rsquo;s Foreign Ministry demanded she retract the comments.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Elevated.</strong> Chinese gray-zone activity around Okinawa Prefecture continues to intensify. The simultaneous dual-carrier operations in the western Pacific represent a new capability threshold. J-15 fighter intercepts have closed to within <strong>45 meters</strong> of Japanese patrol aircraft. The Diaoyu/Senkaku waters, Taiwan Strait, and Miyako Strait remain high-risk zones for potential escalation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: FUTENMA / HENOKO UPDATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Base Relocation / Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Stalls Over Runway Dispute &mdash; Pentagon Refuses Handover Without Long Runway at Henoko</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The relocation of MCAS Futenma from Ginowan to Henoko remains mired in a <strong>runway-length dispute</strong>. The Pentagon has stated it <strong>will not return the Futenma site</strong> unless a runway comparable to Futenma&rsquo;s ~2,700-meter strip is secured. The current Henoko plan features two V-shaped runways of only <strong>~1,800 meters each</strong>. Japan and the U.S. have tentatively agreed that Marines could use a private-sector airport for long-runway needs, but details remain unresolved.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Construction at Henoko is not expected to be completed until <strong>at least 2033</strong> &mdash; roughly double the original timeline and cost estimates. The Japan government has acknowledged the delay, with officials stating they take the situation <strong>&ldquo;seriously.&rdquo;</strong> Local Okinawan opposition to the Henoko site remains strong, with the prefectural government continuing to push for the base to be relocated entirely off-island.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact on Operations</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            MCAS Futenma will remain <strong>operationally active through at least 2033</strong>. The runway dispute could extend the timeline further. Marines should expect continued operations from the current facility for the foreseeable future. Community relations remain a concern given ongoing protests and the base&rsquo;s location in a densely populated area surrounded by homes and schools.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: JAPAN AIR DEFENSE BUILDUP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Defense / Japan / Nansei Chain Buildup</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Accelerates Military Buildup Across Nansei Island Chain &mdash; Upgraded SAMs Planned for Yonaguni by 2031</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan plans to deploy <strong>upgraded Type-03 medium-range surface-to-air guided missiles</strong> to its westernmost island, <strong>Yonaguni</strong> (110 km from Taiwan), at Camp Yonaguni during fiscal 2030. This is part of a broader <strong>Nansei Island chain military buildup</strong> that includes reinforcing garrisons on Miyakojima, Ishigaki, and Amami Oshima with anti-ship and anti-aircraft missile batteries.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In May, the JGSDF Ground Component Command conducted its <strong>first-ever exercise focused specifically on the Nansei Islands</strong>, deploying 300 soldiers across Ishigaki, Yonaguni, and Miyakojima with 20 Marines from the 12th MLR establishing a <strong>first-of-its-kind bilateral communication center on Miyakojima</strong>. Japan&rsquo;s 2026 defense posture reflects PM Takaichi&rsquo;s stance that a Taiwan conflict could trigger Japan&rsquo;s <strong>collective self-defense</strong> provisions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is transforming the Nansei chain from a lightly defended archipelago into a <strong>layered anti-access/area-denial (A2/AD) barrier</strong> capable of constraining PLA Navy and Air Force operations between the East China Sea and the Pacific. Combined with the 12th MLR&rsquo;s NMESIS anti-ship capability and growing bilateral interoperability, the First Island Chain is becoming a serious contested zone for any Chinese military action toward Taiwan.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: YEN CRISIS & OKINAWA ECONOMY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy / Okinawa</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen at 40-Year Low Boosts Okinawa Tourism as Prefecture Introduces 2% Accommodation Tax</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen&rsquo;s slide past <strong>161 per dollar</strong> &mdash; its weakest since 1986 &mdash; is amplifying Okinawa&rsquo;s tourism boom. Okinawa was named <strong>Expedia&rsquo;s #2 Destination of the Year 2026</strong> after a 71% YoY surge in flight and accommodation searches. Tourist arrivals for FY2025 are expected to <strong>exceed 10 million for the first time</strong>, and the prefecture&rsquo;s economic assessment has been upgraded to <strong>&ldquo;recovering.&rdquo;</strong> The weak yen makes Okinawa exceptionally attractive for international visitors, particularly as a budget alternative to Hawaii.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa introduced Japan&rsquo;s first <strong>prefectural-level 2% accommodation tax</strong> in April 2026, expected to generate <strong>~7.8 billion yen annually</strong> for tourism infrastructure and sustainability initiatives. Major investment continues: <strong>Marubeni Corporation</strong> acquired a stake in Okinawa Tourist Service Inc., and the Junglia Okinawa theme park (opened July 2025) is driving both domestic and international visitors to the region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Local Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>USD/JPY at 161.60</strong> means dollar-denominated salaries stretch further on-island. However, import costs for consumer goods and fuel are rising &mdash; Japan&rsquo;s government has spent <strong>$70B+ on currency interventions</strong> without halting the decline. BOJ policy uncertainty adds further volatility risk. Nikkei 225 fell 2.8% on Friday.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Okinawa &mdash; June 28&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Mekkhala Clears Okinawa; JMA Declares Rainy Season Over; Heat Advisory for July 1</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Mekkhala (No. 7)</strong> passed near the main island of Okinawa on <strong>June 26</strong>, bringing <strong>sustained winds of 126 km/h</strong> with gusts to <strong>180 km/h</strong>, a central pressure of 975 hPa, and 7-meter waves. Flights were grounded and local transit severely disrupted June 25&ndash;27. U.S. military bases went to <strong>TCCOR 3</strong>. Direct impacts cleared by <strong>June 28 morning</strong>. The storm continued northeast toward the Amami Islands.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Rainy season declared over</strong> by JMA at approximately 2:00 PM on <strong>June 29</strong> &mdash; 22 days later than last year. Temperatures in Naha forecast to reach 32&deg;C on June 30. The JMA has issued early weather information for <strong>significantly higher temperatures</strong> in the Okinawa/Amami region from around <strong>July 1</strong>. Japan&rsquo;s 2026 typhoon season forecast calls for <strong>28 tropical cyclones</strong> (above average), with peak intensity expected September onward.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Seismic:</strong> Multiple moderate earthquakes near Okinawa in June &mdash; M4.5 near Yonaguni (Jun 13), M4.9 near Yaese (Jun 19), M4.6 near Miyakojima (Jun 22). No significant damage. The M7.8 Philippine earthquake on June 8 triggered tsunami advisories across Okinawa, with 195,000+ residents evacuated from coastal areas.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Situation Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture is rapidly modernizing.</strong> The 12th MLR&rsquo;s receipt of NMESIS and MADIS, combined with the ongoing Resolute Dragon 26 live-fire exercise, marks a significant capability upgrade for Okinawa-based forces. Marines now have organic anti-ship and counter-UAS capability purpose-built for distributed littoral warfare in the First Island Chain. This is Force Design 2030 becoming operational reality.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Chinese gray-zone pressure continues to intensify.</strong> The June 24 Senkaku incursion, dual-carrier western Pacific operations, and aggressive PLA Eastern Theater Command patrols represent a sustained effort to normalize Chinese military presence around Okinawa Prefecture. Japan&rsquo;s political rhetoric on Taiwan defense (PM Takaichi&rsquo;s &ldquo;survival-threatening situation&rdquo; framing) has sharply elevated Beijing-Tokyo tensions and increased the risk of miscalculation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Okinawa remains the fulcrum of Indo-Pacific deterrence.</strong> The convergence of U.S. Marine modernization, Japan&rsquo;s Nansei chain military buildup, growing bilateral interoperability, and Chinese counter-moves makes the prefecture the most strategically consequential piece of real estate in the western Pacific. The Futenma relocation stalemate (now pushed to 2033+) means current basing arrangements will persist for the foreseeable future.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Defense News &bull; USNI News &bull; Task and Purpose &bull; DVIDS &bull; Marines.mil &bull; The Japan Times &bull; Militarnyi &bull; The Diplomat &bull; Foreign Policy &bull; Army Recognition &bull; Japan Meteorological Agency &bull; Earthquake Track &bull; Expedia &bull; Breaking Travel News &bull; Nippon.com &bull; PBS News &bull; CFR
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
