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
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Today &mdash; May 11, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">OHA Increase for Okinawa Service Members &mdash; $400&ndash;$500/Month Starting May 16</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        <strong>Brig. Gen. John Gallemore</strong>, commander of the 18th Wing at Kadena Air Base, announced that all active-duty service members living off-base on Okinawa will receive a <strong>$400&ndash;$500/month increase</strong> in Overseas Housing Allowance beginning <strong>May 16, 2026</strong>. The increase addresses a growing gap between OHA rates and rising local rental market prices, which had made it increasingly difficult for service members to find adequate housing near installations. The adjustment applies across all service branches stationed on the island.
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
          <span style="color: #666; font-size: 11px;">Community Relations / MCAS Futenma &mdash; May 10&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">8,150 Attend MCAS Futenma Flight Line Fair &mdash; 30+ Aircraft on Display Despite Rainy Season</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Thousands of Japanese and American attendees turned out for the annual <strong>Flight Line Fair at Marine Corps Air Station Futenma</strong> this weekend, with approximately <strong>8,150 fairgoers</strong> braving wind and rain during Okinawa&rsquo;s early rainy season. American pop-rock band <strong>Third Eye Blind</strong> headlined Saturday&rsquo;s music performances.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than <strong>30 aircraft and ground systems</strong> from the U.S. Marine Corps, Navy, Air Force, and the <strong>Japan Self-Defense Force</strong> were on static display throughout the weekend, showcasing interoperability and bilateral partnership. The event comes amid ongoing debates about Futenma&rsquo;s future and the Henoko relocation timeline.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Strong community turnout at Futenma is a positive indicator for US-Okinawa relations at a sensitive time &mdash; with the gubernatorial election approaching in September and SOFA orientation revisions underway. JSDF participation in static displays underscores the expanding bilateral relationship ahead of the May 17&ndash;22 Nansei Islands exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: F-22 Deployment to Kadena -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 2&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Now Operational at Kadena &mdash; Filling F-15EX Delivery Gap</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>12 F-22 Raptor stealth fighters</strong> from the <strong>90th and 27th Expeditionary Fighter Squadrons</strong> are now operational at Kadena Air Base following their arrival on May 2&ndash;3 from <strong>Joint Base Elmendorf-Richardson, Alaska</strong>. The deployment fills a critical gap: <strong>36 Boeing F-15EX Eagles</strong> originally planned for spring 2026 delivery have been <strong>indefinitely delayed</strong> after a Boeing machinists&rsquo; strike (Aug&ndash;Nov 2025) disrupted the St. Louis production line.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena &mdash; the <strong>closest U.S. Air Force installation to Taiwan (450 mi)</strong> &mdash; now hosts the most significant concentration of 5th-generation fighters in the Western Pacific. From Kadena, F-22s can reach <strong>Taiwan Strait operating areas in under one hour</strong>, East China Sea intercept zones within minutes, and the Korean Peninsula without tanker support.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The F-22 deployment signals a rapid force reconstitution in the Indo-Pacific. With F-15EX deliveries stalled indefinitely, these Raptors are not a stopgap &mdash; they represent a qualitative upgrade in Kadena&rsquo;s air superiority mission. PRC intelligence will note the shift from aging F-15C/D airframes to air-dominant F-22s arriving one week before the first-ever Nansei Islands exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-6 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 6 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. With 12 F-22s now operational at Kadena and this exercise six days away, the First Island Chain defense posture is being rapidly strengthened. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: China-Japan Diplomatic Crisis & Defense Review -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / East Asia &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Diplomatic Crisis Deepens &mdash; Defense Policy Review Panel Convened</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> continues to escalate. After PM Takaichi&rsquo;s November remarks on Taiwan defense, China imposed <strong>flight and tourism restrictions</strong>, banned <strong>Japanese seafood imports</strong>, restricted <strong>dual-use and rare earth exports</strong> to Japan, canceled <strong>30+ Japanese cultural performances</strong>, and escalated military operations near Japan&rsquo;s territorial waters. The JMSDF destroyer <strong>Ikazuchi</strong> transited the <strong>Taiwan Strait</strong> in April &mdash; the second such passage in 10 months &mdash; drawing a sharply harsher response from Beijing than the first.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan convened a <strong>defense policy review panel on April 27</strong> to revise three key strategy documents, including the <strong>National Security Strategy</strong>, with a target of raising defense spending to <strong>2% of GDP through 2027</strong>. China <strong>scaled back airspace challenges and drone flights in fiscal 2025</strong> according to JASDF data, though analysts caution this may reflect operational shifts rather than de-escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Foreign Policy assessed a Japan-China military clash as &ldquo;dangerously likely.&rdquo; The combination of economic retaliation, military escalation, and nationalist sentiment on both sides has created the most dangerous period in China-Japan relations since normalization in 1972. Okinawa&rsquo;s southwestern islands sit directly on the potential flashpoint axis.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: SOFA Orientation & Community Partnership Forum -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Community Relations &mdash; May 9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Community Partnership Forum Holds First Meeting &mdash; SOFA Orientation Under Revision</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The first meeting of the <strong>Okinawa Community Partnership Forum</strong> was held on <strong>May 9</strong>, with U.S. military officials seeking suggestions for improving the mandatory <strong>SOFA newcomer orientation briefing</strong>. Changes under consideration address descriptions of past incidents involving service members and updated content on <strong>Irei No Hi</strong> (June 23, Okinawa Memorial Day).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The revision follows local feedback about the orientation&rsquo;s tone and content. The forum represents an effort to strengthen community relations ahead of the sensitive pre-election period and the approaching Irei No Hi commemorations.
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
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Apr 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base &ldquo;All Okinawa&rdquo; Coalition in Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. However, his <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February 8 lower house election to PM Sanae Takaichi&rsquo;s LDP. The Centrist Reform Alliance (CRA) &mdash; formed by the CDP (which backs Tamaki) and Komeito (which tolerates the relocation) &mdash; remains undecided on its position.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The Japan Times reports Tamaki faces &ldquo;wavering support&rdquo; as the political landscape shifts. The broad anti-base alliance that has shaped Okinawa politics for nearly a decade is at risk of collapse.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would represent a <strong>seismic shift in Okinawa base politics</strong>. An LDP-backed governor supporting Henoko could accelerate the Futenma replacement facility timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment across the island.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 7b: US-Japan Base Negotiations -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Bilateral &mdash; 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Japan Base Negotiations Underway &mdash; HNS Agreement Expiring; Futenma at 30 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The next round of <strong>US-Japan base negotiations</strong> is underway in 2026, with the <strong>Host Nation Support (HNS) cost-sharing agreement expiring at end of FY2026</strong>. Renegotiations will address redistribution of Marines from Okinawa to Guam and Australia, enhanced capabilities at Kadena, and distributed force posture. The <strong>30th anniversary</strong> of the 1996 Futenma return agreement passed with <strong>no return date in sight</strong> &mdash; Henoko construction expected to continue <strong>until at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          This weekend&rsquo;s Flight Line Fair at Futenma &mdash; drawing 8,150 attendees &mdash; underscores the paradox: the base remains a vibrant community hub even as plans for its closure enter a fourth decade.
        </p>
      </div>
    </div>

    <!-- ===================== ENVIRONMENTAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Environmental &amp; Seismic</p>
    </div>

    <!-- EVENT 8: Earthquakes Near Okinawa -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Seismic Activity / Southwestern Ryukyu &mdash; May 9&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Earthquake Cluster Near Iriomote Jima &mdash; M4.6, M4.4, M3.1 in 24 Hours</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A cluster of earthquakes struck the southwestern Ryukyu Islands over the past 24 hours. A <strong>magnitude 4.4 earthquake</strong> struck in the Philippine Sea, <strong>69 km south of Miyakojima</strong>, on Saturday May 9 at 10:26 AM local time. Hours later, a <strong>magnitude 3.1</strong> (01:02 AM) and <strong>magnitude 4.6</strong> (01:18 AM) hit the East China Sea, <strong>24 km north of Iriomote Jima Island</strong>, on Sunday May 10. All quakes occurred at shallow depths (25&ndash;35 km).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The closest population center, <strong>Ishigaki (pop. 48,000)</strong>, is 45 km from the epicenter. No tsunami warnings were issued and no damage reported. The activity occurs along the <strong>Ryukyu Trench subduction zone</strong>, an active seismic boundary. Okinawa&rsquo;s rainy season has arrived early this year, compounding infrastructure monitoring needs across the island chain.
        </p>
      </div>
    </div>

    <!-- EVENT 9: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma Remains Critical &mdash; 56x Japan&rsquo;s Safety Standard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey found <strong>PFAS &ldquo;forever chemicals&rdquo; at dangerous levels at 31 of 44 sites</strong> near U.S. military installations. The highest contamination &mdash; <strong>2,800 parts per trillion</strong> at Yara Hijaga near Kadena &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. Elevated levels also detected near <strong>MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>USFJ denied prefecture access to bases for water sampling</strong> for a fifth time. An April survey confirmed elevated PFAS levels downstream of Camp Hansen. The prefecture plans to reapply citing an expert committee report indicating Futenma as the likely source. This issue is expected to be a <strong>central campaign theme</strong> in the September gubernatorial election.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 10: OHA Increase & Economy -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Personnel Finance / Economy &mdash; May 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">OHA Increase + Weak Yen = Mixed Impact for Service Members on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>$400&ndash;$500/month OHA increase</strong> starting May 16 directly addresses the growing gap between allowance rates and local rental prices near Kadena and other Okinawa bases. The adjustment applies to <strong>all service branches</strong> for active-duty members living off-base. Rising rental costs have made it increasingly difficult for junior enlisted and mid-grade NCOs to find housing within allowance limits.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s economy faces persistent headwinds: the <strong>yen remains under pressure</strong> amid a wide US-Japan interest rate differential, with the BOJ cautiously exiting ultra-loose monetary policy. <strong>GDP growth is projected at 0.8% for 2026</strong> with CPI inflation at <strong>2.5&ndash;3.0%</strong>. The weak yen gives U.S. service members <strong>increased purchasing power off-base</strong>, but rising local prices are eroding this advantage.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Japan&rsquo;s defense budget is targeted to reach <strong>2% of GDP through 2027</strong>, with significant investment flowing into Okinawa-area installations. Okinawa tourism remains strong despite Chinese travel advisories, and Shunto wage negotiations delivered a third straight year of ~5% wage hikes nationally.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Nansei exercise T-6 days &mdash; the First Island Chain defense posture accelerates.</strong> With 12 F-22 Raptors operational at Kadena and Japan&rsquo;s first-ever Nansei Islands exercise launching May 17, the U.S.-Japan alliance is rapidly strengthening its southwestern island defense architecture. The 12th MLR&rsquo;s bilateral command center on Miyakojima will be a landmark moment for interoperability. Expect heightened PRC surveillance and possible diplomatic statements in the days ahead.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China-Japan crisis shows no signs of de-escalation.</strong> Foreign Policy assesses a military clash as &ldquo;dangerously likely.&rdquo; While China scaled back airspace challenges in FY2025, the broader trajectory &mdash; economic sanctions, rare earth export restrictions, Taiwan Strait confrontations, and nationalist sentiment on both sides &mdash; points toward the most dangerous period in bilateral relations since normalization.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s September election will reshape U.S. basing.</strong> Governor Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; anti-base coalition is fracturing. If LDP-backed Genta Koja wins, expect accelerated Henoko construction and reduced friction for U.S. force realignment across the island.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PRC reaction to Nansei exercise (May 17&ndash;22) &bull; F-22 deployment duration at Kadena &bull; OHA implementation (May 16) &bull; September 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation &bull; China-Japan diplomatic off-ramps &bull; PFAS water sampling access &bull; Seismic activity along Ryukyu Trench
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Air &amp; Space Forces Magazine &bull; DVIDSHUB &bull; Military.com &bull; South China Morning Post &bull; The Diplomat &bull; Foreign Policy &bull; USNI News &bull; Newsweek &bull; Nippon.com &bull; AEI &bull; CSIS &bull; Brookings &bull; Ryukyu Shimpo &bull; VolcanoDiscovery &bull; Japan Meteorological Agency &bull; Eurasia Group &bull; MUFG Research &bull; East Asia Forum
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
