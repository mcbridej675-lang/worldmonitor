#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing (Non-US-Centric)
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-global-briefing.mjs
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
  <div style="background: linear-gradient(90deg, #0ea5e9, #7c3aed, #f59e0b); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #0ea5e9;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #0ea5e9; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Defense &bull; Energy &bull; Markets &bull; Finance</p>
    </div>

    <!-- ===================== EVENT 1: US-IRAN DEAL / STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Diplomacy &mdash; May 28&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. &amp; Iran Reach Tentative Agreement to Reopen the Strait of Hormuz &mdash; Oil Prices Plunge 10%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The United States and Iran have reached a <strong>tentative memorandum of understanding</strong> that would see both sides cease fire for <strong>60 days</strong> while talks over Iran&rsquo;s nuclear program continue. The agreement would <strong>reopen the Strait of Hormuz</strong> to commercial traffic &mdash; the waterway through which <strong>20% of global oil supply</strong> flows. Iran would agree to clear mines deployed in the strait, while the U.S. would lift its naval blockade on Iranian ports and issue sanctions waivers allowing Iran to sell oil freely during the negotiation window.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          VP JD Vance stated the U.S. is <strong>&ldquo;very close&rdquo;</strong> to finalizing the deal, though President Trump has not yet signed off. The International Energy Agency previously characterized the Hormuz closure as the <strong>&ldquo;largest supply disruption in the history of the global oil market.&rdquo;</strong> Oil prices have already <strong>tumbled more than 10% since May 18</strong> as markets price out worst-case supply disruption scenarios. Citigroup noted that oil markets are &ldquo;finding firmer footing&rdquo; as investors increasingly anticipate a deal.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #ef4444;">Bearish for energy:</strong> Oil majors face downward pressure as crude prices fall. <strong>Shell (SHEL)</strong>, <strong>BP (BP)</strong>, <strong>TotalEnergies (TTE)</strong>, and <strong>Saudi Aramco (2222.SR)</strong> are all exposed to declining crude prices. <strong>Brent crude</strong> has already dropped from ~$95 to ~$85/bbl in two weeks.<br/><br/>
            <strong style="color: #22c55e;">Bullish for shipping &amp; transport:</strong> <strong>Maersk (MAERSK-B.CO)</strong>, <strong>Frontline (FRO)</strong>, and <strong>ZIM Integrated (ZIM)</strong> would benefit from normalized shipping routes and falling freight costs. Airlines like <strong>Ryanair (RYAAY)</strong> and <strong>Lufthansa (LHA.DE)</strong> gain from lower jet fuel prices.<br/><br/>
            <strong style="color: #22c55e;">Bullish for European equities broadly:</strong> The energy shock has been the #1 drag on European growth &mdash; a deal lifts the entire Eurozone outlook. <strong>STOXX 600</strong> and <strong>DAX</strong> likely to rally.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIAN DRONE STRIKES NATO TERRITORY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / NATO / Security &mdash; May 28&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian Drone Crashes into Romanian Apartment Building &mdash; NATO Condemns &ldquo;Reckless Behavior,&rdquo; Romania Expels Russian Consul</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Russian drone, part of an overnight attack on Ukraine, <strong>crashed into an apartment building in Galati, eastern Romania</strong>, injuring two people. This marks a significant escalation &mdash; the first time Russian military ordnance has struck a <strong>NATO member state&rsquo;s</strong> residential infrastructure. Romania&rsquo;s Foreign Ministry labeled it a <strong>&ldquo;serious violation of international law.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          NATO Secretary-General Mark Rutte expressed <strong>&ldquo;absolute solidarity&rdquo;</strong> with Romania and affirmed NATO would &ldquo;defend every inch of Allied territory.&rdquo; Romanian President Nicu&#x219;or Dan <strong>declared a Russian consul persona non grata</strong> and ordered the closure of Russia&rsquo;s consulate in Constan&#x21B;a. Bucharest summoned the Russian ambassador and called for NATO to <strong>accelerate anti-drone defense transfers</strong>. Romania announced it would sign a contract for anti-drone systems under the EU&rsquo;s <strong>SAFE programme</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #22c55e;">Bullish for defense &amp; anti-drone stocks:</strong> This accelerates already-surging NATO defense spending. The <strong>S&amp;P Aerospace &amp; Defense Index</strong> is up 53% YoY. Direct beneficiaries include <strong>Rheinmetall (RHM.DE)</strong>, <strong>BAE Systems (BA.L)</strong>, <strong>Leonardo (LDO.MI)</strong>, and <strong>Thales (HO.PA)</strong>. Anti-drone specialists <strong>Dedrone/Axon (AXON)</strong> and radar maker <strong>Hensoldt (HAG.DE)</strong> are positioned for EU procurement contracts.<br/><br/>
            <strong style="color: #22c55e;">Bullish for defense ETFs:</strong> <strong>iShares U.S. Aerospace &amp; Defense ETF (ITA)</strong>, <strong>Global X Defense Tech ETF (SHLD)</strong>, and <strong>Themes Transatlantic Defense ETF (NATO)</strong> all benefit from the ramp-up.<br/><br/>
            <strong style="color: #ef4444;">Bearish for European risk sentiment short-term:</strong> Escalation fears may weigh on <strong>Euro STOXX 50</strong> and strengthen safe-haven flows into <strong>gold</strong>, <strong>Swiss franc</strong>, and <strong>U.S. Treasuries</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SHANGRI-LA DIALOGUE — CHINA ABSENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Defense / Geopolitics &mdash; May 29&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Conspicuously Absent from Shangri-La Dialogue as Hegseth Urges Asian Allies to Boost Military Spending</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the <strong>22nd Shangri-La Dialogue</strong> in Singapore &mdash; Asia&rsquo;s premier defense summit bringing together officials from 40+ countries &mdash; China made the unusual decision to <strong>send only a group of academics</strong> rather than Defense Minister Dong Jun or senior military officials. The absence hands the U.S. an <strong>uncontested platform</strong> to rally Indo-Pacific allies.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Defense Secretary <strong>Pete Hegseth</strong> called on Asian allies to dramatically <strong>increase military spending</strong> to counter China&rsquo;s &ldquo;historic military buildup,&rdquo; while simultaneously striking a more moderate tone, saying U.S.-China relations are <strong>&ldquo;better than they&rsquo;ve been in many years&rdquo;</strong> following the recent Trump-Xi summit in Beijing. Notably, Hegseth <strong>did not mention Taiwan</strong> in his address &mdash; a conspicuous omission that has drawn attention from regional analysts. The dialogue runs May 29&ndash;31 and is expected to shape Indo-Pacific defense posture through year-end.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #22c55e;">Bullish for Asia-Pacific defense contractors:</strong> Japan&rsquo;s <strong>Mitsubishi Heavy Industries (7011.T)</strong>, South Korea&rsquo;s <strong>Hanwha Aerospace (012450.KS)</strong>, and Australia&rsquo;s <strong>CAE (CAE.TO)</strong> benefit from ally spending increases. <strong>Lockheed Martin (LMT)</strong> and <strong>RTX Corp (RTX)</strong> gain from F-35 and missile defense export demand.<br/><br/>
            <strong style="color: #f59e0b;">Mixed for China equities:</strong> China&rsquo;s diplomatic retreat may signal a desire to de-escalate, which is <strong>bullish for Hang Seng (HSI)</strong> and <strong>CSI 300</strong> in the near-term. However, ongoing military buildup concerns keep a risk premium on <strong>Taiwan Semiconductor (TSM)</strong> and regional supply chains. TSMC&rsquo;s geographic diversification into Arizona and Japan remains a long-term hedge.<br/><br/>
            <strong style="color: #22c55e;">Bullish for Singapore:</strong> <strong>Singapore Exchange (SGX)</strong> and <strong>Straits Times Index (STI)</strong> benefit from Singapore&rsquo;s role as a neutral geopolitical hub.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EU SLASHES GROWTH FORECAST ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Economics / Energy &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">European Commission Slashes Eurozone Growth to 0.9%, Warns Energy Inflation Will Exceed 11% Through 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Commission issued its <strong>Spring 2026 Economic Forecast</strong>, cutting eurozone GDP growth from <strong>1.4% to just 0.9%</strong> and raising the inflation forecast to <strong>3.0%</strong> (up a full percentage point). The downgrade is driven by the <strong>Strait of Hormuz crisis</strong>, which has sent energy prices surging. EU energy inflation is expected to <strong>peak above 11% in Q2 2026</strong> and remain above 10% for the rest of the year.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Economy Commissioner Valdis Dombrovskis warned that under an adverse scenario where energy prices don&rsquo;t peak until late 2026, <strong>growth forecasts would be roughly halved</strong>. U.S. 30-year Treasury yields have hit <strong>two-decade highs above 5%</strong>, reflecting broader global inflation fears. The IEA projects a <strong>Q2 2026 contraction of ~1.5 million barrels/day</strong> in global oil demand &mdash; the sharpest decline since COVID-19 &mdash; with revisions concentrated in the Middle East and Asia Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #ef4444;">Bearish for European industrials &amp; consumers:</strong> <strong>Volkswagen (VOW3.DE)</strong>, <strong>BASF (BAS.DE)</strong>, and <strong>Siemens (SIE.DE)</strong> face margin compression from elevated energy costs. Consumer-facing stocks like <strong>Carrefour (CA.PA)</strong> and <strong>Unilever (ULVR.L)</strong> will feel the squeeze from weaker consumer spending.<br/><br/>
            <strong style="color: #ef4444;">Bearish for EUR/USD:</strong> Diverging growth expectations between the U.S. (tech-driven record highs, Nasdaq +8% in May) and the Eurozone will weigh on the euro. <strong>ECB rate cut expectations</strong> may be delayed due to sticky inflation, creating a policy dilemma.<br/><br/>
            <strong style="color: #22c55e;">Bullish for renewables long-term:</strong> Europe&rsquo;s energy vulnerability accelerates the green transition. <strong>Vestas (VWS.CO)</strong>, <strong>&Oslash;rsted (ORSTED.CO)</strong>, and <strong>Iberdrola (IBE.MC)</strong> benefit from increased urgency around energy independence. <strong>iShares Global Clean Energy ETF (ICLN)</strong> is a direct play.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: UBS MASS LAYOFFS ACROSS EMEA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Finance / Banking / EMEA &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UBS Cuts Hundreds More Jobs Across EMEA as Credit Suisse Integration Hits 17,500 Layoffs &mdash; More Coming in H2</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>UBS Group AG</strong> eliminated several hundred positions across its <strong>Europe, Middle East, and Africa operations</strong> on May 29, largely affecting support staff with some client-facing bankers also impacted. This is the latest wave of reductions tied to the <strong>acquisition of Credit Suisse three years ago</strong>, which initially targeted <strong>35,000 total job cuts</strong>. UBS has now completed approximately <strong>17,500 reductions</strong> &mdash; roughly half the total target.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The bank recently completed the <strong>migration of Credit Suisse client data</strong> from legacy IT systems to UBS&rsquo;s own infrastructure, rendering many project-related roles redundant. Some affected employees were offered alternative positions within the firm. <strong>More job reductions are expected through the second half of 2026</strong>. UBS shares are currently trading at <strong>$40.73</strong>, down from their all-time high of $48.00 in January 2026. The bank&rsquo;s market cap stands at <strong>$148.6 billion</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #f59e0b;">Mixed for UBS (UBS):</strong> Layoffs are <strong>cost-positive</strong> and should improve margins, but the stock&rsquo;s 15% decline from its January high reflects investor concern about integration execution risk and European economic headwinds. Analyst targets range from $38&ndash;$60, signaling deep uncertainty.<br/><br/>
            <strong style="color: #ef4444;">Bearish signal for European banking sector:</strong> Continued restructuring across Europe&rsquo;s largest bank weighs on the sector broadly. <strong>Deutsche Bank (DB)</strong>, <strong>BNP Paribas (BNP.PA)</strong>, and <strong>Barclays (BARC.L)</strong> face similar cost pressures. The <strong>STOXX 600 Banks Index</strong> is under watch.<br/><br/>
            <strong style="color: #22c55e;">Bullish for Swiss wealth management competitors:</strong> Client attrition from UBS&rsquo;s ongoing disruption benefits rivals like <strong>Julius Baer (BAER.SW)</strong> and <strong>Lombard Odier</strong> (private). <strong>Morgan Stanley (MS)</strong> and <strong>Goldman Sachs (GS)</strong> may also capture outflows.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #0ea5e9; padding: 20px; margin-bottom: 24px;">
      <p style="color: #0ea5e9; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy is the story that connects everything.</strong> The tentative U.S.-Iran deal to reopen the Strait of Hormuz is the single most consequential market event of the week. If finalized, it unwinds the energy shock that has dragged European growth to near-zero, driven EU inflation above 3%, and pushed U.S. bond yields to two-decade highs. Energy stocks face downside; shipping, airlines, and European equities broadly stand to rally.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">But security risks are intensifying in parallel.</strong> A Russian drone striking NATO territory is an escalation that will accelerate defense spending commitments &mdash; already up 53% YoY in the aerospace &amp; defense index. China&rsquo;s absence from the Shangri-La Dialogue, combined with Hegseth&rsquo;s push for Asian military spending, signals a bifurcating world where defense budgets will remain structurally elevated across both Atlantic and Pacific theaters.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">The macro picture:</strong> U.S. equities at record highs (Nasdaq +8% in May) vs. Eurozone growth at 0.9% creates a stark transatlantic divergence. The <strong>FTSE 100</strong> sits at 10,540, Chinese equities retreated (CSI 300 &minus;0.3%, Hang Seng &minus;1.4%), and U.S. 30-year yields above 5% signal bond markets see sustained inflation. Position accordingly: overweight defense, underweight European industrials, and watch energy for the Iran deal catalyst.
      </p>
    </div>

    <!-- ===================== QUICK REFERENCE: STOCKS TO WATCH ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #0ea5e9; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; font-weight: 700;">Quick Reference &mdash; Stocks &amp; Sectors to Watch</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 4px; color: #888; font-weight: 700;">SECTOR</td>
          <td style="padding: 8px 4px; color: #888; font-weight: 700;">DIRECTION</td>
          <td style="padding: 8px 4px; color: #888; font-weight: 700;">KEY TICKERS</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">Oil &amp; Gas</td>
          <td style="padding: 8px 4px; color: #ef4444;">&#9660; Bearish</td>
          <td style="padding: 8px 4px; color: #ccc;">SHEL, BP, TTE</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">Defense &amp; Aerospace</td>
          <td style="padding: 8px 4px; color: #22c55e;">&#9650; Bullish</td>
          <td style="padding: 8px 4px; color: #ccc;">RHM, BA.L, LMT, RTX</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">Shipping &amp; Airlines</td>
          <td style="padding: 8px 4px; color: #22c55e;">&#9650; Bullish</td>
          <td style="padding: 8px 4px; color: #ccc;">MAERSK-B, FRO, RYAAY</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">European Industrials</td>
          <td style="padding: 8px 4px; color: #ef4444;">&#9660; Bearish</td>
          <td style="padding: 8px 4px; color: #ccc;">VOW3, BAS, SIE</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">European Banks</td>
          <td style="padding: 8px 4px; color: #ef4444;">&#9660; Bearish</td>
          <td style="padding: 8px 4px; color: #ccc;">UBS, DB, BNP</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="padding: 8px 4px; color: #ccc;">Renewables</td>
          <td style="padding: 8px 4px; color: #22c55e;">&#9650; Bullish</td>
          <td style="padding: 8px 4px; color: #ccc;">VWS, ORSTED, IBE, ICLN</td>
        </tr>
        <tr>
          <td style="padding: 8px 4px; color: #ccc;">Asia Defense</td>
          <td style="padding: 8px 4px; color: #22c55e;">&#9650; Bullish</td>
          <td style="padding: 8px 4px; color: #ccc;">7011.T, 012450.KS, TSM</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #0ea5e9; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNN &bull; NPR &bull; Bloomberg &bull; CNBC &bull; Axios &bull; Reuters &bull; Euronews &bull; European Commission &bull; Nikkei Asia &bull; South China Morning Post &bull; Democracy Now &bull; Investing.com &bull; Yahoo Finance &bull; NATO &bull; IEA &bull; Patronus Partners &bull; Crestwood Advisors
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #0ea5e9; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
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
