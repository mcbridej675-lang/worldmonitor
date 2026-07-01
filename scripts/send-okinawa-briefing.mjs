#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Economy &bull; Weather &bull; Risk Assessment</p>
    </div>

    <!-- ===================== PRIORITY ALERT ===================== -->
    <div style="background: #1a0a0a; border: 1px solid #3b1111; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px; font-weight: 700;">&#9888; Priority Intelligence Summary</p>
      <p style="color: #ccc; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Resolute Dragon 26 concluded June 30.</strong> NMESIS, MADIS, and MRIC weapons systems now operationally deployed with 12th MLR at Camp Hansen &mdash; a generational upgrade in first island chain stand-in force capability. The 31st MEU remains deployed to the Middle East, leaving a capability gap in INDOPACOM. China&rsquo;s Eastern Theater Command issued protests. Okinawa&rsquo;s rainy season ended June 29; peak typhoon season begins immediately.
      </p>
    </div>

    <!-- ===================== SECTION 1: MILITARY/DEFENSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Defense &mdash; June 30&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 Concludes &mdash; NMESIS, MADIS &amp; MRIC Missile Systems Now Operational with 12th MLR</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The major bilateral exercise <strong>Resolute Dragon 26</strong> concluded June 30 with a ceremony at Camp Hansen. Approximately <strong>7,300 JSDF troops and 2,300 U.S. service members</strong> participated across training areas in Kyushu, Okinawa, Miyako, Ishigaki, and Yonaguni islands. Three critical new weapons systems were deployed:
        </p>
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; margin-bottom: 12px;">
          <tr style="border-bottom: 1px solid #222;">
            <td style="color: #eab308; padding: 8px 0; font-weight: 700; width: 80px;">NMESIS</td>
            <td style="color: #ccc; padding: 8px 0;">Navy-Marine Expeditionary Ship Interdiction System &mdash; ground-based anti-ship Naval Strike Missiles on light tactical vehicles. Arrived Camp Hansen June 16.</td>
          </tr>
          <tr style="border-bottom: 1px solid #222;">
            <td style="color: #eab308; padding: 8px 0; font-weight: 700;">MADIS</td>
            <td style="color: #ccc; padding: 8px 0;">Marine Air Defense Integrated System &mdash; Stinger missiles, 30mm cannon, 7.62mm MG for counter-UAS/low-altitude air defense. Arrived June 10.</td>
          </tr>
          <tr>
            <td style="color: #eab308; padding: 8px 0; font-weight: 700;">MRIC</td>
            <td style="color: #ccc; padding: 8px 0;">Medium-Range Intercept Capability &mdash; Israeli Iron Dome-derived SkyHunter missiles (range 2.5&ndash;44 mi). Three batteries planned by 2028 under $412.5M Raytheon contract.</td>
          </tr>
        </table>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Key firsts:</strong> Three JGSDF V-22 Ospreys operated from MCAS Futenma and conducted operations at Miyako Island (~220 mi east of Taiwan), including medical training at Vice Camp Miyakojima. Japan deployed two new amphibious ships &mdash; the <em>Nihonbare</em> (L4151) and <em>Yoko</em> (L4101), first of a planned 10-ship fleet for Nansei Chain defense. III MEF commander Lt. Gen. Roger Turner stated the alliance&rsquo;s &ldquo;greatest strategic advantage is not a weapon system, but our unbreakable trust between our people.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Participating units:</strong> III MEF, 12th Marine Littoral Regiment (Camp Hansen), 3rd Marine Littoral Regiment (Hawaii), USS George Washington CSG, Japan&rsquo;s Western Army.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #ef4444; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Force Posture Gap</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>31st MEU deployed to Middle East since March 2026</strong> aboard USS Tripoli. Currently enforcing Iranian port blockade under Operation Epic Fury. Marine Commandant Gen. Eric Smith testified this leaves an &ldquo;unfilled&rdquo; capability gap in the Indo-Pacific. USS Boxer ARG/11th MEU deployed from California ahead of schedule to partially compensate. <strong>Okinawa&rsquo;s primary rapid-response amphibious force remains unavailable for western Pacific contingencies.</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 2: BASE UPDATES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Base Operations / Infrastructure &mdash; June 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena F-22 Rotations Continue; Camp Hansen New Barracks Occupied; Henoko Landfill Expands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena Air Base:</strong> F-22 Raptor stealth fighters remain deployed from the 90th FS (JBER, Alaska) and 27th FS (JBLE, Virginia) to maintain western Pacific airpower. The 18th Aircraft Maintenance Squadron activated at Kadena on May 15.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Camp Hansen:</strong> Nearly 1,100 enlisted Marines moved into a new &ldquo;barracks of the future&rdquo; complex (ribbon-cutting June 5). Each resident gets a private 155 sq ft bedroom with personal sink; roommates share a kitchen, restroom, shower, and washer/dryer within a 710 sq ft unit.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Futenma/Henoko:</strong> The Defense Ministry began pouring earth and sand in a new area east of Cape Henoko in mid-June, adjacent to where fill work started November 2025. Southern side reclamation is nearly complete. Eastern side is delayed &mdash; soft undersea ground requires ~71,000 sand piles for soil improvement. <strong>The Pentagon states it will not return Futenma unless a long runway is secured at Henoko</strong> (existing Futenma: ~2,700m; planned Henoko V-runways: ~1,800m each). No concrete return date set as construction extends to at least 2033 &mdash; 30 years after the original US-Japan agreement.
        </p>
      </div>
    </div>

    <!-- ===================== SECTION 3: SECURITY/INTEL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Intelligence / Regional Security &mdash; June 29&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Protests Resolute Dragon; Dual Carrier Ops in Western Pacific; Japan Deploying SAMs Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Chinese response to Resolute Dragon 26:</strong> China Military website criticized the exercise, citing Japan&rsquo;s &ldquo;tougher defense policy and bigger defense spending&rdquo; under PM Takaichi and deepening US-Japan military integration. China&rsquo;s Eastern Theater Command launched combat readiness patrols in the East China Sea and dispatched warships near Okinawa in response.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Chinese naval activity near Okinawa:</strong> Two Chinese naval vessels sailed between Yonaguni and Iriomote islands (Okinawa Prefecture) in April, entering Japan&rsquo;s contiguous zone. Four armed Chinese coast guard ships entered Japanese territorial waters near the Senkaku Islands in May. Carriers <em>Liaoning</em> and <em>Shandong</em> operated simultaneously in the western Pacific for the first time. Japan&rsquo;s destroyer <em>JS Ikazuchi</em> transited the Taiwan Strait on April 17.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Japan military buildup:</strong> Plans to deploy upgraded Type-03 medium-range SAMs on Yonaguni Island (within sight of Taiwan) by fiscal 2030. The JGSDF Ground Component Command conducted its first-ever exercise focused on remote southwestern islands near Taiwan (May 17&ndash;22), practicing troop deployment and supply transport in the Nansei Islands with US Marines. PM Takaichi stated a China-Taiwan conflict could constitute a &ldquo;survival-threatening situation&rdquo; for Japan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#127919; North Korea Threat</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Multiple 2026 ballistic missile tests: Jan 4 (first launch of year), Mar 16 (10 missiles from upgraded MLRS), Apr 7&ndash;8 (multiple BMs over 3 days). IRBM profiles from recent tests align with ranges threatening Okinawa.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 4: GOVERNMENT/POLITICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Political &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Seeks Third Term Amid Weakening Coalition; Gubernatorial Election Set for September 13</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Governor Denny Tamaki</strong> announced his bid for a third term, backed by the &ldquo;All Okinawa&rdquo; coalition (CDP, JCP, SDP). He continues to oppose the Futenma-to-Henoko relocation. However, <strong>his support is wavering</strong>: the All Okinawa coalition failed to win any of Okinawa&rsquo;s four single-seat constituencies in the February 8 lower house election; all four went to LDP candidates under PM Takaichi.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Genta Koja</strong> (42, former deputy mayor of Naha) is the de facto LDP candidate. The LDP seeks to regain the governorship for the first time in 12 years. A Koja victory could significantly shift Okinawa&rsquo;s stance on base construction and US military presence.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>SOFA incident:</strong> A US Army soldier (Echo Battery, 1/1 ADA, 38th ADA Brigade, Kadena) accused of sexually assaulting a woman in April had charges <strong>dropped by Naha prosecutors on June 11</strong> with no reasoning provided. The soldier received only a ~$125 traffic fine. Governor Tamaki&rsquo;s office called the incident &ldquo;extremely regrettable.&rdquo; At least two other sexual assault cases involving service members have been dropped in the past two years.
        </p>
      </div>
    </div>

    <!-- ===================== SECTION 5: ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Economic &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tourism Set to Exceed 10M Visitors; New Accommodation Tax in Effect; Junglia Theme Park Expanding</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Tourism boom:</strong> Okinawa expects to exceed <strong>10 million tourists</strong> in fiscal 2025 for the first time. Named <strong>Expedia&rsquo;s Destination of the Year 2026</strong>, with a 71% YoY increase in flight and accommodation searches. Japan&rsquo;s Finance Ministry upgraded Okinawa&rsquo;s economic status to &ldquo;recovering&rdquo; from &ldquo;moderately recovering,&rdquo; driven by tourism growth.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Accommodation tax:</strong> A 2% prefectural lodging tax took effect in April 2026 &mdash; the first prefectural-level lodging tax in Japan, capped at &yen;2,000 (~$13) per person per night. Expected to generate ~&yen;7.8 billion annually for landscape preservation, tourism workforce support, and marine recreation safety.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Junglia Theme Park:</strong> The &yen;70 billion ($453M) nature theme park in Nakijin Village continues expanding; new attraction &ldquo;Yambaru Tornado&rdquo; opened April 29. <strong>Shuri Castle</strong> exterior restoration complete; interior finishing expected by autumn 2026, with completion ceremony scheduled November 22.
        </p>
      </div>
    </div>

    <!-- ===================== SECTION 6: WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Weather / Natural Hazards &mdash; June 29&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Rainy Season Ended June 29; Peak Typhoon Season Begins &mdash; 28 Storms Forecast for 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Rainy season ended:</strong> JMA declared tsuyu over for Okinawa on June 29 (8 days late). Clear, hot weather expected with daily highs of 84&ndash;90&deg;F (29&ndash;32&deg;C). <strong>No active tropical systems threatening Okinawa at this time.</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Recent storms:</strong> Typhoon Jangmi (Cat 1, June 1) passed 7 mi west of Kadena with 80 mph gusts; all bases entered TCCOR 1-Emergency. TS Mekkhala (June 25) passed 42 mi west of Kadena with 60 mph sustained winds. Both caused minimal base damage.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#127786;&#65039; Typhoon Season Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Weathernews forecasts <strong>~28 storms for 2026</strong> (above 25.1 avg), with ~14 expected to approach Japan (avg ~11.5). <strong>Okinawa faces peak typhoon risk July through September.</strong> June 8 tsunami advisory issued for Okinawa following M7.8 Philippines earthquake (waves up to 3 ft); Kadena directed personnel away from coast, evacuated students from Kinser Elementary and Lester Middle School.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Situational Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">12th MLR capability upgrade is the most significant development.</strong> The operational deployment of NMESIS, MADIS, and MRIC during Resolute Dragon 26 represents a generational leap in stand-in force capability along the first island chain. These systems give the MLR organic anti-ship, counter-UAS, and medium-range air defense capabilities it previously lacked &mdash; directly addressing the A2/AD challenge in a Taiwan contingency.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">31st MEU absence creates real risk.</strong> Okinawa&rsquo;s primary rapid-response amphibious force has been in the Middle East since March. The 11th MEU partial backfill does not fully compensate. Any Taiwan Strait or East China Sea escalation would find INDOPACOM&rsquo;s forward-deployed amphibious capability degraded.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&rsquo;s dual-carrier western Pacific operations and Senkaku incursions continue escalating.</strong> Japan&rsquo;s response &mdash; Taiwan Strait transits, SAM deployments to Yonaguni, and Nansei Chain exercises &mdash; signals a fundamentally more assertive posture under PM Takaichi. The September gubernatorial election could accelerate or complicate this trajectory.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Typhoon season is the immediate operational concern.</strong> With 28 storms forecast (above average) and peak risk July&ndash;September, base readiness and mission continuity planning are critical. Two storms have already tested TCCOR procedures this season.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Defense News &bull; The Maritime Executive &bull; Japan Times &bull; USNI News &bull; Kadena Air Base Public Affairs &bull; Foreign Policy &bull; US News &amp; World Report &bull; American Legion &bull; CGTN &bull; Travel and Tour World &bull; Breaking Travel News &bull; Focus on Travel News &bull; Tokyo Weekender &bull; Weathernews &bull; Japan Meteorological Agency
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute official intelligence reporting. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <span style="color: #7c3aed;">World Monitor</span> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

async function sendToRecipient(recipient) {
  const payload = JSON.stringify({
    from: 'World Monitor <onboarding@resend.dev>',
    to: [recipient],
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
    const lines = result.trim().split('\\n');
    const httpCode = lines.pop();
    const body = lines.join('\\n');

    if (!httpCode.startsWith('2')) {
      console.error(`[${recipient}] Resend API error ${httpCode}: ${body}`);
      return false;
    }

    const data = JSON.parse(body);
    console.log(`[${recipient}] Email sent successfully. Resend ID: ${data.id}`);
    return true;
  } catch (err) {
    console.error(`[${recipient}] Failed to send: ${err.message}`);
    return false;
  }
}

console.log(`Sending Okinawa briefing to ${RECIPIENTS.length} recipients...`);
console.log(`Date: ${today}\n`);

let successCount = 0;
for (const recipient of RECIPIENTS) {
  const ok = await sendToRecipient(recipient);
  if (ok) successCount++;
}

console.log(`\nResults: ${successCount}/${RECIPIENTS.length} emails sent successfully.`);

if (successCount === 0) {
  console.error('All sends failed.');
  process.exit(1);
}
