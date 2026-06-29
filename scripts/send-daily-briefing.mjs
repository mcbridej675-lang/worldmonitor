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

    <!-- ===================== EVENT 1: US-IRAN CEASEFIRE FRACTURES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; June 28&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Ceasefire Fractures: Renewed Strikes &amp; Dueling Threats Put Strait of Hormuz on Knife&rsquo;s Edge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile ceasefire between the United States and Iran, signed just 12 days ago on June 17, is on the verge of collapse. Over the weekend, the US and Iran <strong>exchanged strikes</strong>, with Iran launching drone and missile attacks targeting <strong>Bahrain and Kuwait</strong> in retaliation for US airstrikes. Tehran threatened a <strong>&ldquo;complete halt&rdquo; to negotiations</strong> and warned that any challenge to their control of the Strait of Hormuz would escalate tensions further. President Trump warned Iran &ldquo;will no longer exist&rdquo; if strikes continue.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 29, Trump announced a meeting in Qatar for Tuesday (June 30), but a <strong>senior Iranian official denied any planned meetings</strong>. Meanwhile, the US Navy announced a <strong>widened shipping route near Oman</strong>, directly challenging Iran&rsquo;s claimed jurisdiction. Approximately one-fifth of the world&rsquo;s oil and LNG supplies transit the Strait of Hormuz in peacetime. Iran&rsquo;s domestic inflation has hit <strong>88.6% year-on-year</strong> in June. Any full resumption of hostilities could send oil back above $100/bbl from its current ~$73.74 level.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude at ~$73.74/bbl, WTI at ~$69.70/bbl &mdash; down 20% from the $120/bbl April peak but still ~$20 above start-of-year. Markets pricing the incident as contained, but any MoU collapse sends oil back above $100. <strong>Bonds:</strong> US Treasury yields declining on flight to safety. <strong>Dollar</strong> strengthened on safe-haven flows.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; NOC (Northrop Grumman) &mdash; defense contractors on re-escalation risk &bull; XOM, CVX, SHEL (oil majors on volatility premium)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> DAL, UAL, AAL (airlines &mdash; fuel cost risk) &bull; Maersk, Hapag-Lloyd (shipping route disruption) &bull; CF Industries, Nutrien (fertilizer input costs) &bull; Gulf indices (TASI, ADX) on regional instability
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: VENEZUELA EARTHQUAKE CATASTROPHE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Latin America / Natural Disaster / Humanitarian &mdash; June 24&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Earthquake Death Toll Surges Past 1,450 with 46,600+ Missing &mdash; USGS Models Warn of 100,000+ Casualties</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The twin earthquakes (magnitudes <strong>7.2 and 7.5, separated by just 39 seconds</strong>) that struck Venezuela on June 24 continue to escalate in severity. As of June 29, at least <strong>1,450 are confirmed dead, 3,150+ injured, and over 46,600 remain missing</strong>. The New York Times reported the official death toll may be a &ldquo;substantial undercount&rdquo; &mdash; the USGS PAGER system projects casualties could potentially <strong>exceed 100,000</strong>. An estimated <strong>1.7 million buildings</strong> were exposed to strong shaking.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UNDP estimates <strong>$4.7&ndash;8.7 billion in economic damage</strong> (approximately 6% of Venezuela&rsquo;s GDP), excluding longer-term reconstruction costs. The EU has activated its <strong>Civil Protection Mechanism</strong> and hundreds of US search-and-rescue workers are on the ground. International rescue teams from <strong>Brazil, Mexico, Colombia, Cuba, and the UN</strong> are conducting round-the-clock operations. Venezuela&rsquo;s already fragile oil infrastructure faces further disruption as an OPEC member.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Venezuelan sovereign bonds and PDVSA debt under extreme stress. Reduced Venezuelan oil output tightens global supply alongside Hormuz risks. Reinsurers face significant catastrophe losses. Reconstruction demand set to surge.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CAT (Caterpillar &mdash; heavy equipment for reconstruction) &bull; CEMEX, VMC (Vulcan Materials), MLM (Martin Marietta) &mdash; building materials &bull; FLR (Fluor Corporation &mdash; engineering &amp; construction)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDVSA bonds &bull; Venezuelan sovereign debt &bull; Munich Re (MUV2), Swiss Re (SREN), RenaissanceRe &mdash; catastrophe claims &bull; ILF (iShares Latin America 40 ETF)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EUROPEAN HEATWAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Health Crisis &mdash; June 21&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">European Heatwave Kills 1,300+: All-Time Temperature Records Shattered Across 10 Nations as WHO Declares Health Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Europe is experiencing one of its most severe heatwaves on record. The WHO reports more than <strong>1,300 excess deaths</strong> across Europe, with France alone recording approximately <strong>1,000 excess deaths</strong>. Spain has registered <strong>327 heat-related deaths</strong> since June 21. All-time national temperature records have been broken in <strong>Germany, Denmark, Czech Republic, Belgium, France, Ireland, Italy, Netherlands, Poland, and the UK</strong>. France recorded its hottest day ever on June 24 with a national average of 30.0&deg;C.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Day-ahead European electricity prices have <strong>jumped 29% week-on-week</strong> as cooling demand surges while wind power generation drops. Crop yields are under threat from heat stress, particularly wheat and corn in France and Germany. The WHO Europe chief has called on governments to treat heatwaves as a <strong>&ldquo;health crisis.&rdquo;</strong> The heatwave is now shifting eastward, threatening further records in Poland, the Baltics, and the Balkans.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Macro:</strong> European equities under pressure from productivity drag. European power prices +29%. Agricultural commodity futures (wheat, corn) rising on crop damage fears. Insurance sector exposed to rising claims and wildfire losses.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; HVAC demand surge) &bull; Daikin (6367.T &mdash; air conditioning) &bull; JCI (Johnson Controls) &bull; EDF, Enel, RWE (utilities &mdash; price spikes) &bull; Wheat &amp; corn futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Allianz (ALV), AXA, Generali &mdash; excess death claims &amp; wildfire damage &bull; MUV2 (Munich Re), SREN (Swiss Re) &mdash; reinsurance losses &bull; European agriculture ETFs &bull; Bayer, BASF (crop stress)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: INDIA MONSOON CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">South Asia / Climate / Food Security &mdash; June 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">India&rsquo;s Monsoon Crisis Deepens: 43% Rainfall Deficit Threatens Food Security for 1.4 Billion People</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          India&rsquo;s southwest monsoon is running at a <strong>43% deficit below average</strong>, driven by El Ni&ntilde;o conditions confirmed by NOAA and expected to strengthen into winter 2026&ndash;27. The India Meteorological Department issued its <strong>first below-normal monsoon forecast in 11 years</strong>, projecting rainfall at just 92% of the Long Period Average. June and July are the critical window for <strong>kharif (summer) crop sowing</strong> &mdash; rice, maize, cotton, soybean, and sugarcane &mdash; and <strong>60% of Indian farmers depend entirely on monsoon rains</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Five simultaneous weather systems are working against the monsoon: weak Madden-Julian Oscillation, a sluggish Somali Jet, dry northwesterly air, a neutral Indian Ocean Dipole, and fewer Bay of Bengal low-pressure systems. ICRA has projected <strong>CPI inflation for FY2027 to exceed 4.5%</strong>. India is the world&rsquo;s <strong>largest rice exporter</strong> &mdash; any export restrictions would ripple through global food prices. The Strait of Hormuz crisis has simultaneously raised fertilizer costs, compounding agricultural stress across the subcontinent.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Food inflation:</strong> Global rice, sugar, and cotton futures under upward pressure. RBI may delay rate cuts to combat food-driven inflation. Indian rupee weakened on higher import bill expectations. Indian government bond yields may rise on inflation expectations.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> ADM (Archer Daniels Midland), BG (Bunge) &mdash; global food/agri beneficiaries &bull; Suedzucker, British Sugar (sugar price rises) &bull; Global rice futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Hindustan Unilever, ITC, Dabur &mdash; Indian FMCG/rural consumption slowdown &bull; Mahindra &amp; Mahindra, Hero MotoCorp &mdash; tractor/rural auto sales &bull; SBI, PNB, Bank of Baroda &mdash; agricultural loan NPAs &bull; INDA (iShares MSCI India ETF)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: SERBIA POLITICAL UPHEAVAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Balkans / Political Upheaval / EU Accession &mdash; June 27&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Serbia&rsquo;s President Vucic Announces Resignation After 18 Months of Mass Protests &mdash; Tens of Thousands March in Skepticism</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 27, Serbian President Aleksandar Vucic announced he will <strong>resign &ldquo;within weeks&rdquo;</strong> and call early presidential and parliamentary elections, after 18 months of sustained mass protests. The protests began in November 2024 after the <strong>Novi Sad railway station disaster killed 16 people</strong>, sparking fury over government corruption and negligence. Despite the announcement, <strong>tens of thousands of protesters</strong> descended on the city of Kraljevo on June 29, expressing skepticism that Vucic will truly relinquish power.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Analysts warn Vucic may attempt to <strong>run for prime minister while installing an ally in the presidency</strong>. This represents a significant democratic moment in the Balkans with implications for <strong>Serbia&rsquo;s EU accession process</strong>, its non-aligned stance on Russia sanctions, and regional stability. Serbia&rsquo;s energy deals with <strong>Russia (gas supply) and China (Belt &amp; Road infrastructure)</strong> could be renegotiated under new leadership, potentially reshaping geopolitical alignment in Southeast Europe.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Belgrade stock exchange likely volatile during transition. Serbian dinar under pressure. Political uncertainty could delay EU accession talks, affecting foreign investment sentiment across the Western Balkans. Energy and infrastructure deals with Russia and China face potential review.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Western defense contractors (if Serbia shifts toward NATO alignment) &bull; EU infrastructure firms (if accession accelerates)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Erste Group, OTP Bank, Raiffeisen Bank International &mdash; European banks with Balkan exposure &bull; NIS (Naftna Industrija Srbije &mdash; Gazprom Neft majority-owned, geopolitical realignment risk) &bull; Chinese-backed Belgrade-Budapest railway projects
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The US-Iran ceasefire is the single biggest swing factor in global markets.</strong> Brent at $73.74 prices in cautious optimism, but the weekend&rsquo;s exchange of strikes and Tehran&rsquo;s denial of any planned Qatar meeting show the MoU is paper-thin. A collapse sends oil back above $100 and triggers broad risk-off. Defense names (LMT, RTX, NOC) remain the cleanest hedge against re-escalation. Energy longs carry asymmetric upside risk on any Hormuz closure.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Simultaneous climate shocks across three continents are converging into a food inflation story.</strong> Europe&rsquo;s lethal heatwave is shaving GDP and threatening crop yields, while India&rsquo;s 43% monsoon deficit puts rice, sugar, and cotton harvests at risk for 1.4 billion people. If India restricts rice exports (as it did in 2023), global food prices spike. Agricultural commodities, HVAC infrastructure (CARR, Daikin), and global food traders (ADM, Bunge) have structural tailwinds. Reinsurers face mounting claims from both crises.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Venezuela&rsquo;s earthquake is a slow-burning humanitarian and EM debt story.</strong> With 46,600+ still missing and USGS models warning of 100,000+ casualties, this is likely to escalate. PDVSA debt and Venezuelan sovereign bonds are under extreme stress. Construction/materials names (CAT, CEMEX) benefit from reconstruction demand. Serbia&rsquo;s political shift, while lower-impact on global markets, is worth monitoring for European energy geopolitics &mdash; any pivot away from Russia/China by Belgrade reshapes Balkan investment dynamics.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 29, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$73.74/bbl (down from $120 peak)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$69.70/bbl</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Elevated &mdash; geopolitical safe-haven demand</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Declining &mdash; flight to safety</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EUR Power Prices</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">+29% week-on-week (heatwave)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">MSCI EM Index</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Worst week since March</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">USD</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Strengthening on safe-haven flows</td>
        </tr>
      </table>
    </div>

    <!-- ===================== WATCHLIST ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">On the Radar</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0;">
        &bull; <strong style="color: #fff;">China-Taiwan:</strong> Chinese Coast Guard &ldquo;harassing&rdquo; commercial shipping off Taiwan&rsquo;s east coast; Western allies issued joint concern. Semiconductor supply chain risk elevated.<br/>
        &bull; <strong style="color: #fff;">France-Italy Lebanon Coalition:</strong> Proposal to replace UNIFIL with a multinational force after mandate ends Dec 31, 2026.<br/>
        &bull; <strong style="color: #fff;">Apple (AAPL):</strong> Fell 6% on June 25 after mid-cycle price hikes due to memory chip cost surge (&ldquo;RAMageddon&rdquo;), recovered 3.14% on June 29. Reflects broader AI-driven semiconductor cost pressures.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNN &bull; CBS News &bull; CNBC &bull; Fox News &bull; Reuters &bull; Euronews &bull; WMO &bull; WHO &bull; UN News &bull; NPR &bull; UNDP &bull; USGS &bull; New York Times &bull; Outlook India &bull; Business Today &bull; Daily Pioneer &bull; CBC News &bull; Sunday Guardian &bull; Wikipedia
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
