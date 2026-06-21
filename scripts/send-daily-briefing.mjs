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

    <!-- ===================== EVENT 1: US-IRAN SWITZERLAND TALKS / STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Switzerland / Energy &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Talks Enter Critical Phase in Switzerland as Strait of Hormuz Reopening Hangs in the Balance</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          US Vice President <strong>JD Vance arrived in Switzerland</strong> for high-level face-to-face talks with Iranian officials, launching a critical <strong>60-day sprint</strong> to negotiate a permanent deal on Iran&rsquo;s nuclear program and formalize the reopening of the <strong>Strait of Hormuz</strong> &mdash; through which roughly <strong>14 million barrels of oil per day</strong> previously flowed. Pakistan has joined as a guarantor of the memorandum of understanding signed June 17.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, <strong>tensions remain razor-sharp</strong>. Trump threatened to strike Iran if Hezbollah continued &ldquo;causing trouble,&rdquo; while Iran&rsquo;s chief negotiator <strong>Mohammad Bagher Ghalibaf</strong> warned the US to &ldquo;be careful with their statements.&rdquo; Iran&rsquo;s deputy foreign minister told Al Jazeera that Tehran is &ldquo;ready to move forward&rdquo; but the US must ensure Israel abides by ceasefire terms. Oil markets have front-run the reopening &mdash; <strong>Brent fell ~10% on the week to ~$80/barrel</strong> &mdash; but analysts warn physical traffic through Hormuz remains minimal and <strong>mine-sweeping could take weeks</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude fell to ~$80.57, down nearly 10% on the week on reopening hopes. WTI at ~$77. Markets may be pricing in excessive optimism &mdash; physical Hormuz traffic remains a fraction of pre-war levels. Global equities broadly rising on de-escalation hopes; S&amp;P 500 at 7,501.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM (ExxonMobil), CVX (Chevron), SHEL (Shell) &mdash; oil majors under pressure as crude falls &bull; FRO (Frontline), EURN (Euronav) &mdash; tanker stocks volatile as shipping rates may normalize<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> DAL (Delta), UAL (United), RYAAY (Ryanair) &mdash; airlines benefit from lower fuel costs &bull; Broad equity indices on risk-on sentiment &bull; Consumer discretionary gaining on falling energy input costs
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: UKRAINE CRIMEA FUEL STRIKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Eastern Europe / Energy / Conflict &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine Strikes Devastate Crimean Fuel Infrastructure; Russia-Occupied Peninsula Halts All Civilian Gasoline Sales</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Officials in Russia-occupied Crimea <strong>suspended all civilian gasoline sales</strong> on Sunday as Ukraine ramped up devastating attacks on fuel supplies across the Black Sea peninsula. Governor <strong>Sergey Aksyonov</strong> announced that overnight strikes killed <strong>four people and wounded 28 others</strong>, and that fuel would only be sold to government agencies ensuring security of the Republic of Crimea. This represents the <strong>worst energy crisis in Crimea since its 2014 annexation</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President <strong>Zelenskyy</strong> confirmed that a Crimean oil depot and an oil transport facility in Russia&rsquo;s <strong>Krasnodar region</strong> were among the targets, describing the attacks as Ukraine&rsquo;s &ldquo;long-range sanctions&rdquo; against Russia&rsquo;s energy infrastructure. A drone strike sparked a fire at a <strong>Black Sea oil terminal</strong> in the village of Chushka. Social media showed stranded tourists and residents desperately searching for fuel. Authorities had already restricted sales to <strong>20 liters per vehicle per week</strong> via prepaid coupons at the end of May.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy:</strong> European natural gas futures see upward pressure. Refined products markets in the Black Sea region tightening. Geopolitical risk premium rising in European energy markets.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> E.ON (EOAN.DE), RWE (RWE.DE) &mdash; European energy utilities gain from rising energy prices &bull; BAE Systems (BA.L), Rheinmetall (RHM.DE) &mdash; European defense on continued escalation &bull; BG (Bunge), ADM (Archer-Daniels-Midland) &mdash; Black Sea grain shipping disruption risk<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GAZP.ME (Gazprom) &mdash; further pressure on Russian energy stocks &bull; European consumer/retail names exposed to energy cost pass-through
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: UK LABOUR LEADERSHIP CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">United Kingdom / Politics / Currency &mdash; June 19&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK PM Starmer Faces Imminent Ouster as Andy Burnham Wins By-Election and 110 Labour MPs Call for Resignation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Andy Burnham</strong>, the former Mayor of Greater Manchester, won the <strong>Makerfield by-election with 54.8%</strong> of the vote on June 18, defeating Reform UK and clearing the path for a formal leadership challenge against Prime Minister <strong>Keir Starmer</strong>. More than <strong>110 Labour MPs have signed a letter</strong> calling on Starmer to step down, far exceeding the 81 signatures needed to trigger a challenge.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Starmer told reporters he would &ldquo;stand and fight,&rdquo; but his position looks fragile: a <strong>YouGov poll shows Burnham leading 59% to 37%</strong> among Labour members, and <strong>two in three Britons</strong> say Starmer should not lead Labour into the next general election. Former Health Secretary <strong>Wes Streeting</strong> has also resigned to mount his own challenge. Critics accuse Starmer of lacking political vision for Britain&rsquo;s ailing post-Brexit economy. This marks the <strong>deepest Labour leadership crisis since the Blair-Brown era</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Currency/Bonds:</strong> GBP under pressure on political uncertainty. UK gilt yields may see volatility as leadership transition creates policy uncertainty. BoE held rates at 3.75% this week; leadership turmoil complicates fiscal outlook.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWU (iShares MSCI UK ETF) &mdash; political uncertainty weighs on UK equities &bull; LLOY.L (Lloyds), BARC.L (Barclays) &mdash; UK domestic banks sensitive to political risk &bull; UK housebuilders: BDEV.L (Barratt), PSN.L (Persimmon) &mdash; policy direction unclear<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UK exporters benefit if GBP weakens &bull; Potential upside if Burnham wins and delivers clearer economic vision
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: TAIWAN AI SEMICONDUCTOR BOOM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">East Asia / Technology / Semiconductors &mdash; June 20&ndash;21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Taiwan Raises GDP Forecast to 9.64% &mdash; Fastest in 16 Years &mdash; as AI Semiconductor Demand Fuels Historic Export Boom</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s statistics agency raised its <strong>2026 GDP growth forecast to 9.64%</strong>, the fastest pace since 2010, driven by explosive demand for AI-related semiconductors. Export growth is now forecast at <strong>39.77% year-over-year &mdash; the fastest in five decades</strong>. Taiwan&rsquo;s semiconductor industry, which accounts for nearly <strong>38% of national GDP</strong>, continues to be the backbone of the global AI supply chain.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>TSMC</strong> posted Q1 revenue growth of <strong>35&ndash;40% YoY to ~$38.5 billion</strong> and raised capital spending to <strong>$52&ndash;56 billion</strong> for 2026. <strong>ASE Technology Holdings</strong> surged <strong>8.39%</strong> after raising annual revenue guidance by 10% for its advanced packaging division. The AI hardware buildout continues to be the single most powerful global growth narrative, with Taiwan at its center controlling <strong>over 90% of advanced chip nodes below 7nm</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> TAIEX near record highs. Nasdaq up 2.43% on the week. Global semiconductor indices rallying. Taiwan dollar strengthening on massive capital inflows.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> TSM (TSMC, +40% YTD) &mdash; dominant AI chip foundry &bull; ASX (ASE Technology, +8.39% Friday) &mdash; advanced packaging &bull; NVDA (NVIDIA) &mdash; primary TSMC customer &bull; AVGO (Broadcom), AMD &mdash; AI capex beneficiaries &bull; ASML &mdash; EUV lithography supplier &bull; AAPL (Apple, approaching $300) &mdash; major TSMC customer<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Non-AI chip makers facing margin pressure from capex diversion &bull; Legacy semiconductor names losing market share
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: COLOMBIA PRESIDENTIAL RUNOFF ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Latin America / Elections / Emerging Markets &mdash; June 21</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia Votes in Knife-Edge Presidential Runoff as COLCAP Index Hits Record Highs on Pro-Business Expectations</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Colombia is voting today in a <strong>highly consequential presidential runoff</strong> between far-right, pro-Trump candidate <strong>Abelardo de la Espriella</strong> (who led the first round with <strong>43.7%</strong>) and leftist <strong>Iv&aacute;n Cepeda</strong> (40.9%). The <strong>COLCAP index surged 3.99% to a record high of 2,387</strong> on June 12, marking its fourth straight gain as investors bet heavily on a business-friendly de la Espriella victory.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          De la Espriella has pledged to <strong>cut spending, lower taxes, and support state oil company Ecopetrol</strong>, fueling a rally in the Colombian peso, sovereign bonds, and equities. However, the race remains <strong>exceptionally close</strong> &mdash; prediction markets price a narrow de la Espriella win by 5&ndash;10 points as the leading scenario while assigning roughly even odds to other outcomes. Meanwhile, neighboring <strong>Bolivia has declared a 90-day state of emergency</strong> amid nearly 50 days of blockades, fuel shortages, and economic unrest, adding regional instability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Binary outcome risk.</strong> De la Espriella win sustains the rally; a Cepeda upset could trigger a sharp correction in Colombian assets. Colombian peso strengthening on pro-market expectations. MSCI EM Latin America index watching closely.<br/><br/>
            <strong style="color: #22c55e;">&#9650; IF DE LA ESPRIELLA WINS:</strong> EC (Ecopetrol) &mdash; state oil company directly benefits &bull; CIB (Bancolombia) &mdash; largest bank gains from pro-business policies &bull; ICOL (iShares MSCI Colombia ETF) &mdash; direct market proxy &bull; Colombian peso &bull; Sovereign bonds<br/>
            <strong style="color: #ef4444;">&#9660; IF CEPEDA WINS:</strong> All of the above reverse sharply &bull; MELI (MercadoLibre) &mdash; regional e-commerce with Colombian exposure &bull; EM Latin America funds face contagion risk alongside Bolivian instability
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Hormuz reopening trade is the dominant macro story.</strong> Oil&rsquo;s 10% weekly drop is a massive risk-on catalyst &mdash; but analysts warn that physical reopening could take weeks and talks remain fragile. Energy shorts are crowded; any collapse in negotiations sends crude sharply higher. Airlines, consumer discretionary, and EM importers benefit if de-escalation holds, while oil majors and tanker stocks face headwinds.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The AI semiconductor supercycle remains the strongest structural growth story.</strong> Taiwan&rsquo;s 9.64% GDP growth &mdash; fastest in 16 years &mdash; underscores the sheer scale of the AI buildout. TSMC, NVIDIA, and their supply chain remain the highest-conviction tech trades. The Nasdaq&rsquo;s 2.43% weekly gain shows the AI narrative overriding macro headwinds including the Fed&rsquo;s hawkish hold at 3.50&ndash;3.75%.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Political risk is spiking across multiple theatres.</strong> The UK leadership crisis, Colombia&rsquo;s binary election outcome, and Ukraine&rsquo;s escalating strikes on Crimean infrastructure all create asymmetric positioning opportunities. UK gilt and GBP volatility is cheap relative to political uncertainty. Colombia&rsquo;s COLCAP is priced for a de la Espriella win &mdash; hedging the downside is prudent. European defense names remain structurally supported by the Ukraine-Russia escalation cycle.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; Week Ending June 20, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">7,501 (+0.93% wk)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq Composite</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.43% wk</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Russell 2000</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.21% wk</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">TAIEX (Taiwan)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Near record highs</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">COLCAP (Colombia)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">2,387 (record)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$80.57 (-10% wk)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$77 (-9% wk)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Fed Funds Rate</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">3.50&ndash;3.75% (held)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">BoE Base Rate</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">3.75% (held)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">ZEW Sentiment (EU)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">First positive since war</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CBS News &bull; NBC News &bull; PBS &bull; CNBC &bull; Profile News &bull; Fortune &bull; Washington Post &bull; Fox Business &bull; Yahoo Finance &bull; TradingKey &bull; Nikkei Asia &bull; Bloomberg &bull; Investing.com &bull; Rio Times &bull; Polymarket &bull; Ipsos &bull; T. Rowe Price &bull; BlackRock &bull; Brookings &bull; ACLED
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
