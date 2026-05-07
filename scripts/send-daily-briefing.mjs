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
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 7, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Trump Pauses &ldquo;Project Freedom&rdquo; as Iran Reviews U.S. Peace Proposal &mdash; Strait of Hormuz Reopening in Sight</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        President Trump announced a temporary pause in the U.S. military&rsquo;s &ldquo;Project Freedom&rdquo; operation to reopen the Strait of Hormuz, citing &ldquo;great progress&rdquo; in negotiations. Iran is now reviewing a U.S. peace proposal aimed at ending hostilities and reopening the critical shipping route, closed since February 28. Pakistan&rsquo;s mediation efforts are reportedly nearing a breakthrough. Iran&rsquo;s Revolutionary Guard announced safe passage would be provided through the strait, though details remain unclear. The <strong>31st MEU (2,500 Marines from Camp Hansen)</strong> deployed aboard USS Tripoli remains in the CENTCOM AOR but is expected to begin its return to Okinawa as the ceasefire solidifies. Trump warned that if Iran does not agree, &ldquo;the bombing starts&hellip; at a much higher level and intensity than before.&rdquo;
      </p>
    </div>

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: F-22 Dual-Squadron Deployment to Kadena -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 4&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Two F-22 Raptor Squadrons Deploy to Kadena &mdash; Largest 5th-Gen Concentration in Western Pacific</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Stars and Stripes confirmed (May 6) that <strong>two squadrons of F-22 Raptors</strong> have arrived at <strong>Kadena Air Base</strong> for rotational duty with the 18th Wing. The <strong>90th Expeditionary Fighter Squadron</strong> from JB Elmendorf-Richardson, Alaska deployed 12 aircraft (May 4&ndash;5), while the <strong>27th Expeditionary Fighter Squadron</strong> from JB Langley-Eustis, Virginia deployed additional jets &mdash; placing the total force at an estimated <strong>12&ndash;24 F-22s</strong> on Okinawa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena &mdash; the <strong>closest U.S. Air Force installation to Taiwan (~450 miles)</strong> &mdash; now hosts the most significant concentration of 5th-generation air superiority fighters in the Indo-Pacific. The deployment fills a capability gap as the planned <strong>36 F-15EX Eagle II</strong> replacements remain delayed due to the 2025 Boeing St. Louis factory strike. No updated delivery timeline has been provided.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Dual-squadron F-22 deployment is exceptional &mdash; drawing from both Alaska and Virginia signals urgency beyond routine rotation. The timing coincides with Operation Epic Fury&rsquo;s conclusion and precedes the Nansei Islands exercise (May 17). This reconstitutes Indo-Pacific air dominance as CENTCOM winds down. PRC will note the transition from aging F-15s to the world&rsquo;s premier air superiority fighter 450 miles from Taiwan.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Japan-Indonesia Defense Pact -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Defense Diplomacy / Indo-Pacific &mdash; May 4&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan &amp; Indonesia Sign Landmark Defense Pact &mdash; Koizumi Unlocks Arms Exports to Archipelagic Allies</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense Minister <strong>Shinjiro Koizumi</strong> signed a <strong>Defense Cooperation Arrangement (DCA)</strong> with Indonesian counterpart <strong>Sjafrie Sjamsoeddin</strong> in Jakarta on May 4. The landmark pact covers joint exercises, maritime cooperation, humanitarian assistance, and an <strong>&ldquo;Integrated Defence Dialogue Mechanism&rdquo;</strong> for expanded defense equipment and technology collaboration. Both ministers agreed to enhance <strong>classified military information protection</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The signing follows Tokyo&rsquo;s historic easing of decades-old arms export rules, allowing Japanese firms to <strong>sell lethal weapons to defense agreement partners</strong> for the first time. Indonesia can now acquire advanced Japanese naval and surveillance technology. Koizumi highlighted the <strong>shared identity as archipelagic maritime nations</strong> and positioned maritime security as the central pillar.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is rapidly building a network of defense partnerships that complements U.S. alliance architecture in the Indo-Pacific. Indonesia controls the Malacca and Lombok Straits &mdash; critical chokepoints for PLA Navy blue-water operations. Combined with Japan&rsquo;s Okinawa-based force posture and the upcoming Nansei exercise, this pact strengthens the First Island Chain defense framework.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: China 40-Day Airspace Reservation Ends -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">PRC Military Activity / East China Sea &mdash; Mar 27&ndash;May 6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&rsquo;s Unprecedented 40-Day East China Sea Airspace Reservation Concludes &mdash; Sustained Readiness Posture</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s <strong>40-day airspace reservation</strong> over the Yellow Sea and East China Sea &mdash; active since March 27 &mdash; concluded on <strong>May 6</strong>. The PLA issued alerts typically used for military exercises but <strong>announced no specific exercise</strong>. Stanford&rsquo;s SeaLight Project director Ray Powell called the duration &ldquo;extraordinary,&rdquo; stating the absence of a declared exercise suggests <strong>&ldquo;not a discrete exercise, but a sustained operational readiness posture.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Concurrently, the PLA Navy deployed a <strong>surface task group</strong> (Type 055 destroyer, Type 052D destroyer, Type 054A frigate, Type 903A replenishment vessel) east of the Luzon Strait, and the <strong>carrier Liaoning headed south</strong> &mdash; both in response to U.S.-Japan-Philippine Balikatan 2026 exercises. Russian and Chinese warships also conducted coordinated transits through Japan&rsquo;s southwestern approaches in late April, including China&rsquo;s <strong>first use of the Yokoate Waterway</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A 40-day undeclared airspace hold signals the PLA may be rehearsing sustained contested-airspace operations or establishing a &ldquo;new normal&rdquo; for East China Sea access. Combined with the Yokoate Waterway transit and Liaoning&rsquo;s deployment, the PLA is expanding its operational envelope around Okinawa from all domains &mdash; air, sea, and undersea. This activity coincides with the F-22 deployment and directly precedes the Nansei exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Nansei Islands Exercise T-10 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T-10 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 10 Days &mdash; 12th MLR to Establish Bilateral Command Center on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the Nansei (Ryukyu) island chain from <strong>May 17&ndash;22</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan). U.S. forces will not operate on Ishigaki or Yonaguni.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. Exercise launches just one day after China&rsquo;s 40-day airspace hold ended and amid heightened Sino-Russian naval activity. Watch for PRC reaction via diplomatic protests or retaliatory PLA naval movements in the Miyako Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Yonaguni EW & Air Defense -->
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
          The JMOD briefed Yonaguni residents on plans to deploy <strong>Type-03 surface-to-air missiles</strong> to the island, with full deployment targeted by 2030. These deployments transform Yonaguni from a monitoring outpost into a <strong>multi-domain defense node</strong> &mdash; electronic warfare, anti-ship missiles, UAV surveillance, and air defense on a single island 70 miles from Taiwan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            EW capabilities on Yonaguni could disrupt PLA command-and-control in a Taiwan scenario. Combined with the Nansei exercise&rsquo;s ScanEagle UAV deployment and Naha&rsquo;s hardened aircraft shelter, Okinawa&rsquo;s southwestern islands are being transformed into a comprehensive multi-domain defensive barrier along the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: Senkaku & Camp Foster Return -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Maritime Security &amp; Base Realignment &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Senkaku Gray-Zone Pressure Continues; Camp Foster Kishaba Housing Return Set for Fall</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese coast guard vessels maintain near-constant presence in the Senkaku contiguous zone (<strong>357 of 365 days in 2025</strong>, a fourth consecutive record). All four CCG vessels now carry <strong>76mm deck-mounted autocannons</strong>. Japan Coast Guard requested a record <strong>&yen;317.7B ($2.15B) FY2026 budget</strong> (+14%) including four MQ-9B SeaGuardian drones and two large patrol ships. Japan is actively warning fishermen away from the area amid escalating gray-zone incidents.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On the basing front, the Japan-U.S. Joint Committee finalized return of <strong>~12 acres of Kishaba Housing area</strong> (Camp Foster) by late fall. The return will enable widening of <strong>Prefectural Road 81 from 2 to 4 lanes</strong> to alleviate chronic traffic congestion. Thirty-two housing units will be demolished; 200 replacement units are under construction in northern Kishaba. Defense Minister Koizumi called for &ldquo;earliest possible return of the land.&rdquo;
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
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. However, his <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February 8 lower house election to PM Sanae Takaichi&rsquo;s LDP. The Centrist Reform Alliance (CRA) remains undecided on its position.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The broad anti-base alliance that has shaped Okinawa politics for nearly a decade is at risk of collapse.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would represent a seismic shift &mdash; an LDP-backed governor supporting Henoko could accelerate the Futenma replacement timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Futenma 30 Years & Japan Security Posture -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment &amp; National Security &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Hits 30-Year Mark; Japan Faces &ldquo;Most Severe Security Environment Since WWII&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 US-Japan agreement to return MCAS Futenma passed with <strong>no concrete return date</strong>. DoD requires Japan to finalize an alternative runway before vacating Futenma. Henoko construction continues <strong>until at least 2033</strong>. The <strong>HNS cost-sharing agreement expires end of FY2026</strong>, with renegotiations addressing Marine redistribution and enhanced capabilities at Kadena.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          At a May 6 Hudson Institute event, senior Japanese officials stated Japan faces <strong>&ldquo;the most severe and complex security environment since World War II.&rdquo;</strong> Japan&rsquo;s intelligence overhaul continues with a push to establish a <strong>national intelligence agency</strong> and anti-espionage legislation. Cyber threats are escalating, with npm supply chain attacks, AI-exploiting malware, and DNS hijacking campaigns now targeting Japanese organizations.
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
          Okinawa Prefecture&rsquo;s annual groundwater survey found <strong>PFAS &ldquo;forever chemicals&rdquo; at dangerous levels at 31 of 44 sites</strong> near U.S. military installations. The highest contamination &mdash; <strong>2,800 ppt at Yara Hijaga near Kadena</strong> &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. Elevated levels also detected near <strong>MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster</strong>. An April survey confirmed elevated PFAS levels downstream of Camp Hansen in Kin Town.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>USFJ denied prefecture access to bases for water sampling</strong> for a fifth time, citing insufficient evidence that installations are contamination sources. The prefecture plans to reapply citing an expert committee report indicating Futenma as the likely source. The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination is a growing flashpoint in US-Okinawa community relations and likely to become a central campaign theme in the September gubernatorial election. Service members and families living near affected bases should monitor water advisories. The American Cancer Society has linked PFAS exposure to increased risk of tumors in the liver, breasts, testicles, and pancreas.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 10: Economy, Yen, & Okinawa Development -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Economy / Currency / Development &mdash; May 7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Under Pressure at &yen;156.5/USD; Okinawa Development Funds See First Rise in 10 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The yen steadied at <strong>&yen;156.5 per dollar</strong> after a suspected government intervention. Japan can conduct <strong>only two more intervention sessions before November</strong> under IMF guidelines. The wide US-Japan rate differential and Iran-conflict energy costs continue pressuring the currency. GDP growth projected at <strong>0.8% for 2026</strong>; BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. Shunto wage negotiations delivered a third straight year of ~5% wage hikes.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Finance Ministry <strong>upgraded its economic assessment for the Okinawa region</strong>, citing strengthened personal consumption and tourism. The LDP approved <strong>&yen;264.7B in Okinawa development funds for FY2026</strong> (+&yen;500M), the <strong>first increase in 10 years</strong>, including &yen;73.6B in discretionary grants. The Strait of Hormuz closure since February continues to elevate regional energy costs.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen gives U.S. service members <strong>increased off-base purchasing power</strong>, but rising inflation (2.5&ndash;3%) is eroding this advantage. If the Hormuz peace deal materializes, expect energy costs to ease in the coming weeks.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Hormuz peace deal is the pivot point.</strong> Trump&rsquo;s pause of Project Freedom and Iran&rsquo;s review of the U.S. proposal could reopen the strait for the first time since February, easing energy costs and setting conditions for the 31st MEU&rsquo;s return to Okinawa. But the ceasefire remains fragile &mdash; Trump&rsquo;s threat of escalated bombing if Iran rejects the deal leaves the outcome uncertain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Indo-Pacific force reconstitution is underway.</strong> Two F-22 squadrons at Kadena (unprecedented dual-origin deployment), the Japan-Indonesia defense pact, and the Nansei exercise (T-10 days) signal a rapid Pentagon pivot back to the Indo-Pacific. China&rsquo;s 40-day airspace hold just ended &mdash; expect PLA activity to test the new posture.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s political landscape is shifting.</strong> Governor Tamaki&rsquo;s coalition is fracturing; LDP-backed Koja could reshape U.S. basing for a generation. The September 13 election is 129 days away.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran peace proposal response &bull; Hormuz reopening timeline &bull; 31st MEU return orders &bull; PRC reaction to Nansei exercise (May 17&ndash;22) &bull; F-22 deployment duration at Kadena &bull; September 13 gubernatorial election &bull; HNS cost-sharing renegotiation &bull; PFAS community tensions &bull; Yen intervention capacity
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; Time &bull; Al Jazeera &bull; Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; Air &amp; Space Forces Magazine &bull; The Diplomat &bull; National Defense Magazine &bull; The Defense Post &bull; Military.com &bull; Modern Diplomacy &bull; NPR &bull; Washington Times &bull; Taipei Times &bull; AEI &bull; Japan Ministry of Defense &bull; Japan Ministry of Finance &bull; CENTCOM &bull; Ryukyu Shimpo &bull; Stanford SeaLight Project
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
