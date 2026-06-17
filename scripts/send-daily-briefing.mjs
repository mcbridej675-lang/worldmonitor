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

    <!-- ===================== EVENT 1: STRAIT OF HORMUZ REOPENING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Set to Reopen as U.S.-Iran MoU Nears Signing; Brent Crude Plunges Below $80 for First Time Since March</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The tentative <strong>U.S.-Iran deal announced June 14</strong> is set to be formally signed on <strong>June 19 in Switzerland</strong>, committing Iran to immediately reopen the Strait of Hormuz &mdash; the chokepoint through which <strong>~20% of global oil and gas</strong> once flowed before the war shut it down. Iran has already exported its <strong>first oil shipment in two months</strong>, and TankerTrackers confirmed vessel movements resuming. The deal also grants Iran <strong>immediate U.S. oil waivers</strong> and envisions at least <strong>$300 billion in reconstruction aid</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, the timeline for full normalization remains uncertain. <strong>Iranian mines still litter the strait&rsquo;s waters</strong>, and the deal targets a return to prewar traffic levels in 30 days. Brent crude has now <strong>fallen ~5% for two consecutive sessions</strong>, settling near <strong>$79/bbl</strong> &mdash; a three-month low &mdash; as markets price in the coming supply flood. Australia relaxed its travel advisory for Gulf nations, signaling broader confidence in de-escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude at $79/bbl (-5% session), four straight sessions of declines. WTI tracking lower. TTF natural gas fell ~2% to &euro;42/MWh. EUR/USD stable at ~1.16. Global risk-on sentiment as energy-driven inflation fears recede. Government bond yields easing on both sides of the Atlantic.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost relief) &bull; Consumer discretionary broadly &bull; JETS (airline ETF) &bull; Shipping/logistics names &bull; Emerging market equities (inflation relief)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XLE (energy sector) &bull; XOP (oil &amp; gas E&amp;P) &bull; USO (oil ETF) &bull; COP, XOM, CVX (oil majors &mdash; lower crude prices) &bull; HAL, SLB (oilfield services)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA-ASEAN SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Eurasia / Southeast Asia / Trade &mdash; June 17&ndash;19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Putin Hosts ASEAN Leaders in Kazan for 35th Anniversary Summit; 10 Bilateral Talks Signal Deepening Russia-Southeast Asia Axis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President <strong>Vladimir Putin</strong> opened the <strong>Russia-ASEAN Commemorative Summit</strong> in Kazan on June 17, hosting leaders from <strong>11 Southeast Asian nations</strong> including Cambodia, Thailand, Vietnam, Singapore, and Malaysia. The three-day summit marks the <strong>35th anniversary of ASEAN-Russia relations</strong> and focuses on expanding the &ldquo;strategic partnership&rdquo; across trade, energy, and defense.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>Russia-ASEAN Business Forum</strong> is running in parallel, with the agenda centered on EAEU-ASEAN trade cooperation and creating optimal conditions for diversified economic ties. Putin is holding <strong>10 bilateral meetings</strong> with individual ASEAN leaders. The summit coincides with G7 leaders reaffirming &ldquo;unwavering&rdquo; support for Ukraine &mdash; highlighting the widening geopolitical divide. Malaysia announced new defense procurement from Russia, including Caesar howitzer systems via third-party arrangements.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical rebalancing.</strong> Russia deepening non-Western trade corridors reduces its isolation and creates alternative commodity flows. ASEAN nations benefit from discounted Russian energy. Potential sanctions risk for ASEAN firms engaged in restricted trade. Ruble mildly supportive on expanded trade partnerships.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> VNM (VanEck Vietnam ETF) &bull; THD (iShares Thailand ETF) &bull; EWS (iShares Singapore ETF) &bull; ASEAN commodity importers &bull; Russian energy exporters (Gazprom, Rosneft via Moscow exchange)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> European defense names exposed to sanctions compliance costs &bull; Firms with dual Russia-ASEAN exposure facing regulatory scrutiny
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: FEDERAL RESERVE DECISION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global / Central Banks / Monetary Policy &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Fed Holds Rates at 3.50&ndash;3.75% in Warsh&rsquo;s First Meeting; Hawkish Dot Plot Shows 9 of 18 Members Projecting a Rate Hike in 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Federal Reserve held its benchmark rate unchanged at <strong>3.50&ndash;3.75%</strong> on June 17 &mdash; new Chair <strong>Kevin Warsh&rsquo;s first FOMC meeting</strong> at the helm. Warsh confirmed he was the <strong>one dot missing from the dot plot</strong>, declining to offer his own rate projection &ldquo;consistent with his long-held views&rdquo; on the SEP format. He also announced <strong>task forces to overhaul major Federal Reserve operations</strong>, signaling a new era of structural reform.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The updated dot plot was notably <strong>hawkish</strong>: <strong>9 of 18 voting members</strong> project at least one rate hike before year-end, with <strong>6 projecting two 25bp hikes</strong>. The year-end 2026 median projection stands at <strong>3.750%</strong>. Markets had priced in ~97% odds of no change, but the dot plot&rsquo;s hawkish tilt &mdash; driven by energy-related inflation from the Iran war &mdash; sent the S&amp;P 500 and Nasdaq sharply lower. The 10-year yield erased losses to hover at <strong>4.46&ndash;4.50%</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> S&amp;P 500 and Nasdaq plummeted post-decision. Nasdaq -1.2% intraday. Dollar strengthened on hawkish dot plot. Bond yields rose &mdash; 10Y at 4.46&ndash;4.50%. Peripheral European bond spreads tightened.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> QQQ (Nasdaq 100 ETF) &bull; High-duration growth/tech stocks &bull; ARKK (ARK Innovation) &bull; Real estate/REITs (rate-sensitive) &bull; XLU (utilities &mdash; bond proxy)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UUP (Dollar ETF) &bull; KRE (regional banks &mdash; higher NIM) &bull; XLF (financials &mdash; steeper yield curve) &bull; BRK.B (Berkshire &mdash; insurance float yield) &bull; Short-duration bond ETFs (SHV, BIL)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: SPACEX ACQUIRES CURSOR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / AI &mdash; June 16&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">SpaceX Acquires AI Coding Startup Cursor for $60 Billion in Largest VC-Backed Acquisition Ever; SPCX Volatile Post-IPO</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Just four days after its <strong>record-breaking $75 billion IPO</strong> on Nasdaq (ticker: SPCX), SpaceX announced the acquisition of <strong>Cursor (Anysphere)</strong> &mdash; the AI-powered coding platform &mdash; for <strong>$60 billion in an all-stock deal</strong>, the largest acquisition of a venture-backed startup in history. The deal is expected to close in Q3 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          SpaceX&rsquo;s AI arm, <strong>SpaceXAI (formerly xAI, merged February 2026)</strong>, has been jointly training a model with Cursor for months. The acquisition is designed to close the gap with <strong>Anthropic and OpenAI</strong> in AI developer tooling. SPCX shares rose <strong>8% on the announcement</strong>, pushing market cap past <strong>$2.7 trillion</strong>, though the stock has since pulled back from a high of $225.64 to trade near <strong>$194</strong> amid broader market weakness. Fortune noted SpaceX&rsquo;s surging stock &ldquo;paid for the $60B deal in just hours of trading.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>AI sector consolidation signal.</strong> Validates AI developer tooling as a critical platform play. Raises competitive pressure on GitHub Copilot (MSFT), Anthropic (Claude Code), and smaller AI coding startups. IPO lockup expiration risk for SPCX in coming months.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SPCX (SpaceX, +8% on announcement, volatile) &bull; AI infrastructure plays (NVDA, AMD, AVGO &mdash; Cursor trains on GPU clusters) &bull; Developer tooling sector sentiment<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MSFT (Microsoft/GitHub Copilot &mdash; competitive pressure) &bull; Smaller AI coding startups (consolidation squeeze) &bull; SPCX near-term (post-IPO volatility, pulled back from $225 to ~$194)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: INDONESIA EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Natural Disaster / Commodities &mdash; June 16&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6.7-Magnitude Earthquake Strikes Indonesia&rsquo;s Sulawesi Island; At Least One Dead, Infrastructure Damaged in Palu Region</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A powerful <strong>6.7-magnitude earthquake</strong> struck Central Sulawesi, Indonesia on June 16, with the epicenter near <strong>Palu</strong> &mdash; the same city devastated by a quake and tsunami in 2018 that killed over 4,000 people. At least <strong>one person was killed</strong>, dozens were injured, and homes, hospitals, and infrastructure suffered damage. Patients were evacuated from hospitals as aftershocks continued into June 17.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          No tsunami warning was issued, but the shallow depth of the quake amplified surface damage. Central Sulawesi is a key region for <strong>nickel mining</strong> &mdash; Indonesia produces over <strong>50% of the world&rsquo;s mined nickel</strong>, critical for EV batteries and stainless steel. Any disruption to mining operations or port logistics in the region could tighten global nickel supply at a time when EV demand continues to grow.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Commodities focus.</strong> Nickel futures could spike if Sulawesi mining/port operations are disrupted. Indonesian rupiah under mild pressure. Insurance sector may face claims. Reconstruction spending expected if damage assessment widens.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Nickel futures (LME) &bull; Vale Indonesia (INCO.JK &mdash; potential supply disruption premium) &bull; BHP (BHP &mdash; non-Indonesian nickel benefits) &bull; Reinsurers (Munich Re, Swiss Re &mdash; if insured losses limited)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EIDO (iShares Indonesia ETF &mdash; near-term sentiment) &bull; Aneka Tambang (ANTM.JK &mdash; Sulawesi operations) &bull; Indonesian infrastructure names &bull; EV battery manufacturers if nickel supply tightens (higher input costs)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The energy trade is reversing &mdash; fast.</strong> The imminent Strait of Hormuz reopening has cratered Brent below $80 for the first time since March. Energy longs (XLE, COP, XOM) face material downside risk. Conversely, airlines (UAL, DAL), consumer discretionary, and emerging markets are the biggest beneficiaries of cheaper oil. Rotate accordingly &mdash; the peace dividend is being priced in now, not later.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Fed just blinked hawkish &mdash; and it matters globally.</strong> Warsh&rsquo;s first meeting delivered a dot plot signaling potential rate hikes in 2026. This is a headwind for duration-heavy assets, growth stocks, and emerging market currencies. Financials (XLF, KRE) and the dollar are the beneficiaries. Watch the 10Y yield at 4.50% as a critical resistance level &mdash; a sustained break above could trigger broader risk-off flows.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Geopolitical realignment is accelerating.</strong> The Russia-ASEAN summit in Kazan signals the continued fragmentation of the global trade order into competing blocs. SpaceX&rsquo;s $60B Cursor acquisition reshapes the AI landscape &mdash; consolidation is now the dominant trend in AI developer tooling. Indonesia&rsquo;s earthquake introduces supply-side risk to the nickel market. Diversification across geographies and sectors is the playbook.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 17, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.57%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.15%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.64%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.58% (8,864)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.72% (69,902 ATH)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.10% (24,935)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$78.96 (-5.0%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$4,371 (+0.47%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EUR/USD</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">1.16</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.46&ndash;4.50%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">SPCX (SpaceX)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~$194 (IPO $135)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Bloomberg &bull; CNBC &bull; Reuters &bull; Al Jazeera &bull; CaixaBank Research &bull; TheStreet &bull; Fox Business &bull; CBS News &bull; Fortune &bull; Yahoo Finance &bull; NBC News &bull; Washington Post &bull; Euronews &bull; Interfax &bull; ASEAN Secretariat &bull; IC Markets &bull; Schwab Market Update &bull; TradingKey &bull; ABC News &bull; Courthouse News &bull; PBS News
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
