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
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 5, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Secretary Rubio Declares Operation Epic Fury &ldquo;Over&rdquo; &mdash; 31st MEU Return Anticipated</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        Secretary of State Marco Rubio announced today that Operation Epic Fury against Iran is officially &ldquo;over&rdquo; after achieving military objectives in 38 days. The U.S. has transitioned to &ldquo;Project Freedom,&rdquo; a defensive operation to reopen the Strait of Hormuz. The <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> deployed aboard USS Tripoli in mid-March is now expected to begin its return to Okinawa, potentially restoring the region&rsquo;s rapid-response capacity within weeks. However, the ceasefire remains fragile &mdash; Iran launched missiles at UAE shipping and targets for a second consecutive day, and Defense Secretary Hegseth warned further strikes remain possible.
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
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Deploy to Kadena Air Base &mdash; $1.8B Stealth Package from Alaska</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A total of <strong>12 F-22 Raptor stealth fighters</strong> arrived at <strong>Kadena Air Base</strong> on May 2&ndash;3, with six aircraft touching down each day. The jets deployed from <strong>Joint Base Elmendorf-Richardson, Alaska</strong>, representing approximately <strong>$1.8 billion in combat assets</strong> ($150M per airframe). The coordinated two-day arrival sequence indicates a planned operational deployment rather than a routine rotation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena &mdash; the <strong>largest U.S. Air Force installation in Asia</strong> &mdash; now hosts the most significant concentration of 5th-generation fighters in the Western Pacific. The deployment comes as the base transitions from retired F-15C/D Eagles to a mixed fighter force of F-22s and F-16s, dramatically enhancing air superiority capabilities across the First Island Chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Timing is critical: 12 stealth fighters arrive at Kadena just as Operation Epic Fury concludes and two weeks before Japan&rsquo;s Nansei Islands exercise. The deployment signals a rapid force reconstitution in the Indo-Pacific following CENTCOM drawdowns and serves as visible deterrence amid escalating Chinese and Russian naval activity around Okinawa. PRC intelligence will note the shift from aging F-15s to air-dominant F-22s.
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
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 12 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Exercise launches just days after the concentrated Russian-Chinese naval activity. The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. Watch for PRC reaction via diplomatic statements or retaliatory PLA naval activity.
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

    <!-- EVENT 5: Senkaku Incursions & Survey Vessel -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Maritime Security / East China Sea &mdash; Mar&ndash;Apr 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Chinese Coast Guard Chases Japanese Fishing Boat; Survey Vessel Spotted in Senkaku EEZ</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese coast guard vessels <strong>chased a Japanese fishing boat into disputed waters</strong> near the Senkaku Islands in March, marking a dangerous escalation in gray-zone tactics. Separately, a <strong>Chinese marine research vessel</strong> was spotted in April extending a wire-like object into the ocean within Japan&rsquo;s exclusive economic zone around the Senkakus &mdash; suspected of conducting an <strong>unauthorized survey</strong>. The Japan Coast Guard urged the vessel to cease operations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Chinese vessels were present in the contiguous zone around the Senkakus on <strong>357 of 365 days in 2025</strong> &mdash; a fourth consecutive annual record. Coast guard vessels have become <strong>larger, more heavily armed, and reinforced</strong>. The 11th Regional Coast Guard commander stated the situation is &ldquo;increasingly severe&rdquo; and &ldquo;unpredictable.&rdquo; Japan announced plans to counter China&rsquo;s armed coast guard fleet with enhanced maritime law enforcement capabilities.
        </p>
      </div>
    </div>

    <!-- EVENT 6: 12th MLR & SOFA Updates -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Development &amp; Community Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th MLR Expands Capabilities; SOFA Orientation Under Revision After Local Feedback</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;) continues rapid maturation. The <strong>12th Littoral Anti-Air Battalion</strong> unveiled a new dedicated facility at Camp Hansen (Mar 6), and the <strong>12th Littoral Combat Team</strong> completed its first overhead live-fire exercise at Camp Schwab. The regiment will integrate with JSDF in the May 17&ndash;20 Nansei exercise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Separately, U.S. military officials are revising the mandatory <strong>SOFA newcomer orientation</strong> following feedback from the <strong>Okinawa Community Partnership Forum</strong> (first meeting May 9). Changes address descriptions of incidents involving service members and updated content on <strong>Irei No Hi</strong> (June 23). The revision follows sexual assault cases involving U.S. service members and a viral video of an assault incident that led to a pause on solo military patrols in nightlife districts.
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

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 10: Economy & Yen -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Economy / Currency &mdash; May 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Under Pressure at &yen;156.5/USD &mdash; Japan Running Out of Intervention Options</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen steadied at <strong>&yen;156.5 per dollar</strong> after briefly strengthening to ~155.5 following a suspected government intervention. The Japan Times reports Japan can conduct <strong>only two more three-day intervention sessions before November</strong> under IMF guidelines to maintain freely-floating currency status. The wide US-Japan interest rate differential and Iran war energy costs continue pressuring the yen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ministry of Finance upgraded its economic assessment</strong> for the Okinawa region, citing strengthened personal consumption and tourism. GDP growth is projected at <strong>0.8% for 2026</strong> with BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. Shunto wage negotiations delivered a third straight year of ~5% wage hikes. Despite Chinese travel advisories, Okinawa tourism remains strong.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen means U.S. service members&rsquo; dollar-denominated pay has <strong>increased purchasing power off-base</strong>. However, rising inflation (2.5&ndash;3%) is eroding this advantage as local prices increase. Energy costs remain elevated due to the Iran conflict and Strait of Hormuz disruptions.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Epic Fury ends &mdash; Indo-Pacific force reconstitution begins.</strong> Rubio&rsquo;s declaration today that the Iran operation is &ldquo;over&rdquo; signals the 31st MEU and Kadena-deployed airmen may soon return to Okinawa, restoring the region&rsquo;s rapid-response capacity. The simultaneous arrival of 12 F-22 Raptors at Kadena (May 2&ndash;3) suggests the Pentagon is already pivoting combat power back to the Indo-Pacific.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Sino-Russian naval pressure is intensifying.</strong> The coordinated Russian-Chinese warship transits through Japan&rsquo;s southwestern approaches (Apr 21&ndash;28) &mdash; including China&rsquo;s unprecedented use of the Yokoate Waterway &mdash; represent the most concentrated foreign naval activity near Okinawa in recent memory. Japan&rsquo;s first-ever Nansei Islands exercise (May 17&ndash;22) with the 12th MLR is a direct response.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, Okinawa faces a turning point.</strong> Governor Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition is fracturing as the CRA hedges on base relocation. If LDP-backed Genta Koja wins in September, expect accelerated Henoko construction and reduced friction for U.S. force realignment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> 31st MEU return timeline from CENTCOM &bull; Iran ceasefire stability &amp; Hormuz reopening &bull; PRC reaction to Nansei exercise (May 17&ndash;22) &bull; F-22 deployment duration at Kadena &bull; September 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation &bull; Yen intervention capacity &bull; PFAS water sampling access
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; ABC News &bull; Time &bull; CBS News &bull; Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; Reuters &bull; USNI News &bull; Military.com &bull; South China Morning Post &bull; The Diplomat &bull; Newsweek &bull; Nippon.com &bull; Air &amp; Space Forces Magazine &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; IMF &bull; Ryukyu Shimpo &bull; Meyka Defense
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
