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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Financial &bull; Security</p>
    </div>

    <!-- ===================== EVENT 1: NANSEI ISLANDS EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Indo-Pacific / Active Exercise &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF Conducts First-Ever Nansei Islands Exercise with U.S. Marines; Anti-Ship Missiles Deployed Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> &mdash; Japan&rsquo;s highest operational land command &mdash; is conducting its <strong>first-ever exercise focused on the Nansei (Ryukyu) Islands</strong> near Taiwan, running <strong>May 17&ndash;22</strong>. Approximately <strong>300 JSDF soldiers</strong> from all regional armies are participating alongside <strong>20 U.S. Marines</strong> from the Okinawa-based <strong>12th Marine Littoral Regiment</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key activities include: deployment of a <strong>Type-88 surface-to-ship guided missile launcher</strong> to <strong>Ishigaki</strong> (~150 miles east of Taiwan); flight operations of two <strong>ScanEagle II reconnaissance drones</strong> from <strong>Yonaguni</strong> (~70 miles east of Taiwan); and establishment of the <strong>first-ever U.S.-Japan coordination center on Miyako Island</strong>. The exercise practices mobile deployment and logistics across nine ports. Analysts describe it as reinforcing <strong>&ldquo;first island chain defense coordination around the Taiwan Strait&rdquo;</strong> and integrating forces into a <strong>&ldquo;kill web&rdquo;</strong> linking U.S., Japanese, South Korean, and Philippine military networks.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This exercise represents a major escalation in Japan&rsquo;s southwest island defense posture. The Miyako Strait is one of the Chinese Navy&rsquo;s key routes for entering the western Pacific, making joint U.S.-Japan coordination there a direct signal to Beijing. Combined with the recent U.S.-Philippines Balikatan exercises, a continuous arc of allied military capability now spans the entire first island chain. Watch for Chinese military or diplomatic response in the coming 48 hours.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: MARINES DRONE TRAINING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Modernization / Okinawa &mdash; May 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marines Launch Basic Drone Operator Course at Camp Schwab; Corps Plans to Field &ldquo;Tens of Thousands&rdquo; of UAS This Year</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Eighteen Marines</strong> are undergoing the three-week <strong>Basic Drone Operator Course</strong> at <strong>Camp Schwab</strong> in northern Okinawa as of May 20. Students build <strong>7-inch first-person-view drones from kits</strong>, practice hovering and obstacle-course maneuvering, and will advance to the <strong>Neros Archer</strong> attack drone platform. This is one of <strong>six piloting courses</strong> the Marine Corps announced in December.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          According to Maj. Brant Wayson, the training &ldquo;adds another layer of range that you can start reaching out and <strong>targeting adversaries or supporting your own forces in distributed island scenarios</strong>.&rdquo; The Marine Corps plans to <strong>field tens of thousands of unmanned aerial systems this year</strong>. The <strong>31st Marine Expeditionary Unit</strong> was certified in these skills in February&ndash;March and personnel are currently <strong>deployed aboard USS Tripoli in the Middle East</strong>. The training directly supports the <strong>Expeditionary Advanced Base Operations (EABO)</strong> concept, which emphasizes small, mobile groups dispersing across island territories.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Relevance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The drone training at Camp Schwab reflects lessons learned from the Ukraine-Russia conflict, where small FPV drones have proven devastatingly effective. Fielding &ldquo;tens of thousands&rdquo; of UAS signals the Marine Corps is building a low-cost, high-volume drone force designed for distributed operations across the Nansei island chain &mdash; directly relevant to a Taiwan contingency scenario.<br/><br/>
            <strong>Defense stocks to watch:</strong> <strong>AVAV</strong> (AeroVironment) &mdash; leading small UAS manufacturer. <strong>KTOS</strong> (Kratos Defense) &mdash; drone and unmanned systems. <strong>LMT</strong> (Lockheed Martin) &mdash; EABO integration contracts.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA-JAPAN TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / China-Japan / Ongoing Crisis &mdash; May 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Japan Tensions Escalate: &ldquo;No Visible Off-Ramp&rdquo; as Senkaku Incursions Hit Record and Rare Earth Exports Restricted</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> shows no signs of abating. Chinese Coast Guard and Navy vessels patrolled the <strong>Senkaku/Diaoyu Islands&rsquo; contiguous zone on 355 of 365 days</strong> in 2024, and the pace has continued in 2026. China has deployed <strong>the world&rsquo;s largest coast guard ship</strong>, equipped with two helicopters, to the disputed waters. In March 2026, Japan ordered a <strong>Chinese survey ship</strong> to halt unauthorized operations near the Senkakus.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China has escalated economic pressure by <strong>restricting dual-use items and rare earth material exports to Japan</strong>. Beijing also issued travel advisories, restricted cultural exchanges, and cut off Japanese seafood imports. PM <strong>Takaichi&rsquo;s</strong> stance labeling China a threat and Japan&rsquo;s <strong>2026 Diplomatic Bluebook</strong> downgrading China from &ldquo;one of the most important neighbouring countries&rdquo; to merely &ldquo;an important neighbour&rdquo; have deepened the rift. Analysts warn that a <strong>&ldquo;limited air or naval clash within the next year or two cannot be dismissed as alarmism.&rdquo;</strong> Japan&rsquo;s defense spending has surged from <strong>&yen;5.4 trillion to &yen;8.7 trillion</strong> between 2022 and 2025.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Impact Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Rare earth export restrictions directly threaten Japan&rsquo;s semiconductor, automotive, and electronics industries. Okinawa&rsquo;s strategic position makes it the frontline of any potential escalation. The ongoing crisis is a structural driver for Japan&rsquo;s defense buildup and U.S. force posture adjustments on the island.<br/><br/>
            <strong>Stocks/assets to watch:</strong> <strong>Nikkei 225</strong> &mdash; sensitive to China trade disruption headlines. <strong>7203.T</strong> (Toyota) &mdash; rare earth dependency for EV production. <strong>6758.T</strong> (Sony) &mdash; semiconductor supply chain exposure. <strong>Japanese Yen (USD/JPY ~159)</strong> &mdash; yen weakness compounds import costs for energy-dependent Okinawa.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: FUTENMA / GOVERNOR RACE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / U.S. Basing / Okinawa Politics &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Pushed to 2036; Governor Tamaki&rsquo;s Third-Term Bid Faces Wavering Support Ahead of Sept. 13 Election</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Department of Defense has stated it <strong>will not return the MCAS Futenma site unless a long runway is secured</strong> at the Henoko replacement facility. The current Futenma runway is <strong>~2,700 meters</strong>; the planned V-shaped Henoko runways are only <strong>~1,800 meters each</strong>. Government planning documents now indicate the <strong>return of Futenma is not expected before 2036</strong> &mdash; nearly 40 years after the original 1996 agreement. Construction at Henoko is expected to continue until at least 2033. Defense Minister <strong>Koizumi</strong> visited Okinawa in January pledging to reduce the U.S. military footprint, but the runway dispute undercuts that promise.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, Governor <strong>Denny Tamaki</strong>, 66, faces <strong>wavering support</strong> in his bid for a third term in the <strong>September 13 gubernatorial election</strong>. The &ldquo;All Okinawa&rdquo; camp opposing the Henoko relocation has been weakened by the <strong>LDP&rsquo;s sweep of all four Okinawa districts</strong> in the February 2026 general election. The <strong>Centrist Reform Alliance</strong> is undecided on backing Tamaki. <strong>Genta Koja</strong>, 42, a former Naha deputy mayor, will run as the de facto LDP candidate. If Tamaki loses, the Henoko project could accelerate significantly, altering the timeline for base relocation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Base Operations Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 2036 timeline means MCAS Futenma will remain operational for at least another decade. Force planners should assume current basing arrangements are semi-permanent. The September election could be a pivotal inflection point: an LDP governor would likely ease legal and administrative resistance to Henoko construction. Additionally, <strong>~12 acres of Kishaba Housing area on Camp Foster</strong> may be returned by fall 2026 to help alleviate local traffic congestion &mdash; one of few near-term base realignment milestones.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FINANCIAL / MACRO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy / Japan &mdash; May 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Slides to 159/Dollar as Bond Rout Hits Japan; Okinawa Faces Rising Energy Import Costs</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Japanese yen fell to 159.0 per dollar</strong> on May 20, hovering near the critical <strong>160 level</strong> that reportedly triggered Bank of Japan intervention in late April. The yen weakness is driven by the global bond sell-off &mdash; <strong>U.S. 30-year Treasury yields hit 5.19%</strong>, a 19-year high &mdash; and elevated energy prices from the Iran-Hormuz crisis. Japan&rsquo;s <strong>GDP grew 0.5% Q/Q</strong> in Q1, accelerating from 0.2%, but input prices for Japanese firms surged <strong>2.3% in April</strong>, well above estimates.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The weak yen and <strong>Brent crude above $107/barrel</strong> are particularly painful for Okinawa, which is almost entirely dependent on <strong>imported fossil fuels for power generation</strong>. Electricity and fuel costs on the island have risen sharply. However, Okinawa&rsquo;s <strong>tourism sector remains strong</strong> &mdash; the Finance Ministry upgraded its assessment of Okinawan personal consumption and tourism earlier this year, with the weak yen making the island a bargain for foreign visitors. Chinese tourism remains suppressed due to Beijing&rsquo;s travel advisory against visits to Japan as part of the ongoing diplomatic crisis.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Yen weakness at 159 means military personnel and families face reduced purchasing power for local goods and services. The BOJ may intervene again if 160 is breached. Elevated energy costs hit Okinawa harder than mainland Japan due to the island&rsquo;s fossil-fuel dependency.<br/><br/>
            <strong>Indicators to watch:</strong> <strong>USD/JPY</strong> &mdash; 160 level is the BOJ intervention trigger. <strong>9501.T</strong> (Okinawa Electric Power) &mdash; exposed to rising fuel import costs. <strong>Nikkei 225</strong> &mdash; Japan equities under pressure from rising JGB yields and yen depreciation. <strong>Brent crude</strong> &mdash; above $107, primary driver of Japan&rsquo;s import bill inflation. <strong>JGB 10-year yield</strong> &mdash; rising in sympathy with global bond rout.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the epicentre of Indo-Pacific security realignment.</strong> The first-ever JSDF Ground Component Command exercise on the Nansei Islands, combined with the establishment of a U.S.-Japan coordination center on Miyako, represents a fundamental shift in how allied forces plan to defend the first island chain. Anti-ship missile deployments to Ishigaki and drone operations from Yonaguni signal real combat preparation, not just signalling.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The China-Japan crisis has no diplomatic off-ramp in sight.</strong> Near-daily Senkaku incursions, rare earth export restrictions, and analysts openly discussing the possibility of a &ldquo;limited air or naval clash&rdquo; in the next one to two years make Okinawa the most strategically consequential U.S. basing location in the world right now. The Marine Corps&rsquo; drone training surge at Camp Schwab and the 12th MLR&rsquo;s integration into Nansei exercises are direct responses to this threat environment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Chinese military or diplomatic response to Nansei exercise &bull; BOJ intervention if yen breaks 160 &bull; Okinawa gubernatorial election dynamics (Sept. 13) &bull; Camp Foster Kishaba housing return timeline &bull; Futenma runway-length dispute resolution &bull; 31st MEU drone employment aboard USS Tripoli in Middle East &bull; Continued Senkaku incursion patterns
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; Foreign Policy &bull; Asia Times &bull; The Defense News &bull; The Diplomat &bull; Bloomberg &bull; South China Morning Post &bull; International Crisis Group &bull; Military.com &bull; Naval News &bull; ROK Drop &bull; MUFG Research &bull; Bank of Japan &bull; Trading Economics &bull; Wikipedia &bull; Council on Foreign Relations &bull; SWP Berlin
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
