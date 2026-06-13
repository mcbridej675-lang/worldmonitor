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

    <!-- ===================== EVENT 1: US-IRAN PEACE DEAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 12&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Peace Deal on Verge of Signing; Strait of Hormuz Reopening Expected &mdash; Oil Plunges 4%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan&rsquo;s Prime Minister <strong>Shehbaz Sharif announced on June 12</strong> that the US and Iran have reached a <strong>final, agreed-upon text</strong> of a peace deal, with finalization &ldquo;likely expected in the next 24 hours.&rdquo; President <strong>Trump declared the deal will be signed on Sunday</strong>, stating the Strait of Hormuz will be &ldquo;open to all&rdquo; immediately after signing. The 14-point draft agreement includes the <strong>lifting of oil sanctions</strong> and a commitment from Tehran to reopen the Strait within 30 days.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz has been effectively closed since <strong>February 28</strong>, disrupting ~20% of global oil supply and keeping crude elevated above $100 for months. Remaining hurdles include <strong>verification mechanisms, factional approvals in Tehran, and full implementation timelines</strong>. If signed, this would be the most consequential Middle East diplomatic breakthrough in decades &mdash; with immediate and massive implications for global energy markets, inflation, and central bank policy worldwide.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude plunged over 4% to ~$86.50, down from $105+ earlier in June. WTI tracking lower. If signed, oil could fall toward $70&ndash;75 as Hormuz supply returns. <strong>Gold</strong> at $4,219 &mdash; safe-haven bid easing. Equities rallied broadly on peace hopes: S&amp;P 500 +0.50%, Dow +0.70%.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XLE (energy sector ETF) &bull; XOP (oil &amp; gas E&amp;P) &bull; COP, XOM, CVX (oil majors face revenue compression) &bull; USO (oil ETF) &bull; HAL, SLB (oilfield services)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost relief) &bull; Consumer discretionary broadly &bull; Emerging market equities (inflation relief) &bull; JETS (airline ETF) &bull; European industrials (lower input costs)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: ECB RATE HIKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Monetary Policy / Bonds &mdash; June 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">ECB Hikes Interest Rates for First Time Since 2023 &mdash; Iran War Energy Costs Force Reversal of Easing Cycle</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Central Bank raised its <strong>three key interest rates by 25 basis points</strong> on June 11, bringing the deposit facility rate to <strong>2.25%</strong>, main refinancing to <strong>2.40%</strong>, and marginal lending to <strong>2.65%</strong> (effective June 17). This was the <strong>first rate hike in three years</strong>, reversing the easing cycle that had been underway since mid-2024.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The decision was driven by <strong>eurozone inflation accelerating to 3.2% in May</strong> &mdash; well above the 2% target &mdash; fueled by the Strait of Hormuz closure and soaring energy costs. ECB staff projections now see <strong>headline inflation averaging 3.0% in 2026, 2.3% in 2027, and 2.0% in 2028</strong>. Markets are pricing roughly <strong>50% probability of a further hike in September</strong>. However, if the Iran peace deal materializes, energy-driven inflation could ease rapidly, potentially making this the only hike in the cycle.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> European government bond yields rose. German 10Y Bund yields up. Euro strengthened modestly vs. USD on rate differential. European bank stocks generally supported by wider net interest margins.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> European banks &mdash; BNP Paribas (BNP.PA), Deutsche Bank (DBK.DE), ING Group (INGA.AS) &bull; EUR/USD pair &bull; EUFN (iShares MSCI Europe Financials ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> European REITs &amp; real estate &mdash; Vonovia (VNA.DE), Unibail-Rodamco (URW.AS) &bull; European utilities (higher borrowing costs) &bull; Growth/tech stocks on European exchanges &bull; EZU (iShares MSCI Eurozone ETF &mdash; tighter monetary conditions)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SPACEX IPO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global / Capital Markets / Aerospace &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">SpaceX Completes Largest IPO in Wall Street History &mdash; SPCX Surges 19% to $161, Valuation Hits $1.77 Trillion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          SpaceX began trading on the <strong>Nasdaq under ticker SPCX</strong> on June 12, offering 555.56 million Class A shares at <strong>$135 per share</strong>. The stock opened at <strong>$150</strong> (11% above IPO price), surged over 30% intraday &mdash; briefly giving SpaceX a market value exceeding <strong>$2.25 trillion</strong> &mdash; before closing at <strong>$160.95, up 19%</strong>. The company raised a historic <strong>$75 billion</strong>, making it the largest IPO ever.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The debut made <strong>Elon Musk the world&rsquo;s first trillionaire</strong>. SpaceX&rsquo;s implied valuation of <strong>$1.77 trillion</strong> places it among the top 10 most valuable public companies globally on day one. The successful listing is a bellwether for private-to-public market sentiment and validates the commercial space economy thesis. It also boosted broader market sentiment on June 12, with the S&amp;P 500 gaining 0.50% and the Nasdaq rising 0.31%.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>IPO market:</strong> Validates mega-cap private company listings. Liquidity drawn toward SPCX may pressure other high-growth names near-term. Nasdaq outperformance supported. Massive positive signal for IPO pipeline (Stripe, Databricks, others watching).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SPCX (SpaceX, +19% day 1) &bull; ARKX (ARK Space Exploration ETF) &bull; LMT (Lockheed Martin &mdash; space/defense peer) &bull; RTX (Raytheon &mdash; defense/aerospace) &bull; RKLB (Rocket Lab &mdash; commercial space peer, sentiment lift) &bull; TSLA (Tesla &mdash; Musk halo effect)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Other mega-cap IPO candidates may see valuation pressure &bull; Some liquidity rotation out of existing tech names into SPCX
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: FIFA WORLD CUP 2026 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Sports / Consumer Economy &mdash; June 11&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">FIFA World Cup 2026 Kicks Off Across North America &mdash; Largest Tournament in History With 48 Nations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2026 FIFA World Cup</strong> &mdash; the first with <strong>48 teams</strong> and co-hosted by the <strong>United States, Canada, and Mexico</strong> &mdash; kicked off on June 11 and is now in full swing. June 13 matches include <strong>Switzerland vs. Qatar (Group B), Brazil vs. Morocco, Haiti vs. Scotland (Group C), and Australia vs. T&uuml;rkiye (Group D)</strong>. The opening day saw the US defeat Paraguay 4&ndash;1 and Canada draw 1&ndash;1 with Bosnia and Herzegovina.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The tournament is the <strong>largest single sporting event in history</strong>, spanning 104 matches across 16 venues in three countries over five weeks. FIFA projects <strong>$11+ billion in total economic impact</strong> across host cities, with record TV viewership expected to exceed 5 billion cumulative viewers. The event is a massive catalyst for advertising, hospitality, travel, and media sectors globally &mdash; particularly in the Americas.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Consumer/Media:</strong> Record ad spending benefits broadcasters and streaming platforms. Hospitality and travel sectors in host cities seeing demand surge. Sports betting volumes hitting all-time highs globally.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DIS (Disney/ESPN &mdash; broadcasting rights) &bull; CMCSA (Comcast/Telemundo) &bull; GOOGL (YouTube streaming) &bull; MAR, HLT (Marriott, Hilton &mdash; host city hotels) &bull; DKNG, FLUT (DraftKings, Flutter &mdash; sports betting) &bull; NKE, ADDYY (Nike, Adidas &mdash; official sponsors/kit makers) &bull; SBUX, MCD (consumer foot traffic)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Productivity losses estimated at $8&ndash;12B globally &bull; Some worker absenteeism headwinds for employers in participating nations
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: PENTAGON CHINA BLACKLIST ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">US-China / Technology / Trade &mdash; June 8&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Blacklists Alibaba, BYD, Baidu &amp; Dozens of Chinese Tech Giants as &ldquo;Military Companies&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US Department of Defense published an updated <strong>&ldquo;1260H list&rdquo;</strong> designating dozens of major Chinese companies as <strong>&ldquo;Chinese Military Companies,&rdquo;</strong> including <strong>Alibaba (BABA), BYD (BYDDY), Baidu (BIDU), NIO (NIO), and CALB</strong>. The designations prohibit the Pentagon from contracting with listed companies and bar procurement through third parties beginning June 2027.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This represents a <strong>dramatic escalation in the US-China tech cold war</strong>, moving beyond semiconductor restrictions to target China&rsquo;s largest consumer technology, electric vehicle, and AI companies. BYD is the <strong>world&rsquo;s largest EV maker</strong>; Alibaba is a <strong>top-3 global cloud provider</strong>; Baidu leads in autonomous driving. Alibaba rejected the designation, stating it is &ldquo;not a Chinese military company.&rdquo; China condemned the move as economic coercion. The blacklist is forcing <strong>global institutional investors, pension funds, and index providers to reassess their China exposure</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Chinese tech:</strong> Institutional selling pressure accelerating as compliance teams review portfolios. Alibaba fell to $119.84, Baidu dropped 2.3%, BYD declined 0.5%. Hang Seng Tech Index under pressure. KWEB and MCHI ETFs face outflow risk.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> BABA (Alibaba) &bull; BIDU (Baidu) &bull; BYDDY (BYD) &bull; NIO (NIO) &bull; XPEV (XPeng) &bull; LI (Li Auto) &bull; KWEB (KraneShares China Internet ETF) &bull; MCHI (iShares MSCI China ETF)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> TSLA (Tesla &mdash; reduced EV competition) &bull; RIVN, LCID (Western EV peers) &bull; AMZN, MSFT, GOOGL (cloud rotation from Alibaba) &bull; TSM, ASML, NVDA (supply chain decoupling beneficiaries)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran deal is the single biggest macro catalyst in months.</strong> If signed Sunday, expect oil to crater toward $70&ndash;75, airlines and consumer discretionary to surge, and energy longs to face sharp drawdowns. The ECB&rsquo;s rate hike may prove to be a one-and-done if energy-driven inflation reverses. Hedge energy positions now. The risk/reward has flipped &mdash; short oil via puts or reduced long exposure is prudent ahead of the weekend.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">SpaceX&rsquo;s IPO validates risk appetite.</strong> The largest IPO in history closing up 19% signals robust institutional demand for growth assets. This is bullish for the broader IPO pipeline and supports the &ldquo;risk-on&rdquo; narrative alongside peace deal optimism. Watch for SPCX&rsquo;s first full trading week for price discovery.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">US-China decoupling accelerates &mdash; rotate accordingly.</strong> The Pentagon blacklist of Alibaba, BYD, and Baidu is the broadest yet, forcing institutional China exposure reductions. Western alternatives (TSLA, AMZN, MSFT) are structural beneficiaries. Meanwhile, the <strong>G7 summit in &Eacute;vian (June 15&ndash;17)</strong> will set Monday&rsquo;s market tone &mdash; any joint communiqu&eacute; on Iran sanctions relief or Ukraine reconstruction will move markets. The World Cup provides a consumer spending tailwind regardless of geopolitics &mdash; media, hospitality, and betting names are structural beneficiaries through mid-July.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 12&ndash;13, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">7,431.46 (+0.50%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">25,888.84 (+0.31%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">51,202 (+0.70%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">8,123.62 (+4.63%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">66,020 (+2.81%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">24,635 (+1.76%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">10,472 (+1.63%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$86.80 (-4.2%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$4,219 (+0.22%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">SpaceX (SPCX)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$160.95 (+19.2% IPO day)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">ECB Deposit Rate</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">2.25% (+25bp hike)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NBC News &bull; Al Jazeera &bull; NPR &bull; CNBC &bull; Euronews &bull; Reuters &bull; Trading Economics &bull; Yahoo Finance &bull; TradingKey &bull; Nasdaq.com &bull; U.S. EIA &bull; European Central Bank &bull; FIFA.com &bull; ESPN &bull; EU Council &bull; Schwab Market Update &bull; Capital Economics &bull; Polymarket
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
