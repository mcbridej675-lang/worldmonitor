#!/usr/bin/env node
/**
 * Okinawa Intelligence Briefing — Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
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
  <div style="background: linear-gradient(90deg, #4ade80, #22d3ee); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #4ade80;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #4ade80; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
    </div>

    <!-- SECTION: MILITARY & DEFENSE -->
    <div style="margin-bottom: 8px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Military &amp; Defense</p>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. 31st MEU (2,200+ Marines) Deployed from Okinawa to Middle East &mdash; Indo-Pacific Gap Emerges</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 2,200-strong 31st Marine Expeditionary Unit, the only permanently forward-deployed MEU in the Pacific, has been ordered from Okinawa to the Middle East as the US-Israel war against Iran enters its second month. The 31st MEU and USS Tripoli (LHA-7) amphibious assault ship, homeported in Sasebo, were conducting exercises near the Philippines before receiving orders. USS New Orleans (LPD-18) is also deploying.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong style="color: #f87171;">Key Concern:</strong> Defense analysts warn this creates a significant gap in US power projection across the Indo-Pacific. The 31st MEU is one of only seven MEUs and the sole permanently deployed Pacific unit. A retired Marine colonel noted the Navy &ldquo;doesn&rsquo;t have enough amphibious ships in working order to keep enough MEUs fully operational.&rdquo; Amphibious warship readiness is below 50%.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22d3ee; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px; font-weight: 700;">Implications for Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Reduced rapid-response capability in the First Island Chain. Increased defense burden shifts to JSDF and remaining III MEF assets. China and North Korea may perceive a window of reduced deterrence.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Local Protest</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Okinawa Assembly Protests Marine Helicopter Emergency Landing on Baseball Field</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Okinawa Prefectural Assembly has drafted a formal protest letter to the US military and Japanese government over a Marine Corps helicopter&rsquo;s precautionary landing that forced a youth baseball team to flee a practice field. The Assembly is demanding the US military disclose the cause of the incident and implement measures to ensure &ldquo;the safety of local residents.&rdquo; This follows ongoing friction over parachute training at Kadena (9 events in 2025) that Governor Tamaki has called unjustified.
        </p>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Japan-Wide / Defense</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Japan Deploys Type-12 Missiles Tomorrow (Mar 31) &mdash; Tomahawk-Armed Destroyer Operational</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s upgraded Type-12 surface-to-ship missile deploys March 31 to Camp Kengun on Kyushu. Range increased from ~62 miles to ~620 miles &mdash; capable of reaching China&rsquo;s coastline and North Korea from Kyushu. Separately, the Aegis destroyer <em>Chokai</em> has completed Tomahawk modifications and crew training in the US, becoming the first JMSDF vessel with Tomahawk launch capability. Japan received its first Tomahawk missiles in March 2026 under a $2.35B FMS deal.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          F-35A Lightning II aircraft have also arrived at Misawa Air Base for permanent stationing, marking the 13th Fighter Squadron&rsquo;s transition to fifth-generation airpower. FY2026 defense budget is up 9.4% &mdash; the fourth year of Japan&rsquo;s plan to reach 2% GDP spending by FY2027.
        </p>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Modernization</span>
          <span style="color: #666; font-size: 11px;">III MEF / Force Design</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. III MEF Evolving for Sea-Denial &mdash; F-15EX Kadena Transition Delayed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          III MEF chief Lt. Gen. Roger Turner confirmed Okinawa-based Marines are reorganizing for a sea-denial role with drones, missiles, and deeper JSDF integration. The 12th Marine Littoral Regiment continues standup under Force Design 2030. Meanwhile, permanent stationing of 36 F-15EX &ldquo;Eagle II&rdquo; fighters at Kadena Air Base (replacing 48 aging F-15C/Ds) is delayed due to a Boeing St. Louis plant strike (Aug&ndash;Nov 2025). Japan is also studying expansion of military facilities on Iwo Jima as a hedge against Okinawa&rsquo;s vulnerability to Chinese missiles.
        </p>
      </div>
    </div>

    <!-- SECTION: ENVIRONMENTAL & PUBLIC HEALTH -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Environmental &amp; Public Health</p>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Kadena / Futenma</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. PFAS Contamination Hits Record Levels Near Kadena &amp; Futenma &mdash; 56x National Standard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey (released Mar 27) found PFAS levels exceeding Japan&rsquo;s 50 ppt standard at <strong>31 of 44 sampling sites</strong> around US bases. The highest reading &mdash; <strong>2,800 ppt (56x the national standard)</strong> &mdash; was recorded at Yara Hijaga in Kadena town, downstream from Kadena Air Base. Elevated levels found at 12 spots around Kadena and 13 near MCAS Futenma. Unidentified white foam has also been appearing from maintenance holes near US facilities, raising further PFAS concerns. US Forces Japan denied a prefectural request to test on-base water sources.
        </p>
      </div>
    </div>

    <!-- Event 6 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Environment</span>
          <span style="color: #666; font-size: 11px;">Kadena Air Base</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6. Kadena Air Base Diesel Fuel Spill &mdash; 575 Gallons Recovered</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 18th Wing recovered 575 gallons of diesel fuel that spilled at Kadena Air Base on March 25 due to equipment failure. The spill &ldquo;affected&rdquo; the base&rsquo;s stormwater system, which flows into the East China Sea and Hija River. Kadena town was notified through the Okinawa Defense Bureau the following evening; Okinawa city (which borders the base) had received no notification as of Thursday morning. Cleanup has been completed.
        </p>
      </div>
    </div>

    <!-- SECTION: GOVERNMENT & POLITICAL -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Government &amp; Political</p>
    </div>

    <!-- Event 7 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Political</span>
          <span style="color: #666; font-size: 11px;">Okinawa Prefecture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">7. Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base Platform</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor Denny Tamaki, 66, officially announced his candidacy for a third term at a press conference in Naha on March 28. His platform centers on seeking the early return of MCAS Futenma in Ginowan and continued opposition to the Henoko relocation plan. Tamaki retains support from the &ldquo;All Okinawa&rdquo; coalition. The gubernatorial election is scheduled for September 13, 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Meanwhile, the Futenma relocation remains contentious: the US DoD has stated it will <strong>not return the Futenma site</strong> unless a long runway (~2,700m equivalent) is secured at Henoko, where the planned V-shaped runways are only ~1,800m each. Defense Minister Koizumi pledged to reduce the US military footprint during his January visit to Okinawa.
        </p>
      </div>
    </div>

    <!-- Event 8 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Legal</span>
          <span style="color: #666; font-size: 11px;">SOFA / Criminal Cases</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">8. Two US Service Member Criminal Cases Finalized in Okinawa Courts</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          A seven-year prison term was finalized for USMC Lance Cpl. Jamel Clayton in an Okinawa sexual assault case after both sides waived the right to appeal. Separately, Japan&rsquo;s Supreme Court rejected the appeal of Kadena-based USAF airman Brennon Washington, 26, finalizing a five-year sentence in an assault case. These cases continue to fuel local opposition to the US military presence and raise questions about SOFA accountability.
        </p>
      </div>
    </div>

    <!-- SECTION: FINANCIAL & ECONOMIC -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Financial &amp; Economic</p>
    </div>

    <!-- Event 9 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Economy</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Japan</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">9. Japan MOF Upgrades Okinawa Economic Outlook &mdash; Tourism &amp; Consumption Rising</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Ministry of Finance upgraded its economic assessment for Okinawa, citing improved tourism and personal consumption. Despite Chinese government advisories discouraging group travel to Japan, hotel industry officials report no significant impact on Okinawa&rsquo;s tourism sector. Japan expects ~45 million foreign visitors in 2026 with inbound consumption reaching &yen;8 trillion.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Broader Japan outlook: GDP growth forecast at +0.8% (Goldman Sachs / Daiwa). Spring wage negotiations (shunto) targeting 5.0% hikes. BOJ expected to continue rate tightening. The US-Japan base cost-sharing agreement expires in FY2026, requiring renegotiation &mdash; outcomes will directly affect Okinawa base economics and local employment.
        </p>
      </div>
    </div>

    <!-- SECTION: SEISMIC ACTIVITY -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Seismic Activity</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">10. M5.1 Earthquake Near Okinawa &mdash; No Tsunami Warning</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          A magnitude 5.1 earthquake struck near Taira, Okinawa at 01:12 UTC on March 30 at a depth of 10.0 km. A separate M5.1 quake hit near Amagi, Kagoshima on March 29 (depth 10.0 km), and an M4.2 quake occurred near Yonakuni, Okinawa on March 28 (depth 50.0 km). No tsunami warnings were issued. No reports of damage to US military installations.
        </p>
      </div>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Naval News &bull; Military.com &bull; Defense News &bull;
        South China Morning Post &bull; Air &amp; Space Forces Magazine &bull; Nippon.com &bull;
        USNI Proceedings &bull; Congressional Research Service &bull; DVIDSHUB &bull; Earthquake Track
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not investment advice.<br/>
        Sources verified as of ${today}. Always verify critical intelligence through official channels.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #4ade80; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

async function send() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + RESEND_KEY,
    },
    body: JSON.stringify({
      from: 'World Monitor <noreply@worldmonitor.app>',
      to: RECIPIENTS,
      subject: '[WM Briefing] Okinawa Intelligence Summary — ' + today,
      html,
    }),
    signal: controller.signal,
  });
  clearTimeout(timeout);

  if (!res.ok) {
    const body = await res.text();
    console.error('Resend API error ' + res.status + ': ' + body);
    process.exit(1);
  }

  const data = await res.json();
  console.log('Email sent successfully to ' + RECIPIENTS.length + ' recipients:');
  RECIPIENTS.forEach(r => console.log('  - ' + r));
  console.log('Resend ID:', data.id);
}

send().catch((err) => {
  console.error('Failed to send email:', err);
  process.exit(1);
});
