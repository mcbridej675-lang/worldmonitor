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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Security &bull; Environment</p>
    </div>

    <!-- ===================== ITEM 1: KAIJU RAIN 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MILITARY</span>
          <span style="color: #666; font-size: 11px;">Exercise &mdash; Active Through May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Kaiju Rain 26: III MIG Conducts Major Information Warfare Exercise Across Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>1,000 Marines and Sailors</strong> from <strong>III Marine Expeditionary Force Information Group (III MIG)</strong> are conducting <strong>Exercise Kaiju Rain 26</strong> across multiple locations in Japan, with primary operations at <strong>Camp Hansen, Okinawa</strong> and <strong>Ie Shima Auxiliary Airfield</strong>. The exercise runs <strong>May 1&ndash;31, 2026</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Key capabilities being exercised:</strong> The 5th Air Naval Gunfire Liaison Company (ANGLICO) is deploying <strong>Skydio X2D drones</strong> (3.5-mile range, 16x digital zoom) to identify enemy vessels around Ie Shima. The <strong>7th Communication Battalion</strong> is establishing distributed command posts under contested conditions. The <strong>3rd Radio Battalion</strong> is employing <strong>powered paragliders</strong> with 100-mile range for insertion/extraction without air support. Training also includes <strong>cyber defense, electronic warfare, live-fire events,</strong> and <strong>intelligence sensor integration</strong> with Japan Self-Defense Force counterparts.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Assessment:</strong> Kaiju Rain 26 builds on the inaugural 2025 iteration and represents a significant advance in III MIG&rsquo;s ability to integrate multi-domain information capabilities. The exercise is directly relevant to the Marine Corps&rsquo; Force Design strategy emphasizing dispersed, mobile operations on islands within enemy missile range &mdash; a clear signal toward Taiwan contingency preparedness.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 2: TRUMP-XI SUMMIT & TAIWAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">GEOPOLITICS</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific Impact &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Summit: Xi Warns Taiwan Mishandling Risks &ldquo;Conflict&rdquo; &mdash; Direct Implications for Okinawa Force Posture</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          During the two-day Beijing summit, President Xi Jinping issued his sharpest Taiwan rhetoric to date, warning that mishandling the Taiwan issue could lead to &ldquo;collision or conflict&rdquo; and calling it &ldquo;the most important issue in U.S.-China relations.&rdquo; Both leaders agreed the <strong>Strait of Hormuz must remain open</strong> and discussed trade, agriculture, and fentanyl precursors.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Okinawa Relevance:</strong> Any escalation over Taiwan would place Okinawa-based forces at the epicenter of the U.S. response. The <strong>III MEF at Camp Courtney</strong>, <strong>Kadena Air Base (18th Wing)</strong>, and <strong>MCAS Futenma</strong> are all within the first island chain. Xi&rsquo;s rhetoric underscores why Kaiju Rain 26&rsquo;s information warfare rehearsals and the Marine Littoral Regiment transformation are being accelerated. The summit also comes as the <strong>U.S.&ndash;Japan cost-sharing agreement for bases expires in FY2026</strong>, with renegotiations underway.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 3: MARINES TO MIDDLE EAST ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MILITARY</span>
          <span style="color: #666; font-size: 11px;">Force Readiness &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2,200+ Okinawa-Based Marines Deployed to Middle East; Force Posture Impact on Island</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than <strong>2,200 Marines</strong> from Okinawa-based units were deployed to the Middle East beginning in March 2026 in response to the ongoing Iran crisis. This represents a significant drawdown of island-based combat power at a time of heightened Indo-Pacific tensions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Assessment:</strong> The deployment creates a temporary readiness gap for III MEF&rsquo;s ability to respond to a Taiwan or Korean Peninsula contingency. While rotation forces may backfill, the simultaneous demand signals from the Middle East and Indo-Pacific continue to strain the Marine Corps&rsquo; global force management. The Iran ceasefire remains fragile &mdash; Trump called Tehran&rsquo;s counter-proposal &ldquo;garbage&rdquo; &mdash; meaning these Marines may remain deployed for an extended period.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 4: AI TRAINING MANDATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MILITARY</span>
          <span style="color: #666; font-size: 11px;">Training &amp; Modernization &mdash; May 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Corps Mandates Servicewide AI Training by Year&rsquo;s End &mdash; All Okinawa-Based Personnel Affected</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As of May 13, the Marine Corps requires <strong>all active duty, reserve, officer, and enlisted Marines</strong> to complete a <strong>45-minute artificial intelligence course</strong> via the Marine Corps eLearning Ecosystem (MCeLE) by <strong>December 31, 2026</strong>. The course covers AI fundamentals, practical applications, and responsible use guidelines, including familiarization with <strong>Google Gemini, OpenAI ChatGPT, and xAI Grok</strong> through the DoD&rsquo;s <strong>GenAI.mil platform</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Okinawa Impact:</strong> This mandate applies to all personnel across Camp Foster, Camp Hansen, Camp Kinser, Camp Courtney, Camp Schwab, MCAS Futenma, and MCBJ Camp Butler. Intermediate and advanced AI courses are under development for later in the fiscal year. The training supports broader DoD efforts to integrate AI across operational planning and decision-making.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 5: PFAS CONTAMINATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">ENVIRONMENT</span>
          <span style="color: #666; font-size: 11px;">Public Health / Base Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS &ldquo;Forever Chemical&rdquo; Contamination: Record Levels Near Kadena &amp; Futenma; U.S. Military Denies Base Access</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey found PFAS contamination exceeding Japan&rsquo;s water quality standard (50 ppt) at <strong>31 of 44 sampling sites</strong> around U.S. bases. The highest level &mdash; <strong>2,800 parts per trillion (56x the national standard)</strong> &mdash; was recorded at Yara Hijaga in Kadena town, downstream of <strong>Kadena Air Base</strong>. Elevated levels were also found near <strong>MCAS Futenma, Camp Hansen, Camps Courtney and McTureous, and Camp Foster</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Unidentified foam appearing near U.S. bases has heightened PFAS concerns. The Okinawa prefectural government and civic groups have requested <strong>on-base water sampling access four times since 2016</strong>; USFJ has denied all requests, stating the evidence linking bases to contamination is &ldquo;insufficient.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Assessment:</strong> PFAS is the most politically charged environmental issue affecting U.S.-Okinawa base relations. Continued denial of access fuels local opposition and plays into Governor Tamaki&rsquo;s anti-base platform ahead of his expected third-term campaign. This issue risks becoming a wedge in the broader U.S.-Japan alliance at a critical time.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 6: GOVERNOR TAMAKI & FUTENMA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">GOVERNMENT</span>
          <span style="color: #666; font-size: 11px;">Okinawa Politics &mdash; April&ndash;May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid; Futenma Return Still Unresolved After 30 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> announced on April 25 that he will seek a <strong>third term</strong>, with his campaign expected to center on the <strong>early return of MCAS Futenma</strong> in Ginowan. This comes as the 30th anniversary of the original U.S.-Japan agreement to relocate Futenma passed in April with <strong>no concrete return date in sight</strong>. Strong local opposition to the Henoko relocation plan in Nago continues to block progress.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Okinawa Prefectural Assembly</strong> held a special session on May 13, unanimously approving a resolution related to the <strong>50th anniversary of Okinawa&rsquo;s reversion to Japan</strong> (which was in 1972).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Assessment:</strong> Tamaki&rsquo;s reelection campaign will intensify scrutiny on PFAS, Futenma, and the broader U.S. military footprint. The Henoko land reclamation project &mdash; the planned alternative site for Futenma &mdash; remains mired in legal battles and local resistance. Expect increased political friction through the gubernatorial election cycle.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 7: FINANCIAL / FX ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #059669; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">FINANCIAL</span>
          <span style="color: #666; font-size: 11px;">Markets &amp; Economy &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Weakens to 157.9/USD; Finance Ministry Upgraded Okinawa Economic Assessment; BOJ Holds</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>USD/JPY rose to 157.91</strong> on May 14, extending yen losses as the dollar strengthened on Iran ceasefire uncertainty and elevated U.S. inflation (3.8%). Japan&rsquo;s Finance Minister <strong>Satsuki Katayama</strong> met with U.S. Treasury Secretary <strong>Scott Bessent</strong>, reiterating close coordination on currency policy. Tokyo is suspected to have spent <strong>over $63 billion</strong> in FX intervention to support the yen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Nikkei 225 fell 0.98%</strong> on the session. New Fed Chair <strong>Kevin Warsh</strong> was confirmed in a <strong>54&ndash;45 vote</strong>; markets price a <strong>97% chance rates hold at 3.50&ndash;3.75%</strong> through 2026, maintaining pressure on the BOJ&rsquo;s rate differential calculus.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Okinawa Economy:</strong> The Finance Ministry upgraded its economic assessment for <strong>Hokuriku and Okinawa</strong> in January 2026, citing strong tourism recovery. <strong>Naha Airport</strong> is set to partially reopen international routes in June, lifting a two-year tourism restriction &mdash; a significant boost for the island&rsquo;s tourism-dependent economy. Okinawa&rsquo;s economy remains on an expansion trend per the BOJ&rsquo;s July 2025 regional assessment.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 8: WEATHER / NATURAL HAZARDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #666; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WEATHER</span>
          <span style="color: #666; font-size: 11px;">Natural Hazards &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Season Approaching; Rainy Season Underway; Magnitude 3.1 Earthquake Near Iriomote Jima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon No. 5</strong> formed near the Caroline Islands around May 6. Okinawa&rsquo;s rainy season (<em>tsuyu</em>) is underway, with conditions expected to remain <strong>relatively calm through late May</strong> due to high pressure in the south of Japan. Cloudy and rainy days are expected to increase from June onward. Peak typhoon season runs <strong>June through October</strong>, with the heaviest storms typically in August&ndash;September.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          A <strong>magnitude 3.1 earthquake</strong> struck the East China Sea on May 10, approximately 10 km northeast of Iriomote Jima Island in southern Okinawa Prefecture. No tsunami warning was issued and no damage was reported. TCCOR conditions remain normal across all Okinawa installations.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa sits at the intersection of three converging pressures.</strong> Xi&rsquo;s escalating Taiwan rhetoric at the Beijing summit underscores the strategic importance of Okinawa-based forces, yet 2,200+ Marines have been diverted to the Middle East, creating a readiness gap. Simultaneously, the largest III MIG information warfare exercise (Kaiju Rain 26) is actively rehearsing the exact capabilities needed for a first island chain contingency.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, friction is building.</strong> Governor Tamaki&rsquo;s third-term campaign will amplify opposition to the U.S. military presence. The PFAS contamination issue (56x national standards near Kadena) and the 30-year Futenma stalemate provide potent ammunition. The base cost-sharing agreement expires this fiscal year, adding another negotiating pressure point.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi summit Day 2 outcomes on Taiwan &bull; Kaiju Rain 26 final exercise phase &bull; Iran ceasefire status (affects Okinawa Marine deployments) &bull; USD/JPY movement toward 160 threshold &bull; Naha Airport international reopening timeline &bull; Prefectural Assembly follow-up on reversion anniversary resolution &bull; Typhoon No. 5 tracking &bull; PFAS advocacy group next steps
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        DVIDSHUB &bull; Marine Corps Times &bull; Stars and Stripes &bull; The Japan Times &bull; Ryukyu Shimpo &bull; Defense News &bull; CNBC &bull; Reuters &bull; Military.com &bull; USNI News &bull; Atlantic Council &bull; Bank of Japan &bull; Trading Economics &bull; Japan Meteorological Agency &bull; Volcano Discovery &bull; III MEF Public Affairs
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
