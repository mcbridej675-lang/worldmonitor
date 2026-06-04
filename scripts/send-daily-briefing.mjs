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

    <!-- ===================== EVENT 1: ISRAEL-LEBANON CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel-Lebanon Ceasefire Brokered But Immediately Tested; Iran Suspends Peace Talks as Regional War Escalates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. brokered a <strong>conditional renewal of the Israel-Lebanon ceasefire</strong> on June 3, tying implementation to Hezbollah&rsquo;s full cessation of attacks and the creation of pilot security zones in southern Lebanon. However, <strong>Hezbollah rejected the pact</strong>, and both Israeli forces and Hezbollah launched strikes just hours after the announcement. The ceasefire remains fragile at best.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>Iranian strikes on Kuwait</strong> injured dozens and killed one person, further destabilizing the Gulf. Iran has <strong>suspended indirect peace talks</strong> with the U.S., while Trump claimed a deal could still be reached by the weekend. The Strait of Hormuz closure &mdash; ongoing since late February &mdash; continues to disrupt <strong>~20% of global oil supply</strong>, keeping crude prices elevated near $96&ndash;97/barrel despite the ceasefire-driven dip.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude dipped ~1.6% to $96.25 on ceasefire headlines but remains structurally elevated. WTI fell ~1.3% to $94.73. <strong>Gold</strong> holds safe-haven bid. U.S. 10Y yield at 4.49%, 30Y at 5.05% &mdash; yields rose on oil-driven inflation fears. European indices rallied (CAC 40 +1.2%, DAX +0.6%); U.S. indices fell (S&amp;P 500 -0.74%, Dow -1.21%).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> USO (oil ETF, +89.5% YTD) &bull; XOP (oil &amp; gas E&amp;P, +29.9% YTD) &bull; XLE (energy sector, +28.3% YTD) &bull; COP, XOM, CVX (oil majors) &bull; ITA, PPA (defense ETFs)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost pressure) &bull; Consumer discretionary broadly (inflation headwinds)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: SOUTH KOREA ELECTIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">East Asia / Politics / Equities &mdash; June 3&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea Local Elections: Ruling Party Wins Landslide 12 of 16 Races; KOSPI Falls 1.84% on Reopening</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s ruling <strong>Democratic Party won 12 of 16 metropolitan mayor/governor races</strong> in the June 3 local elections, reinforcing President <strong>Lee Jae-myung&rsquo;s</strong> reform mandate. The opposition <strong>People Power Party held the crucial Seoul mayorship</strong>, preventing a total sweep. Markets were closed on election day; the KOSPI had hit a record closing high of <strong>8,801.49</strong> on Tuesday &mdash; up roughly threefold in one year under President Lee.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On Thursday&rsquo;s reopening, the <strong>KOSPI dropped 1.84%</strong> as global risk-off sentiment and the Broadcom-led semiconductor selloff overshadowed the election results. The ruling party&rsquo;s strong showing is <strong>medium-term bullish</strong> for Korean equities &mdash; Lee&rsquo;s corporate governance reforms and the &ldquo;Korea discount&rdquo; rerating thesis remain intact, with continued policy continuity now assured.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> KOSPI -1.84% on June 4 (catch-up to global risk-off). Korean won under mild pressure but structurally supported by capital inflows. Korean government bonds stable; election mandate supports continued fiscal and reform spending.<br/><br/>
            <strong style="color: #ef4444;">&#9660; SHORT-TERM DOWN:</strong> Samsung Electronics (005930.KS, -2.5%) &bull; SK Hynix (000660.KS, -2.63%) &bull; LG Electronics (066570.KS, -16.43%)<br/>
            <strong style="color: #22c55e;">&#9650; MEDIUM-TERM UP:</strong> EWY (iShares Korea ETF &mdash; policy continuity) &bull; FLKR (Franklin Korea ETF &mdash; Korea rerating story intact)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EU-UKRAINE ACCESSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Diplomacy / Integration &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EU Unanimously Approves Ukraine &amp; Moldova Accession Talks After Hungary Lifts Two-Year Veto</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All <strong>27 EU member states</strong> agreed to open the <strong>first cluster of accession negotiations</strong> with Ukraine and Moldova after Hungary&rsquo;s Prime Minister <strong>Peter Magyar</strong> reached a deal with Kyiv on Hungarian minority rights, ending a <strong>two-year veto</strong>. The formal intergovernmental conference is expected on <strong>June 15 in Luxembourg</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This marks a historic step &mdash; the first negotiation cluster covers <strong>rule of law, human rights, and judiciary</strong>, beginning a process spanning 33 chapters across six clusters. While full membership remains years away, the political signal is significant: the EU is committing to an institutional path for Ukraine&rsquo;s integration, reducing long-term geopolitical uncertainty in Eastern Europe and signaling sustained reconstruction investment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> Ukrainian Eurobonds likely to tighten (lower yields/higher prices) on EU integration momentum. Euro mildly supportive. European natural gas futures could ease on reduced Eastern European uncertainty. Hungarian forint stabilizing on reduced diplomatic friction.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> IEUR (iShares Europe ETF) &bull; HEDJ (WisdomTree Europe Hedged Equity) &bull; Rheinmetall (RHM.DE), BAE Systems (BA.L), Leonardo (LDO.MI) &mdash; European defense &bull; Holcim (HOLN.SW), Vinci (DG.PA) &mdash; Ukraine reconstruction plays &bull; OTP Bank (OTP.BD) &mdash; reduced Hungarian diplomatic isolation
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: BROADCOM SELLOFF ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Semiconductors &mdash; June 3&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Broadcom Plunges 12&ndash;14% Post-Earnings, Triggering Global Semiconductor Selloff Across U.S., Asia, and Europe</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Broadcom shares <strong>plunged 12&ndash;14%</strong> after its Q2 FY2026 earnings report despite <strong>record revenue of $22.19 billion (+48% YoY)</strong> and AI semiconductor revenue of <strong>$10.8 billion (+143% YoY)</strong>. The selloff was triggered by Q3 AI chip revenue guidance of <strong>$16 billion &mdash; roughly $1.2 billion below analyst models</strong> &mdash; and CEO Hock Tan&rsquo;s decision to merely reiterate (not raise) the FY2027 AI semiconductor target of $100+ billion.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Macquarie <strong>downgraded AVGO to Neutral</strong> with a target cut to $437 from $513. The ripple effect spread globally: the <strong>Nasdaq fell 0.89%</strong>, <strong>KOSPI dropped 1.84%</strong>, <strong>Nikkei 225 fell 1.36%</strong>, and semiconductor names were hit across every major market. The selloff raises questions about whether AI chip demand growth is decelerating or simply being re-baselined after a historic run.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> S&amp;P 500 -0.74%, Nasdaq -0.89%, KOSPI -1.84%, Nikkei -1.36%. Risk-off tone modestly supportive of Treasuries. Mild pressure on high-beta currencies (KRW, TWD).<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> AVGO (Broadcom, -12&ndash;14%) &bull; NVDA (NVIDIA, sympathy selling) &bull; AMD (AI chip peer) &bull; TSM (Taiwan Semi) &bull; SK Hynix (000660.KS, -2.63%) &bull; SOXX (semiconductor ETF) &bull; SMH (VanEck Semi ETF) &bull; MRVL (Marvell, AI networking peer) &bull; CRWD (CrowdStrike, separate post-earnings weakness)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: NEW DELHI HOTEL FIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">South Asia / Safety / Hospitality &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Deadly New Delhi Hotel Fire Kills 21 &mdash; Mostly Foreign Nationals &mdash; Exposing India&rsquo;s Building Safety Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A fire at the <strong>Flourish Inn Stay hotel</strong> in southern Delhi&rsquo;s Malviya Nagar neighborhood killed at least <strong>21 people</strong>, including <strong>18 foreign nationals from Bangladesh, Nigeria, Mozambique, and Liberia</strong>. The fire started around 8:50 a.m. on June 3 in the ground-floor restaurant and spread rapidly through the five-story building.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A preliminary investigation found the hotel had <strong>no valid fire safety certificate</strong>, only one exit, and lacked proper ventilation. More than <strong>40 people were rescued</strong>, with some jumping from upper floors. The tragedy is expected to trigger tightened fire safety and building code enforcement across India&rsquo;s hospitality sector, increasing compliance costs for budget hotels and potentially dampening foreign tourist confidence in the near term.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Sector-specific, not macro.</strong> Indian hospitality and tourism sentiment negative. INR mildly pressured if foreign tourist confidence drops. Likely tightening of fire safety/building codes &mdash; compliance costs for the sector.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Indian Hotels Company (INDHOTEL.NS &mdash; Tata Group, regulatory scrutiny) &bull; Lemon Tree Hotels (LEMONTREE.NS &mdash; budget segment faces safety scrutiny) &bull; EIH Ltd (EIH.NS &mdash; Oberoi Hotels, broader sentiment)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Indian fire safety equipment makers and building compliance firms could benefit from expected regulatory tightening<br/>
            <strong>Neutral:</strong> INDA (iShares India ETF &mdash; tragedy is sector-specific)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy remains the dominant macro driver.</strong> The Strait of Hormuz closure continues to structurally support crude above $95. The Israel-Lebanon ceasefire is fragile &mdash; any collapse will send oil higher. Energy longs (XLE, COP, XOM) remain well-supported while airlines and consumer discretionary face persistent headwinds. Gold&rsquo;s safe-haven bid is intact.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The AI chip narrative is being stress-tested.</strong> Broadcom&rsquo;s selloff despite 143% AI revenue growth signals that markets are now pricing perfection. The global semiconductor contagion (Korea, Japan, Taiwan, Europe) shows how interconnected chip supply chains are. Watch for dip-buying in NVDA and TSM if the selloff is contained.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Europe and Korea offer medium-term opportunities.</strong> EU-Ukraine accession reduces Eastern European political risk and supports European defense and infrastructure names. South Korea&rsquo;s election mandate reinforces the &ldquo;Korea discount&rdquo; rerating &mdash; EWY is attractive on pullbacks. India&rsquo;s hospitality sector faces near-term regulatory headwinds but the macro story is unaffected.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 4, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.74%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.89%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.21%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.84%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.36%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">CAC 40</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.2%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.6%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$96.25 (-1.6%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$94.73 (-1.3%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.49%</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Euronews &bull; CNBC &bull; Al Jazeera &bull; The Irish Times &bull; FDD Overnight Brief &bull; Jerusalem Post &bull; Korea Times &bull; Yahoo Finance &bull; TradingKey &bull; UNITED24 Media &bull; CBS News &bull; Morgan Stanley &bull; Schwab Market Update &bull; Barchart &bull; GuruFocus &bull; ETF Trends &bull; Rio Times
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
