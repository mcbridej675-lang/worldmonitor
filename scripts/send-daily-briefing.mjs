#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing Email Sender
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &amp; Indo-Pacific &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Markets &bull; Natural Hazards &bull; Risk Assessment</p>
    </div>

    <!-- ===================== EVENT 1: CHINA-TAIWAN COAST GUARD STANDOFF ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Geopolitics / Maritime Security &mdash; June 6&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Taiwan Coast Guard Standoff Escalates; PRC Launches &ldquo;Special Maritime Law-Enforcement Operation&rdquo; East of Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 6, China launched a <strong>&ldquo;special maritime traffic law-enforcement operation&rdquo;</strong> east of Taiwan, deploying coast guard vessels from Fujian and Guangdong provinces. The stated pretext was Japan and the Philippines announcing formal talks to delimit their maritime boundary &mdash; waters that overlap with Chinese and Taiwanese claims.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 7</strong>, Taiwan&rsquo;s coast guard expelled four Chinese government ships that entered restricted waters ~33 NM southeast of Taiwan&rsquo;s southern tip. By <strong>June 8&ndash;9</strong>, Chinese coast guard ships were reported <strong>harassing commercial shipping</strong> near Taiwan, querying vessels about origin and destination while asserting jurisdiction. Separately, CCG ship 3501 entered restricted waters near the <strong>Pratas Islands (Dongsha)</strong> on June 5&ndash;6, creating a standoff with Taiwan patrol boat <em>Xunhu No. 9</em>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>PLA gray-zone operations remain elevated:</strong> 217 ADIZ incursions in May 2026; a joint combat readiness patrol on May 26 involving 29 aircraft and 7 warships crossing the Taiwan Strait median line; and PLA Southern Theater Command used electronic jamming against the Dutch frigate <em>De Ruyter</em> during a FONOP near the Paracels on May 28. China has built <strong>three new oil/gas platforms</strong> in the East China Sea this year and issued 40-day airspace restriction notices over key East China Sea approaches.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct threat to first island chain.</strong> China explicitly cited the Japan-Philippines maritime boundary talks as the trigger. PRC state media has escalated Ryukyuan independence narratives and questioned Japanese sovereignty over the Senkaku and Ryukyu Islands. <strong>Kadena Air Base sits ~450 miles from Taiwan.</strong> Upcoming Exercise Resolute Dragon 26 (June 20&ndash;30) will train island defense scenarios on Miyako and Ishigaki &mdash; directly responding to this threat axis. The 31st MEU&rsquo;s absence (deployed to Middle East since March) creates a <strong>temporary Indo-Pacific amphibious capability gap</strong> that adversaries may seek to exploit.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TSUNAMI ADVISORY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Natural Hazard / Okinawa / Force Protection &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">M7.8 Philippines Earthquake Triggers Tsunami Advisory for Okinawa; Kadena Opens Gates for Evacuees</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck off Mindanao, Philippines at approximately 7:37 AM local time on June 8, killing at least <strong>32&ndash;35 people</strong> and injuring over 100 in the Philippines. Approximately 22 million people experienced moderate to severe shaking.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Meteorological Agency issued <strong>tsunami advisories for seven prefectures</strong> including Okinawa, with projected wave heights up to <strong>1 meter (~3 feet)</strong>. Earliest waves were expected to reach Miyakojima by 11:00 AM. Over <strong>195,000 residents and travelers</strong> across ten prefectures were advised to evacuate to higher ground.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Military response:</strong> The 18th Wing at <strong>Kadena Air Base</strong> ordered all personnel to &ldquo;get out of the water and move away from the coast&rdquo; and <strong>opened Gate 1 for civilian evacuees</strong>. DoDEA schools relocated students from Kinser Elementary and Lester Middle School to safer facilities. All U.S. military personnel and dependents were accounted for. <strong>All-clear was declared at 1:35 PM</strong> at Kadena; JMA lifted the advisory at 4:50 PM. Only minor surges were observed &mdash; no damage or casualties in Japan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Protection Note</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the second major natural hazard event in one week following <strong>Typhoon Jangmi</strong> (June 1&ndash;2, Category 1, 80 mph gusts at MCAS Futenma, 82,921 evacuated, 48,000 homes lost power). Okinawa remains in its <strong>rainy season (tsuyu)</strong> through ~June 21. The 2026 typhoon season forecast calls for <strong>28 typhoons</strong> (above average), with 6 already formed &mdash; roughly double the normal pace. Peak risk: July&ndash;September.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: NORTH KOREA NUCLEAR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Northeast Asia / WMD / Missile Threat &mdash; June 3&ndash;7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kim Jong Un Unveils Third Uranium Enrichment Facility, Demands &ldquo;Exponential&rdquo; Nuclear Arsenal Expansion; Inspects Weapons Factory June 7</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 3&ndash;4</strong>, Kim Jong Un unveiled a <strong>third uranium enrichment facility</strong> and declared that weapons-grade nuclear material production capacity has <strong>more than doubled</strong> compared to five years ago. He called for &ldquo;exponential&rdquo; expansion of the nuclear arsenal. On <strong>June 7</strong>, Kim was photographed inspecting <strong>munitions at a weapons factory</strong>, reportedly ahead of Chinese President Xi Jinping&rsquo;s expected visit.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Additional provocations: North Korea conducted a <strong>live-fire test of a modular missile system</strong> on June 2, and in April tested <strong>ballistic missiles with cluster munition warheads</strong>. A U.S. defense official testified in April 2026 that &ldquo;North Korea&rsquo;s nuclear forces are increasingly capable of targeting the U.S. Homeland, and its <strong>missile forces can strike South Korea and Japan with nuclear or conventional warheads</strong>.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            North Korean missiles directly threaten Okinawa. Japan&rsquo;s Ministry of Defense cites the DPRK missile program as a key rationale for deploying upgraded <strong>Type-03 Medium Range SAMs on Yonaguni Island</strong>. The F-22 Raptors currently at Kadena (90th FS from JBER Alaska, 27th FS from JB Langley) provide air superiority coverage, but the <strong>F-15EX Eagle II delivery (36 jets) has been delayed to 2027</strong> due to a Boeing strike, creating a temporary capability gap at Kadena.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: MILITARY / USMC DEVELOPMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / JSDF / Force Posture &mdash; June 5&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Opens at Camp Hansen; Japan&rsquo;s V-22 Ospreys to Fly from MCAS Futenma for First Time During Resolute Dragon 26</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony was held <strong>June 5</strong> for a new <strong>$320 million barracks complex at Camp Hansen</strong> housing ~1,100 enlisted Marines (through the rank of sergeant). Each Marine gets a <strong>private 155 sq ft bedroom</strong>; two Marines share a 710 sq ft unit with kitchen, restroom, shower, and washer/dryer. The complex includes three barracks buildings (184 modules each), a 220-space parking garage, and a central recreation field. <strong>Funded by the Japanese government</strong> with 15 local construction companies. Move-in expected <strong>July 2026</strong>. Maj. Gen. Brian Wolford (MCIPAC commander): &ldquo;This is the first domino that starts falling for the rest of the construction.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Exercise Resolute Dragon 26 (June 20&ndash;30):</strong> Three JGSDF V-22 Ospreys will deploy to MCAS Futenma &mdash; the <strong>first time Japan&rsquo;s Ospreys operate from a U.S. Marine base on Okinawa</strong>. The aircraft will fly to <strong>Miyako Island</strong> (~220 mi east of Taiwan) and <strong>Ishigaki Island</strong>. Approximately <strong>7,300 JGSDF and 2,300 U.S. service members</strong> will participate. The exercise will feature <strong>NMESIS</strong> (Navy-Marine Expeditionary Ship Interdiction System) and <strong>MADIS</strong> (Marine Air Defense Integrated System).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Additional developments:</strong> Camp Foster&rsquo;s <strong>Kishaba Housing Area</strong> will return ~12 acres to Okinawa by late fall 2026, enabling widening of congested Prefectural Road 81 to four lanes. The JSDF <strong>15th Brigade (Naha) is being reorganized into the 15th Division</strong> in FY2026, adding infantry and reconnaissance units with Type 16 Mobile Combat Vehicles. A new <strong>electronic warfare unit</strong> is being introduced for Okinawa&rsquo;s defense.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Key Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The <strong>31st MEU / USS Tripoli (~2,500 Marines)</strong> deployed from Okinawa to the Middle East on March 13. Defense experts warn of an Indo-Pacific amphibious capability gap. An Atlantic Council report recommends <strong>halting the planned Marine pullback</strong> (10,000 Marines to Guam/Hawaii/Australia/CONUS) as the China threat rises. The transformation of US Forces Japan into a <strong>Joint Force Headquarters</strong> &mdash; the most significant restructuring since 1957 &mdash; is underway.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: OKINAWA POLITICS & ECONOMY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Politics / Economy &mdash; June 6&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">&ldquo;Project Lequio&rdquo; Political Group Launches June 6 Ahead of September Gubernatorial Election; BOJ Rate Hike Expected June 15&ndash;16</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Politics:</strong> On <strong>June 6</strong>, 13 independent-affiliated prefectural and municipal assembly members launched <strong>&ldquo;Project Lequio&rdquo;</strong> (named after the historical Portuguese/Spanish name for the Ryukyu Kingdom). The group supports Governor Tamaki&rsquo;s reelection and advocates &ldquo;local governance not subordinate to national politics.&rdquo; This comes as Tamaki faces a <strong>September 13 gubernatorial election</strong> against <strong>Genta Koja (42)</strong>, the LDP-backed former Naha deputy mayor who supports the Futenma relocation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tamaki&rsquo;s &ldquo;All Okinawa&rdquo; coalition suffered a <strong>devastating defeat in February&rsquo;s lower house election</strong>, losing all four Okinawa single-seat constituencies to PM Takaichi&rsquo;s LDP. The education ministry&rsquo;s May ruling that a school&rsquo;s Henoko peace trip <strong>violated the Basic Act on Education</strong> &mdash; the first such determination since the law&rsquo;s 1947 enactment &mdash; has become a major controversy, with critics calling it government overreach. Henoko construction stands at only <strong>17% overall completion</strong>; the replacement facility won&rsquo;t be operational until at least <strong>2036</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Economy:</strong> The BOJ is expected to raise its policy rate from <strong>0.75% to 1.0%</strong> at the June 15&ndash;16 meeting (80% market probability) &mdash; the highest rate since 1995. The yen trades at <strong>160.15/USD</strong>, near the intervention threshold. Nikkei 225 at <strong>64,490</strong> (+0.73%). <strong>Marubeni acquired Okinawa Tourist Service (OTS)</strong> on June 2 as a platform for tourism sector roll-ups. Okinawa is projected to exceed <strong>10 million visitors</strong> in FY2025 for the first time. Shuri Castle main hall reconstruction on track for <strong>November 22, 2026 completion ceremony</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Watch Items</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September 13 gubernatorial election is the pivotal political event for U.S. base policy. An LDP victory (Koja) would remove prefectural-level opposition to the Henoko relocation for the first time in 12 years. A Tamaki third term would sustain legal and political resistance. The BOJ rate decision on June 15&ndash;16 may strengthen the yen and affect local economic conditions. Okinawa development budget rose to <strong>&yen;264.7B</strong> for FY2026 (first increase in 10 years, but short of the &yen;300B prefectural request).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Threat Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The China-Taiwan coast guard standoff is the most consequential development this week.</strong> China&rsquo;s &ldquo;special maritime law-enforcement operation&rdquo; directly responds to the Japan-Philippines maritime boundary talks and signals Beijing&rsquo;s willingness to assert jurisdiction in waters critical to first island chain defense. With PRC state media escalating Ryukyuan sovereignty narratives and gray-zone operations at elevated levels, the threat environment for Okinawa is intensifying.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Multiple capability gaps demand attention.</strong> The 31st MEU&rsquo;s Middle East deployment leaves Okinawa without its primary amphibious quick-reaction force. The F-15EX delivery delay to 2027 extends reliance on aging F-15C/Ds supplemented by rotational F-22s at Kadena. Exercise Resolute Dragon 26 (June 20&ndash;30) &mdash; featuring Japan&rsquo;s first Osprey operations from Futenma and training on Miyako/Ishigaki &mdash; is a critical opportunity to validate interoperability and island defense concepts.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">North Korea&rsquo;s nuclear acceleration adds a second axis of threat.</strong> The unveiling of a third enrichment facility and doubled fissile material production capacity, combined with continued missile testing (including cluster munition warheads), raises the stakes for Okinawa-based missile defense. Japan&rsquo;s JSDF restructuring &mdash; upgrading the 15th Brigade to a Division, deploying Type-03 SAMs to Yonaguni, and introducing electronic warfare units &mdash; reflects the urgency of the security environment.
      </p>
    </div>

    <!-- ===================== REGIONAL SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Regional Snapshot &mdash; June 9, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">64,490 (+0.73%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">160.15 (yen weakening)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">BOJ Policy Rate</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">0.75% (1.0% expected June 16)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.4% (Fri close)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">8,640 (+0.5%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~$96/bbl (Hormuz closure ongoing)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TPCON Okinawa</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Normal</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Okinawa Weather</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Tsuyu (rainy season through ~Jun 21)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== UPCOMING WATCH ITEMS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Upcoming Watch Items</p>
      <p style="color: #ccc; font-size: 12px; line-height: 1.8; margin: 0;">
        <strong>June 15&ndash;16:</strong> BOJ policy rate decision (1.0% expected) &bull;
        <strong>June 20&ndash;30:</strong> Exercise Resolute Dragon 26 (Okinawa, Miyako, Ishigaki) &bull;
        <strong>June 21:</strong> Expected end of tsuyu rainy season &bull;
        <strong>June 21:</strong> Minamidaito &amp; Ie Village local elections &bull;
        <strong>July 2026:</strong> Camp Hansen barracks move-in begins &bull;
        <strong>Sept 13:</strong> Okinawa gubernatorial election (Tamaki vs. Koja) &bull;
        <strong>Nov 22:</strong> Shuri Castle main hall restoration ceremony &bull;
        <strong>Late Fall:</strong> Kishaba Housing Area land return (~12 acres)
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Al Jazeera &bull; USNI News &bull; Air &amp; Space Forces Magazine &bull; U.S. News &bull; Newsweek &bull; CNN &bull; NPR &bull; AEI China-Taiwan Update &bull; South China Morning Post &bull; Bloomberg &bull; Nippon.com &bull; Okinawa Times &bull; Trading Economics &bull; Nikkei Asia &bull; DVIDSHUB &bull; Military Times &bull; Zona Militar &bull; Asian Military Review &bull; Atlantic Council &bull; The Diplomat &bull; TaiwanPlus
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence or policy guidance. Sources verified across multiple outlets where possible.<br/>
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
