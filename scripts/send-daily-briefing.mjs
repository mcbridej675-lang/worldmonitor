#!/usr/bin/env node
/**
 * Daily Global Intelligence Briefing — Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 *
 * Or set RESEND_API_KEY in your .env file and run:
 *   node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  console.error('Usage: RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs');
  process.exit(1);
}

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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #4ade80; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">March 29, 2026</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa Situation Report</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Intelligence &bull; Government &bull; Financial</p>
    </div>

    <!-- Section 1: MILITARY / FORCE POSTURE -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. 31st MEU Deploys to Middle East &mdash; Indo-Pacific Gap Widens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          2,200+ Okinawa-based Marines from the 31st Marine Expeditionary Unit deployed aboard USS Tripoli (LHA-7) and USS New Orleans (LPD-18) to the Middle East as the US-Israel war on Iran enters its fourth week. The 31st MEU is the <strong>only permanently forward-deployed MEU in the Pacific</strong>, and its departure leaves a significant gap in US amphibious capability across the Indo-Pacific theater.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense analysts warn this redeployment &ldquo;gives Chinese military planners exactly what they want&rdquo; by reducing rapid-response capability near Taiwan. Retired Marine Col. Grant Newsham noted the Navy lacks enough amphibious ships to keep all MEUs operational simultaneously.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Reduced USMC presence on Okinawa increases burden on JSDF and allied forces for southwestern island defense. III MEF retains command presence at Camp Courtney but operational striking power is diminished. Watch for PLA activity in the Taiwan Strait and East China Sea during this window.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 2: DEFENSE MODERNIZATION -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Defense / Modernization</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. JSDF Okinawa Buildup: 15th Brigade to Division, Air Defense Shelters, Missile Upgrades</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>15th Brigade &rarr; 15th Division:</strong> The JGSDF is upgrading the Naha-based 15th Brigade to a full division in FY2026, adding an infantry regiment and a reconnaissance combat unit with Type 16 Mobile Combat Vehicles. This places the JSDF Okinawa commander at lieutenant general rank, matching the III MEF commander for closer coordination.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Naha Air Base Hardening:</strong> A $96M fighter aircraft shelter is being built at Naha Air Base to protect F-15J/DJ fighters from Chinese satellite reconnaissance. The shelter will make aircraft detection, identification, and counting impossible from orbit.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Missile Deployments:</strong> Japan deploying upgraded Type-12 missiles (1,000km+ range) starting 2026 and hypersonic glide vehicles (HVGP Block 1). Yonaguni Island &mdash; within sight of Taiwan &mdash; slated for Type-03 SAM deployment by 2031. China issued a sharp protest calling these deployments &ldquo;extremely dangerous.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan&rsquo;s record &yen;9T ($58B) defense budget for FY2026 (+9.4%) is driving rapid capability expansion across the Nansei Island chain. The Iwo Jima contingency basing concept signals planners are actively preparing for scenarios where Okinawa airfields are degraded by Chinese missile strikes.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 3: EXERCISES & OPERATIONS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Operations</span>
          <span style="color: #666; font-size: 11px;">Joint Exercises</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Iron Fist 26 Concludes &mdash; III MEF Sea-Denial Transformation Accelerates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Iron Fist 26</strong> (Feb 11 &ndash; Mar 9) was the largest iteration yet: ~5,000 personnel (2,000 JSDF + 3,000 USMC) training across 19 locations in the Nansei Islands. Exercises focused on amphibious landings, island seizure/defense, and town-clearing operations at Camp Hansen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>III MEF Transformation:</strong> Lt. Gen. Roger Turner confirmed the Okinawa-based force is shifting to a sea-denial posture with drones, anti-ship missiles, and deep integration with JSDF. New capabilities are being &ldquo;embedded into daily operations&rdquo; for power projection across air, sea, space, and cyberspace.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>GSDF Osprey Cancellation:</strong> GSDF cancelled its V-22 Osprey deployment to Okinawa for Iron Fist, citing local resident concerns. Okinawa Prefectural Government had formally urged the Defense Bureau not to use Ospreys in the prefecture.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Leadership Change:</strong> Brig. Gen. Ryan Hoyle assumed command of 3rd Marine Expeditionary Brigade at Camp Courtney, also serving as III MEF deputy commander.
        </p>
      </div>
    </div>

    <!-- Section 4: GOVERNMENT / POLITICAL -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Political</span>
          <span style="color: #666; font-size: 11px;">Government / Base Politics</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Futenma Runway Dispute, Gubernatorial Election, &amp; Henoko Tragedy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Futenma Runway Standoff:</strong> The Pentagon informed the GAO that MCAS Futenma will not be returned until Japan builds a runway meeting full operational requirements at Camp Schwab. The current V-shaped runway plan may be too short (vs. Futenma&rsquo;s 1.7-mile runway). Defense Minister Koizumi downplayed the issue, but analysts say the runway length dispute adds a new technical hurdle to the decades-long relocation saga.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Gubernatorial Election (Sep 13):</strong> The upcoming Okinawa gubernatorial election will shape Henoko policy and defense spending cadence. If Gov. Tamaki wins reelection, continued resistance to Henoko relocation is expected. Nago Mayor Toguchi won a third term, viewed as favorable to the relocation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Henoko Boat Tragedy (Mar 16):</strong> Two boats carrying 18 Kyoto high school students on a peace education trip capsized off Henoko, killing a 17-year-old student and a 71-year-old boat captain. A high-wave advisory was in effect. A Coast Guard patrol boat also capsized during the investigation. The Japan Coast Guard is investigating potential negligence charges.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Cost-Sharing Negotiations:</strong> The Special Measures Agreement (Japan&rsquo;s ~$1.9B annual contribution to US basing costs) expires at the end of FY2026, requiring renegotiation. Talks focus on redistribution rather than withdrawal, with some units moving to Guam/Australia while Kadena and Yokosuka are enhanced.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Legal:</strong> Japan&rsquo;s Supreme Court rejected the appeal of Kadena-based US airman Brennon Washington, finalizing a 5-year sentence for an assault in Okinawa.
        </p>
      </div>
    </div>

    <!-- Section 5: ECONOMIC / FINANCIAL -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #059669; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Financial</span>
          <span style="color: #666; font-size: 11px;">Economy / Tourism</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Okinawa Economy: Record Tourism, New Tax, Global Recognition</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Record Visitors:</strong> Okinawa is on track to exceed 10 million tourists for the first time in FY2025, with further growth in 2026. Expedia named Okinawa a &ldquo;Destination of the Year 2026&rdquo; after a 71% surge in search interest. The New York Times listed Okinawa in its &ldquo;52 Places to Go in 2026.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Accommodation Tax:</strong> Okinawa introduced Japan&rsquo;s first prefectural-level 2% accommodation tax in FY2026, capped at &yen;2,000/night, expected to generate &yen;7.8B annually for tourism infrastructure and environmental protection.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Economic Upgrade:</strong> Japan&rsquo;s Finance Ministry upgraded its economic assessment for Okinawa, citing improved personal consumption and tourism performance. The Junglia Okinawa theme park (opened Jul 2025) is driving additional visitor spending.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Risk Watch</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            S&amp;P Global warns Japan could enter recession due to Middle East energy crisis (Brent $108&ndash;114/bbl). Nikkei 225 down 5%. Oil price shock threatens Okinawa&rsquo;s tourism-dependent economy through higher transport costs and reduced consumer spending.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 6: SEISMIC ACTIVITY -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #666; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Monitor</span>
          <span style="color: #666; font-size: 11px;">Natural Hazards</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6. Seismic Activity Near Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Mar 28:</strong> M4.2 earthquake at 50km depth near Yonaguni Island. <strong>Mar 29:</strong> M5.1 earthquake at 10km depth near Amagi, Kagoshima (southern Kyushu). No tsunami warnings issued. No damage or casualties reported. Routine seismic activity for the region.
        </p>
      </div>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        UNCLASSIFIED // FOR OFFICIAL USE ONLY<br/>
        This briefing is compiled from open-source intelligence (OSINT) and is for informational purposes only.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #4ade80; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

async function send() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: 'World Monitor <noreply@worldmonitor.app>',
      to: RECIPIENTS,
      subject: '[WM Briefing] Okinawa Situation Report — March 29, 2026',
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
}

send().catch((err) => {
  console.error('Failed to send email:', err);
  process.exit(1);
});
