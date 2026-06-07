#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
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
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">\${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Security &bull; Regional Defense &bull; Economic</p>
    </div>

    <!-- ===================== ITEM 1: RESOLUTE DRAGON EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MILITARY</span>
          <span style="color: #666; font-size: 11px;">USMC / JGSDF / Exercise &mdash; June 3, 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Resolute Dragon (Jun 20&ndash;30): Japan&rsquo;s V-22 Ospreys to Operate from MCAS Futenma for First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three <strong>Japan Ground Self-Defense Force (JGSDF) V-22 Ospreys</strong> will deploy to Marine Corps Air Station (MCAS) Futenma during Exercise Resolute Dragon, marking the <strong>first time Japanese Ospreys have operated from a U.S. Marine base on Okinawa</strong>. The tiltrotor aircraft will fly missions to <strong>Miyako and Ishigaki islands</strong> &mdash; the first Japanese Osprey operations at Miyako, located approximately 220 miles east of Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise will feature advanced Marine Corps systems including <strong>NMESIS</strong> (Navy-Marine Expeditionary Ship Interdiction System) and <strong>MADIS</strong> (Marine-Air Defense Integrated System), both key platforms in the Force Design 2030 modernization effort. This signals deepening U.S.-Japan interoperability in the southwestern island chain and demonstrates enhanced anti-access/area-denial (A2/AD) capabilities along the First Island Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First combined U.S.-Japan Osprey operations from Okinawa. NMESIS and MADIS deployment signals live-fire A2/AD rehearsal along the Taiwan contingency corridor. Demonstrates Alliance commitment to Nansei Islands defense posture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 2: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MILITARY</span>
          <span style="color: #666; font-size: 11px;">USMC / Infrastructure &mdash; June 5, 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Complex Opens at Camp Hansen; Marines Move In July 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Installations Pacific commander <strong>Maj. Gen. Brian Wolford</strong> cut the ribbon on a new <strong>$320 million bachelor enlisted quarters complex</strong> at Camp Hansen on June 5. The facility houses <strong>1,096 unaccompanied enlisted Marines</strong> (through the rank of sergeant), with each resident receiving a private 155-square-foot bedroom. Marines are expected to begin moving in during <strong>July 2026</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The project was <strong>funded by the Japanese government</strong> under the Defense Policy Review Initiative (DPRI). This represents the largest single quality-of-life infrastructure investment for enlisted Marines on Okinawa in recent years, addressing long-standing barracks quality concerns and supporting force retention.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan-funded DPRI project signals sustained host-nation commitment to U.S. force posture on Okinawa. Addresses Marine Corps barracks crisis. Move-in timeline: July 2026.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 3: TYPHOON JANGMI ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WEATHER</span>
          <span style="color: #666; font-size: 11px;">Natural Hazard / Force Protection &mdash; June 1&ndash;2, 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Passes Directly Over Okinawa; U.S. Bases Weather Storm with Limited Disruptions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi</strong> &mdash; Okinawa&rsquo;s first major storm in three years &mdash; passed directly over the island on the evening of June 1, bringing <strong>wind gusts up to 80 mph</strong> to MCAS Futenma. U.S. bases moved to <strong>&ldquo;all clear&rdquo; status at 10:38 a.m. on June 2</strong> with limited disruptions reported.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At least <strong>16 people were injured</strong> across Okinawa and Kagoshima prefectures. Nearly <strong>48,000 homes lost power</strong>. No significant damage to U.S. military installations was reported.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All U.S. installations operational. Monitor for residual infrastructure impacts in local communities. Typhoon season is now active &mdash; expect additional storms through October.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 4: NANSEI ISLANDS DEFENSE BUILDUP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">DEFENSE</span>
          <span style="color: #666; font-size: 11px;">JGSDF / Nansei Islands / Regional Security &mdash; May&ndash;June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Accelerates Nansei Islands Militarization: Anti-Ship Missiles on Ishigaki, Drones and EW on Yonaguni</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JGSDF conducted its <strong>first exercise focused specifically on islands close to Taiwan</strong> (May 17&ndash;22), deploying a <strong>Type-88 surface-to-ship missile launcher to Ishigaki</strong> (150 miles east of Taiwan) and two <strong>ScanEagle II drones to Yonaguni</strong> (70 miles east of Taiwan). An <strong>anti-aircraft electronic warfare unit deployment to Yonaguni</strong> is scheduled for later in 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This represents a significant acceleration of Japan&rsquo;s southwestern island defense posture. The combination of anti-ship missiles, ISR drones, and electronic warfare systems creates a layered denial capability across the Miyako Strait &mdash; a critical waterway for any PLA Navy transit between the East China Sea and the Western Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan establishing independent A2/AD capability along First Island Chain. Complements U.S. Marine Littoral Regiment concept. Type-03 missile deployment to Yonaguni under planning. PLA Navy transit routes through Miyako Strait increasingly contested.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 5: GUAM RELOCATION DEBATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">POLICY</span>
          <span style="color: #666; font-size: 11px;">Force Posture / U.S.-Japan Alliance &mdash; Ongoing 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Atlantic Council Urges Halting Marine Relocation to Guam; 5,000 Okinawa-Based Marines &ldquo;Needed to Counter China&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An <strong>Atlantic Council report</strong> (February 2026) urged Washington to reverse the planned relocation of approximately <strong>5,000 Marines from Okinawa to Guam</strong>, arguing they are operationally needed to counter China. The report notes Guam is <strong>1,500 miles from Okinawa</strong> (three days by ship under threat of enemy fire), making rapid reinforcement impractical in a Taiwan contingency.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The current <strong>cost-sharing agreement runs through FY2026</strong> and requires renegotiation. Separately, approximately <strong>2,200 Okinawa-based Marines were deployed to the Middle East</strong> in March 2026, temporarily reducing local force presence and raising questions about dual-theater demand signals.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Guam relocation timeline uncertain. Cost-sharing renegotiation due this fiscal year. Middle East deployment of ~2,200 Marines reduces local presence. Watch for NDAA language on relocation pause.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 6: FUTENMA / POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">POLITICAL</span>
          <span style="color: #666; font-size: 11px;">Okinawa Prefecture / U.S. Bases &mdash; Ongoing 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Stalls Over Runway Length Dispute; Pentagon Demands Equal-Length Replacement at Henoko</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the agreement to return MCAS Futenma passed in April 2026 with no return in sight. The Pentagon stated it will <strong>not return Futenma until Japan provides a runway of similar length</strong>. Futenma&rsquo;s runway is approximately <strong>2,700 meters</strong>; the planned V-shaped Henoko runways are only about <strong>1,800 meters each</strong>. Henoko construction is not expected to finish before 2033, with the base return unlikely before <strong>2036 at the earliest</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki</strong> announced he will seek a third term in the <strong>September 13, 2026 gubernatorial election</strong>, maintaining opposition to the Henoko relocation. His challenger is <strong>Genta Koja</strong> (age 42), the de facto LDP candidate supporting the relocation. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is weakened after losing all four single-seat constituencies to the LDP in the February 8 lower house election.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Futenma return timeline extends to 2036+. September 13 gubernatorial election is key indicator for base relocation politics. Runway length mismatch is a new blocking issue. SOFA revision proposals under discussion.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 7: CHINA TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">THREAT</span>
          <span style="color: #666; font-size: 11px;">China / Regional Security / Intelligence &mdash; April&ndash;June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&rsquo;s Eastern Theater Command Increases Patrols Near Okinawa; DNI Assesses No Fixed Taiwan Invasion Timeline</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s <strong>Eastern Theater Command launched combat readiness patrols</strong> in the East China Sea and sent warships near Okinawa following Japan&rsquo;s April 2026 transit of the Taiwan Strait by a destroyer. The Senkaku/Diaoyu Islands, the Taiwan Strait, and waterways among Japan&rsquo;s southwestern islands are all identified as <strong>high-risk zones</strong> for potential miscalculation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>DNI&rsquo;s April 2026 Annual Threat Assessment</strong> stated that China does not plan to invade Taiwan in 2027 and has <strong>no &ldquo;fixed timeline for achieving unification.&rdquo;</strong> However, analysts warn Japan and China are &ldquo;edging dangerously close to conflict&rdquo; due to mutual misperception: Japan believes it is strengthening deterrence; China perceives Japan as preparing to intervene in Taiwan. Risk of miscalculation by lower-level commanders remains elevated.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PLA Eastern Theater Command activity elevated but no imminent invasion indicators. DNI assesses no fixed timeline for Taiwan unification. Primary risk: tactical miscalculation in East China Sea / Miyako Strait during increased patrol tempo. Senkaku Islands remain a flashpoint.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 8: ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ECONOMIC</span>
          <span style="color: #666; font-size: 11px;">Okinawa Prefecture / Tourism / Development &mdash; 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Tourism to Exceed 10 Million Visitors; JTA Launches International Flights; Accommodation Tax Planned</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tourist arrivals to Okinawa in FY2025 are expected to <strong>exceed 10 million for the first time</strong>, setting a new record. The prefectural government plans to introduce an <strong>accommodation tax in FY2026</strong> to support sustainable tourism infrastructure. <strong>Japan Transocean Air (JTA)</strong> is launching international flights from its Okinawa hub in mid-2026, expanding direct connectivity.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Marubeni Corporation</strong> acquired a stake in Okinawa Tourist Service Inc. (OTS), signaling major corporate investment in the island&rsquo;s tourism infrastructure. <strong>Shuri Castle reconstruction</strong> achieved major milestones in 2026, boosting cultural tourism appeal. The base-related economy continues to benefit from DPRI-funded construction projects ($320M Camp Hansen complex being the latest).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Economic Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Tourism sector at historic highs. International connectivity expanding. New accommodation tax may affect off-base lodging costs. DPRI construction spending remains a significant local economic driver.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaways &mdash; Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">1. Exercise Resolute Dragon (Jun 20&ndash;30) is the near-term priority.</strong> First-ever combined U.S.-Japan Osprey operations from Futenma, with NMESIS and MADIS deployments to Miyako/Ishigaki. Demonstrates Alliance A2/AD capability along the First Island Chain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">2. Japan&rsquo;s Nansei Islands buildup is accelerating.</strong> Anti-ship missiles on Ishigaki, drones and EW on Yonaguni, with Type-03 missiles planned. The southwestern island chain is being systematically fortified independent of U.S. force posture decisions.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">3. Force posture remains in flux.</strong> Guam relocation debate unresolved (cost-sharing expires this FY). ~2,200 Marines deployed to Middle East. Futenma return timeline extended to 2036+. September gubernatorial election will shape local political environment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">4. China threat elevated but not imminent.</strong> PLA Eastern Theater Command patrols increased near Okinawa. DNI assesses no fixed invasion timeline. Primary risk is tactical miscalculation in East China Sea during heightened patrol tempo.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Military Times &bull; Atlantic Council &bull; Asian Military Review &bull; Foreign Policy &bull; Arms Control Association &bull; South China Morning Post &bull; Military.com &bull; DNI Annual Threat Assessment (April 2026)
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is compiled from open-source intelligence (OSINT) and does not contain classified information.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const recipients = RECIPIENTS;

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
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
