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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Health &bull; Latin America &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: XI-PUTIN BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Great-Power Diplomacy / China&ndash;Russia / Energy &mdash; May 20&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Xi &amp; Putin Sign 40+ Agreements at Beijing Summit; Denounce Western-Led Order but Fail on Key Energy Pipeline</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese President <strong>Xi Jinping</strong> hosted Russian President <strong>Vladimir Putin</strong> in Beijing for a two-day summit that produced approximately <strong>40 cooperation agreements</strong> spanning trade, technology, nuclear energy, education, and media. The two leaders signed a joint declaration calling for a <strong>&ldquo;multipolar world and a new type of international relations,&rdquo;</strong> directly challenging the Western-led global order. China and Russia agreed to deepen military trust, including expanding <strong>joint exercises, air patrols, and maritime patrols</strong>. China extended its <strong>visa-free travel policy</strong> for Russian citizens through the end of 2027.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, the summit <strong>failed to produce a breakthrough</strong> on the critical <strong>Power of Siberia 2 natural gas pipeline</strong>, which Moscow had flagged would be &ldquo;discussed in great detail.&rdquo; This signals limits on the partnership&rsquo;s deepening despite warm optics. On <strong>Taiwan</strong>, Moscow reaffirmed its support for the &ldquo;One China principle.&rdquo; On <strong>Iran</strong>, Xi called for an end to the war while supporting Russia&rsquo;s sovereignty. Separately, Xi is reportedly <strong>planning a visit to North Korea</strong> next week to mediate between Trump and Kim Jong Un, further signaling Beijing&rsquo;s expanding diplomatic ambitions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The summit deepens the bifurcation of global trade and supply chains. The Power of Siberia 2 failure keeps European natural gas markets tight and signals Beijing&rsquo;s reluctance to deepen energy dependence on Moscow. The 40+ agreements accelerate de-dollarisation in bilateral trade, pressuring the dollar&rsquo;s reserve status long-term.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>GAZP.ME</strong> (Gazprom) &mdash; pipeline failure is bearish; revenue diversification away from Europe stalling. <strong>TTF</strong> (European natural gas futures) &mdash; Siberia 2 delay keeps supply constrained; bullish. <strong>BABA, JD</strong> (Alibaba, JD.com) &mdash; expanded China-Russia trade agreements could boost cross-border e-commerce. <strong>2899.HK</strong> (Zijin Mining) &mdash; deepened resource cooperation benefits Chinese miners with Russian access. <strong>NOVATEK (NVTK.ME)</strong> &mdash; Russian LNG producer faces continued infrastructure bottlenecks. <strong>DXY</strong> (Dollar Index) &mdash; de-dollarisation rhetoric adds long-term pressure.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EBOLA OUTBREAK ACCELERATING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 20&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">DRC Ebola Outbreak Surges to 650+ Cases and 160 Deaths; African Union Postpones India Summit</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Ebola outbreak in the <strong>Democratic Republic of the Congo</strong> is accelerating rapidly. Updated figures from the DRC Ministry of Health now report over <strong>650 suspected cases</strong>, <strong>64 confirmed cases</strong>, and at least <strong>160 deaths</strong> &mdash; sharply up from the 246 suspected cases and 80 deaths reported when the WHO declared a <strong>PHEIC (Public Health Emergency of International Concern)</strong> on May 17. The outbreak has spread across <strong>11 health zones</strong> in Ituri Province and has now reached <strong>Nord-Kivu Province</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Uganda</strong> has confirmed two cases linked to DRC travellers, including <strong>one death in Kampala</strong>. The outbreak involves the rare <strong>Bundibugyo strain</strong>, for which <strong>no approved vaccine or treatment exists</strong>, making containment critical. The <strong>African Union&ndash;India Summit</strong> scheduled for New Delhi has been <strong>postponed</strong> due to the outbreak &mdash; a sign of its diplomatic impact. Healthcare workers report being <strong>underprotected and undertrained</strong>. The CDC has mobilised an international response team. This is only the <strong>8th PHEIC</strong> in WHO history.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Case counts nearly tripling in one week signals the outbreak is not contained. The Bundibugyo strain&rsquo;s lack of vaccine creates an urgent R&amp;D race worth billions. Mining companies with DRC exposure face operational risk as the outbreak spreads into Nord-Kivu, a key mining region. AU-India summit postponement signals broader economic disruption across Africa.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid Bundibugyo vaccine development; emergency use authorization potential. <strong>BNTX</strong> (BioNTech) &mdash; similar mRNA capability; watch for WHO partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir explored for Ebola; therapeutic upside. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefense contractor with Ebola countermeasure history. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper mining at risk from Nord-Kivu spread. <strong>CMCL</strong> (Caledonia Mining) &mdash; Southern African mining sentiment weakens. <strong>BKNG, ABNB</strong> &mdash; African tourism bookings vulnerable to travel advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: IRAN NUCLEAR DEADLOCK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Nuclear Proliferation / Middle East / Energy &mdash; May 21&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Khamenei Bans Uranium Export from Iran; Parliament Votes on Bounty Bill &mdash; Nuclear Talks Near Collapse</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran&rsquo;s Supreme Leader <strong>Mojtaba Khamenei</strong> has issued a directive ruling that Iran&rsquo;s stockpile of <strong>near-weapons-grade enriched uranium must remain inside the country</strong>, directly contradicting Washington&rsquo;s central demand. Trump responded: <strong>&ldquo;We&rsquo;ll probably destroy it after we get it, but we&rsquo;re not going to let them have it.&rdquo;</strong> Pakistani mediators are attempting to bridge the gap, but the positions appear irreconcilable. Both sides claim &ldquo;progress&rdquo; while officials <strong>have not met face-to-face since April 12</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a further escalation, <strong>Iran&rsquo;s parliament is voting on a bill offering &euro;50 million</strong> as a reward for killing Trump and Israeli PM Netanyahu &mdash; a largely symbolic but inflammatory gesture that poisons the diplomatic atmosphere. Crude flows through the <strong>Strait of Hormuz remain constrained</strong>. <strong>Brent crude</strong> traded near <strong>$105/barrel</strong> on Friday, with WTI in the upper-$90s. The energy supply crunch continues to be the primary driver of global inflation, with the IEA warning markets could remain <strong>&ldquo;severely undersupplied until October.&rdquo;</strong>
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Khamenei&rsquo;s directive removes the most plausible path to a deal, extending the energy crisis through summer at minimum. Oil above $100 creates stagflationary pressure globally &mdash; hurting consumer sectors while boosting energy producers. The &euro;50M bounty bill, while symbolic, will trigger additional sanctions and risk-premium repricing.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>SHEL</strong> (Shell), <strong>TTE</strong> (TotalEnergies) &mdash; all benefit from elevated crude; European majors especially strong with Brent exposure. <strong>SLB, HAL</strong> (SLB, Halliburton) &mdash; oilfield services demand surging. <strong>DAL, UAL, AF.PA</strong> (Delta, United, Air France-KLM) &mdash; jet fuel costs crushing airline margins globally. <strong>DANGCEM.NG</strong> (Dangote Cement/Refinery) &mdash; Nigeria&rsquo;s mega-refinery emerging as critical alternative supplier. <strong>URA</strong> (Global X Uranium ETF) &mdash; nuclear energy renaissance accelerates as fossil fuel reliability questioned.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: BOLIVIA POLITICAL CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Latin America / Political Crisis / Commodities &mdash; May 19&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Bolivia&rsquo;s Capital Under Siege: Worst Economic Crisis in 40 Years Triggers Mass Protests; Cabinet Reshuffled</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Bolivia is spiralling into its <strong>worst economic crisis in 40 years</strong>. President <strong>Rodrigo Paz</strong> &mdash; less than six months into his presidency &mdash; faces escalating unrest after the government <strong>ended fuel subsidies</strong>, driving up gasoline and diesel prices. The situation worsened when the state imported <strong>low-quality gasoline</strong> that damaged vehicles, sparking transport worker strikes and the <strong>resignation of two senior officials</strong> at the state-owned oil company. Year-on-year <strong>inflation hit 14%</strong> in April.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Farmers, miners, teachers, public sector workers, and Indigenous communities</strong> have converged on La Paz. Two weeks of road closures have <strong>emptied markets</strong> and <strong>depleted hospital oxygen reserves</strong>, with at least <strong>three people dying</strong> after emergency vehicles were blocked. Allies of former president <strong>Evo Morales</strong> are clashing with police as unrest widens. Paz announced a <strong>cabinet reshuffle</strong> and emergency measures, but the COB (Bolivian Workers&rsquo; Central) is demanding wage increases, peasant unions want stable fuel supply, and miners want access to new mining areas &mdash; a fractured opposition making unified negotiations nearly impossible.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Bolivia holds the world&rsquo;s largest identified lithium reserves. Political instability threatens supply chains for the critical battery mineral at a time when global EV demand is accelerating. Road blockades are already disrupting mining operations and commodity exports. Latin American contagion risk rises as Argentina and Ecuador also face austerity protests.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ALB</strong> (Albemarle) &mdash; world&rsquo;s largest lithium producer; Bolivian supply disruption tightens global market. <strong>SQM</strong> (Sociedad Qu&iacute;mica y Minera) &mdash; Chilean lithium giant benefits from competitor nation instability. <strong>LTHM</strong> (Livent/Arcadium) &mdash; lithium price volatility directly impacts margins. <strong>LIT</strong> (Global X Lithium ETF) &mdash; broad exposure to lithium supply chain repricing. <strong>TSLA, BYD</strong> (Tesla, BYD) &mdash; EV battery input costs at risk from lithium supply shock. <strong>YPF</strong> (YPF S.A.) &mdash; Argentine energy company; LatAm contagion risk in energy sector.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL BOND ROUT & STOCK-BOND DIVERGENCE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Bond Markets / Macro &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Bond Rout Deepens: Japan 30-Year Yield Hits Record; Stock-Bond Divergence Rings Alarm Bells</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The global bond sell-off that began last week is intensifying. <strong>Japan&rsquo;s 30-year government bond yield</strong> surged to a <strong>record high</strong>, while the <strong>U.S. 10-year Treasury yield</strong> touched its <strong>highest level in a year</strong>. The sell-off is global: <strong>UK Gilts, German Bunds, and JGBs</strong> all saw yields rise sharply in sympathy. Markets ended a volatile week with investors balancing AI-driven optimism against rising oil prices, persistent inflation, and geopolitical uncertainty.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          What&rsquo;s alarming analysts is the <strong>growing divergence between stock and bond markets</strong>. Equities have continued rallying in 2026, driven by AI infrastructure spending and semiconductor demand, while bond markets are repricing for a <strong>&ldquo;higher for longer&rdquo;</strong> inflation environment. The disconnect is unsustainable: either bonds are wrong about inflation, or stocks are ignoring the risk. <strong>Brent crude near $105</strong> and persistent inflation make rate cuts unlikely. Emerging market currencies are under pressure from the strong dollar, with capital outflows accelerating from <strong>Asia and Latin America</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The stock-bond divergence historically resolves painfully &mdash; usually with equities correcting. Rising yields compress growth stock valuations via higher discount rates. Financials and energy outperform; REITs, utilities, and long-duration tech suffer. Japan&rsquo;s record yields threaten the yen carry trade, which could unwind global risk positions.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>JPM, HSBA.L, MUFG</strong> (JPMorgan, HSBC, Mitsubishi UFJ) &mdash; global banks benefit from sustained higher rates. <strong>TLT</strong> (iShares 20+ Year Treasury ETF) &mdash; long-duration bonds under severe pressure; contrarian entry point debated. <strong>NVDA, AVGO, TSM</strong> (NVIDIA, Broadcom, TSMC) &mdash; AI rally vs. bond-driven valuation compression creates a battleground. <strong>O, VNQI</strong> (Realty Income, Vanguard Global REIT ETF) &mdash; rate-sensitive real estate under pressure globally. <strong>EEM, FXI</strong> (Emerging Markets ETF, China Large-Cap ETF) &mdash; strong dollar and capital outflows create downside. <strong>GLD</strong> (Gold) &mdash; safe-haven demand rises but competes with yield on bonds.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The global order is actively being rewritten.</strong> The Xi-Putin summit&rsquo;s 40+ agreements represent the most concrete step yet toward a parallel economic system. But the Power of Siberia 2 failure reveals Beijing&rsquo;s limits &mdash; it wants partnership, not dependency. Meanwhile, Khamenei&rsquo;s uranium ban effectively kills the most plausible path to an Iran deal, extending the energy crisis through summer.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Health and political crises compound financial stress.</strong> Ebola cases nearly tripling in a week with no vaccine available is the fastest-growing risk no one is pricing in. Bolivia&rsquo;s collapse threatens lithium supply chains at the worst possible moment for the EV transition. The global bond rout&rsquo;s divergence from equity markets is a ticking time bomb.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Xi&rsquo;s reported visit to North Korea next week &bull; Ebola spread into Nord-Kivu mining region &bull; Iran parliament bounty vote &amp; Hormuz shipping flows &bull; Bolivia road blockade impact on lithium exports &bull; Japan 30-year yield trajectory &amp; yen carry trade unwind risk &bull; AI earnings vs. bond yield compression for mega-cap tech
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNBC &bull; WHO &bull; UN News &bull; CDC &bull; ReliefWeb &bull; Washington Post &bull; Washington Times &bull; Japan Times &bull; Novaya Gazeta Europe &bull; FDD &bull; Voice of Emirates &bull; NBC News &bull; Euronews &bull; ECDC
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
