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

    <!-- ===================== EVENT 1: SEMICONDUCTOR CRASH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Semiconductors &mdash; June 23&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">KOSPI Plunges 10% in Historic Semiconductor Crash &mdash; Circuit Breakers Triggered as $1.4 Trillion Wiped from AI Chip Sector</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s KOSPI index <strong>crashed 9.99% (910.71 points)</strong> on June 23 to close at 8,203.84, triggering market-wide circuit breakers that halted trading for 20 minutes &mdash; the fourth circuit breaker event of 2026 and the tenth in the index&rsquo;s history. <strong>Samsung Electronics fell 12.3%</strong> and <strong>SK Hynix dropped 12.5%</strong> as foreign investors dumped 5.79 trillion won (~$3.8 billion) of shares in a single session.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three catalysts converged simultaneously: the <strong>MSCI Developed Markets index review excluded South Korea</strong> despite the market&rsquo;s 95% YTD gain, overnight U.S. tech stocks sold off sharply, and leveraged AI-related positions continued unwinding. The contagion spread globally &mdash; the <strong>Nikkei 225 fell 3%</strong>, Nasdaq lost 2.21%, and the Philadelphia Semiconductor Index dropped ~10%. Broadcom (AVGO) fell 12.6%, Marvell (MRVL) dropped 17%, and Nvidia briefly lost its $5 trillion market cap crown. On June 24, the KOSPI rebounded 3%+ with Samsung surging 8%, but the structural damage to AI momentum remains under scrutiny. <strong>Micron (MU) reports earnings after the close today</strong> &mdash; a critical test for the memory complex.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> KOSPI -10% (June 23), rebounding +3% (June 24). Nikkei 225 -3%. Nasdaq -2.21%. S&amp;P 500 -0.1% on June 24. Dow +0.35% to 51,849. Korean won weakened vs. USD; yen saw safe-haven inflows.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Samsung (005930.KS, -12.3%) &bull; SK Hynix (000660.KS, -12.5%) &bull; Kioxia (-15%+) &bull; NVDA (-6%) &bull; AVGO (-12.6%) &bull; MRVL (-17%) &bull; ASML (-5%) &bull; SOXX &amp; SMH (semi ETFs) &bull; AMAT, LRCX, KLAC (-5&ndash;6%)<br/>
            <strong style="color: #22c55e;">&#9650; WATCH:</strong> MU (Micron, reporting after close June 24 &mdash; ~$35B revenue expected, pivotal for memory narrative)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: US-IRAN SANCTIONS WAIVER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; June 22&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Issues Sweeping 60-Day Iran Oil Sanctions Waiver &mdash; Brent Crude Crashes Below $76 as Strait of Hormuz Reopens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Treasury issued a <strong>60-day sanctions exemption</strong> allowing Iran to produce and sell crude oil, petrochemical, and petroleum products <strong>in U.S. dollars</strong> through August 21 &mdash; the first time dollar-denominated Iranian oil trade has been permitted in over four decades. The waiver follows the June 17 memorandum of understanding (MoU) signed after VP <strong>JD Vance&rsquo;s 18-hour negotiating session</strong> in Switzerland.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Critically, the deal includes Iran <strong>&ldquo;instantly reopening&rdquo; the Strait of Hormuz</strong> and the U.S. &ldquo;immediately&rdquo; lifting its naval blockade of Iranian ports. Four Qatari LNG tankers and two supertankers transited the Strait this week &mdash; the first significant traffic since the blockade created a <strong>14 million barrel/day shortfall</strong>. Iranian crude exports hit 6.79 million barrels last week, the highest in two months. However, <strong>a critical contradiction persists</strong>: Iran insists there are no plans for nuclear site inspections, while the Trump administration claims Tehran &ldquo;fully and completely&rdquo; agreed to let inspectors return. This disagreement could unravel the deal.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude at $75.47 (-4.3% on the day), hitting a low of $73.76 &mdash; its lowest since late February. WTI at $72.43 (-1.1%). Oil has fallen ~11% since the MoU announcement. <strong>Gold</strong> broke below $4,000 for the first time in 7 months ($3,987), pressured by reduced geopolitical risk + hawkish Fed expectations (68% odds of September rate hike).<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM (ExxonMobil) &bull; CVX (Chevron) &bull; SHEL (Shell) &bull; BP &bull; TTE (TotalEnergies) &bull; SLB (Schlumberger) &bull; HAL (Halliburton) &bull; XLE (Energy ETF) &bull; LMT, RTX, NOC (defense &mdash; de-escalation reduces spending pressure)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DAL (Delta) &bull; UAL (United) &bull; AAL (American) &mdash; fuel cost relief &bull; MAERSK-B.CO (shipping) &bull; FDX (FedEx) &bull; Consumer discretionary broadly (lower inflation input)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: UK PM RESIGNS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">United Kingdom / Politics / Currency &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK PM Keir Starmer Resigns After 22 Months &mdash; Britain&rsquo;s 7th Leader in a Decade as Reform UK Surges</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          British Prime Minister <strong>Keir Starmer resigned on June 22</strong>, less than two years after winning a landslide election for the Labour Party. His departure was forced by months of internal pressure following <strong>dismal May council election results</strong>, the rapid rise of far-right <strong>Reform UK</strong>, and the resignation of both senior defence officials on June 11. Standing outside Downing Street, Starmer confirmed he had lost the confidence of much of his parliamentary party.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Greater Manchester Mayor <strong>Andy Burnham</strong>, dubbed the &ldquo;King of the North,&rdquo; is the overwhelming frontrunner to replace him. Burnham won a crucial by-election in Makerfield and has been sworn in as an MP, positioning him for a seamless transition. Former Health Secretary <strong>Wes Streeting</strong> has endorsed Burnham. The leadership contest opens <strong>July 9</strong> with nominations closing before the summer recess on July 16. Britain now faces its <strong>seventh prime minister in a decade</strong>, a level of political instability that mirrors Italy&rsquo;s revolving-door governance and raises questions about UK fiscal policy, defence commitments, and post-Brexit trade.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>GBP:</strong> Sterling fell 0.4% to $1.3181, approaching its 2026 low of $1.3159 set in March. Decline was muted as markets had priced in Starmer&rsquo;s departure over preceding months (GBP lost ~3% since February). <strong>Gilts:</strong> 10-year yield edged to 4.85% on fiscal loosening concerns. FTSE 100 marginally lower.<br/><br/>
            <strong style="color: #ef4444;">&#9660; PRESSURE:</strong> BARC.L (Barclays) &bull; LLOY.L (Lloyds) &bull; NWG.L (NatWest) &mdash; UK fiscal policy sensitivity &bull; BDEV.L (Barratt), PSN.L (Persimmon) &mdash; rate expectations &bull; BA.L (BAE Systems) &mdash; defence commitment uncertainty<br/>
            <strong style="color: #22c55e;">&#9650; HEDGE:</strong> GBP/USD puts &bull; Short gilts positioning &bull; Multinational UK-listed firms with USD revenue (AZN, ULVR, RIO) benefit from weaker sterling
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: COLOMBIA ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Latin America / Politics / Emerging Markets &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia Elects Trump-Backed Right-Wing President in Razor-Tight Runoff &mdash; Signals Latin America&rsquo;s Rightward Shift</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Far-right lawyer <strong>Abelardo de la Espriella</strong> narrowly won Colombia&rsquo;s presidential runoff on June 21 with <strong>49.66% (12.959 million votes)</strong> against leftist Iv&aacute;n Cepeda&rsquo;s 48.70% (12.708 million votes) &mdash; a margin of less than 1%. De la Espriella, 47, became the <strong>most-voted presidential candidate in Colombian history</strong>. International observers deemed the election orderly and transparent, contradicting outgoing President Gustavo Petro&rsquo;s fraud allegations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Endorsed by U.S. President Trump, de la Espriella&rsquo;s victory represents a <strong>sharp rightward swing in Latin America&rsquo;s third-most-populous country</strong> and signals the retreat of the leftist &ldquo;pink tide&rdquo; movement. He takes office <strong>August 7</strong>. Markets expect a <strong>reversal of Petro&rsquo;s anti-fossil-fuel policies</strong>, closer U.S.-Colombia relations, and a tougher stance on Venezuelan migration. However, Colombia&rsquo;s peace process with FARC remnants may face uncertainty, and the razor-thin margin suggests deep societal polarization that could fuel protests.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Colombia:</strong> Colombian peso (COP) expected to strengthen on market-friendly policies. Sovereign bonds likely to tighten. COLCAP index positive medium-term. Investment-grade outlook reinforced.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> EC (Ecopetrol &mdash; state oil company, Petro&rsquo;s anti-fossil stance likely reversed) &bull; CIB (Bancolombia &mdash; political stability premium) &bull; AVAL (Grupo Aval &mdash; financial conglomerate) &bull; ICOL (iShares MSCI Colombia ETF) &bull; Colombian coal miners (mining-friendly policy expected)<br/>
            <strong style="color: #ef4444;">&#9660; RISK:</strong> Cannabis/drug policy companies (Petro-era reforms may be reversed) &bull; Social sector stocks if austerity measures are implemented
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: EUROPEAN HEATWAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Energy &mdash; June 22&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Historic European Heatwave Shatters Records &mdash; 44.3&deg;C in France, 40+ Dead, Power Grid Failures Across the Continent</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The most severe early-summer heatwave in European recorded history has gripped the continent, with temperatures running <strong>14&ndash;18&deg;C above normal</strong> for late June. France was hit hardest: <strong>54 of 96 mainland departments</strong> were placed on red alert, with a peak of <strong>44.3&deg;C (111.7&deg;F)</strong> recorded in Pissos (Landes) &mdash; the highest temperature ever recorded in France. At least <strong>40 drowning deaths</strong> since June 18 and 18 confirmed heat-related fatalities have been reported. More than 800 schools closed, and 10% of Paris-region trains were cancelled.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Northwestern France experienced <strong>power outages after a transformer failed</strong> due to heat stress, exposing grid vulnerability in a country heavily dependent on nuclear power that requires cooling water. The UK broke its all-time June temperature record at <strong>35.8&deg;C (96.4&deg;F)</strong> in Wiggonholt &mdash; surpassing a record from 1976. Red heat alerts extended across <strong>Spain, Italy, Germany, Switzerland, and Luxembourg</strong>. M&eacute;t&eacute;o France compared the heatwave&rsquo;s intensity to the <strong>August 2003 event that killed 15,000 people</strong>. The crisis is expected to intensify political pressure on EU climate policy and expose infrastructure vulnerabilities across the bloc.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy:</strong> European electricity futures spiking on grid strain and cooling demand. Natural gas prices elevated. Nuclear output constrained by cooling water limits. Agricultural commodities under pressure &mdash; MATIF wheat and rapeseed futures likely to rise.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EDF.PA (EDF &mdash; nuclear cooling constraints) &bull; ENGI.PA (Engie) &bull; MUV2.DE (Munich Re), SREN.SW (Swiss Re), ALV.DE (Allianz) &mdash; heat-related claims &bull; RI.PA (Pernod Ricard &mdash; grape harvest risk) &bull; MC.PA (LVMH &mdash; Mo&euml;t champagne exposure)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> VWS.CO (Vestas &mdash; renewables) &bull; ENR.DE (Siemens Energy) &bull; 6367.T (Daikin &mdash; world&rsquo;s largest AC maker) &bull; VIE.PA (Veolia &mdash; water utilities) &bull; SVT.L (Severn Trent) &bull; IBE.MC (Iberdrola)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The AI chip trade is cracking.</strong> The KOSPI&rsquo;s 10% crash and $1.4 trillion semiconductor wipeout signal that the multi-year AI rally is entering a correction phase. With Micron reporting tonight, the memory complex is on trial. Dip-buyers emerged on June 24 (Samsung +8%), but the MSCI exclusion and leverage unwinding suggest structural rebalancing, not a one-day event. Underweight semis until clarity emerges; hedge via SOXX puts.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil&rsquo;s geopolitical premium is evaporating.</strong> The Iran sanctions waiver has sent Brent below $76 &mdash; a reversal of everything that defined H1 2026. If the Strait of Hormuz fully normalizes, oil could test $65&ndash;70. Energy shorts are now in play (XOM, CVX, XLE), while airlines (DAL, UAL) and consumer discretionary benefit from lower fuel and inflation inputs. Gold&rsquo;s break below $4,000 confirms the safe-haven unwind &mdash; Fed hawkishness (68% odds of September hike) adds further pressure.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Political instability is the global theme.</strong> The UK&rsquo;s seventh PM in a decade, Colombia&rsquo;s polarized election, and Europe&rsquo;s climate emergency all create sector-specific opportunities. Weaker GBP favours UK multinationals (AZN, ULVR, RIO). Colombia&rsquo;s right turn supports Ecopetrol and Bancolombia. Europe&rsquo;s heatwave positions renewables (Vestas, Siemens Energy) and water utilities (Veolia) as secular winners. Reinsurers (Munich Re, Swiss Re) face near-term claims pressure.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 24, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,358.22 (-0.10%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,476.64 (-0.43%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">51,848.90 (+0.35%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">8,449 (+3.0% recovery after -10%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.28% (after -3% prior session)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$75.47 (-4.3%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$72.43 (-1.1%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$3,987 (below $4,000 for first time in 7 months)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">GBP/USD</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$1.3181 (-0.4%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">U.K. 10Y Gilt</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.85%</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; Al Jazeera &bull; CNN &bull; Bloomberg &bull; NPR &bull; TheStreet &bull; Korea Herald &bull; Yahoo Finance &bull; Trading Economics &bull; Euronews &bull; France 24 &bull; Fortune &bull; Americas Quarterly &bull; Business Standard &bull; TradingKey &bull; BeInCrypto &bull; Investing.com
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
