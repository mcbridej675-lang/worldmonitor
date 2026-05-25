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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: IRAN-US HORMUZ DEAL BREAKTHROUGH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Energy / Geopolitics / Global Economy &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-U.S. Near Preliminary Deal to Reopen Strait of Hormuz; Oil Plunges 5%, Global Equities Rally</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Washington and Tehran have reached a <strong>preliminary deal</strong> to reopen the <strong>Strait of Hormuz</strong>, the world&rsquo;s most critical oil chokepoint, where <strong>10&ndash;11 million barrels per day</strong> of crude have been shut in since the conflict began on February 28. Trump said negotiations are &ldquo;proceeding in an orderly and constructive manner,&rdquo; though Iranian media cautioned that key disagreements remain &mdash; particularly over Tehran&rsquo;s enriched uranium stockpile and toll rights on the strait.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brent crude fell more than 5%</strong> to <strong>$97.94/barrel</strong>, down roughly 9% from a month ago, on optimism that a deal is close. Markets are pricing in a potential <strong>gush of 100 million barrels</strong> from stranded ships once the strait reopens. Japan&rsquo;s <strong>Idemitsu Maru</strong> became the first Japanese-owned tanker to transit the strait since the war started, a symbolic signal. However, analysts warn that even with a deal, energy markets will remain <strong>disrupted for months</strong> as logistics normalise. Pakistan&rsquo;s military chief Asim Munir and PM Shehbaz Sharif visited Beijing to support mediation efforts.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the single most important macro catalyst today. Falling oil prices relieve inflationary pressure, boost consumer discretionary, and give central banks room to ease. The S&amp;P 500 posted its <strong>eighth consecutive weekly gain</strong>; the Nikkei 225 hit a <strong>record 65,340</strong>, breaching 65,000 for the first time. Risk-on sentiment is surging globally.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM, CVX, SHEL</strong> (ExxonMobil, Chevron, Shell) &mdash; energy producers face downside as crude drops from recent highs. <strong>DAL, UAL, LUV</strong> (Delta, United, Southwest) &mdash; airlines rally hard on falling jet fuel costs. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services sentiment weakens if supply normalises. <strong>Toyota (7203.T), Maruti Suzuki (MARUTI.NS)</strong> &mdash; auto makers benefit as input costs and fuel prices decline. <strong>Consumer staples (PG, UL)</strong> &mdash; margin relief as energy-driven inflation eases. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven demand fading on deal optimism; gold weakens.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA LARGEST KYIV ATTACK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe / Security &mdash; May 24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Launches Largest Attack on Kyiv of the Entire War: 90 Missiles, 600 Drones, Oreshnik Hypersonic Deployed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia unleashed one of its <strong>most devastating combined strikes</strong> since the full-scale invasion, firing <strong>90 missiles and 600 attack drones</strong> at Ukraine overnight, primarily targeting <strong>Kyiv and surrounding regions</strong>. In terms of locations damaged, it is the <strong>largest attack against Kyiv of the entire full-scale war</strong>. At least <strong>4 people were killed and over 100 wounded</strong>. Around <strong>30 residential buildings</strong> in Kyiv alone were damaged or destroyed, along with several schools.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia deployed the <strong>Oreshnik</strong> &mdash; a powerful <strong>intermediate-range hypersonic ballistic missile capable of carrying a nuclear warhead</strong> &mdash; which struck <strong>Bila Tserkva</strong>, a city 50 miles south of Kyiv. This is the <strong>third confirmed Oreshnik use</strong> in the war. Zelenskyy had warned Ukrainians hours before, citing European and U.S. intelligence. Following the attack, Moscow issued an unprecedented warning for <strong>foreign residents and diplomats to leave Kyiv</strong>, signalling it does not intend to slow its campaign. The escalation comes amid stalled peace talks and growing international alarm.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Oreshnik deployment raises the nuclear-capable escalation threshold. European defence spending commitments accelerate. Moscow&rsquo;s diplomat warning creates new uncertainty for foreign businesses operating in Ukraine. Grain export disruption risk elevates.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defence firm; European rearmament is the decade&rsquo;s strongest sector trend. <strong>RTX</strong> (RTX Corp) &mdash; Patriot air defence systems in unprecedented demand. <strong>LMT</strong> (Lockheed Martin) &mdash; NATO replenishment orders accelerating. <strong>AVAV</strong> (AeroVironment) &mdash; drone and counter-drone systems are the defining weapon of this conflict. <strong>Wheat futures / WEAT</strong> &mdash; Black Sea disruption risk supports grain prices. <strong>Euro (EUR/USD)</strong> &mdash; European security fears partially offset by EU-Mexico trade deal tailwinds; euro at 1.1637.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA PHEIC ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ebola PHEIC Spirals: 1,010 Cases, 231 Deaths Across DRC &amp; Uganda; 10 Countries at Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Ebola Bundibugyo outbreak</strong> declared a <strong>Public Health Emergency of International Concern</strong> by the WHO on May 17 is accelerating at an alarming pace. As of May 24, authorities report <strong>1,010 suspected and confirmed cases</strong> and at least <strong>231 deaths</strong> across DRC&rsquo;s <strong>Ituri, Nord-Kivu, and Sud-Kivu provinces</strong>. This represents a massive jump from just 8 confirmed and 246 suspected cases a week ago, underscoring the outbreak&rsquo;s explosive trajectory.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The virus has crossed into <strong>Uganda</strong>, with <strong>five confirmed cases in Kampala</strong>, the capital. Africa is now racing to contain spread threatening <strong>10 countries</strong>. The <strong>Bundibugyo strain</strong> has <strong>no licensed vaccine or specific therapeutic</strong>, with historical case fatality rates of <strong>30&ndash;50%</strong>. The CDC has deployed international response teams. This is only the <strong>8th PHEIC declaration</strong> in WHO history, placing it alongside COVID-19 and the 2014 West Africa Ebola crisis. The lack of treatment options and the outbreak&rsquo;s geographic spread into urban centres make this a critical global health threat.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The surge from 246 to 1,010 cases in one week is the kind of exponential growth that triggers pharma rallies and travel sell-offs. The absence of a Bundibugyo-specific vaccine creates an urgent R&amp;D race with massive commercial upside for the winner. DRC mining operations face direct disruption risk.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform best positioned for rapid Ebola vaccine development; emergency use authorisation could be a major catalyst. <strong>BNTX</strong> (BioNTech) &mdash; competing mRNA capability; watch for WHO partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir explored for Ebola; existing antiviral infrastructure. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefence contractor with prior Ebola countermeasure work. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper operations face workforce and logistics disruption. <strong>ABNB, BKNG</strong> (Airbnb, Booking) &mdash; East African tourism sector vulnerable to travel advisories and border restrictions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: POPE LEO XIV AI ENCYCLICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Technology / Governance / Vatican &mdash; May 25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pope Leo XIV Releases &ldquo;Magnifica Humanitas&rdquo;: First Papal Encyclical on AI Warns of Civilisational Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pope Leo XIV today released <strong>&ldquo;Magnifica Humanitas: On Safeguarding the Human Person in the Time of Artificial Intelligence&rdquo;</strong> &mdash; the <strong>first major papal encyclical focused on AI</strong>. The document warns that artificial intelligence risks making civilisation <strong>&ldquo;less human,&rdquo;</strong> hollowing out work, concentrating wealth, and reducing people to systems driven by data and efficiency rather than dignity. He became the <strong>first pontiff to personally present an encyclical</strong> at the Vatican, alongside <strong>Anthropic co-founder Dario Amodei</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pope Leo declared that control of AI <strong>must not remain &ldquo;in the hands of a few&rdquo;</strong> and warned that AI technology is actively <strong>fuelling world conflicts</strong>. In a sweeping doctrinal move, he also declared the Catholic Church&rsquo;s &ldquo;just war&rdquo; theory <strong>&ldquo;now outdated,&rdquo;</strong> limiting military force to &ldquo;self-defence in the strictest sense.&rdquo; The encyclical extends the Church&rsquo;s social teaching tradition from <em>Rerum Novarum</em> through <em>Laudato Si&rsquo;</em> into the AI age. The document is expected to influence <strong>EU AI regulation debates</strong> and emerging global governance frameworks. With 1.4 billion Catholics worldwide, the encyclical carries significant cultural and political weight.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The encyclical adds moral authority to the global AI regulation movement. Tech companies with concentrated AI power face heightened regulatory and reputational scrutiny. The explicit call-out of wealth concentration could embolden antitrust actions. Defence contractors face long-term ESG headwinds from the &ldquo;just war&rdquo; revision.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>NVDA</strong> (Nvidia) &mdash; AI chip monopoly is exactly the &ldquo;few hands&rdquo; concentration the Pope warned about; regulatory overhang increases. <strong>MSFT, GOOGL, META</strong> &mdash; Big Tech AI platforms face Catholic-influenced EU regulatory pressure. <strong>Anthropic</strong> (private) &mdash; Dario Amodei&rsquo;s presence at the Vatican signals alignment with &ldquo;responsible AI&rdquo; narrative; potential competitive moat. <strong>PLTR</strong> (Palantir) &mdash; AI-in-warfare concerns directly relevant. <strong>European defence ETFs</strong> &mdash; &ldquo;just war&rdquo; revision could influence Catholic-majority nation defence budgets long-term. <strong>AI ETFs (BOTZ, AIQ)</strong> &mdash; sector faces new moral-regulatory narrative risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CHINA SHENZHOU 23 LAUNCH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Space / Technology / Asia &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Launches Shenzhou 23 with First Hong Kong Astronaut; One Crew Member Set for Year-Long Space Stay</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China launched the <strong>Shenzhou-23 crewed spacecraft</strong> from the Jiuquan Satellite Launch Centre at <strong>23:08 Beijing Time</strong> on May 24, carrying three astronauts to the <strong>Tiangong space station</strong>. The crew includes commander <strong>Zhu Yangzhu</strong>, <strong>Zhang Zhiyuan</strong>, and <strong>Lai Ka-ying</strong> &mdash; the <strong>first astronaut from Hong Kong</strong> in history. Lai holds a doctoral degree in computer forensics and will conduct research aboard the station.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          One crew member is scheduled to stay at Tiangong for <strong>a full year</strong>, making it <strong>among the longest single human spaceflights ever</strong>. The mission aims to &ldquo;explore human adaptability and performance limits&rdquo; in long-duration spaceflight. The crew will conduct an in-orbit rotation with the <strong>Shenzhou 21 crew</strong>, who have been aboard for over 200 days. The mission underscores China&rsquo;s accelerating space ambitions and positions Tiangong as a <strong>credible competitor to the ageing International Space Station</strong>, which faces retirement by decade&rsquo;s end. The Hong Kong selection also carries political symbolism, reinforcing Beijing&rsquo;s integration agenda.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China&rsquo;s space cadence validates a growing commercial space economy. Year-long mission data has implications for the broader space-tourism and space-infrastructure sectors. The Hong Kong angle signals stability and integration, relevant for Hang Seng sentiment.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>Fujikura (5803.T)</strong> &mdash; surged 14%+ today; cables and optical fibres critical to space and AI infrastructure. <strong>Kioxia (285A.T)</strong> &mdash; also up 14%+; chip maker benefiting from AI/space demand. <strong>RKLB</strong> (Rocket Lab) &mdash; Western commercial launch competitor; benefits from overall sector interest. <strong>BA</strong> (Boeing) &mdash; ISS retirement creates urgency for next-gen station contracts; faces competition from Chinese alternatives. <strong>LMT</strong> (Lockheed Martin) &mdash; space division competes directly with China&rsquo;s expanding capabilities. <strong>Hang Seng Index (HSI)</strong> &mdash; Hong Kong astronaut selection is a soft-power boost; watch for sentiment lift in Hong Kong-listed tech.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Two opposing forces are driving global markets.</strong> The Iran-U.S. Hormuz deal breakthrough is the most powerful risk-on catalyst in months &mdash; oil down 5%, Nikkei at a record 65,340, S&amp;P 500 on an eight-week winning streak. If the deal holds, the deflationary impulse from normalising energy markets could reshape central bank policy worldwide. But the deal is fragile: Iranian media warn disagreements remain, and the strait is still effectively closed.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Simultaneously, escalation risks are intensifying elsewhere.</strong> Russia&rsquo;s record bombardment of Kyiv with Oreshnik hypersonic missiles and its warning to diplomats signals a new phase in the war. The Ebola PHEIC has surged from 246 to 1,010 cases in a week &mdash; an exponential trajectory threatening 10 African nations. And Pope Leo XIV&rsquo;s encyclical has introduced a powerful new voice into the AI governance debate, one that will influence regulation for years.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran deal finalisation details and uranium disagreement &bull; Hormuz reopening timeline and tanker logistics &bull; Russia&rsquo;s next strikes after diplomat warning &bull; Ebola case trajectory and 10-country spread risk &bull; EU regulatory response to Magnifica Humanitas &bull; Nikkei momentum above 65,000 &bull; EU-Mexico trade deal ratification impact &bull; Hajj security amid regional tensions
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; CNBC &bull; Bloomberg &bull; Washington Post &bull; Fortune &bull; Axios &bull; Euronews &bull; Reuters &bull; WHO &bull; CDC &bull; The Japan Times &bull; South China Morning Post &bull; Kyiv Independent &bull; Time &bull; CGTN &bull; The Vatican &bull; National Catholic Reporter &bull; IndexBox &bull; Seoul Economic Daily
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
