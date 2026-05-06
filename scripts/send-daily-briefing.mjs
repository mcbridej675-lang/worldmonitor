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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Intelligence</p>
    </div>

    <!-- ===================== BREAKING NEWS BANNER ===================== -->
    <div style="background: #1a0a0a; border: 2px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 6, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Trump Pauses &ldquo;Project Freedom&rdquo; in Hormuz Strait &mdash; Signals &ldquo;Great Progress&rdquo; on Iran Deal</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        President Trump announced a temporary pause in the U.S. military&rsquo;s &ldquo;Project Freedom&rdquo; operation to reopen the Strait of Hormuz, citing &ldquo;great progress&rdquo; toward a broader agreement with Iran. This follows Secretary Rubio&rsquo;s May 5 declaration that Operation Epic Fury&rsquo;s 66-day bombing campaign is officially &ldquo;over&rdquo; after destroying 85% of Iran&rsquo;s defense industrial base, 150 warships, and every submarine. The <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> deployed aboard USS Tripoli is expected to begin its return to Okinawa, restoring rapid-response capacity. However, Iran continues missile and drone attacks on UAE shipping, and Iranian Parliament Speaker Qalibaf called the U.S. naval blockade a ceasefire violation. Defense Secretary Hegseth warned further strikes remain possible.
      </p>
    </div>

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: F-22 Deployment to Kadena -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 2&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Now Operational at Kadena Air Base &mdash; $1.8B Stealth Package from Alaska</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>12 F-22 Raptor stealth fighters</strong> arrived at <strong>Kadena Air Base</strong> on May 2&ndash;3 from <strong>Joint Base Elmendorf-Richardson, Alaska</strong>, representing approximately <strong>$1.8 billion in combat assets</strong> ($150M per airframe). Now entering their fourth day at Kadena, the jets are believed to be achieving initial operational readiness at the base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena &mdash; the <strong>largest U.S. Air Force installation in Asia</strong> &mdash; now hosts the most significant concentration of 5th-generation fighters in the Western Pacific. The deployment accelerates Kadena&rsquo;s transition from retired F-15C/D Eagles to a mixed fighter force of F-22s and F-16s, dramatically enhancing air superiority capabilities across the First Island Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            12 stealth fighters at Kadena just as Epic Fury concludes and 11 days before Japan&rsquo;s Nansei Islands exercise. The deployment signals rapid force reconstitution in the Indo-Pacific following CENTCOM drawdowns and visible deterrence amid escalating Chinese and Russian naval activity around Okinawa. PRC intelligence will note the shift from aging F-15s to air-dominant F-22s.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Japan Regional Defense Partnerships -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Defense Partnerships / Indo-Pacific &mdash; May 4&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Expands Defense Web: Indonesia &amp; Philippines Partnerships Deepen in 48 Hours</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a rapid diplomatic push, Defense Minister <strong>Shinjiro Koizumi</strong> signed defense agreements with two key Indo-Pacific partners. On <strong>May 4 in Jakarta</strong>, Japan and Indonesia agreed to collaborate on <strong>joint military exercises and explore future weapons purchases</strong> under Japan&rsquo;s revised defense equipment transfer framework. On <strong>May 5</strong>, Japan and the Philippines issued a joint press statement agreeing to <strong>strengthen maritime domain awareness capabilities</strong> and broaden cooperation amid the &ldquo;increasingly tense regional security environment.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Former METI head <strong>Yasutoshi Nishimura</strong> stated at a Hudson Institute event today (May 6): &ldquo;The free, open and stable international order is under strain, and Japan faces the most severe and complex security environment since World War II.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is rapidly building a multilateral defense network spanning Indonesia, the Philippines, and Australia &mdash; all nations along the First and Second Island Chains. The Indonesia weapons deal marks Japan&rsquo;s most significant defense export push in Southeast Asia. Combined with the 12th MLR&rsquo;s integration in Okinawa, this reflects a strategy to distribute deterrence beyond U.S.-Japan bilateral frameworks.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: China East China Sea Military Activity -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval &amp; Air Activity / East China Sea &mdash; Apr 18&ndash;May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PLA Launches East China Sea Drills After JMSDF Taiwan Strait Transit; Liaoning Carrier Deploys</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China launched <strong>joint combat readiness patrols</strong> in the East China Sea on April 18, one day after JMSDF destroyer <strong>JS Ikazuchi</strong> transited the Taiwan Strait. The exercises were described as comparable in scale to a &ldquo;joint combat readiness patrol&rdquo; &mdash; a direct military response to Japan&rsquo;s increasingly assertive posture.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, carrier <strong>CV-16 Liaoning</strong> transited the Taiwan Strait on April 20 as part of <strong>cross-theater exercises</strong> spanning both the Philippine Sea and the South China Sea. Combined with <strong>PLAN destroyer CNS Baotou (133)</strong> and <strong>frigate CNS Huanggang (577)</strong> transiting the Yokoate Waterway near Amami Oshima (Apr 19&ndash;22) &mdash; China&rsquo;s <strong>first announced use of that waterway</strong> &mdash; and Russian Navy units operating concurrently, the Western Pacific faces the most concentrated foreign naval activity near Okinawa in recent memory.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China&rsquo;s unprecedented use of the Yokoate Waterway expands PLA Navy operations closer to Japan&rsquo;s main islands. The Liaoning carrier&rsquo;s simultaneous cross-theater deployment signals growing PLA confidence in multi-domain operations within Japan&rsquo;s defensive perimeter. These provocations directly inform Japan&rsquo;s first-ever Nansei Islands exercise (May 17&ndash;22) and the F-22 surge to Kadena.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Joint Exercise / Nansei Islands &mdash; T-11 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 11 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong> on Ishigaki, Yonaguni, and Miyakojima.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. Exercise launches days after concentrated Chinese and Russian naval activity. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Yonaguni EW & Southern Shield -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Southwestern Islands &mdash; FY2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan&rsquo;s &ldquo;Southern Shield&rdquo;: EW Unit, Air Defense &amp; $96M Hardened Shelter for Naha</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is standing up a new <strong>JGSDF electronic warfare (EW) unit</strong> on <strong>Yonaguni Island</strong> in FY2026, equipped with systems to <strong>jam hostile radar and communications</strong>. The JASDF is establishing a <strong>surveillance squadron</strong> on Okinawa and constructing a <strong>$96M fighter aircraft shelter at Naha Air Base</strong> designed to counter Chinese satellite surveillance. Plans to deploy <strong>Type-03 Ch&umacr;-SAM surface-to-air missiles</strong> to Yonaguni by 2030 are advancing.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s record <strong>$58 billion defense budget for FY2026</strong> underpins this &ldquo;southern shield&rdquo; strategy. The 2022 Defense Buildup Program calls for <strong>upgrading the 15th Brigade in Okinawa to a full division</strong>. These deployments transform Yonaguni from a monitoring outpost into a <strong>multi-domain defense node</strong> &mdash; EW, anti-ship missiles, UAV surveillance, and air defense on a single island 70 miles from Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            EW capabilities on Yonaguni could disrupt PLA command-and-control in a Taiwan scenario. Japan is pushing the legal limit of &ldquo;defence&rdquo; as Al Jazeera noted &mdash; faith in U.S. security cover is faltering, driving Tokyo to build autonomous capabilities. Combined with the Nansei exercise and Kadena&rsquo;s F-22s, Okinawa&rsquo;s southwestern islands are being transformed into a comprehensive defensive barrier along the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: 12th MLR & SOFA Updates -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Development &amp; Community Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th MLR Expands; SOFA Orientation Under Revision; Naha Haarii Cultural Engagement</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues rapid maturation. The <strong>12th Littoral Anti-Air Battalion</strong> unveiled a new facility at Camp Hansen (Mar 6), and the <strong>12th Littoral Combat Team</strong> completed its first overhead live-fire exercise at Camp Schwab. The regiment integrates with JSDF in the May 17&ndash;20 Nansei exercise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          U.S. military officials are revising the mandatory <strong>SOFA newcomer orientation</strong> following feedback from the <strong>Okinawa Community Partnership Forum</strong> (first meeting May 9). Changes address incident descriptions and <strong>Irei No Hi</strong> (June 23) content. Separately, U.S. Army community members participated in <strong>Okinawa&rsquo;s Naha Haarii</strong> dragon boat festival, a positive community engagement event.
        </p>
      </div>
    </div>

    <!-- ===================== INTELLIGENCE & SECURITY SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Intelligence &amp; Security</p>
    </div>

    <!-- EVENT 7: Japan Intelligence Overhaul -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Intelligence Reform / National Security &mdash; 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Cabinet Approves National Intelligence Agency &amp; Anti-Spy Law Legislation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PM <strong>Sanae Takaichi&rsquo;s</strong> Cabinet approved legislation to establish a <strong>National Intelligence Secretariat</strong> and coordinating <strong>National Intelligence Council</strong> &mdash; Japan&rsquo;s most significant intelligence reform in decades. A new <strong>anti-spy law</strong> will follow, with an expert panel convening this summer to draft the anti-espionage legislation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The reform aims to fill what defense planners describe as a &ldquo;vacuum in vigilance, surveillance and information-gathering activities&rdquo; in the <strong>Nansei Islands</strong>. Japan&rsquo;s 2022 Defense Buildup Program calls for upgrading intelligence capabilities across the southwestern island chain, directly relevant to Okinawa-based operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A centralized Japanese intelligence agency will enhance information-sharing with U.S. intelligence partners and improve the security environment around Okinawa&rsquo;s bases. The anti-spy law addresses long-standing concerns about espionage near U.S. and JSDF installations in the Nansei chain. This is a prerequisite for deeper Five Eyes-adjacent intelligence cooperation.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Senkaku Incursions -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Maritime Security / East China Sea &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Chinese Coast Guard Gray-Zone Activity Near Senkakus Continues &mdash; 357 Days in 2025</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese coast guard vessels <strong>chased a Japanese fishing boat</strong> near the Senkaku Islands in March, and a <strong>Chinese marine research vessel</strong> was spotted in April conducting a suspected <strong>unauthorized survey</strong> within Japan&rsquo;s EEZ. Chinese vessels were present in the Senkaku contiguous zone on <strong>357 of 365 days in 2025</strong> &mdash; a fourth consecutive annual record.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Coast guard vessels have become <strong>larger, more heavily armed, and reinforced</strong>. The 11th Regional Coast Guard commander stated the situation is &ldquo;increasingly severe&rdquo; and &ldquo;unpredictable.&rdquo; Japan announced plans to counter China&rsquo;s armed coast guard fleet with enhanced maritime law enforcement capabilities.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 9: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Sep 13 Election</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki&rsquo;s Third-Term Bid in Jeopardy &mdash; &ldquo;All Okinawa&rdquo; Coalition Fracturing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. His <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February lower house election. The Centrist Reform Alliance (CRA) &mdash; formed by CDP (backs Tamaki) and Komeito (tolerates relocation) &mdash; remains undecided.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Likely opponent <strong>Genta Koja</strong> (42), former deputy mayor of Naha, runs as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The Japan Times reports Tamaki faces &ldquo;wavering support&rdquo; as the political landscape shifts under PM Takaichi&rsquo;s LDP.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would represent a <strong>seismic shift in Okinawa base politics</strong>. An LDP-backed governor could accelerate Henoko, ease HNS renegotiations, and reduce friction for U.S. force realignment. The anti-base alliance that shaped Okinawa politics for a decade is at risk of collapse.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 10: Futenma & HNS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Bilateral &mdash; Apr 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Hits 30-Year Mark; HNS Agreement Expiring &mdash; Renegotiation Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 agreement to return MCAS Futenma passed with <strong>no return date in sight</strong>. DoD states Futenma <strong>will not be returned until Japan finalizes an alternative runway</strong> (current: ~2,700m vs. planned Henoko: ~1,800m each). Henoko construction extends <strong>until at least 2033</strong>. The first ~100 logistics Marines have relocated to Guam as the initial phase.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>US-Japan Host Nation Support agreement expires end of FY2026</strong>. Renegotiations address Marines redistribution to Guam/Australia, enhanced capabilities at Kadena, and distributed force posture. Defense Minister Koizumi pledged in January to <strong>reduce the U.S. military footprint</strong> on the island.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 11: Economy & Yen -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Economy / Currency &mdash; May 6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Dips to &yen;156.38/USD (&minus;0.95%) &mdash; Intervention Options Dwindling</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen fell to <strong>&yen;156.38 per dollar</strong> on May 6, down 0.95% from the previous session. Over the past month, the yen has strengthened 2.03%, but remains <strong>down 8.73% over the past 12 months</strong>. Japan can conduct only <strong>two more three-day intervention sessions before November</strong> under IMF guidelines. The wide US-Japan interest rate differential and Iran-related energy costs continue pressuring the currency.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ministry of Finance upgraded its economic assessment</strong> for the Okinawa region, citing strengthened personal consumption and tourism. GDP growth projected at <strong>0.8% for 2026</strong> (IMF); BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. Shunto wage negotiations delivered a third straight year of ~5% hikes. Unemployment ticked up to <strong>2.6%</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen boosts <strong>off-base purchasing power</strong> for dollar-denominated pay. However, rising inflation (2.5&ndash;3%) erodes this advantage. Energy costs remain elevated due to the Iran conflict and Strait of Hormuz disruptions. The Hormuz pause announced today could ease energy pressure if sustained.
        </p>
      </div>
    </div>

    <!-- EVENT 12: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma &mdash; 56x Safety Standard; Base Access Denied</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s groundwater survey found <strong>PFAS at 31 of 44 sites</strong> near U.S. bases. Peak: <strong>2,800 ppt at Yara Hijaga near Kadena</strong> (56x Japan&rsquo;s 50 ppt standard). Elevated levels also near <strong>Futenma, Camp Hansen, Courtney/McTureous, and Foster</strong>. <strong>USFJ denied base access for water sampling</strong> for a fifth time. The U.S. EPA states no level of PFAS is considered safe.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Growing flashpoint in US-Okinawa community relations and likely central campaign theme in the September election. Service members and families near affected bases should monitor water advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Hormuz pause signals possible Iran deal &mdash; 31st MEU return on the horizon.</strong> Trump&rsquo;s &ldquo;Project Freedom&rdquo; pause and Rubio&rsquo;s declaration that Epic Fury is &ldquo;over&rdquo; create conditions for the 31st MEU&rsquo;s return to Okinawa. But Iran&rsquo;s continued attacks on UAE shipping and Qalibaf&rsquo;s ceasefire violation claims mean the deal remains fragile. If Hormuz reopens, energy costs ease &mdash; positive for the yen and local economy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Indo-Pacific force reconstitution is accelerating.</strong> 12 F-22 Raptors at Kadena, Japan&rsquo;s defense deals with Indonesia and the Philippines in 48 hours, and the Nansei exercise in 11 days all point to a rapid strategic pivot. Japan&rsquo;s &ldquo;southern shield&rdquo; is no longer theoretical &mdash; EW units, hardened shelters, and anti-ship missiles are deploying now.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China is testing Japan&rsquo;s perimeter.</strong> PLA East China Sea drills, Liaoning carrier transit, Yokoate Waterway use, and near-continuous Senkaku presence represent the most provocative Chinese military posture near Okinawa in years. Japan&rsquo;s intelligence overhaul and National Intelligence Agency are direct responses.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran deal progress &amp; 31st MEU return timeline &bull; PRC reaction to Nansei exercise (May 17&ndash;22) &bull; F-22 deployment duration at Kadena &bull; Hormuz reopening &amp; energy costs &bull; Sep 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation &bull; National Intelligence Agency legislation &bull; PFAS water sampling access
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; Time &bull; Al Jazeera &bull; Al Arabiya &bull; CBS News &bull; Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; USNI News &bull; Military.com &bull; Military Times &bull; National Defense Magazine &bull; South China Morning Post &bull; The Diplomat &bull; Asian Military Review &bull; Newsweek &bull; Nippon.com &bull; Defense News &bull; AEI &bull; Bank of Japan &bull; Japan Ministry of Defense &bull; IMF &bull; Deloitte &bull; Meyka Defense &bull; DVIDSHUB &bull; GlobalSecurity.org
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
