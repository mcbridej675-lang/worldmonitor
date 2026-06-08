#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Global Events &mdash; 24-Hour Market Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Equities &bull; Commodities &bull; Risk Assessment</p>
    </div>

    <!-- ===================== EVENT 1: IRAN-ISRAEL ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran &amp; Israel Trade Missile Strikes on War&rsquo;s 100th Day; Both Sides Pledge Ceasefire as Oil Spikes 4%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On the <strong>100th day of the Iran-Israel war</strong>, the two nations traded direct missile fire in the most dangerous escalation in weeks. From the evening of June 7 through the morning of June 8, <strong>Iran launched seven barrages totaling 20+ ballistic missiles</strong> at northern, central, and southern Israel, targeting Ramat David Airbase among other sites.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israel responded with <strong>two waves of strikes</strong> hitting air defense systems, missile launchers, and military infrastructure across Isfahan, Kermanshah, Karaj, and Tabriz, plus a petrochemical plant near Ahvaz. Hours later, both sides pledged to halt attacks. <strong>President Trump stated both nations are &ldquo;looking to do an immediate ceasefire&rdquo;</strong> and that final negotiations on peace are proceeding. The Strait of Hormuz remains effectively closed, disrupting ~20% of global oil supply.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent spiked 4.4% to $97.15 before settling at $96.05 (+3.18%). WTI surged 3.46% to $93.67. Oil later eased to ~$91 after Iran declared military operations over. <strong>Gold</strong> pulled back to $4,324 from $5,500+ highs as dollar strength dominates. U.S. equities rallied on ceasefire hopes (S&amp;P 500 +0.93%, Nasdaq +1.44%).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> USO (oil ETF) &bull; XOP (oil &amp; gas E&amp;P) &bull; XLE (energy sector) &bull; COP, XOM, CVX (oil majors) &bull; LMT, RTX, NOC (defense) &bull; GLD (gold, safe haven)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost pressure) &bull; JETS (airline ETF) &bull; Consumer discretionary broadly (oil-driven inflation headwinds)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: PHILIPPINES EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Natural Disaster / Humanitarian &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 7.8 Earthquake Devastates Southern Philippines; 32+ Dead, Tsunami Hits Mindanao Coast</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck offshore Sarangani province in the southern Philippines on June 8, killing at least <strong>32 people</strong>, injuring over 200, and triggering <strong>1-meter tsunami waves</strong> along the coasts of Mindanao. A landslide in Sarangani province killed 13 villagers. In General Santos &mdash; a city of 722,000 &mdash; buildings including a donation center and a structure housing a Jollibee restaurant collapsed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The quake disrupted the <strong>first day of the Philippine school year</strong>, affecting 3.2 million students and 128,000 school staff. Tsunami warnings were issued across the region, including Okinawa, Japan. The disaster is expected to require significant reconstruction spending and may disrupt agricultural exports from Mindanao, one of the Philippines&rsquo; major agricultural regions producing tuna, pineapple, and coconut.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional impact.</strong> Philippine peso under pressure from reconstruction costs and potential capital outflows. Philippine Stock Exchange (PSEi) likely to face selling pressure on reopening. Insurance and reinsurance sector faces claims exposure.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EPHE (iShares Philippines ETF &mdash; near-term disaster drag) &bull; SM Prime Holdings (SMPH.PS &mdash; real estate/retail exposure in Mindanao) &bull; Jollibee Foods (JFC.PS &mdash; property damage, supply chain disruption)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Holcim Philippines (HLCM.PS &mdash; reconstruction demand) &bull; Global reinsurers (Swiss Re, Munich Re &mdash; premium repricing) &bull; Construction material suppliers in the region
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: XI JINPING NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">East Asia / Geopolitics / Diplomacy &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Xi Jinping Arrives in Pyongyang for First North Korea Visit in Seven Years; China Reasserts Influence Over Kim</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese President <strong>Xi Jinping arrived in Pyongyang on June 8</strong> for a rare two-day state visit &mdash; his <strong>first trip to North Korea since 2019</strong> and his first overseas visit of 2026. Xi and his wife Peng Liyuan were greeted by <strong>Kim Jong Un</strong> with a 21-gun salute. Xi called for deepening &ldquo;strategic coordination and cooperation,&rdquo; pledging expanded ties in economics, trade, agriculture, health, construction, and science.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The visit is a <strong>strategic counter to deepening North Korea-Russia ties</strong> &mdash; Beijing seeks to reassert its position as Pyongyang&rsquo;s most critical economic lifeline and diplomatic partner, preventing Kim from leaning too heavily toward Moscow. Experts note China is also concerned about North Korea acquiring military technology from Russia that could destabilize the regional balance. The trip signals <strong>a reshuffling of the China-Russia-DPRK triangle</strong>, with implications for Korean Peninsula security and U.S. alliances in Asia.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical risk repricing.</strong> Increased strategic uncertainty for the Korean Peninsula. South Korean won and Japanese yen sensitive to any escalatory rhetoric. Chinese yuan stable as the visit signals Beijing&rsquo;s diplomatic control narrative. North Korea-related sanctions enforcement may tighten.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWY (iShares Korea ETF &mdash; geopolitical risk premium) &bull; Korean defense stocks may paradoxically dip on hopes of reduced DPRK aggression &bull; Chinese consumer stocks if renewed sanctions scrutiny emerges<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT, RTX, NOC (U.S. defense &mdash; renewed Asian security concerns) &bull; ITA (iShares U.S. Aerospace &amp; Defense) &bull; Korean shipbuilders (HD Hyundai, 329180.KS &mdash; naval buildup demand) &bull; Gold (geopolitical hedge)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: SEMICONDUCTOR REBOUND ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Semiconductors &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Chip Stocks Rebound Sharply After $1 Trillion Wipeout; Intel Soars 8% on Alphabet Deal, Marvell Joins S&amp;P 500</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          After last week&rsquo;s dramatic semiconductor selloff &mdash; which erased over <strong>$1 trillion in market value</strong> from the Philadelphia Semiconductor Index &mdash; chip stocks staged a powerful rebound on Monday. The <strong>VanEck Semiconductor ETF (SMH) surged 5%</strong>, with broad-based buying across the sector. <strong>Intel soared 8%+</strong> after reports that Alphabet selected Intel to manufacture ~3 million of its internally designed chips, validating Intel&rsquo;s foundry turnaround.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Marvell Technology jumped ~10%</strong> on confirmation it will join the S&amp;P 500 later this month, driving index-fund demand. <strong>NVIDIA gained 2%</strong>, while <strong>Micron and Marvell each rose 4%+</strong>. The rebound signals that last week&rsquo;s Broadcom-led selloff was driven by elevated expectations rather than deteriorating AI fundamentals. The AI infrastructure buildout thesis remains intact, but the market is now more discerning about guidance vs. beats.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> S&amp;P 500 +0.93%, Nasdaq +1.44%, Dow +0.58%. Russell 2000 -3.47% (small-cap underperformance on oil/inflation fears). Risk-on rotation back into mega-cap tech.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> INTC (Intel, +8% &mdash; Alphabet foundry deal) &bull; MRVL (Marvell, +10% &mdash; S&amp;P 500 inclusion) &bull; MU (Micron, +4%) &bull; NVDA (NVIDIA, +2%) &bull; SMH (VanEck Semi ETF, +5%) &bull; SOXX (iShares Semi ETF) &bull; AVGO (Broadcom, partial recovery)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> IWM (Russell 2000 ETF, -3.47% &mdash; small-cap lagging) &bull; Regional banks (rate-sensitive, inflation fears)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: ARMENIA ELECTIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Caucasus / Politics / Democracy &mdash; June 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Armenia&rsquo;s Pashinyan Wins Decisive Parliamentary Election; Pro-Western Mandate Strengthened as Pro-Russian Party Trails</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Armenian Prime Minister <strong>Nikol Pashinyan&rsquo;s Civil Contract party</strong> won a decisive victory in the June 7 parliamentary elections, with exit polls showing <strong>~57% of the vote</strong> and a 58.97% voter turnout. Pashinyan declared victory at 2:49 a.m. on June 8. The pro-Russian <strong>Strong Armenia party of Samvel Karapetyan trailed at ~17.5%</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The election reinforces Armenia&rsquo;s <strong>decisive pivot toward the West and away from Russia</strong> &mdash; a trend accelerated by Moscow&rsquo;s failure to support Armenia during the 2023 Nagorno-Karabakh crisis. Pashinyan&rsquo;s continued rule signals deepening ties with the EU and the U.S., potential EU association agreement negotiations, and continued distancing from the Russian-led CSTO military alliance. The result is significant for Caucasus energy transit routes and regional stability amid the broader Iran conflict.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional/strategic significance.</strong> Armenian dram stable on policy continuity. Caucasus energy transit route security improved. Georgia&rsquo;s pro-EU movement may gain momentum from Armenia&rsquo;s example. Russia&rsquo;s sphere of influence continues to shrink in the South Caucasus.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> BP (BP.L), EQNR (Equinor &mdash; Caucasus pipeline interests) &bull; European infrastructure firms with Caucasus exposure &bull; IEUR (iShares Europe ETF &mdash; broader EU expansion narrative) &bull; Armenian sovereign bonds (policy stability)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MOEX-listed stocks (Moscow Exchange &mdash; declining Russian influence narrative) &bull; Russian defense exporters (loss of CSTO partner momentum)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran-Israel war remains the dominant macro risk.</strong> Day 100 brought the most dangerous escalation in weeks, but also the strongest ceasefire signals. Oil whipsawed from $91 to $97+ intraday &mdash; expect continued volatility. Energy longs (XLE, COP, XOM) remain well-supported. If ceasefire holds, oil could retrace below $90 rapidly, punishing late energy longs. Hedge with puts on USO.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Semiconductor dip-buying is working &mdash; but be selective.</strong> The $1 trillion selloff has been met with aggressive buying, led by Intel&rsquo;s foundry validation and Marvell&rsquo;s S&amp;P 500 inclusion. AI infrastructure spending is not decelerating, but the market now demands guidance beats, not just in-line results. NVDA and INTC are the best-positioned names. Watch AVGO for a full recovery.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Geopolitical realignment continues across Eurasia.</strong> Xi&rsquo;s Pyongyang visit and Armenia&rsquo;s pro-Western election results are reshaping alliances from the Caucasus to the Korean Peninsula. China&rsquo;s bid to pull North Korea back from Russia signals Great Power competition is intensifying. The Philippines earthquake adds near-term humanitarian and reconstruction costs to an already-stretched region. Gold at $4,324 remains a core hedge in this environment.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 8, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.93%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.44%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.58%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Russell 2000</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-3.47%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$96.05 (+3.18%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$93.67 (+3.46%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">$4,324.77</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">SMH (Semi ETF)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+5.0%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">VIX</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Elevated (Middle East risk)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CBS News &bull; NPR &bull; Al Jazeera &bull; CNBC &bull; Bloomberg &bull; Arab News &bull; Times of Israel &bull; Alma Research Center &bull; Yahoo Finance &bull; TheStreet &bull; Schwab Market Update &bull; The Motley Fool &bull; CNN &bull; Rappler &bull; PHIVOLCS &bull; UN News &bull; Armenpress &bull; OSCE/ODIHR &bull; Vatican News &bull; Euronews
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
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
  subject: `[World Monitor] Global Daily Intelligence Briefing — ${today}`,
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
