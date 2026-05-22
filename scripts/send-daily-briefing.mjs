#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Force Posture &bull; Regional Security &bull; Financial</p>
    </div>

    <!-- ===================== ITEM 1: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military Exercise / Indo-Pacific / U.S.-Japan Alliance &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Conducts First-Ever Nansei Islands Command Exercise With U.S. Marines Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ground Component Command</strong> concluded a landmark training exercise today (May 22) on the <strong>Nansei Islands</strong> &mdash; the first time Japan&rsquo;s highest operational command has focused specifically on the remote southwestern island chain closest to Taiwan. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies trained alongside <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (headquartered on Okinawa) across three strategically critical islands:
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          &bull; <strong>Ishigaki</strong> (150 miles east of Taiwan) &mdash; Type-88 surface-to-ship guided missile launcher deployed<br/>
          &bull; <strong>Yonaguni</strong> (70 miles east of Taiwan, Japan&rsquo;s westernmost island) &mdash; Two ScanEagle II UAVs operated<br/>
          &bull; <strong>Miyakojima</strong> (220 miles east of Taiwan) &mdash; First-ever <strong>U.S.-Japan coordination center</strong> established on the island (May 17&ndash;20)
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exercise focused on <strong>mobile deployment, material transportation, and command-and-control interoperability</strong> between JGSDF and USMC forces. A Marine spokesman stated the exercise &ldquo;strengthens 12th MLR and the JGSDF&rsquo;s interoperability, improving shared understanding&rdquo; of combined operations. This comes as China has <strong>restricted access to large swaths of East China Sea airspace</strong> for up to 40 days without explanation, and organized <strong>thousands of fishing vessels into formations spanning 200+ miles</strong> near major shipping lanes between China, Taiwan, and the Korean Peninsula.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Signals a major shift in Japan&rsquo;s defense posture &mdash; moving from theoretical First Island Chain defense to active rehearsal. The 12th MLR&rsquo;s participation validates the Marine Corps&rsquo; force design concept for distributed maritime operations in a potential Taiwan contingency. The establishment of a joint coordination center on Miyakojima sets precedent for future permanent combined facilities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 2: INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Force Posture / USMC / Congressional Testimony &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Admits Indo-Pacific &ldquo;Gap Is Unfilled&rdquo; After 31st MEU Deploys to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant <strong>Gen. Eric Smith</strong> testified before the House Armed Services Committee on May 18 that the <strong>31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; has left a capability gap that remains <strong>&ldquo;unfilled.&rdquo;</strong> The 31st MEU (<strong>~2,500 Marines</strong>) and the amphibious assault ship <strong>USS Tripoli</strong> (homeported in Sasebo) have been enforcing the <strong>Iranian port blockade since April 13</strong> as part of <strong>Operation Epic Fury</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Smith stated bluntly: <strong>&ldquo;Deploying a unit from one theater to another does not result in automatic replacement.&rdquo;</strong> Stopgap measures include the <strong>USS Boxer ARG</strong> and <strong>11th MEU</strong> (Camp Pendleton) drilling in 7th Fleet&rsquo;s area of responsibility, plus elements of I MEF and III MEF providing &ldquo;combat capability.&rdquo; However, defense experts warn this leaves Okinawa-based forces stretched thin at a time of <strong>heightened Chinese military activity</strong> around Taiwan and in the East China Sea.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence creates the most significant gap in Okinawa-based amphibious capability since the unit&rsquo;s activation. With China conducting airspace restrictions and large-scale maritime militia operations near the Nansei chain, the timing is strategically unfavorable. III MEF remains on Okinawa but lacks the afloat capability that the 31st MEU provides for rapid crisis response.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 3: F-22 DEPLOYMENT TO KADENA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Air Power / Kadena AB / Force Modernization &mdash; May 5&ndash;6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12 F-22 Raptors Deploy to Kadena Air Base; F-15EX Delivery Delayed to 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptor stealth fighters</strong> arrived at <strong>Kadena Air Base</strong> for rotational duty with the 18th Wing. <strong>12 aircraft from the 90th Expeditionary Fighter Squadron</strong> (JBER, Alaska) arrived May 5&ndash;6, joined by the <strong>27th Expeditionary Fighter Squadron</strong> (JBLE, Virginia). The $143M-per-unit fighters will integrate with 18th Wing operations, joint partners, and allied forces to &ldquo;refine tactics, strengthen interoperability, and sustain readiness for real-world contingencies.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, Kadena&rsquo;s permanent fighter replacement remains stalled. The planned fleet of <strong>36 F-15EX Eagle II fighters</strong> (replacing 48 retired F-15C/D aircraft) will not arrive until <strong>2027</strong> &mdash; a one-year delay caused by a <strong>Boeing labor strike</strong> at the St. Louis plant (Aug 4&ndash;Nov 17, 2025). Full delivery of all 36 aircraft is now expected in <strong>2028</strong>. Until then, Kadena relies on rotating F-22 and F-35 deployments to maintain air superiority coverage.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena has been without a permanent fighter squadron since the F-15C/D retirement. The F-22 rotations provide 5th-gen air dominance but lack the continuity and readiness of a permanently assigned wing. The F-15EX delay means Kadena&rsquo;s &ldquo;fighter gap&rdquo; will persist for another 12&ndash;18 months &mdash; a vulnerability China is likely tracking.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 4: GSDF OSPREY + RESOLUTE DRAGON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Aviation / U.S.-Japan Interop / Upcoming Exercise &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">GSDF V-22 Osprey to Use U.S. Base in Okinawa for First Time During Resolute Dragon</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>Japan Ground Self-Defense Force V-22 Osprey</strong> will operate from a U.S. military base in Okinawa Prefecture for the first time during the upcoming <strong>Resolute Dragon exercise</strong> (June 20&ndash;30). The exercise between the JGSDF and U.S. Marine Corps will include a <strong>GSDF Osprey airlifting a mock patient from Miyako Island to MCAS Futenma</strong>. This marks a significant milestone in U.S.-Japan operational integration, as Japanese military aircraft operating from American installations on Okinawa has historically been politically sensitive.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Cross-basing of Japanese aircraft at U.S. installations deepens alliance interoperability and sets the stage for shared-use arrangements during a crisis. The Miyako-to-Futenma medevac scenario rehearses exactly the kind of casualty evacuation that would be needed during a First Island Chain conflict. Politically, it normalizes JSDF presence at historically contentious U.S. facilities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 5: FUTENMA/HENOKO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Basing / Okinawa Politics / Infrastructure &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Dispute: Pentagon Demands Long Runway at Henoko; Completion Not Before 2033</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The decades-long <strong>MCAS Futenma relocation</strong> remains contentious. The U.S. Department of Defense has stated it <strong>will not return the Futenma site unless a sufficiently long runway is secured at Henoko</strong>. The current Futenma runway is <strong>~2,700 meters</strong>; the planned V-shaped Henoko runways will be only <strong>~1,800 meters each</strong> &mdash; a gap the Pentagon considers operationally unacceptable. Construction at the Camp Schwab replacement facility continues but is <strong>not expected to complete until at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chief Cabinet Secretary <strong>Minoru Kihara</strong> affirmed: &ldquo;We are not thinking at all that the Futenma site will not be returned to Japan after the base is relocated.&rdquo; Meanwhile, Defense Minister <strong>Shigeru Ishiba&rsquo;s</strong> January pledge to reduce the U.S. military footprint on Okinawa has produced no concrete policy changes.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The runway-length dispute could delay Futenma&rsquo;s return indefinitely, fueling local opposition. With JSDF Ospreys now planning to use Futenma (see Item 4), the base&rsquo;s operational role is expanding even as political pressure to close it intensifies. Service members should plan for a long-term presence at current facilities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 6: FINANCIAL / QUALITY OF LIFE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Financial / Quality of Life / BOJ Policy &mdash; May 16&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Housing Allowance Increased $400&ndash;$500/Month; Yen Weakness Persists After BOJ Intervention</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Housing Allowance:</strong> Effective <strong>May 16</strong>, off-base service members on Okinawa receive increased Overseas Housing Allowance (OHA): <strong>E-1 through E-4: +$396/mo</strong> &bull; <strong>O-1, O-2, E-5: +$504/mo</strong> &bull; <strong>O-3, E-6 through E-8: +$450/mo</strong>. Brig. Gen. John Gallemore (18th Wing) noted personnel had been paying <strong>~$300/month out of pocket</strong> as landlords price-matched to higher local civilian housing allowances.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Yen &amp; Economy:</strong> The Bank of Japan held its policy rate at <strong>0.75%</strong> (highest since 1995) while the U.S. rate sits at <strong>3.50&ndash;3.75%</strong> &mdash; a 300-basis-point gap driving yen weakness. Japan conducted its <strong>first yen-buying intervention since July 2024</strong> after the currency breached <strong>&yen;160/$</strong> on April 30. Three BOJ board members dissented, pushing for a hike to 1.0%. Core inflation forecast raised to <strong>2.8%</strong> for FY2026 due to elevated crude prices. The Ministry of Finance <strong>upgraded Okinawa&rsquo;s economic outlook</strong> earlier this year, citing strong tourism and personal consumption.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact on Personnel</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The OHA increase provides meaningful relief but may not keep pace if yen weakness drives further local inflation. With the yen at historic lows, dollar-denominated pay stretches further for off-base purchases, but landlords are adjusting rents upward. Service members should monitor exchange rates and consider locking in leases. No comparable OHA changes are planned for other Japan installations at this time.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 7: JAPAN INTELLIGENCE REFORM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Government / Intelligence / Regional Security &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan to Establish National Intelligence Bureau by July; Counterespionage Legislation Forthcoming</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Takaichi government is advancing legislation to establish a <strong>national intelligence bureau as early as July 2026</strong>. Chief Cabinet Secretary <strong>Minoru Kihara</strong> stated the aim is to &ldquo;prevent undue interference from foreign countries amid a complex and challenging international environment.&rdquo; The initiative includes <strong>enhanced foreign intelligence-gathering capabilities</strong> and new <strong>counterespionage legislation</strong> expected later this summer. Opposition parties have raised concerns about privacy, oversight, and concentration of power.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A centralized Japanese intelligence bureau would enhance bilateral intelligence sharing with U.S. forces on Okinawa and across the Indo-Pacific. This represents the most significant reform to Japan&rsquo;s intelligence architecture since the post-WWII era and aligns with Tokyo&rsquo;s broader shift toward a more assertive security posture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is simultaneously more critical and more stretched than at any point in the post-Cold War era.</strong> The Nansei Islands exercise concluding today demonstrates that the U.S.-Japan alliance is actively preparing for a First Island Chain fight, but the 31st MEU&rsquo;s ongoing Middle East deployment leaves the region&rsquo;s only permanently forward-deployed amphibious force 6,000 miles away. The Marine Commandant&rsquo;s candid &ldquo;gap is unfilled&rdquo; testimony underscores the tradeoff.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China is testing the boundaries.</strong> Unrestricted East China Sea airspace closures, the Liaoning carrier&rsquo;s Taiwan Strait transit, and organized fishing militia formations all signal Beijing is probing the reduced U.S. posture. The F-22 rotational presence at Kadena provides air dominance but Kadena&rsquo;s permanent fighter gap persists until F-15EX deliveries begin in 2027.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> 31st MEU return timeline from Operation Epic Fury &bull; China&rsquo;s response to Nansei Islands exercise &bull; Resolute Dragon exercise (Jun 20&ndash;30) with GSDF Osprey at Futenma &bull; F-15EX delivery schedule updates from Boeing &bull; BOJ June rate decision and yen trajectory &bull; Futenma runway-length negotiations &bull; National intelligence bureau legislation timeline
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; CNBC &bull; Air &amp; Space Forces Magazine &bull; USNI News &bull; The Diplomat &bull; Atlantic Council &bull; Military.com &bull; AEI China-Taiwan Update &bull; Reuters &bull; Foundation for Defense of Democracies &bull; Zona Militar &bull; DVIDSHUB &bull; Bank of Japan &bull; Japan Ministry of Finance
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
