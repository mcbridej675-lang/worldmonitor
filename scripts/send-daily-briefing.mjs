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

    <div style="background: #0d0d0d; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        Today&rsquo;s briefing is dominated by <strong style="color: #fff;">Iran&rsquo;s abrupt re-closure of the Strait of Hormuz</strong>, threatening the fragile US-Iran peace deal signed just 48 hours ago. Elsewhere, Colombia heads to a historic presidential runoff, Europe&rsquo;s defense ambitions suffer a major blow, Taiwan&rsquo;s AI-powered economy surges to near-double-digit growth, and China&rsquo;s diplomatic offensive reshapes Asian geopolitics.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 20, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">26,517.93 (+1.08%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">7,500.58 (+1.91%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">51,564.70 (+0.14%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Stoxx 600</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.2%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$77.33 (-21% month)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">US CPI (YoY)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">4.2% (highest since Apr &rsquo;23)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Fed Rate</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">3.50&ndash;3.75% (hawkish hold)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Intel (INTC)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$133.82 (+10.5%)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1: STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; June 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Re-Closes Strait of Hormuz After Israeli Strikes Violate Ceasefire &mdash; Fragile Peace Deal in Jeopardy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Just 48 hours after signing a historic Memorandum of Understanding with the United States at the Palace of Versailles, <strong style="color: #fff;">Iran declared the Strait of Hormuz closed again on June 20</strong>, citing Israeli overnight strikes on southern Lebanon as a direct violation of the ceasefire terms. The strait carries approximately <strong>13 million barrels per day</strong> of crude oil &mdash; roughly one-fifth of global consumption &mdash; and its closure represents the single largest supply disruption in oil market history according to the IEA.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The re-closure throws the fragile 60-day negotiation window (deadline: August 17) into immediate jeopardy. Iran has postponed Swiss-hosted negotiations. US CENTCOM had only just announced the end of its naval blockade on June 18, with a modest trickle of shipping resuming transit overnight. The MOU, signed by Trump and Iran&rsquo;s president, was approved by Supreme Leader Khamenei with the caveat that talks &ldquo;do not mean accepting US views.&rdquo; Japan routes <strong>70% of its Middle Eastern crude</strong> through Hormuz; China sends <strong>40% of its oil imports</strong> through the strait.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil &amp; Energy:</strong> Brent had fallen ~21% over the past month to $77/bbl on ceasefire optimism. The re-closure will likely reverse this sharply &mdash; the EIA projects <strong>$105/bbl average</strong> if the strait stays closed. US gasoline had fallen below $4.00/gallon for the first time since March; expect a reversal. US CPI already at 4.2% driven by a 23.5% energy price surge &mdash; re-closure makes Fed rate hikes more likely (9 of 18 FOMC members already project hikes before year-end).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XOM, CVX, SHEL, BP, TTE (TotalEnergies) &bull; SLB (Schlumberger), HAL (Halliburton) &bull; LMT, RTX, NOC (defense) &bull; GLD (gold safe-haven) &bull; USO (oil ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> DAL, UAL, LHA.DE (Lufthansa) &mdash; airlines face surging fuel costs &bull; MAERSK.CO, ZIM &mdash; shipping reroutes add cost &bull; 9501.T (Tokyo Electric), Asian refiners &mdash; acute supply risk &bull; Consumer discretionary broadly (inflation headwinds)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: COLOMBIA ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Latin America / Politics / Emerging Markets &mdash; June 20&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia&rsquo;s Presidential Runoff Tomorrow &mdash; Stock Market Surges 4% to Record High Ahead of Vote</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Colombia heads to a decisive presidential runoff on <strong style="color: #fff;">June 21</strong> between right-wing populist <strong>Abelardo de la Espriella</strong> (43.7% in round one) and left-wing Historic Pact candidate <strong>Iv&aacute;n Cepeda Castro</strong> (40.9%), backed by outgoing President Gustavo Petro. Colombia&rsquo;s benchmark stock index surged <strong>4.02%</strong> past 2,500 points to an all-time high ahead of the vote, driven by expectations of a de la Espriella victory.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The stakes are enormous: Cepeda has pledged to <strong>ban new oil exploration and mining permits</strong>, while de la Espriella promises pro-business reforms and deregulation. Prediction markets price a narrow de la Espriella win by 5&ndash;10 points, boosted by a Trump endorsement and a late surge on hardline security messaging. Deadly pre-election clashes have rattled the country. Colombia is Latin America&rsquo;s third-largest oil producer &mdash; a drilling ban would tighten an already strained global supply picture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>If de la Espriella wins:</strong> Colombian peso strengthens, Bogot&aacute; stock exchange extends rally, FDI flows into energy and mining. EM-focused ETFs benefit.<br/>
            <strong style="color: #22c55e;">&#9650;</strong> GXG (Global X MSCI Colombia ETF) &bull; EC (Ecopetrol, NYSE-listed state oil company)<br/><br/>
            <strong>If Cepeda wins:</strong> Sharp selloff in Colombian equities, peso depreciation, capital flight from mining/energy. Broader EM contagion possible given fragile global sentiment.<br/>
            <strong style="color: #ef4444;">&#9660;</strong> EC, GXG &bull; Global mining companies with Colombian exposure face binary risk<br/><br/>
            <strong>P/E ratio of 7.9</strong> on Colombian equities suggests valuations are pricing in a pro-business outcome. Any surprise will generate outsized moves.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: FCAS COLLAPSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Defense / Industrial &mdash; June 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">France &amp; Germany Kill &euro;115 Billion Joint Fighter Jet Program &mdash; European Defense Autonomy Suffers Major Blow</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          France and Germany officially terminated the <strong style="color: #fff;">Future Combat Air System (FCAS)</strong>, their landmark next-generation fighter jet project valued at approximately <strong>&euro;115 billion</strong>. Dassault Aviation, Airbus Defence, and their subcontractors could not reach agreement on work-share, intellectual property rights, or the development roadmap for the sixth-generation fighter.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The collapse comes at the worst possible time: US Defense Secretary Hegseth simultaneously announced a <strong>six-month review of American forces in Europe</strong>, criticizing NATO allies for insufficient spending. NATO Secretary General Rutte has set a target of <strong>5% of GDP by 2035</strong>. The EU also faces a July 4 deadline to bring its US trade agreement into force or face significantly higher tariffs &mdash; adding further transatlantic strain. Both France and Germany plan to salvage component technologies and pursue smaller &ldquo;realistic&rdquo; joint projects.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Defense restructuring:</strong> The FCAS collapse forces Europe to find alternative paths to next-gen air power. Individual national programs or new partnerships become likely.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> BA (Boeing &mdash; may sell more to European allies) &bull; LMT (Lockheed &mdash; F-35 orders increase as stopgap) &bull; SAAB.ST (Saab &mdash; Gripen gains appeal) &bull; BA.L (BAE Systems &mdash; UK/Japan/Italy Tempest/GCAP program gains relative advantage)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> AIR.PA (Airbus &mdash; defence division loses flagship program) &bull; AM.PA (Dassault Aviation &mdash; significant revenue pipeline evaporates)<br/><br/>
            <strong>Broader:</strong> European defense ETFs (DFNS.L) face near-term volatility but longer-term tailwinds as individual nations ramp spending toward NATO&rsquo;s 5% target.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: TAIWAN AI BOOM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Technology / Semiconductors &mdash; June 19&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Taiwan&rsquo;s Central Bank Raises GDP Forecast to 9.45% on AI Chip Boom &mdash; Intel Surges 10.5% on Apple Deal</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s central bank dramatically raised its 2026 GDP growth forecast from <strong style="color: #fff;">7.25% to 9.45%</strong>, driven by surging global demand for AI semiconductors and a record export pipeline. Taiwan&rsquo;s economy &mdash; the world&rsquo;s most critical node in the semiconductor supply chain &mdash; is experiencing its fastest growth in decades as hyperscaler spending on AI infrastructure shows no signs of slowing. Japan&rsquo;s May exports also grew at their fastest pace in over three years, led by chip demand.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, Intel announced production on its advanced <strong>18A process node</strong>, and President Trump confirmed on Truth Social that Apple has agreed to work with Intel to manufacture chips domestically. Intel shares surged <strong>10.5% to $133.82</strong> &mdash; from below $20 at the start of the year, one of the most dramatic large-cap rallies in history. However, TSMC retains more than 90% of Apple&rsquo;s chip production; the Intel deal covers lower-end chips only. Taiwan&rsquo;s President Lai reiterated calls for talks with China based on &ldquo;parity and respect&rdquo; &mdash; cross-strait risk remains a key tail risk.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Semiconductor supply chain validation:</strong> Taiwan&rsquo;s AI-driven boom validates the multi-year capex cycle. Intel&rsquo;s foundry business gains credibility with the Apple deal, but TSMC remains dominant.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> INTC (Intel, +10.5% &mdash; foundry validation) &bull; TSM (TSMC &mdash; dominant AI chip manufacturer) &bull; NVDA (NVIDIA &mdash; AI infra demand driver) &bull; ASML (lithography equipment) &bull; AVGO (Broadcom &mdash; custom AI chip designer) &bull; 2330.TW (TSMC Taiwan)<br/>
            <strong>Watch:</strong> AAPL (Apple &mdash; minimal stock move but supply chain diversification is strategically significant for reducing Taiwan concentration risk)<br/><br/>
            <strong>Macro:</strong> Taiwan dollar faces appreciation pressure. Cross-strait tensions with China remain the key tail risk for the entire AI supply chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CHINA DIPLOMACY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Asia / Geopolitics / Diplomacy &mdash; June 15&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Xi Jinping&rsquo;s Diplomatic Blitz: North Korea Summit, Myanmar State Visit, and Warning Against US-Japan Nuclear Talks</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese President Xi Jinping conducted a high-profile diplomatic offensive in June, visiting <strong style="color: #fff;">Pyongyang (June 8&ndash;9)</strong> to celebrate the &ldquo;unbreakable&rdquo; China-DPRK bond with Kim Jong Un, and hosting Myanmar&rsquo;s military leader <strong>Min Aung Hlaing</strong> for a state visit in Beijing (June 15&ndash;19). Xi also held talks with Lao leader Thongloun Sisoulith, signaling China&rsquo;s intensifying grip on Southeast Asian alignment.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The diplomatic blitz is strategically timed: while the US is consumed by the Iran conflict and domestic politics, China is positioning itself as the stabilizing force in Asia. Beijing issued <strong>strong warnings</strong> against the US-Japan-South Korea extended nuclear deterrence dialogue (June 8&ndash;9), calling expanded nuclear cooperation a proliferation risk. Meanwhile, the Philippines and Vietnam upgraded their partnership to counter Chinese maritime claims in the South China Sea. Chinese startups raised <strong>$16.5 billion in Q1 2026</strong> alone, led by AI companies StepFun, Moonshot AI, and Galaxy Bot.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical realignment:</strong> China&rsquo;s deepening ties with North Korea and Myanmar raise risk premiums across Asian equities, particularly for companies exposed to cross-strait or South China Sea tensions.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> BABA, 9988.HK (Alibaba &mdash; Chinese AI boom) &bull; BIDU (Baidu &mdash; AI leader) &bull; Chinese defense stocks (Shanghai/Shenzhen) &bull; ASEAN defense spending beneficiaries<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWJ (iShares Japan ETF &mdash; nuclear deterrence tensions) &bull; EWY (iShares S. Korea ETF) &bull; EWT (iShares Taiwan ETF &mdash; cross-strait risk) &bull; Companies with Myanmar supply chain exposure face ESG scrutiny<br/><br/>
            <strong>Macro:</strong> World Bank projects global growth slowing from 2.9% to 2.5% in 2026 &mdash; China&rsquo;s domestic pivot matters enormously. The Philippines-Vietnam partnership upgrade could accelerate ASEAN defense spending.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy is the macro wildcard again.</strong> The Strait of Hormuz re-closure is the single most important variable in global markets right now. Oil had corrected 21% on peace deal optimism &mdash; a sustained re-closure would erase those gains and push Brent back toward $105. Energy longs (XLE, XOM, CVX, SHEL) are well-supported while airlines and consumer discretionary face renewed headwinds. Gold&rsquo;s safe-haven bid is intact.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The AI semiconductor theme remains the strongest structural story.</strong> Taiwan&rsquo;s near-double-digit GDP growth is driven almost entirely by chip exports. Intel&rsquo;s 10.5% surge on the Apple deal validates the US reshoring narrative, but TSMC&rsquo;s dominance is unchallenged. Cross-strait risk is the sector&rsquo;s single biggest tail risk.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Tomorrow&rsquo;s Colombia runoff is a binary event for EM investors.</strong> A de la Espriella win extends the rally; a Cepeda upset triggers a selloff that could spread to broader EM sentiment. European defense is being restructured &mdash; the FCAS collapse creates winners (BAE, Lockheed, Saab) and losers (Airbus Defence, Dassault). Watch the EU-US trade deadline (July 4) for the next transatlantic flashpoint.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NBC News &bull; Bloomberg &bull; CNBC &bull; Al Jazeera &bull; PBS News &bull; CNN &bull; Britannica &bull; Brookings Institution &bull; Defense News &bull; Breaking Defense &bull; Yahoo Finance &bull; CBS News &bull; The Asia Cable &bull; Fortune &bull; Investing.com &bull; ACLED &bull; Rio Times &bull; Polymarket &bull; World Bank &bull; CaixaBank Research &bull; IMF &bull; EIA &bull; Times of Israel &bull; Washington Times &bull; UPI &bull; UNCTAD &bull; TechTimes
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

import { execSync } from 'node:child_process';

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Global Daily Intelligence Briefing — ${today}`,
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
