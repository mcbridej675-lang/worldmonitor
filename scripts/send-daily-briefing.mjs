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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== BREAKING NEWS BANNER ===================== -->
    <div style="background: #1a0a0a; border: 2px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 7&ndash;8, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Japan Fires &yen;5 Trillion ($32B) Yen Bazooka &mdash; Largest Intervention Campaign Since 2022</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        Bank of Japan accounts released May 7 confirm Japan spent approximately <strong>&yen;5.01 trillion ($32 billion)</strong> in follow-up currency intervention, just days after an earlier round of action. Bank of America estimates total Golden Week interventions at <strong>~$72 billion across at least four separate sessions</strong> (Apr 30, May 1, May 4, May 6) &mdash; the largest intervention episode since 2022. Markets are testing Tokyo&rsquo;s resolve as the US-Japan rate differential and Middle East energy costs continue pressuring the yen. Treasury Secretary Bessent&rsquo;s upcoming Japan visit signals US-Japan coordination on currency defense. BOJ Governor Ueda has adopted a hawkish stance, with markets now debating a potential rate hike at the June meeting.
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
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 5&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two F-22 Raptor Squadrons Deploy to Kadena Air Base &mdash; Virginia &amp; Alaska Units Converge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Twelve <strong>F-22 Raptor stealth fighters</strong> arrived at <strong>Kadena Air Base</strong> on May 5&ndash;6 for rotational duty with the 18th Wing. The deployment includes the <strong>90th Expeditionary Fighter Squadron</strong> from Joint Base Elmendorf-Richardson, Alaska, and the <strong>27th Expeditionary Fighter Squadron</strong> from Joint Base Langley-Eustis, Virginia &mdash; representing approximately <strong>$1.7 billion in combat assets</strong> ($143M per airframe).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The aircraft will &ldquo;integrate with the 18th Wing&rsquo;s operations and maintenance groups, as well as joint and allied partners, to refine tactics, strengthen interoperability and sustain readiness for real-world contingencies.&rdquo; The deployment is part of the ongoing rotation strategy that began in late 2022 after the retirement of Kadena&rsquo;s F-15C/D fleet. Permanent replacement <strong>F-15EX Eagle II fighters remain delayed</strong> due to a Boeing strike (Aug&ndash;Nov 2025), pushing the original Mar&ndash;Jun 2026 delivery timeline further out.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Two separate F-22 squadrons from opposite ends of CONUS converging on Kadena signals deliberate force projection, not a routine single-unit swap. The deployment coincides with the post-Operation Epic Fury Indo-Pacific reconstitution and arrives 11 days before Japan&rsquo;s first-ever Nansei Islands exercise. Kadena now hosts the most significant concentration of 5th-generation fighters in the Western Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: China Scales Back Air Challenges -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Air Defense / East China Sea &mdash; May 6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JASDF Scrambles Drop to 595 &mdash; Lowest Since 2012, But Incidents Grow &ldquo;Bolder&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          New data released May 6 shows Japan Air Self-Defense Force pilots scrambled <strong>595 times in FY2025</strong> to intercept foreign aircraft &mdash; down 15% from FY2024&rsquo;s 704 and the <strong>lowest level since FY2012</strong>. Chinese aircraft encounters dropped sharply from <strong>464 to 366</strong>, while Chinese drone approaches fell from 23 to 16. Russian scrambles remained &ldquo;average&rdquo; at 214 (vs. 237 prior year).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, JASDF Chief of Staff Gen. Hiroaki Uchikura cautioned that individual incidents have grown more provocative despite the numerical decline. Notable events include a <strong>Chinese coast guard helicopter operating within Senkaku territorial waters</strong> (May 2025) and a <strong>Chinese J-15 &ldquo;intermittently illuminating&rdquo; two Japanese F-15s</strong> with fire-control radar (Dec 2025) &mdash; a potential precursor to missile targeting.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The quantitative decline may reflect a shift in PLA strategy from volume to quality &mdash; fewer approaches but with more aggressive rules of engagement. Fire-control radar illumination is one step below weapons employment. Combined with Beijing&rsquo;s unprecedented Yokoate Waterway naval transit and new East China Sea monitoring platform, China appears to be testing escalation thresholds rather than simply probing airspace.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-9 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 9 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Exercise launches nine days from today, directly following the concentrated Russian-Chinese naval activity of late April. The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Russia-China Naval Coordination (Ongoing) -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / Southwest Japan &mdash; Apr 21&ndash;28 (Ongoing Assessment)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian &amp; Chinese Warships Transit Japan&rsquo;s Southwest Region &mdash; PRC Opens New Yokoate Waterway Route</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PLAN destroyer CNS Baotou (133)</strong> and <strong>frigate CNS Huanggang (577)</strong> transited between Amami Oshima and Yokoate Island (Apr 19&ndash;22) &mdash; the <strong>first time China used the Yokoate Waterway</strong>, closer to Japan&rsquo;s mainland than the typical Miyako Strait route. Russian Navy corvette <strong>RFS Gromkiy (335)</strong> and submarine <strong>RFS Petropavlovsk-Kamchatsky (B-274)</strong> simultaneously transited into the East China Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beijing has also moved ahead with installing a <strong>23rd offshore structure near the East China Sea median line</strong>, suspected of functioning as a forward monitoring outpost tracking JSDF movements. When the JMSDF destroyer <strong>JS Ikazuchi</strong> transited the Taiwan Strait, China&rsquo;s Eastern Theater Command responded by deploying <strong>J-20 stealth fighters and CH-4 attack drones</strong> to closely track the vessel.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China is expanding its geographic envelope of operations closer to Japan&rsquo;s main islands while combining economic pressure (rare earth export restrictions on dual-use defense materials) with military activity. The Yokoate Waterway usage and new monitoring platform signal growing confidence in operating within Japan&rsquo;s defensive perimeter. Japan-China relations are described as the worst since normalization in 1972.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Operation Epic Fury Aftermath -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Reconstitution / CENTCOM &mdash; May 5 (Ongoing)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Post-Epic Fury: 31st MEU Return to Okinawa Anticipated &mdash; &ldquo;Project Freedom&rdquo; Transition Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Following Secretary Rubio&rsquo;s May 5 declaration that Operation Epic Fury is &ldquo;over,&rdquo; the U.S. has transitioned to <strong>&ldquo;Project Freedom,&rdquo;</strong> a defensive operation to reopen the Strait of Hormuz. The <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> deployed aboard USS Tripoli in mid-March is now expected to begin its return to Okinawa, potentially restoring the region&rsquo;s rapid-response capacity within weeks.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          However, the ceasefire remains fragile &mdash; Iran launched missiles at UAE shipping for a second consecutive day, and Defense Secretary Hegseth warned further strikes remain possible. PM Takaichi has stated Japan would have all crude oil it needed beyond end of 2026, addressing energy security concerns tied to the Hormuz disruptions.
        </p>
      </div>
    </div>

    <!-- EVENT 6: 12th MLR & SOFA Updates -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Community Relations &mdash; May 9 (Tomorrow)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">SOFA Newcomer Orientation Under Revision &mdash; Community Partnership Forum Meets Tomorrow</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. military officials are revising the mandatory <strong>SOFA newcomer orientation</strong> following local feedback. The <strong>Okinawa Community Partnership Forum</strong> holds its first meeting <strong>tomorrow, May 9</strong>. Changes address descriptions of incidents involving service members and updated content on <strong>Irei No Hi</strong> (Battle of Okinawa memorial, June 23). Solo military patrols in nightlife districts remain paused following a viral assault video incident.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues rapid maturation ahead of its Nansei exercise integration. The <strong>12th Littoral Anti-Air Battalion</strong> unveiled a new facility at Camp Hansen, and the <strong>12th Littoral Combat Team</strong> completed its first overhead live-fire exercise at Camp Schwab.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 7: China-Japan Diplomatic Crisis -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Diplomatic / Regional Security &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Relations at Worst Since 1972 &mdash; Rare Earth Restrictions Target Defense Supply Chain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 2025&ndash;2026 China&ndash;Japan diplomatic crisis continues to deepen. PM Takaichi&rsquo;s description of a Taiwan invasion as potentially justifying Japanese military action under the constitution has drawn sharp PRC retaliation. China has imposed <strong>export restrictions on rare earth elements and specialty alloys</strong> essential for advanced missile defense systems, targeting vulnerabilities in Japan&rsquo;s defense supply chain.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan has responded by deploying <strong>~1,400 troops to the Balikatan exercises</strong> &mdash; its largest-ever participation and first full-scale deployment of combat forces to the Philippines-based drill. Chinese coast guard vessels were present near the Senkakus on <strong>357 of 365 days in 2025</strong>, a fourth consecutive annual record. Beijing is combining economic pressure, diplomatic isolation, and gray-zone military operations in an integrated pressure campaign.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The rare earth restrictions directly impact Japan&rsquo;s defense modernization, including systems being deployed to islands near Okinawa. The integrated pressure campaign &mdash; economic, diplomatic, and military simultaneously &mdash; suggests Beijing views the current moment as requiring comprehensive deterrence against Japan&rsquo;s growing defense posture. This has direct implications for U.S. forces on Okinawa as alliance interoperability deepens.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; 128 Days Out</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor Race: Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; Coalition Fracturing &mdash; Sep 13 Election</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki</strong> (66) seeks a third term in the <strong>September 13 gubernatorial election</strong> on an anti-Henoko platform. However, the <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the Feb 8 lower house election. The Centrist Reform Alliance remains undecided on base relocation policy.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Likely opponent <strong>Genta Koja</strong> (42), former deputy mayor of Naha, runs as a de facto LDP candidate who <strong>supports Henoko relocation</strong>. A Koja victory would represent a seismic shift in Okinawa base politics &mdash; potentially accelerating Futenma replacement, easing HNS renegotiations, and reducing friction for U.S. force realignment. The Futenma return hit its <strong>30th anniversary</strong> in April with no concrete return date; Henoko construction continues until at least 2033.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 9: Yen Crisis Deep Dive -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Currency / Markets &mdash; May 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Spends ~&yen;10 Trillion ($72B) Defending the Yen &mdash; BOJ Rate Hike Speculation Grows</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          BOJ accounts released May 7 confirmed the latest intervention at <strong>&yen;5.01 trillion ($32B)</strong>. Bank of America identified <strong>four separate intervention sessions</strong> during Golden Week (Apr 30, May 1, May 4, May 6), estimating a combined <strong>~$72 billion</strong> &mdash; the largest intervention campaign since 2022. The yen surged from ~157.50 to ~155.00 per dollar on May 6 before partially retracing.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          BOJ Governor Ueda has adopted a hawkish stance signaling concern about imported inflation. Markets are debating a potential <strong>BOJ rate hike at the June meeting</strong>. Treasury Secretary Bessent&rsquo;s upcoming Japan visit signals allied coordination. Japan&rsquo;s intervention capacity is being tested &mdash; intervention options are limited under IMF guidelines for freely-floating currencies.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen means U.S. service members&rsquo; dollar-denominated pay has <strong>increased purchasing power off-base</strong>. However, Japan CPI inflation at <strong>2.5&ndash;3.0%</strong> is eroding this advantage. Energy costs remain elevated due to the Iran conflict and Hormuz disruptions. Okinawa&rsquo;s economy received an upgraded MOF assessment, with tourism and personal consumption strengthening.
        </p>
      </div>
    </div>

    <!-- ===================== ENVIRONMENTAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Environmental &amp; Health</p>
    </div>

    <!-- EVENT 10: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Bases at 56x Safety Standard &mdash; USFJ Denies Access for 5th Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s groundwater survey found <strong>PFAS at dangerous levels at 31 of 44 sites</strong> near U.S. installations. Highest contamination: <strong>2,800 ppt at Yara Hijaga near Kadena (56x Japan&rsquo;s 50 ppt standard)</strong>. Elevated levels also near MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster. <strong>USFJ denied prefecture base access for water sampling</strong> for a fifth time.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          This issue is expected to become a central theme in the September gubernatorial campaign and remains a major flashpoint in US-Okinawa community relations. Service members and families living near affected bases should monitor water advisories.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan&rsquo;s $72B yen defense is the dominant financial story.</strong> The largest currency intervention since 2022, combined with BOJ hawkishness and Bessent&rsquo;s upcoming visit, signals a coordinated US-Japan strategy. A June rate hike would be historic and would impact yen-dollar dynamics for all personnel.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Two F-22 squadrons at Kadena + Nansei exercise (T-9) = Indo-Pacific force surge.</strong> The convergence of Virginia and Alaska-based Raptors at Kadena, the upcoming first-ever Nansei exercise with 12th MLR, and post-Epic Fury reconstitution represent the most significant concentration of US-Japan combat power near Taiwan in recent memory.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China shifts from volume to quality in provocations.</strong> JASDF scrambles are at a 13-year low, but fire-control radar illumination, the Yokoate Waterway naval transit, rare earth export restrictions, and a new East China Sea monitoring platform signal a more sophisticated, multi-domain pressure campaign.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> BOJ June rate decision &bull; Bessent Japan visit &bull; Nansei exercise (May 17&ndash;22) &amp; PRC reaction &bull; 31st MEU return timeline &bull; Iran ceasefire stability &bull; F-22 deployment duration &bull; Community Partnership Forum (May 9) &bull; Sep 13 gubernatorial election &bull; HNS renegotiation &bull; PFAS access
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Bloomberg &bull; CNBC &bull; US News &bull; Bank of America &bull; The Japan Times &bull; Nippon.com &bull; Modern Diplomacy &bull; South China Morning Post &bull; Foreign Policy &bull; Brookings &bull; CSIS &bull; War on the Rocks &bull; Reuters &bull; Military.com &bull; Ryukyu Shimpo &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; Yahoo Finance &bull; The Diplomat
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
