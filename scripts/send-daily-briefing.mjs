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

    <!-- ===================== EVENT 1: US-IRAN ROADMAP DEAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran &ldquo;Roadmap&rdquo; Deal Agreed at Burgenstock &mdash; Oil Prices Plunge as Strait of Hormuz Reopening Priced In</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          After talks at Switzerland&rsquo;s Burgenstock resort mediated by <strong>Qatar and Pakistan</strong>, US and Iranian officials agreed on a <strong>60-day &ldquo;roadmap&rdquo; toward a final peace deal</strong>. The US Treasury issued a temporary 60-day general license authorizing the production, delivery, and sale of Iranian oil. This follows the US-Iran conflict that began in late February 2026 and sent oil prices soaring by over 50%.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The announcement came despite President Trump threatening to &ldquo;hit Iran very hard again&rdquo; during negotiations, which briefly rattled markets before the positive outcome was confirmed. The prospective <strong>reopening of the Strait of Hormuz</strong> &mdash; which carries ~20% of global oil supply &mdash; is being priced in aggressively. Analysts warn markets may be &ldquo;front-running&rdquo; the best-case scenario; any breakdown in the 60-day window would cause a violent snap-back in crude prices.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude fell 3.31% to $77.90/barrel; WTI fell 2.32% to $74.82 &mdash; approaching pre-conflict levels. Oil is now only ~7% above pre-February 28 levels. Massive relief rally in energy-consuming sectors.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM (ExxonMobil) &bull; CVX (Chevron) &bull; SHEL (Shell) &bull; BP &bull; TTE (TotalEnergies) &bull; USO (oil ETF) &bull; XLE (energy sector) &bull; FRO (Frontline, tankers) &bull; EURN (Euronav)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DAL, UAL, AAL (airlines &mdash; fuel cost relief) &bull; FDX (FedEx) &bull; Consumer discretionary broadly &bull; Airline &amp; transport ETFs (JETS)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: UK PM STARMER RESIGNS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Politics / Currencies &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK Prime Minister Keir Starmer Resigns &mdash; Britain&rsquo;s 7th Leader in a Decade; Sterling Nears 2026 Low</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          British Prime Minister <strong>Keir Starmer announced his resignation</strong> on June 22, less than two years after winning a landslide election. The resignation followed months of internal Labour Party pressure after the party <strong>lost over 1,000 seats in May local council elections</strong> amid the rapid rise of the far-right <strong>Reform UK</strong> party. <strong>Andy Burnham</strong>, the popular ex-mayor of Greater Manchester who recently returned to Parliament, is the frontrunner to replace him.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Nominations open July 9, close July 16, with a new leader expected by September 1. Former Health Secretary <strong>Wes Streeting backed Burnham</strong> rather than challenging him. The pound sterling slipped to <strong>$1.3181</strong> against the US dollar, approaching its 2026 low of $1.3159. The political instability raises questions about UK fiscal policy continuity and investor confidence in British assets.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Currency:</strong> GBP/USD slipped to $1.3181, nearing 2026 low ($1.3159). 10-year gilt yield edged higher to 4.85%, reflecting fiscal uncertainty. FTSE 100 +0.4% (weak pound benefits international earners); FTSE 250 -0.3% (domestic exposure).<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> BDEV.L (Barratt, homebuilder) &bull; PSN.L (Persimmon) &bull; LLOY.L (Lloyds) &bull; NWG.L (NatWest) &bull; EWU (iShares UK ETF) &bull; FLGB (Franklin UK ETF) &bull; GBP/USD, GBP/EUR pairs<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> ULVR.L (Unilever &mdash; weak pound tailwind) &bull; AZN (AstraZeneca) &bull; SHEL (Shell &mdash; USD earner) &bull; FTSE 100 multinationals broadly
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EUROPE HEAT DOME ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Energy &mdash; June 21&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Record-Breaking Heat Dome Engulfs Europe &mdash; 26 Countries on Alert, French Power Prices Surge 8.1%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Europe is experiencing its <strong>second heat dome in two months</strong>, with <strong>26 countries issuing heat alerts</strong> from Ireland to Greece. Temperatures are exceeding <strong>40&deg;C (104&deg;F)</strong> across France, Spain, and the Iberian Peninsula. France has issued a <strong>red alert</strong>, banned public alcohol consumption at festivals, and closed over <strong>800 schools</strong>. The UK is forecast to reach 39&deg;C on Wednesday, potentially smashing the all-time June record of 35.6&deg;C set in 1976.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>M&eacute;t&eacute;o France</strong> warned this heatwave could surpass the deadly August 2003 event that killed nearly 15,000 people. The heat dome is supported by a developing <strong>El Ni&ntilde;o</strong>. French month-ahead power prices surged <strong>8.1% to &euro;68.95/MWh</strong>, the highest for this time of year since 2023. Soaring river temperatures threaten to curtail nuclear power generation &mdash; France depends heavily on nuclear &mdash; while increased cooling demand strains grids across the continent.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Power:</strong> French month-ahead power prices +8.1% to &euro;68.95/MWh. Agricultural commodity futures under upward pressure. Insurance claims for heat-related damage expected to rise. Nuclear curtailment risk in France could further tighten European energy supply.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; cooling demand) &bull; JCI (Johnson Controls) &bull; 6367.T (Daikin &mdash; HVAC) &bull; VIE.PA (Veolia &mdash; water) &bull; SVT.L (Severn Trent) &bull; DBA (agriculture ETF &mdash; food price inflation)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EDF.PA (EDF &mdash; nuclear curtailment risk) &bull; ALV.DE (Allianz &mdash; insurance claims) &bull; CS.PA (AXA) &bull; MUV2.DE (Munich Re) &bull; European agriculture-exposed equities
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA SANCTIONS US FIRMS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Trade / Defense &mdash; June 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Imposes Sweeping Sanctions on US Defense &amp; Rare Earth Firms &mdash; Retaliating for Alibaba/Baidu Blacklisting</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beijing escalated US-China tensions by imposing <strong>export restrictions on 10 US military-linked firms</strong> and barring government purchases from <strong>46 American companies</strong>. The sanctioned firms include drone makers, aerospace firms, and critically, rare earth producers <strong>MP Materials and USA Rare Earth</strong>. MP Materials operates the <strong>only active rare earth mine in the United States</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Subsidiaries of <strong>Lockheed Martin, Raytheon (RTX), and General Dynamics</strong> were barred from Chinese government procurement. This was in direct retaliation for Washington adding Chinese tech giants <strong>Alibaba and Baidu</strong> to its list of military-linked firms. While analysts view the measures as &ldquo;largely symbolic&rdquo; since most targeted US firms have limited China exposure, the <strong>rare earth restrictions are the most consequential element</strong> &mdash; China dominates global rare earth supply, essential for defense, semiconductors, EVs, and wind turbines.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Sectors:</strong> Rare earth supply chain uncertainty elevated. Defense primes face symbolic but headline-moving sanctions. Tit-for-tat escalation adds broad risk premium to US-China exposed names.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MP (MP Materials &mdash; directly sanctioned) &bull; RCAT (Red Cat Holdings) &bull; BABA (Alibaba &mdash; US blacklist) &bull; BIDU (Baidu) &bull; LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; GD (General Dynamics) &bull; LHX (L3Harris) &bull; OSK (Oshkosh)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LYC.AX (Lynas Rare Earths &mdash; alternative supplier) &bull; REMX (VanEck Rare Earth ETF &mdash; supply scarcity premium) &bull; ITA (US Aerospace &amp; Defense ETF &mdash; domestic spending narrative intact)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: COLOMBIA ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Latin America / Politics / Energy &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia Elects Far-Right President Abelardo de la Espriella &mdash; Latin America&rsquo;s Rightward Shift Deepens; Peso Surges</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Far-right lawyer and businessman <strong>Abelardo de la Espriella</strong>, nicknamed &ldquo;El Tigre,&rdquo; narrowly won Colombia&rsquo;s presidential runoff on June 21 with <strong>49.7% versus leftist Ivan Cepeda&rsquo;s 48.7%</strong>. Endorsed by President Trump, the political newcomer has pledged to launch military offensives against guerrilla groups on his first day in office, restart oil exploration, allow fracking to nearly <strong>double production to 1.3 million barrels/day</strong>, and reverse outgoing President Petro&rsquo;s moratorium on new hydrocarbon and mining contracts.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The razor-thin margin means the <strong>official manual count is still underway</strong> and no final result has been certified. The Colombian peso has been the <strong>strongest-performing Latin American currency in 2026</strong> on expectations of a pro-business outcome. Colombia&rsquo;s main stock index jumped the most in over six years after de la Espriella&rsquo;s first-round win in late May. His pro-fracking, pro-mining platform is bullish for energy and extractive sectors, but the narrow margin creates short-term uncertainty.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Currency:</strong> Colombian peso (COP) strongest-performing LatAm currency in 2026. Stock index at multi-year highs. Pro-business, pro-energy mandate supports foreign investment thesis. Narrow margin and uncertified result create short-term volatility risk.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> EC (Ecopetrol &mdash; fracking reversal, state oil co.) &bull; GXG (Global X Colombia ETF) &bull; ILF (iShares LatAm 40 ETF) &bull; HAL (Halliburton &mdash; fracking services) &bull; SLB (Schlumberger) &bull; BKR (Baker Hughes) &bull; Colombian peso (COP)<br/>
            <strong style="color: #ef4444;">&#9660; RISK:</strong> Short-term volatility if manual recount is contested &bull; Security sector spending increase could pressure Colombian fiscal balance
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The oil trade is unwinding &mdash; fast.</strong> The US-Iran 60-day roadmap is the most consequential macro event today. Brent crude crashing to $77.90 reverses months of conflict-premium pricing. Energy longs (XLE, XOM, CVX) are under severe pressure, while airlines (DAL, UAL) and consumer discretionary finally catch a bid. However, the 60-day timeline leaves room for a snap-back &mdash; position sizing matters.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Political instability is the theme across developed markets.</strong> Starmer&rsquo;s resignation makes Britain the poster child for political volatility &mdash; 7 PMs in a decade. Sterling weakness benefits FTSE 100 multinationals but domestic UK names (homebuilders, banks) face headwinds. Watch the gilt market for signs of broader fiscal concern.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Climate and geopolitical supply chains are the slow-burn risks.</strong> Europe&rsquo;s heat dome is pushing power prices higher and threatening nuclear generation &mdash; cooling stocks (CARR, JCI) are the play. China&rsquo;s rare earth sanctions on MP Materials highlight the fragility of critical mineral supply chains &mdash; Lynas (LYC.AX) is the beneficiary as the non-China alternative.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Latin America&rsquo;s rightward shift continues.</strong> Colombia&rsquo;s election cements a regionwide pro-business political trend. Ecopetrol (EC) and oil services names (HAL, SLB) are the direct plays on Colombia&rsquo;s fracking restart. The peso&rsquo;s rally may have further to run if the result is certified cleanly.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; ${today}</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,472.79 (-0.37%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.32%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.4%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 250</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.3%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$77.90 (-3.31%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$74.82 (-2.32%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">GBP/USD</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$1.3181</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">UK 10Y Gilt</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.85%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EU Power (FR month-ahead)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">&euro;68.95/MWh (+8.1%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Colombian Peso (COP)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Strongest LatAm FX 2026</td>
        </tr>
      </table>
    </div>

    <!-- ===================== NOTABLE MENTIONS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Also on the Radar</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0;">
        &bull; <strong>Alan Greenspan</strong>, former Federal Reserve Chair, died at age 100<br/>
        &bull; <strong>Ethiopia:</strong> PM Abiy Ahmed re-elected after Prosperity Party won 438/501 parliamentary seats; voting disrupted in Amhara, Oromia, absent in Tigray<br/>
        &bull; <strong>SpaceX</strong> fell 16% for a third straight daily decline<br/>
        &bull; <strong>Alphabet (GOOGL)</strong> dropped 5% on AI talent departure concerns
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; BBC News &bull; Bloomberg &bull; CNBC &bull; CNN &bull; Euronews &bull; IBTimes UK &bull; Investing.com &bull; NBC News &bull; NPR &bull; Reuters &bull; Rio Times &bull; TheStreet
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
