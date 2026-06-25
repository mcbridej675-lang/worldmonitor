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

    <!-- ===================== EVENT 1: VENEZUELA TWIN EARTHQUAKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="background: #7f1d1d; color: #fca5a5; font-size: 9px; font-weight: 700; padding: 2px 6px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Latin America / Disaster / Energy &mdash; June 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Hit by Back-to-Back 7.2 &amp; 7.5 Magnitude Earthquakes &mdash; 188 Dead, 1,520 Injured; USGS Warns True Toll May Exceed 10,000</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two devastating earthquakes struck northern Venezuela just <strong>39 seconds apart</strong> on the evening of June 24 &mdash; a <strong>7.2-magnitude foreshock</strong> followed by a <strong>7.5-magnitude mainshock</strong>, the strongest to hit the country since 1900. At least <strong>188 people confirmed dead</strong>, <strong>1,520 injured</strong>, and <strong>157 missing</strong>, with over 200 people still trapped under rubble. La Guaira state on the northern coast was hit hardest, with over <strong>250 buildings collapsed or severely damaged</strong>, including a 22-story tower in Caracas&rsquo; Altamira neighborhood. Simon Bolivar International Airport is severely damaged and closed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Acting President Delcy Rodriguez declared a national <strong>state of emergency</strong>. The USGS classifies the doublet event as having a <strong>substantial probability of exceeding 10,000 deaths</strong>. At least <strong>138 aftershocks</strong> have been recorded. Venezuela is an <strong>OPEC member</strong> and any damage to coastal oil infrastructure &mdash; refinery operations and export terminals &mdash; could tighten global crude supply. International aid is mobilizing from Argentina, Brazil, China, Mexico, and others.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Venezuelan crude production disruption could tighten global supply during an already fragile Hormuz reopening. <strong>Insurance/reinsurance:</strong> Major catastrophe loss event for Caribbean/LatAm portfolios. <strong>Construction/materials:</strong> Massive reconstruction demand ahead.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> USO (crude oil ETF &mdash; supply disruption) &bull; XLE (energy sector) &bull; PBR (Petrobras &mdash; competitor benefits from supply gap) &bull; VMC (Vulcan Materials &mdash; reconstruction) &bull; MLM (Martin Marietta &mdash; construction materials)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> RNR (RenaissanceRe &mdash; reinsurance losses) &bull; MKL (Markel &mdash; catastrophe exposure) &bull; Venezuelan sovereign bonds &bull; PDVSA bonds &bull; Caribbean airlines and tourism operators
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN STRIKES VESSEL IN STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="background: #7f1d1d; color: #fca5a5; font-size: 9px; font-weight: 700; padding: 2px 6px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran&rsquo;s IRGC Drone-Strikes Singapore-Flagged Vessel in Strait of Hormuz; UN Evacuations Suspended, 60-Day Peace Talks at Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran&rsquo;s Islamic Revolutionary Guard Corps struck a <strong>Singapore-flagged cargo vessel</strong> with a drone near Oman&rsquo;s port of Dahit on June 25, causing bridge damage but no injuries. The UN&rsquo;s International Maritime Organization <strong>immediately suspended its evacuation effort</strong> to extract hundreds of stranded commercial vessels and <strong>~11,000 mariners</strong> from the waterway. Iran declared the internationally proposed Hormuz transit route <strong>&ldquo;unacceptable and dangerous,&rdquo;</strong> insisting on Iran-designated routes through its territorial waters.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The attack comes as VP Vance arrived in Switzerland to launch <strong>60-day nuclear negotiations</strong> following the June 17 Islamabad Memorandum of Understanding. Key sticking points include: Iran&rsquo;s nuclear inspections, the Strait transit route dispute (U.S. favors southern Omani route; Iran insists on northern route), and Iran&rsquo;s demand for transit fees. Brent crude initially fell <strong>3.8% to $73.87</strong> on de-escalation hopes, then <strong>reversed +2% intraday</strong> on the vessel strike. The U.S.-Iran war is now in its <strong>117th day</strong> at an estimated cost of <strong>$113.3 billion</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent $73.87 (-3.8%), then reversed +2% on attack. WTI $70.34 (-3.9%). Analysts project $60&ndash;65 Brent over 6&ndash;12 months IF de-escalation holds. <strong>Gold</strong> fell below $4,000 for first time since Nov 2025, but attack reverses safe-haven selling. War has cost $113.3B; Trump&rsquo;s $87.6B supplemental spending request pending.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin &mdash; $21B munitions request) &bull; RTX (defense spending) &bull; NOC (Northrop Grumman) &bull; XOM, CVX, COP (oil supply risk premium) &bull; GLD, IAU (safe-haven demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> STNG (Scorpio Tankers &mdash; vessel risk) &bull; UAL, DAL, AAL (fuel cost volatility) &bull; Consumer discretionary (energy-driven inflation) &bull; EM currencies (INR, TRY &mdash; oil import costs)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: RECORD EUROPEAN HEATWAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="background: #78350f; color: #fde68a; font-size: 9px; font-weight: 700; padding: 2px 6px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Energy / Agriculture &mdash; June 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Historic European Heatwave Shatters All-Time Records: France Hottest Day in History, 40+ Drowned, Power Grids Failing Across Continent</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An unprecedented heat dome has engulfed Europe, with France recording its <strong>hottest day in national history</strong> on June 23 (national thermal indicator 29.8&deg;C). Meteo-France issued <strong>red heatwave alerts for 54 departments</strong> &mdash; two-thirds of the country. The <strong>UK broke its June record</strong> at 36.4&deg;C in Somerset; <strong>Switzerland hit 38&deg;C in Basel</strong>, smashing an 80-year record; <strong>Spain and Portugal reached 44&deg;C</strong>. Over <strong>101 million people face 35&deg;C+</strong> and nearly 380 million (two-thirds of Europe) face 30&deg;C+.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The human toll is devastating: at least <strong>40 people drowned</strong> in France seeking relief since June 18; Spain estimates <strong>212 heat-related deaths</strong> Sunday&ndash;Wednesday; multiple child fatalities in parked cars. <strong>68,000 homes in Brittany lost electricity</strong> from heat-damaged transformers, with blackouts also hitting Turin, Italy. Hundreds of UK schools closed. <strong>Agricultural damage</strong> expected to be severe across wheat, corn, and wine crops in France, Spain, and Italy. El Ni&ntilde;o conditions are now confirmed in the tropical Pacific, suggesting this heat pattern may intensify through fall.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy:</strong> European nat gas and electricity prices spiking on cooling demand and grid stress. <strong>Agriculture:</strong> Wheat futures upward; French and Italian wine/corn harvest outlook deteriorating. <strong>Insurance:</strong> Continent-wide claims exposure mounting from infrastructure damage, crop losses, and fatalities.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; HVAC/cooling demand) &bull; Daikin (6367.T) &bull; EDF (EDF.PA &mdash; electricity demand surge) &bull; Enel (ENEL.MI) &bull; IBE.MC (Iberdrola) &bull; WEAT (wheat ETF) &bull; DBA (Invesco Agriculture &mdash; crop stress) &bull; ABI.BR (AB InBev &mdash; beverage demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EZJ.L (EasyJet &mdash; operational disruption) &bull; RYAAY (Ryanair) &bull; AXA (CS.PA &mdash; insurance claims) &bull; ALV.DE (Allianz &mdash; weather claims) &bull; European agriculture stocks
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EBOLA OUTBREAK DRC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="background: #78350f; color: #fde68a; font-size: 9px; font-weight: 700; padding: 2px 6px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Africa / Global Health / Pandemic Risk &mdash; June 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">DRC Ebola Outbreak Becomes Second-Largest in History: 1,118 Cases, 291 Dead; First Case Confirmed in France &mdash; EU on Alert</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ebola outbreak (Bundibugyo virus) in the <strong>Democratic Republic of Congo</strong> has reached <strong>1,118 confirmed cases with 291 deaths</strong> as of June 24 &mdash; the <strong>largest first-month case count of any Ebola outbreak in African history</strong> and the second-largest Ebola outbreak on record. Declared a <strong>Public Health Emergency of International Concern</strong> by the WHO on May 17, the outbreak is centered in Ituri Province (1,020 cases across 22 health zones) and has spread into North Kivu (95 cases) and South Kivu (3 cases). <strong>No vaccine exists for the Bundibugyo strain.</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 24, <strong>France confirmed its first domestic Ebola case</strong>, elevating this from a regional crisis to a global watch item. A U.S. citizen was previously evacuated to Germany for treatment on May 19. The G7 committed <strong>over $1 billion</strong> in funding at Evian, but the Africa CDC estimates the response now needs <strong>$1.4 billion</strong> (nearly triple initial projections), with only 13% of pledged funds released. Conflict and hunger in eastern DRC are <strong>outpacing containment efforts</strong>. Health experts warn the response is being outrun by the virus.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Risk level rising sharply.</strong> French imported case elevates pandemic probability. No approved Bundibugyo vaccine creates urgency for mRNA platform pivots. DRC mining exports (cobalt, copper, coltan) face disruption risk if outbreak spreads to mining provinces &mdash; critical for EV battery supply chains.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MRK (Merck &mdash; Ervebo vaccine manufacturer) &bull; REGN (Regeneron &mdash; Inmazeb antibody treatment) &bull; BNTX (BioNTech &mdash; mRNA Ebola development) &bull; LAKE (Lakeland Industries &mdash; PPE surge) &bull; APT (Alpha Pro Tech &mdash; protective equipment)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> AF.PA (Air France &mdash; DRC/Africa routes, domestic case) &bull; BKNG (Booking Holdings &mdash; travel sentiment) &bull; ABNB (Airbnb) &bull; GLEN.L (Glencore &mdash; DRC cobalt/copper mining) &bull; DAL, UAL (international travel demand)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: JAPAN 7.2 EARTHQUAKE + TYPHOON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="background: #1e3a5f; color: #93c5fd; font-size: 9px; font-weight: 700; padding: 2px 6px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">MODERATE</span>
          <span style="color: #666; font-size: 11px;">East Asia / Disaster / Supply Chain &mdash; June 25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">7.2 Earthquake Strikes Northern Japan &mdash; Third M7+ Quake in 8 Months; Typhoon Mekkhala (Strongest June Storm in 22 Years) Converges on Honshu</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.2 earthquake</strong> struck off the coast of Iwate Prefecture at 7:30 AM JST on June 25 at a depth of 44 km, registering a rare <strong>&ldquo;upper 6&rdquo;</strong> on Japan&rsquo;s seismic intensity scale. This is the <strong>third M7+ quake</strong> to hit the Sanriku region since November 2025. At least <strong>10 people injured</strong>; no tsunami warning issued; no nuclear facility irregularities detected. PM Takaichi warned of a <strong>10&ndash;20% probability of a similar-magnitude aftershock</strong> within 2&ndash;3 days. The Tohoku Shinkansen halted operations before resuming in the afternoon.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Compounding the risk, <strong>Typhoon Mekkhala</strong> &mdash; the strongest June typhoon in the northwestern Pacific in 22 years &mdash; is tracking northward with <strong>126 km/h sustained winds and 180 km/h gusts</strong>, expected to pass Okinawa June 25&ndash;26 before potentially merging with Tropical Storm Higos and making <strong>landfall on Honshu over the weekend</strong>. The convergence of a major earthquake and a powerful typhoon creates a <strong>compound disaster scenario</strong> for Japanese manufacturing, logistics, and infrastructure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Compound disaster risk.</strong> Nikkei rebounded +4.41% today (from prior tech selloff), masking earthquake impact. Tohoku semiconductor fabs and auto parts plants on precautionary alert. Typhoon landfall on Honshu would disrupt manufacturing, ports, and logistics chains. Japanese insurers face dual earthquake + typhoon claims exposure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Obayashi (1802.T), Kajima (1812.T), Shimizu (1803.T) &mdash; construction/reconstruction &bull; Taisei (1801.T) &bull; Disaster preparedness suppliers<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Tokio Marine (8766.T &mdash; dual earthquake + typhoon claims) &bull; MS&amp;AD (8725.T) &bull; Renesas Electronics (6723.T &mdash; Tohoku chip fabs at risk) &bull; Toyota (7203.T &mdash; supply chain exposure) &bull; EWJ (iShares Japan ETF &mdash; if compound disaster materializes)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Dual oil supply shocks require hedging.</strong> Venezuela&rsquo;s twin earthquakes threaten OPEC output while Iran&rsquo;s Hormuz vessel strike undermines the fragile peace framework. Despite oil falling toward pre-war levels (~$70 WTI), the attack reversal (+2% intraday) shows the supply premium can snap back violently. Energy longs (XLE, COP, XOM) serve as portfolio insurance; airlines and consumer discretionary face persistent cost pressure.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Europe faces a triple convergence.</strong> Record heatwave (power grid failures, crop damage, hundreds of deaths), an imported Ebola case in France, and elevated energy costs create a compounding risk environment. European utility and HVAC names benefit from heat; agriculture and insurance face downside. Watch wheat futures and European nat gas for continued upside.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Safe havens are the trade of the week.</strong> With earthquakes in Venezuela and Japan, geopolitical risk in Hormuz, a WHO-declared pandemic emergency reaching Europe, and extreme weather across the continent &mdash; multiple risk vectors are active simultaneously. Gold fell below $4,000 on Iran peace hopes but the vessel attack and Ebola case should re-bid the safe-haven trade. GLD, TLT, and VIX-linked instruments offer portfolio protection in what may be the most multi-front risk environment of 2026.
      </p>
    </div>

    <!-- ===================== NOTABLE MENTIONS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Also on the Radar</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0;">
        &bull; <strong>KOSPI Crashed 10%, Then Rebounded 5.2%:</strong> Samsung -12.3%, SK Hynix -12.5% on June 23 (circuit breaker triggered). Rebounded sharply on June 25 after Micron blowout earnings ($41.5B revenue, +15% after-hours). AI semiconductor thesis intact despite extreme volatility.<br/>
        &bull; <strong>Iraq Threatens to Leave OPEC:</strong> OPEC&rsquo;s second-largest producer demands higher production quota, following UAE&rsquo;s May 1 departure. Could further erode OPEC&rsquo;s supply management capability.<br/>
        &bull; <strong>India-Pakistan Indus Waters Crisis:</strong> India moves to terminate 66-year-old Indus Waters Treaty; Pakistan&rsquo;s Defense Minister warned &ldquo;we will go to war&rdquo; if water security is threatened. Nuclear-armed neighbor tensions escalating.<br/>
        &bull; <strong>Apple Announces Price Hikes:</strong> First formal MacBook/iPad price increases citing AI-driven memory cost surge. iPhone hikes of $150&ndash;$200 expected. AAPL -6.5%, worst day since April 2025.<br/>
        &bull; <strong>UK Leadership Transition:</strong> Andy Burnham frontrunner to replace resigned PM Keir Starmer. Sterling sensitive to political uncertainty; leadership nominations open July 9.<br/>
        &bull; <strong>Sudan Civil War:</strong> RSF begins circulating parallel currency, deepening economic fragmentation. Drone strikes killed 1,000+ civilians in first five months of 2026. 19.5M face acute food insecurity.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 25, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">52,500 (+0.61%) &mdash; New Record</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">7,358 (-0.10%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,477 (-0.43%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">8,930 (+5.20% rebound)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">72,366 (+4.41%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">10,530 (+0.65%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$73.87 (-3.8%, reversed +2%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$70.34 (-3.9%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$3,993 (below $4K first time since Nov &rsquo;25)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.40%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">PCE Inflation</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.1% headline / 3.4% core</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Bitcoin</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">$60,700</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">VIX</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">18.63 (elevated)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NBC News &bull; NPR &bull; Al Jazeera &bull; CBS News &bull; CNBC &bull; CNN &bull; Washington Post &bull; Japan Times &bull; France 24 &bull; Euronews &bull; BBC &bull; WHO &bull; CDC &bull; PBS &bull; Reuters &bull; Bloomberg &bull; Fortune &bull; Korea Herald &bull; UN News &bull; USGS &bull; EIA &bull; European Commission &bull; ACLED
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
