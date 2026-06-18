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

    <!-- ===================== EVENT 1: U.S.-IRAN PEACE MoU ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. and Iran Sign Historic Peace Memorandum &mdash; Strait of Hormuz Set to Reopen, Oil Prices Tumble</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. President Trump and Iranian President Pezeshkian <strong>digitally signed a 14-point memorandum of understanding</strong> on June 17, extending an April ceasefire by 60 days and moving toward a formal end to the conflict. The agreement includes the <strong>reopening of the Strait of Hormuz</strong>, the unfreezing of over <strong>$100 billion in Iranian overseas assets</strong>, and the easing of decades-long U.S.-led sanctions. The IAEA confirmed it is ready to begin implementing Iran&rsquo;s commitment to <strong>dilute its enriched uranium stockpile</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A formal signing ceremony is scheduled for Friday. The International Energy Agency forecasts a <strong>significant supply surplus by 2027</strong> as Iranian oil returns to global markets. However, <strong>Israeli operations in southern Lebanon and Gaza continue</strong> in spite of the deal, with 3 Palestinians killed in a Gaza City airstrike and an Israeli soldier killed in a Hezbollah attack &mdash; keeping residual geopolitical risk elevated.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude fell 1.4% to $78.41; WTI dropped 1.25% to $75.83 as the geopolitical risk premium evaporates. The IEA projects a major supply surplus by 2027. <strong>Gold</strong> slipped below $4,300 as safe-haven demand faded. Dollar strengthened with EUR/USD settling around 1.15.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DAL, UAL, LHA.DE, IAG.L (airlines &mdash; lower jet fuel costs boost margins) &bull; Broad equities rally on reduced supply-chain disruption risk &bull; Consumer discretionary benefits from lower energy costs<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM (Exxon, -5% on earlier deal signals) &bull; CVX (Chevron) &bull; OXY (Occidental &mdash; leveraged to oil) &bull; XLE (Energy Select Sector) &bull; USO (oil tracking ETF) &bull; COP (ConocoPhillips)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: FED HAWKISH HOLD ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global / Monetary Policy / Bonds &mdash; June 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Fed Chair Warsh&rsquo;s Hawkish Debut: Dot Plot Flips to Rate Hike, 9 of 18 Officials Signal Tightening</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In his first FOMC meeting as Chair, <strong>Kevin Warsh held rates at 3.50&ndash;3.75%</strong> in a unanimous 12-0 vote &mdash; but delivered a hawkish shock. The updated dot plot showed the <strong>median year-end projection rising to 3.8%</strong> (up from 3.4% in March), with <strong>9 of 18 officials now projecting at least one rate hike in 2026</strong>. The statement stripped out all previous easing bias language and adopted a purely data-dependent stance.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The grid erased an earlier indication for one cut this year and <strong>pushed any reductions into 2027&ndash;2028</strong> as policymakers weigh the durability of an inflation spike brought on by the Iran war. <strong>17 of 18 officials</strong> judged risks to inflation to be tilted to the upside. Markets sold off sharply on Wednesday before partially recovering Thursday on the Iran deal optimism and a semiconductor-led tech rally.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> 2Y yield surged 11 bps to 4.153%; 10Y rose then eased to 4.44%. Financial conditions tightened modestly. Dollar strengthened against euro and EM currencies on higher rate expectations.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XLF (Financial Select Sector) &bull; KBE (SPDR S&amp;P Bank ETF) &bull; JPM, GS, MS (large banks &mdash; steeper curve boosts NIMs) &bull; IWM (Russell 2000 ETF, +2.12% on Iran optimism)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> TLT (20+ Year Treasury Bond ETF &mdash; rising yields) &bull; XLRE (Real Estate &mdash; rate-sensitive REITs) &bull; Growth stocks broadly pressured by higher-for-longer rates
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: ASIAN MARKETS RECORD HIGHS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">East Asia / Technology / Semiconductors &mdash; June 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">KOSPI Shatters 9,000 for First Time; Nikkei Tops 71,000 &mdash; SK Hynix HBM4E Breakthrough Fuels AI Rally</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s KOSPI <strong>surged 2.25% to a record 9,063.84</strong>, crossing 9,000 for the first time in history, driven by <strong>SK Hynix shipping 12-layer HBM4E memory chip samples</strong> to AI customers including Nvidia. SK Hynix shares jumped <strong>6.5&ndash;7% to an all-time high</strong>. Samsung and SK Hynix together account for <strong>48% of the KOSPI index</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Nikkei 225 rose 1.65% to a record 71,053.49</strong>, crossing 71,000 for the first time. Both indices shrugged off the Fed&rsquo;s hawkish tone, buoyed by the U.S.&ndash;Iran peace deal optimism and the relentless AI infrastructure buildout cycle. The HBM4E milestone intensifies the race between <strong>SK Hynix (58% Q1 2026 market share)</strong> and Samsung ahead of Nvidia&rsquo;s 2027 Rubin Ultra launch.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> KOSPI +2.25% (record 9,063), Nikkei +1.65% (record 71,053). AI memory demand signals explosive growth. Korean won and yen saw modest moves.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SK Hynix (000660.KS, +6.5%) &bull; Samsung (005930.KS) &bull; MU (Micron &mdash; U.S. HBM competitor, sympathy rally) &bull; NVDA (Nvidia &mdash; HBM4E validates AI roadmap) &bull; EWY (iShares Korea ETF &mdash; all-time high) &bull; EWJ (iShares Japan ETF) &bull; SOXX, SMH (semiconductor ETFs)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Short sellers of Asian indices face squeeze &bull; Non-AI tech names underperform as capital rotates into AI chip plays
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: NATO 3.0 + EU-UKRAINE ACCESSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Security / Diplomacy &mdash; June 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Hegseth Demands &ldquo;NATO 3.0&rdquo; &mdash; Six-Month Review of U.S. Forces in Europe as EU Opens Ukraine Accession Talks</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Defense Secretary Pete Hegseth announced a <strong>six-month Pentagon review of American forces in Europe</strong>, demanding NATO allies spend <strong>3.5% of GDP on defense</strong> and threatening to withhold U.S. NATO dues from &ldquo;free-riding&rdquo; allies. The U.S. is <strong>immediately cutting crisis-activation assets</strong> for the continent, including aircraft carriers, refueling planes, and fighter jets. Hegseth lambasted European allies for <strong>refusing U.S. base access during the Iran war</strong>, calling it &ldquo;shameful.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, the <strong>European Council opened the first cluster of EU accession negotiations with Ukraine and Moldova</strong> at its June 18&ndash;19 summit, covering rule of law, democratic institutions, and economic criteria. President Zelenskyy addressed EU leaders and discussed anti-ballistic cooperation. European military spending rose <strong>14% in 2025 to &euro;739 billion</strong>, now accounting for over 21% of the global total &mdash; Germany alone increased defense expenditure 24% to $114 billion.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>European defense sector structurally re-rated.</strong> The Hegseth announcement reinforces the multi-year European rearmament thesis. Euro weakened to 1.15 under dual pressure from the stronger dollar and geopolitical uncertainty about U.S. commitment. Ukrainian Eurobonds tighten on EU integration momentum.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> RHM.DE (Rheinmetall &mdash; Europe&rsquo;s top defense pure-play, ~&euro;1,180) &bull; BA.L (BAE Systems &mdash; 7% annual sales growth) &bull; AIR.PA (Airbus defense division) &bull; HO.PA (Thales) &bull; LDO.MI (Leonardo) &bull; Holcim (HOLN.SW), Vinci (DG.PA) &mdash; Ukraine reconstruction plays<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> FXE (Euro Trust ETF &mdash; euro weakness) &bull; U.S. defense names face uncertainty if NATO spending shifts to European suppliers
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: PERU ELECTION MINING RISK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Latin America / Mining / Commodities &mdash; June 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Peru&rsquo;s Deadlocked Presidential Runoff Threatens $63 Billion Copper Mining Pipeline &mdash; Global Supply at Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Peru&rsquo;s presidential runoff between conservative <strong>Keiko Fujimori</strong> and radical leftist <strong>Roberto S&aacute;nchez Palomino</strong> remains deadlocked at essentially 50&ndash;50. The outcome has enormous implications for the world&rsquo;s <strong>third-largest copper producer</strong> (2.77 million tons annually, ~12% of global production). S&aacute;nchez has pledged to <strong>rewrite the constitution, review mining tax agreements, phase out open-pit mining</strong>, and introduce windfall taxes on metal prices.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An estimated <strong>$63 billion undeveloped mining pipeline</strong> &mdash; 70% in copper projects in the southern Andean corridor &mdash; hangs in the balance. Copper was trading at approximately <strong>$5.64 per pound</strong>, reflecting both the tightening supply-demand balance and geopolitical uncertainties. Fujimori favors investment continuity and regulatory stability. S&aacute;nchez has moved to reassure markets by signaling he would retain central bank chief Julio Velarde, but the constitutional rewrite risk remains elevated.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Copper futures face heightened volatility.</strong> A S&aacute;nchez victory could disrupt supply from a major producer, pushing copper prices higher on supply fears. A Fujimori victory would stabilize or slightly lower prices. Peruvian sol faces significant uncertainty; a leftist victory would likely trigger capital flight.<br/><br/>
            <strong style="color: #ef4444;">&#9660; AT RISK:</strong> SCCO (Southern Copper &mdash; major Peruvian operations) &bull; FCX (Freeport-McMoRan &mdash; Peruvian exposure) &bull; GLEN.L (Glencore) &bull; AAL.L (Anglo American) &bull; EPU (iShares Peru ETF &mdash; expect sharp moves around results)<br/>
            <strong style="color: #22c55e;">&#9650; POTENTIAL UP:</strong> COPX (Global X Copper Miners ETF &mdash; if supply disruption lifts copper prices) &bull; HG=F (COMEX Copper Futures &mdash; supply-disruption pricing)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran peace deal reshuffles the energy trade.</strong> With the Strait of Hormuz reopening and Iranian oil returning to markets, crude is falling toward $75 &mdash; a structural headwind for energy longs (XLE, XOM, CVX) but a tailwind for airlines, consumer discretionary, and the broader economy. Watch for dip-buying in beaten-down oil names if the formal deal falters.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Fed&rsquo;s hawkish pivot demands defensive positioning.</strong> With 9 of 18 officials now signaling a rate hike, the era of easing expectations is over. Banks (JPM, GS) benefit from the steeper curve, while rate-sensitive sectors (REITs, growth) face headwinds. The Russell 2000&rsquo;s 2.12% rally suggests small-caps are finding a floor on Iran deal optimism.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Asia&rsquo;s AI chip surge and Europe&rsquo;s rearmament are the structural growth stories.</strong> SK Hynix&rsquo;s HBM4E breakthrough and the KOSPI breaking 9,000 confirm the AI infrastructure buildout is accelerating. European defense names (Rheinmetall, BAE, Leonardo) benefit from NATO pressure to self-fund. Peru&rsquo;s election is the sleeper risk &mdash; a leftist victory could disrupt 12% of global copper supply, sending prices sharply higher.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 18, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.08%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.91%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.14%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Russell 2000</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.12%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">9,063 (+2.25%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">71,053 (+1.65%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$78.41 (-1.4%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$75.83 (-1.25%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$4,280 (-0.5%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.44%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Copper</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">$5.64/lb</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; Al Jazeera &bull; NPR &bull; Reuters &bull; Bloomberg &bull; RFE/RL &bull; TheStreet &bull; Yahoo Finance &bull; TradingKey &bull; Washington Post &bull; Fortune &bull; Federal Reserve &bull; TradingEconomics &bull; MINING.COM &bull; Schwab Market Update &bull; Britannica &bull; IEA &bull; IISS &bull; Euronews
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
