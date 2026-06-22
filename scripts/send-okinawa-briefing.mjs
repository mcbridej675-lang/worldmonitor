#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const INTENDED_RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Security &bull; Weather &bull; Economy &bull; Risk Assessment</p>
    </div>

    <!-- ===================== PRIORITY ALERT: TYPHOON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #1a0a0a; border: 1px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ALERT</span>
          <span style="color: #dc2626; font-size: 11px; font-weight: 700;">Weather / Force Protection &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Mekkhala (Cat 1, Strengthening to Cat 4) Tracking Toward Okinawa &mdash; Closest Approach June 25&ndash;26</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Typhoon Mekkhala (07W) is currently positioned approximately <strong>640 miles south of Kadena Air Base</strong> (17.8N, 127.0E) moving WNW at 18 mph. Central pressure is 940 hPa with sustained winds of 90 mph and gusts to 115 mph. The system is <strong>rapidly intensifying</strong> and forecast to reach Category 4 equivalent before weakening as it approaches Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Sakishima Islands:</strong> Direct impacts expected ~June 25. <strong>Okinawa main island:</strong> Closest approach ~June 26 (Friday afternoon), passing just west with sustained winds around 30 m/s (67 mph). U.S. bases currently at <strong>TCCOR 4</strong> (destructive winds possible within 72 hours). Expect escalation to TCCOR 3 and higher this week. Model disagreement: ECMF predicts faster weakening than GFS.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Action Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Monitor TCCOR upgrades from 18th Wing / III MEF. Secure outdoor equipment and review typhoon procedures. Track potential impact to Resolute Dragon 26 exercise operations. Note: 2026 typhoon season forecast projects 28 storms with 14 approaching Japan (above normal).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 1: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Exercise / Active &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 Launched: ~10,000 US-Japan Troops Conducting Island Defense Drills Across Kyushu &amp; Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The annual bilateral field exercise <strong>commenced June 20</strong> with approximately <strong>7,300 JGSDF and 2,300 U.S. personnel</strong> participating. U.S. participation led by III MEF including 3rd Marine Division, 1st MAW, and the <strong>12th Marine Littoral Regiment</strong>, plus U.S. Army 3rd Multi-Domain Task Force, 7th Fleet, and 18th Wing.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key firsts: Three <strong>JGSDF V-22 Ospreys deploying to MCAS Futenma</strong> for the first time, with flights to <strong>Miyako and Ishigaki islands</strong> &mdash; marking the first-ever GSDF Osprey landing on Miyako Island. Exercise includes simulated medevac from Miyako to Futenma and focuses on island defense, air-ground integration, logistics, and maritime area protection.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Demonstrates deepening US-Japan interoperability in southwestern island defense. GSDF Osprey ops from a US base signals growing integration. Exercise timing coincides with heightened regional tensions and PACOM commander's $122B budget request warning of China 2027 readiness timeline.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: PACOM RENAME + PAPARO WARNING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Command / Intelligence / Geopolitics &mdash; June 16&ndash;19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">INDOPACOM Reverts to PACOM; Admiral Paparo Requests $122B Citing China War Threat; Army Activates Multi-Domain Command</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pentagon <strong>restored the name U.S. Pacific Command (PACOM)</strong> on June 16, reversing the 2018 &ldquo;Indo-Pacific Command&rdquo; rebrand. The AOR remains unchanged. Analysts interpret the move as signaling Trump&rsquo;s preference for engagement over competition messaging with China, and a downgrade of the India relationship implied by dropping the &ldquo;Indo-&rdquo; prefix.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, <strong>Admiral Sam Paparo</strong> delivered a private report to Congress requesting <strong>$122 billion for FY2027</strong> &mdash; calling it &ldquo;the minimum investments required to sustain credible deterrence.&rdquo; Breakdown: $67.4B for new missiles, $18B for counter-C2 systems, $15B for space-based surveillance, $2.3B for maritime/ground drones, $909M for Guam Defense System. Warned PLA ordered to <strong>be ready for military action against Taiwan by 2027</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 18-19, the Army activated the <strong>7th Infantry Division (Multi-Domain Command-Pacific)</strong> at JBLM, merging the 1st MDTF with 7th ID to integrate cyber, space, EW, unmanned systems, and precision fires with Stryker formations.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 3: 12TH MLR FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Okinawa / Capabilities &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives NMESIS Anti-Ship &amp; MADIS Air Defense Systems; 31st MEU Remains Deployed to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Okinawa-based <strong>12th Marine Littoral Regiment</strong> formally received <strong>NMESIS</strong> (Navy-Marine Expeditionary Ship Interdiction Systems &mdash; anti-ship missiles) and <strong>MADIS</strong> (Marine Air Defense Integrated Systems &mdash; short-range air defense) in June 2026. This represents a <strong>significant force posture upgrade</strong>, giving the regiment organic anti-ship and counter-UAS capability for distributed maritime operations across the First Island Chain.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, approximately <strong>2,200&ndash;2,500 Marines from the 31st MEU</strong> remain deployed to the Middle East (departed March 13 aboard USS Tripoli ARG). Defense experts warn this creates an <strong>Indo-Pacific capability gap</strong>. The Atlantic Council argued in February that the Marine pullback from Okinawa &ldquo;should be halted&rdquo; given China&rsquo;s 2027 timeline, stating it &ldquo;would give Chinese military planners exactly what they want.&rdquo;
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA/SENKAKU/TAIWAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Security / China / East China Sea &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Maintains Near-Daily Armed CCG Presence at Senkakus; PLA Navy Transiting Ryukyu Waterways; 40-Day Airspace Restrictions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          CCG vessels were spotted in Senkaku contiguous waters on <strong>357 of 365 days in 2025</strong> &mdash; the highest ever &mdash; and the pattern continues in 2026. All four vessels now carry <strong>deck-mounted 76mm autocannons</strong>. Twenty-two CCG patrol ships (3,000+ tons) are deployed around the Senkakus, <strong>double the number from 2019</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PLA Navy activity near Okinawa: The <strong>133rd naval task group</strong> (Type 052D destroyers) transited the Yokoate Channel through the Ryukyu Islands in April. The carrier <strong>Liaoning</strong> with Type 055 escort passed through the <strong>Miyako Strait</strong>. New <strong>Type 055 destroyers delivered to the East Sea Fleet</strong> raise Taiwan contingency concerns. China&rsquo;s <strong>Y-9Q ASW aircraft</strong> confirmed operational over the East China Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China restricted large swaths of offshore airspace for up to <strong>40 days</strong> covering key East China Sea and northern Taiwan Strait approaches &mdash; a shift from short-duration exercises to <strong>sustained readiness postures</strong>. CCG vessel 3501 circled Taiwan&rsquo;s Pratas Island twice (June 5-6) and two PRC ships intruded near Taiwan&rsquo;s Itu Aba for the <strong>first time ever</strong> (June 11).
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 5: HENOKO + POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Politics / Base Relocation / Elections &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Expands to New Section; Governor Tamaki Weakened Ahead of September 13 Election; Irei no Hi Tomorrow</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 17</strong>, the Defense Ministry began pouring earth and sand in a <strong>new section east of Cape Henoko</strong> for the Futenma Replacement Facility &mdash; the second area of full-scale reclamation on the eastern side of Oura Bay. Southern Henoko is nearly complete. Eastern-side work involves <strong>71,000 sand piles</strong> driven into soft seabed. Projected completion: <strong>April 2033</strong>, operational ~2036. Pentagon maintains Futenma will not be returned until &ldquo;operational requirements are fully met.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki</strong> seeks a third term in the <strong>September 13 gubernatorial election</strong> but faces eroding support. The All Okinawa coalition lost all four single-seat constituencies in the February snap election. LDP challenger <strong>Genta Koja</strong> (42, former Naha deputy mayor) represents the ruling party. A <strong>death threat</strong> targeting Tamaki was received in May.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Tomorrow, June 23, is Irei no Hi</strong> (Okinawa Memorial Day) &mdash; the 81st anniversary of the Battle of Okinawa. Ceremony at Peace Memorial Park, Itoman. A Basque-American Marine Corporal&rsquo;s name was etched into the Cornerstone of Peace on June 18. Typhoon Mekkhala may threaten post-ceremony events later this week.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 6: NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Threat / North Korea / Nuclear &mdash; June 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Unveils New Nuclear Fuel Facility; Arsenal Assessed at ~50 Warheads; ICBMs Can Strike Anywhere in US</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kim Jong Un unveiled a <strong>new facility to produce nuclear bomb fuels</strong> on June 4, announcing plans to bolster forces &ldquo;at an exponential rate.&rdquo; North Korea claims it has <strong>more than doubled</strong> weapons-grade nuclear material production capacity in five years. CRS estimates enough material for <strong>up to 90 warheads</strong> with approximately <strong>50 assembled</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          2026 DNI assessment: ICBMs <strong>capable of striking anywhere in the United States</strong>. Missile forces can strike South Korea and Japan with nuclear or conventional warheads. April 2026: tested ballistic missiles with <strong>cluster munition warheads</strong>. June 2: live-fire test of modular missile system. Kim ordered boost in missile production for 2026.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 7: JAPAN MISSILE DEFENSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Defense / Japan / Missile Systems &mdash; 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Deploying Longer-Range Missiles Across Southwest Islands; SM-3 Production Quadrupled; $96M Air Shelter at Naha AB</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan deployed the <strong>Hyper Velocity Gliding Projectile (HVGP)</strong> hypersonic weapon at Camp Fuji and upgraded <strong>Type 12 SSMs</strong> (range extended from 200 km to ~1,000 km) at Camp Kengun. A 2,000 km variant is under development. <strong>Tomahawk cruise missiles</strong> will deploy on modified Aegis destroyers. The <strong>15th Brigade (Naha)</strong> was reorganized into the <strong>15th Division</strong> to strengthen southwestern defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the March 2026 summit, Trump and PM Takaichi agreed to <strong>quadruple SM-3 Block IIA missile production</strong> in Japan. A <strong>$96 million air defense shelter</strong> was completed at Naha Air Base for F-15J/DJ fighters. Japan&rsquo;s FY2026 defense budget: record <strong>9 trillion yen (~$60.3B)</strong>, exceeding 2% of GDP. The U.S.-Japan Extended Deterrence Dialogue (June 8-9) discussed nuclear modernization and conducted a tabletop exercise at Yokosuka.
        </p>
      </div>
    </div>

    <!-- ===================== ECONOMIC SNAPSHOT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Economy / Markets / Okinawa &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Nikkei Hits Record 72,354; BOJ Hikes to 1.0%; Yen at 161.54; Okinawa Tourism on Track for 10M+ Visitors</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Nikkei 225 surged to 72,353.96</strong> on June 22 (+1.55%), hitting a session high of 72,584 &mdash; its highest level since the 1989 bubble era. The <strong>BOJ raised rates to 1.0%</strong> on June 16 (highest since 1995). Despite this, the <strong>yen weakened to 161.54/USD</strong>, near 40-year lows, due to persistent carry trade activity.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa economy:</strong> Tourism arrivals on track to surpass <strong>10 million for the first time</strong> in FY2025. Expedia ranked Okinawa <strong>#2 globally</strong> for 2026 destinations. Junglia theme park generated <strong>&yen;32.2B economic impact</strong> in first 6 months. Okinawa&rsquo;s new <strong>2% accommodation tax</strong> expected to generate &yen;7.8B annually. Land prices grew 6.5% (resort areas +8.8%). Marubeni acquired Okinawa Tourist Service. State development budget: &yen;264.7B.
        </p>
      </div>
    </div>

    <!-- ===================== INCIDENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">Incidents / SOFA / Community Relations &mdash; Recent</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US Army Soldier Charged with Sexual Assault (May); Solo Patrols Remain Paused; Helicopter Landing Incident Unresolved</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A U.S. Army soldier at <strong>Kadena Air Base</strong> (Echo Battery, 1-1 ADA, 38th ADA Brigade) was referred to prosecutors May 24 on charges of sexual assault and injury. Solo military police patrols remain <strong>paused</strong> following the November 2025 viral takedown incident. USFJ&rsquo;s 1-5 a.m. off-base drinking ban remains in effect. The Marine Corps <strong>refused to meet</strong> with Okinawa officials regarding a March UH-1Y landing near a baseball field.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the <strong>May 28 Community Partnership Forum</strong> (Camp Foster), Japanese officials presented data showing higher rates of unlawful entry and property damage by SOFA personnel compared to prefectural averages. Proposed additions to newcomer orientation include sexual offense details and drunk-driving prevention content.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Assessment &mdash; Regional Posture</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Immediate: Typhoon Mekkhala is the primary force protection concern.</strong> TCCOR escalation expected within 48-72 hours. Resolute Dragon 26 operations may be impacted by June 25-26. Prepare for potential flight cancellations, port closures, and base lockdowns. This follows Typhoon Jangmi damage from early June &mdash; infrastructure is still recovering.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Near-term: The 31st MEU&rsquo;s Middle East deployment creates a documented capability gap.</strong> The 12th MLR&rsquo;s receipt of NMESIS/MADIS partially offsets this with organic anti-ship and air defense capability, but the region lacks a ready amphibious force. Resolute Dragon 26 demonstrates alliance commitment but also highlights dependency on exercises to maintain readiness.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Strategic: China&rsquo;s sustained pressure across multiple vectors is intensifying.</strong> Armed CCG presence at Senkakus (357/365 days), PLA Navy transits through Ryukyu waterways, 40-day airspace restrictions, and new Type 055 destroyers assigned to the East Sea Fleet all point to a more assertive posture. Admiral Paparo&rsquo;s $122B request underscores the urgency. Japan&rsquo;s counterstrike missile deployments and the September gubernatorial election (which may shift base politics toward the LDP) are the key variables to watch.
      </p>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming Events &mdash; Watch List</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 23</td>
          <td style="color: #ccc; padding: 6px 0;">Irei no Hi (Okinawa Memorial Day) &mdash; 81st anniversary ceremony</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 25&ndash;26</td>
          <td style="color: #dc2626; padding: 6px 0;">Typhoon Mekkhala closest approach to Okinawa</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 30</td>
          <td style="color: #ccc; padding: 6px 0;">Resolute Dragon 26 concludes</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FY2026</td>
          <td style="color: #ccc; padding: 6px 0;">US-Japan cost-sharing agreement expires &mdash; renegotiation ongoing</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Sept 13</td>
          <td style="color: #ccc; padding: 6px 0;">Okinawa gubernatorial election (Tamaki vs. Koja)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 22, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">72,353.96 (+1.55%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">161.54 (yen weakening)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">BOJ Rate</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">1.00% (hiked June 16)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Japan Defense Budget FY26</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">&yen;9T (~$60.3B, 2%+ GDP)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Okinawa Land Prices</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+6.5% avg (+8.8% resort)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Times &bull; Nikkei Asia &bull; Breaking Defense &bull; Military Times &bull; USNI News &bull; The Diplomat &bull; AEI China-Taiwan Weekly &bull; SCMP &bull; Foreign Policy &bull; Washington Times &bull; NPR &bull; CNN &bull; Al Jazeera &bull; AccuWeather &bull; Trading Economics &bull; Investing.com &bull; DVIDS &bull; PACOM &bull; Janes &bull; Naval News &bull; Defence Industry EU &bull; Japan MOD &bull; U.S. State Department &bull; BOJ
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence or financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Regional intelligence for forward-deployed forces.
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
  console.log(`\nNote: Resend testing mode — domain not verified.`);
  console.log(`Intended recipients (requires verified domain): ${INTENDED_RECIPIENTS.join(', ')}`);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
