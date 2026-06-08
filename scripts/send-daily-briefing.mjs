#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Force Posture &bull; Regional Security &bull; Economic</p>
    </div>

    <!-- ===================== PRIORITY: TSUNAMI ADVISORY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #1a0a0a; border: 2px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 10px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">&#9888; PRIORITY</span>
          <span style="color: #ef4444; font-size: 11px; font-weight: 700;">Okinawa / Natural Disaster / Force Protection &mdash; June 8 (TODAY)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tsunami Advisory Issued for Okinawa After M7.8 Philippines Earthquake; Kadena Evacuates Coastal Areas; Advisory Lifted at 16:50</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck off the coast of Mindanao, Philippines at approximately <strong>07:38 local time on June 8</strong>, killing at least 32 people. The Japan Meteorological Agency issued a <strong>tsunami advisory</strong> for Japan&rsquo;s Pacific coastline from Okinawa to Ibaraki Prefecture, with waves up to <strong>1 meter forecast for Okinawa</strong>. A small wave of several centimeters was recorded in Okinawa City around 12:58 p.m.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Military response:</strong> Kadena Air Base&rsquo;s 18th Wing directed all personnel to evacuate coastal areas and opened Gate 1 for affected community members. DoDEA schools relocated students: <strong>Kinser Elementary</strong> students moved to Building 107 on Camp Kinser, and <strong>Lester Middle School</strong> students transferred to Killin Elementary on Camp Foster. All personnel were accounted for and safe. Kadena declared <strong>all-clear at 13:35</strong>. The JMA advisory was fully lifted at <strong>16:50</strong>. Ferry services, diving excursions, and beach resorts temporarily suspended operations. No structural damage reported.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #333; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#10003; STATUS: ALL CLEAR</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All U.S. installations returned to normal operations. No casualties or significant damage. DoDEA schools resumed normal schedules. Coastal recreation activities resuming.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 1: RESOLUTE DRAGON 26 & VALIANT SHIELD ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Military Exercise / Force Readiness &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 &amp; Valiant Shield 2026: Major U.S.&ndash;Japan Exercises Launch June 20 Across Okinawa &amp; Nansei Islands; Typhon Missile System to Be Permanently Stored in Japan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two major U.S.&ndash;Japan exercises are set to begin in the coming days. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will bring together III Marine Expeditionary Force &mdash; including the <strong>3rd Marine Division, 1st Marine Air Wing, and 12th Marine Littoral Regiment</strong> &mdash; with the Japan Ground Self-Defense Force across training areas on <strong>Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong>, as well as Kyushu. The U.S. Army&rsquo;s 3rd Multi-Domain Task Force, Navy 7th Fleet, and Air Force 18th Wing at Kadena will also participate.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Valiant Shield 2026</strong> (June 22&ndash;July 1) will deploy the <strong>containerized Typhon mid-range missile system</strong> to MSDF Kanoya Air Base in Kagoshima Prefecture. In a significant escalation from last year, <strong>the Typhon will be stored in Japan on a U.S. base</strong> after the exercise concludes rather than being flown out. A JGSDF <strong>V-22 Osprey will operate from MCAS Futenma for the first time</strong>, rehearsing a casualty evacuation from Miyako Island &mdash; a scenario with direct Taiwan contingency implications. Okinawa-based units are also scheduled to begin fielding the Typhon system between April and June 2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Units Involved:</strong> III MEF &bull; 3rd MarDiv &bull; 12th MLR &bull; 1st MAW &bull; 3rd MDTF &bull; 18th Wing (Kadena) &bull; 7th Fleet &bull; JGSDF Western Army<br/><br/>
            <strong>Exercise Areas:</strong> Okinawa Main Island &bull; Miyako Island &bull; Ishigaki Island &bull; Yonaguni Island &bull; Naha AB &bull; Kanoya AB &bull; Multiple Kyushu training areas<br/><br/>
            <strong style="color: #eab308;">&#9888; Key Signal:</strong> Permanent Typhon storage in Japan represents a fundamental shift in U.S. forward-deployed strike capability. The system&rsquo;s Tomahawk and SM-6 missiles can reach Chinese coastal military installations, drawing sharp protests from Beijing and Moscow.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: F-22 DEPLOYMENT & KADENA FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Kadena AB / Air Power / Force Posture &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-22 Raptors Now Operational at Kadena; F-15EX Delivery Delayed to 2027; 18th AMXS Activated; Kadena Airmen Deployed to Iran Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptors</strong> &mdash; the <strong>90th Expeditionary Fighter Squadron</strong> (JBER, Alaska) and the <strong>27th Expeditionary Fighter Squadron</strong> (JBLE, Virginia) &mdash; are now operational at Kadena Air Base for rotational duty with the 18th Wing. Twelve aircraft arrived in early May. Kadena remains the <strong>closest U.S. Air Force installation to Taiwan (~450 miles)</strong>, making it the most strategically critical airbase in the Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent replacement fleet of <strong>36 F-15EX Eagle II fighters has been delayed to 2027</strong>, nearly a year behind schedule due to a Boeing St. Louis plant strike (Aug&ndash;Nov 2024). The <strong>18th Aircraft Maintenance Squadron was activated on May 15</strong> to support the eventual transition. Meanwhile, airmen from Kadena have been deployed <strong>&ldquo;in harm&rsquo;s way&rdquo;</strong> as part of U.S. military operations against Iran (Operation Epic Fury), and OHA rates for off-base personnel increased <strong>$400&ndash;$500/month</strong> effective May 16.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Current Kadena Fighter Mix:</strong> F-22A Raptor (2 sqns rotational) &bull; Rotational fighter gap persists pending F-15EX delivery in 2027<br/><br/>
            <strong>Environmental Note:</strong> A 575-gallon diesel fuel spill in March affected Kadena&rsquo;s stormwater system; remediation complete but environmental monitoring ongoing<br/><br/>
            <strong style="color: #eab308;">&#9888; Key Concern:</strong> Continued reliance on rotational fighter deployments (F-22, F-35A, F-16, F-15E) rather than a permanent squadron creates readiness gaps and limits Kadena&rsquo;s surge capacity in a Taiwan contingency.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU MIDDLE EAST DEPLOYMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Force Gap / Strategic Risk &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East; Marine Commandant Acknowledges Indo-Pacific Force Gap; Iran Blockade Operations Continue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; remains in the Middle East after being ordered from Okinawa on <strong>March 13</strong>. Approximately <strong>2,500 Marines</strong> aboard USS Tripoli and its amphibious ready group (USS San Diego, USS New Orleans, homeported at Sasebo) have been enforcing the <strong>Iranian port blockade since April 13</strong>. On April 20, Marines with the 31st MEU rappelled from helicopters onto the Iranian-flagged vessel Touska in a boarding operation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Marine Commandant has publicly <strong>acknowledged the Indo-Pacific coverage gap</strong> created by the 31st MEU&rsquo;s Middle East deployment. Defense analysts warn this leaves a significant gap in U.S. rapid-response capability in the Western Pacific, increasing the defense burden on Japan&rsquo;s Self-Defense Forces and other allied nations at precisely the time China&ndash;Japan tensions are escalating. No timeline for the 31st MEU&rsquo;s return to Okinawa has been announced.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Deployed Units:</strong> 31st MEU &bull; USS Tripoli (LHA-7) &bull; USS San Diego (LPD-22) &bull; USS New Orleans (LPD-18)<br/><br/>
            <strong>Homeport Gap:</strong> Camp Hansen / Camp Schwab / Camp Courtney (Okinawa) &bull; Sasebo Naval Base &bull; No replacement MEU rotated into the Indo-Pacific<br/><br/>
            <strong style="color: #ef4444;">&#9660; RISK:</strong> The 31st MEU&rsquo;s absence coincides with China&rsquo;s Eastern Theater Command conducting combat readiness patrols in the East China Sea, PLA warships transiting near Okinawa, and the upcoming Resolute Dragon / Valiant Shield exercises &mdash; creating a window of reduced amphibious capability in the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">East Asia / Geopolitics / Economic Warfare &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&ndash;Japan Diplomatic Crisis Deepens: Rare Earth Embargo, East China Sea Military Buildup, PLA Warships Transit Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China&ndash;Japan diplomatic crisis</strong> continues to intensify. China has effectively <strong>cut off exports of rare earth minerals</strong> (dysprosium, terbium, yttrium oxide) and gallium to Japan since December 2025, with only minimal shipments getting through. In January 2026, Beijing <strong>banned all dual-use item exports to Japan for military use</strong>. Chinese tourist visits to Japan have plummeted &mdash; down <strong>60.7% in January, 45.2% in February, and 55.9% in March</strong> year-over-year. Japan has also protested China&rsquo;s construction of a <strong>new maritime structure west of the Japan&ndash;China median line</strong> in the East China Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PLA Eastern Theater Command has conducted <strong>joint naval and air readiness patrols</strong> in the East China Sea and sent warships transiting near Okinawa following a JMSDF destroyer&rsquo;s Taiwan Strait transit in April. PM Takaichi&rsquo;s November 2025 statement that a Chinese attack on Taiwan could trigger Japan&rsquo;s collective self-defense provisions remains the central flashpoint. Japan&rsquo;s Ground Component Command conducted its <strong>first-ever training focused on the Nansei Islands</strong> (Ishigaki, Yonaguni, Miyakojima) in late May, and Japan plans to deploy <strong>medium-range SAMs to Yonaguni Island</strong> (110 km from Taiwan) by fiscal 2030.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Economic Warfare:</strong> Rare earth embargo threatens Japan&rsquo;s defense electronics, EV, and semiconductor manufacturing &bull; Lynas (ASX: LYC) producing only 8 tonnes/quarter vs. China&rsquo;s prior 14 tonnes/month to Japan alone<br/><br/>
            <strong>Military Escalation Indicators:</strong> PLA Eastern Theater Command combat readiness patrols &bull; Chinese warships near Okinawa &bull; New East China Sea maritime structure &bull; JMSDF Taiwan Strait transits drawing stronger Chinese response<br/><br/>
            <strong style="color: #ef4444;">&#9660; RISK LEVEL: ELEVATED</strong> &mdash; Simultaneous economic coercion, military posturing, and diplomatic freeze represent the most strained China&ndash;Japan relations since normalization in 1972.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CAMP HANSEN BARRACKS & BASE DEVELOPMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Infrastructure / Base Operations &mdash; June 5&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Camp Hansen &ldquo;Barracks of the Future&rdquo; Opens for 1,100 Marines; Governor Tamaki Seeks Third Term; Henoko Stalemate Continues; Sexual Assault Civil Case Ruling</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony was held on <strong>June 5</strong> for a <strong>$320 million barracks complex</strong> at Camp Hansen in Kin Town (funded by the Japanese government), housing <strong>1,096 unaccompanied enlisted Marines</strong>. Each Marine receives a private 155-sq-ft bedroom; <strong>11 more buildings</strong> are planned. OHA for off-base personnel increased <strong>$400&ndash;$500/month on May 16</strong>. On <strong>June 4</strong>, Naha District Court ordered <strong>Lance Cpl. Jamel Clayton</strong> to pay ~$41,200 in damages for a 2024 sexual assault in Yomitan village; he is serving a seven-year sentence. This follows U.S. Forces Japan&rsquo;s off-base drinking restriction (0100&ndash;0500 ban) imposed in October 2024.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Governor Denny Tamaki</strong> announced he will seek a <strong>third term in the September 13 gubernatorial election</strong>, reaffirming opposition to the Henoko relocation. His challenger, <strong>Genta Koja</strong> (42, former Naha deputy mayor), supports the relocation. The <strong>Futenma&ndash;Henoko dispute</strong> remains deadlocked: the Pentagon insists it will <strong>not return Futenma unless a long runway is secured at Henoko</strong>, but Henoko&rsquo;s V-shaped runways are only ~1,800m vs. Futenma&rsquo;s 2,700m. U.S.&ndash;Japan cost-sharing negotiations continue with the current framework expiring in 2026. Defense experts are also arguing Washington should <strong>halt the Marine pullback from Okinawa to Guam</strong>, warning it would weaken deterrence against China.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Base Operations &amp; Political Summary</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Installations Status:</strong> All U.S. bases TCCOR 1 (all clear) &bull; Post-typhoon and post-tsunami recovery complete &bull; No infrastructure damage<br/><br/>
            <strong>Quality of Life:</strong> New $320M barracks at Camp Hansen (1,096 capacity) &bull; OHA increase $400&ndash;500/month &bull; 12th Littoral Anti-Air Bn new building at Hansen (March)<br/><br/>
            <strong>Political Watch:</strong> Governor election Sept 13 (Tamaki vs. Koja) &bull; Henoko runway dispute unresolved &bull; DPRI Marine pullback to Guam under debate &bull; Okinawa 2% accommodation tax launching FY2026<br/><br/>
            <strong>Force Protection:</strong> Off-base 0100&ndash;0500 drinking ban remains in effect &bull; Civil liability precedent set in Clayton case
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Strategic Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture is stretched thin at a critical moment.</strong> The 31st MEU&rsquo;s absence in the Middle East leaves a gap in Indo-Pacific amphibious capability at the same time China is escalating military activity around Okinawa. The upcoming Resolute Dragon and Valiant Shield exercises (starting June 20) are designed to demonstrate allied resolve, but the Typhon missile&rsquo;s permanent storage in Japan will further inflame Beijing.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&ndash;Japan tensions are at their worst since normalization.</strong> The rare earth embargo, military posturing in the East China Sea, collapsed tourism, and dual-use export bans represent a comprehensive pressure campaign. Okinawa sits at the center of this confrontation as the anchor of the First Island Chain defense strategy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Today&rsquo;s tsunami advisory tested readiness.</strong> The M7.8 Philippines earthquake triggered swift base evacuations and school relocations &mdash; all personnel accounted for, no damage. The response validated force protection procedures, but Okinawa&rsquo;s seismic and typhoon vulnerability remains a persistent operational planning factor.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On-island developments remain positive.</strong> Camp Hansen&rsquo;s $320M barracks signal continued U.S. commitment to long-term presence. The September gubernatorial election (Tamaki vs. Koja) will shape the next phase of the Futenma/Henoko debate. Kadena&rsquo;s F-22 rotations maintain air superiority coverage pending the delayed F-15EX transition. The 12th Marine Littoral Regiment continues modernization as a stand-in force with NMESIS anti-ship missile capabilities.
      </p>
    </div>

    <!-- ===================== REGIONAL SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Regional Snapshot &mdash; ${today}</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">64,024 (-3.85%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TOPIX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">3,852 (-2.45%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Under pressure from geopolitical risk</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$96 (Hormuz closure ongoing)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TCCOR Status</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">TCCOR 1 (All Clear)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">31st MEU Status</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Deployed &mdash; CENTCOM AOR</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">China&ndash;Japan Threat Level</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">ELEVATED</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Okinawa Tourism</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Record 10M+ visitors (FY2025)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Rainy Season</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Active &mdash; expected to end late June</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; Japan Times &bull; Air &amp; Space Forces Magazine &bull; The Diplomat &bull; Foreign Policy &bull; CSIS &bull; International Crisis Group &bull; Bloomberg &bull; South China Morning Post &bull; Defense News &bull; Naval News &bull; ABC News &bull; Taiwan News &bull; Military.com &bull; Military Times &bull; III MEF Public Affairs &bull; Kadena AB Public Affairs &bull; PACOM &bull; Nippon.com &bull; DVIDS &bull; Okinawa Prefectural Government &bull; Japan Meteorological Agency &bull; Expedia Travel Data &bull; Trading Economics
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence reporting. Sources verified across multiple outlets where possible.<br/>
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
    console.log('\\nNote: Sent in testing mode via onboarding@resend.dev.');
    console.log(`Target recipients: ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
