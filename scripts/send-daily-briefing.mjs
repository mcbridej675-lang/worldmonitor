#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Defense &bull; Government &bull; Regional Security &bull; Economic Development</p>
    </div>

    <!-- ===================== EVENT 1: RESOLUTE DRAGON-26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise / ACTIVE &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon-26 Launched: 9,600 U.S.&ndash;Japan Troops Begin Largest Island Defense Exercise Across Okinawa &amp; Kyushu</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Resolute Dragon-26</strong> exercise officially commenced on <strong>June 20</strong>, deploying approximately <strong>9,600 personnel</strong> from the Japan Ground Self-Defense Force (JGSDF) and the U.S. Marine Corps across <strong>23 training locations</strong> on Okinawa and Kyushu. The exercise &mdash; running through <strong>June 30</strong> &mdash; marks the sixth iteration and focuses on <strong>defense of remote southwestern islands</strong>, including live-fire training, combat operations, and logistics exercises.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key firsts this year: <strong>ships from the JMSDF maritime transport group</strong> are participating for the first time, and servicemen from Japan&rsquo;s <strong>newly established long-range missile unit</strong> &mdash; deployed in March at Camp Kengun and equipped with the new <strong>Type 25 coastal anti-ship missile system</strong> &mdash; are conducting mission training. The exercise is being conducted in the context of increasingly severe regional security threats and China&rsquo;s expanded military activity in the East China Sea and around Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Scale:</strong> Largest Resolute Dragon to date with 9,600 troops across 23 sites. <strong>Capability debut:</strong> Type 25 anti-ship missile integration signals Japan&rsquo;s advancing stand-off strike posture in the Nansei chain. <strong>Interoperability:</strong> JMSDF sealift participation demonstrates expanded joint logistics capability for contested island scenarios. <strong>Duration:</strong> Through June 30 &mdash; expect increased military air/ground traffic across Okinawa and Kyushu for the next 10 days.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: CIVIC PROTESTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Government / Civil Society / Local &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Civic Groups Protest Resolute Dragon Drills; Ishigaki &amp; Miyako Residents Demand Exercise Cancellation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Civic groups and local residents across Okinawa Prefecture are actively protesting the <strong>Resolute Dragon-26</strong> exercise. A civic group in <strong>Ishigaki City</strong> held a press conference today demanding the cancellation of the exercise, while residents on <strong>Miyako Island</strong> have also voiced opposition. Protesters cite concerns over <strong>low-altitude training flights</strong> by U.S. military transport aircraft posing risks to residents, the potential to <strong>heighten regional tensions</strong>, and the negative impact on residents&rsquo; daily lives and sense of security.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The protests are part of a broader pattern of local opposition to the expanding military footprint on Okinawa&rsquo;s outer islands. With the <strong>Okinawa gubernatorial election approaching on September 13</strong>, the base and military exercise issue remains a politically charged topic. Incumbent Governor <strong>Denny Tamaki</strong>, who opposes the Futenma relocation to Henoko, is seeking a third term against LDP-backed challenger <strong>Genta Koja</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Election watch:</strong> Sept. 13 gubernatorial race will be a referendum on base issues. Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; anti-base coalition faces wavering support after the February general election reshaped the political landscape. The outcome will directly affect the pace and political friction surrounding U.S. force posture adjustments on Okinawa.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TYPHON MISSILE DEPLOYMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Defense / Missile Systems / Regional Security &mdash; June 16&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Army Deploys Typhon Mid-Range Missile Systems to Kyushu for Valiant Shield; Systems to Remain Stored in Japan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Army&rsquo;s <strong>3rd Multi-Domain Task Force</strong> (Fort Shafter, Hawaii) has deployed <strong>Typhon mid-range missile systems</strong> and <strong>HIMARS</strong> to the JMSDF&rsquo;s <strong>Kanoya Air Base on Kyushu</strong> for the <strong>Valiant Shield</strong> biennial exercise (June 16&ndash;July 1) spanning Japan, Hawaii, Guam and surrounding waters. A second deployment is planned for <strong>Orient Shield</strong> in September.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a significant shift from last year, the <strong>Typhon launchers will be stored in Japan</strong> on a U.S. military base following the exercises rather than being removed. The Typhon can fire both <strong>SM-6 and Tomahawk missiles</strong>. No live missiles will be fired during the exercises. Japan&rsquo;s MOD stated the deployment will help &ldquo;respond to warships and landing forces attempting to invade Japan in a multi-layered manner.&rdquo; <strong>China&rsquo;s Foreign Ministry</strong> condemned the deployment, stating it &ldquo;will harm the legitimate security interests of other countries&rdquo; and &ldquo;push up the risk of military confrontation.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Escalation indicator:</strong> Permanent basing of Typhon in Japan represents a qualitative shift in U.S. forward-deployed strike capability in the First Island Chain. Combined with Japan&rsquo;s own Type 25 anti-ship missiles and Resolute Dragon drills, this creates a layered deterrence architecture across the Nansei chain. <strong>Risk:</strong> Expect continued Chinese diplomatic and military counter-signaling, potentially including expanded PLAN/PLAAF activity near the Senkakus/Miyako Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: HENOKO LANDFILL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Base Relocation / Infrastructure &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Work Expands into New Oura Bay Section for Futenma Relocation; Completion Estimated April 2033</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese government commenced landfill work on <strong>June 17</strong> in a <strong>newly designated section of Oura Bay</strong> off the Henoko coastal area in Nago, Okinawa Prefecture. This expands the ongoing construction for the relocation of <strong>MCAS Futenma</strong>, per the 1996 bilateral agreement. The southern section dumping &mdash; underway since 2018 &mdash; is largely complete, but the new Oura Bay section requires extensive <strong>reinforcement of soft seabed soil</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Current estimates project <strong>facility completion around April 2033</strong>, with the transfer of operations taking an additional <strong>three years thereafter</strong>. The Pentagon has reiterated it will not return Futenma until an <strong>alternate runway of comparable length</strong> is provided. The timing of the expansion is seen as an effort to demonstrate progress ahead of the <strong>September gubernatorial election</strong>, in which Governor Tamaki &mdash; who opposes the relocation &mdash; is running for re-election.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Timeline Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Futenma return:</strong> Earliest realistic timeline is ~2036, 40 years after the original agreement. Soft soil remediation in Oura Bay remains the critical-path engineering challenge. Political headwinds persist regardless of the Sept. election outcome. The Pentagon&rsquo;s runway-length requirement adds an additional constraint that could further delay the handover.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Regional Security / China-Japan / Intelligence &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&ndash;Japan Diplomatic Crisis Deepens; East China Sea Structures, Rare Earth Restrictions, and Intensifying Military Posturing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China&ndash;Japan diplomatic crisis</strong> continues to escalate with direct implications for Okinawa&rsquo;s security environment. Japan protested China&rsquo;s construction of a <strong>new structure on the western side of the Japan&ndash;China median line</strong> in the East China Sea in April. China has deployed <strong>warships for Pacific drills</strong> as Japan participates in expanded exercises with the U.S. and Philippines. The JMSDF destroyer <strong>Ikazuchi transited the Taiwan Strait</strong> in April &mdash; the second such passage in 10 months &mdash; drawing a harsher Chinese response than the first.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China has implemented <strong>retaliatory economic measures</strong> against Japan including travel advisories, restrictions on cultural exchanges, <strong>cutting seafood imports</strong>, and notably <strong>restricting exports of dual-use items and rare earth materials</strong> to Japan. PM Takaichi&rsquo;s statements about Japan defending Taiwan have been a key accelerant. The security environment directly impacts Okinawa as the <strong>front line of the First Island Chain</strong> and the primary staging area for any Taiwan contingency.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Elevated and worsening.</strong> The combination of Typhon deployment, Resolute Dragon exercises, JMSDF Taiwan Strait transits, and Japan&rsquo;s defense buildup on Ishigaki/Yonaguni/Miyako is drawing increasingly aggressive Chinese counter-signaling. Rare earth export restrictions could impact Japan&rsquo;s defense industrial base. Monitor for: increased PLAN activity near Senkakus, expanded ADIZ incursions, and potential Chinese military exercises near Okinawa in response to Resolute Dragon.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: KADENA & FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Military / Air Force / Force Posture &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base: F-22 &amp; F-16 Rotational Deployments Active; F-15EX Permanent Stationing Delayed to 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Air Base</strong> currently hosts rotational deployments of <strong>two F-22 Raptor squadrons</strong> (27th EFS from Langley and 90th EFS from Elmendorf, arrived May), <strong>F-16 Fighting Falcons</strong> (120th EFS from Buckley, arrived January), along with periodic <strong>F-35A and F-15E</strong> rotations. The <strong>18th Aircraft Maintenance Squadron</strong> was activated at Kadena on May 15, 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent stationing of <strong>36 F-15EX Eagle II fighters</strong> &mdash; intended to replace 48 aging F-15C/D aircraft &mdash; has been <strong>delayed to 2027</strong> for first delivery, with full fleet completion expected in 2028&ndash;2029. The delay stems from the Boeing St. Louis plant strike (Aug&ndash;Nov 2025). Additionally, a <strong>$320 million &ldquo;barracks of the future&rdquo; complex</strong> at Camp Hansen was unveiled on June 5, housing <strong>~1,100 Marines</strong> in modernized quarters with private bedrooms. Eleven additional barracks buildings are planned for Camp Hansen and Camp Kinser.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Note</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena&rsquo;s fighter gap (no permanently assigned fighters since F-15C/D retirement) continues to be filled by rotational deployments. The F-15EX delay means this rotational model persists through at least 2027. The $320M Camp Hansen barracks investment signals long-term U.S. commitment to Okinawa despite ongoing Marine relocations to Guam.<br/><br/>
            <strong>Indo-Pacific Force Gap:</strong> ~2,500 Marines of the 31st MEU plus USS Tripoli ARG deployed from Okinawa/Sasebo to the Middle East in March for Operation Epic Fury against Iran. Marine Commandant Gen. Smith testified the gap remains &ldquo;unfilled&rdquo; &mdash; &ldquo;When you move an ARG/MEU, you simply don&rsquo;t replace it.&rdquo; USS Boxer ARG/11th MEU deployed from California as partial mitigation. Kadena airmen also deployed for Iran operations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: ECONOMY & TOURISM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Economic / Tourism / Financial &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Tourism Surges to Record Levels; Economy Upgraded to &ldquo;Recovering&rdquo; as Visitor Numbers Approach 10 Million</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s economy has been upgraded from &ldquo;moderately recovering&rdquo; to <strong>&ldquo;recovering&rdquo;</strong>, driven primarily by a tourism boom. The number of tourists entering Okinawa in FY2025 is expected to <strong>exceed 10 million for the first time</strong>, setting a new record. <strong>Expedia</strong> named Okinawa its <strong>#2 Destination of the Year for 2026</strong> following a <strong>71% year-on-year increase</strong> in flight and accommodation searches.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Marubeni Corporation</strong> has entered Okinawa&rsquo;s tourism business through a stake acquisition in Okinawa Tourist Service Inc. The newly opened <strong>Junglia theme park</strong> in Nakijin Village on the Motobu Peninsula is drawing both domestic and international visitors. June is currently rainy season but transitions to peak summer tourism. The <strong>Haarii Festival</strong> (dragon boat races) was celebrated on June 18 across the islands, one of Okinawa&rsquo;s most important cultural events.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Economic Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Tourism-driven growth remains strong despite China&rsquo;s travel advisory reducing Chinese visitor numbers. Weak yen continues to attract visitors from the U.S., Australia, South Korea, and Southeast Asia. <strong>Risk factor:</strong> China&rsquo;s rare earth export restrictions and seafood import ban are headwinds for Okinawa&rsquo;s fishing industry and broader trade ties. The June&ndash;August typhoon season remains a near-term operational risk (Typhoon No. 6 caused significant disruption in early June).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 8: ADDITIONAL INTEL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Intelligence / Regional Threats / Developments &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Additional Intelligence: GSDF Ospreys at Futenma, PRC Maritime Ops, DPRK Nuclear Expansion, PFAS Contamination</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>GSDF Ospreys at Futenma (First):</strong> Three JGSDF V-22 Ospreys are deploying to MCAS Futenma for the first time as part of Resolute Dragon-26, conducting flights to <strong>Miyako Island</strong> (~220mi east of Taiwan) and <strong>Ishigaki Island</strong> for medevac and transport training. This marks the first operational deployment of Japanese Ospreys from a U.S. Marine base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PRC Maritime Operations East of Taiwan:</strong> China&rsquo;s Maritime Safety Administration conducted a &ldquo;special law enforcement operation&rdquo; east of Taiwan with CCG escort, contesting Japanese-Philippine EEZ delimitation talks. Two PRC research vessels surveyed the <strong>Gagua Ridge</strong> east of Taiwan, mapping subsea geography and potentially placing navigation aids for submarine operations. CCG vessels circled <strong>Pratas Island</strong> for 24+ hours (June 5&ndash;6). Two PRC ships intruded <strong>Itu Aba Island</strong> restricted waters for the first recorded time (June 11).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>DPRK Nuclear Expansion:</strong> North Korea unveiled a new weapons-grade uranium production facility in early June. Kim Jong Un announced plans to bolster nuclear forces &ldquo;at an exponential rate,&rdquo; claiming production capacity has more than doubled in five years. New modular missile launch vehicle and tactical cruise missile system tested for deployment at the South Korean border. Xi Jinping visited Pyongyang June 8&ndash;9 without mentioning denuclearization.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>PFAS Contamination Update:</strong> PFAS from U.S. bases has contaminated drinking water for ~450,000 people (~1/3 of Okinawa&rsquo;s population). Levels up to 60x Japan&rsquo;s legal limit recorded near Futenma and Kadena. USFJ has denied four prefectural requests for base water sampling access since 2016. Defense Ministry rejected Governor Tamaki&rsquo;s request to fund PFAS filters for a central Okinawa water purification plant.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Situational Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Military tempo is at peak levels.</strong> Resolute Dragon-26 (9,600 troops, through June 30) and Valiant Shield (Typhon deployment, through July 1) are running concurrently, representing an unprecedented concentration of U.S.&ndash;Japan joint military activity in and around Okinawa. Combined with the permanent basing of Typhon systems in Japan, this marks a qualitative shift in the First Island Chain deterrence posture.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&ndash;Japan tensions are the primary risk driver.</strong> The ongoing diplomatic crisis, East China Sea structure construction, rare earth restrictions, and military counter-signaling create an elevated security environment for Okinawa. The island chain is increasingly the focal point of great-power competition in the Indo-Pacific.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Domestic politics will shape the next chapter.</strong> The September 13 gubernatorial election is a pivotal event. Governor Tamaki&rsquo;s anti-base stance vs. LDP-backed challenger Koja will determine the political friction surrounding U.S. force posture adjustments, Futenma relocation, and the broader military buildup on the outer islands.
      </p>
    </div>

    <!-- ===================== UPCOMING EVENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Watch List &mdash; Upcoming Events</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Resolute Dragon-26 concludes</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">June 30</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Valiant Shield concludes</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">July 1</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Camp Hansen barracks move-in begins</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">July 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Orient Shield (Typhon 2nd deployment)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">September 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Okinawa Gubernatorial Election</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">September 13</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">F-15EX first delivery to Kadena (est.)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">2027</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Today &bull; The Japan Times &bull; Xinhua &bull; Global Times &bull; USNI News &bull; Marine Corps Times &bull; Foreign Policy &bull; South China Morning Post &bull; Nippon.com &bull; CGTN &bull; Ryukyu Shimpo &bull; Travel and Tour World &bull; Breaking Travel News &bull; Military.com &bull; Defense News &bull; The Diplomat
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
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
    console.log('\nNote: Sent in testing mode to verified email only.');
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
