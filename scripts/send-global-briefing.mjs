#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing + Market Impact
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-global-briefing.mjs
 */

const RECIPIENTS = ['johnmcbride2928@gmail.com'];
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing &amp; Market Impact</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitical &bull; Economic &bull; Health &bull; Markets &bull; No American Bias</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; May 4, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr>
          <td style="color: #888; padding: 4px 0;">S&amp;P 500</td>
          <td style="color: #dc2626; padding: 4px 0; text-align: right;">7,189 &darr; 0.5%</td>
          <td style="color: #888; padding: 4px 0; padding-left: 20px;">WTI Crude</td>
          <td style="color: #22c55e; padding: 4px 0; text-align: right;">$105.14 &uarr; 3.1%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">Dow Jones</td>
          <td style="color: #dc2626; padding: 4px 0; text-align: right;">49,960 &darr; 1.1%</td>
          <td style="color: #888; padding: 4px 0; padding-left: 20px;">Brent Crude</td>
          <td style="color: #22c55e; padding: 4px 0; text-align: right;">$114+ &uarr; 5.4%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">Nasdaq</td>
          <td style="color: #dc2626; padding: 4px 0; text-align: right;">25,010 &darr; 0.4%</td>
          <td style="color: #888; padding: 4px 0; padding-left: 20px;">Gold</td>
          <td style="color: #dc2626; padding: 4px 0; text-align: right;">$4,532 &darr; 2.4%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 4px 0;">10Y Treasury</td>
          <td style="color: #dc2626; padding: 4px 0; text-align: right;">4.45% &uarr; 8bps</td>
          <td style="color: #888; padding: 4px 0; padding-left: 20px;">Bitcoin</td>
          <td style="color: #22c55e; padding: 4px 0; text-align: right;">$80,000+ &uarr;</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy &mdash; May 2&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Submits 14-Point Peace Counter-Proposal; Strait of Hormuz Attacks Escalate</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran submitted a <strong>14-point counter-proposal</strong> to the United States through a Pakistani intermediary to end the now 65-day-old conflict. Key demands include withdrawal of U.S. forces from Iran&rsquo;s periphery, an end to the naval blockade, release of frozen assets, payment of reparations, lifting of all sanctions, and a new mechanism governing the <strong>Strait of Hormuz</strong>. Tehran demands a <strong>30-day resolution</strong> vs. the U.S.-proposed two-month ceasefire.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump signaled he would likely reject the proposal, saying Iran &ldquo;has not yet paid a big enough price.&rdquo; Meanwhile, the IRGC launched cruise missiles at American warships and commercial vessels near the Strait. The UAE&rsquo;s <strong>Fujairah oil hub</strong> suffered a fire after intercepting Iranian missiles &mdash; the first major infrastructure hit in weeks.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            This is the single most market-moving event right now. <strong>WTI crude surged 3.1% to $105.14</strong> and <strong>Brent jumped 5.4% above $114</strong> on the Fujairah attack and Hormuz disruption. ~20% of global oil transits the Strait of Hormuz. Prolonged conflict above $100/bbl risks tipping the global economy into recession.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish</span> &mdash; Exxon Mobil (XOM), Chevron (CVX), ConocoPhillips (COP), Halliburton (HAL), Schlumberger (SLB), Devon Energy (DVN). Defense stocks: Lockheed Martin (LMT), RTX Corp (RTX), Northrop Grumman (NOC). <span style="color: #dc2626;">Bearish</span> &mdash; Airlines: Delta (DAL), United (UAL), Ryanair (RYAAY). Shipping: ZIM Integrated (ZIM). Consumers: Walmart (WMT), Target (TGT) face margin pressure from elevated fuel costs. <strong>ETFs:</strong> Energy Select SPDR (XLE) &uarr;, JETS ETF (JETS) &darr;, iShares MSCI UAE (UAE) &darr;.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Europe &mdash; May 1&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Withdraws 5,000 Troops from Germany; Trump Threatens Further Reductions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pentagon announced the withdrawal of approximately <strong>5,000 U.S. troops from Germany</strong> over the next 6&ndash;12 months &mdash; a 14% reduction of the 36,000 American service members stationed there. The move came after German Chancellor <strong>Friedrich Merz</strong> criticized Washington&rsquo;s &ldquo;humiliating&rdquo; lack of strategy in the Iran war. Trump then escalated, stating reductions would go &ldquo;a lot further&rdquo; than 5,000.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The withdrawal reverses the Biden-era buildup following Russia&rsquo;s 2022 invasion of Ukraine. Republican lawmakers issued a rare rebuke, warning it sends the wrong signal to Moscow. Germany says the move was &ldquo;anticipated&rdquo; and Spain and Italy could be next.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            Weakens NATO&rsquo;s European deterrence posture and signals a broader U.S. retrenchment from Europe. European defense stocks should benefit as the continent accelerates rearmament. The euro may face pressure on geopolitical uncertainty.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish</span> &mdash; European defense: Rheinmetall (RHM.DE), BAE Systems (BA.L), Leonardo (LDO.MI), Thales (HO.PA), Saab (SAAB-B.ST). These companies benefit from EU rearmament spending. <span style="color: #dc2626;">Bearish</span> &mdash; U.S. base-dependent German localities hurt local economies; EUR/USD may weaken. <strong>ETFs:</strong> iShares MSCI Germany (EWG) faces pressure, Global X Defense Tech (SHLD) &uarr;.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Africa / Diplomacy &mdash; May 3&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Africa Xenophobia Crisis Triggers Pan-African Diplomatic Fallout; Nigeria Prepares Evacuation Flights</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A wave of anti-immigrant violence across South Africa has killed at least <strong>two Nigerians and four Ethiopians</strong> in recent weeks, triggering a major pan-African diplomatic crisis. <strong>Nigeria summoned South Africa&rsquo;s acting High Commissioner</strong> and began organizing voluntary repatriation flights, with 130 Nigerians already registered for evacuation. <strong>Ghana</strong> has publicly rebuked South Africa for its &ldquo;slow and inadequate response.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Anti-immigrant groups including <strong>Operation Dudula</strong> and <strong>Put South Africans First</strong> are planning another wave of nationwide demonstrations from <strong>May 4&ndash;8</strong>. Tit-for-tat trader expulsions have been reported in West Africa. The crisis threatens to undermine the <strong>African Continental Free Trade Area (AfCFTA)</strong> and Pan-African solidarity at a critical juncture for the continent&rsquo;s economic integration.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            The South African Rand (ZAR) faces its highest-volatility positioning since the 2024 GNU formation. Foreign investment confidence is under pressure, and AfCFTA trade integration momentum is at risk. South African domestic equities are vulnerable to capital flight and political instability, particularly if the May 4&ndash;8 protests escalate further.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks to watch:</strong> <span style="color: #dc2626;">Bearish</span> &mdash; Naspers (NPN.JO) / Prosus (PRX.AS), FirstRand (FSR.JO), Standard Bank (SBK.JO), Sasol (SSL). South African banks and consumer stocks face elevated risk. Nigerian banks may see short-term volatility. <strong>ETFs:</strong> iShares MSCI South Africa (EZA) &darr;, VanEck Africa Index (AFK) &darr;. <span style="color: #22c55e;">Potential upside</span> &mdash; Other African markets (Kenya, Egypt) may attract diverted investment flows.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Asia / Economy &mdash; May 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea Factory Activity Surges to 4-Year High as Semiconductor Demand Booms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s manufacturing PMI jumped to <strong>53.6 in April</strong>, up from 52.6 in March &mdash; the <strong>strongest expansion since February 2022</strong>. The semiconductor sector powered both output and new orders, with firms receiving additional orders to build inventory against war-related supply chain disruptions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, <strong>input cost inflation surged to the steepest level since the series began in April 2004</strong>, driven by elevated energy prices and supply chain bottlenecks. The PHLX semiconductor index has posted gains in 22 of its last 23 sessions, hitting its 15th intraday all-time high of 2026. S&amp;P 500 tech earnings growth stands at a blended 27.1%.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            The semiconductor super-cycle continues unabated, driven by AI demand and war-related inventory hoarding. However, record input cost inflation is a warning signal &mdash; margin compression may hit in Q3 if energy costs remain elevated. Korean won strength supports exports but complicates BOK monetary policy.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks to watch:</strong> <span style="color: #22c55e;">Bullish</span> &mdash; Samsung Electronics (005930.KS), SK Hynix (000660.KS), TSMC (TSM), NVIDIA (NVDA), ASML (ASML), Applied Materials (AMAT), Lam Research (LRCX). Memory and AI chip makers benefit from inventory building. <span style="color: #dc2626;">Bearish</span> &mdash; Cost-sensitive downstream manufacturers may face margin pressure. Watch for Korean steel/chemicals. <strong>ETFs:</strong> iShares Semiconductor (SOXX) &uarr;, iShares MSCI South Korea (EWY) &uarr;, VanEck Semiconductor (SMH) &uarr;.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Health / Global &mdash; May 3&ndash;4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Hantavirus Outbreak Kills 3 on Atlantic Cruise Ship; WHO Coordinates Response</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three passengers have died and at least six are infected with suspected <strong>hantavirus</strong> aboard the <strong>MV Hondius</strong>, an expedition cruise ship now anchored off <strong>Praia, Cape Verde</strong>. The vessel, operated by Oceanwide Expeditions, departed Ushuaia, Argentina over a month ago with stops in Antarctica and Saint Helena. <strong>149 people remain aboard</strong>, including 17 Americans.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The WHO is facilitating medical evacuations and conducting a full risk assessment. One patient is in intensive care in South Africa. The CDC notes that <strong>more than one-third of patients</strong> who develop hantavirus respiratory symptoms may die. While WHO says public risk remains low, the outbreak raises serious questions about disease surveillance in the cruise industry.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            Limited broader market impact unless the outbreak spreads beyond the vessel. Cruise stocks may face short-term sentiment pressure. The incident revives post-COVID scrutiny of cruise ship health protocols, but WHO&rsquo;s low public risk assessment should contain fears.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Stocks to watch:</strong> <span style="color: #dc2626;">Bearish (short-term)</span> &mdash; Cruise operators: Carnival (CCL), Royal Caribbean (RCL), Norwegian Cruise Line (NCLH). Expedition/luxury operators most exposed. <span style="color: #22c55e;">Bullish</span> &mdash; Diagnostic/biotech: Vir Biotechnology (VIR), bioMerieux (BIM.PA), Hologic (HOLX). Travel insurance providers may see demand uptick. <strong>ETFs:</strong> ETFMG Travel Tech (AWAY) may face mild pressure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ALSO NOTABLE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Also Notable</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0 0 8px;">
        <strong style="color: #fff;">Australia-Japan Critical Minerals:</strong> PM Takaichi signed a landmark A$1.67B (US$1.20B) critical minerals pact in Australia targeting gallium, nickel, graphite, and rare earths &mdash; a direct challenge to Chinese supply chain dominance. Watch Lynas (LYC.AX), MP Materials (MP), and REMX ETF.
      </p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0 0 8px;">
        <strong style="color: #fff;">Myanmar:</strong> Aung San Suu Kyi transferred from prison to house arrest after 5+ years of detention. Sentence reduced but still faces 13+ years. Her son says &ldquo;moving her is not freeing her.&rdquo; The junta&rsquo;s image rehabilitation attempt ahead of international pressure.
      </p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0;">
        <strong style="color: #fff;">Crypto:</strong> Bitcoin climbed above $80,000 for the first time since January, driven by risk-on sentiment and institutional inflows amid geopolitical hedging.
      </p>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch This Week</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran-US war remains the dominant macro variable.</strong> With crude above $105 WTI and $114 Brent, every sector feels the drag. Trump&rsquo;s likely rejection of Iran&rsquo;s 14-point plan means no near-term de-escalation. The Fujairah oil hub attack introduces a new dimension &mdash; infrastructure targeting &mdash; that could push crude toward $120+. Position defensively in energy longs and airline/transport shorts.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The semiconductor cycle is defying gravity.</strong> Korea&rsquo;s 4-year PMI high and 27% S&amp;P 500 tech earnings growth confirm that AI + inventory hoarding = sustained demand. But record input cost inflation is the canary in the coal mine. Watch ASML and TSMC earnings for margin guidance.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Africa&rsquo;s unity is fracturing.</strong> The South Africa xenophobia crisis is more than a domestic issue &mdash; it threatens the AfCFTA and pan-African economic integration. With May 4&ndash;8 protests planned and diplomatic recalls escalating, the ZAR and SA equities (EZA) face real downside risk. Diversified African exposure (AFK) may underperform.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Friend-shoring accelerates.</strong> The Australia-Japan A$1.67B critical minerals pact is a template for how the democratic world is restructuring supply chains away from China. Rare earth and critical mineral miners outside China are the long-term beneficiaries.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; Reuters &bull; Bloomberg &bull; CNBC &bull; CNN &bull; The National &bull; Middle East Eye &bull; Financial Times &bull; Washington Post &bull; Military Times &bull; Stars and Stripes &bull; S&amp;P Global &bull; Yahoo Finance &bull; WHO &bull; UN News &bull; The Diplomat &bull; Kitco News &bull; CaixaBank Research
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

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Daily Briefing & Market Impact — ${today}`,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
