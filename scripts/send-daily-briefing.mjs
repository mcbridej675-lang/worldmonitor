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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Health &bull; Climate &bull; Industry &bull; Finance &bull; Market Impact</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px; font-weight: 700;">Market Snapshot &mdash; May 28, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; color: #ccc;">
        <tr>
          <td style="padding: 4px 0;"><strong style="color: #fff;">Brent Crude</strong></td>
          <td style="padding: 4px 0; text-align: right; color: #ef4444;">$93.71/bbl (-0.6%)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0;"><strong style="color: #fff;">WTI Crude</strong></td>
          <td style="padding: 4px 0; text-align: right; color: #22c55e;">$88.90/bbl (+0.2%)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0;"><strong style="color: #fff;">TTF Natural Gas</strong></td>
          <td style="padding: 4px 0; text-align: right; color: #ef4444;">&lt;&euro;47/MWh (falling)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0;"><strong style="color: #fff;">Eurozone GDP Forecast</strong></td>
          <td style="padding: 4px 0; text-align: right; color: #ef4444;">0.9% (cut from prior)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0;"><strong style="color: #fff;">Eurozone Inflation Forecast</strong></td>
          <td style="padding: 4px 0; text-align: right; color: #ef4444;">3.0% (up from 1.9%)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1: US-IRAN STRIKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; May 28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US and Iran Exchange Tit-for-Tat Strikes as Fragile Truce Teeters; Peace Deal Awaits Trump Sign-Off</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The United States and Iran attacked each other&rsquo;s military facilities overnight in tit-for-tat strikes that tested the countries&rsquo; fragile truce. US forces struck an Iranian launch site in <strong>Bandar Abbas</strong> on the Strait of Hormuz after shooting down <strong>five Iranian one-way attack drones</strong>. Tehran retaliated by targeting a US base in Kuwait responsible for the earlier strikes. Despite the military escalation, American and Iranian negotiators <strong>agreed to truce terms three days ago</strong>, but both sides have delayed finalizing the deal &mdash; with Trump reviewing but not yet signing off.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key sticking points remain: Trump has added a demand that the peace deal require more countries to <strong>extend diplomatic recognition to Israel</strong>. Iran accuses the US of &ldquo;obstructionism&rdquo; over the release of frozen Iranian funds. The agreement calls on Iran to restore <strong>Strait of Hormuz transit to pre-war levels within 30 days</strong>. Oil prices remain volatile &mdash; Brent crude climbed toward $97 earlier this week before settling at $93.71 as markets oscillate between war and peace expectations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil &amp; Energy:</strong> Brent crude has swung between $93&ndash;$97 this week. A deal would send oil sharply lower; collapse of talks could push past $100. Watch <strong>Shell (SHEL)</strong>, <strong>TotalEnergies (TTE)</strong>, and <strong>BP (BP)</strong> &mdash; all heavily exposed to Hormuz transit risk. <strong>Exxon (XOM)</strong> and <strong>Chevron (CVX)</strong> benefit from elevated prices but face downside on a peace deal.<br/><br/>
            <strong>Defense:</strong> <strong>Lockheed Martin (LMT)</strong>, <strong>RTX Corp (RTX)</strong>, and <strong>Northrop Grumman (NOC)</strong> remain elevated on continued conflict premium. A ceasefire could trigger a 3&ndash;5% pullback.<br/><br/>
            <strong>Shipping:</strong> <strong>Frontline (FRO)</strong> and <strong>Hafnia (HAFNI)</strong> tanker stocks surge on Hormuz disruption &mdash; normalization of transit would pressure rates downward.<br/><br/>
            <strong>Broader market:</strong> Equity markets remain mixed. Sovereign bond yields flat on both sides of the Atlantic as investors wait for clarity.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EUROPE HEATWAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Infrastructure &mdash; May 26&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Historic May Heatwave Shatters Century-Old Records Across Europe; At Least 12 Dead in UK and France</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Western Europe is enduring an <strong>&ldquo;exceptionally early&rdquo; and &ldquo;mind-bogglingly crazy&rdquo;</strong> heatwave that has shattered records dating back over a century. London&rsquo;s Kew Gardens recorded <strong>35.1&deg;C (95.2&deg;F)</strong>, smashing the previous May record of 32.8&deg;C set in <strong>1922</strong>. France reached <strong>36&deg;C (97&deg;F)</strong> in the southwest. Temperatures are running <strong>10&ndash;15&deg;C above normal</strong> for late May across the affected region.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At least <strong>7 deaths in France</strong> (including drownings and heat-related deaths at sporting events) and <strong>5 deaths in the UK</strong> are directly linked to the heatwave. Infrastructure is under extreme stress: power lines, rail networks, and roads are buckling. The <strong>European Commission</strong> simultaneously slashed Eurozone GDP growth forecasts to <strong>0.9%</strong> and raised inflation forecasts to <strong>3.0%</strong>, citing a &ldquo;major energy shock&rdquo; &mdash; the heatwave compounds this with surging electricity demand for cooling.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Utilities &amp; Energy:</strong> European electricity demand spikes during heatwaves. <strong>Engie (ENGI.PA)</strong>, <strong>EDF (EDF.PA)</strong>, and <strong>National Grid (NG.L)</strong> face dual pressure: higher revenue from demand, but thermoelectric plants may curtail output as river cooling water warms. Solar generation benefits &mdash; <strong>Enphase (ENPH)</strong> and <strong>SolarEdge (SEDG)</strong> gain on clean energy momentum.<br/><br/>
            <strong>Insurance:</strong> <strong>Swiss Re (SREN.SW)</strong> and <strong>Munich Re (MUV2.DE)</strong> face rising climate-related claims. European crop losses threaten <strong>agricultural commodities</strong> &mdash; wheat and corn futures may rise.<br/><br/>
            <strong>HVAC &amp; Cooling:</strong> <strong>Daikin (6367.T)</strong>, the world&rsquo;s largest AC manufacturer, and <strong>Carrier Global (CARR)</strong> stand to benefit from accelerated cooling demand across Europe.<br/><br/>
            <strong>ECB Policy:</strong> Multiple ECB officials signaled a <strong>rate hike at the June meeting is likely</strong>, citing inflation. European equities broadly under pressure. Euro interbank rates edging higher.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Africa / Global Health / Supply Chains &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Declares Ebola Outbreak in DRC &amp; Uganda a Global Health Emergency; Rare Bundibugyo Strain Has No Vaccine</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The World Health Organization declared the Ebola outbreak in the <strong>Democratic Republic of the Congo and Uganda</strong> a <strong>Public Health Emergency of International Concern (PHEIC)</strong> on May 17 &mdash; the first time a Director-General declared a PHEIC before convening an Emergency Committee. As of May 27: <strong>121 confirmed cases and 17 deaths</strong> in the DRC, plus <strong>1,077 suspected cases with 238 deaths</strong> across Ituri, North Kivu, and South Kivu provinces. Uganda reports <strong>7 confirmed cases including 1 death</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The outbreak involves the <strong>Bundibugyo species of Ebola</strong> &mdash; a rare strain for which <strong>no vaccine or specific treatment exists</strong>. The epicenter is <strong>Mongbwalu</strong>, a gold-mining town of 130,000 in eastern Congo. The WHO rates the risk of international spread as <strong>&ldquo;very high&rdquo;</strong>. The outbreak threatens <strong>10 countries</strong> in the region. Chinese miners are reportedly trapped in the Ebola zone. The DRC accounts for <strong>over 80% of global cobalt production</strong> and <strong>14% of global copper supply</strong>, though major mining operations are located hundreds of kilometers south.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Critical Minerals &amp; EV Supply Chain:</strong> While major cobalt/copper operations are not directly threatened yet, any spread south would be catastrophic for global battery supply chains. <strong>Glencore (GLEN.L)</strong> is the largest DRC cobalt producer. <strong>CMOC Group (3993.HK)</strong> and <strong>Ivanhoe Mines (IVN.TO)</strong> have significant DRC exposure. Cobalt prices are already elevated on supply fears.<br/><br/>
            <strong>Pharma &amp; Biotech:</strong> <strong>Emergent BioSolutions (EBS)</strong> and vaccine-adjacent companies may see speculative interest, though no Bundibugyo-specific vaccine exists. <strong>Merck (MRK)</strong> and <strong>Johnson &amp; Johnson (JNJ)</strong> have Ebola vaccine platforms that could be adapted.<br/><br/>
            <strong>Tech Supply Chain:</strong> <strong>Apple (AAPL)</strong>, <strong>Nvidia (NVDA)</strong>, <strong>Tesla (TSLA)</strong> &mdash; all depend on DRC cobalt for batteries. A supply disruption would compound existing tightness in the EV battery market.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA COAL MINE EXPLOSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">China / Industry / Energy &mdash; May 22&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&rsquo;s Deadliest Coal Mine Disaster in Over a Decade Kills 82; Safety Crackdown Expected Across Shanxi Province</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A gas explosion at the <strong>Liushenyu Coal Mine</strong> in Qinyuan County, Shanxi Province, killed <strong>82 miners</strong> on May 22 &mdash; making it China&rsquo;s deadliest mining disaster in over a decade. Of the <strong>247 workers underground</strong> at the time of the blast, 201 were evacuated, with 9 still missing as of May 25. The mine had been flagged in 2024 as one of <strong>1,128 facilities cited for &ldquo;severe safety hazards&rdquo;</strong> by China&rsquo;s National Mine Safety Administration.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Xi Jinping called for an immediate investigation, and <strong>executives of Shanxi Tongzhou Group</strong>, the mine&rsquo;s operator, have been detained. Shanxi Province produces approximately <strong>one-third of China&rsquo;s coal</strong>. Analysts expect a widespread <strong>safety crackdown</strong> across the province, potentially curtailing coal production for weeks. This comes as China still relies on coal for <strong>nearly 60% of its electricity generation</strong> and as the European energy crisis drives up global demand for alternative energy sources.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Chinese Coal Sector:</strong> A safety crackdown in Shanxi could tighten domestic coal supply and push prices higher. <strong>China Shenhua Energy (1088.HK)</strong>, China&rsquo;s largest coal producer, may benefit from higher prices but face regulatory headwinds. <strong>Yancoal (YAL.AX)</strong> and <strong>Whitehaven Coal (WHC.AX)</strong> &mdash; Australian producers &mdash; could benefit from tighter Chinese supply.<br/><br/>
            <strong>Clean Energy Rotation:</strong> Disasters like this accelerate China&rsquo;s energy transition narrative. <strong>LONGi Green Energy (601012.SS)</strong>, <strong>BYD (1211.HK)</strong>, and <strong>CATL (300750.SZ)</strong> may see renewed interest as policymakers emphasize renewables.<br/><br/>
            <strong>Thermal Coal Futures:</strong> Zhengzhou thermal coal futures likely to rise on supply disruption fears. Newcastle coal benchmark may follow. Global LNG prices could see sympathetic support.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: HONG KONG WEALTH HUB ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Wealth Management / Asia &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Hong Kong Overtakes Switzerland as World&rsquo;s Largest Cross-Border Wealth Hub &mdash; $2.95 Trillion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Hong Kong has <strong>narrowly overtaken Switzerland</strong> to become the world&rsquo;s largest cross-border wealth management center, according to Boston Consulting Group&rsquo;s 2026 Global Wealth Report. Offshore assets booked in Hong Kong rose <strong>10.7% to $2.95 trillion</strong> in 2025, edging past Switzerland&rsquo;s <strong>$2.94 trillion</strong>. The shift was driven by an <strong>influx of mainland Chinese capital</strong> and a resurgent Hong Kong equity market fueled by a 2025 IPO boom.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The trend is expected to be <strong>lasting and structural</strong>: both Hong Kong and Singapore are projected to grow their cross-border booking centers at <strong>~9% annually through 2030</strong>, compared with <strong>~6% for Switzerland</strong>. This represents a generational shift in global wealth flows from West to East, driven by Chinese economic growth, geopolitical realignment, and Asia&rsquo;s rising ultra-high-net-worth population.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>HK Financial Services (Winners):</strong> <strong>HSBC (HSBA.L / 5.HK)</strong> &mdash; the largest wealth manager in Asia &mdash; is a primary beneficiary. <strong>AIA Group (1299.HK)</strong> benefits from increased wealth insurance demand. <strong>Hong Kong Exchanges &amp; Clearing (388.HK)</strong> gains from rising capital flows and IPO volume.<br/><br/>
            <strong>Swiss Banks (Headwinds):</strong> <strong>UBS (UBSG.SW)</strong> and <strong>Julius Baer (BAER.SW)</strong> face competitive pressure as Asian wealth migrates to local booking centers. UBS&rsquo;s Asia franchise partially offsets this, but the trend favors HK-domiciled managers.<br/><br/>
            <strong>Broader Theme:</strong> This is a structural tailwind for <strong>Asian financial infrastructure</strong>. Singapore&rsquo;s <strong>DBS Group (D05.SI)</strong> and <strong>OCBC (O39.SI)</strong> ride the same wave. The Hang Seng Index may see sustained re-rating as global capital recognizes HK&rsquo;s growing dominance.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Implications</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The dominant theme is energy volatility meeting supply chain fragility.</strong> US-Iran tit-for-tat strikes keep oil in a wide $93&ndash;$97 trading range with binary outcome risk: a signed deal sends crude toward $75; escalation sends it past $100. Europe&rsquo;s heatwave and the ECB&rsquo;s hawkish pivot (June rate hike likely, inflation forecast raised to 3.0%) create a stagflationary backdrop for European equities.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Critical mineral supply chains face a tail risk.</strong> The DRC Ebola outbreak is not yet disrupting cobalt operations, but a spread to southern provinces would be a black swan for EV batteries and tech hardware. China&rsquo;s coal safety crackdown in Shanxi could tighten the world&rsquo;s largest coal market at a time when Europe is scrambling for energy alternatives.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">The long-term structural story is the West-to-East wealth migration.</strong> Hong Kong&rsquo;s overtaking of Switzerland as the world&rsquo;s #1 cross-border wealth hub is not a one-off &mdash; it&rsquo;s a generational trend that will reshape global financial services over the next decade. Position accordingly.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NPR &bull; CNN &bull; NBC News &bull; Al Jazeera &bull; Washington Post &bull; CNBC &bull; Bloomberg &bull; WHO &bull; ECDC &bull; CaixaBank Research &bull; South China Morning Post &bull; Boston Consulting Group &bull; PBS &bull; Euronews &bull; Mining.com &bull; Reuters &bull; BBC
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. It does not constitute financial advice.<br/>
        Sources verified across multiple international outlets. No American editorial bias applied.
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
  subject: `[World Monitor] Global Daily Briefing — Top 5 Events & Market Impact — ${today}`,
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
