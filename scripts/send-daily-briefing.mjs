#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const VERIFIED_RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];

const ALL_RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const useTestingMode = !process.env.RESEND_DOMAIN_VERIFIED;
const RECIPIENTS = useTestingMode ? VERIFIED_RECIPIENTS : ALL_RECIPIENTS;

const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  process.exit(1);
}

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

const sectionStyle = `background: #111; border: 1px solid #1a1a1a; padding: 20px;`;
const impactBoxStyle = `background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;`;

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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Regional Security &bull; Government &bull; Weather</p>
    </div>

    <!-- ========== FLASH: TCCOR 2 ========== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #1a0505; border: 2px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">FLASH</span>
          <span style="color: #ef4444; font-size: 11px; font-weight: 700;">WEATHER / FORCE PROTECTION &mdash; June 25, 0700L</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">TCCOR 2 Set Across All Okinawa Installations &mdash; Tropical Storm Mekkhala Approaching</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All U.S. military bases on Okinawa entered <strong style="color: #ef4444;">Tropical Cyclone Condition of Readiness (TCCOR) 2</strong> at 0700 Thursday, June 25, anticipating destructive winds of 58+ mph within 24 hours. <strong>Tropical Storm Mekkhala</strong> (downgraded from typhoon; previously reached Category 4 on June 22) is projected to pass <strong>42 miles west-northwest of Kadena Air Base around 0500 Friday</strong> with sustained winds of 60 mph and gusts reaching 75 mph. Central pressure: 975 hPa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Seas:</strong> Waves forecast at 5 meters (Wed), <strong>7 meters (23 ft) Thursday&ndash;Friday</strong> with swells. <strong>Rainfall:</strong> Up to 60mm in 24h ending June 26; additional 150mm the following 24h. <strong>Aviation:</strong> ANA canceled 22 flights; JAL canceled 11; JAL Group Okinawa carriers canceled 43 flights. MCAS Futenma Osprey flights canceled Thursday. Camp Foster is sandbagging warehouse entrances. This is the <strong>second tropical storm this month</strong> (Typhoon Jangmi struck June 1, grounding 400+ flights).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong style="color: #f59e0b;">Second Storm Tracking:</strong> Tropical Storm Higos (No. 8) is tracking toward eastern Japan later this week. Forecasters are monitoring the possibility that <strong>Mekkhala and Higos could merge south of Honshu</strong>, potentially producing additional heavy rain and rough seas through the weekend.
        </p>
      </div>
    </div>

    <!-- ========== SECTION: MILITARY / DEFENSE ========== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 12px 20px; margin-bottom: 4px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: 800;">Section I &mdash; Military &amp; Defense</p>
    </div>

    <!-- 1: NMESIS/MADIS -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives First NMESIS &amp; MADIS Platforms on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong> formally received Okinawa&rsquo;s first <strong>NMESIS</strong> (Navy-Marine Expeditionary Ship Interdiction System) and <strong>MADIS</strong> (Marine Air Defense Integrated System) on June 23. NMESIS mounts a <strong>Naval Strike Missile (115+ mi range) on a JLTV</strong> for semi-autonomous and fully autonomous anti-ship strikes. MADIS is a dual-JLTV system with <strong>360&deg; radar, EW suite, multi-Stinger missiles, and 30mm cannon</strong> for counter-UAS and low-altitude air defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 3rd MLR (Hawaii) previously deployed both systems during <strong>Balikatan 26</strong> in May, conducting dry-fire missions in the Philippine Batanes Islands and engaging drones in Zambales. The 12th MLR is the <strong>second unit service-wide</strong> to receive these platforms, marking a <strong>major Force Design 2030 milestone</strong> &mdash; Okinawa-based Marines now have organic stand-off anti-ship and layered air defense capability purpose-built for First Island Chain warfare.
        </p>
      </div>
    </div>

    <!-- 2: RESOLUTE DRAGON -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Exercises / U.S.-Japan Alliance &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Resolute Dragon 26 Underway &mdash; III MEF &amp; JGSDF Across Kyushu and Nansei Islands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26</strong> (June 20&ndash;30) is underway between III MEF and Japan Ground Self-Defense Force. U.S. participants include <strong>3rd Marine Division, 3rd MEB, 1st MAW, 12th MLR, U.S. Army 3rd Multi-Domain Task Force, 7th Fleet elements, and 18th Wing (Kadena)</strong>. Training spans JGSDF bases in <strong>Oita, Saga, Kumamoto, and Kagoshima prefectures</strong> on Kyushu, plus <strong>Tokuno and Amami Oshima islands</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A JGSDF V-22 Osprey was planned to airlift a mock patient from Miyako Island to MCAS Futenma, but <strong>Osprey flights were canceled Thursday due to Typhoon Mekkhala</strong>; Friday&ndash;Monday operations are under review. The storm may disrupt the exercise&rsquo;s final phase. Concurrently, <strong>Exercise Valiant Shield 26</strong> (June 22 &ndash; July 1) is running in the Marianas/Guam with U.S., Japan, Canada, New Zealand, and Australia &mdash; notably featuring the <strong>Boeing MQ-28 Ghost Bat</strong> collaborative combat aircraft integrating with allied forces for the first time.
        </p>
      </div>
    </div>

    <!-- 3: FREEDOM BANNER -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">HA/DR / Logistics &mdash; June 24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Freedom Banner: III MEF Demonstrates HA/DR Readiness at Kin Blue Beach Between Storms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          III MEF and <strong>Maritime Pre-Positioning Ship Squadron 3</strong> conducted Exercise Freedom Banner at Kin Blue Beach on June 24. <strong>USNS 1st Lt. Jack Lummus</strong> (arrived June 13) provided equipment including tactical fuel distribution systems (<strong>two 50,000-gallon JP-8 bladders</strong>), lightweight reverse-osmosis water purifiers, medical capabilities, and food service. <strong>MWSS-172</strong> participated. This was the <strong>first Japan-based iteration</strong> of the exercise, strategically timed between Typhoon Jangmi (June 1) and approaching Mekkhala.
        </p>
      </div>
    </div>

    <!-- 4: 31ST MEU GAP -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Force Readiness / Indo-Pacific Gap &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East &mdash; Commandant Acknowledges Indo-Pacific Gap &ldquo;Unfilled&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st MEU (~2,500 Marines) and USS Tripoli ARG</strong> departed Okinawa on March 13 for the Middle East amid the Strait of Hormuz crisis. The unit arrived in CENTCOM AOR on March 27 and has been enforcing an Iranian port blockade since April 13. Marine Commandant <strong>Gen. Eric Smith testified before HASC</strong> that the resulting Indo-Pacific gap is <strong>&ldquo;unfilled.&rdquo;</strong> Kadena-based airmen are also deployed &ldquo;in harm&rsquo;s way&rdquo; for Iran operations, per Brig. Gen. Gallemore.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Mitigation:</strong> USS Boxer ARG / 11th MEU from Camp Pendleton deployed ahead of schedule to 7th Fleet AOR. III MEF spokesman Maj. Jordan Fox stated Okinawa-based forces remain &ldquo;postured, lethal, and ready to fight tonight.&rdquo; <strong>No return date announced.</strong>
        </p>
      </div>
    </div>

    <!-- 5: CAMP HANSEN BARRACKS -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Infrastructure / QoL &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Complex Opens at Camp Hansen &mdash; 1,096 Marines Get Private Rooms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Ribbon-cutting June 5 for Camp Hansen&rsquo;s new <strong>$320M bachelor enlisted quarters</strong>, Japan-funded under DPRI. Three buildings house <strong>1,096 Marines</strong> (through E-5). Each resident gets a <strong>private 155-sq-ft bedroom</strong> with personal sink; roommates share 710-sq-ft units with kitchen, bath, and laundry. Built by 15 local Okinawan companies. <strong>MajGen Brian Wolford</strong> (MCIPAC), <strong>Col. Joshua Mayoral</strong> (Camp Hansen CO), and <strong>Okinawa Defense Bureau Dir. Masaru Murai</strong> attended. Replaces six older barracks; <strong>11 additional buildings planned</strong> at Hansen and Camp Kinser.
        </p>
      </div>
    </div>

    <!-- 6: KADENA DEATH / F-15EX -->
    <div style="margin-bottom: 24px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Force Protection / Kadena AB &mdash; June 24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Civilian Employee Dies in Snorkeling Incident; F-22 Raptors Remain on Station</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>male civilian employee (40s)</strong> deployed to Kadena died after being swept away while snorkeling at <strong>Odo Coast, Itoman</strong> on June 24 in 8-foot waves. Recovered by helicopter after 1.5 hours. Pronounced dead at 6:58 p.m. Three companions escaped independently. Japan Coast Guard investigating. <strong>Brig. Gen. Gallemore:</strong> &ldquo;The 18th Wing is deeply saddened by this loss.&rdquo; <em>With Mekkhala approaching, heightened water safety awareness is critical.</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Kadena Air Posture:</strong> F-22 Raptors from the <strong>90th FS (JBER, Alaska) and 27th FS (Langley)</strong> deployed in early May (~12 aircraft). Kadena&rsquo;s permanent <strong>36 F-15EX Eagle IIs delayed to 2027</strong> due to 2025 Boeing strike. Continued rotational fighter deployments expected until delivery. <strong>18th AMXS activated May 15</strong> to strengthen maintenance capacity.
        </p>
      </div>
    </div>

    <!-- ========== SECTION: GEOPOLITICAL / SECURITY ========== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #f59e0b; padding: 12px 20px; margin-bottom: 4px;">
      <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: 800;">Section II &mdash; Geopolitical &amp; Regional Security</p>
    </div>

    <!-- 7: CHINA CARRIER -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Taiwan Strait / PLA Navy &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&rsquo;s Newest Aircraft Carrier Transits Taiwan Strait During Taiwan Military Exercises</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s newest and most powerful aircraft carrier <strong>sailed through the Taiwan Strait on June 23</strong>, one day after Taiwan began a five-day exercise simulating response to a Chinese attack. <strong>217 PLA incursions into Taiwan&rsquo;s ADIZ in May</strong> (down from 300+ monthly averages but still elevated). On June 7, Taiwan coast guard <strong>expelled four Chinese government ships</strong> from restricted waters off the island&rsquo;s southern tip.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Pratas Island:</strong> CCG vessel entered waters near Taiwan-controlled Pratas in late May, triggering a 30-hour standoff (May 23). CCG has made <strong>39 total incursions around Pratas since Feb 2025</strong>. <strong>Kinmen:</strong> Four CCG intrusions into Taiwan-administered waters in May (7th, 21st, 26th, 27th). <strong>Dutch Frigate Incident:</strong> PLA responded to HNLMS De Ruyter&rsquo;s FONOP near Paracels (May 28) with surface vessels, fighter aircraft, verbal warnings, and &mdash; for the first time publicly &mdash; <strong>electronic warfare jamming</strong>.
        </p>
      </div>
    </div>

    <!-- 8: BLOCKADE REHEARSAL -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Intelligence / A2AD / Maritime &mdash; June 6&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PRC &ldquo;Special Maritime Law Enforcement Operation&rdquo; East of Taiwan &mdash; Assessed as Blockade Rehearsal</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PRC Ministry of Transport conducted a <strong>&ldquo;special maritime law enforcement operation east of Taiwan&rdquo;</strong> (June 6&ndash;10) with <strong>3 MSA vessels + 1 SAR ship, escorted by 2 CCG ships</strong> (on station since June 1). An MSA vessel <strong>hailed three passing commercial ships by radio</strong> to request voyage/crew info &mdash; consistent with quarantine enforcement practice. Ship tracking showed PRC asserting a <strong>200-nautical-mile EEZ from Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Two PRC research ships (<em>Jia Geng</em>, <em>Da Yang Hao</em>) conducted <strong>surveys of the Gagua Ridge</strong> east of Taiwan during the operation &mdash; dual-use undersea mapping supporting PLA submarine ops. AEI analysts assess this as <strong>practice for potential blockade enforcement using civilian agencies for legal cover</strong>. This directly threatens sea lines of communication critical to Japan and Okinawa&rsquo;s logistical sustainment.
        </p>
      </div>
    </div>

    <!-- 9: SENKAKU / ECS -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">East China Sea / Senkakus &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Coast Guard Maintains Near-Daily Senkaku Presence &mdash; All Vessels Now Armed with 76mm Guns</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          CCG maintained presence near Senkaku Islands <strong>357 of 365 days in 2025</strong> (record). All four CCG vessels now equipped with <strong>deck-mounted 76mm autocannons</strong> since June 2024. China constructed <strong>three new oil/gas platforms</strong> in the ECS over the past year, drawing formal protests from Japan. <strong>Chinese maritime militia:</strong> 2,000+ fishing vessels assembled in organized formations in the ECS (Dec 25, 2025; 1,400 on Jan 14; largest in March during Iran crisis), positioned ~300 km from Taiwan.
        </p>
      </div>
    </div>

    <!-- 10: DPRK -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">10</span>
          <span style="color: #666; font-size: 11px;">DPRK / WMD &mdash; June 2&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Unveils Nuclear Fuel Plant; Kim Pledges &ldquo;Exponential&rdquo; Nuclear Expansion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Kim Jong Un visited a <strong>newly constructed nuclear weapon fuel production facility</strong> on June 3, with state media announcing plans to bolster nuclear forces <strong>&ldquo;at an exponential rate.&rdquo;</strong> This follows a <strong>modular missile live-fire test on June 2</strong> and multiple launches earlier in 2026 (January, April). Reuters documented expansion of nuclear missile facilities in Xinjiang with <strong>80+ launch pads</strong>; DoD assesses PRC on track for 1,000 warheads by 2030. Okinawa falls within range of DPRK medium- and intermediate-range ballistic missiles.
        </p>
      </div>
    </div>

    <!-- 11: JAPAN DEFENSE -->
    <div style="margin-bottom: 24px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">11</span>
          <span style="color: #666; font-size: 11px;">Japan SDF / Defense Posture &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Accelerating Southwest Island Defenses &mdash; Record $58B Budget, Yonaguni SAMs, Type 12 Deployed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>FY2026 defense budget: $58B (9.04T yen)</strong> &mdash; 12th consecutive record, up 3.8%. Includes 509B yen for integrated air/missile defense (SM-3 Block IIA, SM-6). <strong>Type 03 Chu-SAM</strong> missiles to deploy on Yonaguni Island (110 km from Taiwan) by FY2030. <strong>Upgraded Type 12 SSM</strong> (range: ~1,000 km, up from 100 km) deployed to Camp Kengun, Kyushu on March 31 &mdash; can reach China&rsquo;s coastline and North Korea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>15th Brigade (Naha HQ) upgrading to 15th Division</strong> to reinforce Nansei Islands rapid response. New <strong>$96M fighter aircraft shelter</strong> planned for Naha Air Base (counter-satellite surveillance). China condemned deployments as <strong>&ldquo;extremely dangerous&rdquo;</strong>; PM Takaichi previously stated Tokyo could use military force if China attacks Taiwan.
        </p>
      </div>
    </div>

    <!-- ========== SECTION: GOVERNMENT / POLITICAL ========== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 12px 20px; margin-bottom: 4px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: 800;">Section III &mdash; Government &amp; Political</p>
    </div>

    <!-- 12: IREI NO HI -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">12</span>
          <span style="color: #666; font-size: 11px;">Government / Community Relations &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Irei no Hi Memorial: 3,200 Gather; Governor Criticizes Base Burden; PM Heckled on Constitution</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>3,200 people</strong> gathered at Peace Memorial Park, Itoman for the <strong>81st anniversary of the Battle of Okinawa</strong>. <strong>Gov. Denny Tamaki</strong> criticized the &ldquo;heavy burden&rdquo; of U.S. bases and opposed Camp Schwab/Henoko construction. <strong>PM Sanae Takaichi</strong> pledged to &ldquo;consolidate, reduce and streamline U.S. military facilities&rdquo; but was <strong>disrupted by ~12 protesters</strong> shouting &ldquo;No war!&rdquo; and &ldquo;Don&rsquo;t change the constitution!&rdquo; &mdash; about five were removed. BGen Gallemore led ~50 service members in a separate U.S. ceremony.
        </p>
      </div>
    </div>

    <!-- 13: HENOKO -->
    <div style="margin-bottom: 2px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">13</span>
          <span style="color: #666; font-size: 11px;">Base Relocation / Infrastructure &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Land Reclamation Expanded; Pentagon Won&rsquo;t Return Futenma Without Long Runway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Defense Ministry <strong>began pouring earth in a new area east of Cape Henoko</strong> on June 17 for the Futenma Replacement Facility. Southern-side reclamation is nearly complete. Eastern-side work in Oura Bay delayed by soft undersea ground, requiring <strong>~71,000 sand piles</strong> driven into the seabed. FY2026 budget allocates <strong>$3.67B for USFJ projects</strong> including Henoko and Mageshima airfield. Okinawa Prefecture continues formal opposition.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The Pentagon maintains it <strong>will not return MCAS Futenma</strong> unless a long runway is secured. Futenma&rsquo;s runway: ~2,700m; Henoko&rsquo;s two V-shaped runways: ~1,800m each. Construction projected through at least <strong>2033</strong>.
        </p>
      </div>
    </div>

    <!-- 14: SEXUAL ASSAULT -->
    <div style="margin-bottom: 24px;">
      <div style="${sectionStyle}">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">14</span>
          <span style="color: #666; font-size: 11px;">Community Relations / Legal &mdash; June 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Sexual Assault Charges Against U.S. Soldier Dropped; USFJ Liberty Restrictions Remain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Naha prosecutors <strong>declined to charge a U.S. Army soldier</strong> (Echo Battery, 1-1 ADA, 38th ADA Brigade, Kadena) for alleged sexual assault (April incident). Dismissed June 11 without explanation; soldier fined ~$125 for traffic violation. At least two other sexual assault cases dropped in the past two years. USFJ liberty restrictions (off-base drinking ban 0100&ndash;0500) remain in effect since October 2024. A seven-year sentence was finalized in March for a Marine in a separate case.
        </p>
      </div>
    </div>

    <!-- ===================== KEY ASSESSMENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #22c55e; padding: 20px; margin-bottom: 24px;">
      <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; font-weight: 700;">Key Assessments</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">1. Force Posture Gap vs. Capability Upgrade:</strong> The 31st MEU&rsquo;s continued Middle East deployment creates the most significant readiness concern for Okinawa-based forces. However, NMESIS/MADIS delivery to the 12th MLR and three concurrent exercises (Resolute Dragon, Valiant Shield, Freedom Banner) demonstrate sustained alliance commitment despite the gap.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">2. China Escalation Pattern:</strong> The carrier transit, blockade rehearsal, Pratas patrols, armed CCG at Senkakus, maritime militia formations, and EW jamming of a Dutch frigate represent a <strong>coordinated multi-domain gray-zone escalation</strong> using military, coast guard, and civilian agencies. This complicates attribution and response thresholds.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">3. Allied Denial Network Taking Shape:</strong> NMESIS/MADIS on Okinawa + Type 12 on Kyushu + planned Yonaguni SAMs + Naha fighter shelter + 15th Division upgrade = a layered allied anti-access architecture across the Nansei Island chain. This is the most significant force posture change in the region in a decade.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">4. Near-Term Operational Risk:</strong> Typhoon Mekkhala (TCCOR 2) will constrain operations through the weekend. Combined with Resolute Dragon disruptions and the approaching second storm (Higos), expect reduced training tempo and possible TCCOR 1 escalation by Friday morning.
      </p>
    </div>

    <!-- ===================== WEATHER OUTLOOK ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #ef4444; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Weather &amp; Seismic Outlook</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TCCOR Status</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0; font-weight: 700;">TCCOR 2 &mdash; All Installations</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TS Mekkhala (No. 7)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">60 mph sustained / 75 mph gusts</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Closest Approach</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">42 mi W-NW of Kadena ~0500 Fri</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Wave Height (Thu&ndash;Fri)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7 meters (23 ft)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TS Higos (No. 8)</td>
          <td style="color: #f59e0b; text-align: right; padding: 6px 0;">Tracking E. Japan &mdash; Possible Merge</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Temperature</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">25&ndash;30&deg;C (77&ndash;86&deg;F)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Seismic (June)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">M4.6 Miyakojima (22nd), M4.5 Yonaguni (13th)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">2026 Season Forecast</td>
          <td style="color: #f59e0b; text-align: right; padding: 6px 0;">~28 storms (above average)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Military Times &bull; USNI News &bull; Defense News &bull; AEI China-Taiwan Update &bull; Japan Times &bull; Washington Times &bull; NPR &bull; DVIDSHUB &bull; Kadena AB Public Affairs &bull; PACOM Media &bull; U.S. Embassy Japan &bull; The Diplomat &bull; Newsweek &bull; Air &amp; Space Forces Magazine &bull; Naval News &bull; Reuters &bull; Weathernews &bull; Tokyo Weekender
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is compiled from open sources for informational purposes only. Sources verified across multiple outlets where possible.<br/>
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
  if (useTestingMode) {
    console.log(`\\nNote: Sent in testing mode to verified email only.`);
    console.log(`Target recipients (requires verified domain): ${ALL_RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
