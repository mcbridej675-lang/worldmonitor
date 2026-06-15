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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Global Events &mdash; 24-Hour Market Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Equities &bull; Commodities &bull; Risk Assessment</p>
    </div>

    <!-- ===================== EVENT 1: US-IRAN PEACE DEAL / HORMUZ REOPENS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Peace Deal Reached: Strait of Hormuz Reopens After 107-Day Blockade; Oil Crashes 5%, Global Equities Surge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump announced the US-Iran peace deal is &ldquo;now complete,&rdquo; authorizing the <strong>toll-free reopening of the Strait of Hormuz</strong> and the <strong>immediate removal of the US naval blockade</strong> of Iranian ports. Iran&rsquo;s Supreme National Security Council confirmed the sides finalized a memorandum of understanding, mediated in part by Pakistani PM Shehbaz Sharif. A <strong>formal signing is expected June 19 in Geneva</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The deal includes a <strong>60-day extension of the Lebanon ceasefire</strong>, creating a window for negotiations on Iran&rsquo;s nuclear program and the lifting of US sanctions. However, the Pentagon estimates full minesweeping operations could take <strong>up to six months</strong> even with three dedicated vessels in the region. Analysts expect most oil and gas shipments to resume by end of Q3 2026. The Strait had been effectively closed since early March, disrupting <strong>~20% of global oil supply</strong> and sending Brent crude above $100 for months.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude crashed 5.19% to $82.80. WTI fell 5.51% to $80.20. Heating oil tumbled 17%. Gasoline futures dropped 10%. <strong>Equities:</strong> Massive global risk-on rally &mdash; Nikkei 225 soared +5.5% (breaking 69,000 for the first time), KOSPI jumped +5.7%, S&amp;P 500 +1.65% to 7,554, Nasdaq +3.07% to 26,684, Dow +0.92% to record 51,671.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DAL (Delta, +6% on lower jet fuel), UAL, AAL (airlines broadly rallying) &bull; Consumer discretionary &bull; Industrials &bull; Tech (Nasdaq-100 +3.15%) &bull; Western Digital (+13.8%), DoorDash (+11.87%), Micron (+9.24%)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM, CVX, COP (oil majors sliding on crude collapse) &bull; XLE (energy sector) &bull; HAL, SLB (oil services) &bull; LMT, RTX, NOC (defense stocks losing geopolitical premium)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA STRIKES KYIV / PECHERSK LAVRA BURNS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Eastern Europe / Conflict / Culture &mdash; June 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Launches 611 Drones and 70 Missiles at Kyiv; UNESCO World Heritage Pechersk Lavra Cathedral Set Ablaze</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In one of the largest aerial assaults of the entire war, Russia launched <strong>70 missiles and 611 drones</strong> overnight June 14&ndash;15, primarily targeting Kyiv. A Shahed-type drone struck the roof of the <strong>Dormition Cathedral at the Kyiv-Pechersk Lavra</strong> &mdash; an 11th-century UNESCO World Heritage monastery complex considered one of the holiest sites in the Orthodox world. The cathedral roof caught fire. At least <strong>10 people were killed</strong> nationwide, including rescue workers in Kharkiv.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Over <strong>42,000 Kyiv residents, including 3,400 children</strong>, sheltered in the metro system. Russia notably used Iskander-K missiles instead of the usual Kalibr cruise missiles. The deliberate targeting of a <strong>950-year-old UNESCO site</strong> is expected to intensify calls from European capitals for additional sanctions and military aid. The unprecedented scale of 611 drones in a single night demonstrates Russia&rsquo;s rapidly expanding drone production capacity.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Defense:</strong> European rearmament narrative reinforced despite the Iran-deal peace dividend. EUR faces continued geopolitical risk discount vs. USD. Wheat futures may see volatility on continued Black Sea shipping route threats. Ukrainian sovereign bonds remain deeply distressed.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Rheinmetall (RHM.DE), BAE Systems (BA.L), Thales (HO.PA), Leonardo (LDO.MI) &mdash; European defense rearmament &bull; LMT, RTX, NOC &mdash; munitions and air defense demand &bull; Wheat and grain futures sensitive to Black Sea disruption<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> European airlines with Eastern European routes &bull; Ukrainian sovereign debt &bull; Euro under mild pressure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: PENTAGON BLACKLISTS ALIBABA, BYD, BAIDU ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">US-China / Trade / Technology &mdash; June 9&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Blacklists 188 Chinese Firms Including Alibaba, BYD, and Baidu as &ldquo;Chinese Military Companies&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US Department of Defense designated <strong>188 Chinese companies</strong> as &ldquo;Chinese Military Companies&rdquo; under Section 1260H of the NDAA, up from 134 the prior year. The most significant additions include <strong>Alibaba</strong> (China&rsquo;s largest e-commerce company), <strong>BYD</strong> (the world&rsquo;s largest EV maker), <strong>Baidu</strong> (China&rsquo;s leading search/AI company), <strong>NIO</strong> (EV maker), and <strong>WuXi AppTec</strong> (pharmaceutical services).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Starting <strong>June 30, 2026</strong>, the DoD is prohibited from direct contracts with these companies, with indirect procurement bans via third parties beginning June 2027. Alibaba denied military ties and threatened legal action; BYD called the designation unjustified. This represents a <strong>dramatic escalation of US-China economic decoupling</strong>, moving beyond chip restrictions to target mainstream consumer-facing companies. The timing &mdash; days before an expected Trump-Xi meeting &mdash; suggests it may also function as a negotiating lever.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>China equities:</strong> Hang Seng Tech Index under pressure. Chinese ADRs in US markets fell: BIDU -2.1%, BABA -0.8%, BYDDY -0.8%. USD/CNY may face upward pressure (weaker yuan). Partially offset in broader markets by the Iran deal rally.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> BABA/9988.HK (Alibaba) &bull; BIDU/9888.HK (Baidu) &bull; 1211.HK/BYDDY (BYD, down 37% over 12 months) &bull; NIO/9866.HK &bull; WuXi AppTec (2359.HK) &bull; KWEB (China internet ETF)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> TSLA, RIVN (rival Western EV makers benefit from supply chain diversion) &bull; AMZN, MSFT (cloud computing alternatives to Alibaba) &bull; Western pharma services firms
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: SWITZERLAND REJECTS POPULATION CAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Politics / Immigration &mdash; June 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Switzerland Rejects Right-Wing Population Cap 55&ndash;45%: EU Free Movement Preserved, Business Groups Relieved</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Swiss voters rejected the <strong>&ldquo;No to Ten Million Switzerland&rdquo; initiative</strong> by 55% to 45% in a closely watched referendum. The initiative, championed by the <strong>Swiss People&rsquo;s Party (SVP)</strong>, would have capped permanent residents at 10 million by 2050. Had the population reached 9.5 million before then, the government would have been forced to restrict asylum, family reunification, and residency permits &mdash; and potentially <strong>scrap Switzerland&rsquo;s bilateral agreement with the EU on free movement</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Swiss business community had been vocal in opposition, warning of severe <strong>labor shortages and economic damage</strong>. A &ldquo;yes&rdquo; vote would have threatened the entire Switzerland-EU bilateral framework and cut off Switzerland&rsquo;s largest trading partner. The vote is a bellwether for the broader European immigration debate &mdash; the 45% &ldquo;yes&rdquo; vote shows anti-immigration sentiment remains potent even as economic arguments prevail. SVP president Marcel Dettling noted the initiative was popular in rural areas but defeated by urban voters.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Swiss franc:</strong> CHF stability preserved (EUR/CHF at 0.9187). A &ldquo;yes&rdquo; vote would have caused significant franc volatility and capital flight concerns. SMI index relieved. Swiss GDP outlook still constrained at 0.9% (down from 1.2%) due to US tariffs (39% rate) and franc strength, but the vote avoids an additional self-inflicted wound.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Nestl&eacute; (NESN.SW), Novartis (NOVN.SW), Roche (ROG.SW), UBS (UBSG.SW), ABB (ABBN.SW) &mdash; all depend on EU labor mobility &bull; Swiss hospitality/tourism sector avoids seasonal labor disruption<br/>
            <strong>Neutral:</strong> Broader European markets unaffected; status quo preserved
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: ISRAEL-HEZBOLLAH ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Middle East / Security / Diplomacy &mdash; June 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Strikes Beirut, Hezbollah Launches Drones at Northern Israel Hours Before Iran Deal &mdash; Ceasefire Fragility Exposed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a dangerous escalation that nearly derailed the US-Iran peace framework, <strong>Hezbollah launched multiple attack drones into northern Israel</strong> on June 14 (four since Friday, with one shot down). Hours later, <strong>Israel struck a Hezbollah command center in Beirut&rsquo;s Dahiyeh district</strong>, confirmed by PM Netanyahu and Defense Minister Katz. Iran vowed the Israeli strike &ldquo;would not go unanswered.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The exchange occurred just hours before the US-Iran MOU was announced, raising critical questions about whether the ceasefire framework can hold. <strong>Israel has stated it will not withdraw from Lebanon</strong> despite the agreement, and Israeli forces currently occupy roughly <strong>one-fifth of Lebanese territory</strong>. Defense Minister Katz declared Israel plans to stay &ldquo;indefinitely&rdquo; in lands it holds in Lebanon, Syria, and Gaza. This is the critical fault line in the broader Iran deal &mdash; if Israel-Hezbollah hostilities cannot be contained within the 60-day ceasefire window, the Strait of Hormuz reopening and its positive economic effects could be reversed.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Risk premium:</strong> Oil futures through Feb 2027 remain ~$80, suggesting markets are not fully pricing in durable peace. Israeli shekel (ILS) under pressure from continued security spending. TA-35 mixed &mdash; relief from Iran deal offset by Lebanon front risk. Lebanese pound remains in deep crisis.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> ESLT (Elbit Systems &mdash; Iron Dome, anti-drone demand) &bull; RTX (Raytheon &mdash; Iron Dome component supplier) &bull; Insurance/reinsurance firms benefiting from elevated war risk premiums in Eastern Mediterranean<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Regional airlines/shipping with Lebanese/Israeli airspace exposure &bull; Israeli consumer stocks facing security-spending crowding out
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran deal is the dominant macro catalyst &mdash; but execution risk is enormous.</strong> Oil crashing 5% in a single session has flipped the energy trade &mdash; airlines and consumer discretionary are surging while oil majors and defense stocks give back geopolitical premium. However, the 60-day ceasefire window is fragile: Israel-Hezbollah hostilities are ongoing, mines remain in the Strait, and full oil flow normalization is months away. Oil futures beyond Q3 staying near $80 show the market is hedging against deal collapse.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">US-China decoupling just widened dramatically.</strong> The Pentagon blacklisting Alibaba, BYD, and Baidu moves beyond semiconductors into mainstream consumer companies. This creates opportunities for Western competitors (Tesla, Amazon, Microsoft) but introduces supply chain uncertainty for companies dependent on Chinese partners. The 188-company list forces European and Asian allies to choose sides.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Central bank week ahead is pivotal.</strong> The Bank of Japan is expected to hike to 1% (highest since 1995) on June 15&ndash;16 despite Governor Ueda&rsquo;s absence due to hospitalization. The US Fed decision follows mid-week. Lower oil prices from the Iran deal provide central banks breathing room on inflation, but the yen&rsquo;s weakness and persistent core inflation complicate the picture. Watch USD/JPY closely as the BOJ moves.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 15, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">7,554.29 (+1.65%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq Composite</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">26,683.94 (+3.07%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">51,671.03 (+0.92%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">69,317.50 (+5.5%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+5.7%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TAIEX (Taiwan)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.7%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">ASX 200</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.5%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$82.80 (-5.19%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$80.20 (-5.51%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Heating Oil</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-17%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">EUR/CHF</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">0.9187</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNBC &bull; TheStreet &bull; CBC News &bull; TechTimes &bull; Trading Economics &bull; PBS News &bull; Bloomberg &bull; NPR &bull; Kyiv Independent &bull; CNN &bull; US News &bull; The Japan Times &bull; Newsweek &bull; Havana Times &bull; Schwab Market Update &bull; South China Morning Post &bull; Epoch Times &bull; Euronews
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Global Daily Intelligence Briefing — ${today}`,
  html,
});

try {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_KEY}`,
    },
    body: payload,
  });
  const body = await res.text();

  if (!res.ok) {
    console.error(`Resend API error ${res.status}: ${body}`);
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
