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

    <!-- ===================== EVENT 1: U.S.-IRAN DE-ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump Suspends Planned Strikes on Iran, Signals Peace Deal &ldquo;This Weekend&rdquo; &mdash; Oil Crashes 4%, Equities Surge Globally</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          After two consecutive days of U.S. air strikes on Iranian radar and drone sites &mdash; and Iranian retaliatory missile launches at the U.S. Fifth Fleet in Bahrain and air bases in Kuwait and Jordan &mdash; President Trump abruptly <strong>cancelled further strikes planned for this evening</strong> and declared a deal to end hostilities and <strong>reopen the Strait of Hormuz could be signed as early as this weekend</strong>. Qatar-mediated indirect talks are ongoing, with both sides exchanging draft proposals.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The de-escalation triggered a <strong>massive risk-on rally</strong> across global equities. However, skepticism remains &mdash; Polymarket odds of a permanent deal by June 15 have <strong>collapsed from 72% to just 16%</strong> after Trump linked any agreement to the Abraham Accords. The Strait of Hormuz closure, ongoing since late February, continues to choke <strong>~20% of global oil transit</strong>. U.S. crude stockpiles fell by <strong>70 million barrels over five weeks</strong> &mdash; the largest drawdown since the 1980s.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> WTI crude plunged over 4% to ~$86/bbl, lowest since April. Brent fell toward $92&ndash;93. <strong>Equities:</strong> Dow +1.86% (+930 pts to 50,849), S&amp;P 500 +1.75% (near 7,400), Nasdaq +2.54%, Russell 2000 +3.02%. Tech led the rally &mdash; Micron +11%, AMD +8%, Lam Research +12.7%, Intel +10% (BofA upgrade on soaring CPU orders).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MU (Micron, +11%) &bull; AMD (+8%) &bull; LRCX (Lam Research, +12.7%) &bull; INTC (Intel, +10%) &bull; UAL, DAL, AAL (airlines &mdash; fuel cost relief) &bull; Consumer discretionary broadly &bull; IWM (Russell 2000 ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XLE (energy sector) &bull; XOP (oil &amp; gas E&amp;P) &bull; USO (oil ETF) &bull; COP, XOM, CVX (oil majors &mdash; crude price collapse) &bull; Defense names (LMT, RTX, NOC &mdash; de-escalation headwind)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: U.S. CPI HITS 4.2% ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global Economy / Inflation / Central Banks &mdash; June 10&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Inflation Surges to 4.2% &mdash; Highest in Three Years &mdash; Driven by 23.5% Energy Price Spike; Fed Decision Looms June 17</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The May CPI report released June 10 showed inflation at <strong>4.2% annually</strong>, with a monthly increase of <strong>0.5%</strong> &mdash; both in line with expectations but the highest annual rate since 2023. The surge was overwhelmingly driven by <strong>energy prices, up 23.5% year-over-year</strong>, with gasoline costs reflecting the Iran-war-driven oil shock and Strait of Hormuz closure.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Markets widely expect the <strong>FOMC to hold rates steady on June 17</strong>, but the data complicates the path to cuts. Core inflation (excluding food and energy) remains more contained, giving the Fed some cover. However, the risk is that <strong>energy-driven inflation spreads to broader categories</strong> &mdash; transportation, food logistics, and manufacturing inputs &mdash; embedding higher prices more deeply into the economy. Global central banks from the ECB to the BoJ are watching closely.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> Treasury yields remain elevated. Rate cut expectations pushed further into 2026. Dollar strengthened on higher-for-longer narrative. <strong>Forex:</strong> DXY supported; emerging-market currencies under pressure (TRY, ZAR, BRL).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> TIP (TIPS ETF &mdash; inflation hedge) &bull; DBA (agriculture commodities) &bull; XLP (consumer staples &mdash; defensive) &bull; BRK.B (Berkshire &mdash; insurance float benefits from high rates) &bull; Short-duration bond ETFs (SHV, BIL)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> TLT (long-duration Treasuries) &bull; XLRE (real estate &mdash; rate-sensitive) &bull; High-growth/unprofitable tech (ARKK) &bull; Homebuilders (XHB, DHI, LEN &mdash; mortgage rate pressure)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: BANK OF JAPAN RATE HIKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Japan / Central Banks / Global Macro &mdash; June 11&ndash;16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Bank of Japan Poised to Hike Rates to 1% &mdash; Highest in 30 Years &mdash; Yen Carry Trade Unwind Threatens Global Markets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Markets are increasingly pricing in a <strong>Bank of Japan rate hike from 0.75% to 1.0%</strong> at the June 15&ndash;16 policy meeting, which would be Japan&rsquo;s <strong>highest interest rate in three decades</strong>. Core inflation in Japan has reached <strong>2.8%</strong>, giving the BoJ justification to continue normalizing monetary policy. The Nikkei 225, despite being up 30% year-to-date, <strong>fell 3.85% on June 8</strong> &mdash; its sharpest single-day decline in three months &mdash; as traders positioned for the hike.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The critical risk is a repeat of the <strong>July&ndash;August 2024 carry trade unwind</strong>. Net short yen positions currently stand at <strong>$10.1 billion</strong> &mdash; the same level as July 2024 when a BoJ hike triggered a violent unwind that sent the Nikkei down <strong>over 12% in three days</strong> and cascaded across global markets. A stronger yen would hammer Japanese exporters and could trigger <strong>margin calls on leveraged carry trades globally</strong>. The BoJ has also downgraded its 2026 growth outlook as Middle East energy shocks weigh on Japan&rsquo;s import-heavy economy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Forex:</strong> Yen strengthening expected; USD/JPY could see sharp moves. EUR/JPY and AUD/JPY carry trades at risk of violent unwind. <strong>Equities:</strong> Nikkei 225 vulnerable to sharp correction. Global spillover possible if carry trades unwind. <strong>Bonds:</strong> JGB yields at 26-year highs. Japanese capital repatriation could push global bond yields higher.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWJ (iShares Japan ETF) &bull; DXJ (WisdomTree Japan Hedged &mdash; yen strength destroys the hedge) &bull; TM (Toyota &mdash; export headwind) &bull; SONY (yen strength pressure) &bull; EM/high-yield assets funded by yen carry (EEM, HYG) &bull; AUD/JPY and NZD/JPY crosses<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MUFG (Mitsubishi UFJ &mdash; Japanese banks benefit from higher rates) &bull; FXY (CurrencyShares Yen ETF &mdash; yen long) &bull; TLT (if carry unwind triggers global flight to safety) &bull; Gold (GLD &mdash; risk-off hedge)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: SPACEX IPO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Capital Markets &mdash; June 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">SpaceX Prices Largest IPO in History at $135/Share &mdash; $75 Billion Raise at $1.77 Trillion Valuation &mdash; Nasdaq Debut Tomorrow</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          SpaceX priced its IPO at <strong>$135 per share for 556.6 million Class A shares</strong>, raising approximately <strong>$75 billion</strong> &mdash; making it the <strong>largest IPO in stock market history</strong>. The company will list on Nasdaq under the ticker <strong>SPCX</strong> on June 12. At $1.77 trillion, SpaceX would instantly become the <strong>seventh-largest U.S. company</strong>, surpassing Tesla. Investor demand exceeded <strong>$250 billion</strong>, more than 3x oversubscribed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Unusually, SpaceX has reserved <strong>up to 30% of shares for retail investors</strong>. The IPO is anchored by Starlink&rsquo;s satellite internet business (now profitable), its dominant launch services division, and the Starship deep-space program. The listing is drawing <strong>enormous global capital flows</strong> and raising concerns about potential rotation out of existing mega-cap tech holdings (Mag 7) into SPCX. Elizabeth Warren has urged the SEC to delay the IPO citing investor protection concerns.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Capital markets:</strong> $75B IPO will absorb massive liquidity. Potential rotation from Mag 7 into SPCX. Index rebalancing effects once added to major indices. Broad market euphoria ahead of listing drove today&rsquo;s rally in part. IPO ETFs and space-sector names positioning ahead.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SPCX (SpaceX, tomorrow) &bull; RKLB (Rocket Lab &mdash; space sector sympathy) &bull; ASTS (AST SpaceMobile &mdash; satellite peer) &bull; LUNR (Intuitive Machines) &bull; IPO/IPOS (Renaissance IPO ETFs) &bull; Goldman Sachs, Morgan Stanley (GS, MS &mdash; underwriting fees)<br/>
            <strong style="color: #ef4444;">&#9660; RISK:</strong> TSLA (Tesla &mdash; Musk attention/capital diversion) &bull; Mag 7 broadly (rotation risk into SPCX) &bull; GSAT (Globalstar &mdash; Starlink competition)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: FIFA WORLD CUP OPENS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Sports / Consumer Economy &mdash; June 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">FIFA World Cup 2026 Opens in Mexico City &mdash; Biggest Sporting Event in History Begins Six-Week Economic Windfall Across 16 Cities</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>2026 FIFA World Cup officially kicked off</strong> at Estadio Banorte in Mexico City with a spectacular opening ceremony featuring <strong>Shakira, Burna Boy, Andrea Bocelli, and Man&aacute;</strong>. Host nation <strong>Mexico defeated South Africa 2&ndash;0</strong> in the opener. The expanded 48-team tournament will span <strong>six weeks across 16 cities</strong> in the United States, Mexico, and Canada &mdash; making it the largest World Cup ever staged.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The tournament is projected to generate <strong>$5+ billion in direct economic impact</strong> across host cities, with massive boosts to hospitality, travel, media, and consumer spending. FIFA&rsquo;s broadcast deals and sponsorship revenues have hit record levels. The timing coincides with summer travel season, amplifying the consumer spending effect. Global viewership is expected to exceed <strong>5 billion cumulative viewers</strong> over the tournament&rsquo;s duration.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Consumer &amp; media sectors:</strong> Six weeks of elevated spending on dining, travel, merchandise, streaming, and advertising. Host-city hotel occupancy at 90%+. Historically, World Cups boost GDP in host nations by 0.2&ndash;0.5%. Mexico peso (MXN) supported by tourism inflows.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DIS (Disney/ESPN &mdash; broadcast rights) &bull; FOX (Fox Sports &mdash; U.S. broadcast partner) &bull; CMCSA (NBCUniversal/Telemundo) &bull; ABNB (Airbnb &mdash; short-term rental surge) &bull; MAR, HLT (Marriott, Hilton &mdash; hotel occupancy) &bull; NKE (Nike &mdash; kit sponsorships) &bull; ADDYY (Adidas &mdash; official sponsor) &bull; EWW (iShares Mexico ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Productivity drag on employers in participating nations (historical pattern)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran de-escalation is the trade of the day &mdash; but don&rsquo;t chase it.</strong> Oil crashing 4% and equities surging nearly 2% is a massive move, but Polymarket gives only 16% odds of a real deal by the weekend. If talks collapse, expect an equally violent reversal. Energy longs (XLE, COP, XOM) are a contrarian play if you believe the deal fails. Airlines and consumer discretionary benefit from cheaper fuel but remain vulnerable to the 4.2% CPI overhang.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">SpaceX&rsquo;s IPO will dominate capital markets for weeks.</strong> The $75B raise is unprecedented &mdash; watch for Mag 7 rotation as institutional investors rebalance. Space-sector sympathy plays (RKLB, ASTS, LUNR) have room to run. But the real risk is what happens to broader market liquidity when that much capital gets absorbed into a single name.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">The BoJ is the sleeper risk of the week.</strong> If the June 15&ndash;16 meeting delivers a hawkish hike to 1%, the yen carry trade unwind could cascade globally &mdash; just like August 2024. Net short yen positions at $10.1B mirror the pre-crisis setup. Meanwhile, 4.2% CPI and 6.5% PPI mean the Fed is stuck higher-for-longer, punishing duration-heavy portfolios. The World Cup provides a welcome six-week consumer tailwind, but the real action is in central bank decisions and the Strait of Hormuz.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 11, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~7,400 (+1.75%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.54%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">50,849 (+1.86%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Russell 2000</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+3.02%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">10,304 (+0.48%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">24,210 (+0.06%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$86 (-4%+)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$92&ndash;93 (-3%+)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. CPI (May)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">4.2% YoY</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Oracle (ORCL)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$191 (-9% post-earnings)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Reuters &bull; BBC &bull; NPR &bull; CNBC &bull; TheStreet &bull; Yahoo Finance &bull; BLS.gov &bull; The Washington Post &bull; CNN &bull; NBC News &bull; Democracy Now &bull; Fortune &bull; Investing.com &bull; Schwab Market Update &bull; Euronews &bull; Vatican News &bull; FIFA.com &bull; 10Things Global News
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
