#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Security &bull; Weather &bull; Regional Threats</p>
    </div>

    <!-- ===================== WEATHER ALERT: TROPICAL STORM MEKKHALA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WEATHER ALERT</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Active Weather &mdash; June 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Mekkhala: TCCOR 1-C in Effect Across All Okinawa Installations &mdash; Closest Approach Early Morning June 27</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. military bases on Okinawa have escalated to <strong>TCCOR 1-Caution (TCCOR 1-C)</strong>, meaning destructive sustained winds of 50+ knots are anticipated and observed winds already at 35&ndash;49 knots. Most base facilities (CDCs, clubs, restaurants, libraries, education centers) are <strong>closed</strong>. The Joint Typhoon Warning Center forecasts Mekkhala to pass <strong>42 miles west-northwest of Kadena Air Base</strong> around <strong>0500 Friday (June 27)</strong> with 60 mph sustained winds and 75 mph gusts. Central pressure at 975 hPa, max sustained winds 126 kph (78 mph), gusts to 180 kph (112 mph). Sea state forecast at <strong>7 meters</strong> Thursday&ndash;Friday.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Installations Pacific is securing facilities and adjusting operations. Japan canceled <strong>V-22 Osprey tiltrotor flights</strong> scheduled from MCAS Futenma. MCCS facilities closed per TCCOR 1-C protocols. A second storm, <strong>Tropical Storm Higos (08W)</strong>, is also tracking toward Japan &mdash; the two storms may <strong>merge south of Honshu</strong>, creating compounded heavy rain and rough seas into early July. This is the second tropical storm to target the island within a month, following <strong>Typhoon Jangmi</strong> (June 2&ndash;3).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Action Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Monitor TCCOR changes across all installations. Secure loose outdoor items. Expect flight cancellations and restricted base access. Resolute Dragon 26 exercise flights adjusted. Follow MCIPAC and installation social media channels for real-time updates.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 1: NMESIS/MADIS DELIVERY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Deterrence &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives NMESIS Anti-Ship and MADIS Air Defense Systems on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Marines with the <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong> formally received the first <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine Air Defense Integrated System (MADIS)</strong> platforms on Okinawa on June 23. NMESIS fires <strong>Naval Strike Missiles (185 km range)</strong> from unmanned JLTV vehicles for anti-ship and sea denial operations. MADIS mounts counter-drone sensors, a 30mm cannon, 7.62mm machine gun, and Stinger missiles on a JLTV for low-altitude air defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Positioned on Okinawa, the NMESIS battery sits <strong>less than 400 km from the Taiwan Strait</strong>, representing a cornerstone of the Marine Corps&rsquo; <strong>Force Design modernization initiative</strong>. This delivery significantly enhances stand-in force capabilities for sea denial and island-chain defense across the First Island Chain. The 12th MLR is now among the most advanced forward-deployed littoral units in the Indo-Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Major force posture escalation with direct implications for China deterrence. NMESIS provides the 12th MLR with organic anti-ship capability &mdash; a first for forward-deployed Marine forces on Okinawa. Combined with MADIS counter-UAS systems, this creates a layered denial capability across the Nansei island chain. Expect PRC diplomatic protests and potential PLA Navy response exercises.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise / Ongoing &mdash; Through June 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: 9,600 U.S. and Japanese Forces Conducting Island Defense Drills Across Kyushu and Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Resolute Dragon 26</strong> field exercise continues through <strong>June 30</strong> across Kyushu and Okinawa, involving approximately <strong>9,600 personnel</strong> from Japan&rsquo;s Ground Self-Defense Force and the U.S. Marine Corps. Training locations include JGSDF bases on Okinawa proper, plus <strong>Miyako Island, Ishigaki Island, and Yonaguni Island</strong> &mdash; all part of the strategically critical Nansei (Ryukyu) island chain stretching toward Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Notable features include the <strong>first-ever GSDF V-22 Osprey deployment from Camp Saga to Miyako Island</strong>, casualty evacuation rehearsals from Miyako Island to MCAS Futenma, and deployment of <strong>Type 88 and Type 12 anti-ship missile launchers</strong>. Exercise flights have been adjusted due to Tropical Storm Mekkhala but the exercise continues. After-action reports expected after June 30 conclusion.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 3: TYPHON / VALIANT SHIELD ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Strategic Weapons / INDOPACOM &mdash; June 22&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhon Mid-Range Missile System Permanently Forward-Deployed to Kyushu; Valiant Shield 2026 Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Exercise Valiant Shield 2026</strong> (June 22&ndash;July 1) is underway across the Mariana Islands, Guam, Japan, and surrounding waters. The most significant development: the U.S. Army&rsquo;s <strong>Typhon mid-range missile system has been deployed to JMSDF Kanoya Air Base on Kyushu</strong>. The Typhon can fire <strong>Tomahawk cruise missiles up to 1,600 km</strong>, placing parts of mainland China within striking distance.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Unlike the 2024 deployment, <strong>the Typhon will be stored in Japan on a U.S. military base after the exercise</strong>, marking a significant escalation in permanent forward-deployed strike capability. It will also be used during Orient Shield exercises in September. HIMARS systems are also deployed to Kanoya for Joint Integrated Anti-Ship Warfare training. No live firing of either system is scheduled at the Kanoya base.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First permanent forward-deployment of Tomahawk-capable ground-based launchers in the Western Pacific. Combined with NMESIS on Okinawa, the U.S. is building a layered strike and denial network across the First Island Chain. PRC has maintained a pressure campaign against Japan since PM Takaichi&rsquo;s Taiwan comments and Japan&rsquo;s acceptance of Typhon missiles.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: IREI NO HI / POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Political / Base Relations &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">81st Irei no Hi Memorial: PM Takaichi Pledges Base Consolidation as Protesters Disrupt Ceremony</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>3,200 people</strong> gathered at Peace Memorial Park in Itoman on June 23 for the <strong>81st anniversary</strong> of the end of the Battle of Okinawa. <strong>Prime Minister Sanae Takaichi</strong> delivered her first Irei no Hi address, pledging to &ldquo;work to consolidate, reduce and streamline U.S. military facilities and areas in Japan.&rdquo; Governor <strong>Denny Tamaki</strong> protested the &ldquo;heavy burden&rdquo; of U.S. bases and ongoing Henoko construction. About a dozen protesters disrupted Takaichi&rsquo;s speech shouting &ldquo;No war!&rdquo; and &ldquo;Don&rsquo;t change the constitution!&rdquo; &mdash; approximately five were removed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Henoko Update:</strong> On June 17, the Defense Ministry began pouring earth and sand in a <strong>new area east of Cape Henoko</strong>, adjacent to the section where filling started in November 2025. The eastern side faces significant engineering challenges due to <strong>soft undersea ground</strong>, requiring ~71,000 sand piles. Construction extends to <strong>at least 2033</strong>. The U.S. has stated it will not return MCAS Futenma unless a long runway is secured at Henoko &mdash; a sticking point since Henoko&rsquo;s planned V-shaped runways are ~1,800m each vs. Futenma&rsquo;s 2,700m.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Election Watch:</strong> Governor Tamaki has announced his bid for a <strong>third term</strong> in the <strong>September 13, 2026 gubernatorial election</strong>, running on continued opposition to the Futenma-to-Henoko relocation. His main challenger is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as the de facto LDP candidate supporting the relocation plan.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 4: REGIONAL SECURITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Security / Intelligence / Regional Threats &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Taiwan Tensions Elevated: PRC Coast Guard Expands &ldquo;Near-Shore&rdquo; Claims East of Taiwan; Taiwan Fires U.S.-Provided Rockets into Strait</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>China-Taiwan (June 26):</strong> An AEI assessment reports China Coast Guard&rsquo;s law enforcement and research activity in waters <strong>east of Taiwan</strong> indicates the PRC considers that area &ldquo;near-shore waters,&rdquo; aiming to erode Taiwanese sovereignty. On June 10, Taiwan&rsquo;s military fired rockets into the <strong>Taiwan Strait for the first time</strong> from U.S.-provided mobile launchers, demonstrating invasion-repellent capabilities. The PRC has maintained a <strong>pressure campaign against Japan since November 2025</strong> following PM Takaichi&rsquo;s comments on Taiwan and Japan&rsquo;s deployment of Typhon missiles. A planned U.S. sale of <strong>82 additional HIMARS</strong> to Taiwan appears on hold following a Trump-Xi summit.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>East China Sea:</strong> Japan protested China&rsquo;s construction of a <strong>new structure on the western side of the Japan-China median line</strong> (April 2026). China maintains <strong>near-constant Coast Guard presence</strong> around the Senkaku/Diaoyu Islands with regular incursions into Japanese territorial waters. The <strong>Quad</strong> (May 26) criticized China over coercive tactics and increasing militarization.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>North Korea:</strong> On June 4, North Korea unveiled a <strong>new nuclear weapons fuel production facility</strong>, with Kim Jong Un announcing plans to bolster nuclear forces &ldquo;at an exponential rate.&rdquo; Multiple missile launches in 2026 (January, March, April), including hypersonic missile tests and a 10-missile volley. In April, North Korea held <strong>3 consecutive days of major weapons tests</strong> triggering Japanese alerts. No launches reported in June, but the nuclear fuel facility represents a strategic escalation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>JGSDF Build-Up:</strong> The JGSDF 15th Brigade (Naha) has been upgraded to the <strong>15th Division</strong>, increasing personnel from ~2,300 to <strong>3,900</strong>. The commanding general&rsquo;s rank is elevated from MG to LTG. New infantry regiment and reconnaissance combat unit (Type 16 Mobile Combat Vehicles) added. Includes the Miyako Security Force (~350) and Yaeyama Security Force (~350). An aircraft shelter for F-15J/DJ fighters is planned at Naha Air Base (~$96M).
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 5: FORCE POSTURE / READINESS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Military / Force Readiness / Infrastructure &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Force Posture Updates: 31st MEU Deployed to Middle East; Kadena F-15EX Delayed to 2027; New Camp Hansen Barracks Open</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>31st MEU Gap:</strong> More than <strong>2,200 Okinawa-based Marines</strong> (31st Marine Expeditionary Unit) and the USS Tripoli deployed to the Middle East in March 2026 due to the Iran conflict. Defense experts warn this creates an <strong>Indo-Pacific capability gap</strong> in forward-deployed amphibious forces at a critical time given the regional threat environment.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Fighter Transition:</strong> Permanent stationing of <strong>36 F-15EX Eagle II</strong> fighters at Kadena has been delayed approximately one year (originally March&ndash;June 2026, now expected <strong>2027</strong>) due to a Boeing strike. <strong>F-22 Raptors</strong> from Alaska and Virginia are deployed rotationally in the interim, with 12 fighters from JBER arriving in early May. The <strong>18th Aircraft Maintenance Squadron</strong> activated at Kadena on May 15 to prepare for the eventual transition.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Camp Hansen Barracks:</strong> Three new barracks opened June 5 as part of a <strong>$320 million complex</strong> housing 1,096 enlisted Marines. Each of the 184 modules per building provides private 155-sq-ft bedrooms &mdash; part of the Marine Corps&rsquo; &ldquo;barracks of the future&rdquo; initiative. Construction ran from March 2022 to May 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>PFAS Contamination:</strong> Okinawa surveys found PFAS at <strong>2,800 parts per trillion</strong> (56x Japan&rsquo;s standard) at Yara Hijaga in Kadena town, downstream from Kadena Air Base. Elevated levels at 28 of 40 sites near MCAS Futenma, affecting drinking water for <strong>~450,000 people</strong>. The U.S. military has denied all four prefecture requests for base access to conduct water sampling.
        </p>
      </div>
    </div>

    <!-- ===================== KEY WATCH ITEMS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Watch Items &mdash; Next 72 Hours</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #eab308;">1. Tropical Storm Mekkhala</strong> &mdash; Closest approach to Okinawa bases expected early morning June 27. Monitor for damage assessments and TCCOR changes. Potential merger with TS Higos could extend severe weather into early July.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">2. Resolute Dragon 26 Concludes June 30</strong> &mdash; Watch for after-action reports and any incidents during the large-scale joint drill across the Nansei island chain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">3. NMESIS/MADIS Operational Integration</strong> &mdash; Significant force posture development at 12th MLR with direct China deterrence implications. Expect potential PRC diplomatic reaction.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">4. 31st MEU Indo-Pacific Gap</strong> &mdash; Continued Middle East deployment reduces forward-deployed amphibious capability in the Western Pacific during a period of elevated regional tensions.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">5. Okinawa Gubernatorial Election</strong> &mdash; September 13 vote between anti-base Tamaki and pro-relocation Koja will shape U.S.-Okinawa relations for the next four years.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">6. China Coast Guard Activity</strong> &mdash; PRC expanding &ldquo;near-shore&rdquo; claims east of Taiwan. Continued Senkaku incursions. Japan protesting new structures on East China Sea median line.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Defense News &bull; Marines.mil &bull; Nikkei Asia &bull; Japan Times &bull; Japan Today &bull; Air &amp; Space Forces Magazine &bull; AEI (American Enterprise Institute) &bull; NPR &bull; Bloomberg &bull; USNI News &bull; Joint Typhoon Warning Center &bull; The Watchers &bull; Global Taiwan Institute &bull; NK News &bull; European Security &amp; Defence &bull; Kadena.af.mil &bull; MCIPAC &bull; Quad Joint Statement
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

const useTestingMode = !process.env.RESEND_DOMAIN_VERIFIED;
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
