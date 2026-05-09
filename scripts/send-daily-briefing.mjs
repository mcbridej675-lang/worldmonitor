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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Environmental</p>
    </div>

    <!-- ===================== BREAKING NEWS BANNER ===================== -->
    <div style="background: #1a0a0a; border: 2px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 8, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Four Chinese Coast Guard Vessels Intrude Senkaku Territorial Waters &mdash; First Incursion Since April 28</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        Four Chinese coast guard vessels entered Japanese territorial waters off the <strong>Senkaku Islands</strong> (Ishigaki, Okinawa Prefecture) on May 8, the first intrusion since April 28. The Japan Coast Guard&rsquo;s 11th Regional Headquarters in Naha reported the four vessels entered waters near <strong>Uotsuri Island</strong> between 4:15 p.m. and 4:35 p.m. and departed around 6:00 p.m. The incursion comes amid the worst China&ndash;Japan diplomatic crisis in years, with Beijing escalating gray-zone operations following PM Takaichi&rsquo;s Taiwan defense comments and the JMSDF&rsquo;s second Taiwan Strait transit in April.
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
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two F-22 Raptor Squadrons Deploy to Kadena Air Base &mdash; Stealth Fighters from Alaska &amp; Virginia</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two expeditionary fighter squadrons of <strong>F-22 Raptor stealth fighters</strong> arrived at <strong>Kadena Air Base</strong> on May 5&ndash;6. The <strong>90th Expeditionary Fighter Squadron</strong> deployed from <strong>Joint Base Elmendorf-Richardson, Alaska</strong> (12 aircraft, ~$1.7B in combat assets at $143M per airframe), while the <strong>27th Expeditionary Fighter Squadron</strong> deployed from <strong>Joint Base Langley-Eustis, Virginia</strong>. The mission: integrate with the 18th Wing&rsquo;s operations and maintenance groups, joint and allied partners, to refine tactics, strengthen interoperability, and sustain readiness for real-world contingencies.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena &mdash; the <strong>largest U.S. Air Force installation in Asia</strong> &mdash; now hosts the most significant concentration of 5th-generation fighters in the Western Pacific. The permanent replacement fleet of <strong>36 F-15EX Eagle IIs</strong> remains delayed after a Boeing strike (Aug&ndash;Nov 2025) pushed back the originally scheduled spring 2026 delivery. No updated timeline has been released.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Two squadrons from opposite coasts deploying simultaneously signals a deliberate force reconstitution in the Indo-Pacific as Operation Epic Fury winds down. The arrival just 8 days before Japan&rsquo;s first-ever Nansei Islands exercise (May 17&ndash;22) provides visible deterrence amid escalating Chinese naval activity around Okinawa and the ongoing China&ndash;Japan diplomatic crisis.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Epic Fury / Project Freedom / 31st MEU -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">CENTCOM / Force Posture &mdash; May 5&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Operation Epic Fury Declared &ldquo;Over&rdquo; but Ceasefire Fragile &mdash; 31st MEU Still Deployed; Project Freedom Paused</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Secretary of State Marco Rubio declared Operation Epic Fury &ldquo;over&rdquo; on May 5, shifting to a defensive posture: &ldquo;There&rsquo;s no shooting unless we&rsquo;re shot at first.&rdquo; However, President Trump warned bombing would resume &ldquo;at a much higher level and intensity&rdquo; if Iran does not comply. The ceasefire remains fragile &mdash; <strong>Iran launched missiles at UAE targets</strong> for a second consecutive day, and <strong>missiles continue to fly over the Strait of Hormuz</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Project Freedom</strong> &mdash; the U.S. Navy mission to escort merchant ships through the Strait &mdash; was <strong>paused after just 48 hours</strong> (May 4&ndash;6). Only <strong>2 of ~1,600 stranded vessels</strong> were guided through. Major shipping companies remain reluctant to transit; 26 South Korean ships are still stranded. Oil markets remain volatile.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>31st MEU (~2,500 Marines from Camp Hansen)</strong>, deployed aboard USS Tripoli and USS New Orleans since March 13, remains in the CENTCOM AOR with no announced return timeline. Their absence continues to leave a gap in Okinawa&rsquo;s rapid-response capacity in the Indo-Pacific.
        </p>
      </div>
    </div>

    <!-- EVENT 3: Russia-China Naval Transits -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / Southwest Japan &mdash; Apr 21&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian &amp; Chinese Warships Transit Japan&rsquo;s Southwest Region in Coordinated Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a concerning display of Sino-Russian naval coordination, both nations sent warships through Japan&rsquo;s southwestern approaches in late April. <strong>PLAN destroyer CNS Baotou (133)</strong> and <strong>frigate CNS Huanggang (577)</strong> transited between Amami Oshima and Yokoate Island (Apr 19&ndash;22) &mdash; the <strong>first time China used the Yokoate Waterway</strong>, closer to Japan&rsquo;s mainland than the typical Miyako Strait route.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, Russian Navy corvette <strong>RFS Gromkiy (335)</strong> and submarine <strong>RFS Petropavlovsk-Kamchatsky (B-274)</strong> transited through Japan&rsquo;s southwest into the East China Sea on April 21. PLA Navy <strong>Formation 133</strong> then sailed through the <strong>Yonaguni-Iriomote Waterway</strong> on April 22 after Western Pacific training, monitored by JMSDF destroyer <strong>JS Akebono</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The most concentrated foreign naval activity near Okinawa in recent memory. China&rsquo;s unprecedented use of the Yokoate Waterway expands the PLA Navy&rsquo;s operational envelope closer to Japan&rsquo;s main islands. Combined with the Eastern Theater Command&rsquo;s combat readiness patrols in the East China Sea, this signals growing confidence in operating within Japan&rsquo;s defensive perimeter.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-8 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 8 Days &mdash; 12th MLR to Establish First Bilateral Command Center on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong> on Ishigaki, Yonaguni, and Miyakojima.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment&rsquo;s Headquarters Battalion</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island using joint equipment and C2 systems. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The bilateral command center on Miyakojima is a milestone for US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. The exercise is a direct response to the concentrated Russian-Chinese naval activity of late April. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: China-Japan Diplomatic Crisis -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Geopolitical / Bilateral &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&ndash;Japan Tensions Reach &ldquo;Most Dangerous Phase&rdquo; &mdash; Analysts Warn of Limited Clash Risk Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Multiple analysts now assess that China and Japan are entering a <strong>&ldquo;more dangerous phase of rivalry&rdquo;</strong> with <strong>Okinawa at the geographic center</strong>. The crisis has escalated through a series of provocations: PM Takaichi&rsquo;s characterization of a Chinese invasion of Taiwan as a &ldquo;survival-threatening situation&rdquo;; a JGSDF officer&rsquo;s break-in at the Chinese Embassy (March); Japan&rsquo;s second JMSDF Taiwan Strait transit (April 17, destroyer Ikazuchi); and Japan&rsquo;s Diplomatic Bluebook downgrading China from &ldquo;most important bilateral relation&rdquo; to merely &ldquo;important neighboring country.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Beijing&rsquo;s response has been severe: the <strong>Eastern Theater Command launched combat readiness patrols</strong> in the East China Sea and <strong>sent warships near Okinawa</strong>. The Senkaku/Diaoyu waters, the Taiwan Strait, and waterways among Japan&rsquo;s southwestern islands are all assessed as <strong>high-risk zones</strong>. Foreign Policy and The Diplomat assess that a <strong>limited air or naval clash within the next year or two cannot be dismissed</strong>.
        </p>
      </div>
    </div>

    <!-- EVENT 6: Yonaguni EW & Air Defense -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Southwestern Islands &mdash; FY2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Deploying Electronic Warfare Unit &amp; Air Defense to Yonaguni &mdash; 110 km from Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is standing up a new <strong>JGSDF electronic warfare (EW) unit</strong> on <strong>Yonaguni Island</strong> in FY2026, equipped with systems designed to <strong>jam hostile radar and communications</strong>. The <strong>JASDF is establishing a surveillance squadron</strong> on Okinawa and constructing a <strong>$96M fighter aircraft shelter at Naha Air Base</strong> designed to counter Chinese satellite surveillance capabilities.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The JMOD briefed Yonaguni residents on plans to deploy <strong>Type-03 surface-to-air missiles</strong>, with full deployment targeted by 2030. These deployments transform Yonaguni from a monitoring outpost into a <strong>multi-domain defense node</strong> &mdash; electronic warfare, anti-ship missiles, UAV surveillance, and air defense on a single island 70 miles from Taiwan.
        </p>
      </div>
    </div>

    <!-- EVENT 7: 12th MLR & Community -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Development &amp; Community &mdash; May 9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th MLR Continues Rapid Maturation; Community Partnership Forum Meets Today; Flight Line Fair This Weekend</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues rapid capability growth. The <strong>12th Littoral Anti-Air Battalion</strong> unveiled a new facility at Camp Hansen, and the <strong>12th Littoral Combat Team</strong> completed its first overhead live-fire exercise at Camp Schwab. The regiment will integrate with JSDF in the May 17&ndash;20 Nansei exercise, its most significant joint operation to date.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>Okinawa Community Partnership Forum</strong> holds its first meeting today (May 9), addressing revised SOFA newcomer orientation content and U.S.&ndash;Okinawa community relations. <strong>MCAS Futenma&rsquo;s Flight Line Fair</strong> runs May 9&ndash;10, featuring military static displays, Japanese pop band D-51, and Gavin DeGraw &mdash; open to both DoD cardholders and Japanese/American citizens in a goodwill effort.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 8: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Apr 25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base &ldquo;All Okinawa&rdquo; Coalition Fracturing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. However, his <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February 8 lower house election to PM Takaichi&rsquo;s LDP.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The anti-base alliance that has shaped Okinawa politics for nearly a decade is at risk of collapse.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The most consequential Okinawa election for U.S. basing in a decade. An LDP-backed governor supporting Henoko could accelerate the Futenma replacement facility timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment. The <strong>HNS cost-sharing agreement expires end of FY2026</strong>, making the September election outcome a direct input to bilateral defense negotiations.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 9: Futenma & US-Japan Trade -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment &amp; Trade &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return at 30-Year Mark with No End Date; US&ndash;Japan 15% Tariff Framework Under Section 301 Review</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 agreement to return MCAS Futenma passed with <strong>no return date in sight</strong>. DoD states Futenma <strong>will not be returned until Japan finalizes an alternative runway</strong>. Henoko construction is expected to continue <strong>until at least 2033</strong>. Defense Minister <strong>Shinjiro Koizumi</strong> pledged during his January Okinawa visit to reduce the U.S. military footprint.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          On the trade front, the US&ndash;Japan framework agreement maintains a <strong>15% tariff on most Japanese imports</strong> (down from initial 25%). Japan committed to <strong>$550B in U.S. investment by 2029</strong> and purchases of U.S. defense equipment. However, the USTR has initiated <strong>Section 301 investigations</strong> that include Japan, adding uncertainty to the bilateral economic relationship.
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
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Mar&ndash;Apr 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma Hits Record Levels &mdash; 56x Japan&rsquo;s Safety Standard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey found <strong>PFAS at dangerous levels at 31 of 44 sites</strong> near U.S. military installations. The highest contamination &mdash; <strong>2,800 parts per trillion</strong> at Yara Hijaga near Kadena &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. Elevated levels also detected near <strong>MCAS Futenma, Camp Hansen (220 ppt upstream, 200 ppt downstream), Camps Courtney/McTureous, Camp Foster, and Camp Kinser (400 ppt)</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>USFJ denied prefecture access to bases for water sampling</strong> a fifth time, citing insufficient evidence of military-sourced contamination. Unidentified foam spotted near bases in March heightened public concern. The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination is a growing flashpoint in US-Okinawa community relations and likely to become a central campaign theme in the September gubernatorial election. Service members and families living near affected bases should monitor water advisories. The American Cancer Society has linked PFAS exposure to increased risk of liver, breast, testicular, and pancreatic tumors.
          </p>
        </div>
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
          <span style="color: #666; font-size: 11px;">Economy / Currency &mdash; May 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Holds at &yen;156.6/USD &mdash; Hormuz Disruptions &amp; 15% Tariffs Pressure Japan&rsquo;s Economy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen fell to <strong>&yen;156.65 per dollar</strong> on May 8, down 7.8% year-over-year. Japan&rsquo;s intervention options remain limited under IMF freely-floating currency guidelines. The wide US-Japan interest rate differential, Iran war energy costs, and the ongoing <strong>Strait of Hormuz shipping crisis (~1,600 vessels still stranded)</strong> continue pressuring the yen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ministry of Finance upgraded its economic assessment</strong> for the Okinawa region, citing strengthened personal consumption and tourism. GDP growth is projected at <strong>0.8% for 2026</strong> with BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. Shunto wage negotiations delivered a third straight year of ~5% wage hikes. Despite Chinese travel advisories, Okinawa tourism remains strong.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen gives U.S. service members&rsquo; dollar-denominated pay <strong>strong purchasing power off-base</strong>. However, rising inflation (2.5&ndash;3%) and elevated energy costs are eroding this advantage. The US&ndash;Japan 15% tariff framework adds complexity to the bilateral economic picture.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&ndash;Japan crisis enters its most dangerous phase.</strong> Yesterday&rsquo;s four-vessel Senkaku incursion (May 8), combined with the Eastern Theater Command&rsquo;s combat patrols and unprecedented Yokoate Waterway transits, signals Beijing is expanding its pressure campaign around Okinawa. Analysts from Foreign Policy and The Diplomat now assess a limited air or naval clash near Okinawa &ldquo;cannot be dismissed.&rdquo;
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Indo-Pacific force reconstitution underway but incomplete.</strong> Two F-22 squadrons at Kadena restore air superiority, but the 31st MEU remains deployed to CENTCOM with no return date, leaving Okinawa&rsquo;s rapid-response capacity diminished. The Nansei Islands exercise (May 17&ndash;22) will test US-Japan interoperability at a critical moment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Epic Fury declared over but the Hormuz crisis persists.</strong> Only 2 of ~1,600 stranded ships have transited. Project Freedom is paused. The ceasefire is fragile. Energy costs continue impacting the yen and Japan&rsquo;s economy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> 31st MEU return timeline &bull; PRC reaction to Nansei exercise (May 17&ndash;22) &bull; Senkaku incursion frequency escalation &bull; Iran ceasefire stability &amp; Hormuz reopening &bull; F-22 deployment duration at Kadena &bull; F-15EX delivery reschedule &bull; September 13 gubernatorial election &bull; HNS renegotiation &bull; PFAS water sampling access
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; CNN &bull; Al Jazeera &bull; Fox News &bull; CNBC &bull; Time &bull; Foreign Policy &bull; The Diplomat &bull; Taiwan News &bull; USNI News &bull; Naval News &bull; Military.com &bull; Military Times &bull; Air &amp; Space Forces Magazine &bull; Newsweek &bull; Atlantic Council &bull; CSIS &bull; AEI &bull; White House &bull; U.S. State Department &bull; Japan Ministry of Finance &bull; Congressional Research Service &bull; Meyka Defense
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
