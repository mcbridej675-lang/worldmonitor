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

    <!-- ===================== EVENT 1: GLOBAL SEMICONDUCTOR MELTDOWN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Semiconductors &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Semiconductor Meltdown: Nasdaq Crashes 4%, KOSPI Circuit Breaker Triggered as $1 Trillion Wiped from Markets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A cascading global semiconductor selloff erupted on June 5, triggered by <strong>Broadcom&rsquo;s disappointing AI chip guidance</strong> from its June 3 earnings and amplified by a <strong>scorching U.S. jobs report</strong> (172K vs. 85K expected) that sent Treasury yields surging and crushed rate-cut hopes. The <strong>Nasdaq plunged 4.18%</strong> &mdash; its worst day since April 2025 &mdash; while the <strong>S&amp;P 500 fell 2.64%</strong> in the worst session since October.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The contagion hit Asia hardest: South Korea&rsquo;s <strong>KOSPI plunged 5.54%</strong>, triggering the exchange&rsquo;s circuit breaker after KOSPI 200 futures fell 5%. <strong>Samsung Electronics dropped 6.4%</strong> and <strong>SK Hynix collapsed 9.92%</strong> &mdash; these two stocks alone account for over 50% of the KOSPI&rsquo;s weight. Leveraged Korean semiconductor ETFs crashed 20% in a single session. Japan&rsquo;s <strong>Nikkei 225 fell 1.31%</strong> to 66,588. In the U.S., <strong>Marvell Technology plunged 16%</strong>, <strong>Micron fell 13%</strong>, and <strong>Intel and AMD dropped ~11% each</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> Nasdaq -4.18%, S&amp;P 500 -2.64%, Dow -1.35%, KOSPI -5.54% (circuit breaker triggered), Nikkei -1.31%. Over $1 trillion in market cap erased globally. 10Y Treasury yield spiked to 4.54%.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MRVL (Marvell, -16%) &bull; MU (Micron, -13%) &bull; INTC (Intel, -11%) &bull; AMD (-11%) &bull; AVGO (Broadcom, -3.8%) &bull; NVDA (Nvidia, -6%) &bull; Samsung (005930.KS, -6.4%) &bull; SK Hynix (000660.KS, -9.92%) &bull; META (-6.6%, equity offering fears) &bull; SOXX, SMH (semiconductor ETFs)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Dow hit record despite broader selloff (rotation to value/defensives) &bull; USD Index surged on hot jobs data &bull; Short-volatility unwind benefited VIX-linked products
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: UKRAINE WAR SPILLS INTO NATO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Geopolitics / Security &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine War Spills into NATO: Maritime Drone Explodes at Romania&rsquo;s Constanta Port, 1,300 Evacuated</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>Ukrainian naval drone exploded inside Romania&rsquo;s Constanta port</strong> at 10:30 a.m. local time on June 5 after allegedly losing control due to <strong>Russian electronic warfare jamming</strong>. Three additional sea drones detonated outside the port. Romania &mdash; a <strong>NATO member state</strong> &mdash; evacuated over 1,300 people from nearby beaches and blocked coastal routes. No injuries were reported.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This marks the <strong>second security incident on Romanian shores this week</strong>, following the detonation of a drifting Russian anti-landing mine. European Commission President <strong>Ursula von der Leyen</strong> called it a &ldquo;direct consequence&rdquo; of the Russia-Ukraine war. The incident near an <strong>oil terminal</strong> heightens fears of war spillover into NATO territory, with significant implications for Black Sea shipping routes and European energy security. Ukrainian missiles also struck <strong>St. Petersburg</strong> this week as Putin&rsquo;s economic forum convened.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical risk premium rising.</strong> Black Sea shipping and insurance costs likely to increase. European energy security under renewed focus. European defense budgets face upward pressure. Romanian leu under mild pressure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Rheinmetall (RHM.DE) &bull; BAE Systems (BA.L) &bull; Leonardo (LDO.MI) &bull; Saab (SAAB-B.ST) &bull; ITA, PPA (U.S. defense ETFs) &bull; European defense broadly &bull; Black Sea shipping insurers<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Black Sea-dependent grain exporters &bull; Romanian equities (BET index) &bull; European tourism stocks with Black Sea coast exposure &bull; Shipping companies with Black Sea routes
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBRD GROWTH DOWNGRADE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global / Economics / Energy &mdash; June 3&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EBRD Slashes Growth Forecast by 0.5pp as Strait of Hormuz Closure Triggers Persistent Global Energy Shock</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Bank for Reconstruction and Development published its <strong>&ldquo;Strai(gh)t Talk&rdquo;</strong> report, cutting 2026 aggregate growth across its regions from <strong>3.6% to 3.1%</strong> &mdash; a sharp <strong>0.5 percentage point downward revision</strong> from its February outlook. The EBRD identifies the <strong>Middle East conflict and Strait of Hormuz closure</strong> as the principal economic shock, with rising oil and gas prices, supply chain disruptions, and a widening EU-U.S. energy cost gap crushing competitiveness.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Inflation across EBRD regions has <strong>reversed course</strong>, jumping 1.2 percentage points to <strong>6.4% average</strong> between February and April 2026. <strong>Iraq&rsquo;s economy is expected to contract -1.5%</strong> in 2026, with only 12&ndash;15% of its oil shipments successfully rerouted. OPEC Secretary General <strong>Haitham Al Ghais</strong> said at the St. Petersburg forum that OPEC expects robust demand and is not changing estimates &mdash; signaling no supply relief. Brent crude hovers near <strong>$95/barrel</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Structurally bearish for emerging markets, bullish for energy.</strong> Rising inflation across EBRD regions pressures central banks. European natural gas prices remain elevated. OPEC&rsquo;s refusal to adjust estimates keeps supply tight. Strong USD on rate-hike expectations adds further EM pressure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XLE (Energy Select Sector, +28% YTD) &bull; COP (ConocoPhillips) &bull; XOM (ExxonMobil) &bull; CVX (Chevron) &bull; Shell (SHEL) &bull; TotalEnergies (TTE) &bull; USO (oil ETF) &bull; European gas utilities<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EEM (Emerging Markets ETF) &bull; Turkish lira, Egyptian pound under pressure &bull; UAL, DAL, AAL (airlines &mdash; jet fuel costs) &bull; European industrials with high energy intensity &bull; Iraqi equities &bull; Consumer discretionary globally (inflation headwinds)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: IRAN TALKS COLLAPSE / HEZBOLLAH REJECTS CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 4&ndash;5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S.-Iran Negotiations &ldquo;Hanging by a Thread&rdquo;; Hezbollah Rejects Lebanon Ceasefire as Multi-Front Escalation Intensifies</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.S.-Iran peace talks are on the verge of collapse</strong>, with Iranian officials publicly stating they have &ldquo;yet to deploy the full power of their military&rdquo; and are &ldquo;prepared for any scenario, including direct confrontation.&rdquo; The Strait of Hormuz remains effectively closed, choking <strong>~20% of global oil transit</strong>. Companies are scrambling to find alternative routes for oil, fertilizer, and consumer goods.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, <strong>Hezbollah leader Naim Qassem rejected the U.S.-brokered Israel-Lebanon ceasefire</strong>, with Israeli airstrikes and Hezbollah rocket and drone attacks continuing in southern Lebanon despite the agreement. The U.S. House voted to end the war in Iran &mdash; a rare break between the <strong>GOP-majority legislature and the Trump administration</strong> &mdash; though the measure has not yet passed into law. The multi-front escalation across Iran, Lebanon, and the Gulf keeps energy prices structurally elevated and geopolitical risk premiums high.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude near $95/barrel, structurally supported by Hormuz closure. Any complete collapse in talks could send crude above $100. Gold dropped below $4,370 (lowest of 2026) as strong USD/yields offset safe-haven demand. Defense sector remains well-bid.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Oil majors (XOM, CVX, COP, Shell, TotalEnergies) &bull; Defense (LMT, RTX, NOC, GD) &bull; Tanker stocks (FRO, STNG, INSW &mdash; rerouting premium) &bull; XOP (E&amp;P ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Gold (XAU below $4,370 &mdash; yields trumping safe-haven) &bull; GLD (gold ETF) &bull; Airlines (UAL, DAL, LUV) &bull; Cruise lines (CCL, RCL &mdash; Eastern Med exposure) &bull; Israeli equities (EIS ETF) &bull; Lebanese banking sector
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: STRONG US JOBS DATA RESHAPES GLOBAL MONETARY OUTLOOK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Macro / Monetary Policy &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. May Payrolls Shatter Forecasts (172K vs. 85K), Gold Crashes to 2026 Low as Fed Rate-Hike Odds Surge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. economy added <strong>172,000 jobs in May</strong> &mdash; more than double the 85,000 consensus &mdash; marking the <strong>third consecutive consensus-beating payrolls print</strong>. Unemployment held steady at <strong>4.3%</strong>. Leisure and hospitality led with 70,000 jobs (vs. 14,000/month average), partly driven by <strong>FIFA World Cup hiring</strong>. The benchmark <strong>10-year Treasury yield jumped to 4.54%</strong>, and markets now price a quarter-point Fed rate hike by year-end.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The &ldquo;good news is bad news&rdquo; reaction was severe: <strong>gold crashed below $4,370</strong> to its lowest level of 2026, heading for a weekly decline of nearly 4%. The <strong>U.S. Dollar Index surged</strong>, pressuring emerging-market currencies. Both the <strong>Fed and ECB</strong> have maintained cautious tones on rate adjustments for Q3 2026, but three consecutive hot jobs reports now strengthen the hawks&rsquo; case considerably. The global implications are significant: a stronger dollar and higher U.S. yields tighten financial conditions worldwide, hitting emerging markets and high-duration assets hardest.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> 10Y yield at 4.54%, 30Y above 5%. Rate-hike pricing repriced across the curve. Dollar surged, gold crushed. EM currencies under pressure. Financial conditions tightening globally.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> USD (DXY) &bull; UUP (dollar bull ETF) &bull; Bank stocks (JPM, BAC, GS &mdash; higher rate margins) &bull; TBT (short Treasury ETF) &bull; Insurance (MET, PRU) &bull; Leisure &amp; hospitality (MAR, HLT &mdash; strong hiring signals demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GLD (gold, -4% weekly) &bull; TLT (long-duration Treasuries) &bull; High-growth tech (rate-sensitive) &bull; EEM (EM ETF &mdash; dollar strength headwind) &bull; Real estate (VNQ &mdash; higher mortgage rates) &bull; Utilities (XLU &mdash; bond proxy selloff)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The semiconductor reckoning is global and interconnected.</strong> Broadcom&rsquo;s guidance miss exposed concentration risk across markets &mdash; Samsung and SK Hynix alone drove 75% of KOSPI&rsquo;s 2026 gains. With Korea&rsquo;s circuit breaker triggered and leveraged products down 20%, this selloff tests the AI narrative at a critical moment. Watch for dip-buying signals in NVDA and TSM next week &mdash; but the &ldquo;buy every chip dip&rdquo; playbook is being questioned.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Geopolitical risks are compounding, not resolving.</strong> The Romania drone incident, Iran talk collapse, and Hezbollah ceasefire rejection all point to escalation, not de-escalation. The Strait of Hormuz closure is now a structural feature, not a temporary shock &mdash; the EBRD&rsquo;s 0.5pp growth downgrade confirms this. Energy longs (XLE, COP, XOM) remain the best geopolitical hedge, while defense stocks (RHM, BAE, LMT) benefit from both Eastern European and Middle Eastern escalation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Monetary policy is turning hawkish worldwide.</strong> Three consecutive hot U.S. jobs prints have killed the rate-cut narrative. Gold&rsquo;s 4% weekly crash below $4,370 signals the market is repricing for &ldquo;higher for longer&rdquo; with potential hikes. A strong dollar tightens conditions globally &mdash; EM assets and high-duration positions face headwinds. Rotate toward value, financials, and energy; reduce exposure to rate-sensitive growth and EM debt.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 5, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,383.74 (-2.64%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,709.43 (-4.18%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">50,866.78 (-1.35%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">8,160.59 (-5.54%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">66,588.12 (-1.31%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Euro STOXX 50</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">6,103 (+0.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$95/bbl</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold (XAU)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">&lt;$4,370 (-4% weekly)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">4.54% (rising)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">U.S. 30Y Yield</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">&gt;5.00%</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; Al Jazeera &bull; Bloomberg &bull; Reuters &bull; TheStreet &bull; Yahoo Finance &bull; Korea Herald &bull; Seoul Economic Daily &bull; TradingKey &bull; Washington Post &bull; EBRD &bull; Euronews &bull; BLS.gov &bull; FXStreet &bull; Kyiv Independent &bull; NPR &bull; PBS &bull; Fortune &bull; FDD Overnight Brief
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
