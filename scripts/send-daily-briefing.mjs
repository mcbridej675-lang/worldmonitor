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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Diplomacy &bull; Health &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: PUTIN-XI BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Diplomacy / Energy &mdash; May 19&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Putin-Xi Beijing Summit Concludes: 40 Agreements Signed, &ldquo;Multipolar World&rdquo; Declaration Issued</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russian President Vladimir Putin wrapped up a <strong>two-day state visit to Beijing</strong> &mdash; his <strong>25th trip to China</strong> &mdash; meeting Chinese President Xi Jinping on the <strong>25th anniversary of the Sino-Russian Treaty of Friendship</strong>. The two leaders signed approximately <strong>40 cooperation documents</strong> and issued two major declarations: one on strengthening the Russia-China comprehensive strategic partnership &mdash; pledging expanded <strong>military, technological, trade, and economic cooperation</strong> &mdash; and a second on <strong>&ldquo;global multipolarity,&rdquo;</strong> calling for a new model of international relations based on equality and mutual respect.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Bilateral trade exceeded $240 billion</strong> last year and expanded by a further <strong>20% in the first four months of 2026</strong>. Russian oil exports to China grew <strong>35% in Q1 2026</strong>. Energy deals dominated the agenda, with progress on the <strong>Power of Siberia-2 gas pipeline</strong> and additional oil export routes. The talks unfolded against the backdrop of the Iran-Hormuz crisis disrupting one-fifth of global oil supplies. The summit sends a clear signal: Russia and China are deepening their energy and strategic partnership as Western-led institutions lose influence.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The deepening Russia-China axis reshapes global energy flows and trade corridors. The Power of Siberia-2 pipeline, if finalised, shifts European gas leverage permanently. The &ldquo;multipolar world&rdquo; declaration signals accelerating de-dollarisation efforts. Defence spending in Europe and Asia-Pacific will continue rising.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>GAZP.ME</strong> (Gazprom) &mdash; direct beneficiary of expanded pipeline capacity to China. <strong>RHM.DE</strong> (Rheinmetall) &mdash; European defence rally extends as NATO responds to Sino-Russian alignment. <strong>LMT</strong> (Lockheed Martin) &mdash; Asia-Pacific rearmament orders accelerating from Japan, South Korea, Australia. <strong>BABA</strong> (Alibaba), <strong>JD</strong> (JD.com) &mdash; expanded Sino-Russian trade benefits Chinese e-commerce platforms. <strong>DXY</strong> (Dollar Index) &mdash; yuan-rouble trade settlement growth chips at dollar dominance. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; central bank gold buying from non-Western nations supports prices.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN HORMUZ CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Energy / Global Economy / Maritime &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran&rsquo;s Strait of Hormuz &ldquo;Controlled Maritime Zone&rdquo; Chokes Global Oil; Brent Peaked at $126, Crude at $96 Today</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran&rsquo;s <strong>Islamic Revolutionary Guard Corps Navy</strong> has redefined the Strait of Hormuz into a <strong>&ldquo;vast operational area&rdquo;</strong> extending from the port city of <strong>Jask to Siri Island</strong>. The newly established <strong>Persian Gulf Strait Authority</strong> &mdash; a permanent institutional body, not a temporary military posture &mdash; claims the mandate to manage all transit through the strait. Its legal standing under international maritime law is <strong>disputed by the majority of the international community</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The disruption is the <strong>largest to world energy supply since the 1970s</strong>. Brent crude surpassed <strong>$100/barrel on March 8</strong> for the first time in four years, peaking at <strong>$126/barrel</strong>. Approximately <strong>170 million barrels of crude and refined products</strong> remain stuck in the Middle East aboard <strong>166 tankers</strong>. Capital Economics warns prices could top <strong>$130&ndash;$140/barrel</strong> next month if the strait remains closed. Today, markets showed brief optimism on unconfirmed reports of a diplomatic resolution, with US crude settling around <strong>$96</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The energy crisis remains the single most important macro driver globally. Oil above $100 creates stagflationary pressure, hurting consumer stocks while boosting energy producers. The IEA warned markets could remain &ldquo;severely undersupplied until October.&rdquo; Every $10 rise in crude adds ~0.3% to global inflation.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>SHEL</strong> (Shell), <strong>TTE</strong> (TotalEnergies) &mdash; all benefit from elevated crude; near 52-week highs. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services demand surging. <strong>DAL, UAL, IAG.L</strong> (Delta, United, IAG) &mdash; jet fuel costs crushing airline margins globally. <strong>DANGCEM.NG</strong> (Dangote Cement / Dangote Refinery) &mdash; Nigeria&rsquo;s mega-refinery emerging as a critical alternative supplier. <strong>2222.SR</strong> (Saudi Aramco) &mdash; benefits from elevated prices and increased Asian demand. <strong>GLD</strong> (Gold) &mdash; safe-haven flows accelerating.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: WHO EBOLA PHEIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 16&ndash;21 (Ongoing)</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Ebola Emergency Widens: Bundibugyo Strain Crosses Borders to Uganda &amp; Kinshasa &mdash; No Vaccine Exists</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The World Health Organization&rsquo;s <strong>Public Health Emergency of International Concern (PHEIC)</strong> &mdash; declared May 16 &mdash; continues to escalate. The outbreak involves the rare <strong>Bundibugyo strain of Ebola</strong>, for which <strong>no approved vaccine or specific therapeutic exists</strong>. As of this week: <strong>600+ sickened, 130+ likely dead</strong>, with <strong>8 laboratory-confirmed cases and 246 suspected cases</strong> concentrated in DRC&rsquo;s <strong>Ituri Province</strong> across multiple health zones including Bunia, Rwampara, and Mongbwalu.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The outbreak has crossed borders: <strong>Uganda</strong> confirmed two cases linked to DRC travellers, including <strong>one death in Kampala</strong>. Cases have also reached DRC&rsquo;s capital, <strong>Kinshasa</strong>, raising fears of wider regional spread. This is only the <strong>8th PHEIC declaration</strong> in WHO history, placing it alongside COVID-19 and the 2014 West Africa Ebola crisis. Countries sharing land borders with DRC are at &ldquo;high risk.&rdquo; The lack of a licensed vaccine creates an urgent biomedical R&amp;D race.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PHEIC declarations historically trigger pharma rallies and travel/hospitality sell-offs. The Bundibugyo strain&rsquo;s lack of an approved vaccine creates an urgent R&amp;D race and potential emergency-use authorisation catalysts. Mining companies with DRC exposure face operational disruption risk &mdash; DRC produces ~70% of global cobalt.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid Ebola vaccine development. <strong>BNTX</strong> (BioNTech) &mdash; similar mRNA capability; watch for partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir explored for Ebola treatment. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefence contractor with Ebola countermeasure experience. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper mining operations face disruption. <strong>ABNB, BKNG</strong> (Airbnb, Booking) &mdash; African tourism vulnerable to travel advisories. <strong>CMCL</strong> (Caledonia Mining) &mdash; regional mining risk exposure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: BOLIVIA CAPITAL UNDER SIEGE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Latin America / Political Crisis / Commodities &mdash; May 19&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Bolivia&rsquo;s Capital Under Siege: Protests, Blockades &amp; Fuel Crisis Threaten to Topple President Paz</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Bolivia&rsquo;s President <strong>Rodrigo Paz</strong> faces a deepening crisis less than <strong>six months after taking office</strong>. Two weeks of <strong>road closures</strong> &mdash; spearheaded by the Bolivian Workers&rsquo; Central (COB), peasant unions, and miners &mdash; have <strong>emptied markets in La Paz</strong> and <strong>depleted hospital oxygen reserves</strong>. At least <strong>three people have died</strong> after emergency vehicles were blocked from reaching medical centres. Thousands of protesters have taken to the streets demanding the president&rsquo;s resignation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis was triggered by the government ending <strong>fuel subsidies</strong>, driving up gasoline and diesel prices. A subsequent <strong>&ldquo;junk gasoline&rdquo; scandal</strong> &mdash; in which the state imported low-quality fuel that damaged transport workers&rsquo; vehicles &mdash; sparked a wave of strikes and the <strong>resignation of two officials at the state oil company</strong>. Protesters allied with <strong>ex-President Evo Morales</strong> have clashed with security forces. <strong>Eight Latin American governments</strong> from Chile to Costa Rica issued a joint statement rejecting &ldquo;any action aimed at destabilising the democratic order.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Bolivia is the world&rsquo;s largest lithium reserve holder and a major natural gas exporter in South America. Political instability threatens lithium mining concessions and gas supply contracts with Brazil and Argentina. Regional contagion risk in Latin America could weaken the Bolivian boliviano and neighbouring currencies.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ALB</strong> (Albemarle), <strong>SQM</strong> (Sociedad Qu&iacute;mica y Minera) &mdash; lithium supply disruption from the world&rsquo;s largest reserves benefits competitors in Chile and Australia. <strong>LTHM</strong> (Livent/Arcadium Lithium) &mdash; alternative lithium supplier gains. <strong>PBR</strong> (Petrobras) &mdash; Brazilian energy giant may see reduced Bolivian gas imports. <strong>ARGT</strong> (Argentina ETF) &mdash; regional instability spillover risk. <strong>TSLA, BYD</strong> (1211.HK) &mdash; EV makers face lithium supply chain uncertainty. <strong>Bolivian sovereign bonds</strong> &mdash; default risk rising amid capital flight.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: YEMEN PRISONER SWAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Middle East / Diplomacy / Humanitarian &mdash; May 14&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Yemen&rsquo;s Largest Prisoner Swap in 11-Year Civil War: 1,600+ Detainees to Be Released</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Yemen&rsquo;s internationally recognised government and the <strong>Iran-backed Houthi rebels</strong> signed a landmark deal in <strong>Amman, Jordan</strong> following <strong>14 weeks of negotiations</strong> to release over <strong>1,600 detainees</strong> &mdash; the <strong>largest prisoner swap</strong> since the civil war erupted in 2014. Of the nearly 1,700 detainees, approximately <strong>1,100 are Houthi-affiliated</strong>, while <strong>7 Saudis and 20 Sudanese</strong> are among the 580 to be released by the Houthi side. The deal was observed by <strong>U.N. officials and the International Committee of the Red Cross</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>U.N. Secretary-General Ant&oacute;nio Guterres</strong> welcomed the deal and called on parties to implement it swiftly. The agreement forms the <strong>first phase of a broader &ldquo;all-for-all&rdquo; prisoner exchange</strong> reached in Muscat. Implementation will be coordinated with the ICRC, building on large swaps conducted in 2020 and 2023. While a positive humanitarian development, analysts note it does not address the underlying military and political divisions &mdash; and occurs against the broader backdrop of Houthi maritime disruption in the <strong>Red Sea and Gulf of Aden</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The prisoner swap is a rare de-escalation signal in the Middle East. If it builds toward a broader ceasefire, Red Sea shipping disruptions could ease, reducing freight costs and insurance premiums. However, analysts remain cautious &mdash; Houthi maritime attacks have continued independently of peace talks.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ZIM</strong> (ZIM Integrated Shipping) &mdash; Red Sea normalisation would reduce costly Cape of Good Hope rerouting. <strong>MAERSK.CO</strong> (A.P. Moller-Maersk), <strong>HLAG.DE</strong> (Hapag-Lloyd) &mdash; global container shipping costs tied to Red Sea access. <strong>2222.SR</strong> (Saudi Aramco) &mdash; Yemeni stability reduces direct security risk to Saudi infrastructure. <strong>AMZN, WMT</strong> (Amazon, Walmart) &mdash; Red Sea normalisation could ease supply chain pressures and reduce shipping costs. <strong>BDRY</strong> (Breakwave Dry Bulk Shipping ETF) &mdash; freight rate normalisation potential.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The global order is visibly bifurcating.</strong> The Putin-Xi summit&rsquo;s 40 agreements and &ldquo;multipolar world&rdquo; declaration formalise a Russia-China axis that is reshaping energy flows, trade corridors, and military alliances. This is not posturing &mdash; bilateral trade is up 20% and Russian oil shipments to China surged 35% in Q1 alone.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy remains the choke point.</strong> Iran&rsquo;s Hormuz &ldquo;Controlled Maritime Zone&rdquo; is the largest oil supply disruption since the 1970s. With 170 million barrels stuck on tankers and prices volatile between $96&ndash;$126, the stagflationary pressure on every major economy is intensifying. Today&rsquo;s markets rose on unconfirmed peace hopes &mdash; but that&rsquo;s happened before.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Multiple secondary crises are compounding.</strong> WHO&rsquo;s Ebola PHEIC adds a health emergency with no vaccine in sight. Bolivia&rsquo;s capital is paralysed, threatening lithium supply chains critical to the EV transition. Yemen&rsquo;s prisoner swap is a rare bright spot but doesn&rsquo;t resolve Red Sea shipping disruptions.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran-Hormuz diplomatic resolution rumours (real or manufactured?) &bull; Putin-Xi summit follow-through on Power of Siberia-2 &bull; Ebola spread beyond DRC/Uganda borders &bull; Bolivia lithium concession status &bull; Yemen prisoner swap implementation &amp; Red Sea Houthi activity &bull; Global bond yields and central bank responses
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; CNBC &bull; Reuters &bull; WHO &bull; ABC News &bull; Washington Post &bull; Fortune &bull; The National &bull; RT &bull; Democracy Now! &bull; Wikipedia &bull; Energy News Beat &bull; TheStreet &bull; Motley Fool &bull; Bloomberg &bull; Capital Economics &bull; ICRC &bull; UN News
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
