#!/usr/bin/env node
/**
 * Okinawa Regional Intelligence Briefing — Email Sender
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
  <div style="background: linear-gradient(90deg, #dc2626, #ffffff); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #dc2626;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. 31st MEU Deployed to Middle East &mdash; Indo-Pacific Gap Widens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than 2,200 Marines from the Okinawa-based 31st Marine Expeditionary Unit and the amphibious assault ship USS Tripoli (homeported in Sasebo) have been ordered to the Middle East as the US-Israel campaign against Iran enters its fifth week. Defense Secretary Hegseth approved the deployment to reinforce forces managing the Strait of Hormuz crisis.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The 31st MEU is the <strong>only permanently forward-deployed MEU in the Pacific</strong>. Defense analysts warn this creates a significant gap in Indo-Pacific power projection and increases the defense burden on Japan and regional allies. Retired Marine Col. Grant Newsham noted the Navy &ldquo;doesn&rsquo;t have enough amphibious ships in working order to keep enough MEUs fully operational.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Operational Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Reduced rapid-response capability in the First Island Chain. Japan Self-Defense Forces absorb increased burden for Taiwan contingency readiness. Experts calling for halt to planned Marine pullback from Okinawa under DPRI as China threat timeline approaches 2027.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Defense / Missiles</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Japan Deploys First Long-Range Strike Missiles &mdash; Type 25 SSM &amp; HGP Operational</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On March 31, Japan deployed its first long-range missiles at Camp Kengun (Kumamoto Prefecture) and Camp Fuji (Shizuoka Prefecture). The upgraded Type-12 missiles, built by Mitsubishi Heavy Industries and formally redesignated as &ldquo;Type 25 Surface-to-Ship Guided Missile (25SSM),&rdquo; have a range of ~1,000 km (620 mi) &mdash; up from the original 200 km &mdash; capable of reaching mainland China.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A hypersonic glide vehicle (&ldquo;Type 25 Hyper Velocity Gliding Projectile&rdquo;) was simultaneously deployed at Camp Fuji for island defense. Defense Minister Koizumi stated this is &ldquo;an extremely important capability to strengthen Japan&rsquo;s deterrence and responsiveness.&rdquo; Japan also received its first US-made Tomahawk cruise missiles in March, with integration planned on JS Chokai and seven other destroyers.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            First time Japan has operational counterstrike capability. Additional deployments planned for Hokkaido and Miyazaki by March 2028. Local protests in Kumamoto over lack of prior notification. China expected to respond with increased military activity around southwestern islands near Taiwan.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Environmental / PFAS</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. PFAS Contamination at Record Levels Near Kadena &amp; Futenma &mdash; USFJ Denies Base Access</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa prefecture&rsquo;s annual groundwater survey (released March 27) found the highest PFAS (&ldquo;forever chemicals&rdquo;) contamination levels in a decade. The worst reading &mdash; 2,800 parts per trillion, <strong>56 times the national standard</strong> &mdash; was recorded at Yara Hijaga in Kadena town, downstream from Kadena Air Base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Elevated PFAS levels were found at 12 sites around Kadena AB, 13 sites near MCAS Futenma, plus sites near Camp Hansen, Camps Courtney/McTureous, and Camp Foster. USFJ denied the prefecture&rsquo;s December request for on-base water sampling, stating evidence of base-sourced contamination was &ldquo;insufficient.&rdquo; Unidentified foam spotted near bases has intensified local concern.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Community Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Growing political friction between Okinawa prefecture and USFJ. Civic groups demanding on-site base investigations. Issue could escalate during upcoming cost-sharing agreement renegotiations and Governor Tamaki&rsquo;s expected third-term campaign focused on base returns.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Force Structure / Basing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Base Negotiations &amp; Force Realignment &mdash; F-15EX Delays, DPRI Under Review</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US-Japan Host Nation Support cost-sharing agreement expires at the end of FY2026, requiring renegotiation now. Japan&rsquo;s contributions are among the most generous globally. Talks focus on redistribution rather than withdrawal &mdash; relocating some Marine units to Guam/Australia while enhancing capabilities at Kadena AB and Yokosuka Naval Base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Air Force has delayed permanent F-15EX Eagle II deployment to Kadena (reported Feb 2026) due to Boeing production issues. Meanwhile, experts argue the DPRI plan to shift ~10,000 Marines from Okinawa should be halted given the 2027 China/Taiwan timeline. The 12th Marine Littoral Regiment&rsquo;s 12th Littoral Anti-Air Battalion unveiled new facilities at Camp Hansen on March 6.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Key Watchpoints</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Cost-sharing renegotiation timeline. F-15EX arrival schedule at Kadena. DPRI review amid shifting threat posture. III MEF sea-denial transformation with drones, missiles, and deeper JSDF integration under Lt. Gen. Roger Turner.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Government</span>
          <span style="color: #666; font-size: 11px;">Political / Legal / Financial</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Political &amp; Financial Developments &mdash; Budget, Legal Cases, Governor Race</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Defense Budget:</strong> Japan&rsquo;s FY2026 defense budget is a record &yen;8.7 trillion (~$58B), up 9.4% YoY &mdash; the fourth year of a five-year plan to reach 2% of GDP, making Japan the world&rsquo;s third-largest defense spender. The overall national budget hit a record &yen;122.3 trillion.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa Development:</strong> State development funds for Okinawa rise to &yen;264.7B (first increase in 10 years), but still below the &yen;300B requested by the prefecture. Finance Ministry upgraded Okinawa&rsquo;s economic assessment citing tourism and consumption growth.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Legal:</strong> Japan&rsquo;s Supreme Court rejected appeal by Kadena-based US airman Brennon Washington, finalizing a 5-year prison sentence for assault. A 7-year sentence was separately finalized for a US Marine in an Okinawa sexual assault case. These cases continue to fuel local anti-base sentiment.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Politics:</strong> Governor Denny Tamaki is expected to seek a third term, with his campaign focused on early return of MCAS Futenma in Ginowan. Defense Minister Koizumi pledged to reduce the US military footprint during his January visit to Okinawa.
        </p>
      </div>
    </div>

    <!-- Event 6 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Training</span>
          <span style="color: #666; font-size: 11px;">Exercises / Readiness</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6. Recent Exercises &mdash; Iron Fist, Stormbreaker 26.2</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Iron Fist (Feb 11 &ndash; Mar 9):</strong> ~800 US Marines, ~2,100 Navy sailors, and ~2,000 JGSDF/JMSDF personnel conducted amphibious landing and urban seizure training at Camp Hansen. The exercise focused on jointly defending island territories east of Taiwan. Expanded to more island training sites this year.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Stormbreaker 26.2 (Mar 11&ndash;16):</strong> 7th Communication Battalion, III MEF Information Group, concluded communications exercise at Camp Hansen, enhancing austere-environment operations and III MEF readiness across the Indo-Pacific.
        </p>
      </div>
    </div>

    <!-- Seismic Activity -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Seismic Activity &mdash; Okinawa Region</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        Minor seismic activity recorded near Okinawa over the past 48 hours. Two light earthquakes (M3.1 and M3.4) occurred northwest of Okinawa Island on March 29. The strongest quake near Okinawa in March 2026 was a M4.7 in the Philippine Sea on March 20. No tsunami warnings or significant structural impacts reported. Normal background seismicity for the region.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Military.com &bull; Naval News &bull; The Diplomat &bull; Defense News &bull; CRS Reports (Congress.gov) &bull; Military Times &bull; NHK &bull; Japan Today &bull; DVIDSHUB &bull; Nippon.com &bull; Al Jazeera &bull; PBS News
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #dc2626; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
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
      from: 'World Monitor <onboarding@resend.dev>',
      to: RECIPIENTS,
      subject: `[WM Briefing] Okinawa Regional Intelligence — ${today}`,
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
