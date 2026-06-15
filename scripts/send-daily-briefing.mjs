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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &amp; Indo-Pacific &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Regional Security &bull; Force Posture &bull; Risk Assessment</p>
    </div>

    <!-- ===================== FLASH: US-IRAN DEAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">FLASH</span>
          <span style="color: #dc2626; font-size: 11px; font-weight: 700;">BREAKING &mdash; June 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Deal Announced: Strait of Hormuz Blockade to End; Signing Ceremony Set for June 19 in Switzerland</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump announced via social media that the U.S.-Iran deal &ldquo;is now complete.&rdquo; Pakistani PM Sharif, who brokered the final text, confirmed the agreement includes <strong>immediate and permanent termination of military operations on all fronts</strong>, reopening of the Strait of Hormuz, and a 60-day window for nuclear negotiations. Iran will be permitted <strong>low-level nuclear enrichment</strong> under the framework. The deal also reportedly includes an end to military operations in Lebanon. A formal signing ceremony is expected <strong>June 19 in Switzerland</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>31st MEU Return:</strong> The Okinawa-based 31st Marine Expeditionary Unit (~2,500 Marines aboard USS Tripoli), deployed to the Persian Gulf since March to enforce the Iranian port blockade, may now be released to return to the Indo-Pacific &mdash; closing the acknowledged gap in regional rapid-response capability.<br/><br/>
            <strong>Kadena Air Base:</strong> Airmen from Kadena were deployed &ldquo;in harm&rsquo;s way&rdquo; in support of Iran operations (Operation Epic Fury). Cessation of hostilities should ease the operational tempo burden on Okinawa-based units.<br/><br/>
            <strong style="color: #22c55e;">Markets:</strong> Nikkei 225 surged 4.99% (+3,297 pts) to a record close of 69,317.50. Oil fell &gt;$4/barrel on Hormuz reopening expectations. TOPIX also hit a record close at 3,999.60.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 1: 31st MEU INDO-PACIFIC GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Force Posture / USMC / Indo-Pacific</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Commandant Acknowledges Indo-Pacific Gap After 31st MEU Deployment to Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marine Corps Commandant Gen. Eric Smith testified before Congress in May that the gap left by the <strong>31st MEU&rsquo;s departure from Okinawa is &ldquo;unfilled.&rdquo;</strong> The 31st MEU &mdash; the only permanently forward-deployed Marine expeditionary unit in the Indo-Pacific &mdash; departed Sasebo aboard USS Tripoli in March with ~2,500 Marines to enforce the Iranian port blockade and support operations in the Strait of Hormuz.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Marines with the unit <strong>rappelled onto the Iranian-flagged vessel Touska on April 20</strong> during boarding operations. Smith stated: &ldquo;When you move one force from one combatant command theater to another, you don&rsquo;t replace it.&rdquo; The USS Boxer ARG/11th MEU from California has been partially filling the Pacific gap. With today&rsquo;s US-Iran deal, the 31st MEU&rsquo;s return to the Western Pacific may now be imminent.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence has reduced the U.S. ability to rapidly respond to contingencies along the First Island Chain, including Taiwan and the Senkaku Islands. III MEF on Okinawa remains operational, but the loss of an amphibious ready group degrades crisis-response options. <strong>Watch for redeployment orders in the coming weeks.</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Joint Exercise / USMC-JGSDF / Nansei Islands &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: ~9,600 US-Japan Troops Begin Largest Nansei Chain Exercise June 20</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Exercise Resolute Dragon 26</strong> will run June 20&ndash;30 with approximately <strong>2,300 U.S. service members and 7,300 Japanese troops</strong>. III Marine Expeditionary Force and JGSDF Western Army will conduct island defense drills spanning <strong>Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong> plus Kyushu locations including Oita, Saga, Kumamoto, Kagoshima, Tokuno Island, and Amami Oshima.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a historic first, <strong>three JGSDF V-22 Ospreys will operate from MCAS Futenma</strong> &mdash; the first time Japan&rsquo;s Ospreys have used a U.S. base on Okinawa. They will fly to Miyako and Ishigaki islands for casualty evacuation drills, marking the first JSDF Osprey operations from Miyako (~360 km from Taiwan). Advanced systems including the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine-Air Defense Integrated System (MADIS)</strong> will be featured. JASDF Naha Air Base is also participating.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise scope &mdash; spanning the entire First Island Chain from Kyushu to Yonaguni &mdash; signals an unprecedented level of US-Japan integration for southwest island defense. The Osprey medevac drill from Miyako is a notable first, addressing a critical logistics gap in any Taiwan contingency scenario. <strong>Expect increased military traffic and activity across Okinawa from June 20.</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: KADENA F-22 ROTATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Air Power / Kadena Air Base / Force Modernization</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-22 Raptors Rotating Through Kadena as F-15EX Delivery Stalls; First Eagle II Not Expected Until 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two F-22 Raptor squadrons &mdash; the <strong>90th Expeditionary Fighter Squadron</strong> (JB Elmendorf-Richardson, Alaska) and the <strong>27th Expeditionary Fighter Squadron</strong> (JB Langley-Eustis, Virginia) &mdash; arrived at Kadena Air Base in May for rotational duty. The 12 stealth fighters ($143M each) are integrating with the 18th Wing for joint and allied training.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent replacement fleet of <strong>36 F-15EX Eagle II fighters</strong> remains delayed due to a Boeing strike (Aug&ndash;Nov 2025) at the St. Louis plant. Originally expected March&ndash;June 2026, the Air Force Secretary now says the first aircraft won&rsquo;t arrive until 2027, with full delivery by &rsquo;28 or &rsquo;29. The 18th Aircraft Maintenance Squadron activated at Kadena on May 15 to support the new rotation model.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena has operated without a permanently assigned fighter squadron since late 2022, relying on rotational deployments of F-35As, F-15Es, F-16s, and now F-22s. While the Raptor is arguably more capable than the F-15EX, the rotational model creates gaps during transition periods and increases logistics complexity. The F-15EX delay extends this posture uncertainty through at least 2027.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3B: 12TH MLR & PFAS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">INTEL</span>
          <span style="color: #666; font-size: 11px;">Force Buildup / Environmental / Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Now Receiving NMESIS Anti-Ship Missiles; PFAS Contamination Hits Record Levels Near Kadena</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> (converted from 12th Marines in Nov 2023) is now fully operational with three subordinate elements and is being equipped with the <strong>NMESIS anti-ship missile system</strong> starting FY2026. The 12th Littoral Combat Team executed its first overhead live-fire range at Camp Schwab on January 28, 2026. This capability directly addresses the anti-access/area-denial challenge in the East China Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, a March 2026 PFAS survey found the <strong>highest contamination level ever recorded &mdash; 2,800 parts per trillion</strong> (56x the national standard) downstream from Kadena Air Base. Elevated PFOS/PFOA levels were found at 28 of 40 sites near MCAS Futenma. New Japanese regulations strengthening drinking water standards took effect April 1, 2026. This issue remains a significant irritant in base-community relations.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 4: SEXUAL ASSAULT CASE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">SOFA / Legal / Civil-Military Relations &mdash; June 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japanese Prosecutors Drop Sexual Assault Case Against US Soldier at Kadena; Third Dismissal in Two Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Naha Public Prosecutors Office on June 11 <strong>dismissed sexual assault and bodily injury charges</strong> against an unnamed U.S. Army soldier in his 20s assigned to Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment at Kadena Air Base. The alleged assault occurred outdoors in April 2026 against an adult female acquaintance. No reason was given for the dismissal.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is <strong>at least the third sexual assault case against U.S. service members to be dropped</strong> by Okinawa prosecutors in the past two years. Multiple cases since 2023 remain in the courts. U.S. Forces Japan imposed stricter liberty rules in October 2024, including a <strong>ban on off-base drinking between 1 a.m. and 5 a.m.</strong> The soldier received a ~$125 fine for a separate traffic violation during the incident.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            These cases remain a persistent irritant in U.S.-Okinawa relations and fuel local opposition to the military presence. With Okinawa Memorial Day on June 23, expect heightened media attention and potential protests linking base-related incidents to broader anti-base sentiment. Leadership should monitor local media coverage closely.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: TSUNAMI RESPONSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Natural Hazard / Emergency Response &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">M7.8 Philippines Earthquake Triggers Tsunami Warning for Okinawa; Kadena Base Executes Evacuation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck the southern Philippines on June 8 at 7:38 a.m. local time, killing at least 32 people and exposing ~22 million people to moderate-to-severe shaking. Tsunami warnings were issued across the Pacific, with <strong>3-foot waves forecast for Okinawa</strong> (up to 10 feet for Philippine coasts).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Air Base</strong> immediately executed evacuation procedures, opening gates and relocating evacuees. DoD schools moved students from multiple facilities to higher ground. All personnel were accounted for and declared safe. Kadena declared an all-clear at 1:35 p.m. Other U.S. installations across Japan monitored conditions with no impacts reported.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 6: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Infrastructure / Quality of Life / USMC &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Camp Hansen Unveils $320M &ldquo;Barracks of the Future&rdquo; &mdash; 1,100 Marines Get Private Rooms Starting July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony on June 5 marked the completion of the <strong>$320 million barracks complex at Camp Hansen</strong>, funded entirely by the Japanese government under the Defense Policy Review Initiative (DPRI). The complex replaces six older buildings with three new barracks containing 184 housing modules each.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Each unit provides <strong>private 155-sq-ft bedrooms</strong> with personal sinks, plus shared kitchens, restrooms, showers, and laundry in 710-sq-ft modules. A central recreation field (half football-field size) and a 220-space parking garage are included. Nearly <strong>1,100 enlisted Marines</strong> will begin moving in July 2026. Officials called it &ldquo;the first domino&rdquo; for subsequent Camp Hansen improvements. Construction took approximately four years (began March 2022).
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 7: CHINA NAVAL ACTIVITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">PLA Activity / East China Sea / Regional Threat</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Diplomatic Crisis Deepens; PLA Patrols Near Okinawa at Elevated Tempo; Senkaku Presence Near-Daily</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>China-Japan diplomatic crisis</strong> (ongoing since PM Takaichi&rsquo;s Nov 2025 Taiwan defense remarks) continues without de-escalation. China banned dual-use exports to Japan in January 2026, and on June 10 accused Tokyo of &ldquo;deviating from the path of peaceful development.&rdquo; The PLA Eastern Theater Command launched &ldquo;joint combat readiness patrols&rdquo; in the East China Sea in April after a Japanese destroyer transited the Taiwan Strait. PLA Navy Formation 133 transited the <strong>Yonaguni-Iriomote Waterway</strong> (between Okinawa-administered islands) returning from Western Pacific drills.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China Coast Guard maintained patrols near the <strong>Senkaku/Diaoyu Islands 357 days in 2025</strong> (near-daily), and all four CCG vessels now carry deck-mounted 76mm autocannons. In early June, Chinese forces <strong>tracked a Dutch frigate</strong> in the Taiwan Strait. Analysts at Foreign Policy assessed that a <strong>Japan-China military clash is &ldquo;dangerously likely&rdquo;</strong> given converging factors: internal PLA political pressure, Japan&rsquo;s strategic shift, and Xi Jinping&rsquo;s approaching leadership milestone. Japan protested China&rsquo;s construction of a <strong>new structure on the East China Sea median line</strong> in April.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PLA naval transits through Okinawa-area waterways are now routine, but the frequency and complexity continue to increase. Japan&rsquo;s deployment of Type-12 SSMs and Type-03 SAMs to Ishigaki (2023) and plans for additional missile batteries on Yonaguni reflect the escalating competition. The US-Iran deal could free up US naval assets for redeployment to the Western Pacific, which Beijing will monitor closely.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 8: NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">DPRK / WMD / Regional Threat &mdash; June 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Unveils New Nuclear Fuel Production Facility; Kim Pledges &ldquo;Exponential&rdquo; Nuclear Expansion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 4, North Korea revealed a <strong>new uranium enrichment facility</strong> at an undisclosed location. Kim Jong Un personally toured the plant and announced plans to bolster nuclear forces &ldquo;at an exponential rate.&rdquo; South Korean officials assess Pyongyang now operates <strong>four uranium enrichment facilities</strong> including the Yongbyon complex.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This follows May 2026 tests of a <strong>new modular missile launch vehicle and &ldquo;multiple tactical cruise missile&rdquo; system</strong> intended for deployment along the DMZ. North Korea&rsquo;s continued nuclear and missile development directly threatens Okinawa-based assets, which fall within range of the DPRK&rsquo;s medium- and intermediate-range ballistic missiles. Kadena&rsquo;s Patriot batteries and the broader BMD architecture remain critical.
        </p>
      </div>
    </div>

    <!-- ===================== UPCOMING: MEMORIAL DAY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">UPCOMING</span>
          <span style="color: #eab308; font-size: 11px; font-weight: 700;">June 23 &mdash; 8 Days Out</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Memorial Day (Irei no Hi) &mdash; June 23</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Okinawa&rsquo;s annual commemoration of the Battle of Okinawa takes place on <strong>June 23</strong>. A formal ceremony will be held at <strong>Okinawa Peace Memorial Park</strong> in Itoman City beginning at 11:50 a.m., with a <strong>one-minute island-wide siren at noon</strong>. Schools close across the prefecture. The Cornerstone of Peace memorial bears over 240,000 names of those who perished. Traffic restrictions will be in effect near the park &mdash; expect increased security, potential protests linking recent SOFA incidents to base opposition, and heightened media coverage. All U.S. personnel should exercise cultural sensitivity and maintain a low profile.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Posture Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The US-Iran deal is the single most consequential development for Okinawa this week.</strong> If the Strait of Hormuz reopens and military operations cease, the 31st MEU should be freed to return to the Western Pacific, closing the critical gap in Indo-Pacific rapid-response capability that Gen. Smith acknowledged before Congress. This would restore the full III MEF posture on Okinawa ahead of Resolute Dragon 26 and during a period of heightened Chinese military activity in the East China Sea.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Exercise Resolute Dragon 26 (June 20&ndash;30) will be the largest US-Japan exercise of the year</strong> in the Nansei chain, with unprecedented scope from Kyushu to Yonaguni. The first-ever JGSDF Osprey medevac from Miyako Island signals deepening operational integration for a Taiwan contingency.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Domestic friction points persist.</strong> The dropped sexual assault case (third in two years), the approaching Okinawa Memorial Day, and ongoing Henoko/Futenma relocation disputes create a challenging civil-military environment. Leadership should anticipate protest activity and media scrutiny through June 23 and beyond.
      </p>
    </div>

    <!-- ===================== QUICK REFERENCE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Quick Reference &mdash; Key Dates</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 19</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">US-Iran signing ceremony (Switzerland)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 20&ndash;30</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Resolute Dragon 26 (Okinawa/Kyushu/Nansei)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 23</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Okinawa Memorial Day (Irei no Hi)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">July 2026</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Camp Hansen barracks move-in begins</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">2027 (est.)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">First F-15EX delivery to Kadena</td>
        </tr>
      </table>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; ${today}</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">69,317.50 (+4.99%) &mdash; RECORD</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TOPIX</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">3,999.60 (+3.03%) &mdash; RECORD</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Fell &gt;$4/bbl on Iran deal</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #888; text-align: right; padding: 6px 0;">Risk-on; yen under pressure</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars &amp; Stripes &bull; CBS News &bull; NBC News &bull; CNN &bull; NPR &bull; USNI News &bull; Marine Corps Times &bull; Military.com &bull; Military Times &bull; The Japan Times &bull; Nippon.com &bull; Taiwan News &bull; Foreign Policy &bull; Atlantic Council &bull; Al Jazeera &bull; Honolulu Star-Advertiser &bull; Naval News &bull; OODAloop &bull; Japan MOD
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence or financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
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
