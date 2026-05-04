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

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF Announces First-Ever Exercise Focused on Islands Near Taiwan &mdash; 12th MLR to Participate</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Marks a major escalation in Japan&rsquo;s southwestern defense posture. The exercise signals deepening US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities, but the bilateral command center on Miyakojima is a significant first. Watch for PRC reaction via diplomatic statements or PLA naval activity in the East China Sea.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Chinese Navy Okinawa Transit -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Naval Activity / East China Sea &mdash; Apr 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PLA Navy Sails Through Yonaguni-Iriomote Waterway &mdash; Tit-for-Tat After Japan Taiwan Strait Transit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PLA Navy&rsquo;s <strong>Vessel Formation 133</strong>, deployed by the <strong>Eastern Theater Command</strong>, sailed through the <strong>Yonaguni-Iriomote Waterway</strong> on April 22 while returning from Western Pacific training operations. The formation included at least one destroyer. China condemned as a &ldquo;deliberate provocation&rdquo; the <strong>JMSDF destroyer Ikazuchi&rsquo;s transit of the Taiwan Strait on April 17</strong> &mdash; the second such Japanese passage in 10 months.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Yonaguni Island</strong>, just <strong>110 km from Taiwan&rsquo;s eastern coast</strong>, has become a focal point in regional security. In September 2024, China&rsquo;s aircraft carrier <strong>Liaoning</strong> transited the same waterway for the first time, prompting strong protests from Tokyo. Analysts describe the pattern as an escalating cycle of naval signaling between Beijing and Tokyo.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The tit-for-tat naval transits signal a dangerous escalation in the Japan-China security dynamic. The Eastern Theater Command&rsquo;s involvement &mdash; the same command responsible for Taiwan contingency planning &mdash; underscores the strategic messaging. This pattern directly affects threat assessments for U.S. forces on Okinawa and validates Japan&rsquo;s accelerated military buildup across the Nansei chain. Expect further PRC naval activity in response to the upcoming May 17&ndash;22 exercise.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Yonaguni EW Deployment -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Southwestern Islands &mdash; FY2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Deploying Electronic Warfare Unit &amp; Air Defense to Yonaguni &mdash; 110 km from Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is standing up a new <strong>JGSDF electronic warfare (EW) unit</strong> on <strong>Yonaguni Island</strong> in FY2026, equipped with systems designed to <strong>jam hostile radar and communications</strong>. Simultaneously, the <strong>JASDF is establishing a surveillance squadron</strong> on Okinawa. The JMOD briefed Yonaguni residents on plans to deploy <strong>Type-03 Ch&umacr;-SAM surface-to-air missiles</strong> to the island, with full deployment targeted by 2030.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is also constructing an <strong>air defense shelter in Okinawa</strong> specifically designed to counter Chinese satellite surveillance capabilities. These deployments form part of Japan&rsquo;s comprehensive reinforcement of the First Island Chain, transforming Yonaguni from a monitoring outpost into a <strong>multi-domain defense node</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The EW unit represents a qualitative leap in Japan&rsquo;s southwestern island defense. Electronic warfare capabilities on Yonaguni could disrupt PLA command-and-control in a Taiwan scenario. Combined with the upcoming Nansei exercise&rsquo;s ScanEagle UAV deployment to the same island, Yonaguni is rapidly becoming a critical node in the US-Japan deterrence architecture. Beijing will view these deployments as directly threatening its Taiwan reunification options.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Operation Epic Fury - Kadena & 31st MEU -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Operations / CENTCOM &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Airmen &amp; 31st MEU Deployed for Operation Epic Fury Against Iran</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>18th Wing personnel from Kadena Air Base</strong> are deployed &ldquo;in harm&rsquo;s way&rdquo; supporting U.S. Central Command operations against Iran, the wing commander confirmed in an April AFN interview. The Air Force has reported <strong>36 wounded in action and 6 deaths</strong> across the operation as of mid-April.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In mid-March, <strong>2,500 members of the 31st Marine Expeditionary Unit</strong> (Camp Hansen, Okinawa) departed aboard the <strong>USS Tripoli</strong> from Sasebo for the Middle East to support <strong>Operation Epic Fury</strong>, which began Feb 28 and was paused Apr 9 during a two-week ceasefire. CENTCOM listed 26 aircraft types in use, from B-1 Lancers to LUCAS one-way attack drones.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous deployment of Okinawa-based air and ground forces to the Middle East raises force readiness questions for the Indo-Pacific theater. With the 31st MEU &mdash; the region&rsquo;s primary rapid-response force &mdash; in CENTCOM and Kadena airmen forward-deployed, Okinawa&rsquo;s immediate crisis response capacity is temporarily reduced during a period of heightened China-Japan tensions.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Senkaku Incursions -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Maritime Security / East China Sea &mdash; Apr 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Chinese Coast Guard Ships Enter Senkaku Territorial Waters &mdash; Record Pace Continues</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Four armed Haijing-class coast guard ships</strong> entered Japanese territorial waters near <strong>Minamikojima</strong> (Senkaku Islands, Okinawa Prefecture) on April 27, remaining approximately two hours before withdrawing. The Japan Coast Guard reports that Chinese vessels were present in the contiguous zone around the Senkakus on <strong>357 of 365 days in 2025</strong> &mdash; a fourth consecutive annual record.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Chinese coast guard vessels have become <strong>larger, more heavily armed, and reinforced</strong> throughout 2025&ndash;2026. Japan announced plans to counter China&rsquo;s armed coast guard fleet with enhanced maritime law enforcement capabilities. PM Takaichi&rsquo;s statement that military force in a Taiwan conflict could constitute a &ldquo;survival-threatening situation&rdquo; &mdash; providing legal grounds for Japanese intervention &mdash; has further inflamed Beijing.
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

    <!-- EVENT 5: Governor Tamaki & Election -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Apr 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base &ldquo;All Okinawa&rdquo; Coalition in Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. However, his <strong>&ldquo;All Okinawa&rdquo; coalition is reeling</strong> after losing <strong>all four Okinawa single-seat constituencies</strong> in the February 8 lower house election to PM Sanae Takaichi&rsquo;s LDP.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>. The Japan Times reports Tamaki faces &ldquo;wavering support&rdquo; as the political landscape shifts following the February election rout. The broad anti-base alliance that has shaped Okinawa politics for nearly a decade is at risk of collapse.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the most consequential Okinawa election for U.S. basing in a decade. A Tamaki loss would represent a <strong>seismic shift in Okinawa base politics</strong>. An LDP-backed governor supporting Henoko could accelerate the Futenma replacement facility timeline, ease HNS renegotiations, and reduce political friction for U.S. force realignment across the island.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: Futenma 30 Years & Cost Sharing -->
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

    <!-- EVENT 7: PFAS -->
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
          <strong>USFJ denied prefecture access to bases for water sampling</strong>, citing insufficient evidence. The prefecture plans to reapply for access, citing an expert committee report indicating Futenma as the likely source. The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination is a growing flashpoint in US-Okinawa community relations and likely to become a central campaign theme in the September gubernatorial election. Service members and families living near affected bases should monitor water advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 8: Economy -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">LOW</span>
          <span style="color: #666; font-size: 11px;">Economy / Regional &mdash; Q1&ndash;Q2 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan MOF Upgrades Okinawa Economic Outlook &mdash; Tourism &amp; Consumption Strengthen</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ministry of Finance upgraded its economic assessment</strong> for the Okinawa region, citing strengthened <strong>personal consumption and tourism</strong>. Strong vehicle sales and rising domestic and foreign tourist arrivals drove the upgrade. Despite Chinese government advisories discouraging group travel to Japan, hotel industry officials reported <strong>no significant impact</strong> on Okinawa&rsquo;s tourism sector.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Broader Japan economic context: GDP growth projected at <strong>0.8% for 2026</strong>. The Bank of Japan projects CPI inflation at <strong>2.5&ndash;3.0%</strong> for FY2026. <strong>Shunto wage negotiations</strong> delivered a third straight year of ~5% wage hikes, supporting domestic consumption. Private consumption expected to benefit from a <strong>gradual rise in real wages</strong> as inflation eases and labor shortages persist.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Key risks:</strong> U.S. trade policy uncertainty, elevated energy prices, and financial/capital market volatility remain headwinds for Japan&rsquo;s import-dependent economy.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The China-Japan naval standoff is intensifying around Okinawa.</strong> The PLA Navy&rsquo;s Yonaguni-Iriomote transit (Apr 22) in response to Japan&rsquo;s Taiwan Strait passage marks a dangerous escalation in tit-for-tat signaling. Meanwhile, Japan&rsquo;s first-ever Nansei Islands exercise (May 17&ndash;22) with U.S. Marines will establish an unprecedented bilateral coordination center on Miyakojima. Combined with the new EW unit on Yonaguni and Type-88 missile deployments to Ishigaki, Okinawa&rsquo;s southwestern islands are transforming from monitoring outposts into multi-domain defense nodes.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, Okinawa faces a turning point.</strong> Governor Tamaki&rsquo;s anti-base &ldquo;All Okinawa&rdquo; coalition collapsed in February&rsquo;s elections. If LDP-backed Genta Koja wins in September, expect accelerated Henoko construction and reduced political friction for U.S. force realignment. PFAS contamination and SOFA orientation revisions continue to shape community relations on the ground.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force readiness is stretched.</strong> The 31st MEU and Kadena airmen are forward-deployed for Operation Epic Fury against Iran, temporarily reducing Okinawa&rsquo;s rapid-response capacity during the most tense period in East China Sea relations in years. Chinese coast guard incursions at the Senkakus continue at record pace (357/365 days in 2025), and the PLA Navy&rsquo;s Yonaguni transit signals willingness to operate in Japan&rsquo;s southwestern approaches.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PRC reaction to May 17&ndash;22 Nansei exercise &bull; Operation Epic Fury ceasefire status &amp; 31st MEU return timeline &bull; September 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation &bull; PLA naval activity near Yonaguni &bull; Yonaguni EW unit activation timeline &bull; PFAS water sampling access decisions
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; Reuters &bull; US News &bull; Taipei Times &bull; Military.com &bull; Foreign Policy &bull; Defense News &bull; Eurasian Times &bull; South China Morning Post &bull; USNI News &bull; Janes &bull; Al Jazeera &bull; Nippon.com &bull; Air &amp; Space Forces Magazine &bull; Bank of Japan &bull; Japan Ministry of Finance &bull; IMF &bull; Ryukyu Shimpo &bull; Asian Military Review
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
