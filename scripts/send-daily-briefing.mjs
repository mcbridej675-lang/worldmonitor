#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Update</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Natural Hazards &bull; Government &bull; Force Posture</p>
    </div>

    <!-- ===================== EVENT 1: TSUNAMI ADVISORY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Natural Hazards / Force Protection &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 7.8 Philippines Earthquake Triggers Tsunami Advisory Across Okinawa; Kadena Activates Evacuation Procedures</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck off Mindanao, Philippines at 7:38 a.m. local time on June 8, prompting the Japan Meteorological Agency (JMA) to issue a <strong>tsunami advisory for Okinawa Prefecture</strong> with waves up to 1 meter expected. The earliest impact was projected to reach <strong>Miyakojima by 11:00 a.m.</strong>, with a <strong>20 cm tsunami observed at Nakagusuku Bay Port</strong> (Okinawa City) at 12:58 p.m. and at <strong>Ishigaki Port</strong> at 1:26 p.m.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Air Base&rsquo;s 18th Wing</strong> issued an urgent directive: &ldquo;Get out of the water and move away from the coast.&rdquo; <strong>Gate 1 was opened</strong> to affected off-base community members, with evacuees directed toward Gate 5. DoDEA schools activated emergency protocols &mdash; <strong>Kinser Elementary relocated students to Building 107</strong> on Camp Kinser, and <strong>Lester Middle School students moved to Killin Elementary</strong> on Camp Foster. All students and staff were accounted for. Kadena declared all-clear at <strong>1:35 p.m.</strong> The JMA lifted the advisory at 4:50 p.m.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force Protection:</strong> No damage to U.S. installations reported. Evacuation procedures executed successfully across MCIPAC and 18th Wing installations. Navy bases at Yokosuka and Sasebo reported no impact. <strong>Status:</strong> All clear &mdash; normal operations resumed. Coastal caution remains advised.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TROPICAL DEPRESSION / HEAVY RAIN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Weather / Force Protection &mdash; June 9&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Depression Near Taiwan Intensifies Seasonal Rain Front; Heavy Rain Warning for Okinawa Through June 11</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>newly formed tropical depression near Taiwan</strong> on June 9 is expected to intensify the seasonal rain front lingering over southwestern Japan, raising the risk of <strong>warning-level rainfall across Okinawa and the Amami Islands through June 11</strong>. The system is expected to move toward the <strong>Sakishima Islands on June 10</strong> and pass near Okinawa until June 11.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Atmospheric conditions will be <strong>unstable across the main island of Okinawa and the Sakishima Islands</strong>, with active rain clouds likely to form. <strong>Heavy rain exceeding 30 mm/hour</strong> is expected in some areas. This follows <strong>Typhoon Jangmi (Typhoon No. 6)</strong>, which hit Okinawa on June 1&ndash;2 with limited damage to U.S. installations despite grounding 400+ flights and causing scattered power outages.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Hazards:</strong> Landslides, low-lying area flooding, rising river waters. Personnel should monitor base weather alerts and avoid coastal and low-lying areas. Flight operations may be affected. <strong>Note:</strong> JMA forecasts 28 typhoons for the 2026 season &mdash; above historical average. Okinawa should expect an active weather season ahead.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA FIRST ISLAND CHAIN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Regional Security / PRC &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PRC Deploys 100+ Warships Across First Island Chain; Miyako Strait Activity Elevated; PRC Information Operations Target Ryukyu Sovereignty</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan detected an <strong>unprecedented deployment of over 100 PLA Navy warships</strong> across the First Island Chain in May 2026 &mdash; roughly <strong>double the normal 50&ndash;60 vessel baseline</strong>. The buildup stretches from the Yellow Sea to the South China Sea, with <strong>increased activity near the Miyako Strait</strong> and waters east of Taiwan. The deployment includes destroyers, frigates, amphibious ships, and support vessels, with notable concentration in the <strong>Bashi Channel and northern South China Sea</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The AEI China&ndash;Taiwan Update (June 5) reports <strong>217 PLA aerial incursions into Taiwan&rsquo;s ADIZ in May</strong>. PRC has also undertaken <strong>information operations encouraging &ldquo;Ryukyuan independence&rdquo;</strong> &mdash; directly questioning Japanese sovereignty over the Senkaku and Ryukyu Islands following PM Takaichi&rsquo;s Taiwan contingency statements. Japan and the Philippines are enhancing their bilateral defense relationship through <strong>military intelligence sharing and technology transfers</strong>, including six Abukuma-class destroyers and Type-88 anti-ship missile discussions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Threat Level: ELEVATED.</strong> The doubling of PLA naval presence near Okinawa&rsquo;s operating environment represents a significant shift in baseline activity. The Miyako Strait &mdash; between Okinawa and Miyako Island &mdash; is a critical chokepoint for PLA Navy access to the Western Pacific. PRC information operations targeting Ryukyu sovereignty are a new vector. Japan passed CFIUS-modeled foreign investment screening legislation on May 29 to protect industrial secrets amid PRC pressure campaigns.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: F-22 ROTATION & KADENA OPS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Air Power &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-22 Raptors Rotate Into Kadena as F-15EX Delivery Delayed to 2027; Kadena Airmen Deployed to Iran Operations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two squadrons of <strong>F-22 Raptors</strong> &mdash; the <strong>90th EFS (JBER, Alaska)</strong> and the <strong>27th EFS (JBLE, Virginia)</strong> &mdash; arrived at Kadena Air Base in early May for rotational duty with the 18th Wing. The rotation fills a gap left by the <strong>F-15EX Eagle II delivery delay</strong>: the 36 planned aircraft will not arrive until <strong>2027</strong>, nearly a year behind schedule, due to a Boeing factory strike (Aug&ndash;Nov 2025).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>airmen from Kadena are deployed &ldquo;in harm&rsquo;s way&rdquo;</strong> as part of U.S. operations against Iran (Operation Epic Fury). The <strong>18th Aircraft Maintenance Squadron activated on May 15</strong> to support increased operational tempo. Service members living off-base received a <strong>$400&ndash;$500/month OHA increase</strong> effective May 16. A <strong>575-gallon diesel fuel spill</strong> was contained in March after affecting Kadena&rsquo;s stormwater system.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Air Superiority:</strong> Kadena maintains credible fighter presence via F-22 rotations, but the F-15EX delay creates a capability gap in the permanent force structure. The dual-theater demand (Indo-Pacific defense + Iran operations) is stretching Kadena&rsquo;s operational bandwidth. The 18th Wing remains the hub of U.S. Air Force presence in the Western Pacific, within operational range of the Taiwan Strait, Korean Peninsula, and South China Sea.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Military / Exercises / Alliance &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26: Major USMC&ndash;JGSDF Exercise Spanning Okinawa, Miyako, Ishigaki, and Yonaguni; First GSDF Osprey Landing on Miyako</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Exercise Resolute Dragon 26</strong> will run <strong>June 20&ndash;30</strong>, with the USMC&rsquo;s III Marine Expeditionary Force and the JGSDF Western Army conducting bilateral training across multiple islands. U.S. participants include <strong>3rd Marine Division, 3rd MEB, 1st MAW, 12th Marine Littoral Regiment</strong>, along with the <strong>Army&rsquo;s 3rd Multi-Domain Task Force, 7th Fleet, and USAF 18th Wing</strong>. Locations span <strong>Kyushu, Tokuno Island, Amami Oshima, Okinawa, Miyako Island, Ishigaki Island, and Yonaguni Island</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A highlight: the <strong>JGSDF V-22 Osprey will airlift a mock patient from Miyako Island to MCAS Futenma</strong> &mdash; the first time a GSDF Osprey has landed on Miyako Island. The exercise focuses on <strong>command and control, multi-domain maneuver, and defense of key maritime terrain</strong> &mdash; directly rehearsing scenarios relevant to First Island Chain defense. Separately, <strong>U.S. Naval Special Warfare forces</strong> recently conducted precision free-fall insertion training over Okinawa, rehearsing low-signature access to drop zones in contested environments.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Readiness Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Significance:</strong> Resolute Dragon 26 is the largest iteration yet, integrating joint and multi-domain capabilities across the southwestern island chain. The GSDF Osprey Miyako milestone signals deepening interoperability. The 12th MLR&rsquo;s participation underscores the stand-in force concept for distributed maritime operations. Personnel should expect increased air and ground traffic at MCAS Futenma, Naha AB, and across Camp Butler installations during the exercise window.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: OKINAWA POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Base Realignment &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Governor&rsquo;s Race Heats Up: Tamaki&rsquo;s Anti-Base &ldquo;All Okinawa&rdquo; Coalition Faces LDP Challenge Ahead of September 13 Election</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Support for <strong>Governor Denny Tamaki</strong> is wavering ahead of the <strong>September 13 gubernatorial election</strong>. Tamaki, governor since 2018, is backed by the <strong>&ldquo;All Okinawa&rdquo; coalition</strong> opposing the Futenma-to-Henoko relocation. His challenger, <strong>Genta Koja (42)</strong>, a former Naha deputy mayor, will run as the de facto <strong>LDP candidate supporting the relocation plan</strong>. The LDP&rsquo;s momentum is strong after winning all four Okinawa districts in the February 2026 general election.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Henoko replacement facility for MCAS Futenma</strong> remains Japan&rsquo;s most contentious base project. Construction continues but faces engineering challenges including soft seabed requiring extensive foundation work, with <strong>completion unlikely before the 2030s</strong>. Meanwhile, the <strong>U.S.&ndash;Japan Special Measures Agreement</strong> (&yen;1.06 trillion / $8.6B over five years) expires March 2027, with renegotiation underway. The agreement covers utilities, 23,178 Japanese national employee salaries, training costs, and facilities improvement. Defense Minister Koizumi pledged in January to reduce the U.S. military footprint on Okinawa during his first visit.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Watch:</strong> A Koja (LDP) victory in September could shift Okinawa&rsquo;s stance on Henoko from active opposition to cooperation, potentially accelerating the FRF timeline. A Tamaki re-election would maintain the status quo of legal and political resistance. The DPRI debate continues &mdash; critics argue that relocating ~9,000 Marines to Guam/Hawaii weakens First Island Chain readiness. Approximately 10,000 Marines would remain on Okinawa under current plans, with Okinawa still hosting ~70% of exclusive-use U.S. facilities despite being 0.6% of Japan&rsquo;s land mass.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Situation Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Natural hazard tempo remains high.</strong> Back-to-back events &mdash; Typhoon Jangmi (June 1&ndash;2), the Philippines earthquake tsunami advisory (June 8), and a new tropical depression driving heavy rain (June 9&ndash;11) &mdash; underscore the importance of maintaining force protection readiness. JMA projects 28 typhoons this season, above historical norms.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">PRC naval activity near Okinawa is at unprecedented levels.</strong> The 100+ warship deployment across the First Island Chain, elevated Miyako Strait transits, and information operations targeting Ryukyu sovereignty represent the most aggressive PRC posture in the region to date. Resolute Dragon 26 (June 20&ndash;30) is a timely and critical demonstration of U.S.&ndash;Japan multi-domain interoperability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Okinawa&rsquo;s political landscape is shifting.</strong> The September gubernatorial election could reshape the Futenma relocation debate. Simultaneously, the SMA renegotiation and ongoing DPRI implementation will define the U.S. force posture on the island for the next decade. Kadena&rsquo;s dual-theater commitments (Indo-Pacific + Iran) are stretching resources, while the F-15EX delay leaves a capability gap that F-22 rotations are bridging.
      </p>
    </div>

    <!-- ===================== NOTABLE DEVELOPMENTS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Notable Developments</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Camp Hansen: $320M &ldquo;Barracks of the Future&rdquo; Opens (June 5)</strong> &mdash; Ribbon-cutting ceremony held for a new bachelor enlisted quarters complex funded entirely by the Japanese government. Three buildings housing <strong>1,096 unaccompanied enlisted Marines</strong> (through rank of sergeant) with private 155 sq ft bedrooms and shared 710 sq ft units with kitchen, restroom, shower, and laundry. Includes central recreation field and 220-space parking garage. Built by 15 local Okinawan companies; occupancy begins next month. MCIPAC CG Maj. Gen. Brian Wolford called it &ldquo;the first domino&rdquo; for planned Camp Hansen construction.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Okinawa Development Budget: &yen;264.7B for FY2026</strong> &mdash; First increase in 10 years (+&yen;500M), though still below the &yen;300B requested by the prefectural government. Finance Ministry upgraded Okinawa&rsquo;s economic assessment, citing strong tourism growth (+18.6% YoY visitor arrivals).
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Red Flag-Alaska 26-2 (May 28&ndash;June 12)</strong> &mdash; PACAF-sponsored exercise ongoing through June 12 over the Joint Pacific Alaska Range Complex. 18th Wing elements participating.
      </p>
    </div>

    <!-- ===================== BASE STATUS SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Installation Status &mdash; ${today}</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Kadena Air Base</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">NORMAL OPS &mdash; F-22 rotation active</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">MCAS Futenma</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">NORMAL OPS &mdash; RD26 prep underway</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Camp Foster / Butler</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">NORMAL OPS</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Camp Hansen</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">NORMAL OPS &mdash; New BEQ occupancy next month</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Camp Schwab</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">NORMAL OPS &mdash; Henoko construction ongoing</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Weather Outlook</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">CAUTION &mdash; Heavy rain through Jun 11</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">TCCOR Status</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">TCCOR-4 &mdash; Monitor tropical development</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Meteorological Agency &bull; Japan Times &bull; U.S. Embassy Tokyo &bull; AEI China&ndash;Taiwan Update &bull; USNI News &bull; Army Recognition &bull; Air &amp; Space Forces Magazine &bull; Defense News &bull; The Diplomat &bull; Military.com &bull; Heritage Foundation &bull; U.S. Indo-Pacific Command &bull; Nippon.com
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
