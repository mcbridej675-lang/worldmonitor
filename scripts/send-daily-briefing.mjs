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
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; June 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Ceasefire Fractures: Iranian Drones Strike Bahrain After US Retaliatory Strikes on Iranian Targets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile US-Iran ceasefire has shattered in a rapid cycle of escalation. After Iran&rsquo;s IRGC struck the cargo vessel <strong>M/V Ever Lovely</strong> near the Omani coast on June 25, the United States launched <strong>retaliatory strikes against Iranian missile storage sites and coastal radar installations</strong> overnight June 26&ndash;27. Iran responded by <strong>launching drones at Bahrain</strong> &mdash; a sovereign Gulf state hosting a major US naval base &mdash; marking a dangerous widening of the conflict beyond the Strait of Hormuz. Vice President Vance warned that <strong>&ldquo;violence will be met with violence.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The memorandum of understanding signed just <strong>ten days ago on June 17</strong> to end the 2026 Iran war within 60 days is now in serious jeopardy. Approximately <strong>one-fifth of global oil and LNG supplies</strong> transit the Strait of Hormuz in peacetime. Tanker traffic had only recently begun to normalize, with Brent crude falling to $72/bbl on improving shipping flows. The attack on Bahrain risks <strong>dragging additional Gulf states into the conflict</strong> and destabilizing the entire Persian Gulf security architecture. Separately, a US-brokered <strong>Israel-Lebanon framework agreement</strong> was announced by Secretary Rubio, though analysts warn Iran will fight to sabotage it.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude settled at $71.99/bbl (-4.34%) and WTI at $69.23/bbl (-3.74%) on June 26 as markets had priced in diplomatic resolution. Friday&rsquo;s drone strikes on Bahrain will likely <strong>reverse this decline sharply</strong> when markets reopen Monday. Gold held near $4,000/oz on safe-haven demand. Defense and energy sectors directly exposed. Gulf sovereign wealth fund-linked assets face pressure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; NOC (Northrop Grumman) &bull; GD (General Dynamics) &mdash; defense contractors on re-escalation &bull; XOM, CVX, SHEL, BP (oil majors on supply risk) &bull; GLD (SPDR Gold Trust &mdash; safe haven)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> FRO (Frontline), EURN (Euronav) &mdash; tanker stocks on shipping disruption &bull; UAL, DAL, AAL (airlines, fuel cost surge) &bull; KSA (iShares Saudi Arabia ETF), UAE ETFs &mdash; Gulf regional instability &bull; JETS (airline ETF)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EUROPEAN HEAT WAVE SHATTERS RECORDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Economy &mdash; June 21&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Europe&rsquo;s Worst Recorded Heatwave: Germany Hits All-Time 41.5&deg;C, 327+ Dead, UK Breaks June Record Three Days Running</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An unprecedented &ldquo;omega block&rdquo; weather pattern has driven the <strong>worst heatwave in European recorded history</strong>. Germany smashed its all-time national temperature record at <strong>41.5&deg;C (106.7&deg;F) at Drewitz</strong> on June 27, breaking its own record set just 24 hours earlier. France has registered highs of <strong>40&ndash;44&deg;C</strong> with 49 of 96 mainland departments under the top red heat warning. The UK has broken its <strong>June temperature record three consecutive days</strong>, hitting ~38&deg;C in Somerset. Temperatures are running up to <strong>18&deg;C above seasonal averages</strong> across the continent.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At least <strong>327 heat-related deaths</strong> have been registered since June 21, with France bearing the heaviest toll. Thousands of schools have closed across France, Germany, and the UK. The <strong>Eiffel Tower and Louvre</strong> enforced early closures. Rail services across France and Germany face severe delays as tracks buckle. <strong>Euro 2026 matches</strong> in the UK and Ireland are under review for heat protocols. Power grids are strained &mdash; blackouts hit Turin as French nuclear plants throttled output due to river cooling water being too warm. Allianz estimates each heat episode cuts European GDP by <strong>~0.5 percentage points</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Macro:</strong> DAX fell 1.29% to 24,671. FTSE 100 down 0.21% to 10,508. European equities under pressure from productivity drag and infrastructure strain. Agricultural commodity futures (wheat, corn) rising on crop damage fears. Insurance sector exposed to escalating climate claims.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; HVAC demand surge) &bull; LII (Lennox International) &bull; JCI (Johnson Controls) &bull; Daikin Industries (6367.T) &bull; SU (Schneider Electric) &bull; WEAT (wheat futures ETF) &bull; DBA (agriculture ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MUV2 (Munich Re), ALV (Allianz), SREN (Swiss Re) &mdash; reinsurers face climate claims &bull; EDF, ENGI (European nuclear/utilities &mdash; cooling constraints) &bull; EZU (Eurozone ETF) &bull; European tourism &amp; hospitality broadly
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: VENEZUELA EARTHQUAKE DEATH TOLL SURPASSES 1,400 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Latin America / Natural Disaster / Humanitarian &mdash; June 24&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Earthquake Death Toll Surpasses 1,400 as Critical 72-Hour Survival Window Closes</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The death toll from twin earthquakes &mdash; magnitudes <strong>7.2 and 7.5</strong> &mdash; that struck Venezuela&rsquo;s northern Caribbean coast near La Guaira on June 24&ndash;25 has surged past <strong>1,400 dead with over 3,200 injured and 50,000 reported missing</strong>. These were the <strong>strongest quakes to hit Venezuela in over a century</strong>. The critical <strong>72-hour survival window</strong> for trapped survivors closed on the evening of June 27, dramatically reducing chances of finding anyone alive under rubble.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Over <strong>30 international search-and-rescue teams</strong> from the US, Brazil, Colombia, Mexico, Cuba, and the United Nations are on the ground. The US has pledged <strong>$150 million in aid</strong> and plans to deploy warships. The <strong>IMF is mobilizing $200 million</strong> in emergency funds. USGS PAGER modeling indicates significant probability of a final death toll in the thousands. Initial estimates suggest damage could reach <strong>7% of Venezuela&rsquo;s GDP</strong>. Venezuelans in Colombia are scrambling to send cross-border aid as the disaster forces a temporary thaw in US-Venezuela diplomatic relations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Venezuelan sovereign bonds and PDVSA debt under severe stress. Modest crude oil impact given Venezuela&rsquo;s already-reduced output. Construction and rebuilding materials demand expected to surge. Insurance and reinsurance sectors face catastrophe claims exposure. Latin American markets show ripple effects.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CAT (Caterpillar &mdash; heavy equipment for reconstruction) &bull; VMC (Vulcan Materials), MLM (Martin Marietta) &mdash; building materials &bull; FLR (Fluor Corporation &mdash; engineering &amp; construction) &bull; DE (Deere)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDVSA bonds &bull; Venezuelan sovereign debt &bull; RNR (RenaissanceRe), MKL (Markel) &mdash; catastrophe reinsurance claims &bull; ILF (Latin America 40 ETF &mdash; regional contagion) &bull; Regional airline routes
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: BEIJING CITIC TOWER PLANE CRASH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">China / Aviation / Security &mdash; June 26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Small Aircraft Crashes Into Beijing&rsquo;s CITIC Tower &mdash; China&rsquo;s Tallest Building &mdash; Pilot Killed, Authorities Censor Footage</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A single-engine, two-seat light sport aircraft crashed into the <strong>CITIC Tower</strong> &mdash; Beijing&rsquo;s tallest building at 528 meters (1,732 feet) and the <strong>10th tallest in the world</strong> &mdash; at approximately 5:55 PM local time on June 26. The pilot was killed and <strong>13 people on the ground were injured</strong> by falling debris. Flightradar24 data showed a <strong>severely deviated flight path</strong> after takeoff from Beijing&rsquo;s Shifosi airport. Video from the scene shows a gaping hole in the tower&rsquo;s facade.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese authorities have been <strong>actively scrubbing videos and images</strong> of the crash from the domestic internet, imposing an immediate information blackout. While the crash appears to be an isolated aviation incident rather than a deliberate attack, the imagery of a plane hitting a major skyscraper in a world capital inevitably raises <strong>global security concerns</strong>. The CITIC Tower houses major corporate tenants including CITIC Group, one of China&rsquo;s largest state-owned conglomerates. The incident highlights significant gaps in <strong>China&rsquo;s general aviation safety oversight</strong> and airspace management around urban centers. The Shanghai Composite fell 2.26% to 4,027 in the aftermath.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>China equities:</strong> Shanghai Composite fell 2.26% to 4,027. The censorship response weighs on investor sentiment regarding Chinese market transparency. Chinese real estate and commercial property sectors face short-term negative sentiment. Insurance companies face claims. Aviation safety oversight under scrutiny.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Building security &amp; surveillance firms &bull; Global aviation safety consultancies &bull; Competitors to Chinese general aviation manufacturers<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> FXI (iShares China Large-Cap ETF) &bull; MCHI (iShares MSCI China ETF) &bull; 0267.HK (CITIC Limited &mdash; direct exposure) &bull; 2328.HK (PICC Property &amp; Casualty) &bull; KWEB (China Internet ETF &mdash; censorship sentiment) &bull; Chinese real estate broadly
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: DRC EBOLA OUTBREAK ESCALATES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Central Africa / Health / Pandemic Risk &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">DRC Ebola Epidemic Escalates: CDC Activates Highest Response Level, WHO Rates Containment &ldquo;3 Out of 10,&rdquo; $1.4 Billion Needed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ebola outbreak caused by the <strong>Bundibugyo virus</strong> in the Democratic Republic of the Congo has surpassed <strong>1,155 confirmed cases with 304 deaths</strong>, and the US CDC has <strong>elevated its response to Level One</strong> &mdash; the highest activation level, reflecting the severity and complexity of the outbreak. The WHO has rated the current response at just <strong>&ldquo;three or four out of ten&rdquo;</strong> relative to what is needed, even with over 600 M&eacute;decins Sans Fronti&egrave;res staff deployed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Africa&rsquo;s public health agency now estimates the response requires <strong>$1.4 billion</strong> &mdash; nearly three times its earlier projection. Critically, there is <strong>no approved vaccine or treatment</strong> for the Bundibugyo strain. CEPI is fast-tracking three vaccine candidates with funding to IAVI ($3.2M), <strong>Moderna ($50M)</strong>, and Oxford ($8.6M). France confirmed its <strong>first imported case</strong> on June 24 &mdash; a doctor returning from the DRC. The outbreak has spread to <strong>Uganda</strong> and remains concentrated in eastern DRC&rsquo;s conflict zones (Ituri, North Kivu, South Kivu), making containment extremely difficult. This is the most significant Ebola outbreak since the <strong>2014&ndash;2016 West Africa epidemic</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Biotech rally, mining risk.</strong> Vaccine and therapeutics stocks surging on outbreak urgency. Travel stocks for Africa routes face headwinds. Mining companies with DRC operations face operational disruption risk. If outbreak spreads further beyond Africa, broader risk-off potential.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MRNA (Moderna &mdash; $50M CEPI contract for Bundibugyo vaccine) &bull; REGN (Regeneron &mdash; maftivimab prioritized by WHO) &bull; MRK (Merck &mdash; ERVEBO vaccine platform) &bull; ABT (Abbott Labs &mdash; diagnostics) &bull; TMO (Thermo Fisher &mdash; testing equipment)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GLEN (Glencore &mdash; DRC cobalt/copper operations at risk) &bull; GOLD (Barrick Gold &mdash; DRC mining exposure) &bull; AFK (VanEck Africa Index ETF) &bull; DAL, airline stocks with African routes &bull; Emerging market ETFs with DRC mining exposure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The US-Iran ceasefire is crumbling and oil could whipsaw Monday.</strong> Iran&rsquo;s drone strikes on Bahrain &mdash; a sovereign Gulf state, not just the Strait &mdash; mark a qualitative escalation. Markets closed Friday pricing in de-escalation (Brent at $72). If the MoU collapses over the weekend, expect oil above $85+ at the open. Defense names (LMT, RTX, NOC) are the strongest hedge against re-escalation. The Israel-Lebanon framework deal is a positive signal but fragile.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Climate is now a macro variable with direct GDP impact.</strong> Europe&rsquo;s record heatwave &mdash; 327+ dead, GDP shaved by 0.5pp per episode &mdash; is not a one-off. HVAC, water management, and grid infrastructure names (CARR, Schneider, JCI) have structural tailwinds. Reinsurers (Munich Re, Allianz, Swiss Re) face escalating claims. Agricultural commodities are bid as crops deteriorate.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch the Nikkei and China for contagion signals.</strong> Japan&rsquo;s Nikkei plunged 4.15% &mdash; the sharpest weekly decline among major indices. The Shanghai Composite dropped 2.26% after the CITIC Tower crash and censorship fallout. Biotech offers asymmetric upside via Ebola vaccine plays (MRNA, REGN) as the DRC outbreak hits CDC Level One and no approved Bundibugyo vaccine exists. Venezuela reconstruction creates a delayed catalyst for materials and heavy equipment names (CAT, VMC).
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 27, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,354 (-0.05%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,298 (-0.24%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">51,876 (-0.09%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">69,361 (-4.15%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">24,671 (-1.29%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">10,508 (-0.21%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Shanghai Composite</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">4,027 (-2.26%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$71.99 (-4.34%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$69.23 (-3.74%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~$4,000/oz</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">161.60 (yen near 40yr low)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CBS News &bull; Bloomberg &bull; Euronews &bull; NPR &bull; Fox News &bull; ABC News &bull; CNN &bull; Al Jazeera &bull; CBC News &bull; WMO &bull; NBC News &bull; WHO &bull; CDC &bull; ECDC &bull; UN News &bull; Reuters &bull; CNBC &bull; Yahoo Finance &bull; Trading Economics &bull; Flightradar24 &bull; USGS
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
    `curl -s -w "\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ` +
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
