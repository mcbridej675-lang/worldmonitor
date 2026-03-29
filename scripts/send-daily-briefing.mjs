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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; Intelligence, Military &amp; Financial Update</p>
    </div>

    <!-- Item 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. 31st MEU Deploys to Middle East &mdash; Indo-Pacific Gap Emerges</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          2,200+ Marines from the Okinawa-based 31st Marine Expeditionary Unit and USS Tripoli (Sasebo) deployed to the Middle East as the US-Israel war on Iran enters its fourth week. The Tripoli carries F-35Bs, V-22 Ospreys, and helicopters as the command ship of a Marine Amphibious Ready Group. Iran continues to threaten the Strait of Hormuz, choking 20% of global oil supply.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong style="color: #f87171;">Key concern:</strong> The 31st MEU is the only permanently forward-deployed MEU in the Pacific. Defense analysts warn this leaves a significant gap in US power projection across the Indo-Pacific, increasing the burden on Japan&rsquo;s Self-Defense Forces and allied nations. Analysts assess Japan and Taiwan could hold for &ldquo;at least a few weeks&rdquo; in a contingency, but the gap is strategically consequential.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Reduced amphibious capability in INDOPACOM AOR. III MEF headquarters remains at Camp Courtney. Remaining Okinawa-based units continue training rotations, but rapid-response maritime capability is diminished until 31st MEU returns.
          </p>
        </div>
      </div>
    </div>

    <!-- Item 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Force Modernization</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. III MEF Evolves for Sea-Denial &mdash; Drones, Missiles &amp; Cyber Integration</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The III Marine Expeditionary Force in Okinawa is undergoing a significant transformation, shifting from traditional amphibious assault to a sea-denial and multi-domain force. Units are reorganizing with high-tech weapons, deeper integration with the Japan Self-Defense Forces, and capabilities spanning air, space, and cyberspace. The goal: project power not just from sea to land, but across all domains to counter emerging Indo-Pacific threats.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iron Fist 2026 (Feb 11 &ndash; Mar 9) saw ~800 Marines, 2,100 Navy sailors, and ~2,000 JGSDF/JMSDF personnel conduct amphibious landings and island defense drills. Notably, two Japanese V-22 Ospreys operated from US facilities on Okinawa for the first time.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Key Takeaway</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            US-Japan interoperability deepening. 3rd MEB change of command (Brig. Gen. Ryan Hoyle assumed command) positions the brigade ahead of continued Iron Fist integration. Japan&rsquo;s first Tomahawk missile deliveries expected by end of FY2025 (March 2026).
          </p>
        </div>
      </div>
    </div>

    <!-- Item 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Base Operations / Environment</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Kadena Air Base Diesel Spill &amp; Henoko Boat Tragedy Investigation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kadena (Mar 25):</strong> 575 gallons of diesel fuel spilled at Kadena Air Base due to equipment failure, affecting the stormwater system. The 18th Wing contained and cleaned up the spill. Stormwater from Kadena flows into the East China Sea and the Hija River. This adds to existing PFAS contamination concerns &mdash; USFJ previously denied Okinawa Prefecture&rsquo;s request to test water sources on US bases.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Henoko (Mar 16&ndash;20):</strong> Two boats capsized off the Henoko coast near the Camp Schwab relocation construction site, killing a 17-year-old Kyoto high school student and a boat captain. 21 people were aboard (18 students on a peace education trip). Japan Coast Guard searched the anti-base civic group&rsquo;s offices in Nago on Mar 20 as part of the investigation. The incident has intensified scrutiny of safety around the Henoko construction zone.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Local Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Both incidents fuel local opposition sentiment. The Henoko tragedy may affect public opinion ahead of the September 13 Okinawa gubernatorial election. Environmental advocacy groups are pressing for expanded PFAS and fuel contamination testing.
          </p>
        </div>
      </div>
    </div>

    <!-- Item 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Policy</span>
          <span style="color: #666; font-size: 11px;">Basing / Budget</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. US-Japan Base Negotiations &amp; Record &yen;9T Defense Budget</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s FY2026 defense budget hit a record &yen;9.04 trillion (~$58B), up 9.4% YoY &mdash; the 4th year of a 5-year plan to reach 2% of GDP. Key allocations include $3.67B for US Forces Japan projects (Futenma-to-Henoko relocation, Mageshima airfield), $6.2B for standoff missile capability including Type-12 surface-to-ship missiles (~1,000km range), and $1B for a next-gen fighter jet with UK/Italy.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US-Japan cost-sharing agreement (Host Nation Support) expires in FY2026, requiring renegotiation. Current talks focus on redistribution rather than withdrawal: ~9,000 Marines relocating from Okinawa to Guam/Hawaii/Australia while ~10,000 remain. Kadena Air Base and Yokosuka Naval Base are being enhanced. The Pentagon stated it will not return MCAS Futenma until a comparable runway is provided; the Henoko replacement facility won&rsquo;t be complete until at least 2033.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Strategic Context</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Atlantic Council warns moving Marines from Okinawa would undermine ability to counter China. PM Takaichi&rsquo;s stance that a Taiwan invasion threatens Japan has prompted Chinese state media to publish articles disputing Japan&rsquo;s claims to Okinawa and the Ryukyu Islands.
          </p>
        </div>
      </div>
    </div>

    <!-- Item 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Financial</span>
          <span style="color: #666; font-size: 11px;">Okinawa Economy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Okinawa Economic Outlook &amp; Regional Financial Developments</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Finance Ministry upgraded its economic assessment for Okinawa in January 2026, citing robust tourism and improved personal consumption. Despite Chinese government advisories discouraging travel to Japan, hotel operators report no significant impact. US military presence contributes an estimated $700M+ annually to Okinawa&rsquo;s economy (Kadena alone: ~20,000 Americans, 3,000+ Japanese employees).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Seismic activity:</strong> A 4.2-magnitude earthquake struck near Yonaguni, Okinawa on Mar 28 (50km depth). A 5.1-magnitude quake hit near Amagi, Kagoshima on Mar 29. No tsunami warnings issued; no damage reported.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Upcoming:</strong> Japan&rsquo;s electricity and gas subsidies expire in April 2026, raising utility costs for Okinawa residents and base-adjacent businesses. The national budget totals &yen;122.3T (~$785B), a second consecutive all-time high, with debt-servicing costs calculated at a 3% interest rate.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Snapshot</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Nikkei 225:</strong> &minus;5% amid Middle East crisis. S&amp;P Global warns Japan could enter recession.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Brent Crude:</strong> $108&ndash;114/bbl (was $72 pre-war). Direct impact on Okinawa fuel and logistics costs.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Defense stocks:</strong> LMT +40% YTD (ATH $676), RTX +68% 12mo, MHI.T (Mitsubishi Heavy) elevated on Japan defense spending surge.
          </p>
        </div>
      </div>
    </div>

    <!-- Upcoming Watch Items -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Watch Items</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">31st MEU Return</td>
          <td style="padding: 6px 8px; color: #ccc; text-align: right;">TBD &mdash; dependent on Hormuz situation</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">HNS Renegotiation</td>
          <td style="padding: 6px 8px; color: #ccc; text-align: right;">Current agreement expires FY2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Okinawa Gov. Election</td>
          <td style="padding: 6px 8px; color: #ccc; text-align: right;">September 13, 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">China/Ryukyu Claims</td>
          <td style="padding: 6px 8px; color: #ccc; text-align: right;">Ongoing info ops targeting Okinawa sovereignty</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Utility Subsidy Expiry</td>
          <td style="padding: 6px 8px; color: #ccc; text-align: right;">April 1, 2026 &mdash; higher energy costs</td>
        </tr>
      </table>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is compiled from open-source intelligence and is for informational purposes only.<br/>
        Sources include Japan Times, Stars &amp; Stripes, Military.com, Nikkei, USNI News, and official DOD/GOJ releases.
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
      subject: `[WM Briefing] Okinawa Intelligence Update — March 29, 2026`,
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
