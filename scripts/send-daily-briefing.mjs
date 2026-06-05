#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const TESTING_RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Force Posture &bull; Weather</p>
    </div>

    <!-- ===================== EVENT 1: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Infrastructure / USMC &mdash; June 5 (TODAY)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Ribbon-Cutting at Camp Hansen; 1,096 Marines to Move In by July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Installations Pacific commander <strong>Maj. Gen. Brian Wolford</strong>, Camp Hansen commander <strong>Col. Joshua Mayoral</strong>, and Okinawa Defense Bureau director <strong>Masaru Murai</strong> cut the ribbon today on a <strong>$320 million bachelor enlisted quarters complex</strong> at Camp Hansen. Funded by the Japanese government under the Defense Policy Review Initiative (DPRI), the complex includes <strong>three barracks housing 1,096 unaccompanied enlisted Marines</strong> (through sergeant rank).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Each Marine receives a <strong>private 155-square-foot bedroom</strong>; two Marines share a <strong>710-square-foot unit</strong> with kitchen, restroom, shower, and laundry. Fifteen local Okinawan construction companies built the complex, which began planning in 2019 and broke ground in March 2022. Marines are expected to <strong>move in by July 2026</strong>, replacing six older barracks. Wolford called it <strong>&ldquo;the first domino that starts falling for the rest of the construction.&rdquo;</strong>
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Quality of life:</strong> Major improvement for enlisted Marines on Okinawa. Japanese government funding signals continued host-nation commitment to sustaining the US presence. The &ldquo;first domino&rdquo; language indicates additional DPRI-funded construction projects in the pipeline across Okinawa installations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON / OSPREY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Exercise / US-Japan Alliance &mdash; June 3&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF V-22 Ospreys to Operate from MCAS Futenma for First Time; Resolute Dragon 26 Set for June 20&ndash;30</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a historic first, <strong>three JGSDF V-22 Osprey tiltrotors</strong> will deploy to <strong>MCAS Futenma</strong> in late June &mdash; the first time Japanese Ospreys have operated from a U.S. base on Okinawa. The deployment is part of <strong>Exercise Resolute Dragon 2026</strong> (June 20&ndash;30), bringing together approximately <strong>7,300 JGSDF and 2,300 U.S. military personnel</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ospreys will fly to <strong>Miyako Island</strong> (~220 miles east of Taiwan) and <strong>Ishigaki Island</strong> for medical evacuation training at Vice Camp Miyakojima and transportation drills at Ishigaki Airport. The exercise will also feature the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine Air Defense Integrated System (MADIS)</strong>. This is the first time JGSDF Ospreys have landed on Miyako Island. Focus areas: <strong>island defense, air-ground integration, logistics, and maritime security</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            JGSDF tiltrotors operating from a USMC installation signals deepening alliance integration and shared basing concepts for southwest island defense. China&rsquo;s Global Times has called the deployment a &ldquo;clear extension of Japan&rsquo;s military expansion.&rdquo; NMESIS and MADIS employment on Nansei Islands rehearses anti-ship and air defense scenarios directly relevant to a Taiwan contingency. Expect heightened PLA monitoring during the exercise window.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Force Posture / USMC / Indo-Pacific &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Deployed to Middle East for Operation Epic Fury; Marine Commandant Acknowledges Indo-Pacific &ldquo;Gap Is Unfilled&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit (~2,500 Marines)</strong> and <strong>USS Tripoli</strong> departed Okinawa in March 2026 for the Middle East to support <strong>Operation Epic Fury</strong> against Iran, enforcing a blockade of Iranian ports since April 13. Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee:
        </p>
        <p style="color: #fff; font-size: 14px; line-height: 1.6; margin: 0 0 12px; padding: 12px 16px; background: #1a1a1a; border-left: 3px solid #eab308; font-style: italic;">
          &ldquo;Well, frankly, the gap is unfilled. When you move one force from one combatant command theater to another, you don&rsquo;t replace it.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Partial mitigation: <strong>USS Boxer ARG and 11th MEU</strong> (Camp Pendleton) are operating in the 7th Fleet area, and elements from <strong>I and III MEF</strong> provide supplemental capability. However, the Okinawa-based rapid-response force that would typically be first to respond to a Taiwan or Korean Peninsula crisis is currently 5,000+ miles away.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Readiness Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Critical gap in Indo-Pacific rapid-response capability.</strong> The 31st MEU is the forward-deployed &ldquo;911 force&rdquo; for the Western Pacific. Its absence during a period of elevated China-Japan tensions and PLA activity near Okinawa represents a calculated risk. The Commandant&rsquo;s public acknowledgment underscores the strategic tradeoff between Middle East commitments and Indo-Pacific deterrence.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / East China Sea / PLA Activity &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Relations at Lowest Point in Decades; PLA Activity Near Okinawa Remains Elevated; Senkaku Incursions Continue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>China-Japan diplomatic crisis</strong> &mdash; triggered by PM Takaichi&rsquo;s November 2025 statement that a Chinese attack on Taiwan could constitute an &ldquo;existential crisis&rdquo; for Japan &mdash; continues to deepen. China has responded with <strong>flight/tourism restrictions</strong> (Chinese visitors to Okinawa down 45&ndash;60%), a <strong>Japanese seafood import ban</strong>, and <strong>ramped-up military activity</strong>. Japan&rsquo;s 2026 Diplomatic Bluebook downgraded China from &ldquo;one of the most important neighbouring countries&rdquo; to &ldquo;an important neighbour.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PLA Navy activity near Okinawa remains elevated. In April, two PLAN vessels (guided-missile destroyer and frigate) transited between <strong>Yonaguni and Iriomote islands</strong>, entering Japan&rsquo;s contiguous zone. Both <strong>Liaoning and Shandong carriers</strong> operated simultaneously in the western Pacific for the first time. After JMSDF destroyer <strong>Ikazuchi transited the Taiwan Strait on April 17</strong>, the PLA launched <strong>combat readiness patrols in the East China Sea and sent warships near Okinawa</strong>. At the Senkakus (Okinawa Prefecture), Chinese coast guard vessels entered territorial waters <strong>5 times in 2026</strong> so far, with <strong>22 armed patrol ships</strong> (3,000+ tons, 76mm guns) now deployed &mdash; double the 2019 level.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Threat level: ELEVATED.</strong> The &ldquo;three seas linkage&rdquo; doctrine (East China Sea, Taiwan Strait, South China Sea) is now operational. Okinawa-based forces are increasingly within PLA contested battlespace calculations. The Miyako Strait remains a critical chokepoint. Analysts at Foreign Policy assess Japan and China are &ldquo;edging dangerously close to conflict.&rdquo; Expect increased PLAN transits during Resolute Dragon (June 20&ndash;30). Taiwan has detected <strong>202 Chinese military aircraft</strong> and <strong>190 naval vessels</strong> in surrounding waters as of late April.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: KADENA AIR BASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Air Force / Force Modernization / Kadena &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base: F-22 Raptors Rotating Through; F-15EX Eagle II Delivery Delayed to 2027 Due to Boeing Strike</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two <strong>F-22 Raptor squadrons</strong> arrived at Kadena Air Base in May 2026 as part of ongoing fighter rotations, while <strong>F-16 Fighting Falcons</strong> (120th Expeditionary Squadron) have been rotating through since January 2026. The permanent replacement aircraft &mdash; <strong>36 F-15EX Eagle II fighters</strong> &mdash; originally scheduled for delivery in March&ndash;June 2026 are now expected to begin arriving in <strong>2027</strong>, delayed by the Boeing machinists&rsquo; strike (August&ndash;November 2025).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Air Force Secretary <strong>Troy Meink</strong> told the Senate: <strong>&ldquo;I think we actually deliver the first aircraft next year.&rdquo;</strong> Full deployment is expected by <strong>2028&ndash;2029</strong>. The <strong>18th Aircraft Maintenance Squadron</strong> was activated at Kadena on May 15, 2026, a new organizational unit supporting the wing&rsquo;s fighter operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Readiness Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena remains in a transitional fighter posture. The rotational model provides capable platforms (F-22s are 5th-gen) but lacks the institutional depth and maintenance continuity of a permanently assigned squadron. The F-15EX delay extends Kadena&rsquo;s interim status through at least 2027. The new maintenance squadron activation signals USAF preparations for the eventual permanent force.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: TYPHOON / WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Weather / Base Operations / Infrastructure &mdash; June 1&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi Clears Okinawa; Bases Fully Operational; Rainy Season Begins with Heavy Rain Expected June 9&ndash;10</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi</strong> (No. 6) passed directly over Okinawa&rsquo;s main island at ~7:00 PM on June 1 &mdash; the island&rsquo;s first major typhoon in three years. Wind gusts: <strong>80 mph at Futenma</strong>, <strong>74 mph at Kadena</strong>, <strong>77 mph at Naha Airport</strong>. U.S. bases moved to <strong>&ldquo;All Clear&rdquo; at 10:38 AM June 2</strong>. Camp Courtney family housing lost power temporarily; small trees fell at Torii Station. <strong>No significant damage or injuries at U.S. installations.</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Off-base: <strong>48,000 homes</strong> lost power across Okinawa and Kagoshima prefectures; <strong>82,921 residents evacuated</strong>; at least <strong>16 injured</strong>; <strong>15 buildings partially damaged</strong>; <strong>900+ flights cancelled</strong>. The storm weakened to an extratropical cyclone by June 5. Okinawa is now in <strong>rainy season (tsuyu)</strong> &mdash; started May 4, six days early. A stationary front is forecast to bring <strong>warning-level heavy rain June 9&ndash;10</strong>. Average conditions: 25&ndash;29&deg;C (77&ndash;84&deg;F), 84% humidity.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Weather Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All bases fully operational. Monitor for localized flooding and road closures as rainy season intensifies. Rainfall forecast is above average for June 2026. Typhoon season runs June&ndash;November; additional storms should be anticipated.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: MISSILE BUILDUP + FUTENMA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Defense / Basing / Government &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan&rsquo;s Nansei Chain Missile Buildup Continues; Futenma Relocation Impasse at 30-Year Mark; Governor Tamaki Seeks Third Term</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Missile deployments:</strong> Japan plans <strong>Chu-SAM Kai surface-to-air missiles on Yonaguni Island</strong> (110 km from Taiwan) by FY2030, increasing Camp Yonaguni personnel to ~270. <strong>Upgraded Type 12 anti-ship missiles</strong> are now operational at Camp Kengun (Kumamoto), and <strong>HVGP Block I ballistic missiles</strong> are entering service at Ebino Camp (Miyazaki). Japan&rsquo;s record <strong>&yen;9.04 trillion ($58B) defense budget</strong> for FY2026 includes &yen;177B for the Type 12 and hypersonic programs.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Futenma:</strong> The relocation to Henoko/Camp Schwab remains unresolved at <strong>30 years</strong>. The Pentagon will not return Futenma until Japan provides a comparable runway (~2,700m vs. planned 1,800m). Construction expected until <strong>2033</strong>; operational by <strong>2036</strong>; cost approaching <strong>$6B</strong>. <strong>Governor Denny Tamaki</strong> has announced his <strong>third-term bid</strong> for the Sept. 13 election, maintaining his anti-base platform: &ldquo;A base with new functions would lead to permanent consolidation and is absolutely unacceptable.&rdquo; He faces <strong>Genta Koja</strong> (42, former Naha deputy mayor), the de facto LDP candidate supporting relocation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political &amp; Strategic Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan&rsquo;s A2/AD buildup across the Nansei chain is transforming the Ryukyu corridor from a passive buffer into an active denial belt. The Sept. 13 gubernatorial election will be a critical referendum on the US military presence. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition support is reportedly wavering. <strong>Shuri Castle&rsquo;s main hall restoration</strong> will reopen Nov. 23 &mdash; a ceremony was announced June 2, highlighting Okinawan cultural identity.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 8: QUALITY OF LIFE / INCIDENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Personnel / Community Relations / Economy &mdash; Recent</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">OHA Increase for Okinawa Personnel; Sexual Assault Case Fuels Local Opposition; Tourism Strong Despite China Decline</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Housing:</strong> Overseas Housing Allowance (OHA) for Okinawa-stationed personnel increased <strong>$400&ndash;$500/month effective May 16</strong>. Brig. Gen. Gallemore (18th Wing) noted service members had been &ldquo;coming out of pocket about 300 bucks&rdquo; monthly. Increase applies only to Okinawa, not other Japan locations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Community relations:</strong> On May 22, Japanese police recommended sexual assault charges against a <strong>U.S. Army soldier (20s)</strong> assigned to the 38th Air Artillery Brigade at Kadena. Solo military patrols in Okinawa nightlife areas remain <strong>paused since March 2026</strong>. These incidents continue to fuel local opposition to the military presence.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Economy:</strong> Okinawa development budget set at <strong>&yen;264.7B for FY2026</strong> (below the &yen;300B prefectural request for the fifth year). Tourism remains strong &mdash; Okinawa is <strong>#2 global trending destination</strong> (Expedia 2026), with visitor arrivals up 18.6% YoY. However, <strong>Chinese visitors have plunged 45&ndash;60%</strong> due to the diplomatic crisis.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Alliance integration is accelerating despite force posture gaps.</strong> The JGSDF Osprey deployment to Futenma and Resolute Dragon 2026 represent a tangible escalation in US-Japan operational cooperation. However, the 31st MEU&rsquo;s Middle East deployment has created an acknowledged rapid-response gap in the Indo-Pacific at a time of elevated PLA activity near Okinawa.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">PLA activity requires sustained vigilance.</strong> Chinese naval and air operations near the Nansei chain remain at elevated levels. The &ldquo;three seas linkage&rdquo; doctrine and dual-carrier operations signal an assertive PLA posture. Resolute Dragon will likely trigger additional PLA monitoring and provocative transits near Okinawa.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Domestic dynamics.</strong> The Camp Hansen barracks represent positive investment in quality of life. The Sept. 13 gubernatorial election and June 23 Okinawa Memorial Day (81st anniversary) will amplify local base politics. Kadena&rsquo;s fighter transition continues in interim mode with F-15EX delayed to 2027.
      </p>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming Events to Watch</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0; width: 120px;">Jun 9&ndash;10</td>
          <td style="color: #ccc; padding: 6px 0;">Heavy rain warning expected &mdash; rainy season front stalls over Okinawa</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jun 18</td>
          <td style="color: #ccc; padding: 6px 0;">Haarii Festival &mdash; traditional dragon boat races (Okinawa cultural event)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jun 20&ndash;30</td>
          <td style="color: #ccc; padding: 6px 0;"><strong>Exercise Resolute Dragon 2026</strong> &mdash; 9,600 US/Japan personnel; JGSDF Ospreys at Futenma; NMESIS/MADIS employment</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jun 23</td>
          <td style="color: #ccc; padding: 6px 0;"><strong>Okinawa Memorial Day (Irei no Hi)</strong> &mdash; 81st anniversary, Battle of Okinawa</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Jul 2026</td>
          <td style="color: #ccc; padding: 6px 0;">Camp Hansen barracks move-in begins (1,096 Marines)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Sep 13</td>
          <td style="color: #ccc; padding: 6px 0;"><strong>Okinawa Gubernatorial Election</strong> &mdash; Tamaki (anti-base) vs. Koja (pro-relocation)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Nov 23</td>
          <td style="color: #ccc; padding: 6px 0;">Shuri Castle main hall reopening ceremony</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Nippon.com &bull; USNI News &bull; Asian Military Review &bull; Foreign Policy &bull; The Diplomat &bull; South China Morning Post &bull; Newsweek &bull; U.S. Embassy Tokyo &bull; Kadena Air Base Public Affairs &bull; Naval News &bull; Al Jazeera &bull; Zona Militar &bull; Bloomberg &bull; CFR Global Conflict Tracker &bull; Seoul Economic Daily &bull; Brussels Morning &bull; Foreign Affairs &bull; Weather.com
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence or policy guidance. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const subject = `[World Monitor] Okinawa Daily Intelligence Briefing — ${today}`;
const fromAddr = 'World Monitor <onboarding@resend.dev>';

async function sendToRecipient(email) {
  const payload = JSON.stringify({
    from: fromAddr,
    to: [email],
    subject,
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
      console.error(`  FAILED for ${email}: ${body}`);
      return false;
    }

    const data = JSON.parse(body);
    console.log(`  SUCCESS: ${email} (Resend ID: ${data.id})`);
    return true;
  } catch (err) {
    console.error(`  FAILED for ${email}: ${err.message}`);
    return false;
  }
}

console.log('Sending Okinawa Daily Intelligence Briefing...\n');

let successCount = 0;
for (const email of RECIPIENTS) {
  const ok = await sendToRecipient(email);
  if (ok) successCount++;
}

console.log(`\nResult: ${successCount}/${RECIPIENTS.length} emails sent successfully.`);
if (successCount === 0) {
  console.error('\nAll sends failed. If using onboarding@resend.dev, you can only send to the Resend account owner email.');
  console.error('To send to other recipients, verify a custom domain at https://resend.com/domains');
  process.exit(1);
}
