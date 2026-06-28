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

    <!-- ===================== EVENT 1: US-IRAN CEASEFIRE COLLAPSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; June 27&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Ceasefire Collapses as Both Sides Exchange Retaliatory Strikes &mdash; Iran Hits US Bases in Kuwait and Bahrain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile US-Iran ceasefire shattered over the weekend. On June 27, the <strong>US military struck five Iranian coastal targets</strong> &mdash; including air defense sites, drone storage facilities, and surveillance infrastructure &mdash; in response to an Iranian drone attack on a cargo ship in the Strait of Hormuz. Iran&rsquo;s IRGC retaliated on June 28 by launching <strong>ballistic missiles and drones at the US Ali Al Salem Air Base in Kuwait</strong> and the <strong>US Fifth Fleet headquarters at Port Salman in Bahrain</strong>. Kuwait&rsquo;s air defenses intercepted the projectiles with no reported casualties; Bahrain reported damage to a residential building near its airport.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Both Gulf states condemned the Iranian attacks. Iran has <strong>threatened to halt peace talks entirely</strong>, putting the June 17 memorandum of understanding &mdash; a 60-day ceasefire framework signed by both presidents &mdash; in serious jeopardy. However, late Saturday reports indicate both sides have <strong>agreed to halt attacks and meet in Doha on Tuesday</strong> to discuss the Hormuz standoff, moving talks originally planned for Switzerland. Approximately <strong>one-fifth of the world&rsquo;s oil and LNG</strong> transits the Strait of Hormuz, and shipping had only recently recovered to ~75% of pre-war levels. Brent crude closed Friday at ~$72/bbl &mdash; that decline is likely to reverse sharply when markets reopen Monday.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy &amp; Defense:</strong> Brent crude at $71.99 heading into the weekend &mdash; expect a significant gap-up Monday on renewed Hormuz closure risk. Defense contractors and oil majors will lead. Airlines face renewed jet fuel cost headwinds. Gold and Treasuries likely to see safe-haven inflows.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XOM (ExxonMobil) &bull; CVX (Chevron) &bull; COP (ConocoPhillips) &bull; LMT (Lockheed Martin) &bull; RTX (RTX Corp) &bull; NOC (Northrop Grumman) &bull; USO (US Oil Fund) &bull; BNO (Brent Oil Fund) &bull; GLD (Gold ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> JETS (US Global Jets ETF) &bull; DAL, UAL, AAL (airlines &mdash; fuel costs) &bull; SPY, QQQ (broad indices on risk-off) &bull; FRO, EURN (tanker stocks on shipping disruption) &bull; Gulf equity indices (TASI, ADX)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EUROPEAN HEAT WAVE EXPANDS EAST ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Economy &mdash; June 17&ndash;28+</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Europe&rsquo;s Deadliest Heatwave on Record: 1,300 Excess Deaths, Germany Shatters All-Time Record, Heat Dome Shifts East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The World Health Organization reports <strong>over 1,300 excess deaths across Europe</strong> since June 21, with France alone accounting for approximately <strong>1,000 fatalities</strong>, predominantly among people aged 65 and older. Germany has set a <strong>new national all-time temperature record for the third consecutive day</strong>, reaching 41.7&deg;C (107&deg;F) in Neissemunde. The UK recorded its <strong>hottest-ever June day</strong> at 36.4&deg;C in Somerset, and Switzerland broke its June record for the third straight day at 39&deg;C in Basel.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The persistent <strong>&ldquo;Omega block&rdquo; weather pattern</strong> is now shifting east into Poland, the Czech Republic, and the Balkans, with no relief forecast until early July. National weather services from Berlin to Prague have issued <strong>Red Alerts for extreme fire danger</strong>. Energy grids are under severe strain with demand surging up to 14%, and blackouts have hit multiple cities. Thousands of schools across the UK and France have closed. ECB research shows summer heatwaves reduce regional economic activity by <strong>~1% of GDP</strong>, with effects lasting up to two years. Agricultural output across cereals, livestock, and fruit is declining.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Macro:</strong> European equities facing GDP drag from productivity losses. Agricultural commodity futures rising on crop damage fears. Electricity prices 2&ndash;3x in affected regions. Insurance claims escalating. DAX fell 1.21% to 24,698 on Friday.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; HVAC demand) &bull; Daikin (6367.T &mdash; air conditioning) &bull; SU (Schneider Electric &mdash; energy mgmt) &bull; ENPH (Enphase Energy) &bull; DBA (Agriculture ETF) &bull; Wheat &amp; corn futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWG (Germany ETF), EWQ (France ETF), VGK (Europe ETF) &bull; MUV2 (Munich Re), SREN (Swiss Re) &mdash; reinsurer claims &bull; EDF (French nuclear &mdash; cooling limits) &bull; European airlines (IAG, AF.PA) &bull; Tourism &amp; hospitality
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: VENEZUELA EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Latin America / Natural Disaster / Humanitarian &mdash; June 24&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Earthquake Death Toll Surges Past 1,450 &mdash; 68,900 Missing as 72-Hour Rescue Window Closes Sunday</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The death toll from twin earthquakes &mdash; magnitudes <strong>7.2 and 7.5</strong>, striking just 39 seconds apart &mdash; that devastated northwestern Venezuela on June 24 has climbed to at least <strong>1,450 dead, 3,238 injured, and a staggering 68,900 people unaccounted for</strong>. The 7.5-magnitude quake was the <strong>strongest to hit Venezuela in over a century</strong>. The USGS PAGER system warns the final death toll could potentially <strong>exceed 100,000</strong>. The critical 72-hour rescue window &mdash; offering the greatest chance of finding survivors beneath rubble &mdash; closes Sunday.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UN estimates damage at <strong>$4.7&ndash;8.7 billion</strong>, representing 4&ndash;8% of Venezuela&rsquo;s GDP, with approximately <strong>58,870 buildings damaged or destroyed</strong>. A magnitude 4.9 aftershock struck June 26, further rattling survivors. International rescue teams from <strong>Brazil, Mexico, Colombia, Cuba, and the UN</strong> are conducting round-the-clock operations. The IMF has mobilized <strong>$200 million in emergency funds</strong> and the US pledged <strong>$150 million in aid</strong>. Venezuela&rsquo;s oil infrastructure (1.2 million bbl/day) has <strong>largely escaped damage</strong> &mdash; the Orinoco Belt, Maracaibo Basin, and Paraguana Refining Center remain operational &mdash; but widespread power grid disruptions threaten eventual operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Venezuelan sovereign and PDVSA debt under stress. Oil infrastructure intact for now, limiting direct commodity impact. Construction and rebuilding material demand expected to rise. Modest ripple effects across LatAm markets.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CAT (Caterpillar &mdash; heavy equipment) &bull; DE (Deere) &bull; FLR (Fluor Corp &mdash; engineering/construction) &bull; VMC (Vulcan Materials), MLM (Martin Marietta) &mdash; building materials &bull; CVX (Chevron &mdash; major Venezuela operations, confirmed unaffected)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDVSA bonds (Venezuelan state oil debt) &bull; Venezuelan sovereign debt &bull; ILF (Latin America 40 ETF &mdash; modest) &bull; Insurance exposure in Caribbean basin &bull; Regional airline routes
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: ISRAEL-LEBANON FRAMEWORK DEAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Middle East / Security / Diplomacy &mdash; June 26&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel-Lebanon Framework Deal Signed, But Hezbollah Calls It &ldquo;Null and Void&rdquo; &mdash; Fighting Continues Across Southern Lebanon</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 26, US Secretary of State Marco Rubio announced a <strong>framework agreement between Israel and Lebanon</strong> aimed at &ldquo;lasting peace and security.&rdquo; The deal calls for <strong>&ldquo;pilot zones&rdquo; in southern Lebanon</strong> where the Lebanese Armed Forces would take exclusive control, excluding all non-state actors including Hezbollah. However, <strong>Israel&rsquo;s withdrawal is tied to Hezbollah&rsquo;s disarmament</strong> &mdash; a condition the Iran-backed group has categorically rejected.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Hezbollah leader Naim Qassem called the deal <strong>&ldquo;null and void&rdquo;</strong> and described the disarmament demand as &ldquo;surrender, defeat, and achieving the enemy&rsquo;s goals.&rdquo; He criticized provisions linking Israeli withdrawal to Hezbollah&rsquo;s disarmament, saying they <strong>&ldquo;crossed all red lines.&rdquo;</strong> Fighting continues on the ground, with Israeli troops in southern Syria coming under fire and Israeli drones striking tents in al-Mawasi, killing two Palestinians. The deal&rsquo;s viability is further complicated by the simultaneous <strong>US-Iran military escalation</strong>, given Hezbollah&rsquo;s position as Iran&rsquo;s primary regional proxy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical Risk:</strong> High uncertainty &mdash; framework deal offers hope but Hezbollah rejection and simultaneous US-Iran strikes cloud outlook. Any genuine de-escalation would reduce the geopolitical risk premium in oil and boost regional equities. The deal&rsquo;s fate is entangled with the broader Iran war trajectory.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP (if deal holds):</strong> EIS (iShares Israel ETF) &bull; TEVA (Teva Pharma) &bull; CYBR (CyberArk), CHKP (Check Point) &mdash; Israeli tech &bull; Lebanese reconstruction plays<br/>
            <strong style="color: #ef4444;">&#9660; DOWN (if deal collapses):</strong> EIS &bull; Regional Middle East ETFs &bull; Oil spikes further on multi-front escalation &bull; European equities with Levant exposure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: INDIA MONSOON DEFICIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">South Asia / Climate / Food Security &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">India&rsquo;s Monsoon Deficit Hits 42% &mdash; Strongest El Ni&ntilde;o in Decades Threatens Food Security for 1.4 Billion People</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          India is experiencing one of its <strong>driest Junes in 146 years of record-keeping</strong>, with monsoon rainfall running approximately <strong>42% below the long-period average</strong>. The Indian Meteorological Department projects total 2026 rainfall at around 90% of normal &mdash; anything below this threshold is classified as <strong>deficient</strong>. NOAA has confirmed El Ni&ntilde;o conditions, and the APEC Climate Centre puts the probability of a strong El Ni&ntilde;o from July&ndash;December at <strong>99.4%</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Soybean and groundnut sowing is <strong>already lagging behind normal levels</strong>, with severe dry alerts issued for India&rsquo;s oilseed belts. Mumbai&rsquo;s seven reservoirs hold just <strong>10.35% capacity</strong>, leaving India&rsquo;s financial capital with approximately 40 days of drinking water. Agriculture accounts for <strong>14% of India&rsquo;s GDP and employs over half the workforce</strong>, making a poor monsoon a major drag on the entire economy. A weak monsoon ripples outward into food prices, rural wages, consumer demand, tractor and two-wheeler sales, banking asset quality, and fiscal balances. The Reserve Bank of India faces a dilemma: <strong>food inflation could prevent rate cuts</strong> needed to support growth.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Food &amp; Commodities:</strong> India is the world&rsquo;s largest producer/consumer of several key crops. Reduced output of pulses, oilseeds, rice, and coarse cereals will push up global food commodity prices. Over 600 million people depend on agriculture &mdash; reduced rural consumption will slow GDP. Water scarcity in Mumbai could disrupt business operations.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SOYB (Soybean Fund) &bull; WEAT (Wheat Fund) &bull; DBA (Agriculture ETF) &bull; NTR (Nutrien), MOS (Mosaic), CF (CF Industries) &mdash; fertilizer demand &bull; Global rice &amp; sugar futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> INDA (India ETF) &bull; EPI (WisdomTree India) &bull; INFY (Infosys &mdash; India economy drag) &bull; Indian consumer stocks (Hindustan Unilever, ITC) &bull; Indian banking sector (HDFC, ICICI) &bull; TTM (Tata Motors &mdash; rural demand)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The US-Iran ceasefire is collapsing in real time.</strong> Iran&rsquo;s strikes on US bases in Kuwait and Bahrain represent the most dangerous escalation since the June 17 MoU was signed. Oil&rsquo;s sharp decline to $72/bbl over the past week assumed improving Hormuz flows &mdash; that thesis is now under direct threat. Expect crude to gap up sharply Monday. Defense (LMT, RTX, NOC) and oil majors (XOM, CVX) are the obvious hedges. The Doha talks on Tuesday are now the single most important catalyst for global markets this week.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Inflation risks are building from three independent vectors.</strong> Europe&rsquo;s heatwave (food + energy prices), India&rsquo;s monsoon deficit (global food commodities), and Middle East instability (oil) all point to renewed inflationary pressure simultaneously. Agricultural commodities (DBA, WEAT, SOYB) and fertilizer stocks (NTR, MOS) have durable tailwinds. Central banks in Europe and India may be forced to delay or reverse rate cut expectations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Defensive rotation is the prevailing theme.</strong> Safe-haven flows into gold (GLD), US Treasuries (TLT), and the US dollar (UUP) are the natural responses to this convergence of geopolitical and climate risks. The Venezuela disaster adds humanitarian urgency but limited systemic market risk given intact oil infrastructure. The Israel-Lebanon framework deal offers a glimmer of regional de-escalation &mdash; but its entanglement with the deteriorating US-Iran situation makes it fragile. Rotate toward defense, energy, commodities, and safe havens; underweight European equities, Indian consumer plays, and airlines.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; Friday Close, June 26, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,354 (-0.05%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq Composite</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,298 (-0.24%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">51,876 (-0.09%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX (Germany)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">24,698 (-1.21%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~70,400 (-2.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$71.99/bbl (-4.34%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$69.23/bbl (-3.74%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$4,000/oz (-5% wk)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">161.60 (yen near 40yr low)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.40%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Corn (July)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$4.12&frac34; (-$0.02)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CBS News &bull; NBC News &bull; CNN &bull; ABC News &bull; The Times of Israel &bull; Reuters &bull; The Washington Post &bull; Axios &bull; Time &bull; PBS &bull; CNBC &bull; Bloomberg &bull; Yahoo Finance &bull; S&amp;P Global &bull; Fortune &bull; WHO &bull; WMO &bull; USGS &bull; Indian Meteorological Department &bull; NOAA &bull; TradingEconomics &bull; Wright Research &bull; Outlook Business &bull; Euronews &bull; severe-weather.eu
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
