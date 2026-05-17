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

    <!-- ===================== EVENT 1: NANSEI ISLANDS EXERCISE BEGINS TODAY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Indo-Pacific &mdash; May 17 (TODAY)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JGSDF Launches First-Ever Nansei Islands Exercise Today; U.S. Marines Coordinate from Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beginning <strong>today, May 17</strong>, the Japan Ground Self-Defense Force&rsquo;s Ground Component Command is conducting its first-ever exercise focused specifically on the <strong>Nansei (Ryukyu) Islands</strong> near Taiwan. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies are deploying to <strong>Ishigaki, Yonaguni, and Miyakojima</strong> through May 22, practicing troop deployment and supply transport across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Critically, <strong>20 Marines of the 12th Marine Littoral Regiment</strong> (based on Okinawa) are participating in command post training in Miyakojima city from May 17&ndash;20 &mdash; establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. No ammunition is being transported; logistics focus on food and water. The exercise signals Japan&rsquo;s intent to harden its southwestern defense posture against China&rsquo;s growing military presence around Taiwan and in the East China Sea.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 12th MLR is the Marine Corps&rsquo; newest stand-in force unit, designed for distributed maritime operations inside the first island chain. This exercise validates <strong>joint C2 interoperability</strong> on forward terrain. The 12th MLR is also receiving <strong>NMESIS anti-ship missile systems</strong> in FY2026, giving Okinawa-based Marines a sea-denial capability for the first time. Watch for Chinese military reaction &mdash; PLA exercises in the Taiwan Strait or East China Sea could follow as a counter-signal.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TRUMP-XI SUMMIT & TAIWAN FALLOUT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Taiwan / Okinawa Strategic Impact &mdash; May 14&ndash;16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump Warns Taiwan Against Independence After Xi Summit; Taiwan Fires Back: &ldquo;Already Independent&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Following the Trump-Xi Beijing summit, President Trump warned Taiwan not to formally declare independence, stating: <em>&ldquo;I&rsquo;m not looking to have somebody go independent&hellip; we&rsquo;re supposed to travel 9,500 miles to fight a war. I&rsquo;m not looking for that.&rdquo;</em> He told both sides to &ldquo;cool it.&rdquo; Xi had warned Trump that mishandling Taiwan would put the relationship in &ldquo;great jeopardy&rdquo; and risk &ldquo;collision or conflict.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s Presidential Office responded on May 16 that Taiwan is already &ldquo;an independent democratic country&rdquo; but confirmed it would maintain the cross-strait status quo and not formally declare independence. Trump&rsquo;s remarks questioning U.S. military support for Taiwan have <strong>direct implications for Okinawa</strong> &mdash; the island is the staging ground for any U.S. military response to a Taiwan contingency, and signals of wavering commitment could reshape Japan&rsquo;s own defense calculus for the Nansei chain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Relevance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Okinawa hosts <strong>~31,000 U.S. military personnel</strong> and is the forward edge of any Taiwan defense scenario. Trump&rsquo;s questioning of the U.S. defense commitment accelerates Japan&rsquo;s own military buildup in the Nansei chain (as seen in today&rsquo;s exercise). <strong>TSM</strong> (TSMC) faces elevated geopolitical risk premium. <strong>HII</strong> (Huntington Ingalls), <strong>LMT</strong> (Lockheed Martin) &mdash; Indo-Pacific defense spending continues regardless of diplomatic signals. <strong>Nikkei 225</strong> and Japanese defense stocks (<strong>Mitsubishi Heavy, Kawasaki Heavy, IHI Corp</strong>) could see movement as Japan reassesses self-defense posture.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: 31ST MEU MIDDLE EAST DEPLOYMENT GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa&rsquo;s 31st MEU Still Deployed to Middle East; Analysts Warn of Indo-Pacific &ldquo;Gap&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st Marine Expeditionary Unit (~2,200 Marines)</strong> and the amphibious assault ship <strong>USS Tripoli</strong> (homeported in Nagasaki) remain deployed to the Middle East since mid-March, dispatched to the Strait of Hormuz region as the U.S.-Iran conflict escalated. The 31st MEU is the <strong>only permanently forward-deployed MEU in the Pacific</strong> and serves as the rapid-response force for crises involving Korea, Taiwan, or regional humanitarian emergencies.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense analysts warn the deployment creates a <strong>significant gap in U.S. Indo-Pacific readiness</strong>. Retired Marine Col. Grant Newsham noted the 31st MEU has &ldquo;unique capabilities&rdquo; that cannot be easily replaced, and &ldquo;the U.S. Navy doesn&rsquo;t have enough amphibious ships in working order to keep enough MEUs fully operational.&rdquo; An additional <strong>~300 Marines from the USS Boxer</strong> were also sent, bringing total Okinawa-area troop reductions to approximately <strong>2,500 personnel</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous draw-down of Okinawa&rsquo;s primary rapid-response unit while conducting the Nansei Islands exercise underscores the tension between Middle East commitments and Indo-Pacific deterrence. <strong>III MEF</strong> retains the 12th MLR, 3rd Marine Division, and 1st Marine Aircraft Wing on Okinawa, but the loss of the 31st MEU&rsquo;s amphibious assault capability is a meaningful gap. The Iran ceasefire status (<strong>Brent crude at $107.77/bbl</strong>) directly affects when these forces return to the Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: OKINAWA REVERSION ANNIVERSARY & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Domestic Politics &mdash; May 15&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Marks 54th Reversion Anniversary; Gov. Tamaki Seeks Third Term Amid Wavering Support</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>May 15</strong>, Okinawa marked the <strong>54th anniversary</strong> of its 1972 reversion from U.S. administration to Japanese sovereignty. Reports indicate the peace movement is &ldquo;losing steam&rdquo; as younger generations show declining interest in anti-base activism. Despite ongoing opposition to U.S. military facilities, residents are increasingly focused on economic growth, with tourism revenue expected to exceed <strong>&yen;1 trillion ($6.3 billion)</strong> for the first time, fueled by <strong>10.94 million visitors</strong> last fiscal year.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki</strong> (66) officially announced his bid for a <strong>third term</strong> in the <strong>September 13 gubernatorial election</strong>, reaffirming opposition to the Futenma-to-Henoko relocation. However, his support is <strong>wavering</strong> after the February general election reshaped the political landscape. The <strong>Centrist Reform Alliance (CRA)</strong> remains undecided, and the LDP-backed challenger <strong>Genta Koja</strong> (42), former deputy mayor of Naha, is gaining traction. Japan&rsquo;s Defense Minister <strong>Shinjiro Koizumi</strong> pledged in January to reduce the U.S. military footprint on Okinawa during his first visit to the prefecture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September election is a bellwether for the future of U.S. basing in Okinawa. A Tamaki defeat would likely accelerate the Henoko relocation and could ease political friction around base operations. The generational shift away from anti-base activism, combined with Okinawa&rsquo;s tourism-driven economic boom, is gradually reshaping the political calculus. Watch CRA endorsement decisions and polling trends through the summer.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FINANCIAL & ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy &mdash; May 16&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yen Weakens to 158/USD; BOJ Eyes June Rate Hike; Okinawa Tourism Economy Surging</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen weakened to <strong>&yen;158.77 per dollar</strong>, falling for a third consecutive session on hotter-than-expected U.S. inflation data. Japan may have conducted <strong>two rounds of yen-buying intervention</strong> since late April. Finance Minister <strong>Satsuki Katayama</strong> and U.S. Treasury Secretary <strong>Scott Bessent</strong> affirmed cooperation on forex markets. The BOJ held its policy rate at <strong>0.75%</strong> in April but is widely expected to hike to <strong>1.0% in June</strong>, with another increase anticipated in Q4. Higher oil prices from the Iran crisis are complicating the inflation outlook.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa&rsquo;s economy</strong> continues to outperform, with the Finance Ministry <strong>upgrading its economic assessment</strong> for tourism and personal consumption in the prefecture. Tourism revenue is on track to surpass <strong>&yen;1 trillion</strong> for the first time. Despite concerns about reduced Chinese group travel following government advisories against visiting Japan, hotel industry officials reported &ldquo;no significant impact,&rdquo; with other visitor demographics compensating.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>USD/JPY at 158.77</strong> &mdash; yen carry trade remains dominant. BOJ June hike expectations at ~80%. Weak yen boosts Okinawa&rsquo;s tourism competitiveness for foreign visitors but raises import costs.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>Nikkei 225</strong> &mdash; sensitive to yen movements and BOJ policy signals. <strong>Japanese bank stocks</strong> (Mitsubishi UFJ, Sumitomo Mitsui) &mdash; benefit from rate hike expectations. <strong>Okinawa Cellular (9436.T)</strong>, <strong>San-A Co. (2659.T)</strong> &mdash; top Okinawa-listed companies; local consumption indicators. <strong>ANA Holdings, JAL</strong> &mdash; Okinawa tourism beneficiaries, but fuel costs from $107 Brent a headwind. <strong>FXY</strong> (Yen ETF) &mdash; positioned for volatility around June BOJ decision.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: FORCE MODERNIZATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Military / Force Modernization &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th MLR Evolving for Sea-Denial Role; First Overhead Live-Fire &amp; Anti-Ship Missile Capability</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> at Camp Hansen continues its transformation into a stand-in force optimized for distributed maritime operations. In January, the <strong>12th Littoral Combat Team</strong> executed the <strong>first overhead live-fire range at Camp Schwab</strong> &mdash; a historic first for Okinawa. The regiment includes the 12th Littoral Combat Team, 12th Littoral Anti-Air Battalion, and 12th Littoral Logistics Battalion, all based at Camp Hansen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Starting in FY2026, the 12th LCT is receiving the <strong>Navy/Marine Expeditionary Ship Interdiction System (NMESIS)</strong> &mdash; a mobile, ground-based carrier capable of firing <strong>Naval Strike Missiles</strong> for anti-ship operations. This gives Okinawa-based Marines a <strong>sea-denial capability for the first time</strong>, fundamentally changing the force&rsquo;s role from purely expeditionary to one that can contest maritime approaches. The 12th Littoral Anti-Air Battalion also unveiled a <strong>new facility at Camp Hansen</strong>, consolidating air defense operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The MLR transformation represents the most significant shift in U.S. Marine force posture on Okinawa in decades. NMESIS-equipped units can threaten Chinese naval vessels transiting near the Nansei chain, creating a &ldquo;kill web&rdquo; that complements Navy surface and subsurface assets. This capability directly supports the today&rsquo;s Nansei Islands exercise concept. <strong>Kongsberg Defence (KOG.OL)</strong> &mdash; builds the Naval Strike Missile used in NMESIS. <strong>LMT</strong> (Lockheed Martin), <strong>RTX</strong> &mdash; broader Indo-Pacific defense modernization beneficiaries.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Okinawa Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa is at the center of competing strategic pressures.</strong> Today&rsquo;s unprecedented Nansei Islands exercise with U.S.-Japan coordination on Miyakojima signals an acceleration of forward defense posture, even as the 31st MEU&rsquo;s Middle East deployment leaves a gap in the Pacific. Trump&rsquo;s post-Beijing remarks questioning the U.S. obligation to defend Taiwan add uncertainty to the very mission Okinawa&rsquo;s bases exist to support.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Domestically, a political pivot is underway.</strong> The 54th reversion anniversary revealed a peace movement losing generational momentum. Gov. Tamaki&rsquo;s third-term bid faces real headwinds for the first time. Meanwhile, Okinawa&rsquo;s tourism economy is booming past &yen;1 trillion, gradually shifting the base debate from ideology toward economic pragmatism.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Nansei Islands exercise execution (May 17&ndash;22) &bull; Chinese military reaction to Miyakojima coordination center &bull; 31st MEU redeployment timeline from Middle East &bull; Taiwan&rsquo;s response to Trump independence warning &bull; BOJ June rate decision impact on yen/tourism &bull; Gov. Tamaki polling &amp; CRA endorsement &bull; NMESIS fielding schedule for 12th MLR
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; CNBC &bull; USNI News &bull; Al Jazeera &bull; Euronews &bull; France 24 &bull; NPR &bull; Military.com &bull; Marine Corps Times &bull; Task &amp; Purpose &bull; Atlantic Council &bull; The Diplomat &bull; DVIDSHUB &bull; Nippon.com &bull; Ryukyu Shimpo &bull; CBS News &bull; Japan Today &bull; Naval News &bull; Reuters
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
