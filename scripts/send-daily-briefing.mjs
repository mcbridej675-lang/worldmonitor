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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Regional Threats &bull; Weather</p>
    </div>

    <!-- ===================== WEATHER ADVISORY: TROPICAL STORM MEKKHALA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX ALERT</span>
          <span style="color: #666; font-size: 11px;">Weather / Tropical Cyclone / Okinawa &mdash; June 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Mekkhala (No. 7) Forms Today East of Philippines &mdash; Forecast to Reach Typhoon Strength by June 22; May Approach South of Okinawa by June 24&ndash;25</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Tropical Storm Mekkhala</strong> formed at 0300 local on June 20, approximately <strong>1,960 km east-southeast of Taiwan</strong> and 524 km north of Yap. Current sustained winds are <strong>90 kph with gusts to 119 kph</strong>, moving west-northwest at 23&ndash;27 km/h.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Forecast:</strong> Expected to strengthen to <strong>severe tropical storm by Saturday evening</strong> and reach <strong>typhoon intensity (30+ m/s) by June 22&ndash;23</strong>. Track models show the system advancing to <strong>south of the Ryukyu Islands by June 24</strong>, with the potential for the rainy season front and typhoon to combine for <strong>exceptionally heavy rainfall</strong> across the region. Track uncertainty remains significant &mdash; some models show passage south of Okinawa; others indicate a more direct approach.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Action Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Monitor TCCOR updates from 18th Wing and MCIPAC. Review typhoon preparedness kits and evacuation plans. This system may impact Resolute Dragon 26 and Okinawa Memorial Day (June 23) activities. <strong>2026 typhoon season forecast: 28 typhoons projected (above average); 14 expected to approach Japan.</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SEISMIC ACTIVITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">SEISMIC</span>
          <span style="color: #666; font-size: 11px;">Natural Hazard / Earthquake / Okinawa &mdash; June 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">M4.9&ndash;5.1 Earthquake Reported Near Yaese, Okinawa Yesterday (June 19) at 8 km Depth</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 4.9&ndash;5.1 earthquake</strong> was recorded near <strong>Yaese, Shimajiri-gun, Okinawa</strong> on June 19 at a depth of approximately <strong>8.0 km</strong>. No tsunami advisory was issued. This follows a June 8 tsunami advisory triggered by a <strong>M7.8 earthquake off Mindanao, Philippines</strong> that forced evacuations of 195,000+ residents across Japan&rsquo;s coast, including Kadena AB (18th Wing ordered personnel out of water; evacuation gates opened). <strong>70 quakes</strong> near Okinawa recorded in 2026 to date.
        </p>
      </div>
    </div>

    <!-- ===================== PRIORITY: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Exercises / Okinawa &mdash; June 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Resolute Dragon 26 Begins Today: 9,600 USMC &amp; JGSDF Personnel Conducting Island Defense Drills Across Okinawa &amp; Kyushu (Jun 20&ndash;30)</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26</strong> launched today with approximately <strong>9,600 personnel</strong> (7,300 JGSDF, 2,300 USMC). The exercise pairs <strong>III Marine Expeditionary Force</strong> with the <strong>Japan Ground Self-Defense Force</strong>, focused on island defense, command &amp; control, and multi-domain maneuver.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.S. participants:</strong> 3rd Marine Division, 3rd MEB, 1st MAW, 12th Marine Littoral Regiment, U.S. Army 3rd Multi-Domain Task Force, U.S. Navy 7th Fleet, USAF 18th Wing (Kadena).<br/><br/>
          <strong>Locations:</strong> JGSDF bases in Oita, Saga, Kumamoto, Kagoshima; Tokuno Island; Amami Oshima; <strong>Okinawa, Miyako Island, Ishigaki Island, Yonaguni Island</strong>; JASDF Naha Air Base.<br/><br/>
          <strong>Equipment:</strong> Type 10 tanks, Type 88 and Type 12 anti-ship missile launchers, air-ground integration exercises. GSDF Western Army CG Lt. Gen. Seiji Toriumi: demonstrating defense capabilities <em>&ldquo;is very important for peace and stability in the Indo-Pacific region.&rdquo;</em>
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Key Development</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>JGSDF V-22 Ospreys will operate from MCAS Futenma for the first time.</strong> Three Ospreys from Camp Saga will deploy to Futenma and conduct flights to Miyako Island (~220 mi from Taiwan) &mdash; also a first. Training includes medevac exercises from Miyako to Futenma. Expect increased military air and ground traffic island-wide through June 30.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== VALIANT SHIELD + TYPHON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Indo-Pacific &mdash; June 16&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Valiant Shield 2026 Launches Jun 22; Typhon Mid-Range Missile System Deploying to Southern Japan &mdash; Will Remain After Exercise</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Valiant Shield 2026</strong> begins <strong>June 22 through July 1</strong> across the Western Pacific. The U.S. Army&rsquo;s <strong>3rd Multi-Domain Task Force</strong> (Fort Shafter, Hawaii) is deploying the <strong>Typhon mid-range missile system and HIMARS</strong> to <strong>JMSDF Kanoya Airbase, Kagoshima Prefecture</strong>. Typhon fires <strong>Tomahawk cruise missiles (~1,600 km range)</strong> and <strong>SM-6 interceptors (300+ km)</strong>. No live firing scheduled.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Critical shift:</strong> Unlike the September 2025 deployment where the system was flown out, <strong>the Typhon will be stored in Japan on a U.S. base after the exercise concludes</strong>. Japan MOD stated this will <em>&ldquo;strengthen the deterrence and response capabilities of the Japan-U.S. alliance.&rdquo;</em> China and Russia have both condemned the deployment.
        </p>
      </div>
    </div>

    <!-- ===================== 31ST MEU / INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Strategic &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Deployed to Middle East Since March &mdash; Indo-Pacific Capability Gap &ldquo;Unfilled,&rdquo; Marine Commandant Tells Congress</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>2,500 Marines of the 31st MEU</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; departed Okinawa on <strong>March 13 aboard USS Tripoli (LHA-7)</strong> with USS New Orleans, USS San Diego, USS Robert Smalls, and USS Rafael Peralta for Operation Epic Fury against Iran. The task force totals ~3,500 Marines and sailors.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Commandant <strong>Gen. Eric Smith</strong> testified before HASC in May: <em>&ldquo;Well, frankly, the gap is unfilled. When you move an [ARG/MEU], you simply don&rsquo;t replace it.&rdquo;</em> He also noted: <em>&ldquo;Guam puts us going the wrong way&hellip;a long way from the crisis theater.&rdquo;</em> The <strong>USS Boxer ARG / 11th MEU</strong> from Camp Pendleton has deployed to 7th Fleet&rsquo;s AOR as an interim measure. Analysts warn adversaries will portray the U.S. as <em>&ldquo;a declining and unreliable power in Asia.&rdquo;</em>
        </p>
      </div>
    </div>

    <!-- ===================== F-22 AT KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Military / Air Power / Kadena AB &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-22 Raptors Standing Alert at Kadena; 32 Warplanes Confirmed &mdash; Largest Surge Since 2007; F-15EX Delayed to 2027 (Boeing Strike Impact)</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          ~12 <strong>F-22 Raptors</strong> from <strong>90th FS</strong> (JBER, Alaska) and <strong>27th FS</strong> (JB Langley-Eustis) arrived at Kadena May 5 for rotational duty. Japan MOD confirmed <strong>32 warplanes on June 1&ndash;2</strong> &mdash; largest concentration since 2007. ~20 remained as of June 15. Kadena sits <strong>~450 miles from Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent replacement &mdash; <strong>36 F-15EX Eagle II fighters</strong> &mdash; has been delayed to <strong>2027</strong> due to Boeing&rsquo;s Aug&ndash;Nov 2025 strike. Air Force Secretary Troy Meink: <em>&ldquo;Boeing has fallen behind a bit&hellip;we&rsquo;re working closely with them to increase production to get well beyond two per month.&rdquo;</em> The <strong>18th Aircraft Maintenance Squadron activated May 15</strong> to support the transition.
        </p>
      </div>
    </div>

    <!-- ===================== CHINA / SENKAKU ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Security / East China Sea / Maritime &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Coast Guard Sets Record 112-Day Consecutive Presence Near Senkaku Islands; PLA Holds East China Sea Drills After JMSDF Taiwan Strait Transit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese Coast Guard vessels have maintained <strong>112 consecutive days of activity</strong> in the Senkaku contiguous zone &mdash; the <strong>longest streak since tracking began in 2012</strong>. Two CCG vessels set a <strong>42-hour intrusion duration record</strong> in territorial waters. <strong>22 CCG ships displacing 3,000+ tons</strong> now patrol the Senkakus &mdash; double the 2019 fleet. <strong>21 territorial water intrusions</strong> recorded since January 1.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PLA conducted <strong>joint combat readiness patrols in the East China Sea on April 18</strong>, one day after a JMSDF warship transited the Taiwan Strait. Carrier <strong>Liaoning</strong> deployed southward into the Western Pacific. China&rsquo;s 003 carrier <strong>Fujian</strong> has been commissioned; the 004 nuclear carrier program is in development.
        </p>
      </div>
    </div>

    <!-- ===================== NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Security / North Korea / WMD &mdash; June 3&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">DPRK Unveils New Nuclear Fuel Facility; Kim Pledges &ldquo;Exponential&rdquo; Nuclear Expansion &mdash; U.S.-Japan Extended Deterrence Dialogue Held Jun 8&ndash;9</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kim Jong Un toured a <strong>new nuclear weapons fuel production facility</strong> on June 3&ndash;4, announcing plans for <strong>&ldquo;exponential&rdquo;</strong> nuclear force expansion. The <strong>U.S.-Japan Extended Deterrence Dialogue</strong> was held June 8&ndash;9 at MOFA Tokyo, with participation from Japan Joint Staff, USSTRATCOM, USINDOPACOM, and USFJ. The U.S. reaffirmed its commitment to Japan&rsquo;s defense using <strong>the full range of capabilities, including nuclear</strong>. No imminent DPRK missile test indicators as of June 20.
        </p>
      </div>
    </div>

    <!-- ===================== COMMAND / ADMIN UPDATES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Command / Admin / Okinawa &mdash; June 12&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">INDOPACOM Reverts to &ldquo;PACOM&rdquo; (Jun 17); New MCIPAC Commander at Futenma (Jun 12); Solo Military Patrols Still Suspended</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PACOM Name Reversion (Jun 17):</strong> The Pentagon officially renamed U.S. Indo-Pacific Command back to <strong>U.S. Pacific Command (PACOM)</strong>, restoring the original name used before 2018. AOR remains unchanged. The 2026 NDS notably dropped &ldquo;Indo-Pacific&rdquo; as a &ldquo;priority theater&rdquo; designation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>New MCIPAC Commander (Jun 12):</strong> <strong>BGen Ralph Rizzo Jr.</strong> assumed command of Marine Corps Installations Pacific at MCAS Futenma, replacing MajGen Brian Wolford. LtGen Roger Turner (III MEF CG) noted the command faces <em>&ldquo;unprecedented challenges with contested sea space, contested airspace, contested cyberspace.&rdquo;</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Solo Patrols Suspended:</strong> U.S. military solo patrols in Okinawa nightlife districts remain suspended following a Nov 2025 incident (MP violent detention on Gate 2 Street). Joint patrols with Japanese police continue.
        </p>
      </div>
    </div>

    <!-- ===================== HENOKO / FUTENMA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Government / Base Realignment &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Expands to New Section (Jun 17); Pentagon: Long Runway Required or Futenma Won&rsquo;t Be Returned; Kishaba Housing Area Return on Track for Fall</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          New landfill operations began <strong>June 17 in a new section of Oura Bay</strong>. Construction is <strong>17% complete on landfill, 6.6% on pile driving</strong> (4,700 of 71,000 sand piles installed). Government estimates completion ~April 2033; U.S. military officials estimate 2037+; cost projected at <strong>2.65 trillion yen (~$6B)</strong>. Pentagon maintains <strong>Futenma will not be returned without a sufficiently long runway</strong> at Henoko. Governor <strong>Denny Tamaki</strong> (anti-base) is seeking a third term in the <strong>Sep 13 gubernatorial election</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Camp Foster:</strong> ~12 acres of <strong>Kishaba Housing Area</strong> (32 units) on track for return by <strong>fall 2026</strong>. Okinawa plans to widen Prefectural Road 81 from 2 to 4 lanes upon return.
        </p>
      </div>
    </div>

    <!-- ===================== ON-ISLAND NEWS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">On-Island / Base News &mdash; June 5&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">On-Island Updates: $320M Barracks at Hansen; Sexual Assault Case Dropped; Marine Trial; Helicopter Bag Drop; PFAS Contamination</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>New Barracks (Jun 5):</strong> Camp Hansen debuted <strong>$320M &ldquo;barracks of the future&rdquo;</strong> funded by GOJ. 1,096 enlisted Marines get private bedrooms in 710-sq-ft shared units. Move-in expected July 2026. 11 more buildings planned for Hansen and Kinser.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Case Dropped (Jun 11):</strong> Naha prosecutors dismissed sexual assault charges against a soldier from <strong>E Battery, 1-1 ADA, 38th ADA BDE</strong> at Kadena AB. Soldier fined ~$125 for traffic violations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Marine Trial (Jun 10):</strong> PFC Austin Wedington, 28, faces forcible sexual intercourse charges at Camp Foster&rsquo;s Gunners Fitness Center (March 2025). Pleading not guilty by reason of insanity. Trial ongoing in Japanese court.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Helicopter Bag Drop (Jun 6):</strong> USMC concluded search for emergency survival equipment bag (flares, strobe, sea dye) that fell from a Marine helicopter. Not recovered.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PFAS (Apr 9):</strong> Kin town found <strong>PFAS levels at 4x Japan&rsquo;s limit</strong> (220 ppt vs 50 ppt) in water samples near Camp Hansen. Request for on-base sampling was denied.
        </p>
      </div>
    </div>

    <!-- ===================== MEMORIAL DAY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">UPCOMING</span>
          <span style="color: #666; font-size: 11px;">Observance / Okinawa &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Memorial Day (Irei no Hi) &mdash; June 23: 242,659 Names Now Engraved at Cornerstone of Peace</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>June 23</strong> marks <strong>Irei no Hi</strong>, commemorating the ~240,000 lives lost during the Battle of Okinawa. Ceremony at <strong>Peace Memorial Park, Itoman</strong> begins at <strong>11:50 a.m.</strong> with island-wide <strong>moment of silence at noon</strong>. Schools close prefecture-wide. Traffic restrictions in effect around the park.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 18, <strong>95 new names</strong> were installed on the Cornerstone of Peace monument (now 242,659 total), including 62 Japanese (approximately half being crew of battleship <em>Yamato</em>), 32 Okinawans, and <strong>1 American &mdash; Marine Cpl. Felix Ordoquihandy</strong>, a Basque-American who drowned off Okinawa on July 17, 1945, age 19. U.S. Army Garrison Okinawa, JSDF, and USN volunteers jointly cleaned the park on June 13.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Operational tempo is at peak.</strong> Resolute Dragon 26 (today) and Valiant Shield (Jun 22) are running concurrently with 9,600+ personnel across the First Island Chain. JGSDF Ospreys operating from Futenma and on Miyako for the first time signals deepening bilateral interoperability. The Typhon missile system&rsquo;s permanent storage in Japan is a watershed moment for forward-deployed strike capability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The 31st MEU gap is real.</strong> The Commandant has acknowledged to Congress that the Indo-Pacific deterrence gap created by the MEU&rsquo;s Middle East deployment is &ldquo;unfilled.&rdquo; The 11th MEU provides partial coverage, but Okinawa-based rapid response capability remains degraded.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Weather watch: Tropical Storm Mekkhala.</strong> Forming today, forecast to reach typhoon strength by Sunday. Track models indicate potential approach south of Okinawa by June 24&ndash;25. Could impact Memorial Day observances and ongoing exercises. Monitor TCCOR updates.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">China&rsquo;s grey-zone pressure is intensifying.</strong> Record CCG presence (112 days, 42-hour intrusions, 22-ship fleet) at the Senkakus combined with PLA East China Sea combat patrols signal sustained coercion. DPRK nuclear production expansion adds to the regional threat environment.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Today &bull; USNI News &bull; DVIDSHUB &bull; U.S. State Department &bull; Japan Times &bull; Air &amp; Space Forces Magazine &bull; The Diplomat &bull; South China Morning Post &bull; Newsweek &bull; Japan MOD &bull; Japan Coast Guard &bull; NPR &bull; Focus Taiwan &bull; AccuWeather &bull; Military.com &bull; Task and Purpose &bull; Atlantic Council &bull; Earthquake Track &bull; Foreign Policy &bull; CRS Reports
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
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
