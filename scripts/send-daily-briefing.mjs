#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Humanitarian &bull; Demographics</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px;">Market Snapshot &mdash; May 12, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr>
          <td style="color: #888; padding: 4px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 4px 0;">7,400.96 (-0.16%)</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">Dow 30</td>
          <td style="color: #22c55e; text-align: right; padding: 4px 0;">49,760.56 (+0.11%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 4px 0;">26,088.20 (-0.71%)</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">Crude Oil (WTI)</td>
          <td style="color: #ef4444; text-align: right; padding: 4px 0;">$102.05 (+4.06%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">Sensex (India)</td>
          <td style="color: #ef4444; text-align: right; padding: 4px 0;">-915 pts</td>
          <td style="color: #888; padding: 4px 0 4px 20px;">UK Gilts</td>
          <td style="color: #ef4444; text-align: right; padding: 4px 0;">Post-2008 highs</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East &mdash; Iran War / Strait of Hormuz</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Ceasefire on &ldquo;Life Support&rdquo; &mdash; 40+ Nations Convene on Hormuz Security as Oil Tops $102</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile US-Iran truce is deteriorating rapidly. Trump called Tehran&rsquo;s latest ceasefire response a &ldquo;piece of garbage&rdquo; and warned the US will &ldquo;finish the job, peacefully or otherwise.&rdquo; Iran transmitted its counter-proposal via Pakistan, but prospects remain dim. Meanwhile, <strong>Israel deployed Iron Dome batteries and personnel to the UAE</strong> to defend against Iranian attacks, and Kuwait accused Iran of a failed strike on a Chinese-built port on its territory.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a significant diplomatic escalation, <strong>the UK and France will host 40+ nations</strong> on Tuesday for the first-ever defense ministerial on Strait of Hormuz security. France has deployed the nuclear carrier <em>Charles de Gaulle</em>; the UK is sending HMS Dragon. The first Qatar-linked LNG tanker (<em>Al Kharaitiyat</em>) since the war began successfully transited the Strait, bound for Pakistan &mdash; a small but symbolic breakthrough. UN peacekeepers in Lebanon recorded <strong>over 1,296 Israeli strikes in three days</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Oil has surged 50%+ since Feb 28. WTI crude hit $102.05 (+4.06% today). <strong>ExxonMobil (XOM)</strong> rose 4% to a new all-time high; <strong>Shell (SHEL)</strong> and <strong>TotalEnergies (TTE)</strong> surging on volatility-driven trading profits. <strong>Lockheed Martin (LMT)</strong> hit an all-time high at $676.70 (+4%) as governments restock weapons and invest in air/missile defense. The Indian Sensex plunged 915 points on energy cost fears. Airlines (<strong>IAG, Lufthansa, Air India parent InterGlobe</strong>) and chemicals sectors face margin compression. <strong>Bearish:</strong> Agricultural commodities (wheat, corn, barley) rising on fertilizer costs, threatening <strong>Bayer (BAYN)</strong> and <strong>Nutrien (NTR)</strong> margins.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">United Kingdom &mdash; Political Crisis</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK PM Starmer Fights for Survival &mdash; 70+ Labour MPs Call for Resignation as Gilt Yields Hit Post-2008 Highs</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Britain&rsquo;s political system is in turmoil. Over <strong>70 Labour lawmakers have called on PM Keir Starmer to resign</strong> following catastrophic municipal election losses &mdash; Labour lost nearly <strong>1,500 council seats</strong> while Nigel Farage&rsquo;s Reform UK gained 1,454. Starmer faces a critical cabinet meeting today where he will attempt to stave off a leadership challenge. Health Secretary Wes Streeting is widely seen as the leading rival.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Starmer is doubling down on a <strong>European realignment strategy</strong>, declaring his government will be &ldquo;defined by rebuilding our relationship and putting Britain at the heart of Europe.&rdquo; This represents the most significant post-Brexit pivot attempt &mdash; but Brussels is wary of reopening negotiations with a weakened leader who may not survive politically.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            UK gilt yields surged to <strong>their highest since 2008</strong> on Tuesday morning. Citi analysts warn removing Starmer could trigger a &ldquo;leftwards shift in Labour policies and more expansionary fiscal policy,&rdquo; pushing yields higher and GBP weaker. <strong>UK-focused banks (Barclays BARC.L, NatWest NWG.L, Lloyds LLOY.L)</strong> face headwinds from political uncertainty. <strong>UK homebuilders (Persimmon PSN.L, Barratt BDEV.L)</strong> are vulnerable to rising borrowing costs. Sterling weakness benefits <strong>FTSE 100 multinationals (Unilever ULVR.L, AstraZeneca AZN.L)</strong> with overseas revenue. ECB now pricing 3 rate hikes this year; Fed may hike next year.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Africa &mdash; Sudan Humanitarian Crisis</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UN: 880 Civilians Killed by Drone Strikes in Sudan (Jan&ndash;Apr) &mdash; Drones Now Leading Cause of Death</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UN human rights chief reported that <strong>drone strikes caused over 80% of civilian deaths</strong> in Sudan&rsquo;s civil war during the first four months of 2026, killing at least <strong>880 people</strong>. Both the Sudanese Armed Forces and the Rapid Support Forces (RSF) are using armed drones with increasing lethality. On May 8 alone, 26 civilians were killed in strikes on Al Quz and near El Obeid.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The deadliest single incident: an air and drone strike hit <strong>El Daein Teaching Hospital in East Darfur</strong> on March 20, killing at least 64 people including 13 children. Health facilities have been struck <strong>at least 12 times</strong>; markets hit 28 times. The drone war is spreading beyond Kordofan and Darfur to Blue Nile, White Nile, and Khartoum states. An RSF drone killed 24 displaced civilians, including 8 children, fleeing near Rahad.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Sudan&rsquo;s war has disrupted Red Sea shipping corridors and threatens regional food security. <strong>Gold mining stocks</strong> with Sudanese exposure face operational risk &mdash; Sudan accounts for ~2% of global gold production. The drone warfare angle benefits <strong>counter-drone/defense tech firms: L3Harris (LHX), Northrop Grumman (NOC), and RTX (RTX)</strong>. Humanitarian crisis escalation may increase pressure on Western governments to impose sanctions, potentially impacting <strong>UAE-linked financial institutions</strong> given the RSF&rsquo;s reported supply chains. Agricultural commodity prices in East Africa under upward pressure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">China &mdash; Demographic Crisis</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Marriage Rate Falls 6.2% in Q1 2026 &mdash; Population Decline Accelerates for 4th Straight Year</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s demographic collapse is accelerating beyond projections. <strong>Marriage registrations fell 6.2% year-on-year in Q1 2026</strong>, continuing a trend that has seen marriages decline 40% from 2018 levels. The population fell to <strong>1.404 billion</strong> in 2025 &mdash; the fourth consecutive annual decline &mdash; with a historically low birth rate of just <strong>5.63 per 1,000 inhabitants</strong> and only 7.92 million births.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The implications are structural: fewer young consumers, collapsing family formation, and shrinking domestic demand. The housing sector continues to suffer as household formation declines. Education, leisure, and consumer goods sectors that relied on family spending are under sustained pressure. Government pro-natalist policies have so far failed to reverse the trend.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Long-term bearish for Chinese domestic consumption plays. <strong>Alibaba (BABA)</strong> and <strong>JD.com (JD)</strong> face slowing domestic growth, forcing reliance on exports in a protectionist world. <strong>Chinese property developers (Country Garden, Vanke)</strong> remain under structural pressure. <strong>Education stocks (New Oriental EDU, TAL Education)</strong> face shrinking addressable market. <strong>Dairy and infant formula (China Feihe 6186.HK, Yili 600887.SS)</strong> see declining demand. Conversely, <strong>healthcare/eldercare (Ping An Healthcare, JD Health)</strong> and <strong>automation/robotics stocks</strong> benefit as labor force contracts. Credit weakness and lower interest rates expected from PBOC.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Israel &mdash; Coalition Crisis / Eurovision Protest</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israeli Coalition Fractures as Ultra-Orthodox Party Demands Parliament Dissolution; Eurovision Stage Becomes Protest Platform</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An <strong>ultra-Orthodox party in Netanyahu&rsquo;s coalition has called for the Knesset to be dissolved</strong>, threatening to bring down the government at the most precarious moment of the Iran conflict. The move comes amid internal tensions over military conscription exemptions for ultra-Orthodox Jews and war strategy disagreements, potentially forcing snap elections in the middle of an active multi-front military campaign.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, Israel&rsquo;s Eurovision entry advanced to the grand final in Vienna, but the performance was met with <strong>&ldquo;stop the genocide&rdquo; chanting</strong> from the audience &mdash; a sign that international public opinion continues to harden against Israel across Europe. The diplomatic isolation, combined with domestic political instability, adds a new layer of risk to the Iran campaign and any ceasefire negotiations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Israeli political instability adds risk premium to the shekel and Tel Aviv Stock Exchange. <strong>Israeli tech (CyberArk CYBR, Check Point CHKP, Monday.com MNDY)</strong> may see limited direct impact due to dollar-denominated revenues, but sentiment risk rises. <strong>Israeli defense stocks (Elbit Systems ESLT, Rafael&rsquo;s suppliers)</strong> remain elevated on war demand but face volatility from coalition collapse risk. A snap election would inject uncertainty into Iron Dome deployments and defense procurement timelines. <strong>Bank Leumi (LUMI.TA)</strong> and <strong>Bank Hapoalim (POLI.TA)</strong> exposed to domestic political risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The global risk premium is rising across every asset class.</strong> Oil above $102 with the Iran ceasefire collapsing, UK gilts at post-2008 highs from political chaos, and hotter-than-expected inflation are converging into a stagflationary environment. Central banks face an impossible trilemma: inflation demands tightening, but geopolitical shocks and slowing growth demand accommodation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Winners today:</strong> Energy majors (XOM, SHEL, TTE), defense primes (LMT, NOC, RTX, LHX), gold, and FTSE 100 multinationals benefiting from sterling weakness.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Losers today:</strong> Airlines, Indian equities, UK domestics (banks, homebuilders), Chinese consumer plays, and any sector with high energy input costs.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch tomorrow:</strong> Iran ceasefire response details &bull; UK cabinet meeting outcome &bull; 40-nation Hormuz defense ministers meeting &bull; Trump-Xi Beijing state visit dynamics &bull; ECB rate guidance shift &bull; Oil price reaction to Hormuz tanker transit
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Reuters &bull; CNBC &bull; CNN &bull; Euronews &bull; The Times of Israel &bull; Democracy Now! &bull; UN News &bull; OHCHR &bull; BBC &bull; Morgan Stanley &bull; CaixaBank Research &bull; TheStreet &bull; HDFC Sky &bull; Anadolu Agency &bull; Al Arabiya &bull; The Japan Times &bull; Asia Times &bull; Parliament UK Research Briefings
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.
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
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
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
