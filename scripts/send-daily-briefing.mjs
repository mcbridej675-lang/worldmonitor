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

    <!-- ===================== EVENT 1: IRAN STRIKES VESSEL IN STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; June 26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran&rsquo;s IRGC Strikes Cargo Vessel Near Oman, Threatening Fragile Ceasefire Just 9 Days After MoU Signing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran&rsquo;s Islamic Revolutionary Guard Corps struck a <strong>cargo ship near the Omani coast</strong> in the Strait of Hormuz on Thursday, damaging the vessel&rsquo;s bridge but causing no reported casualties. The <strong>International Maritime Organization immediately paused its planned evacuation</strong> of ships stranded in the critical waterway since the conflict began. This comes just <strong>nine days after the U.S. and Iran signed a memorandum of understanding</strong> on June 17, intended to formally end the 2026 Iran war within 60 days.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>one-fifth of the world&rsquo;s oil and LNG supplies</strong> transit the Strait of Hormuz in peacetime. Traffic through the strait remains far below pre-war levels, though Middle Eastern producers have been ramping up output and oil flows through Hormuz recently reached their <strong>fastest pace since the war began</strong>. Any re-escalation could trigger another energy crisis &mdash; Brent crude peaked at ~$118/bbl in April during the height of hostilities. Markets initially spiked 4% on the strike before settling lower as traders judged the incident as isolated.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude spiked 4% on the strike headlines before settling down 4.34% at $71.99/bbl as markets assessed the incident as isolated. WTI fell 3.74% to $69.23/bbl &mdash; on track for a third straight weekly drop as Hormuz flows improve. <strong>Gold</strong> held near $4,000/oz on safe-haven demand. Defense stocks saw renewed interest. Tanker stocks whipsawed on shipping route uncertainty.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; NOC (Northrop Grumman) &mdash; defense contractors benefit from re-escalation risk &bull; XOM, CVX, SHEL (oil majors on volatility)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> FRO (Frontline), EURN (Euronav) &mdash; tanker stocks on shipping uncertainty &bull; UAL, DAL, AAL (airlines, fuel cost risk) &bull; TASI, ADX (Gulf indices on regional instability)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EUROPEAN HEAT WAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Economy &mdash; June 20&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Record-Shattering Heat Wave Engulfs Europe: France Breaks All-Time Record Twice, UK Hits Hottest June Day Ever</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Europe is experiencing what researchers are calling its <strong>worst-ever recorded heat wave</strong>. France registered its <strong>hottest day in history for the second consecutive day</strong>, with highs of 40&ndash;44&deg;C (104&ndash;111&deg;F) putting 49 of 96 mainland departments under the top red heat warning. The UK recorded its <strong>highest-ever June temperature at ~38&deg;C</strong> in Somerset, obliterating the 1976 record of 35.6&deg;C. Switzerland broke its June record at 38&deg;C in Basel. Over <strong>101 million people</strong> face temperatures exceeding 35&deg;C.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          France has reported at least <strong>50 heat-related deaths</strong>, mostly drownings as people sought relief in rivers and lakes. Thousands of schools have closed across France and the UK. The <strong>Eiffel Tower and the Louvre</strong> enforced early closures. Blackouts hit Turin as power grids strained. Allianz estimates each heat episode cuts European GDP by <strong>~0.5 percentage points</strong>, with cumulative losses of 5&ndash;7% of GDP projected by 2030 for the most exposed countries. Agricultural output, labor productivity, and energy grids are all under severe strain.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Macro:</strong> European equities under pressure from productivity drag. Agricultural commodity futures (wheat, corn) rising on crop damage fears. European utilities trading volumes surging. Insurance sector exposed to rising claims. DAX fell 1.21% to 24,697.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; HVAC demand surge) &bull; Daikin Industries (6367.T &mdash; air conditioning) &bull; SU (Schneider Electric &mdash; energy management) &bull; VIE (Veolia &mdash; water management demand) &bull; Wheat &amp; corn futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MUV2 (Munich Re), SREN (Swiss Re) &mdash; reinsurers face climate claims &bull; EDF (French nuclear &mdash; cooling water limits) &bull; European agriculture ETFs &bull; Tourism &amp; hospitality sector broadly
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: VENEZUELA EARTHQUAKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Latin America / Natural Disaster / Humanitarian &mdash; June 24&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Earthquake Death Toll Surges Past 920 &mdash; Strongest Quake in a Century Triggers International Rescue Mobilization</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The death toll from twin earthquakes &mdash; magnitudes <strong>7.5 and 7.2</strong> &mdash; that struck Venezuela&rsquo;s northern Caribbean coast on June 24&ndash;25 has surged to at least <strong>920 dead with over 3,360 injured</strong> and hundreds believed still trapped under rubble. The 7.5-magnitude quake was the <strong>strongest to hit Venezuela in over a century</strong>. USGS PAGER modeling indicates a significant probability of a final death toll in the thousands.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          International rescue teams from <strong>Brazil, Mexico, Colombia, Cuba, the U.S., and the United Nations</strong> are conducting round-the-clock search operations across at least five states. The U.S. has pledged <strong>$150 million in aid</strong> and plans to deploy warships and transport aircraft. The <strong>IMF is mobilizing $200 million</strong> in emergency funds. Initial forecasts suggest damage could reach <strong>7% of Venezuela&rsquo;s GDP</strong>. The disaster could further disrupt Venezuela&rsquo;s already fragile oil infrastructure and is testing U.S.-Venezuela diplomatic relations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Venezuelan sovereign bonds and PDVSA debt under stress. Modest crude oil impact given Venezuela&rsquo;s already-reduced output. Regional Latin American markets (Bovespa, Merval) show ripple effects from aid mobilization. Construction and rebuilding materials demand expected to rise.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CAT (Caterpillar &mdash; heavy equipment for reconstruction) &bull; DE (Deere) &bull; FLR (Fluor Corporation &mdash; engineering &amp; construction) &bull; VMC (Vulcan Materials), MLM (Martin Marietta) &mdash; building materials<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDVSA bonds (Venezuelan state oil debt) &bull; Venezuelan sovereign debt broadly &bull; Regional airline routes &bull; Insurance exposure in Caribbean basin
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: DRC EBOLA OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Central Africa / Health / Pandemic Risk &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">DRC Ebola Outbreak Becomes Second-Largest on Record: 1,155 Cases, 304 Dead, First Case Confirmed in France</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ebola outbreak caused by the <strong>Bundibugyo virus</strong> in the Democratic Republic of the Congo has surpassed <strong>1,155 confirmed cases with 304 deaths</strong>, making it the <strong>second-largest Ebola outbreak on record</strong>. The WHO declared it a <strong>Public Health Emergency of International Concern (PHEIC)</strong> on May 17. On June 24, <strong>France confirmed its first imported case</strong> &mdash; a doctor who had been working in the DRC on a humanitarian mission.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Critically, there is <strong>no approved vaccine or treatment</strong> for the Bundibugyo strain. The WHO recommended against using the existing rVSV-ZEBOV vaccine (designed for Zaire ebolavirus) due to low cross-protection evidence. CEPI is fast-tracking <strong>three vaccine candidates</strong> with funding to IAVI ($3.2M), <strong>Moderna ($50M)</strong>, and Oxford ($8.6M). The outbreak is concentrated in eastern DRC&rsquo;s conflict zones (Ituri, North Kivu, South Kivu) with spillover into Uganda, making containment extremely difficult.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Biotech rally, mining risk.</strong> Vaccine and therapeutics stocks surging on outbreak urgency. Travel stocks for Africa routes face headwinds. Mining companies with DRC operations face disruption risk. If outbreak spreads beyond Africa, broader risk-off potential.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MRNA (Moderna &mdash; $50M CEPI contract for Bundibugyo vaccine) &bull; REGN (Regeneron &mdash; maftivimab prioritized by WHO) &bull; CODX (Co-Diagnostics &mdash; Bundibugyo PCR test) &bull; SNGX (Soligenix &mdash; thermostable vaccine candidate)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GLEN (Glencore &mdash; DRC cobalt/copper operations at risk) &bull; GOLD (Barrick Gold &mdash; DRC mining exposure) &bull; Africa-route airlines &bull; EWZ-style emerging market ETFs with DRC mining exposure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: JAPANESE YEN CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Japan / Currency / Global Capital Flows &mdash; June 26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japanese Yen Slides Past 161 Per Dollar, Nearing 40-Year Low Despite $70B+ in Government Interventions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese yen has weakened sharply past the <strong>161 level against the U.S. dollar</strong>, touching 161.84 &mdash; its weakest since July 2024 and approaching levels not seen since 1986. This decline persists despite the Japanese government spending <strong>over $70 billion in currency interventions</strong> in May and the Bank of Japan hiking rates to their highest since 1995. Finance Minister Satsuki Katayama warned at the G7 that Japan is <strong>&ldquo;prepared to take decisive action on speculative moves.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan is the world&rsquo;s <strong>fourth-largest economy</strong> and a critical node in global supply chains. The yen&rsquo;s persistent weakness despite massive intervention signals a <strong>potential loss of policy credibility</strong> and raises the risk of competitive devaluations across Asia &mdash; Malaysia&rsquo;s ringgit has also fallen 4%+ in June. The Bank of Japan faces an impossible dilemma between <strong>defending the currency and supporting growth</strong>. The Nikkei 225 fell 2.8% on Friday as global risk-off sentiment and yen volatility rattled investors. If Japan is forced to sell U.S. Treasuries to fund further intervention, it could ripple into global bond markets.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>FX &amp; Bonds:</strong> USD/JPY at 161.60. Nikkei 225 -2.8%. Asian currencies broadly under pressure (KRW, MYR, THB). U.S. Treasury markets sensitive to Japan&rsquo;s position as a major holder of U.S. debt. Carry trade dynamics intensifying, increasing global FX volatility.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> TM (Toyota &mdash; export competitiveness from weak yen) &bull; SONY (Sony &mdash; Japanese exporter gains) &bull; Japanese exporter equities broadly &bull; FXY puts (currency hedging)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWJ (iShares Japan ETF &mdash; currency drag for USD investors) &bull; TLT (20+ Year Treasury Bond ETF &mdash; risk from Japanese Treasury sales) &bull; 8306.T (Mitsubishi UFJ), 8316.T (Sumitomo Mitsui) &mdash; BOJ policy uncertainty &bull; Asian emerging market currencies
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Geopolitical risk remains elevated but oil is falling on improving Hormuz flows.</strong> The IRGC strike on a cargo vessel threatens the fragile U.S.-Iran MoU, but markets are pricing it as isolated. Brent crude at $72 reflects growing optimism about shipping normalization. Energy longs carry event risk &mdash; any MoU collapse sends oil back above $90. Defense names (LMT, RTX) remain well-positioned as hedges against re-escalation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Climate is becoming a macro variable, not just a sector story.</strong> Europe&rsquo;s record heat wave is shaving GDP, straining power grids, and threatening crop yields. This is structural &mdash; HVAC, water management, and grid infrastructure names (CARR, Schneider, Veolia) have durable tailwinds. Reinsurers (Munich Re, Swiss Re) face escalating claims exposure. Agricultural commodities are bid.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Currency stress in Japan signals broader Asian fragility.</strong> The yen past 161 despite $70B+ in intervention is a warning shot. If the BOJ loses credibility, competitive devaluations could ripple across Asia. Watch for forced Treasury selling by Japan &mdash; TLT is the canary. Biotech offers asymmetric upside via Ebola vaccine plays (MRNA, REGN) as the DRC outbreak reaches France and no approved Bundibugyo vaccine exists.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 26, 2026</p>
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
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~70,400 (-2.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">24,698 (-1.21%)</td>
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
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$4,000/oz (-5% wk)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">161.60 (yen at 40yr low)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.40%</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CBS News &bull; CNBC &bull; CNN &bull; NPR &bull; Bloomberg &bull; Time &bull; NBC News &bull; The Weather Channel &bull; Euronews &bull; WHO &bull; CDC &bull; Reuters &bull; Yahoo Finance &bull; TheStreet &bull; TradingEconomics &bull; Schwab Market Update &bull; Fortune &bull; WMO &bull; ABC News &bull; Britannica &bull; Benzinga &bull; TradingKey &bull; CaixaBank Research
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
