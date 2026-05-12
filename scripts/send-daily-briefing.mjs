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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Environmental</p>
    </div>

    <!-- ===================== BREAKING NEWS BANNER ===================== -->
    <div style="background: #1a0a0a; border: 2px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Top Story &mdash; May 12, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Nansei Islands Exercise T-5 &mdash; OHA Increase Effective in 4 Days &mdash; Ceasefire Holds but Fragile</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        Japan&rsquo;s first-ever <strong>Nansei Islands exercise begins in 5 days (May 17&ndash;22)</strong>, with 20 Marines from the 12th MLR set to establish the first bilateral command center on Miyakojima. <strong>OHA increases of $400&ndash;$500/month</strong> take effect May 16 for all active-duty service members on Okinawa. One week after Secretary Rubio declared Operation Epic Fury &ldquo;over,&rdquo; the Iran ceasefire remains fragile &mdash; President Trump halted &ldquo;Project Freedom&rdquo; Strait of Hormuz operations citing &ldquo;great progress&rdquo; toward a deal, but Iran&rsquo;s parliament speaker called the continued U.S. naval blockade a ceasefire violation. The <strong>31st MEU (2,500 Marines)</strong> return timeline to Okinawa remains undetermined.
      </p>
    </div>

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: MCAS Futenma Flight Line Fair -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Community Relations / MCAS Futenma &mdash; May 9&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">8,150 Attend Futenma Flight Line Fair &mdash; 30+ Aircraft on Display; $88M Annual Base Impact Cited</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>8,150 fairgoers</strong> braved wind and rain over the weekend for the annual Flight Line Fair at <strong>MCAS Futenma</strong> (May 9&ndash;10). More than <strong>30 aircraft and ground systems</strong> from the U.S. Marine Corps, Navy, Air Force, and JSDF were on static display, including the <strong>CH-53 Super Stallion, MV-22 Osprey, UH-1Y Venom, AH-1Z Viper</strong>, and Air Force <strong>F-16 Fighting Falcon</strong>. American pop-rock band <strong>Third Eye Blind</strong> headlined Saturday&rsquo;s musical performances.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Col. William Pacatte noted Futenma contributes approximately <strong>$88 million annually</strong> to the local economy through contracts, rental payments, and personnel spending. The fair was reinstated to the flight line after being scaled down in October 2025 due to the federal government shutdown and has operated at Futenma for approximately 20 years.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Community engagement event comes at a sensitive time &mdash; ahead of the September 13 gubernatorial election where Futenma&rsquo;s future is the central issue, and amid ongoing PFAS contamination concerns near the base. The $88M economic contribution figure is notable positioning as the HNS cost-sharing agreement nears renegotiation.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Nansei Islands Exercise T-5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-5 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise Now 5 Days Out &mdash; 12th MLR Bilateral Command Center on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the Nansei (Ryukyu) island chain from <strong>May 17&ndash;22</strong> &mdash; now just <strong>5 days away</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong> on Ishigaki, Yonaguni, and Miyakojima.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This exercise follows the coordinated Russian-Chinese naval transits through Japan&rsquo;s southwestern approaches in late April. The bilateral command center on Miyakojima is a significant first for U.S.-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity this week.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: F-22 Raptors at Kadena Update -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; Ongoing since May 2&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Now Operational at Kadena &mdash; F-15EX Delivery Stalled Until 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>12 F-22 Raptor stealth fighters</strong> from the <strong>90th Fighter Squadron (JBER, Alaska)</strong> and <strong>27th Fighter Squadron (JB Langley-Eustis, Virginia)</strong> are now conducting rotational operations at <strong>Kadena Air Base</strong> with the 18th Wing. From Kadena, F-22s can reach <strong>Taiwan Strait operating areas in under one hour</strong>, East China Sea intercept zones within minutes, and the Korean Peninsula without tanker support.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent replacement fleet of <strong>F-15EX Eagle IIs remains delayed until 2027</strong>, with a second squadron expected by decade&rsquo;s end. Kadena &mdash; the <strong>largest U.S. Air Force installation in Asia</strong> and the closest to Taiwan at ~450 miles &mdash; now hosts the most significant concentration of 5th-generation fighters in the Western Pacific, filling the capability gap left by the retirement of F-15C/D Eagles.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The F-22 deployment signals rapid Indo-Pacific force reconstitution following CENTCOM drawdowns as Operation Epic Fury concludes. Arrival just 5 days before the Nansei Islands exercise provides visible air superiority deterrence amid the ongoing China-Japan diplomatic crisis and intensifying Sino-Russian naval activity around Okinawa.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Operation Epic Fury / 31st MEU Status -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">CENTCOM / Force Readiness &mdash; May 12 Update</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Return Timeline Still Unclear &mdash; Iran Ceasefire Fragile, &ldquo;Project Freedom&rdquo; Halted</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          One week after Secretary Rubio declared Operation Epic Fury &ldquo;over&rdquo; (May 5), the <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> aboard <strong>USS Tripoli</strong> remains in the CENTCOM AOR with <strong>no confirmed return date</strong>. The unit deployed from Sasebo/Okinawa in mid-March and conducted vessel boarding operations enforcing the U.S. blockade of Iranian ports through late April. U.S. military objectives were declared achieved in 38 days, destroying <strong>85%+ of Iran&rsquo;s defense industrial base</strong>, sinking every submarine, and eliminating 97% of naval mines.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump announced a <strong>temporary halt to &ldquo;Project Freedom&rdquo;</strong> &mdash; the operation to reopen the Strait of Hormuz &mdash; citing &ldquo;great progress&rdquo; toward a potential agreement with Iran. However, Iran&rsquo;s Parliament Speaker <strong>Mohammad Bagher Qalibaf</strong> called the continued U.S. naval blockade a <strong>ceasefire violation</strong>. The Pakistan-brokered ceasefire (since Apr 8) has been extended on an open-ended basis but remains fragile.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU is the <strong>only Marine expeditionary unit permanently deployed in the Pacific</strong>. Its absence leaves a critical gap in rapid-response capability across the Indo-Pacific at precisely the moment China-Japan tensions are escalating. Defense experts have warned this gap would not be easily filled without redeploying another MEU to the region.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: China-Japan Diplomatic Crisis & Senkaku -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Geopolitical / East China Sea &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Diplomatic Crisis Deepens &mdash; PLA Eastern Theater Command Patrols Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> shows no signs of easing. Following JMSDF destroyer <strong>Ikazuchi&rsquo;s</strong> transit of the Taiwan Strait on April 17 &mdash; the second Japanese warship passage in 10 months &mdash; Beijing responded with an unusually harsh tripartite response: condemnations from the <strong>Ministry of Foreign Affairs, Ministry of National Defense, and Eastern Theater Command</strong>. The Eastern Theater Command launched <strong>combat readiness patrols in the East China Sea</strong> and sent warships near Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis traces to PM Takaichi&rsquo;s November 2025 statement that a Chinese attack on Taiwan could constitute an &ldquo;existential crisis for Japan.&rdquo; China has responded with <strong>flight and tourism restrictions, Japanese seafood import bans, canceled cultural exchanges</strong>, and intensified military activities. The PLA Daily compared Japan&rsquo;s Taiwan Strait involvement to its WWII invasion of China. Chinese vessels were present near the <strong>Senkaku Islands on 357 of 365 days in 2025</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Foreign Policy warns Japan and China are &ldquo;edging dangerously close to conflict.&rdquo; Yonaguni Island sits just 111 km from Taiwan, placing Okinawa&rsquo;s southwestern islands directly in a high-risk zone. A miscalculation, fire-control radar lock, or overreaction by a lower-level commander could push both sides across the threshold. The upcoming Nansei exercise (May 17) will test PRC reaction tolerance.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: Sino-Russian Naval Transits -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / Southwest Japan &mdash; Apr 21&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian &amp; Chinese Warships Transited Southwest Japan in Coordinated Operations &mdash; China Uses New Waterway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In late April, both Russia and China sent warships through Japan&rsquo;s southwestern approaches in near-simultaneous operations. <strong>PLAN destroyer CNS Baotou (133)</strong> and <strong>frigate CNS Huanggang (577)</strong> transited between Amami Oshima and Yokoate Island (Apr 19&ndash;22) &mdash; the <strong>first time China announced use of the Yokoate Waterway</strong>, closer to Japan&rsquo;s mainland than the typical Miyako Strait route.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Russian Navy corvette <strong>RFS Gromkiy (335)</strong> and submarine <strong>RFS Petropavlovsk-Kamchatsky (B-274)</strong> transited through Japan&rsquo;s southwest region into the East China Sea on April 21. PLA Navy Formation 133 then sailed through the <strong>Yonaguni-Iriomote Waterway</strong> on April 22, monitored by JMSDF destroyer <strong>JS Akebono</strong>. This represents the most concentrated foreign naval activity near Okinawa in recent memory.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 7: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; 124 Days to Election</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki vs. Genta Koja &mdash; September 13 Race Shapes Up as Referendum on U.S. Bases</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          With <strong>124 days until the September 13 gubernatorial election</strong>, the race is crystallizing. Governor <strong>Denny Tamaki</strong> (66) will seek a third term running on opposition to the Futenma-to-Henoko relocation. His <strong>&ldquo;All Okinawa&rdquo; coalition continues to fracture</strong> after losing all four Okinawa single-seat constituencies in the February 8 lower house election. The Centrist Reform Alliance (CDP + Komeito) remains undecided on its base policy position.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent <strong>Genta Koja</strong> (42), former deputy mayor of Naha, is running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. PM Takaichi remains in Southeast Asia/Australia this week, but her LDP swept all Okinawa seats in February, suggesting momentum for the pro-base camp. Meanwhile, the SOFA newcomer orientation is being revised following the May 9 <strong>Okinawa Community Partnership Forum</strong> meeting, updating content on service member incidents and <strong>Irei No Hi</strong> (June 23).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would be a <strong>seismic shift</strong> &mdash; an LDP-backed governor supporting Henoko could accelerate the Futenma replacement facility timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment. Watch Irei No Hi (June 23) as a potential campaign flashpoint.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Futenma 30 Years & HNS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Bilateral &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Hits 30-Year Mark; HNS Cost-Sharing Agreement Expiring End of FY2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 U.S.-Japan agreement to return MCAS Futenma passed in April with <strong>no concrete return date in sight</strong>. DoD stated Futenma <strong>will not be returned until Japan finalizes selection of an alternative runway</strong>. Henoko construction is expected to continue <strong>until at least 2033</strong>. The weekend&rsquo;s Flight Line Fair highlighted Futenma&rsquo;s $88M annual economic contribution to the local economy.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>U.S.-Japan Host Nation Support (HNS) agreement expires at end of FY2026</strong>. Renegotiations will address redistribution of Marines from Okinawa to Guam and Australia, enhanced capabilities at Kadena Air Base, and distributed force posture. Defense Minister <strong>Shinjiro Koizumi</strong> pledged during his January visit to <strong>reduce the U.S. military footprint</strong> on the island. Experts argue the Marine pullback should be <strong>halted as the China threat rises</strong>.
        </p>
      </div>
    </div>

    <!-- ===================== ENVIRONMENTAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Environmental &amp; Health</p>
    </div>

    <!-- EVENT 9: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near U.S. Bases &mdash; 56x Safety Limit; USFJ Denies Base Access for 5th Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PFAS &ldquo;forever chemical&rdquo; contamination near U.S. military bases remains at crisis levels. Okinawa Prefecture&rsquo;s groundwater survey found <strong>dangerous levels at 31 of 44 sites</strong> near installations. The highest reading &mdash; <strong>2,800 parts per trillion</strong> at Yara Hijaga near Kadena &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. An April survey confirmed elevated PFAS downstream of <strong>Camp Hansen</strong>, and contamination at <strong>28 of 40 sites</strong> near MCAS Futenma has been attributed to the base as the likely source by an expert committee.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>USFJ denied prefecture access to bases for water sampling for a fifth time</strong>, citing insufficient evidence of a link. Unidentified white foam was reported rising from manholes near Futenma in January, dissolving within an hour &mdash; a civic group requested on-site investigations but the military refused. The Chatan water treatment plant also recorded elevated PFAS in tap water. The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS is becoming a central campaign issue for the September 13 gubernatorial election. Service members and families living near affected bases should monitor water advisories. The continued refusal of base access for testing is eroding community trust at a time when the Flight Line Fair is attempting to strengthen relations. Expect Governor Tamaki to use PFAS as a key differentiator against the LDP-backed Koja.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 10: Weather -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #16a34a; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">LOW</span>
          <span style="color: #666; font-size: 11px;">Weather / Environmental &mdash; May 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Hagupit Dissipates &mdash; No Active Typhoon Threats for Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Tropical Storm Hagupit (locally Caloy) weakened into a remnant low and dissipated on May 11&ndash;12, posing no threat to Okinawa. JTWC issued its final advisory on May 11. <strong>No active tropical cyclone threats</strong> to the Okinawa region at this time. Rainy conditions contributed to reduced attendance at the Futenma Flight Line Fair over the weekend but no significant weather disruptions to military operations reported. Typhoon season typically begins ramping up in June.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 11: OHA Increase -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Quality of Life / Personnel &mdash; Effective May 16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">OHA Housing Allowance Increase Effective in 4 Days &mdash; $400&ndash;$500/Month for All Branches</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beginning <strong>May 16</strong>, active-duty troops across all service branches on Okinawa will receive significant <strong>Overseas Housing Allowance (OHA) increases</strong>:
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          &bull; <strong>E-1 through E-4:</strong> +$396/month<br/>
          &bull; <strong>O-1, O-2, E-5:</strong> +$504/month<br/>
          &bull; <strong>O-3, E-6 through E-8:</strong> +$450/month
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          BGen John Gallemore stated service members were paying approximately <strong>$300 out of pocket monthly</strong> as landlords price-matched to the higher local civilian housing allowance. The increase not only closes the gap but exceeds it. Current base rates with dependents range from $1,403 (E-1&ndash;E-4) to $1,655 (E-6&ndash;E-8/O-3), plus $661.56 utility/maintenance allowance.
        </p>
      </div>
    </div>

    <!-- EVENT 12: Yen & Economy -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Economy / Currency &mdash; May 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Weakens to &yen;157.5/USD &mdash; BOJ Holds at 0.75%; Tokyo Suspected of $63B+ Intervention</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen weakened to approximately <strong>&yen;157.5 per dollar</strong>, extending losses for a second consecutive session. The <strong>BOJ held its policy rate at 0.75%</strong> (highest since 1995) at its April meeting by a 6&ndash;3 vote, amid uncertainty over the Iran conflict and surging energy prices. The <strong>US-Japan rate differential of up to 300 basis points</strong> continues pressuring the yen. Tokyo is suspected of spending <strong>over $63 billion</strong> on FX intervention, with limited sessions remaining under IMF guidelines.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s GDP growth is projected at <strong>0.8% for 2026</strong> with BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. The Ministry of Finance upgraded its economic assessment for the Okinawa region, citing strengthened personal consumption and tourism. Despite Chinese travel advisories, Okinawa tourism remains strong. Naha Airport&rsquo;s international routes are expected to reopen in mid-June.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen gives U.S. service members <strong>strong purchasing power off-base</strong>, but rising inflation (2.5&ndash;3%) is eroding this advantage. The OHA increase (May 16) will partially offset rising local housing costs. Energy costs remain elevated due to Strait of Hormuz disruptions. Shunto wage negotiations delivered a third straight year of ~5% wage hikes for Japanese workers.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch This Week</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Nansei exercise is the week&rsquo;s main event.</strong> Japan&rsquo;s first-ever Nansei Islands exercise kicks off May 17 with 300 JGSDF soldiers and 20 Marines from the 12th MLR establishing the first bilateral command center on Miyakojima. Anti-ship missiles deploy to Ishigaki (150 mi from Taiwan) and ScanEagle UAVs to Yonaguni (70 mi from Taiwan). Watch closely for PRC reaction &mdash; diplomatic condemnation, Eastern Theater Command patrols, or retaliatory naval activity are all likely.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">31st MEU gap persists &mdash; 12 F-22s filling the deterrence void.</strong> The only permanently Pacific-deployed MEU remains in the CENTCOM AOR two months into its deployment, with no return date confirmed despite Epic Fury being declared &ldquo;over.&rdquo; The 12 F-22 Raptors at Kadena provide visible air superiority deterrence but cannot replicate the 31st&rsquo;s amphibious rapid-response capability. The Iran ceasefire is fragile &mdash; Trump halted Project Freedom but the naval blockade continues.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Quality of life boost incoming.</strong> The OHA increase on May 16 ($400&ndash;$500/month) will materially improve housing affordability for all service members on Okinawa. Combined with strong dollar purchasing power at &yen;157.5, the economic picture for personnel is improving despite local inflation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PRC reaction to Nansei exercise (May 17&ndash;22) &bull; 31st MEU return timeline &bull; Iran ceasefire stability &amp; Hormuz blockade negotiations &bull; OHA increase implementation (May 16) &bull; F-22 deployment duration at Kadena &bull; September 13 gubernatorial election polling &bull; HNS cost-sharing renegotiation &bull; PFAS water sampling access &bull; Naha Airport international route reopening (mid-June) &bull; Irei No Hi (June 23)
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; CNN &bull; ABC News &bull; Time &bull; Al Jazeera &bull; CNBC &bull; Foreign Policy &bull; The Diplomat &bull; Brookings &bull; CFR &bull; AEI &bull; Reuters &bull; USNI News &bull; Military.com &bull; Military Times &bull; Naval News &bull; Air &amp; Space Forces Magazine &bull; CENTCOM &bull; The White House &bull; JTWC &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; Ryukyu Shimpo &bull; Meyka Defense &bull; Wikipedia
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
  subject: `[World Monitor] Okinawa Intelligence Briefing — ${today}`,
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
