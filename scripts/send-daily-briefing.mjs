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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Science &bull; Health &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: US-IRAN ESCALATION & STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; May 25&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Strikes Southern Iran, Sinks Two Ships in Strait of Hormuz; Iran Shoots Down U.S. Drone; Ceasefire Talks Resume via Qatar</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. military struck southern Iran on Sunday in what the Pentagon called <strong>&ldquo;self-defense&rdquo; strikes</strong>, sinking <strong>two Iranian ships</strong> that Washington claimed were attempting to lay mines in the <strong>Strait of Hormuz</strong> &mdash; the chokepoint through which roughly <strong>20% of global oil</strong> transits. Iran&rsquo;s Islamic Revolutionary Guard Corps responded by claiming it <strong>shot down a U.S. MQ-9 Reaper drone</strong> that entered Iranian airspace.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Despite the kinetic exchange, Iranian negotiators have travelled to <strong>Qatar</strong> to discuss a potential ceasefire deal. Markets opened with cautious optimism on the diplomatic signal &mdash; <strong>Brent fell below $97/barrel</strong> &mdash; but the situation remains highly volatile. Iran&rsquo;s internet blackout has been <strong>partially lifted after 87 days</strong>, potentially signalling a willingness to de-escalate. The Strait of Hormuz crisis continues to dominate global energy markets and inflation expectations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Oil&rsquo;s drop below $97 signals markets are pricing in a deal, but the risk premium remains enormous if talks collapse. Energy stocks face a binary outcome: a deal would trigger a rapid sell-off in crude, while failure could send Brent back above $110. Shipping and insurance costs in the Persian Gulf remain elevated.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell) &mdash; major beneficiaries of elevated crude; vulnerable to sharp downside if deal materialises. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services correlated to production urgency. <strong>DAL, UAL, LHA.DE</strong> (Delta, United, Lufthansa) &mdash; airlines rally on falling fuel costs. <strong>STNG, FRO</strong> (Scorpio Tankers, Frontline) &mdash; tanker stocks exposed to Hormuz transit risk. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven flows remain strong. <strong>TTF futures</strong> (European gas) &mdash; declined to &euro;45/MWh on deal optimism.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA THREATENS KYIV AFTER HYPERSONIC STRIKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Conflict / Security &mdash; May 25&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Warns Foreigners to Leave Kyiv &ldquo;As Soon As Possible&rdquo; After Hypersonic Missile Strikes Kill 4, Injure 90+</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia&rsquo;s Foreign Ministry issued an unprecedented warning to <strong>all foreign nationals to leave Kyiv immediately</strong>, signalling a potential <strong>new wave of strikes</strong> on the Ukrainian capital. The warning came after weekend attacks that killed at least <strong>4 people and injured more than 90</strong>, with Russia deploying a powerful <strong>hypersonic ballistic missile</strong> that struck high-rise apartment buildings, schools, a marketplace, and a water supply facility.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The evacuation warning marks a significant escalation in rhetoric. Western embassies have not yet issued formal evacuation orders, but several nations are reportedly reviewing their diplomatic presence. The use of hypersonic weapons against civilian infrastructure represents a <strong>qualitative escalation</strong> in Russia&rsquo;s targeting doctrine. Peace talks remain stalled, and the European Commission has cut its <strong>eurozone GDP growth forecast to 0.9%</strong> for 2026 (down from 1.4% in 2025), citing the war&rsquo;s ongoing energy shock.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Kyiv evacuation warning injects fresh risk into European equities. Defence stocks benefit from the hypersonic escalation narrative. Eurozone growth downgrades add pressure to the ECB&rsquo;s rate path. Grain and natural gas markets are sensitive to any widening of the conflict.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defence firm; direct beneficiary of European rearmament. <strong>BA.L</strong> (BAE Systems) &mdash; UK defence giant with NATO-aligned order book. <strong>SAF.PA</strong> (Safran) &mdash; French aerospace/defence; missile defence systems. <strong>AVAV</strong> (AeroVironment) &mdash; Switchblade drone maker; drone warfare demand accelerating. <strong>Wheat futures / WEAT</strong> &mdash; Black Sea disruption risk bullish for grain prices. <strong>European natural gas (TTF)</strong> &mdash; any further conflict escalation reverses today&rsquo;s decline. <strong>EWG</strong> (iShares Germany ETF) &mdash; eurozone growth downgrade pressures European equity valuations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA SHENZHOU 23 YEARLONG MISSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Space / Science / China &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Launches Shenzhou 23: One Astronaut to Spend a Full Year in Space, Pushing Human Endurance Frontiers</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China successfully launched the <strong>Shenzhou 23 spacecraft</strong> from the Jiuquan Satellite Launch Centre, sending three astronauts &mdash; Commander <strong>Zhu Yangzhu</strong>, <strong>Zhang Zhiyuan</strong>, and <strong>Lai Ka-ying</strong> &mdash; to the Tiangong space station. In a historic first, one astronaut is set to remain in orbit for <strong>a full year</strong>, exploring the limits of human adaptability during long-duration spaceflight.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The mission represents a major milestone in China&rsquo;s space programme as it prepares for a <strong>crewed lunar landing by 2030</strong>. It is the longest planned Chinese crewed mission to date and brings China closer to parity with the ISS programme&rsquo;s longest single missions. The launch comes as the <strong>global space race intensifies</strong>, with implications for satellite technology, materials science, and national prestige. Chinese tech and aerospace-adjacent companies rallied in Hong Kong and Shenzhen trading.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China&rsquo;s space achievements catalyse investment in adjacent sectors: batteries, solar, AI chips, and advanced materials. The mission boosts national sentiment and &ldquo;tech self-sufficiency&rdquo; narrative stocks. Western space competitors face renewed pressure to accelerate timelines.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>688256.SH</strong> (Cambricon) &mdash; China&rsquo;s AI accelerator specialist; 160% YoY revenue jump in Q1 2026. <strong>300750.SZ</strong> (CATL) &mdash; battery leader with 38% global market share; space-grade power systems. <strong>1211.HK</strong> (BYD) &mdash; EVs and plug-in hybrids now in 70+ countries; tech nationalism tailwind. <strong>JKS</strong> (JinkoSolar) &mdash; Chinese solar exports hit record 68 GW in March 2026. <strong>RKLB</strong> (Rocket Lab) &mdash; Western space competitor may benefit from increased government urgency. <strong>LMT, NOC</strong> (Lockheed, Northrop Grumman) &mdash; U.S. space-defence contractors benefit from space race spending.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: POPE LEO AI ENCYCLICAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Technology / Regulation / Vatican &mdash; May 25&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pope Leo XIV Issues Historic 42,000-Word Encyclical on AI: Calls to &ldquo;Disarm&rdquo; Artificial Intelligence and Regulate Big Tech</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pope Leo XIV released <strong>&ldquo;Magnifica Humanitas&rdquo;</strong> (Magnificent Humanity) &mdash; a sweeping <strong>42,000-word papal encyclical</strong> warning that artificial intelligence risks <strong>widening inequality, weakening democracy, and undermining human dignity</strong>. It is the most significant Vatican statement on technology ever issued and the first encyclical of the new papacy.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The document calls for <strong>government regulation of AI companies</strong>, retraining programmes for displaced workers, protections for children, and safeguards ensuring <strong>humans &mdash; not AI models &mdash; make decisions on weapons use</strong>. &ldquo;Technology is never neutral,&rdquo; Leo wrote, arguing it reflects the interests of its creators. The encyclical is addressed to <strong>all people</strong>, not just Catholics, and directly names Big Tech firms as concentrating dangerous levels of power. With <strong>1.4 billion Catholics worldwide</strong>, the encyclical could catalyse regulatory momentum in the EU, Latin America, and the Global South.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            While papal encyclicals don&rsquo;t move markets directly, they shape the regulatory environment &mdash; especially in Europe and Latin America where Catholic influence on policy is substantial. The EU AI Act is already in force; this adds moral authority to calls for tighter enforcement. AI weapons provisions could affect defence-tech contracts. The encyclical legitimises the growing global push for AI governance.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MSFT, GOOGL, META</strong> &mdash; Big Tech named directly; regulatory risk premium increases in EU/LatAm jurisdictions. <strong>NVDA</strong> (Nvidia) &mdash; AI chip demand narrative faces headwinds from &ldquo;responsible AI&rdquo; regulation. <strong>PLTR</strong> (Palantir) &mdash; AI-for-defence model directly challenged by weapons-use provisions. <strong>AI</strong> (C3.ai) &mdash; enterprise AI faces compliance cost increases. <strong>IREN, CLSK</strong> (Iris Energy, CleanSpark) &mdash; AI data centre power demand narrative could face political pushback. <strong>SAP.DE, CRM</strong> (SAP, Salesforce) &mdash; enterprise software firms with AI integration may benefit from &ldquo;responsible AI&rdquo; positioning.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: EBOLA SPREADING FASTER THAN CONTAINMENT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa / Pandemic Risk &mdash; May 25&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Warns Ebola Spreading Faster Than Containment; Hospitals Attacked, Healthcare Workers Evacuated</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The WHO warned that the <strong>Ebola outbreak in the DRC and Uganda</strong> is <strong>spreading faster than efforts to contain it</strong>. The crisis deepened this week after <strong>healthcare facilities were attacked three times in the past week</strong>, culminating on Sunday when angry young men <strong>stormed a hospital treating Ebola patients</strong>, forcing medical staff to evacuate them under gunfire. The outbreak involves the rare <strong>Bundibugyo strain</strong>, for which <strong>no approved vaccine or treatment exists</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Current figures stand at over <strong>600 suspected cases and 139 suspected deaths</strong> across the DRC and Uganda. The attacks on healthcare workers threaten to collapse the containment response entirely. The WHO has declared the outbreak a <strong>Public Health Emergency of International Concern (PHEIC)</strong> &mdash; its highest alarm level, placing it alongside COVID-19 and the 2014 West Africa Ebola crisis. Border screenings have intensified across East Africa, but the virus has already reached <strong>Kinshasa and Kampala</strong>, two of Africa&rsquo;s largest cities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The escalating outbreak with no vaccine available creates an urgent pharma R&amp;D catalyst. Hospital attacks suggest containment is failing, raising the probability of wider spread. Mining companies with DRC operations face direct disruption risk to cobalt and copper supply chains critical for EVs and electronics.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ILA.AX</strong> (Island Pharmaceuticals) &mdash; surged 27% on Ebola/Marburg treatment development with U.S. authorities. <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid vaccine development; emergency use authorization catalyst. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir explored for Ebola treatment. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefence contractor with Ebola countermeasure experience. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper mining operations at risk. <strong>ABNB, BKNG</strong> (Airbnb, Booking Holdings) &mdash; African tourism vulnerable to travel advisories. <strong>CMCL</strong> (Caledonia Mining) &mdash; East African mining operations exposed to regional instability.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Two wars, one pandemic, and the world&rsquo;s most powerful moral authority calling for AI regulation.</strong> The Iran-U.S. situation is paradoxical: kinetic strikes and diplomatic signals within the same 24 hours. Oil dropping below $97 on ceasefire hopes could reverse violently if Qatar talks fail. Russia&rsquo;s evacuation warning for Kyiv is the most explicit threat to the capital since 2022 and darkens the European growth outlook.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&rsquo;s yearlong space mission is a quiet flex</strong> with loud implications for the tech-nationalist investment thesis. Meanwhile, Pope Leo&rsquo;s &ldquo;Magnifica Humanitas&rdquo; may prove to be the most consequential encyclical since Laudato Si&rsquo; &mdash; giving 1.4 billion Catholics a moral framework for AI regulation that aligns with Brussels&rsquo; existing stance.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Qatar ceasefire talks (deal = oil crash, failure = $110+ Brent) &bull; Russia&rsquo;s follow-through on Kyiv threats &bull; Ebola case counts in Kinshasa and Kampala (urban spread = pandemic risk) &bull; EU regulatory response to papal AI encyclical &bull; China space-adjacent stocks in HK/Shenzhen sessions &bull; U.S./UK markets reopening Tuesday after Memorial Day/Bank Holiday
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; Democracy Now! &bull; ABC News &bull; Euronews &bull; Havana Times &bull; CaixaBank Research &bull; CNBC &bull; Bloomberg &bull; Vatican News &bull; WHO &bull; Stockhead &bull; NBC News &bull; CBS News &bull; Time &bull; Xinhua &bull; CGTN &bull; Washington Post &bull; NAI 500 &bull; Crestwood Advisors
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
