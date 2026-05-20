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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: PUTIN-XI BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / China-Russia / Global Order &mdash; May 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Putin &amp; Xi Sign 47-Page &ldquo;Multipolar World&rdquo; Declaration in Beijing; ~40 Agreements Sealed Days After Trump&rsquo;s Own China Visit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese President <strong>Xi Jinping</strong> hosted Russian President <strong>Vladimir Putin</strong> for a two-day state visit in Beijing &mdash; Putin&rsquo;s <strong>25th trip to China</strong> &mdash; culminating in the signing of a sweeping <strong>47-page joint declaration</strong> on building a &ldquo;multipolar world and a new type of international relations.&rdquo; Approximately <strong>40 bilateral agreements</strong> were signed spanning trade, energy, technology, and railway construction. Putin declared the two nations have built &ldquo;a stable system of mutual trade that is protected from external influence.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The summit is diplomatically explosive in its timing: it arrived just <strong>days after President Trump completed his own two-day summit with Xi</strong>, turning Beijing into a stage for competing great-power courtships. Analysts note that <strong>&ldquo;China holds the cards&rdquo;</strong> &mdash; positioned as the indispensable partner to both Washington and Moscow. Energy cooperation featured prominently, with new pipeline and LNG deals deepening Europe&rsquo;s strategic disadvantage. The summit also occurred against the backdrop of Russia&rsquo;s <strong>drone strike on a Chinese-owned cargo ship</strong> in the Black Sea days earlier, an incident notably absent from official communiqu&eacute;s.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The deepening Russia-China axis accelerates de-dollarization and alternative payment systems, pressuring the dollar&rsquo;s reserve currency status long-term. New energy deals redirect supply away from European markets. Tech transfer agreements threaten Western chip restrictions.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>BABA</strong> (Alibaba) &mdash; Chinese tech benefits from expanded bilateral tech cooperation. <strong>GAZP.ME</strong> (Gazprom) &mdash; new pipeline deals secure demand for Russian gas. <strong>RHM.DE</strong> (Rheinmetall) &mdash; European defense rallies as the bloc faces strategic encirclement. <strong>DXY</strong> (Dollar Index) &mdash; long-term pressure from bilateral trade bypassing USD. <strong>TTE</strong> (TotalEnergies) &mdash; European energy firms squeezed as Russia-China lock up supply. <strong>SHEL</strong> (Shell) &mdash; LNG pricing power shifts as new Russia-China routes bypass European buyers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: BOLIVIA POLITICAL CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Latin America / Political Crisis / Economy &mdash; May 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Bolivia&rsquo;s Capital Under Siege: Worst Economic Crisis in 40 Years Sparks Mass Protests; 3 Dead, Hospitals Running Out of Oxygen</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President <strong>Rodrigo Paz</strong> faces a deepening existential crisis less than <strong>six months after taking office</strong> as two weeks of road blockades by the <strong>Bolivian Workers&rsquo; Central (COB), peasant unions, and miners</strong> have left <strong>La Paz under siege</strong>. Markets have been emptied of food, and hospitals report critically low <strong>oxygen reserves</strong>. At least <strong>three people have died</strong> after emergency vehicles were blocked from reaching medical centres. Year-on-year inflation has hit <strong>14%</strong> &mdash; Bolivia&rsquo;s worst economic crisis in four decades.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis was triggered by the government importing <strong>low-quality gasoline</strong> that damaged transport vehicles, sparking strikes that snowballed into a multi-front rebellion: the COB demands wage increases, peasant unions demand stable fuel supply, miners want expanded mining concessions, and teachers demand salary improvements. The <strong>military has been deployed to clear roads</strong> but with limited success. Eight allied Latin American governments issued a joint statement &ldquo;rejecting any action aimed at destabilising the democratic order.&rdquo; Analysts warn of potential state collapse if negotiations fail.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Bolivia holds the world&rsquo;s largest lithium reserves. Political instability threatens lithium supply chains critical to EV and battery production globally. Regional contagion risk in Latin America weighs on EM sentiment.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ALB</strong> (Albemarle) &mdash; lithium producer directly exposed to Bolivian supply disruption. <strong>SQM</strong> (Sociedad Qu&iacute;mica y Minera) &mdash; Chile-based lithium rival benefits if Bolivian output stalls. <strong>TSLA</strong> (Tesla) &mdash; battery supply chain vulnerability; lithium cost inflation risk. <strong>LTHM</strong> (Livent/Arcadium Lithium) &mdash; lithium pricing power increases with supply uncertainty. <strong>EWZ</strong> (Brazil ETF) &mdash; Latin American contagion risk weighs on regional assets. <strong>Boliviano / BOB</strong> &mdash; currency under severe pressure; black market rates diverging sharply from official rate.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA PHEIC ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 17&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ebola PHEIC: Cases Surge to 543 Suspected &amp; 131 Dead in DRC/Uganda; WHO Director-General Briefs World on &ldquo;Unprecedented&rdquo; Bundibugyo Threat</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ebola emergency declared by the WHO on May 17 has <strong>escalated sharply</strong>. As of May 19, authorities report <strong>543 suspected cases and at least 131 deaths</strong> &mdash; up from 246 suspected cases and 80 deaths just three days prior. The outbreak involves the rare <strong>Bundibugyo strain</strong> for which <strong>no approved vaccine or treatment exists</strong>. WHO Director-General <strong>Dr. Tedros</strong> held a special media briefing today (May 20) expressing deep concern over the speed of spread.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The declaration was <strong>historically unprecedented</strong> &mdash; the first time a PHEIC was declared <strong>before convening an Emergency Committee</strong>. Two confirmed cases in <strong>Kampala, Uganda</strong> (including one death) show cross-border transmission. The outbreak spans at least three health zones in DRC&rsquo;s <strong>Ituri Province</strong>: Bunia, Rwampara, and Mongbwalu. WHO assesses risk as <strong>high at national and regional levels</strong>. This is only the <strong>8th PHEIC declaration</strong> in WHO history, alongside COVID-19 and the 2014 West Africa Ebola crisis. International response teams have been mobilised.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PHEIC declarations historically trigger pharma rallies and travel/hospitality sell-offs. The Bundibugyo strain&rsquo;s lack of approved countermeasures creates an urgent R&amp;D race worth billions. Mining companies with DRC cobalt and copper exposure face operational shutdowns.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid Bundibugyo vaccine development; emergency use authorization catalyst. <strong>BNTX</strong> (BioNTech) &mdash; competing mRNA capability; watch for WHO partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir being explored for Ebola treatment protocols. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper operations face worker evacuation risk. <strong>CMCL.L</strong> (Caledonia Mining) &mdash; African mining sector broadly impacted. <strong>ABNB, BKNG</strong> (Airbnb, Booking) &mdash; East African tourism sector faces cancellation wave from travel advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: GLOBAL BOND ROUT & MARKET REVERSAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Bond Markets / Equities &mdash; May 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Bond Rout Deepens: 30-Year Treasury at 19-Year High (5.19%); Japan, UK, Germany Yields Surge to Multi-Decade Peaks</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A global bond sell-off that began mid-May intensified to crisis levels. The <strong>U.S. 30-year Treasury yield</strong> hit <strong>5.197%</strong> &mdash; its highest since <strong>July 2007</strong>. The <strong>10-year yield</strong> reached <strong>4.60%</strong>. But the pain is truly global: <strong>German 10-year Bund yields</strong> hit their highest since <strong>May 2011</strong>, <strong>Japan&rsquo;s 10-year JGB</strong> surged to its highest since <strong>May 1997</strong>, and <strong>UK Gilt yields</strong> reached levels not seen since <strong>July 2008</strong>. A Bank of America survey showed <strong>62% of global fund managers expect 30-year yields to hit 6%</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Equities are buckling under the weight. The S&amp;P 500 swung sharply &mdash; after three straight losses, it bounced <strong>+1.08% on May 19</strong> alongside the Dow (+1.31%) and Nasdaq (+1.54%), but with bond yields still rising, the relief may be temporary. <strong>Gold trades at $4,546</strong> (+0.78%). <strong>Brent crude at $105.45</strong> (-5.24% on demand fears). The rout reflects a toxic cocktail: <strong>persistent 3.8% inflation</strong> driven by the Iran energy crisis, uncertainty over new Fed Chair <strong>Kevin Warsh&rsquo;s</strong> policy stance, and ballooning fiscal deficits from Tokyo to London to Washington.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is a synchronised global repricing of the cost of capital. Every asset class is being revalued: growth stocks face valuation compression, banks benefit from net interest income expansion, and emerging markets face capital flight as the dollar strengthens.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>JPM, HSBA.L, MUFG</strong> (JPMorgan, HSBC, Mitsubishi UFJ) &mdash; global banks benefit from higher rates across all major economies. <strong>TLT</strong> (iShares 20+ Year Treasury ETF) &mdash; long-duration bonds in freefall; potential contrarian entry if yields peak. <strong>NVDA</strong> (NVIDIA) &mdash; reports earnings today; $1.87 EPS beat vs. $1.76 consensus but elevated discount rates pressure mega-cap valuations. <strong>8306.T</strong> (Mitsubishi UFJ) &mdash; Japanese banks surge as JGB yields hit 29-year highs. <strong>O, AMT</strong> (Realty Income, American Tower) &mdash; REITs under severe pressure globally. <strong>EEM</strong> (Emerging Markets ETF) &mdash; capital outflows accelerating from Asia and Latin America.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: RUSSIA-UKRAINE DRONE WAR ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe / Black Sea &mdash; May 14&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia-Ukraine Drone War Hits New Extreme: 1,560 Drones in 48 Hours; Kyiv Apartment Building Levelled; Ukraine Retaliates Near Moscow</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Russia-Ukraine war entered a new phase of aerial intensity. Russia launched its <strong>largest-ever two-day aerial assault</strong> &mdash; more than <strong>1,560 drones and 56 missiles</strong> &mdash; primarily targeting Kyiv. An apartment building was <strong>demolished</strong>, killing <strong>9 people</strong> and injuring dozens. Ukrainian air defences intercepted <strong>652 of 675 drones</strong> and <strong>41 missiles</strong>, but the sheer volume overwhelmed defences in several areas. President Zelenskyy called it the &ldquo;most massive attack since the full-scale invasion.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine retaliated with one of its <strong>largest-ever strikes on Russian territory</strong>, killing at least <strong>4 people including 3 near Moscow</strong> and wounding 12 others. Drone debris landed near <strong>Russia&rsquo;s largest airport</strong>. Separately, Russian drones struck the <strong>KSL Deyang</strong> &mdash; a <strong>Chinese-owned cargo vessel</strong> &mdash; in the Black Sea just <strong>one day before Putin&rsquo;s Beijing summit</strong>, creating a diplomatic incident conspicuously absent from today&rsquo;s Xi-Putin communiqu&eacute;. The escalation cycle shows no signs of abating, with both sides developing increasingly capable long-range autonomous systems.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The drone war&rsquo;s intensification drives European defence spending higher and disrupts Black Sea trade. The Chinese ship strike is a potential inflection point for Beijing&rsquo;s neutrality. Grain supply chains remain fragile.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s defence champion at all-time highs on European rearmament. <strong>BA.L</strong> (BAE Systems) &mdash; UK defence giant benefiting from NATO replenishment cycle. <strong>AVAV</strong> (AeroVironment) &mdash; Switchblade drone maker; the defining weapons platform of the war. <strong>COSCO</strong> (1919.HK) &mdash; Chinese shipping recalculating Black Sea routes after PRC vessel struck. <strong>WEAT</strong> (Wheat ETF) &mdash; Black Sea grain corridor remains under constant threat. <strong>LMT</strong> (Lockheed Martin) &mdash; NATO orders for air defence systems (Patriot, NASAMS) accelerating.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Great-power realignment is accelerating.</strong> The Putin-Xi summit &mdash; coming days after Trump&rsquo;s own China visit &mdash; makes Beijing the fulcrum of 21st-century geopolitics. The 47-page &ldquo;multipolar world&rdquo; declaration is a direct challenge to the Western-led order, with energy and trade deals designed to insulate Russia-China commerce from dollar-based sanctions. Europe is the strategic loser, squeezed between energy reorientation eastward and a security environment demanding massive rearmament.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Crises are stacking, not resolving.</strong> Bolivia&rsquo;s near-collapse threatens global lithium supply. Ebola&rsquo;s unprecedented PHEIC declaration &mdash; with cases doubling in 72 hours &mdash; adds a health crisis to an already overloaded risk environment. The drone war in Ukraine has entered an industrial-scale phase. And the global bond rout is repricing the cost of capital everywhere, with 62% of fund managers expecting 30-year yields to hit 6%.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Putin-Xi summit implementation &amp; energy deals &bull; Bolivia lithium policy &amp; state stability &bull; Ebola case trajectory (543 &rarr; ?) &bull; NVIDIA post-earnings reaction vs. bond yield headwinds &bull; Japanese bond market intervention signals &bull; UK and German fiscal responses to yield spikes &bull; Black Sea shipping insurance repricing &bull; Iran-U.S. ceasefire status
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; CNBC &bull; France 24 &bull; Nikkei Asia &bull; Japan Times &bull; Bloomberg &bull; WHO &bull; CDC &bull; Washington Post &bull; Fortune &bull; CaixaBank Research &bull; Patronus Partners &bull; Crestwood Advisors &bull; GDA Financial Partners &bull; BlackRock &bull; Motley Fool &bull; Wikipedia
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
