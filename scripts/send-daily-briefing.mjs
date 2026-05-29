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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Security &bull; Health &bull; Climate &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: US-IRAN CEASEFIRE TALKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Diplomacy / Energy &mdash; May 28&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. and Iran Reach Tentative 60-Day Ceasefire Extension &mdash; Oil Drops 20% From 2026 Highs</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Negotiators have reached a tentative deal to <strong>extend the U.S.-Iran ceasefire by 60 days</strong> and launch further talks on Tehran&rsquo;s nuclear program. The draft agreement includes a commitment to ending military operations on all fronts including Lebanon, Iran&rsquo;s agreement not to develop nuclear weapons and to dispose of enriched uranium stockpile, and the reopening of the <strong>Strait of Hormuz</strong> in exchange for lifting the U.S. blockade on Iranian ports.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, <strong>President Trump has not yet signed off</strong> on the terms, and tensions remain high after U.S. and Iranian forces <strong>exchanged fire on Thursday</strong> around the Strait of Hormuz. Trump insisted his administration is &ldquo;not satisfied&rdquo; with the deal&rsquo;s terms. The outcome of these talks will reshape global energy flows &mdash; <strong>Brent crude has plunged nearly 19% in May</strong>, its worst month since the COVID-19 pandemic, settling at <strong>$93.71/barrel</strong> on optimism about reopened shipping lanes.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil &amp; Energy:</strong> Brent crude down ~20% from 2026 highs. If the ceasefire holds, oil could fall further toward $85&ndash;$88, pressuring energy majors. <strong>ExxonMobil (XOM)</strong> and <strong>Shell (SHEL)</strong> face margin compression. <strong>Chevron (CVX)</strong> exposed to Gulf production disruptions.<br/><br/>
            <strong>Winners:</strong> Airlines (<strong>IAG, Lufthansa, Ryanair</strong>) benefit from lower fuel costs. Shipping &amp; logistics (<strong>A.P. M&oslash;ller-M&aelig;rsk, ZIM</strong>) gain from reopened Hormuz transit. Consumer discretionary globally benefits from easing inflation pressure.<br/><br/>
            <strong>Risk:</strong> UBS warns &ldquo;little evidence&rdquo; of short-term improvement in vessel traffic &mdash; crude loadings in the Gulf remain &ldquo;extremely low.&rdquo; A deal collapse would send oil spiking back above $110.<br/><br/>
            <strong>Watch:</strong> Trump&rsquo;s final decision on the 60-day MOU &bull; Strait of Hormuz vessel traffic data &bull; OPEC+ response to falling prices.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIAN DRONE STRIKES ROMANIA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / NATO / Security &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian Drone Strikes Apartment Building in NATO Member Romania &mdash; European Defense Spending Accelerates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Russian <strong>Geran-2 (Shahed-136) drone</strong> crashed into an apartment building in the Romanian border town of <strong>Gala&#539;i</strong>, injuring two civilians. The drone penetrated Romanian airspace for approximately <strong>four minutes</strong> before impact. It was one of <strong>232 drones and one ballistic missile</strong> launched by Russia against Ukraine overnight. This marks the <strong>28th time Russian drones have breached Romanian airspace</strong> since Moscow began attacking Ukrainian ports along the Danube &mdash; but the first to strike a residential building.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          NATO Secretary-General <strong>Mark Rutte</strong> declared &ldquo;Russia&rsquo;s reckless behavior is a danger to us all.&rdquo; Romania responded by <strong>expelling the Russian consul in Constan&#539;a</strong>, declaring him persona non grata, and closing the Russian consulate. The incident dramatically escalates the political case for Europe&rsquo;s <strong>&euro;800 billion ReArm Europe Plan</strong>, with the European Commission raising up to &euro;150 billion through the new SAFE (Security Action for Europe) instrument.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>European Defense Rally:</strong> The incident accelerates the multi-year European rearmament cycle. <strong>Rheinmetall (RHM.DE)</strong> is the top beneficiary &mdash; supplying IFVs, ammunition, and drones to Romania, Germany, and 8 other NATO members. <strong>BAE Systems (BA.L)</strong> and <strong>Leonardo (LDO.MI)</strong> also positioned for increased procurement.<br/><br/>
            <strong>Air Defense:</strong> <strong>RTX Corp (RTX)</strong> secured a $168M Patriot contract from Romania and dominates European air defense modernization. <strong>SAAB (SAAB-B.ST)</strong> benefits through its Gripen and radar systems. France&rsquo;s <strong>Thales (HO.PA)</strong> gains from a 400% increase in French drone/ammunition stockpile commitments.<br/><br/>
            <strong>Broader Impact:</strong> European sovereign bond yields may edge higher on defense spending expectations. The euro could weaken on escalation risk. Safe-haven flows into gold and Swiss franc if NATO-Russia tensions deepen.<br/><br/>
            <strong>Watch:</strong> NATO Article 5 consultations &bull; Further Romanian or EU diplomatic actions &bull; Whether other NATO states upgrade air defenses along eastern borders.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA PHEIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa / PHEIC &mdash; May 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Declares Central Africa Ebola Outbreak a Global Health Emergency &mdash; 1,200+ Cases, No Vaccine Available</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The WHO declared the Ebola epidemic in the <strong>Democratic Republic of the Congo and Uganda</strong> a <strong>Public Health Emergency of International Concern (PHEIC)</strong> on May 17. WHO Director-General <strong>Dr. Tedros Adhanom Ghebreyesus</strong> arrived in Kinshasa on May 29 to witness response efforts firsthand. As of May 27, <strong>1,205 suspected and confirmed cases</strong> and at least <strong>264 deaths</strong> have been reported.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis is uniquely dangerous because this outbreak is caused by the <strong>Bundibugyo ebolavirus</strong> &mdash; a strain for which <strong>no approved vaccines or therapeutics exist</strong>. Existing Ebola treatments were developed against the Zaire strain. The outbreak has spread from DRC&rsquo;s Ituri Province to North Kivu and Uganda&rsquo;s capital Kampala, with response efforts complicated by armed conflict and community distrust in the region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Biotech Movers:</strong> <strong>Soligenix (SNGX)</strong> surged <strong>+110%</strong> after announcing its ThermoVax platform can rapidly develop a Bundibugyo-specific vaccine. <strong>GeoVax Labs (GOVX)</strong> jumped <strong>+47%</strong> on its pre-clinical Ebola vaccine pipeline. <strong>Aethlon Medical (AEMD)</strong> rose <strong>+21%</strong> on its Hemopurifier virus-removal device. These are speculative, low-cap plays with high volatility risk.<br/><br/>
            <strong>Big Pharma Exposure:</strong> <strong>Johnson &amp; Johnson (JNJ)</strong> and <strong>Regeneron (REGN)</strong> hold existing Ebola treatment/vaccine portfolios developed for the Zaire strain, but face cross-strain efficacy questions. <strong>Bavarian Nordic (BAVA.CO)</strong> also active in viral vaccine development.<br/><br/>
            <strong>Broader Impact:</strong> African airlines and tourism operators face travel advisory headwinds. Mining companies with DRC exposure (<strong>Glencore, CMOC Group</strong>) may face operational disruptions. DRC is a critical global supplier of <strong>cobalt</strong> (70% of world supply) &mdash; any supply chain disruption would impact EV battery makers and tech hardware.<br/><br/>
            <strong>Watch:</strong> Outbreak trajectory in Kampala and Kinshasa &bull; WHO emergency funding and vaccine development timelines &bull; Travel restrictions from affected nations &bull; DRC cobalt mine operations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: WMO CLIMATE WARNING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Climate / Global / Economy &mdash; May 28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WMO: 75% Chance Global Temperatures Exceed 1.5&deg;C Through 2030 &mdash; Strong El Ni&ntilde;o Predicted Through 2028</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>World Meteorological Organisation</strong> and UK Met Office project a <strong>75% chance</strong> that the average global temperature between 2026 and 2030 will exceed the <strong>1.5&deg;C Paris Agreement threshold</strong>. There is a <strong>91% chance</strong> that at least one of the next five years will surpass the 1.5&deg;C mark, and an <strong>86% chance</strong> one of those years will set a new record for Earth&rsquo;s hottest year, surpassing 2024. <strong>2027 is expected to break the 2024 record.</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>strong El Ni&ntilde;o</strong> is predicted to form and could stretch through 2028, amplifying extreme weather globally. London has already hit <strong>95&deg;F (35&deg;C)</strong> for two consecutive days this week &mdash; unprecedented for May. The WMO warns that exceeding 1.5&deg;C means <strong>more frequent deadly heat events, accelerated coral die-off, glacier collapse, and agricultural disruption</strong> that will strain global infrastructure and food systems beyond historical planning assumptions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Renewable Energy:</strong> Accelerates the policy case for clean energy investment. <strong>Enphase Energy (ENPH)</strong>, <strong>First Solar (FSLR)</strong>, and <strong>Vestas Wind Systems (VWS.CO)</strong> positioned to benefit from government spending on renewables. EU and Asian climate policy likely to tighten.<br/><br/>
            <strong>Insurance &amp; Reinsurance:</strong> Extreme weather increases catastrophe losses. <strong>Munich Re (MUV2.DE)</strong> and <strong>Swiss Re (SREN.SW)</strong> face rising claims but also pricing power. Property &amp; casualty insurers in hurricane/wildfire zones under pressure.<br/><br/>
            <strong>Agriculture &amp; Food:</strong> El Ni&ntilde;o historically drives droughts in Southeast Asia and Australia while flooding South America. <strong>Wheat, corn, and soybean futures</strong> face volatility. Fertilizer companies (<strong>Nutrien (NTR)</strong>, <strong>Yara International (YAR.OL)</strong>) benefit from demand spikes. Food inflation could re-accelerate globally.<br/><br/>
            <strong>Watch:</strong> El Ni&ntilde;o formation timeline &bull; Government climate policy responses &bull; 2026 hurricane season forecasts &bull; Agricultural commodity futures through summer.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: SHANGRI-LA DIALOGUE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Defense / Geopolitics &mdash; May 29&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Shangri-La Dialogue Opens in Singapore &mdash; 44 Nations Debate Indo-Pacific Security Amid Doubts Over U.S. Commitment</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>23rd Shangri-La Dialogue</strong> opened today in Singapore with <strong>44 nations, 54 ministerial-level delegates, and 550+ senior defense officials</strong> in attendance. Vietnam&rsquo;s President <strong>T&ocirc; L&acirc;m</strong> delivered the keynote address, while U.S. Secretary of Defense <strong>Pete Hegseth</strong> will address America&rsquo;s Indo-Pacific strategy on Saturday. Timor-Leste President <strong>Dr. Jos&eacute; Ramos-Horta</strong> will deliver a special address on maritime security.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The summit opens amid <strong>growing regional skepticism about U.S. Indo-Pacific commitment</strong> &mdash; underscored by the 31st MEU&rsquo;s redeployment to the Middle East and Washington&rsquo;s focus on the Iran conflict. Six plenary sessions will address the strategic landscape in Asia, cross-regional security threats, and maritime security. The <strong>Indian Ocean&rsquo;s growing importance</strong> as a strategic theatre is a key theme, with India, Japan, and Australia deepening trilateral cooperation. The dialogue comes as China expands naval operations beyond the first island chain and North Korea continues missile development.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Asian Defense Spending:</strong> Japan, South Korea, Australia, and India are all accelerating defense budgets. <strong>Mitsubishi Heavy Industries (7011.T)</strong> and <strong>Kawasaki Heavy Industries (7012.T)</strong> benefit from Japan&rsquo;s record defense spending. <strong>Hanwha Aerospace (012450.KS)</strong> is South Korea&rsquo;s top defense exporter. <strong>Hindustan Aeronautics (HAL.NS)</strong> gains from India&rsquo;s indigenous defense push.<br/><br/>
            <strong>Semiconductor Supply Chain:</strong> Any escalation in Taiwan Strait tensions would threaten the global chip supply. <strong>TSMC (2330.TW)</strong> produces ~90% of the world&rsquo;s most advanced semiconductors. <strong>Samsung (005930.KS)</strong> and <strong>SK Hynix (000660.KS)</strong> are critical memory chip suppliers. Geopolitical risk premium on these stocks rises with every Shangri-La headline.<br/><br/>
            <strong>Broader Impact:</strong> Asian equity indices (Nikkei, KOSPI, Hang Seng) sensitive to any hawkish statements on Taiwan. Shipping and trade routes through South China Sea and Malacca Strait carry $5.3 trillion in annual trade &mdash; any disruption signal moves global logistics stocks.<br/><br/>
            <strong>Watch:</strong> Hegseth&rsquo;s Saturday speech on U.S. Indo-Pacific strategy &bull; Any bilateral meetings between U.S. and Chinese delegations &bull; AUKUS submarine program updates &bull; Japan-Philippines defense cooperation announcements.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The world is repricing two simultaneous shifts: de-escalation in the Middle East and escalation everywhere else.</strong> Oil&rsquo;s 20% drop from 2026 highs signals markets are pricing in an Iran ceasefire &mdash; but the deal isn&rsquo;t signed, and any collapse would produce a violent reversal in energy, shipping, and risk assets. Position accordingly with asymmetric upside hedges in energy.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">European and Asian defense is the most durable multi-year trade.</strong> The Romania drone strike, Shangri-La Dialogue, and &euro;800B ReArm Europe plan all point to structurally higher defense spending for a decade. Rheinmetall, BAE Systems, Hanwha Aerospace, and Mitsubishi Heavy are the primary vehicles.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Tail risks are stacking:</strong> A Bundibugyo Ebola strain with no vaccine in DRC&rsquo;s cobalt heartland. WMO confirming 1.5&deg;C breach with El Ni&ntilde;o through 2028. These are slow-burn risks that won&rsquo;t move markets today but will reshape insurance, agriculture, commodity supply chains, and public health spending over the next 12&ndash;24 months.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; Bloomberg &bull; CNBC &bull; Reuters &bull; Washington Post &bull; NBC News &bull; Euronews &bull; NPR &bull; PBS News &bull; ABC News &bull; CBS News &bull; World Health Organization &bull; World Meteorological Organisation &bull; IISS Shangri-La Dialogue &bull; UBS &bull; Benzinga &bull; CaixaBank Research &bull; Motley Fool &bull; European Business Magazine
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
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
