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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: TURKEY POLITICAL CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">T&uuml;rkiye / Political Crisis / Emerging Markets &mdash; May 22&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Turkish Court Ousts Main Opposition CHP Leadership; Markets Crash, Circuit Breakers Triggered</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Turkish court annulled the <strong>2023 leadership congress</strong> of the main opposition <strong>Republican People&rsquo;s Party (CHP)</strong>, ousting party leader <strong>&Ouml;zel</strong> and his entire executive team and reinstating former leader <strong>K&iacute;l&iacute;&ccedil;daro&gbreve;lu</strong> as temporary chair. The CHP had won a <strong>historic landslide</strong> in the 2024 local elections, defeating Erdo&gbreve;an&rsquo;s AKP across major cities including Istanbul and Ankara. The ruling effectively decapitates Turkey&rsquo;s democratic opposition ahead of critical elections.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The decision triggered immediate financial contagion. <strong>Borsa Istanbul (BIST 100) plunged 6%</strong>, activating a <strong>market-wide circuit breaker</strong> that halted trading. <strong>Banking shares collapsed over 8%</strong>. The <strong>Turkish lira weakened sharply</strong>, forcing state banks to sell an estimated <strong>$6 billion</strong> in foreign currency reserves to defend the currency. <strong>JPMorgan</strong> now expects Turkey&rsquo;s central bank to raise its one-week repo rate to <strong>40% from 37%</strong> at the June meeting, warning that &ldquo;rising political risks have come at an unhelpful time for the lira.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the most acute emerging-market political shock in months. The $6B central bank intervention signals desperation. A rate hike to 40% would crush Turkish credit growth and corporate earnings. Contagion risk to other EM currencies is elevated.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>TUR</strong> (iShares MSCI Turkey ETF) &mdash; direct exposure to BIST 100 collapse; expect continued outflows. <strong>BBVA</strong> (Banco Bilbao Vizcaya Argentaria) &mdash; owns 86% of Turkish bank Garanti BBVA; significant P&amp;L drag from lira depreciation. <strong>ING</strong> (ING Group) &mdash; material Turkish banking exposure. <strong>EEM</strong> (Emerging Markets ETF) &mdash; broader EM sentiment hit as capital flight risk spreads. <strong>THYAO.IS</strong> (Turkish Airlines) &mdash; lira weakness hits dollar-denominated debt servicing. <strong>GLD</strong> (Gold) &mdash; safe-haven demand from EM instability.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN-US OIL DEAL SIGNALS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Energy / Middle East / Global Economy &mdash; May 22&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-U.S. Deal Signals Send Oil Below $100; Brent Falls 5%, WTI Drops 8% in Sharpest Weekly Decline</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Oil prices posted their <strong>sharpest weekly decline</strong> as the U.S. and Iran signalled meaningful progress toward ending hostilities. U.S. Secretary of State <strong>Marco Rubio</strong> said there were &ldquo;good signs&rdquo; an agreement is in sight, while <strong>Trump called off imminent strikes on Iran</strong> to allow negotiations to continue. <strong>Brent crude fell over 5%</strong> this week and <strong>WTI dropped more than 8%</strong>, with U.S. crude briefly dipping <strong>below $100/barrel</strong> for the first time since the Strait of Hormuz disruption began.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, major obstacles remain. The sides are <strong>deadlocked over Iran&rsquo;s enriched uranium stockpile</strong> and <strong>Hormuz shipping tolls</strong>. Rubio warned a deal would be &ldquo;unfeasible&rdquo; if Iran pursues permanent control of Hormuz shipping lanes. Market skepticism runs deep &mdash; previous deal signals have collapsed before. <strong>Wood Mackenzie</strong> estimates that a quick peace deal opening Hormuz by June would ease Brent to <strong>~$80/barrel by year-end</strong>, but failure could send prices back above $110. The stakes are enormous: Hormuz flows remain <strong>down ~6 million bpd</strong> and energy-driven inflation sits at <strong>3.8%</strong> in the U.S. and <strong>3.0%</strong> in the eurozone.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The oil drop is the single most important macro signal this week. A sustained decline below $100 would relieve inflation pressure globally, open the door to rate cuts, and shift sector rotation from energy to growth. But the market is pricing in only ~40% probability of a deal &mdash; any collapse in talks could trigger a violent reversal.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell) &mdash; all sold off sharply this week; vulnerable to further decline if deal materializes. <strong>DAL, UAL</strong> (Delta, United Airlines) &mdash; airline stocks surging on falling jet fuel costs; potential 15-20% upside if oil stays below $90. <strong>DANGCEM.NG</strong> (Dangote Cement) &mdash; Nigeria&rsquo;s Dangote Refinery emerging as alternative supplier regardless of outcome. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services at risk if production growth slows on lower prices. <strong>CL, PG</strong> (Colgate-Palmolive, Procter &amp; Gamble) &mdash; consumer staples benefit from easing input costs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA PHEIC ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa / Central Africa &mdash; May 20&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ebola PHEIC: Cases Surge to 746 Suspected, 176 Dead; Outbreak &ldquo;Started Months Ago&rdquo; Undetected</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Ebola outbreak</strong> in the DRC and Uganda &mdash; declared a <strong>Public Health Emergency of International Concern (PHEIC)</strong> by the WHO on May 17 &mdash; has escalated sharply. As of May 21, authorities report <strong>746 suspected cases and 176 deaths</strong> in DRC&rsquo;s Ituri Province, with <strong>85 confirmed cases including 2 in Uganda</strong> and <strong>10 confirmed deaths</strong>. A <strong>Bloomberg investigation</strong> revealed the outbreak &ldquo;likely started months ago and spread undetected,&rdquo; raising fears the true scope is far larger than official numbers suggest.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The outbreak involves the rare <strong>Bundibugyo strain</strong>, for which <strong>no approved vaccine or treatment exists</strong>. Cases have reached <strong>Kinshasa</strong> (DRC&rsquo;s 17-million-person capital) and Kampala, Uganda. The WHO warns of <strong>&ldquo;high regional risk&rdquo;</strong> threatening 10 neighbouring countries. This is only the <strong>8th PHEIC in WHO history</strong>, placing it alongside COVID-19 and the 2014 West Africa crisis. Prediction markets price Ebola pandemic risk at <strong>7%</strong> &mdash; low, but non-trivial given the undetected early spread. The CDC has deployed an international response team.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PHEIC declarations historically trigger pharma rallies and travel sell-offs. The lack of an approved Bundibugyo vaccine creates an urgent R&amp;D race worth billions. Mining companies with DRC exposure face direct operational risk to cobalt and copper supply chains critical for EVs and electronics.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid vaccine development; potential emergency use authorization catalyst. <strong>BNTX</strong> (BioNTech) &mdash; similar capability; watch for WHO partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir explored for Ebola treatment. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefense contractor with Ebola countermeasure experience. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper operations face disruption. <strong>FQVLF</strong> (First Quantum Minerals) &mdash; DRC copper mine exposure. <strong>ABNB, BKNG</strong> (Airbnb, Booking) &mdash; African tourism vulnerable to travel advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EU EUROZONE GROWTH CUT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Economy / Energy Crisis &mdash; May 21&ndash;24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">European Commission Slashes Eurozone Growth to 0.9%, Hikes Inflation Forecast to 3% on Hormuz Energy Shock</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Commission delivered a stark downgrade to the eurozone&rsquo;s economic outlook, cutting the <strong>2026 GDP growth forecast to 0.9%</strong> &mdash; down from <strong>1.4%</strong> projected last autumn. The broader EU economy is expected to grow just <strong>1.1%</strong>. Simultaneously, the Commission <strong>hiked its inflation forecast to 3.0%</strong> for the eurozone (3.1% across the EU), a <strong>full percentage point above</strong> its previous projection. The cause is unambiguous: the <strong>Strait of Hormuz energy shock</strong> from the Iran conflict.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Europe is experiencing a <strong>stagflationary squeeze</strong> &mdash; falling growth with rising prices &mdash; that echoes the 2022 energy crisis but is arriving on top of an already fragile recovery. Public deficits are widening as governments spend to shield households from energy bills while simultaneously <strong>boosting defence expenditure</strong> amid geopolitical instability. The ECB is trapped: cutting rates would fuel inflation, while holding rates crushes an already stagnant economy. Germany, Europe&rsquo;s largest economy, is particularly exposed given its energy-intensive industrial base.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Stagflation is the worst-case scenario for equity markets &mdash; it compresses margins (rising costs) while shrinking revenue (falling demand). European exporters face a double hit from weak domestic demand and a stronger dollar making exports less competitive. Defence stocks remain the standout exception as fiscal spending increases.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>EZU</strong> (iShares MSCI Eurozone ETF) &mdash; broad eurozone equity exposure under pressure. <strong>BASF (BAS.DE)</strong> &mdash; Germany&rsquo;s chemical giant heavily exposed to energy costs; potential earnings downgrade. <strong>RHM.DE</strong> (Rheinmetall) &mdash; European defence spending surge makes this a rare bright spot. <strong>SAP.DE</strong> (SAP) &mdash; Europe&rsquo;s most valuable tech company; resilient but faces valuation compression from higher rates. <strong>DB</strong> (Deutsche Bank) &mdash; European banking sector caught between weak loan demand and rising provisions. <strong>EUFN</strong> (iShares MSCI Europe Financials ETF) &mdash; bank-heavy ETF vulnerable to stagflation scenario.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: QUAD FOREIGN MINISTERS SUMMIT IN INDIA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Geopolitics / Supply Chains &mdash; May 23&ndash;26</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Quad Foreign Ministers Convene in India: Critical Minerals, Supply Chain Diversification, and Indo-Pacific Security</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Foreign ministers from the <strong>United States, India, Japan, and Australia</strong> gathered in <strong>New Delhi</strong> for a high-level Quad meeting, with U.S. Secretary of State <strong>Marco Rubio</strong> arriving May 23 for bilateral talks with Indian External Affairs Minister <strong>S. Jaishankar</strong> and National Security Advisor <strong>Ajit Doval</strong>. The summit, hosted by India, focused on <strong>critical minerals supply chain diversification</strong> &mdash; a direct challenge to China&rsquo;s dominance over rare earths and strategic minerals essential for semiconductors, EVs, and defense systems.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The meeting is a preparatory session for the <strong>Quad Leaders&rsquo; Summit</strong> expected later in 2026. Key agenda items included <strong>Indo-Pacific maritime security</strong> (particularly in the South China Sea), <strong>technology cooperation</strong>, and coordinated infrastructure investment to counter China&rsquo;s Belt and Road Initiative. Rubio described India as &ldquo;at the heart&rdquo; of U.S. Indo-Pacific strategy. The summit comes amid growing <strong>weaponisation of critical mineral supply chains by China</strong>, which controls over 60% of global rare earth processing and recently imposed export restrictions on gallium and germanium.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Quad&rsquo;s critical minerals focus signals accelerating &ldquo;friendshoring&rdquo; of supply chains away from China. This creates long-term winners in non-Chinese mining and processing, while adding geopolitical risk premium to Chinese tech and mineral exports. Indian equities benefit from elevated strategic importance.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MP</strong> (MP Materials) &mdash; only integrated rare earth mining &amp; processing company in the Western Hemisphere; direct beneficiary of supply chain diversification. <strong>LAC</strong> (Lithium Americas) &mdash; positioned to benefit from Quad-backed critical mineral agreements. <strong>INDA</strong> (iShares MSCI India ETF) &mdash; India&rsquo;s strategic positioning as Quad anchor drives long-term FDI inflows. <strong>RELIANCE.NS</strong> (Reliance Industries) &mdash; India&rsquo;s largest conglomerate benefits from deepening U.S.-India economic ties. <strong>002460.SZ</strong> (Ganfeng Lithium) &mdash; Chinese lithium giant faces risk from Quad-led supply chain restructuring. <strong>TSM</strong> (TSMC) &mdash; semiconductor supply chain resilience is a core Quad priority; Taiwan&rsquo;s chipmaker remains strategically critical.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The dominant story this week is a potential inflection point on oil.</strong> If Iran-U.S. talks produce a real deal, oil below $80 by year-end would relieve inflation globally, give central banks room to cut, and trigger a massive rotation from energy into growth and consumer stocks. But the market rightly assigns only ~40% probability &mdash; a collapse in talks would send crude screaming back above $110 and deepen the stagflationary trap Europe is already caught in.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Turkey&rsquo;s judicial coup against the CHP is the biggest emerging-market political shock in months.</strong> The 6% BIST crash, $6B central bank intervention, and expected rate hike to 40% signal a country burning through reserves to defend an increasingly authoritarian political order. Contagion to broader EM sentiment is already visible. European banks with Turkish exposure (BBVA, ING) are collateral damage.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Ebola PHEIC is an underpriced tail risk.</strong> The Bloomberg revelation that the outbreak started &ldquo;months ago&rdquo; undetected, combined with the Bundibugyo strain having no vaccine, makes this more dangerous than prediction markets currently price. Watch for spread beyond DRC/Uganda borders &mdash; any confirmed case in a major hub city outside Central Africa would trigger a violent market reaction.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Iran deal deadline and Hormuz reopening timeline &bull; Turkey CHP response and further market intervention &bull; Ebola cases in Kinshasa and cross-border spread &bull; ECB June rate decision amid stagflation trap &bull; Quad Leaders&rsquo; Summit deliverables on critical minerals &bull; U.S. Treasury yields and Fed Chair Warsh&rsquo;s policy signals
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNBC &bull; Bloomberg &bull; Reuters &bull; WHO &bull; CDC &bull; European Commission &bull; Euronews &bull; NPR &bull; Turkish Minute &bull; JPMorgan &bull; Wood Mackenzie &bull; ANI News &bull; Polymarket &bull; Xinhua &bull; Investing.com &bull; ECDC &bull; India TV News
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

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
