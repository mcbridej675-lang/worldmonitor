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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence &amp; Market Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Central Banks &bull; Energy &bull; Defense &bull; Financial Markets</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 2, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="color: #888; font-size: 11px; padding: 4px 0;">S&amp;P 500</td>
          <td style="color: #4ade80; font-size: 11px; padding: 4px 0; text-align: right;">7,609.78 (+0.13%) &mdash; Record Close</td>
        </tr>
        <tr>
          <td style="color: #888; font-size: 11px; padding: 4px 0;">Dow Jones</td>
          <td style="color: #4ade80; font-size: 11px; padding: 4px 0; text-align: right;">51,307 (+0.45%)</td>
        </tr>
        <tr>
          <td style="color: #888; font-size: 11px; padding: 4px 0;">Nasdaq</td>
          <td style="color: #4ade80; font-size: 11px; padding: 4px 0; text-align: right;">27,093 (+0.03%)</td>
        </tr>
        <tr>
          <td style="color: #888; font-size: 11px; padding: 4px 0;">WTI Crude</td>
          <td style="color: #f87171; font-size: 11px; padding: 4px 0; text-align: right;">$91.97/bbl (-0.20%)</td>
        </tr>
        <tr>
          <td style="color: #888; font-size: 11px; padding: 4px 0;">Brent Crude</td>
          <td style="color: #888; font-size: 11px; padding: 4px 0; text-align: right;">~$95/bbl (elevated)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1: RUSSIA-UKRAINE MASSIVE STRIKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">EUROPE / Ukraine / Military Escalation &mdash; June 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Launches Largest Hypersonic Barrage of the War: 73 Missiles &amp; 656 Drones Strike Ukraine</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia launched one of the most devastating combined strikes of the war overnight, firing <strong>73 missiles and 656 drones</strong> at Ukrainian cities. Kyiv, Dnipro, and Kharkiv bore the heaviest damage. At least <strong>22 people were killed</strong> and over <strong>100 injured</strong>, with apartment buildings toppled in Dnipro. Ukrainian air defenses intercepted 40 missiles and 602 drones.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The strike included <strong>8 Zircon hypersonic missiles</strong> &mdash; believed to be the largest single deployment of these weapons in the war. The Zircon travels at Mach 9 with a 1,000 km range, making interception extremely difficult. In response, Ukrainian drones struck a Russian oil refinery in Krasnodar and killed one person in Russia&rsquo;s Kursk region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Defense stocks</strong> remain in a structural bull market. <strong>Lockheed Martin (LMT)</strong>, <strong>RTX Corp (RTX)</strong>, and <strong>Northrop Grumman (NOC)</strong> benefit from sustained NATO ammunition orders. <strong>Rheinmetall (RHM.DE)</strong> continues surging as Europe&rsquo;s primary munitions supplier. The Zircon hypersonic deployment boosts the case for hypersonic defense programs &mdash; watch <strong>L3Harris (LHX)</strong> and <strong>Raytheon&rsquo;s missile defense unit</strong>. European natural gas futures may see upward pressure on escalation fears. Ukrainian drone strikes on Russian refineries keep a floor under crude oil prices, benefiting <strong>Exxon (XOM)</strong> and <strong>Chevron (CVX)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: ISRAEL-LEBANON CEASEFIRE COLLAPSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">MIDDLE EAST / Israel-Lebanon / Diplomacy &mdash; June 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel-Lebanon Ceasefire in Chaos: Hezbollah Accepts, Israel Denies Agreement While Strikes Continue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A proposed ceasefire between Israel and Hezbollah descended into confusion within hours. <strong>Hezbollah accepted a U.S.-brokered proposal</strong> for a mutual cessation of attacks, and Trump announced &ldquo;all shooting will stop.&rdquo; However, Israeli Defense Minister <strong>Israel Katz declared &ldquo;there is no ceasefire,&rdquo;</strong> and Israeli airstrikes continued overnight across southern Lebanon, killing at least <strong>8 more people</strong> &mdash; including a dentist, his daughter, and son killed by a drone strike on their car.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Since March 2, Israeli strikes have killed more than <strong>3,400 people</strong> in Lebanon and wounded over <strong>10,000</strong>. Over <strong>1 million people</strong> have been displaced. Meanwhile, <strong>Iran suspended ceasefire negotiations</strong> with the U.S., citing continued Israeli escalation, and threatened to move toward <strong>fully blocking the Strait of Hormuz</strong>. Inside Israel, tens of thousands of ultra-Orthodox Jews blocked roads and set cars on fire to protest mandatory military enlistment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The collapse of ceasefire diplomacy is the single largest risk to energy markets. Iran&rsquo;s threat to fully block Hormuz sent WTI surging 5.5% in the prior session before retreating to ~$92. If Hormuz fully closes, Brent could spike past $130. <strong>Energy majors</strong> are direct beneficiaries: <strong>Saudi Aramco (2222.SR)</strong>, <strong>Shell (SHEL)</strong>, <strong>TotalEnergies (TTE)</strong>, and <strong>BP (BP)</strong>. Defense names like <strong>Elbit Systems (ESLT)</strong> and <strong>Rafael/IAI</strong> (Israeli defense, unlisted) gain from prolonged conflict. The Israeli shekel faces pressure. Safe-haven flows benefit <strong>gold</strong> (near highs), <strong>U.S. Treasuries</strong>, and the <strong>Swiss franc</strong>. Airlines with Middle East exposure &mdash; <strong>Turkish Airlines (THYAO.IS)</strong>, <strong>Emirates</strong> &mdash; face disruption risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: HORMUZ SHIPPING PARALYSIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">GLOBAL ENERGY / Strait of Hormuz / Trade &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Remains a &ldquo;Ghost Route&rdquo; Three Months After Blockade &mdash; Largest Energy Disruption Since 1973</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than three months after Iran&rsquo;s IRGC effectively shut down commercial shipping through the <strong>Strait of Hormuz</strong>, the world&rsquo;s most critical energy chokepoint remains a ghost route. Despite repeated assurances from Washington that reopening is imminent, <strong>major shipping companies refuse to return</strong>. Traffic remains at a fraction of normal levels. The IRGC has boarded merchant ships, laid sea mines, and issued passage-denial warnings since late February.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The disruption has been classified as the <strong>largest in global oil market history</strong>. Brent spiked to $126/bbl in March before settling around $95. The crisis has triggered a global inflation pulse: <strong>eurozone inflation hit 3%</strong>, commodity-importing nations face widening current-account deficits, and food and fertilizer supply chains reliant on Gulf petrochemicals are strained. The main beneficiaries: the <strong>U.S.</strong> (gained ~$50 billion in increased energy export revenue) and <strong>Russia</strong> (gained ~$15 billion).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the defining macro risk of 2026. The oil price floor at $90+ is reshaping global inflation expectations and central bank policy worldwide. <strong>U.S. shale producers</strong> are the biggest winners: <strong>Pioneer Natural Resources (PXD)</strong>, <strong>ConocoPhillips (COP)</strong>, <strong>Devon Energy (DVN)</strong>. <strong>LNG shippers</strong> are thriving as Gulf gas is rerouted: <strong>Cheniere Energy (LNG)</strong>, <strong>Flex LNG (FLNG)</strong>. <strong>Tanker companies</strong> benefit from longer routes avoiding Hormuz: <strong>Frontline (FRO)</strong>, <strong>Euronav (EURN)</strong>, <strong>DHT Holdings (DHT)</strong>. <strong>Fertilizer stocks</strong> face cost pressure: <strong>Nutrien (NTR)</strong> and <strong>CF Industries (CF)</strong> benefit from higher pricing. Currencies of net oil importers &mdash; <strong>Indian rupee, Turkish lira, Japanese yen</strong> &mdash; remain under pressure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: ECB RATE HIKE SIGNAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">EUROPE / Central Banks / Monetary Policy &mdash; June 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">ECB All But Confirms June Rate Hike as Iran-War Inflation Hits Europe &mdash; Markets Price 92% Probability</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          ECB Executive Board member <strong>Isabel Schnabel</strong> stated publicly that the European Central Bank <strong>&ldquo;should raise interest rates in June,&rdquo;</strong> making her the most senior official to explicitly endorse a hike at the <strong>June 11 meeting</strong>. Markets now price a <strong>92% probability</strong> of a 25bp hike to 2.25%. Bloomberg surveys project <strong>two quarter-point hikes in 2026</strong> (June and September) as the Iran war drives eurozone inflation to 3%.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This marks a dramatic policy reversal for the ECB, which was cutting rates as recently as late 2025. The energy shock from the Hormuz crisis has pushed European inflation well above target. However, the eurozone economy remains near stagnation &mdash; <strong>Italy grew just 0.3% in Q1</strong>, and Germany is flirting with recession &mdash; raising the specter of <strong>stagflation</strong>. The ECB faces an impossible tradeoff: hike into weakness to fight inflation, or hold and risk losing credibility.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Rate hikes in a stagnating economy will pressure <strong>European equities</strong>, particularly rate-sensitive sectors. <strong>Euro STOXX Banks (SX7E)</strong> could benefit from wider net interest margins &mdash; watch <strong>BNP Paribas (BNP.PA)</strong>, <strong>Deutsche Bank (DBK.DE)</strong>, <strong>ING Group (INGA.AS)</strong>. European real estate (<strong>Vonovia (VNA.DE)</strong>, <strong>Unibail-Rodamco (URW.AS)</strong>) faces headwinds from higher borrowing costs. The <strong>euro</strong> should strengthen modestly against the dollar on rate differential narrowing. <strong>European government bonds</strong> will sell off &mdash; German Bund yields rising. Growth stocks in Europe get hit hardest: <strong>ASML (ASML.AS)</strong> and <strong>SAP (SAP.DE)</strong> may see multiple compression. Emerging markets that borrow in euros face tighter conditions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL CENTRAL BANK HAWKISH TURN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">EMERGING MARKETS / Central Banks / South Korea &amp; South Africa &mdash; May 28&ndash;June 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Hawkish Pivot: South Africa Hikes for First Time in 3 Years, Bank of Korea Signals Multi-Hike Cycle</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>South African Reserve Bank (SARB)</strong> raised its repo rate by <strong>25bp to 7.0%</strong> &mdash; its first hike in three years &mdash; citing the Middle East oil shock driving inflation to 4% (up from 3.1% in March). Governor <strong>Lesetja Kganyago</strong> warned of &ldquo;overlapping shocks&rdquo; and signaled <strong>2&ndash;3 more hikes ahead</strong>, depending on the Iran war&rsquo;s duration and a potential super El Ni&ntilde;o later this year.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Meanwhile, the <strong>Bank of Korea</strong> held at 2.50% but revealed a strikingly hawkish internal split: <strong>2 board members voted for an immediate hike</strong>, and the dot plot showed <strong>19 of 21 projections pointing to tightening</strong>, with the median target at 3.00% within six months. The BOK raised its 2026 inflation forecast to 2.7% and GDP forecast to 2.6%. Tokyo&rsquo;s core CPI decelerated to 1.3% YoY in May, offering some relief in Japan, but the global pattern is clear: <strong>the Iran-war energy shock is forcing a synchronized hawkish pivot</strong> across emerging and developed market central banks.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The synchronized global tightening cycle is the biggest macro theme for the remainder of 2026. <strong>South African equities (JSE)</strong> face pressure &mdash; <strong>Naspers (NPN.JO)</strong> and <strong>FirstRand (FSR.JO)</strong> are vulnerable. The <strong>South African rand</strong> may stabilize short-term on carry appeal but faces medium-term growth headwinds. <strong>Korean tech exporters</strong> like <strong>Samsung Electronics (005930.KS)</strong> and <strong>SK Hynix (000660.KS)</strong> face won-strength headwinds if hikes materialize, though the chip cycle remains strong. <strong>iShares MSCI Emerging Markets ETF (EEM)</strong> faces headwinds from tighter EM monetary conditions. <strong>Gold (GLD)</strong> benefits as a stagflation hedge. <strong>Global bond funds</strong> face duration risk as yields rise across both DM and EM. The strongest relative play: <strong>commodity exporters with pricing power</strong> &mdash; Brazilian real assets, Australian mining stocks (<strong>BHP (BHP)</strong>, <strong>Rio Tinto (RIO)</strong>).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; The Big Picture</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran war&rsquo;s energy shock is now the central organizing force of the global economy.</strong> Three months of Hormuz paralysis has pushed oil above $90, triggered a synchronized global rate-hiking cycle (ECB, SARB, BOK, with more to follow), and is forcing every central bank to choose between fighting inflation and supporting growth. This is a textbook stagflation setup.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The two active wars are intensifying, not winding down.</strong> Russia&rsquo;s record Zircon deployment against Ukraine and the collapse of the Israel-Lebanon ceasefire both signal escalation. Iran suspending negotiations removes the most plausible path to Hormuz reopening. Markets are pricing in cautious optimism (S&amp;P at record highs driven by AI/chips), but the geopolitical risk premium in energy and defense is the real story.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Portfolio positioning:</strong> Overweight energy, defense, and commodity exporters. Underweight rate-sensitive European equities and net oil-importing EM currencies. Gold and short-duration bonds for defense. The AI chip cycle (<strong>NVDA</strong>, <strong>MRVL</strong>, <strong>AVGO</strong>) continues to defy macro gravity &mdash; but is increasingly the only bid in an otherwise cautious market.
      </p>
    </div>

    <!-- ===================== ALSO ON OUR RADAR ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Also On Our Radar</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.8; margin: 0;">
        &bull; <strong>Anthropic files confidentially for IPO</strong> at ~$965B valuation; Sen. Bernie Sanders introduces bill for 50% government equity stake in major AI companies (OpenAI, Anthropic, xAI) &mdash; headline risk for upcoming tech IPOs<br/>
        &bull; <strong>Canada calls on U.S. and Mexico</strong> to renew USMCA free trade agreement for 16 years &mdash; trade policy signal for North American supply chains<br/>
        &bull; <strong>S&amp;P 500 closes above 7,600 for first time</strong> driven by AI chip surge: Marvell (MRVL) +33%, HPE +19% on Nvidia CEO comments<br/>
        &bull; <strong>Six U.S. state elections today</strong> (CA, IA, MT, NJ, SD, NM) &mdash; watch for policy signals on regulation, energy, and tech<br/>
        &bull; <strong>Tokyo core CPI decelerates to 1.3% YoY</strong> &mdash; easing pressure on Bank of Japan to tighten further
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Reuters &bull; Bloomberg &bull; NPR &bull; ABC News &bull; CBS News &bull; CNBC &bull; The Times of Israel &bull; Axios &bull; CNN &bull; Gulf News &bull; Yahoo Finance &bull; TheStreet &bull; Motley Fool &bull; CNBC Africa &bull; Korea Herald &bull; Investing.com &bull; News24 &bull; Meduza &bull; Havana Times &bull; World Economic Forum &bull; UNCTAD
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        Not financial advice. Do your own research before making investment decisions.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
