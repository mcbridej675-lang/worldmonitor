#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Events &amp; Market Intelligence</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Briefing</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Conflict &bull; Regulation &bull; Macro</p>
    </div>

    <!-- ===================== EVENT 1: IRAN DRONE STRIKE ON KUWAIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iranian Drones Strike Kuwait International Airport as U.S.-Iran Strikes Intensify</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iranian drones struck the passenger terminal at <strong>Kuwait International Airport</strong> on June 3, killing one person, injuring dozens, and causing heavy damage. The airport was briefly shut down before partially resuming operations. The attack came as part of an overnight escalation in which the U.S. and Iran traded their most intense strikes since the fragile April ceasefire. The trigger was a U.S. Hellfire missile strike that disabled a Botswana-flagged oil tanker heading toward Iran&rsquo;s <strong>Kharg Island</strong> oil export hub.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran retaliated by firing missiles and drones at Bahrain (targeting the U.S. Fifth Fleet headquarters) and Kuwait. The <strong>Strait of Hormuz</strong> &mdash; through which roughly 20% of global energy supply transited before the conflict &mdash; remains largely paralyzed. Analysts expect oil to remain in the <strong>$90&ndash;$100 range</strong> for the foreseeable future.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>WTI crude +2.41% to $96.02/bbl</strong> &bull; <strong>Brent +1.89% to $97.81/bbl</strong> &bull; S&amp;P 500 fell 0.74% on inflation fears. Gas prices expected to hit fresh four-year highs this summer.<br/><br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>COP</strong> (ConocoPhillips), <strong>OXY</strong> (Occidental) &mdash; oil majors benefit directly from elevated crude prices<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>LMT</strong> (Lockheed Martin), <strong>RTX</strong> (RTX Corp, record $271B backlog), <strong>NOC</strong> (Northrop Grumman), <strong>GD</strong> (General Dynamics) &mdash; defense primes benefit from escalating conflict<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>DAL</strong> (Delta), <strong>UAL</strong> (United), <strong>AAL</strong> (American), <strong>RYAAY</strong> (Ryanair) &mdash; jet fuel costs spike, Middle East route disruptions<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>CCL</strong> (Carnival), <strong>RCL</strong> (Royal Caribbean) &mdash; higher fuel costs, itinerary cancellations
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIAN BARRAGE ON UKRAINE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Conflict / Defense &mdash; June 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Massive Russian Barrage: 73 Missiles &amp; 656 Drones Strike Kyiv and Ukrainian Cities, Killing 23</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Overnight on June 2, Russia unleashed one of its largest aerial assaults of the war: <strong>73 missiles and 656 drones</strong> targeted cities across Ukraine including <strong>Kyiv, Dnipro, Poltava, Kharkiv, and Zaporizhzhia</strong>. At least <strong>23 civilians were killed</strong> and over 138 wounded. In Kyiv, an apartment building was toppled, power outages hit the Podil district, and 81 people were wounded. Ukrainian air defenses intercepted 40 missiles and 602 drones.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Zelenskyy called the attack <strong>&ldquo;an explicit statement by Russia&rdquo;</strong> that strikes will continue unless Ukraine receives ballistic missile protection. The escalation reinforces the elevated European defense spending narrative and keeps European natural gas prices elevated. It strengthens the political case for continued NATO defense budget increases.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Safe-haven flows into U.S. Treasuries, gold, and the Swiss franc. European grain markets remain sensitive &mdash; Ukraine is a major wheat and corn exporter.<br/><br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>RNMBY</strong> (Rheinmetall) &mdash; Germany&rsquo;s largest defense contractor, key beneficiary of European rearmament<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>BAESY</strong> (BAE Systems), <strong>LMT</strong> (Lockheed &mdash; Patriot systems demand), <strong>RTX</strong> (RTX Corp) &mdash; NATO ally procurement surges<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>GOLD</strong> (Barrick Gold), <strong>NEM</strong> (Newmont) &mdash; safe-haven demand drives gold higher<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> European utility &amp; infrastructure stocks exposed to energy price volatility<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> Eastern European agricultural supply chains &amp; grain traders face disruption risk
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA BROKERAGE CRACKDOWN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">China / Regulation / Capital Markets &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Escalates Crackdown on Cross-Border Brokerages &mdash; Futu Fined $272M, Tiger Brokers Halts Mainland Deposits</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s Securities Regulatory Commission (CSRC) imposed massive fines on offshore brokerages for <strong>&ldquo;illegal cross-border securities operations.&rdquo;</strong> <strong>Futu Holdings</strong> was hit with a proposed penalty of <strong>1.85 billion yuan ($272 million)</strong>, <strong>Tiger Brokers</strong> (UP Fintech) faced 410 million yuan in fines, and <strong>Longbridge Securities</strong> was also penalized. Tiger Brokers announced it will halt new positions and deposits for mainland Chinese investors from June 12.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crackdown involves an estimated <strong>$32 billion in Hong Kong assets</strong> according to Citic. Goldman Sachs halved its price target on Futu from $210.47 to $102.13 and downgraded to &ldquo;neutral.&rdquo; This signals Beijing&rsquo;s continued desire to control capital outflows and channel domestic savings into onshore markets &mdash; reducing a meaningful source of foreign buying pressure on U.S. equities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Hong Kong&rsquo;s Hang Seng already down 1.8% YTD &mdash; faces further pressure from fintech sector weakness. Reduced Chinese retail flows into U.S. equities.<br/><br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>FUTU</strong> (Futu Holdings) &mdash; ADRs plunged 35%; Goldman cut target by 50%<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>TIGR</strong> (UP Fintech / Tiger Brokers) &mdash; ADRs sank as much as 47%<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>IBKR</strong> (Interactive Brokers) &mdash; potential knock-on concern about cross-border brokerage model<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>CITIC Securities</strong> (6030.HK), <strong>Haitong Securities</strong> (6837.HK) &mdash; potential beneficiaries of redirected onshore retail flows<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>HKEX</strong> (0388.HK) &mdash; if Beijing funnels more activity through Stock Connect
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: NEW DELHI FIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">India / Humanitarian / Medical Tourism &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Deadly Building Fire in New Delhi Kills 21, Including 18 Foreign Medical Tourists</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A fire swept through a building in the <strong>Malviya Nagar</strong> neighborhood of New Delhi on June 3, killing at least <strong>21 people</strong> and injuring others. The building housed a restaurant on the ground floor and a hotel above. Critically, <strong>18 of the 21 dead were foreign nationals</strong> who had traveled to India for medical treatment &mdash; a direct blow to India&rsquo;s booming <strong>$9+ billion medical tourism</strong> sector.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than 40 people were rescued using eight fire engines. Prime Minister <strong>Modi</strong> expressed condolences and announced financial assistance of 200,000 rupees per victim&rsquo;s family. India&rsquo;s <strong>BSE SENSEX</strong> is already the worst-performing major index in 2026, <strong>down 12.9% YTD</strong>. This incident could trigger regulatory tightening in the hospitality and medical tourism sectors.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            India&rsquo;s medical tourism industry could face a short-term demand shock as foreign patients reconsider safety. Hotel/hospitality sector may face increased compliance costs.<br/><br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>APOLLOHOSP.NS</strong> (Apollo Hospitals), <strong>FORTIS.NS</strong> (Fortis Healthcare), <strong>MAXHEALTH.NS</strong> (Max Healthcare) &mdash; leading medical tourism hospital chains face potential demand softening<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>INDHOTEL.NS</strong> (Indian Hotels / Tata) &mdash; sentiment drag from hospitality safety concerns<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>LEMONTREE.NS</strong> (Lemon Tree Hotels) &mdash; budget hospitality segment under scrutiny<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>MMYT</strong> (MakeMyTrip) &mdash; India&rsquo;s largest online travel platform faces sentiment headwinds
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: ECB RATE HIKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Europe / Central Banking / Macro &mdash; June 3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">ECB Signals Near-Certain June Rate Hike to 2.25% Amid Surging Eurozone Inflation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Multiple European Central Bank board officials publicly signaled that a June interest rate hike is <strong>&ldquo;likely&rdquo;</strong> at the upcoming June 11 meeting. Markets are now pricing a <strong>97% probability of a 25bp hike to 2.25%</strong> on the deposit facility rate. The hawkish pivot is driven by stubbornly high Eurozone inflation, with <strong>France&rsquo;s harmonized inflation reaching 2.8% YoY</strong> in May (the highest in over a year), fueled by elevated energy prices from the Strait of Hormuz crisis.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Markets now fully price <strong>two hikes by September</strong> and a 92% probability of a third before year-end. This tightening cycle is unusual &mdash; the ECB had been cutting rates through much of 2024&ndash;2025 &mdash; and the reversal is driven almost entirely by the oil price shock. Higher rates strengthen the euro but pressure European equities, particularly rate-sensitive sectors.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            European bond yields rising across the curve. German 10-year Bund repricing higher. Euro strengthening against the dollar.<br/><br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>DB</strong> (Deutsche Bank), <strong>BNP.PA</strong> (BNP Paribas), <strong>ING</strong> (ING Group), <strong>UCG.MI</strong> (UniCredit) &mdash; European banks benefit from wider net interest margins<br/>
            <span style="color: #22c55e;">&#9650; Bullish:</span> <strong>ALV.DE</strong> (Allianz), <strong>CS.PA</strong> (AXA) &mdash; insurers benefit from higher reinvestment yields<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>VNA.DE</strong> (Vonovia), <strong>URW.AS</strong> (Unibail-Rodamco) &mdash; European real estate faces higher financing costs<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>ASML</strong> (ASML), <strong>SAP</strong> (SAP) &mdash; European growth/tech stocks pressured by higher discount rates<br/>
            <span style="color: #ef4444;">&#9660; Bearish:</span> <strong>ENEL.MI</strong> (Enel), <strong>IBE.MC</strong> (Iberdrola) &mdash; capital-intensive utilities pressured
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== CROSS-CUTTING MARKET SUMMARY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; font-weight: 700;">Market Snapshot</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0; font-weight: 700;">Index / Asset</td>
          <td style="color: #888; padding: 6px 0; font-weight: 700;">Move</td>
          <td style="color: #888; padding: 6px 0; font-weight: 700;">Driver</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; padding: 8px 0;">-0.74% (7,553)</td>
          <td style="color: #bbb; padding: 8px 0;">Oil spike, inflation fears</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Nikkei 225</td>
          <td style="color: #22c55e; padding: 8px 0;">+31.8% YTD</td>
          <td style="color: #bbb; padding: 8px 0;">Yen weakness, BoJ dovishness</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">BSE SENSEX</td>
          <td style="color: #ef4444; padding: 8px 0;">-12.9% YTD</td>
          <td style="color: #bbb; padding: 8px 0;">Worst major index; fire adds pressure</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">WTI Crude</td>
          <td style="color: #22c55e; padding: 8px 0;">+2.41% ($96.02)</td>
          <td style="color: #bbb; padding: 8px 0;">Iran-U.S. strikes, Hormuz closure</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Brent Crude</td>
          <td style="color: #22c55e; padding: 8px 0;">+1.89% ($97.81)</td>
          <td style="color: #bbb; padding: 8px 0;">Same drivers</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Gold</td>
          <td style="color: #22c55e; padding: 8px 0;">UP (safe haven)</td>
          <td style="color: #bbb; padding: 8px 0;">Geopolitical risk premium, two active conflicts</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0;">Euro</td>
          <td style="color: #22c55e; padding: 8px 0;">Strengthening</td>
          <td style="color: #bbb; padding: 8px 0;">ECB hawkish pivot, rate hike imminent</td>
        </tr>
      </table>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy is the through-line connecting today&rsquo;s biggest stories.</strong> The Iran-Kuwait airport strike pushed oil toward $100 and is the primary catalyst behind the ECB&rsquo;s hawkish reversal. Two active shooting wars (Middle East and Ukraine) are simultaneously elevating energy costs, defense spending, and safe-haven demand &mdash; a combination that compresses consumer discretionary margins while boosting energy and defense equities.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Beijing&rsquo;s capital controls are tightening.</strong> The Futu/Tiger crackdown is a significant structural shift that reduces Chinese retail investor flows into U.S. equities. With $32B in assets affected, this isn&rsquo;t a one-off enforcement action &mdash; it&rsquo;s a policy direction. Watch for knock-on effects on Hong Kong&rsquo;s fintech ecosystem and U.S.-listed Chinese ADRs broadly.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">India&rsquo;s structural challenges deepen.</strong> The New Delhi fire &mdash; killing 18 foreign medical tourists &mdash; puts a spotlight on the gap between India&rsquo;s growth ambitions and its infrastructure/safety reality. With the SENSEX already down 12.9% YTD, sentiment headwinds are accumulating for India&rsquo;s hospitality and healthcare sectors.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Euronews &bull; The National &bull; CNN &bull; CBC &bull; Washington Post &bull; NPR &bull; PBS &bull; Kyiv Independent &bull; SCMP &bull; CNBC &bull; Al Jazeera &bull; Fortune &bull; TheStreet &bull; Advisor Perspectives &bull; Reuters &bull; BBC World
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        NOT FINANCIAL ADVICE // FOR GENERAL DISTRIBUTION
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
  subject: `[World Monitor] Top 5 Global Events & Market Impact — ${today}`,
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
