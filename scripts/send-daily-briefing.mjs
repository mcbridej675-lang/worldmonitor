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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Health &bull; Energy &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: UAE BARAKAH NUCLEAR PLANT DRONE ATTACK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy Security / Nuclear &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Drone Strike Hits UAE&rsquo;s Barakah Nuclear Power Plant; IAEA Issues &ldquo;Grave Concern&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A drone strike sparked a fire at an electrical generator on the perimeter of the <strong>Barakah Nuclear Energy Plant</strong> in Abu Dhabi&rsquo;s Al Dhafra region &mdash; the UAE&rsquo;s sole nuclear power facility and one of the newest in the world. Three drones entered from the western border; UAE air defenses intercepted two, but <strong>one struck the plant&rsquo;s outer perimeter</strong>, triggering a fire. No injuries were reported and radiation levels remained normal.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          UAE Deputy PM <strong>Sheikh Abdullah bin Zayed</strong> condemned it as a &ldquo;treacherous terrorist attack.&rdquo; The <strong>IAEA&rsquo;s Rafael Grossi</strong> declared that &ldquo;military activity that threatens nuclear safety is unacceptable,&rdquo; urging maximum restraint near nuclear facilities. No group has claimed responsibility, but the attack comes amid resumed Iranian strikes on Gulf states after the April ceasefire broke down. <strong>Saudi Arabia simultaneously intercepted 3 drones</strong> launched from Iraqi airspace, suggesting a coordinated campaign across the Gulf.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A nuclear facility attack &mdash; even on the perimeter &mdash; introduces a new category of geopolitical risk premium. Energy supply fears intensify as Gulf infrastructure is directly targeted. The Abu Dhabi Securities Exchange (ADX) is expected to open under pressure.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM, CVX, SHEL</strong> (ExxonMobil, Chevron, Shell) &mdash; oil majors benefit from supply disruption fears; crude pushed higher on the news. <strong>CEG, VST</strong> (Constellation Energy, Vistra) &mdash; nuclear safety concerns could slow global nuclear expansion plans, affecting uranium and nuclear utilities. <strong>LMT, RTX, NOC</strong> (Lockheed, RTX, Northrop) &mdash; Gulf states will accelerate air defense spending after Barakah; Patriot and THAAD demand surges. <strong>CCJ</strong> (Cameco) &mdash; uranium miner faces headwinds if nuclear safety fears grow. <strong>GLD/Gold</strong> &mdash; safe-haven flows spike on nuclear facility targeting.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: WHO DECLARES EBOLA PHEIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Declares Ebola Outbreak in DRC &amp; Uganda a Global Health Emergency (PHEIC)</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The WHO Director-General declared the <strong>Ebola disease outbreak caused by Bundibugyo virus</strong> in the Democratic Republic of the Congo and Uganda a <strong>Public Health Emergency of International Concern (PHEIC)</strong> &mdash; the highest alarm level in global health. As of May 16: <strong>8 lab-confirmed cases, 246 suspected cases, and 80 suspected deaths</strong> in DRC&rsquo;s Ituri Province, with <strong>2 confirmed cases (1 death) in Kampala, Uganda</strong> from travelers arriving from DRC.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Critically, <strong>there is no licensed vaccine or specific therapeutic against Bundibugyo virus</strong>, unlike the Zaire strain targeted by existing Ebola vaccines. The case fatality rate in past outbreaks ranges from <strong>30% to 50%</strong>. Cross-border transmission, unexplained death clusters, high population mobility, and the semi-urban nature of the hotspot compound the risk. The CDC has mobilized international response teams. The outbreak zone&rsquo;s insecurity and humanitarian crisis further hamper containment efforts.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PHEIC declarations historically trigger a rotation into healthcare/biotech and away from travel and hospitality. The lack of a vaccine for Bundibugyo virus creates urgent demand for R&amp;D and therapeutic development.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform adaptable to new Ebola strains; could receive emergency development contracts. <strong>MRK</strong> (Merck) &mdash; manufactures Ervebo (existing Zaire Ebola vaccine); positioned for expanded R&amp;D mandates. <strong>JNJ</strong> (Johnson &amp; Johnson) &mdash; makes Zabdeno/Mvabea Ebola vaccine regimen. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir was originally developed as an Ebola antiviral; potential therapeutic candidate. <strong>EEM, EZA</strong> (Emerging Markets, South Africa ETFs) &mdash; African equity and trade flows face headwinds from travel restrictions and supply chain disruptions. <strong>Airline stocks</strong> (RYAAY, IAG) &mdash; European carriers with African routes face potential route suspensions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: ISRAEL INTERCEPTS GAZA FLOTILLA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Maritime / Middle East &mdash; May 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israeli Navy Storms Gaza-Bound Flotilla off Cyprus; Turkey Condemns &ldquo;Act of Piracy&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli naval commandos boarded and seized vessels from the <strong>Global Sumud Flotilla</strong> off the coast of Cyprus today &mdash; a fleet of <strong>50+ ships</strong> that departed from Marmaris, Turkey to challenge Israel&rsquo;s naval blockade of Gaza and deliver humanitarian aid. By mid-afternoon, <strong>16 vessels had been intercepted</strong> in what the flotilla organizers condemned as &ldquo;illegal acts of piracy&rdquo; carried out in <strong>international waters</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The flotilla was organized by Turkish aid group <strong>IHH</strong>, which also organized the 2010 <strong>Mavi Marmara</strong> flotilla in which Israeli commandos killed 10 activists. Turkish President <strong>Erdogan</strong> condemned the interception of the &ldquo;voyagers of hope&rdquo; and called on the international community to act. The incident comes weeks after a previous flotilla attempt was thwarted, and dramatically escalates <strong>Israel-Turkey tensions</strong> at a moment when the broader region is already engulfed in the Iran conflict and ongoing Israeli operations in Gaza and Lebanon.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Israel-Turkey diplomatic breakdown risks disrupting Eastern Mediterranean energy cooperation and trade. The Turkish lira and Istanbul&rsquo;s BIST-100 index may face selling pressure if Ankara escalates.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>TUR</strong> (iShares MSCI Turkey ETF) &mdash; direct exposure to diplomatic fallout; watch for capital flight. <strong>ESLT</strong> (Elbit Systems) &mdash; Israel&rsquo;s top defense firm; naval systems demand rises with blockade enforcement. <strong>ZIM</strong> (ZIM Integrated Shipping) &mdash; Israeli shipping company exposed to Eastern Mediterranean disruption risks. <strong>ENI, TotalEnergies</strong> (E, TTE) &mdash; Eastern Mediterranean gas exploration projects (Leviathan, Aphrodite) face geopolitical headwinds. <strong>Tel Aviv 125 Index</strong> &mdash; Israeli equities under cumulative pressure from flotilla crisis, Iran war, and isolation risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: IRAN CEASEFIRE COLLAPSE & OIL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Energy / Middle East / Global Economy &mdash; May 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Ceasefire Crumbling: Trump Warns &ldquo;Clock Is Ticking&rdquo;; Hormuz Disruption Keeps Oil Above $100</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S.-Iran ceasefire continues to unravel. President Trump warned Tehran the &ldquo;clock is ticking&rdquo; for a deal, while Iran signaled it is eyeing <strong>toll collection in the Strait of Hormuz</strong> as leverage. Tehran has resumed drone and missile strikes on Gulf states &mdash; including the Barakah nuclear plant attack &mdash; shattering the April 8 ceasefire agreement. G7 finance ministers meeting in Paris warned the Middle East conflict has exposed how vulnerable the interconnected global economy is to external shocks.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brent crude</strong> remains above <strong>$105/barrel</strong> with Hormuz flows still severely disrupted. The energy crisis is feeding directly into global inflation: Japan&rsquo;s CPI this week is expected to show elevated energy-driven price pressures. 10-year Treasury yields hit their <strong>highest level in a year</strong>, with a synchronized global push higher in long-end yields across developed markets. The <strong>S&amp;P 500 fell 0.07% to 7,403</strong> while the <strong>Nasdaq dropped 0.51%</strong> on Monday, snapping a 7-week rally as oil and bond yield concerns weighed on tech.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Stagflationary pressures are the dominant macro theme. Oil above $100 compresses margins for consumer-facing companies while boosting energy producers. Rising long-end yields threaten the tech rally and pressure rate-sensitive sectors.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM, CVX, SHEL, BP</strong> &mdash; energy majors at/near 52-week highs on sustained crude elevation. <strong>DAL, UAL, AAL</strong> (Airlines) &mdash; jet fuel costs squeezing margins; downside accelerates if Hormuz closure widens. <strong>TLT</strong> (20+ Year Treasury ETF) &mdash; under pressure as long-end yields surge globally. <strong>AAPL, MSFT, GOOGL</strong> &mdash; mega-cap tech faces dual headwinds from rising yields and energy-driven inflation. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services demand rising as producers push output to fill supply gaps.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: RUSSIA KYIV APARTMENT STRIKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe &mdash; May 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian Missile Strike on Kyiv Apartment Building Kills 24+; Pope Leo XIV Condemns &ldquo;Spiral of Annihilation&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Russian missile struck a <strong>residential apartment building in Kyiv</strong>, killing at least <strong>24 people</strong> and burying civilians under rubble in one of the deadliest single strikes on the capital in months. The attack continues Russia&rsquo;s escalated aerial campaign that saw <strong>800+ drones launched in a single day</strong> earlier this week, marking the heaviest bombardment since the war began.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Pope Leo XIV</strong> denounced global investments in artificial intelligence and &ldquo;high-tech weaponry&rdquo; as leading the world into a &ldquo;spiral of annihilation,&rdquo; calling for peace in both the Middle East and Ukraine. UNICEF reported at least <strong>59 children killed or wounded</strong> by Israeli strikes in Lebanon over a single week despite an April ceasefire. The convergence of active conflicts in Ukraine, Iran, Gaza, and Lebanon represents the most dangerous global security environment since the Cold War, with European defense spending set to accelerate further.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            European defense rearmament is accelerating into a multi-year structural trend. Grain and energy supply anxiety continues to support commodity prices. European equities face headwinds from the proximity of conflict.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defense contractor is the single biggest beneficiary of European rearmament; shares have tripled since 2022. <strong>RTX, LMT, NOC</strong> &mdash; U.S. defense primes benefit from NATO replenishment orders and Patriot/NASAMS demand. <strong>BA</strong> (Boeing) &mdash; defense segment benefits even as commercial aviation struggles. <strong>Wheat futures / WEAT</strong> &mdash; Odesa and Kharkiv are key grain export hubs; continued disruption is bullish for global food prices. <strong>European natural gas (TTF)</strong> &mdash; renewed supply anxiety pushes futures higher. <strong>EURUSD</strong> &mdash; euro weakens on proximity-of-conflict risk premium.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">A nuclear facility was attacked for the first time in the Iran-Gulf conflict.</strong> The Barakah drone strike crosses a threshold that no geopolitical risk model had priced in. If attribution points to Iran or its proxies, expect a massive escalation in Gulf defense spending and a potential reassessment of nuclear energy security worldwide.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">A new Ebola strain with no vaccine has crossed borders.</strong> The WHO&rsquo;s PHEIC declaration for Bundibugyo virus &mdash; with no licensed vaccine or therapeutic &mdash; is the most dangerous health emergency since COVID. If containment fails in Kampala (population 1.7M), the global response will dwarf anything seen in years.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro picture is stagflationary and deteriorating.</strong> Oil above $100, 10Y yields at 12-month highs, and a 7-week equity rally just snapped. The S&amp;P 500 and Nasdaq both fell today as bond yields and energy costs finally overwhelmed AI-driven optimism. Kevin Warsh takes the Fed chair with no room to cut rates.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Barakah attack attribution &amp; Gulf retaliation &bull; Ebola spread beyond Ituri/Kampala &bull; Israel-Turkey diplomatic fallout from flotilla raid &bull; Iran ceasefire deadline &bull; Japan CPI energy inflation data &bull; G7 finance ministers&rsquo; Paris communiqu&eacute; &bull; 10Y Treasury yield trajectory &bull; Warsh&rsquo;s first public statements as Fed Chair
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; The National (UAE) &bull; IAEA &bull; WHO &bull; Bloomberg &bull; Reuters &bull; The Washington Post &bull; NPR &bull; CNBC &bull; The Times of Israel &bull; Euronews &bull; Haaretz &bull; Middle East Eye &bull; UN News &bull; CDC &bull; The Street &bull; IG Bank &bull; Crestwood Advisors &bull; Democracy Now &bull; NBC News &bull; Fox News
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
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
  subject: `[World Monitor] Global Intelligence Briefing — ${today}`,
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
