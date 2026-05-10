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
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 10, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Iran Launches Drone Strikes on Qatar, UAE &amp; Kuwait &mdash; Ceasefire in Jeopardy; 31st MEU Return Delayed</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        Iran launched drone strikes against <strong>Qatar, the UAE, and Kuwait</strong> on May 10, severely testing the fragile ceasefire declared five days earlier. A drone set fire to a commercial ship off Qatar&rsquo;s coast, while the UAE intercepted two drones and Kuwait reported hostile drones entering its airspace. No casualties were reported. Since Iran began its strikes on the UAE, air defenses have engaged <strong>551 ballistic missiles, 29 cruise missiles, and 2,263 drones</strong> (230 injuries total). President Trump warned that if Iran does not abide by the ceasefire, &ldquo;the bombing starts&hellip; at a much higher level and intensity.&rdquo; The <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> aboard USS Tripoli &mdash; deployed to the Middle East on March 13 to secure the Strait of Hormuz &mdash; now faces an <strong>indefinite return timeline</strong> as the crisis escalates, leaving Okinawa&rsquo;s rapid-response capacity diminished.
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
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 3&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two F-22 Raptor Squadrons Deploy to Kadena as F-35As Depart &amp; F-15EX Delivery Stalls</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptors</strong> arrived at <strong>Kadena Air Base</strong> for rotational duty with the 18th Wing: the <strong>90th Expeditionary Fighter Squadron</strong> from Joint Base Elmendorf-Richardson, Alaska (12 aircraft, May 3&ndash;4) and the <strong>27th Expeditionary Fighter Squadron</strong> from Joint Base Langley-Eustis, Virginia. Simultaneously, <strong>two F-35A Lightning II squadrons departed</strong> Kadena, returning to their home stations. The rotation places an estimated <strong>12&ndash;24 F-22s</strong> at Asia&rsquo;s largest U.S. Air Force installation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The deployment is a stopgap: the <strong>planned permanent fleet of 36 F-15EX Eagle IIs</strong> (announced July 2024 to replace 48 retired F-15C/Ds) remains <strong>delayed due to a monthslong Boeing strike in 2025</strong>. The Air Force confirmed in February it has postponed F-15EX delivery plans indefinitely. Kadena&rsquo;s 18th Wing meanwhile participated in the <strong>2026 Naha Dragon Boat Race (Hari)</strong> May 3&ndash;5, strengthening community ties.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The dual-squadron F-22 deployment signals urgent Indo-Pacific force reconstitution as Operation Epic Fury winds down. With F-15EX deliveries stalled and F-35As rotating out, Kadena is cycling through temporary fighter packages &mdash; a vulnerability if the Iran ceasefire collapses and CENTCOM demands resurge. The F-22&rsquo;s air-dominance capability is critical given the recent Sino-Russian naval activity near Okinawa and the upcoming Nansei Islands exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Russian & Chinese Warships Joint Transit -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / Southwest Japan &mdash; Apr 21&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian &amp; Chinese Warships Transit Japan&rsquo;s Southwest Region in Coordinated Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a concerning display of Sino-Russian naval coordination, both nations sent warships through Japan&rsquo;s southwestern approaches in late April. <strong>PLAN destroyer CNS Baotou (133)</strong> and <strong>frigate CNS Huanggang (577)</strong> transited between Amami Oshima and Yokoate Island (Apr 19&ndash;22) &mdash; the <strong>first time China announced use of the Yokoate Waterway</strong>, which is closer to Japan&rsquo;s mainland than the typical Miyako Strait route.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, Russian Navy corvette <strong>RFS Gromkiy (335)</strong> and submarine <strong>RFS Petropavlovsk-Kamchatsky (B-274)</strong> were spotted April 21 transiting through Japan&rsquo;s southwest region into the East China Sea. The PLA Navy&rsquo;s <strong>Formation 133</strong> then sailed through the <strong>Yonaguni-Iriomote Waterway</strong> on April 22 after Western Pacific training, monitored by JMSDF destroyer <strong>JS Akebono</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The near-simultaneous Russian and Chinese naval transits through Japan&rsquo;s southwestern approaches represent the most concentrated foreign naval activity near Okinawa in recent memory. China&rsquo;s unprecedented use of the Yokoate Waterway expands the geographic envelope of PLA Navy operations closer to Japan&rsquo;s main islands. Combined with the Eastern Theater Command&rsquo;s involvement, this signals growing confidence in operating within Japan&rsquo;s defensive perimeter and complicates JMSDF tracking requirements.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-7 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 7 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all five regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>. This follows the conclusion of <strong>Balikatan 2026</strong> (Apr 20&ndash;May 8), in which Japan participated as an <strong>active partner for the first time</strong> alongside the U.S., Philippines, Australia, Canada, New Zealand, and France.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise launches days after the Senkaku incursion (May 8) and concentrated Russian-Chinese naval transits (Apr 21&ndash;28). PLA Southern Theater Command responded to Balikatan with a surface task group east of the Luzon Strait (Apr 24) and the carrier Liaoning transited the Taiwan Strait (Apr 20). The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. Watch for PRC reaction via diplomatic statements or retaliatory naval activity.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Yonaguni EW & Air Defense -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Southwestern Islands &mdash; FY2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Deploying Electronic Warfare Unit &amp; Air Defense to Yonaguni &mdash; 110 km from Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is standing up a new <strong>JGSDF electronic warfare (EW) unit</strong> on <strong>Yonaguni Island</strong> in FY2026, equipped with systems designed to <strong>jam hostile radar and communications</strong>. Simultaneously, the <strong>JASDF is establishing a surveillance squadron</strong> on Okinawa and constructing a <strong>$96M fighter aircraft shelter at Naha Air Base</strong> designed to counter Chinese satellite surveillance capabilities.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JMOD briefed Yonaguni residents on plans to deploy <strong>Type-03 Ch&umacr;-SAM surface-to-air missiles</strong> to the island, with full deployment targeted by 2030. These deployments transform Yonaguni from a monitoring outpost into a <strong>multi-domain defense node</strong> &mdash; electronic warfare, anti-ship missiles, UAV surveillance, and air defense on a single island 70 miles from Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            EW capabilities on Yonaguni could disrupt PLA command-and-control in a Taiwan scenario. Combined with the upcoming Nansei exercise&rsquo;s ScanEagle UAV deployment and Naha&rsquo;s hardened aircraft shelter, Okinawa&rsquo;s southwestern islands are being transformed into a comprehensive multi-domain defensive barrier along the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Senkaku Incursions — May 8 Update -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Maritime Security / East China Sea &mdash; May 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4 Chinese Coast Guard Ships Enter Senkaku Territorial Waters &mdash; First Incursion Since April 28</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Four Chinese coast guard vessels <strong>entered Japanese territorial waters</strong> near <strong>Uotsuri Island</strong> in the Senkaku chain on <strong>May 8 between 4:15&ndash;4:35 p.m.</strong>, departing around 6 p.m. The 11th Regional Coast Guard headquarters in Naha confirmed this was the <strong>first intrusion since April 28</strong>. The incursion comes just days before the JSDF&rsquo;s first-ever Nansei Islands exercise (May 17&ndash;22).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This continues an aggressive pattern: Chinese vessels were present in the contiguous zone around the Senkakus on <strong>357 of 365 days in 2025</strong> &mdash; a fourth consecutive annual record. Earlier this year, Chinese coast guard vessels <strong>chased a Japanese fishing boat</strong> (March) and a research vessel conducted an <strong>unauthorized survey</strong> in Japan&rsquo;s EEZ (April). Japan&rsquo;s FY2026 budget includes <strong>four MQ-9B SeaGuardian drones and two large patrol ships</strong> to counter the threat.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The May 8 incursion resumes a near-daily pattern of gray-zone pressure. With Okinawa&rsquo;s 31st MEU deployed to the Middle East and Japan preparing the Nansei exercise, Beijing may be probing response times and gauging the impact of U.S. force drawdowns in the region. The timing &mdash; nine days before the first-ever Nansei drill &mdash; is unlikely coincidental.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: 12th MLR, Camp Foster Return & SOFA Updates -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Development &amp; Community Relations &mdash; May 9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Camp Foster Kishaba Return Finalized; SOFA Orientation Revised at First Community Partnership Forum</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan-U.S. Joint Committee finalized an agreement to return approximately <strong>12 acres of the Kishaba Housing Area on Camp Foster</strong> to Okinawa, potentially by fall 2026, to alleviate traffic congestion. The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues rapid maturation: the <strong>12th Littoral Anti-Air Battalion</strong> unveiled a new facility at Camp Hansen (Mar 6), and the <strong>12th Littoral Combat Team</strong> completed its first overhead live-fire exercise at Camp Schwab. The regiment integrates with JSDF in the May 17&ndash;20 Nansei exercise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>Okinawa Community Partnership Forum held its first meeting May 9</strong>. U.S. military officials are revising the mandatory <strong>SOFA newcomer orientation</strong> based on prefectural feedback, addressing descriptions of incidents involving service members and updated content on <strong>Irei No Hi</strong> (June 23). Solo military police patrols in nightlife districts <strong>remain suspended</strong> following a November 2025 assault incident. The <strong>54th anniversary of Okinawa&rsquo;s reversion</strong> to Japan falls on May 15 &mdash; Governor Tamaki gave a joint media interview at the Prefectural Office on May 9 to mark the occasion.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 7: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Apr 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base &ldquo;All Okinawa&rdquo; Coalition in Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. However, his <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February 8 lower house election to PM Sanae Takaichi&rsquo;s LDP. The Centrist Reform Alliance (CRA) &mdash; formed by the CDP (which backs Tamaki) and Komeito (which tolerates the relocation) &mdash; remains undecided on its position.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The Japan Times reports Tamaki faces &ldquo;wavering support&rdquo; as the political landscape shifts. The broad anti-base alliance that has shaped Okinawa politics for nearly a decade is at risk of collapse.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would represent a <strong>seismic shift in Okinawa base politics</strong>. An LDP-backed governor supporting Henoko could accelerate the Futenma replacement facility timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment across the island.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Futenma 30 Years & Cost Sharing -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Bilateral &mdash; Apr 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Hits 30-Year Mark; HNS Cost-Sharing Agreement Up for Renegotiation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 US-Japan agreement to return MCAS Futenma passed with <strong>no concrete return date in sight</strong>. The DoD stated Futenma <strong>will not be returned until Japan finalizes selection of an alternative runway</strong>. Current Futenma runway is ~2,700m vs. two planned Henoko runways at ~1,800m each. Henoko construction expected to continue <strong>until at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The <strong>US-Japan Host Nation Support (HNS) agreement expires at end of FY2026</strong>. Renegotiations will address redistribution of Marines from Okinawa to Guam and Australia, enhanced capabilities at <strong>Kadena Air Base</strong>, and distributed force posture. Defense Minister <strong>Shinjiro Koizumi</strong> pledged during his January visit to <strong>reduce the U.S. military footprint</strong> on the island.
        </p>
      </div>
    </div>

    <!-- ===================== ENVIRONMENTAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Environmental &amp; Health</p>
    </div>

    <!-- EVENT 9: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Mar&ndash;Apr 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma Hits Record Levels &mdash; 56x Japan&rsquo;s Safety Standard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey found <strong>PFAS &ldquo;forever chemicals&rdquo; at dangerous levels at 31 of 44 sites</strong> near U.S. military installations. The highest contamination &mdash; <strong>2,800 parts per trillion</strong> at Yara Hijaga near Kadena &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. Elevated levels also detected near <strong>MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>USFJ denied prefecture access to bases for water sampling</strong> for a fifth time, citing insufficient evidence. An April survey confirmed elevated PFAS levels downstream of Camp Hansen. The prefecture plans to reapply citing an expert committee report indicating Futenma as the likely source. The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination is a growing flashpoint in US-Okinawa community relations and likely to become a central campaign theme in the September gubernatorial election. Service members and families living near affected bases should monitor water advisories. Unidentified foam spotted near bases in March has heightened public concern.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SEISMIC SECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Seismic Activity / Ryukyu Islands &mdash; May 9&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Earthquake Cluster Near Iriomote &amp; Miyakojima &mdash; Three Quakes in 24 Hours</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Three earthquakes struck the southwestern Ryukyu Islands in the past 24 hours: a <strong>M4.4</strong> in the Philippine Sea 69 km south of Miyakojima (May 9, 10:26 AM JST, depth 35 km), a <strong>M3.1</strong> in the East China Sea 10 km NE of Iriomote (May 10, 1:02 AM JST), and a <strong>M4.6</strong> 24 km north of Iriomote (May 10, 1:18 AM JST). No tsunami risk, casualties, or significant damage reported. The cluster is concentrated near the islands that will host the Nansei exercise in 7 days. Seismic activity is common in the region but is being monitored for any impact on exercise logistics.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 10: Economy, Markets & Yen -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Economy / Markets / Currency &mdash; May 7&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Spikes to 10-Week High on Intervention Chatter; BOJ Holds at 0.75%; Nikkei Falls on Iran Fears</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The yen <strong>spiked to a 10-week high on May 7</strong>, sparking intervention speculation before settling at <strong>&yen;156.7/USD</strong> by May 8. The BOJ held its policy rate at <strong>0.75%</strong> (highest since September 1995) at its April 28 meeting in a <strong>6&ndash;3 vote</strong>, citing Iran war uncertainty. The bank <strong>cut its GDP growth forecast to 0.5%</strong> (from 1.0%) and <strong>raised core inflation to 2.8%</strong> (from 1.9%). Next rate hike expected <strong>no earlier than July</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Nikkei 225 fell 0.29% to 62,651</strong> on May 8 as three U.S. Navy destroyers intercepted Iranian attacks in the Strait of Hormuz, reviving geopolitical risk concerns. Japan faces a <strong>Section 301 investigation</strong> from the USTR (initiated March 2026), and the <strong>15% U.S. tariff on most Japanese imports</strong> remains in effect under the 2025 trade framework. Japan has committed <strong>$550B in strategic U.S. investments</strong> (semiconductors, AI, critical minerals) to maintain favorable trade terms.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa economy:</strong> Ministry of Finance upgraded the regional assessment to <strong>&ldquo;recovering&rdquo;</strong>. Okinawa tourism is on track to exceed <strong>10 million visitors</strong> for the first time in FY2025, with revenue targeting <strong>&yen;1 trillion</strong>. Named <strong>#2 on Expedia&rsquo;s Destinations of the Year 2026</strong> (71% search increase). A new <strong>2% accommodation tax</strong> took effect in April, projected to generate &yen;7.8B annually. Shuri Castle main hall restoration due <strong>fall 2026</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen means U.S. service members&rsquo; dollar-denominated pay has <strong>increased purchasing power off-base</strong>. However, rising inflation (2.8%) is eroding this advantage. Energy costs remain elevated due to the Iran conflict and Strait of Hormuz disruptions. The new accommodation tax applies to off-base hotel stays.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Iran ceasefire in jeopardy &mdash; 31st MEU return indefinitely delayed.</strong> Today&rsquo;s Iranian drone strikes on Qatar, UAE, and Kuwait shatter the fragile ceasefire declared just five days ago. With Trump threatening &ldquo;much higher level&rdquo; bombing if Iran does not comply, the 2,500 Marines aboard USS Tripoli face an indefinite Middle East deployment, leaving Okinawa&rsquo;s rapid-response capacity diminished at a critical moment. The F-22 rotation at Kadena is a partial stopgap, but without the MEU, the region&rsquo;s amphibious capability remains compromised.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China probing as U.S. forces stretch thin.</strong> The May 8 Senkaku incursion (first since April 28), coordinated Sino-Russian naval transits (Apr 21&ndash;28), and PLA Southern Theater Command exercises near Luzon (Apr 24) suggest Beijing is exploiting the U.S. force drawdown for the Iran war. The Nansei exercise (May 17&ndash;22) and Kadena&rsquo;s F-22s are the response, but the capability gap is real.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, Okinawa faces a turning point.</strong> Governor Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is fracturing after losing all four seats in February. If LDP-backed Genta Koja wins in September, expect accelerated Henoko construction, eased HNS renegotiations, and reduced friction for U.S. force realignment. The May 15 reversion anniversary will sharpen the political debate.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran ceasefire collapse &amp; 31st MEU deployment extension &bull; PRC reaction to Nansei exercise (May 17&ndash;22) &bull; Senkaku incursion frequency &bull; F-22/F-15EX rotation timeline at Kadena &bull; BOJ July rate decision &bull; September 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation &bull; May 15 Okinawa reversion anniversary &bull; Yen intervention capacity &bull; PFAS water sampling access
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; Fortune &bull; Time &bull; CBS News &bull; Al Jazeera &bull; Stars and Stripes &bull; The Japan Times &bull; USNI News &bull; Military.com &bull; Air &amp; Space Forces Magazine &bull; DVIDSHUB &bull; South China Morning Post &bull; The Diplomat &bull; Newsweek &bull; Nippon.com &bull; AEI &bull; CNBC &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; MOFA Japan &bull; Trading Economics &bull; VolcanoDiscovery &bull; Times of Israel &bull; Expedia
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
