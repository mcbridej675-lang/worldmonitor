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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== 1: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / USMC / JSDF &mdash; May 17&ndash;22 (ACTIVE)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">First-Ever JSDF&ndash;USMC Joint Exercise Underway on Nansei Islands Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> is currently conducting a <strong>first-of-its-kind military exercise</strong> on the Nansei (Ryukyu) island chain, running <strong>May 17&ndash;22</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies are practicing troop deployment and supply transport across <strong>Ishigaki, Yonaguni, and Miyakojima</strong> &mdash; Japan&rsquo;s closest inhabited islands to Taiwan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 U.S. Marines from the 12th Marine Littoral Regiment</strong> (based on Okinawa) are participating in command post training on Miyakojima, where the two forces have established the <strong>first-ever bilateral communication and coordination center</strong> on the island. This is the first time JGSDF&rsquo;s highest operational command has focused training specifically on the Nansei Islands. The exercise is designed to improve deterrence and rapid response capability in the region, signalling growing U.S.&ndash;Japan operational integration in the Taiwan contingency corridor.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Represents a major milestone in U.S.&ndash;Japan force integration south of Okinawa. The 12th MLR&rsquo;s participation validates the Marine Littoral Regiment concept in a real-world island-chain environment. Beijing will view this as rehearsal for a Taiwan intervention scenario. Expect Chinese diplomatic protest and potential PLAN/CCG activity increase around Senkaku/Diaoyu Islands in response.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 2: CHINA-JAPAN CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / China&ndash;Japan / Taiwan Strait &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&ndash;Japan Diplomatic Crisis Deepens; Foreign Policy Warns Military Clash &ldquo;Dangerously Likely&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The ongoing <strong>2025&ndash;2026 China&ndash;Japan diplomatic crisis</strong> continues to escalate with direct implications for Okinawa. <em>Foreign Policy</em> published an analysis warning a Japan&ndash;China military clash is &ldquo;dangerously likely,&rdquo; citing the <strong>Senkaku/Diaoyu Islands, Taiwan Strait, and Okinawa&rsquo;s southwestern waters</strong> as high-risk zones. The crisis was triggered by PM <strong>Takaichi&rsquo;s unprecedented statement</strong> that Japan could come to Taiwan&rsquo;s defense if China attacked.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China has responded with sweeping retaliatory measures: <strong>travel advisories, restricted cultural exchanges, seafood import bans, and export controls on dual-use items and rare earth materials</strong> critical to Japan&rsquo;s defense industry. Japan&rsquo;s 2026 Diplomatic Bluebook has <strong>downgraded China&rsquo;s status</strong> from &ldquo;one of the most important neighbouring countries&rdquo; to simply &ldquo;an important neighbour.&rdquo; Chinese Coast Guard vessels have been present in Senkaku contiguous waters <strong>virtually every day</strong> since 2024 (355 of 365 days in 2024). A dangerous close encounter, miscalculation, or overreaction by a lower-level commander could push both sides across the conflict threshold.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact on Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Okinawa sits at the epicentre of any Taiwan contingency. Kadena AB, Camp Foster, MCAS Futenma, Camp Schwab, and other installations would be frontline assets. Rare earth export restrictions affect Japanese defense manufacturing. The Chinese seafood import ban impacts Okinawan fishing communities. Expect elevated JSDF/USMC readiness posture across all Okinawa installations during the Nansei exercise window.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 3: MISSILE DEPLOYMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Defense / Force Posture / Okinawa Prefecture &mdash; May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Deploys Advanced Air Defense &amp; Electronic Warfare Systems Across Nansei Chain; Yonaguni 110 km from Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Under the 2026 defense budget, the JGSDF is <strong>stationing air defense units on Yonaguni Island</strong> &mdash; just <strong>110 km from Taiwan</strong> &mdash; equipped with <strong>Type 03 Kai surface-to-air missile systems, NEWS electronic warfare systems, and Type 24 directed-energy electronic warfare devices</strong>. This follows the 2023 opening of a <strong>missile base on Ishigaki</strong> housing Type-12 surface-to-ship missiles and Type-03 air defense missiles.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Additional air defense deployments are planned for <strong>Miyakojima, Amami Oshima,</strong> and multiple sites across the Okinawa main island (Okinawa City, Uruma, and Nanjo). The buildup creates a layered <strong>anti-access/area-denial (A2/AD) network</strong> stretching from Kyushu to within striking distance of Taiwan. Beijing has condemned the deployments as creating &ldquo;regional tension,&rdquo; while Japan&rsquo;s defense minister stated they would &ldquo;lower the chances of an armed attack.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is building a comprehensive island-chain defense network that transforms Okinawa Prefecture from a rear-area logistics hub into a forward-deployed combat zone. The combination of anti-ship missiles (Type-12), air defense (Type-03 Kai), and electronic warfare (NEWS/Type-24) creates layered deterrence. This fundamentally changes the threat calculus for any adversary considering operations in the East China Sea or Taiwan Strait.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 4: FUTENMA/HENOKO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / USMC / Government &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Stalled: U.S. Demands Longer Henoko Runway; Completion Pushed to 2033+</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The relocation of <strong>MCAS Futenma</strong> from Ginowan to Henoko (Nago) remains deeply contested. The <strong>U.S. Department of Defense</strong> has stated it <strong>will not return the Futenma site unless a longer runway is secured</strong> at the replacement facility. Futenma&rsquo;s existing runway is approximately <strong>2,700 meters</strong>; the planned Henoko V-shaped runways will be only <strong>~1,800 meters each</strong> &mdash; a shortfall the Pentagon considers operationally unacceptable.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Construction costs have ballooned to <strong>&yen;930 billion ($8.5 billion)</strong> with a <strong>12-year timeline pushing completion into the 2030s</strong>. Japan&rsquo;s government takes the delay &ldquo;seriously&rdquo; but maintains the Henoko plan is &ldquo;the only viable solution.&rdquo; Gov. <strong>Denny Tamaki</strong> continues to oppose the plan, and has <strong>announced his candidacy for a third term</strong> in the <strong>September 13 gubernatorial election</strong> on an anti-relocation platform. His challenger, <strong>Genta Koja</strong> (former Naha deputy mayor), is backed by the LDP and supports the relocation. Tamaki&rsquo;s coalition faces strain after the CDP&rsquo;s alliance with Komeito, which tolerates the relocation plan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September gubernatorial election is the next critical inflection point for the base issue. A Tamaki defeat would remove the primary political obstacle to the Henoko relocation. However, the Pentagon&rsquo;s runway demands introduce a new complication regardless of who wins &mdash; the current Henoko design may not satisfy U.S. operational requirements. The runway dispute could delay or fundamentally reshape the entire relocation plan.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== 5: FINANCIAL / ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Economic / Okinawa Prefecture &mdash; May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Bond Rout Hits JGBs; Okinawa Economy &ldquo;Recovering&rdquo; as Tourism Surges Past 10M Visitors</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The global bond sell-off is reverberating through Japan. <strong>Japanese Government Bonds (JGBs)</strong> are under bear-steepening pressure as high oil prices and yen weakness fuel inflation concerns. Japanese producer prices <strong>jumped by the most since 2014</strong> with input prices rising <strong>2.3% in April</strong> month-over-month. Japan is now <strong>procuring 70% of its June oil from outside the Middle East</strong> to mitigate Hormuz disruption risk. The OECD forecasts the BOJ&rsquo;s policy rate reaching <strong>2% by end-2027</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa&rsquo;s local economy presents a contrasting bright spot. The <strong>Finance Ministry upgraded Okinawa&rsquo;s economic outlook to &ldquo;recovering&rdquo;</strong> in January 2026, citing strong vehicle sales and surging tourism. Annual tourism revenue is expected to exceed <strong>&yen;1 trillion for the first time</strong>, with visitor numbers surpassing <strong>10 million</strong> &mdash; a new record. A <strong>2% prefectural accommodation tax</strong> took effect in April 2026, projected to generate <strong>&yen;7.8 billion annually</strong>. New attractions including the <strong>Junglia Okinawa theme park</strong> (opened July 2025) and the ongoing <strong>Shuri Castle restoration</strong> (completion fall 2026) are driving growth.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Economic Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks/instruments to watch:</strong> <strong>Nikkei 225</strong> &mdash; under pressure from global bond rout and yen volatility. <strong>USD/JPY</strong> &mdash; weak yen amplifies import costs; BOJ rate path critical. <strong>9501.T</strong> (Okinawa Electric Power) &mdash; exposed to elevated energy import costs. <strong>9201.T</strong> (JAL), <strong>9202.T</strong> (ANA) &mdash; Okinawa tourism surge benefits domestic carriers but fuel costs weigh. <strong>JGB 10-year</strong> &mdash; bear steepening risk if supplementary budget expands fiscal deficit. <strong>China-sensitive exporters</strong> &mdash; rare earth restrictions and trade retaliation hit Japanese manufacturers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is being rapidly transformed from a rear-area garrison into a forward-deployed deterrence line.</strong> The simultaneous Nansei Islands exercise, missile deployments on Yonaguni/Ishigaki/Miyako, and first-ever bilateral coordination center on Miyakojima signal that the U.S.&ndash;Japan alliance is operationalizing its Taiwan contingency posture in real time. The 12th MLR&rsquo;s integration with JGSDF Ground Component Command represents the most advanced U.S.&ndash;Japan military coordination in the island chain to date.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The China&ndash;Japan diplomatic crisis shows no sign of de-escalation.</strong> Beijing&rsquo;s rare earth export controls, near-daily Senkaku incursions, and retaliatory trade measures are the new normal. Any miscalculation in the increasingly crowded waters around the Nansei chain could trigger an uncontrolled escalation spiral.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Nansei exercise completion and Chinese response (May 22) &bull; Senkaku/Diaoyu CCG activity levels this week &bull; Futenma runway dispute developments &bull; September 13 gubernatorial election &mdash; Tamaki vs. Koja &bull; JGB yield trajectory and BOJ policy signals &bull; Okinawa rainy season onset and typhoon season preparations &bull; Yonaguni air defense unit activation timeline
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Foreign Policy &bull; South China Morning Post &bull; Nikkei Asia &bull; Defense News &bull; The Defense Post &bull; Eurasian Times &bull; Ryukyu Shimpo &bull; NHK &bull; Jacobin &bull; AEI &bull; Modern Diplomacy &bull; PBS News &bull; Military.com &bull; MUFG Research &bull; OECD &bull; IMF &bull; DVIDSHUB &bull; Wikipedia (China&ndash;Japan Crisis)
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
