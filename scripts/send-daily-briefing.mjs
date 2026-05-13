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
      <p style="color: #dc2626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">&#9888; Breaking &mdash; May 13, 2026</p>
      <p style="color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 8px;">Trump Arrives in Beijing for Xi Summit &mdash; Taiwan, Iran Ceasefire &amp; Trade on Agenda</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        President Trump landed in Beijing today for a two-day state visit (May 13&ndash;15) with Chinese President Xi Jinping &mdash; his first visit to China since 2017. The summit will address <strong>Taiwan, trade, AI governance, and the fragile Iran ceasefire</strong>. Trump is accompanied by Apple CEO Tim Cook, Tesla CEO Elon Musk, and Nvidia CEO Jensen Huang. The visit comes as Iran ceasefire talks are &ldquo;on life support&rdquo; after Trump rejected Tehran&rsquo;s latest proposal, and amid intensifying Chinese naval activity around Okinawa&rsquo;s southwestern approaches. <strong>Any Taiwan-related agreements or concessions could directly impact U.S. force posture across Okinawa.</strong>
      </p>
    </div>

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: Kadena Elephant Walk -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Elephant Walk &mdash; 53+ Aircraft Show of Force Less Than 500 Miles from Shanghai</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena Air Base conducted its largest &ldquo;elephant walk&rdquo; show of force on May 6, displaying <strong>53+ aircraft and two U.S. Army Patriot missile batteries</strong> on the runway. The formation included <strong>24 F-35A Lightning II stealth fighters, eight F-15E Strike Eagles, six HH-60W Jolly Green II helicopters, two MQ-9 Reaper drones, two MC-130J Commando II transports, six KC-135 Stratotankers, one RC-135 Rivet Joint, and one E-3 Sentry</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 18th Wing commander stated the display sends &ldquo;a message you can&rsquo;t ignore&rdquo; demonstrating combat readiness and allied unity. The show of force coincides with the recent arrival of <strong>12 F-22 Raptors</strong> (May 2&ndash;3) from Joint Base Elmendorf-Richardson, Alaska &mdash; representing <strong>$1.8 billion in stealth combat assets</strong>. Kadena now hosts the most significant concentration of 5th-generation fighters in the Western Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The largest Kadena elephant walk in recent history, staged less than 500 miles from Shanghai, is a direct signal to Beijing days before the Trump-Xi summit. The combination of 24 F-35As and 12 F-22s at one base represents an unprecedented 5th-gen concentration. PRC satellite and intelligence assets will have cataloged every airframe. The delayed F-15EX permanent fleet (stalled by Boeing strikes) means rotational fighters remain the backbone of Kadena&rsquo;s air superiority mission.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: OHA Increase for Service Members -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Personnel / Quality of Life &mdash; May 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Overseas Housing Allowance Increase Effective May 16 &mdash; $400&ndash;$500/Month Boost for Okinawa Personnel</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beginning <strong>May 16</strong>, active-duty service members across all branches living off-base on Okinawa will receive a <strong>$400&ndash;$500/month increase</strong> in their Overseas Housing Allowance (OHA), announced by <strong>Brig. Gen. John Gallemore</strong>, 18th Wing commander. Current OHA rates (as of May 1): E-1&ndash;E-4 w/dependents at <strong>$1,403/month</strong>, E-5/O-1&ndash;O-2 at <strong>$1,439</strong>, E-6&ndash;E-8/O-3 at <strong>$1,655</strong>, plus <strong>$662/month utility allowance</strong> with dependents.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The increase addresses a growing gap between OHA rates and local market rents. Landlords have been <strong>price-matching to Japan&rsquo;s civilian housing allowance</strong>, which exceeds current U.S. military OHA rates, pricing service members out of available housing. The adjustment is expected to ease a persistent quality-of-life concern for the roughly 26,000 U.S. military personnel and families stationed on Okinawa.
        </p>
      </div>
    </div>

    <!-- EVENT 3: Nansei Islands Exercise T-4 Days -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; T&minus;4 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF First-Ever Nansei Islands Exercise in 4 Days &mdash; 12th MLR to Establish Bilateral Command Center</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all five regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong> on Miyakojima, Ishigaki, and Yonaguni.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Exercise launches during Trump&rsquo;s Beijing visit &mdash; a powerful backdrop for Taiwan discussions. The bilateral command center on Miyakojima is a significant first for US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities. Watch for PRC diplomatic statements or retaliatory naval activity in response.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Senkaku Incursion May 8 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Maritime Security / East China Sea &mdash; May 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Four Chinese Coast Guard Vessels Intrude Senkaku Waters &mdash; First Incursion Since April 28</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Four Chinese coast guard vessels <strong>entered Japanese territorial waters</strong> off the Senkaku Islands on May 8, entering near Uotsuri Island between <strong>4:15&ndash;4:35 p.m.</strong> and departing around 6 p.m. This was the first incursion since April 28. All four vessels are now equipped with <strong>deck-mounted 76mm autocannons</strong>, a significant armament escalation since mid-2024.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese vessels were present in the Senkaku contiguous zone on <strong>357 of 365 days in 2025</strong> &mdash; a fourth consecutive annual record. Japan&rsquo;s 11th Regional Coast Guard commander described the situation as &ldquo;increasingly severe&rdquo; and &ldquo;unpredictable.&rdquo; Japan has announced plans to <strong>counter China&rsquo;s armed coast guard fleet</strong> with enhanced maritime law enforcement capabilities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The timing of Senkaku incursions just days before the Trump-Xi summit suggests Beijing is maintaining pressure while signaling that territorial claims are non-negotiable. The armed escalation (76mm guns on all four vessels) narrows the gap between coast guard and naval capabilities, complicating Japan&rsquo;s gray-zone response options.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Chinese Navy Type 055s in East China Sea -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / East China Sea &mdash; Early May</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PLA Navy Type 055 Destroyers Transit Tsushima Strait Into East China Sea</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three PLA Navy warships &mdash; <strong>two Type 055 guided-missile destroyers and one Type 052D destroyer</strong> &mdash; were spotted transiting the <strong>Tsushima Strait</strong> en route to the East China Sea in early May. JMSDF destroyer <strong>JS Ootaka</strong> conducted alert surveillance and intelligence gathering on the Chinese formation. This follows the late-April coordinated Sino-Russian naval transits through Japan&rsquo;s southwestern approaches, including China&rsquo;s unprecedented use of the Yokoate Waterway.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The Type 055 is China&rsquo;s most capable surface combatant, displacing <strong>13,000 tons with 112 vertical launch cells</strong>. Two of these warships operating near Okinawa represents a significant increase in PLA Navy firepower projection in the region. Japan&rsquo;s EW unit standup on Yonaguni and the <strong>$96M hardened aircraft shelter</strong> under construction at Naha Air Base are direct responses to this growing naval threat.
        </p>
      </div>
    </div>

    <!-- EVENT 6: Futenma Flight Line Fair & Iran Ceasefire -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Community Relations &amp; Global Context &mdash; May 9&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Flight Line Fair Draws 8,150; Iran Ceasefire &ldquo;On Life Support&rdquo; Impacts Okinawa Readiness</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The annual <strong>MCAS Futenma Flight Line Fair</strong> (May 9&ndash;11) drew <strong>8,150 fairgoers</strong> despite rainy weather, with <strong>30+ aircraft and ground systems</strong> from the Marine Corps, Navy, Air Force, and JSDF on static display. The event is one of Okinawa&rsquo;s largest US-Japan community engagement opportunities. Meanwhile, the 12th MLR continues rapid maturation with the <strong>12th Littoral Anti-Air Battalion</strong> opening a new facility at Camp Hansen and the <strong>12th Littoral Combat Team</strong> completing its first overhead live-fire exercise at Camp Schwab.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Globally, the <strong>Iran ceasefire remains fragile</strong>. Trump declared it &ldquo;on massive life support&rdquo; on May 11 after rejecting Tehran&rsquo;s proposal. Iran demands sanctions relief and asset unfreezing; the U.S. demands nuclear enrichment halt. VP Vance says &ldquo;progress is being made.&rdquo; The 31st MEU (2,500 Marines from Camp Hansen) deployed in mid-March aboard USS Tripoli remains in the CENTCOM theater. <strong>Ceasefire collapse would delay the 31st MEU&rsquo;s return to Okinawa</strong> and sustain elevated energy costs across the Pacific.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 7: Trump-Xi Summit & Taiwan -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Diplomacy / Great Power Competition &mdash; May 13&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Beijing Summit &mdash; Taiwan, AI, and Iran Negotiations Could Reshape Okinawa&rsquo;s Security Posture</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump arrived in Beijing today for a <strong>state visit (May 13&ndash;15)</strong>, his first to China since 2017. The summit was postponed from early April due to the Iran war. Bilateral meetings with Xi are scheduled for Thursday, followed by a state banquet and tour of the Temple of Heaven. Key agenda items: <strong>trade negotiations, Taiwan security, AI governance, and Iran ceasefire mediation</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          CSIS analysis suggests <strong>China will have the upper hand</strong> given U.S. entanglement in Iran and Trump&rsquo;s desire for a trade deal. Any concessions on Taiwan &mdash; even rhetorical &mdash; could embolden PRC military activity around the Nansei chain. Finance Minister Katayama met Treasury Secretary Bessent on May 12 to coordinate on currency policy ahead of the summit, with the yen under pressure at &yen;157.8/USD.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The summit occurs as Kadena stages its largest-ever elephant walk, the Nansei exercise begins in 4 days, and Chinese warships operate in the East China Sea. Any Taiwan-related agreements could directly impact the 12th MLR&rsquo;s mission, Kadena force posture, and Japan&rsquo;s southwestern island defense buildup. Watch the joint communiqu&eacute; language on Taiwan for shifts from the traditional &ldquo;One China&rdquo; formulation.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 8: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Sep 13 Election</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki&rsquo;s Third-Term Bid &mdash; Anti-Base &ldquo;All Okinawa&rdquo; Coalition Fracturing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. His <strong>&ldquo;All Okinawa&rdquo; coalition is fracturing</strong> after losing all four Okinawa single-seat constituencies in the February 8 lower house election to PM Sanae Takaichi&rsquo;s LDP. The Centrist Reform Alliance (CRA) remains undecided on its Henoko position.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          His likely opponent, <strong>Genta Koja</strong> (42), former deputy mayor of Naha, runs as a de facto LDP candidate <strong>supporting the Henoko relocation</strong>. A Tamaki loss would be a seismic shift in Okinawa base politics &mdash; an LDP-backed governor could accelerate Henoko construction, ease HNS renegotiations, and reduce friction for U.S. force realignment. The <strong>HNS cost-sharing agreement expires end of FY2026</strong>.
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
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Ongoing Investigation</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma &mdash; 56x Japan&rsquo;s Safety Standard; Independent Investigation Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An independent investigation into <strong>toxic PFAS levels across six Okinawa municipalities</strong> is underway. Okinawa Prefecture&rsquo;s groundwater survey found PFAS at <strong>31 of 44 sites</strong> near U.S. military installations. Peak contamination: <strong>2,800 ppt at Yara Hijaga near Kadena</strong> &mdash; <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong>. Elevated levels detected near MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>USFJ has denied prefecture access to bases for water sampling five times</strong>, citing insufficient evidence. The prefecture plans to reapply citing an expert committee report identifying Futenma as the likely source. PFAS contamination is expected to be a <strong>central campaign theme</strong> in the September gubernatorial election. Service members and families should monitor water advisories for areas near affected installations.
        </p>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 10: Economy, Yen & Markets -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Economy / Currency / Markets &mdash; May 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Weakens to &yen;157.8/USD as Trump-Xi Summit Drives Uncertainty; Nikkei at 63,272</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The yen weakened to <strong>&yen;157.8 per dollar</strong> on May 13, extending losses for a second session as the dollar strengthened on Iran ceasefire uncertainty. Finance Minister <strong>Katayama</strong> met Treasury Secretary <strong>Bessent</strong> on May 12 to coordinate currency policy. Japan&rsquo;s intervention capacity is limited &mdash; only <strong>two more three-day intervention sessions before November</strong> under IMF guidelines. The <strong>Nikkei 225 closed at 63,272</strong>, up 0.84%, driven by strong corporate earnings and AI-sector demand.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan GDP growth projected at <strong>0.8% for 2026</strong> with BOJ CPI inflation at <strong>2.5&ndash;3.0%</strong>. PM Takaichi&rsquo;s administration plans to <strong>zero the consumption tax on food for two years</strong> to combat inflation. Shunto wage negotiations delivered a third straight year of ~5% wage hikes. The Okinawa regional economy was upgraded by the Ministry of Finance, citing strengthened tourism and personal consumption.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Impact on personnel:</strong> The weak yen gives dollar-denominated pay <strong>increased off-base purchasing power</strong>, but rising inflation (2.5&ndash;3%) erodes the advantage. The <strong>OHA increase effective May 16</strong> (+$400&ndash;$500/month) will provide immediate relief for housing costs. Energy costs remain elevated due to Iran conflict and Strait of Hormuz disruptions.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Trump-Xi summit is the inflection point.</strong> President Trump landed in Beijing today for two days of talks on Taiwan, trade, and Iran. Any concessions on Taiwan &mdash; even rhetorical &mdash; could reshape Okinawa&rsquo;s security posture, from the 12th MLR&rsquo;s mission to Kadena&rsquo;s force composition. CSIS assesses China holds the upper hand given U.S. entanglement in Iran.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Kadena is at peak combat power.</strong> The May 6 elephant walk (53+ aircraft) and 12 F-22 Raptors represent the most significant concentration of 5th-gen fighters at Kadena in the base&rsquo;s history. The permanent F-15EX fleet remains delayed by Boeing supply chain issues. This firepower display precedes both the Beijing summit and the Nansei exercise (May 17&ndash;22).
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Iran ceasefire collapse would directly impact Okinawa.</strong> The 31st MEU remains deployed in the CENTCOM theater. If ceasefire talks fail, expect delayed return, sustained energy cost pressure, and continued strain on Okinawa&rsquo;s rapid-response capacity in the Indo-Pacific.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi joint communiqu&eacute; (May 14&ndash;15) &bull; Nansei Islands exercise (May 17&ndash;22) &bull; PRC reaction to bilateral exercise &bull; Iran ceasefire negotiations &bull; 31st MEU return timeline &bull; OHA increase impact (May 16) &bull; F-15EX delivery schedule update &bull; Senkaku incursion frequency &bull; September 13 gubernatorial election &bull; PFAS investigation results
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; NBC News &bull; NPR &bull; CBS News &bull; Al Jazeera &bull; Bloomberg &bull; CNBC &bull; Stars and Stripes &bull; The Japan Times &bull; Reuters &bull; USNI News &bull; Military.com &bull; South China Morning Post &bull; The Diplomat &bull; Newsweek &bull; Air &amp; Space Forces Magazine &bull; CSIS &bull; CFR &bull; Brookings &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; Trading Economics &bull; Ryukyu Shimpo &bull; Meyka Defense
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
