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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Regional Threats &bull; Quality of Life</p>
    </div>

    <!-- ===================== STORY 1: CHINA-RUSSIA BOMBER PATROL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Regional Security / Air Threat / Okinawa &mdash; June 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Russia Joint Bomber Patrol Flies Past Okinawa &mdash; ~15 Aircraft Including Nuclear-Capable Tu-95MS; F-35A and F-15J Scrambled</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>11th China-Russia Joint Strategic Patrol</strong> on June 27 sent approximately <strong>15 aircraft</strong> from the Sea of Japan southward past Okinawa Prefecture, then east into the western Pacific. The formation included <strong>2x Russian Tu-95MS nuclear-capable strategic bombers, 2x Tu-142 maritime patrol aircraft</strong>, Su-30SM and Su-35S fighters, and an Il-78M tanker. China contributed <strong>4x H-6K bombers, 6x J-16 fighters</strong>, a YY-20A tanker, KJ-500 AEW&amp;C, and Y-9 EW/SIGINT aircraft. The patrol lasted approximately six hours.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.S. Air Force F-35A Lightning IIs and JASDF F-15J Eagles</strong> intercepted the formation. South Korea also scrambled fighters after the patrol entered its ADIZ. Both Seoul and Tokyo lodged <strong>diplomatic protests</strong>. Russia characterized the operation as demonstrating &ldquo;determination and ability to jointly safeguard regional peace.&rdquo; This was the largest combined Sino-Russian air operation near Okinawa this year, coinciding deliberately with <strong>Valiant Shield 26</strong> (June 23&ndash;July 1) and the conclusion of <strong>Resolute Dragon 26</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #ef4444; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The timing is not coincidental &mdash; this patrol was a direct counter-signal to U.S.-Japan force integration exercises. Tu-95MS bombers carry Kh-101/102 cruise missiles with a 5,500 km range. The flight path past Okinawa probes JASDF/USAF response times and radar coverage. Combined with continuous Chinese Coast Guard patrols east of Taiwan (since June 1) and the PLA&rsquo;s DF-17 hypersonic missile demonstration on June 22, this represents a coordinated multi-domain pressure campaign against the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== STORY 2: MADIS/NMESIS/MRIC MISSILE SYSTEMS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Okinawa &mdash; June 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Fields NMESIS, MADIS, and MRIC on Okinawa as Resolute Dragon 26 Concludes</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a milestone for Force Design 2030, the <strong>12th Marine Littoral Regiment</strong> at Camp Hansen formally received three advanced weapons systems. <strong>NMESIS</strong> (Naval Strike Missiles on JLTVs for anti-ship/sea-denial) arrived June 16. <strong>MADIS</strong> (Stinger missiles, 30mm cannon, 7.62mm MG for counter-drone/low-altitude air defense) arrived June 10. <strong>MRIC</strong> (based on Israel&rsquo;s Iron Dome, firing SkyHunter missiles at 2.5&ndash;44 mile range) also deployed in June. Raytheon holds a <strong>$412.5M contract</strong> for three MRIC batteries by 2028.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The unveiling coincided with the close of <strong>Exercise Resolute Dragon 26</strong> (June 20&ndash;30), the largest iteration of the annual USMC-JGSDF bilateral drill. <strong>90 Marines (12th LCT) and 300 JGSDF soldiers (8th Division)</strong> conducted live-fire island seizure/defense exercises on Kyushu, with operations spanning Miyako, Ishigaki, and Yonaguni &mdash; the latter just 60 NM east of Taiwan. UK, Philippine, French, and Australian forces observed. <strong>Typhon mid-range missile systems remain in Japan</strong> following the exercises, and <strong>Valiant Shield 26</strong> (June 23&ndash;July 1) continues with a live SINKEX of the former USS Juneau off Guam.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            NMESIS provides sea-denial against adversary surface vessels. MADIS counters the growing UAS threat. MRIC delivers mobile air defense against cruise missiles and aircraft. The 12th MLR is now the forward-deployed tip of the spear for EABO in the First Island Chain. Col. Neikirk: these provide &ldquo;unmatched sea denial and low-altitude air defense capabilities tailored specifically for the complex littoral environment.&rdquo;
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== STORY 3: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Regional Security / Indo-Pacific / China &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PRC Sustains Multi-Domain Pressure: Coast Guard Patrols East of Taiwan, DF-17 Demonstration, Senkaku Incursions at Record Levels</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PRC has maintained an aggressive pressure campaign against Japan since PM <strong>Takaichi</strong> stated in November 2025 that a Taiwan contingency &ldquo;might involve Japan.&rdquo; Chinese Coast Guard vessels have <strong>patrolled east of Taiwan almost continuously since June 1</strong>. The PRC Ministry of Transport conducted a <strong>&ldquo;special maritime law enforcement operation&rdquo; east of Taiwan (June 6&ndash;10)</strong> in response to Japan-Philippines EEZ delimitation efforts. The PLA <strong>demonstrated DF-17 hypersonic missile capabilities</strong> via official media on June 22. Chinese military websites expressed concern over U.S.-Japan force integration near Taiwan during Resolute Dragon.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In the Senkaku Islands, China Coast Guard vessels were present in the contiguous zone on <strong>357 of 365 days in 2025</strong> (record high). All four vessels now routinely carry <strong>76mm deck-mounted autocannons</strong> (since mid-2024). Taiwan launched five-day <strong>combat readiness drills on June 22</strong>, rehearsing defense of northern infrastructure. North Korea has conducted <strong>at least 7 ballistic missile launches in 2026</strong> (4 in April alone), with Sea of Japan impact zones at ranges that could threaten Okinawa. Japan is deploying <strong>Type-03 SAMs to Yonaguni Island</strong> and the JGSDF Ground Component Command practiced deploying troops to Nansei Islands for the first time in May.
        </p>
      </div>
    </div>

    <!-- ===================== STORY 4: TROPICAL STORM MEKKHALA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Weather / Force Protection / Okinawa &mdash; June 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Mekkhala Passes Okinawa &mdash; Second Storm in Four Weeks; Bases Entered TCCOR 2; Higos Tracking Behind</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Typhoon Mekkhala (Category 4 at peak, 975 hPa, 126 km/h sustained) weakened to tropical storm before passing <strong>42 miles west-northwest of Kadena Air Base</strong> on June 26 with 60 mph sustained winds and 75 mph gusts. U.S. installations entered <strong>TCCOR 2</strong> on June 25. Sandbags were deployed at warehouse entrances; facilities secured across Marine Corps installations. No Navy ship relocations ordered. <strong>JGSDF V-22 Osprey flights cancelled</strong> for Resolute Dragon 26, disrupting the exercise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This was the <strong>second major storm in four weeks</strong> after Typhoon Jangmi (June 1), which caused <strong>24+ hour power outages</strong> at family housing and brought record-breaking rainfall across Okinawa. Rainfall from Mekkhala totaled ~150 mm (5.9 in) over 24 hours. A second tropical system, <strong>Tropical Storm Higos</strong>, was forecast to merge with Mekkhala south of Honshu, extending weather impacts. Typhoon season remains highly active.
        </p>
      </div>
    </div>

    <!-- ===================== STORY 5: BATTLE OF OKINAWA MEMORIAL / POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Government / Civil-Military / Okinawa &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PM Takaichi Heckled at 81st Battle of Okinawa Memorial; Anti-War Protests Reflect Deepening Base Tensions Ahead of Sept 13 Election</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>3,200 people</strong> gathered at Peace Memorial Park in Itoman for <strong>Irei No Hi</strong> on June 23. When PM Takaichi took the podium, protesters chanted <strong>&ldquo;No to war&rdquo; and &ldquo;Protect Article 9,&rdquo;</strong> at times drowning out her speech. At least five people were removed. Takaichi pledged to &ldquo;consolidate, reduce and streamline U.S. military facilities.&rdquo; <strong>Gov. Tamaki</strong> protested the &ldquo;heavy burden&rdquo; of bases and criticized Camp Schwab construction. <strong>Brig. Gen. John Gallemore</strong> (18th Wing/Kadena) led ~50 U.S. service members in a separate ceremony.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>September 13 gubernatorial election</strong> will be pivotal. Incumbent <strong>Gov. Denny Tamaki</strong> (anti-base relocation, &ldquo;All Okinawa&rdquo; coalition) faces <strong>Genta Koja</strong> (42, former Naha deputy mayor, de facto LDP candidate supporting Futenma-to-Henoko relocation). Tamaki&rsquo;s support is wavering after the February general election reshaped Okinawa&rsquo;s political landscape. The outcome will significantly impact U.S. basing arrangements and the Henoko construction timeline.
        </p>
      </div>
    </div>

    <!-- ===================== STORY 6: FUTENMA / BASE REALIGNMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Infrastructure / Okinawa &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Work Advances on Eastern Side; Futenma Return Stalled Over Runway Length; Kishaba Housing Return on Track</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Fresh <strong>land reclamation began on Oura Bay&rsquo;s eastern side</strong> on June 17 for the Futenma replacement facility. The southern side is nearly complete. Soft seabed requires <strong>~71,000 sand piles</strong>, pushing completion to <strong>no earlier than 2033</strong> with full Futenma return estimated <strong>no earlier than 2036</strong>. The Pentagon insists it will not return MCAS Futenma unless a long runway is secured (current Futenma: ~2,700m vs. planned Henoko V-shape: ~1,800m each). April 2026 marked <strong>30 years</strong> since the original return agreement.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a positive step, the Japan-U.S. Joint Committee finalized the return of <strong>~12 acres of Kishaba Housing Area (Camp Foster)</strong> by fall 2026, enabling the prefecture to <strong>widen Prefectural Road 81 from two to four lanes</strong>. ~200 new housing units under construction in northern Kishaba will accommodate relocated residents. The <strong>Guam relocation</strong> of 5,000 Marines to Camp Blaz continues in phases (begun Dec 2024), though a think tank argued in February for keeping Guam-bound Marines on Okinawa to counter China.
        </p>
      </div>
    </div>

    <!-- ===================== STORY 7: QUALITY OF LIFE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #3b82f6; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Quality of Life / Force Readiness / Okinawa &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">New Barracks Open at Camp Hansen; OHA Up $400&ndash;$500/Mo; Yen Crashes to 162.60 (40-Year Low); F-15EX Delayed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Nearly <strong>1,100 enlisted Marines</strong> moved into &ldquo;barracks of the future&rdquo; at Camp Hansen: <strong>private 155 sq ft bedrooms</strong> with personal sinks, shared 710 sq ft common areas (kitchen, restroom, shower, laundry) per two-Marine unit across three buildings with 184 modules each. <strong>OHA increased $400&ndash;$500/month</strong> (effective May) for off-base housing. The yen hit <strong>162.60/$</strong> on June 30 (lowest since 1986, down 13.4% YoY) &mdash; boosting dollar purchasing power but reflecting Japanese economic stress and imported inflation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Air Force delayed permanent F-15EX Eagle II delivery to Kadena</strong>, with an updated timeline expected. III MEF conducted <strong>Exercise Freedom Banner</strong> (June 24), a humanitarian aid/disaster relief drill at Kin Blue Beach with USNS 1st Lt. Jack Lummus showcasing medical support and water purification capabilities. Separately, a <strong>U.S. Army soldier (38th Air Artillery Brigade, Kadena)</strong> was charged with sexual assault against a woman on Okinawa and referred to Naha Public Prosecutors &mdash; the latest in a series of incidents involving American service members since late 2023.
        </p>
      </div>
    </div>

    <!-- ===================== STORY 8: PFAS / TOURISM / ECONOMY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #3b82f6; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Environmental / Economy / Okinawa &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS at 2,800 PPT Near Kadena (56x National Standard); Tourism on Track to Exceed 10M Visitors; 2% Accommodation Tax Live</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s groundwater survey found PFAS contamination at <strong>12 sites around Kadena Air Base and 28 of 40 sites near MCAS Futenma</strong>. The highest reading: <strong>2,800 parts per trillion</strong> at Yara Hijaga in Kadena town (<strong>56x Japan&rsquo;s national standard</strong>). USFJ has denied Okinawa&rsquo;s requests for on-base water sampling, calling evidence of base-sourced contamination &ldquo;insufficient.&rdquo; Japan&rsquo;s new PFAS regulations took effect April 1. This remains a significant source of friction with local communities.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s tourism surge continues &mdash; visitors expected to <strong>exceed 10 million for the first time</strong> (surpassing 2018 record). Expedia named Okinawa its <strong>#2 global destination for 2026</strong> (71% YoY increase in searches). Japan&rsquo;s Finance Ministry upgraded the economic assessment to &ldquo;recovering.&rdquo; A <strong>2% accommodation tax</strong> (first prefecture-wide in Japan) took effect April 2026, expected to generate <strong>7.8 billion yen annually</strong> for sustainable tourism infrastructure. The Junglia theme park (opened July 2025) and Shuri Castle reconstruction milestones continue driving visitor growth.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Strategic Picture</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Deterrence and provocation are escalating in lockstep.</strong> The China-Russia joint bomber patrol past Okinawa on June 27 &mdash; timed to coincide with Valiant Shield and Resolute Dragon &mdash; signals that Moscow and Beijing view the First Island Chain buildup as a direct threat requiring joint response. The simultaneous fielding of NMESIS, MADIS, and MRIC to the 12th MLR, plus Typhon systems remaining in Japan, represents the most significant forward-deployed capability upgrade in years. Expect continued tit-for-tat escalation through the summer exercise season.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s political fault lines are sharpening.</strong> The Irei No Hi protests, Governor Tamaki&rsquo;s anti-base stance, PFAS contamination (56x national limits), and the service member assault case all compound anti-base sentiment ahead of the September 13 election. A Koja (LDP) victory would ease Henoko construction; a Tamaki third term could intensify legal and political resistance to U.S. basing &mdash; even as the strategic rationale for Okinawa-based forces has never been stronger.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Force protection posture:</strong> Back-to-back typhoons (Jangmi, Mekkhala) in June underscore an active storm season. The yen at 162.60/$ is favorable for dollar earners but signals Japanese economic fragility. OHA increase (+$400&ndash;500/mo) and new barracks at Camp Hansen are quality-of-life wins. Watch for: F-15EX delivery timeline, Guam relocation debate, and PRC response to Typhon missiles remaining in Japan.
      </p>
    </div>

    <!-- ===================== QUICK REFERENCE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Quick Reference &mdash; June 30, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">162.60 (40-year low)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TCCOR Status</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">All Clear (post-Mekkhala)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Resolute Dragon 26</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Concluded June 30</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Valiant Shield 26</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Active through July 1</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">China-Russia Bomber Patrol</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">June 27 (~15 aircraft)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Governor Election</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Sept 13 (Tamaki vs Koja)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~70,400 (-2.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">OHA Increase</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+$400&ndash;$500/mo (effective May)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">F-15EX to Kadena</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Delayed (TBD)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Typhoon Season</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Active (2 storms in June)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Defense News &bull; Task and Purpose &bull; Marine Corps Times &bull; USNI News &bull; The Aviationist &bull; Washington Times &bull; Newsweek &bull; AEI China-Taiwan Update &bull; Japan Times &bull; Foreign Policy &bull; Maritime Executive &bull; Bloomberg &bull; Reuters &bull; Weathernews &bull; The Watchers &bull; Nippon.com &bull; Trading Economics &bull; Military.com &bull; DVIDSHUB &bull; Expedia &bull; CBS News &bull; Global Times
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

const subject = `[World Monitor] Okinawa Intelligence Briefing — ${today}`;

for (const recipient of RECIPIENTS) {
  const payload = JSON.stringify({
    from: 'World Monitor <onboarding@resend.dev>',
    to: [recipient],
    subject,
    html,
  });

  try {
    const result = execSync(
      `curl -s -w "\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ` +
      `-H "Content-Type: application/json" ` +
      `-H "Authorization: Bearer ${RESEND_KEY}" ` +
      `-d @-`,
      { input: payload, encoding: 'utf8', timeout: 60000 },
    );
    const lines = result.trim().split('\n');
    const httpCode = lines.pop();
    const body = lines.join('\n');

    if (!httpCode.startsWith('2')) {
      console.error(`[${recipient}] Resend API error ${httpCode}: ${body}`);
    } else {
      const data = JSON.parse(body);
      console.log(`[${recipient}] Email sent. Resend ID: ${data.id}`);
    }
  } catch (err) {
    console.error(`[${recipient}] Failed: ${err.message}`);
  }
}
