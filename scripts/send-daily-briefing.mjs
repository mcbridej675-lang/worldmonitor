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

    <!-- ===================== EVENT 1: IRAN-U.S. CEASEFIRE FRACTURES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; June 29&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-U.S. Ceasefire Fractures After Weekend Tit-for-Tat Strikes; Tehran Refuses to Return to Doha Talks</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile ceasefire in the Iran-U.S. war suffered a major setback over the weekend of June 28&ndash;29. Both the U.S. and Iran conducted <strong>tit-for-tat military strikes</strong>, violating the June 17 memorandum of understanding (MoU) signed by Trump and Iranian President Pezeshkian that was intended to end the war within 60 days. On June 30, Iran&rsquo;s Foreign Ministry declared it <strong>will not meet for negotiations until the U.S. fulfills MoU clauses</strong>, specifically regarding the conflict in Lebanon &mdash; directly contradicting Trump&rsquo;s claim that talks would resume in Doha.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz &mdash; through which <strong>20% of global petroleum liquids</strong> transit &mdash; remains partially disrupted. South Korea&rsquo;s president confirmed all but two Korean vessels have now transited the strait, but normal shipping has not resumed. Brent crude peaked at <strong>~$120/bbl in late April</strong> during the height of the blockade, crashed to ~$73 after the June 17 MoU, and rose 0.9% on June 29 on renewed strike fears before pulling back to <strong>$73.47</strong> on June 30 as partial talk of resumed negotiations emerged. Any full ceasefire collapse sends oil back toward $100+.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent at $73.47/bbl, volatile with extreme upside risk if MoU collapses. WTI at ~$70/bbl. TTF natural gas fell to EUR 40.6/MWh (lowest since April) as Hormuz shipping partially normalizes. Tanker freight rates remain extremely elevated. Dollar benefits from safe-haven flows.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> BWET (Breakwave Tanker Shipping ETF &mdash; +600% YTD) &bull; USO (U.S. Oil Fund &mdash; +90% YTD) &bull; XLE (Energy Select SPDR) &bull; XOM (ExxonMobil) &bull; CVX (Chevron) &bull; SLB (Schlumberger)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> DAL, UAL, AAL (airlines &mdash; elevated fuel costs) &bull; JETS (U.S. Global Jets ETF) &bull; Energy-importing EM currencies (INR, THB, PHP)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA FUEL CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Russia-Ukraine / Energy / Economy &mdash; June 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Putin Admits Nationwide Fuel Shortages as Ukrainian Drone Campaign Knocks Out 20%+ of Russia&rsquo;s Refining Capacity</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russian President Vladimir Putin publicly admitted on June 29 that Russia faces <strong>fuel shortages following an unprecedented Ukrainian drone campaign</strong> targeting oil refineries. <strong>8 of Russia&rsquo;s 10 largest refineries</strong> have been struck since March 2026, with over <strong>20% of total refining capacity</strong> knocked offline and more than 30% of gasoline output affected. The Kapotnya refinery near Moscow &mdash; the capital region&rsquo;s largest fuel supplier &mdash; was hit on June 12 and 18 and will be offline until at least end of 2026.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>55 of Russia&rsquo;s 83 federal regions</strong> are reporting fuel rationing (20&ndash;40 liter limits per customer, bans on filling canisters, multi-hour queues). Videos show physical fights at gas stations across Russia. Deputy PM Novak is considering a <strong>total ban on diesel exports</strong> (petrol and jet fuel exports already halted). Russia has petitioned <strong>Kazakhstan for 50,000 metric tons of gasoline</strong>. The Central Bank has cut its GDP growth forecast to just <strong>0.5&ndash;1.5% for 2026</strong>, down sharply from pre-war projections.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy:</strong> Russia&rsquo;s reduced export capacity tightens global diesel/gasoil supply. European diesel futures bullish as a major supplier exits the market. Ruble under pressure from inflation and declining export revenue. Ukraine&rsquo;s successful drone campaign validates increased NATO defense spending.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; AVAV (AeroVironment &mdash; Switchblade drone supplier enabling the strikes) &bull; ITA (iShares U.S. Aerospace &amp; Defense ETF) &bull; DFEN (3x Defense Bull) &bull; WEAT (Teucrium Wheat &mdash; Russian harvest at risk)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> ERUS (iShares MSCI Russia ETF &mdash; severely limited trading) &bull; Ruble (RUB) &bull; Russian sovereign bonds &bull; European energy-intensive industrials facing diesel cost spikes
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: VENEZUELA EARTHQUAKES UPDATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Latin America / Natural Disaster / Humanitarian &mdash; June 24&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Earthquake Death Toll Surges Past 1,700 with 46,600 Missing &mdash; Damage Estimated at $4.7&ndash;8.7 Billion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The death toll from twin earthquakes &mdash; magnitudes <strong>7.2 and 7.5</strong> &mdash; that struck Venezuela&rsquo;s north-central coast on June 24 has surged past <strong>1,700 confirmed dead</strong>, with authorities warning this is a &ldquo;substantial undercount.&rdquo; Over <strong>46,600 people are reported missing</strong> and more than 3,150 injured. The UNDP estimates <strong>$4.7&ndash;8.7 billion in damage</strong>, equivalent to approximately 6&ndash;7% of Venezuela&rsquo;s $111 billion GDP.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>El Palito refinery</strong> (146,000 bbl/day) suffered a complete power loss and shut down after transmission lines were damaged. However, Venezuela&rsquo;s main oil production regions (Orinoco Belt, Maracaibo Basin) are operating normally. The U.S. Treasury issued <strong>General License 60</strong> authorizing transactions for earthquake relief. The <strong>IMF committed $200 million</strong> in reconstruction funds. The disaster is especially devastating given Venezuela&rsquo;s pre-existing economic collapse, weakened institutions, and degraded healthcare system.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Venezuelan sovereign bonds and PDVSA debt under severe stress. El Palito refinery offline but main production unaffected. Reconstruction demand rising for heavy equipment and building materials. Potential migration wave to Colombia and Brazil creates regional pressure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CAT (Caterpillar &mdash; heavy equipment for reconstruction) &bull; DE (Deere) &bull; VMC (Vulcan Materials), MLM (Martin Marietta) &mdash; building materials &bull; GLD (SPDR Gold &mdash; safe-haven demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDVSA bonds (state oil debt) &bull; Venezuelan sovereign debt &bull; ILF (iShares Latin America 40 ETF &mdash; regional instability) &bull; EC (Ecopetrol, Colombia &mdash; refugee influx pressure)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EUROPEAN HEAT WAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Energy &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Europe&rsquo;s Worst June Heat Wave on Record Sends Electricity Prices Surging &mdash; Germany Hits EUR 207/MWh, France Curtails Nuclear Output</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Western Europe remains in the grip of its <strong>most severe June heat wave on record</strong>, with temperatures exceeding 40&deg;C across the UK, France, Germany, Switzerland, and Italy. France registered its <strong>hottest day in history for the second consecutive day</strong>. The UK recorded its <strong>highest-ever June temperature</strong>. European electricity prices have surged sharply: German market hit <strong>EUR 207.84/MWh</strong> (highest since November 2025), British market reached EUR 184.65/MWh, and France hit EUR 157.87/MWh.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Wind power production hit its lowest of 2026</strong> during week 26, compounding the supply squeeze. Nuclear plants in France and Germany must <strong>curtail output</strong> because cooling water is too warm. Only ~20% of European homes have air conditioning versus ~90% in the U.S., creating deadly conditions. Fortune estimates heat waves could cost Europe&rsquo;s largest economies <strong>$638 billion by 2030</strong>. Last year alone, heat, drought, and floods caused EUR 43 billion in losses.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Electricity &amp; FX:</strong> European spot power above EUR 115/MWh across most markets. Euro under mild pressure from productivity losses and energy costs. STOXX 600 flat; DAX, CAC 40, FTSE 100 each down ~0.2%. Agricultural commodities bid on drought risk. Climate adaptation becoming an investable macro theme.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; world&rsquo;s largest HVAC maker) &bull; TT (Trane Technologies) &bull; ETN (Eaton &mdash; grid infrastructure) &bull; PWR (Quanta Services &mdash; power grid) &bull; IBE.MC (Iberdrola &mdash; higher power prices) &bull; Wheat &amp; corn futures<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWG (iShares Germany ETF &mdash; EUR 207/MWh electricity) &bull; EWQ (iShares France ETF &mdash; nuclear curtailments) &bull; ENLAY (Enel ADR &mdash; nuclear headwinds) &bull; European reinsurers (MUV2, SREN) &bull; Agriculture ETFs
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: SOUTH KOREA FIRST FEMALE PM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">East Asia / Politics / Technology &mdash; June 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea Confirms First Female PM in 20 Years &mdash; Former Naver CEO Han Seongsook Signals AI-Driven Economic Transformation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 30, the South Korean National Assembly voted <strong>166&ndash;0</strong> to confirm <strong>Han Seongsook</strong> as the country&rsquo;s 50th Prime Minister &mdash; the first female PM in over 20 years. Han previously served as CEO of <strong>Naver</strong>, South Korea&rsquo;s internet giant, and most recently as Minister for Small and Midsize Businesses. Her appointment signals President Lee Jae Myung&rsquo;s commitment to an <strong>AI-driven economic transformation</strong>, aimed at converting Korea&rsquo;s semiconductor boom into inclusive growth.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This comes against the backdrop of an extraordinary run for Korean tech stocks. <strong>KOSPI has set record highs</strong> in late June, powered by Samsung, SK Hynix, and the high-bandwidth memory (HBM) chip complex. South Korea and Taiwan&rsquo;s technology stocks have been the <strong>single biggest driver of emerging market equity outperformance</strong> in 2026, with the MSCI EM Index returning 9.7% in May alone largely on Korean and Taiwanese tech. A tech-forward PM appointment further reinforces the government-backed AI and semiconductor agenda.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Tech &amp; EM:</strong> Korean Won mildly bullish on political stability and strong export momentum. KOSPI at record highs with continued AI/semiconductor tailwinds. Government-backed AI transformation agenda to boost global chip demand ecosystem. Unanimous parliamentary confirmation signals rare political consensus.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> EWY (iShares South Korea ETF) &bull; 005930.KS (Samsung Electronics &mdash; HBM chip leader) &bull; 000660.KS (SK Hynix &mdash; world HBM leader) &bull; NVDA (NVIDIA &mdash; Korean AI push boosts GPU demand) &bull; SOXX, SMH (Semiconductor ETFs) &bull; 035420.KS (Naver &mdash; new PM is former CEO)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Competing Asian tech indices may see relative underperformance vs. KOSPI &bull; Short-KRW positions face squeeze risk
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil is the macro wildcard with three converging catalysts.</strong> The Iran-U.S. ceasefire fracture, Russia&rsquo;s refinery crisis removing diesel exports, and Venezuela&rsquo;s El Palito refinery shutdown all tighten global supply. Brent at $73 reflects cautious optimism, but any MoU collapse sends crude back toward $100+. Energy longs (XLE, XOM) carry asymmetric upside; tanker play BWET is up 600% YTD and still running.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Defense spending is a secular trend, not a trade.</strong> Ukraine&rsquo;s drone campaign crippling Russia&rsquo;s refinery network validates the asymmetric warfare thesis. AVAV (AeroVironment) is a direct play on this paradigm shift. Traditional defense primes (LMT, RTX) remain positioned as hedges against both Iran and Russia re-escalation.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Climate adaptation is becoming macro-material.</strong> Europe&rsquo;s heat wave driving German electricity to EUR 207/MWh is a structural story &mdash; HVAC (CARR, TT), grid infrastructure (ETN, PWR), and renewables have durable tailwinds. Reinsurers face escalating claims exposure.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Asian tech leadership is accelerating.</strong> South Korea&rsquo;s appointment of a tech-industry PM reinforces the government-backed AI/semiconductor cycle powering KOSPI to records. Samsung, SK Hynix, and the broader HBM complex remain the strongest secular growth story in emerging markets.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 30, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~7,440 (+1.2%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq 100</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~25,880 (+2.3%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~52,180 (+307 pts, new record)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">STOXX 600</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Flat (+0.1%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX / CAC 40 / FTSE</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Each ~-0.2%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Record highs (Samsung/SK Hynix led)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">$73.47/bbl (volatile)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~$70.00/bbl</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TTF Natural Gas (EU)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">EUR 40.6/MWh (lowest since Apr)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EU Electricity (DE)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">EUR 207.84/MWh (heat wave)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~$4,000/oz</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNBC &bull; Bloomberg &bull; Reuters &bull; NPR &bull; Fortune &bull; RFE/RL &bull; OilPrice.com &bull; S&amp;P Global &bull; TheStreet &bull; Benzinga &bull; AleaSoft &bull; Nikkei Asia &bull; Japan Times &bull; FDD &bull; United24 Media &bull; Euronews &bull; ETF Trends &bull; CaixaBank Research &bull; Wikipedia Current Events
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
