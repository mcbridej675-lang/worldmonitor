#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Trade &bull; Health &bull; Democracy</p>
    </div>

    <!-- ===================== EVENT 1: TRUMP-XI BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / US-China &mdash; May 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Beijing Summit This Week &mdash; World&rsquo;s Most Consequential Meeting Begins May 14</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump arrives in Beijing <strong>Wednesday evening (May 14)</strong> for a summit with Xi Jinping that global markets are watching intently. The agenda is enormous: <strong>U.S. tariffs on Chinese goods averaging 31.6%</strong>, a potential Chinese purchase of <strong>500 Boeing aircraft</strong>, sustained agricultural imports, rare earth mineral access, and a proposed &ldquo;Board of Trade&rdquo; to formalize bilateral trade flows. However, CNBC reports the <strong>Iran war is likely to dominate</strong>, leaving less room for tariff and rare earth breakthroughs.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Fortune reports <strong>China may deliberately withhold breakthroughs</strong>, calculating that domestic pressure from U.S. midterm elections will force better terms later. Xi enters from a position of confidence &mdash; China&rsquo;s exports to the US have rebounded ahead of the meeting. World leaders from Singapore to Brussels are watching from afar, as any deal on Iran, Taiwan, or trade will reshape global supply chains.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bullish scenario:</strong> Any tariff rollback or Boeing deal sends <strong>BA (+5-8%), CAT, DE</strong> higher. Chinese tech ADRs (<strong>BABA, JD, PDD</strong>) rally on improved trade sentiment. Rare earth deal lifts <strong>MP Materials (MP)</strong> on clarity but pressures margins.<br/>
            <strong>Bearish scenario:</strong> Stalemate or hawkish rhetoric hits <strong>AAPL</strong> (China supply chain), <strong>NVDA/AMD</strong> (rare earth uncertainty), and broad <strong>EEM</strong> emerging market ETFs. Soybean futures and <strong>ADM, BG</strong> agribusiness stocks swing on agricultural purchase signals.<br/>
            <strong>Watch:</strong> USD/CNY, copper futures, and the <strong>CSI 300</strong> for real-time reads on summit progress.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: KOSPI AI CHIP MANIA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Markets / Asia-Pacific &mdash; May 11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea&rsquo;s KOSPI Smashes 7,800 &mdash; SK Hynix Overtakes Eli Lilly as AI Chip Mania Accelerates</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s <strong>KOSPI surged 4.32% to 7,822</strong>, marking a fifth consecutive record session and pushing combined market capitalization above <strong>7,000 trillion won</strong> for the first time. The rally is staggering in context: <strong>KOSPI is up 48% year-to-date</strong>, outpacing both the Nasdaq and Nikkei. JPMorgan raised its KOSPI target to <strong>9,000 (base) and 10,000 (bull case)</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At the center: <strong>SK Hynix jumped 11.98%</strong> to rank 14th globally by market cap, overtaking Eli Lilly. <strong>Samsung Electronics rose 6.33%</strong>. Together they represent <strong>44% of KOSPI&rsquo;s total market cap</strong>. The core driver is an insatiable demand for <strong>High Bandwidth Memory (HBM)</strong> chips essential for AI training infrastructure, with supply shortages intensifying. Japan&rsquo;s <strong>Nikkei 225 also topped 62,000</strong> for the first time.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct beneficiaries:</strong> <strong>SK Hynix (000660.KS)</strong>, <strong>Samsung (005930.KS)</strong>, and US-listed <strong>NVDA</strong> (HBM customer), <strong>AVGO, MU</strong> (memory peers). ETFs: <strong>EWY</strong> (iShares Korea), <strong>SOXX</strong> (semiconductors).<br/>
            <strong>Risk:</strong> KOSPI concentration &mdash; 44% in two stocks &mdash; creates fragility. A single negative HBM demand signal could trigger a violent correction. Retail FOMO is elevated. <strong>LLY</strong> losing its market cap crown to a chipmaker signals sector rotation from pharma to AI infrastructure.<br/>
            <strong>Spillover:</strong> Validates the JPMorgan thesis that the &ldquo;AI supercycle is just getting started.&rdquo; Positive for <strong>MSFT, GOOGL, AMZN</strong> (hyperscaler capex beneficiaries).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: IRAN WAR STALEMATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Conflict / Middle East &mdash; May 10&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Peace Talks Collapse &mdash; Trump Calls Tehran&rsquo;s Counter-Proposal &ldquo;Totally Unacceptable&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Day 72 of the US-Iran conflict saw peace prospects deteriorate sharply. Iran sent its counter-proposal via mediator <strong>Pakistan</strong>, demanding <strong>compensation and sovereignty recognition over the Strait of Hormuz</strong>. Trump responded on social media calling it <strong>&ldquo;TOTALLY UNACCEPTABLE!&rdquo;</strong> The human toll continues to mount: <strong>3,468 dead in Iran, 2,702 in Lebanon, 28 in Gulf states</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On the ground, a <strong>cargo ship caught fire off Qatar&rsquo;s coast</strong> after being struck by an unknown projectile. The Israel-Lebanon ceasefire is also <strong>unraveling</strong> amid deadly Israeli strikes and Hezbollah attacks. Iran&rsquo;s civilian population faces <strong>skyrocketing food prices</strong> as the US naval blockade crushes the currency. Nobel laureate <strong>Narges Mohammadi</strong> was hospitalized after collapsing in an Iranian prison.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil surged</strong> on the collapsed talks &mdash; Brent and WTI both rose as Strait of Hormuz risk re-escalated. Beneficiaries: <strong>XOM, CVX, OXY, SLB</strong> (energy), <strong>LMT, RTX, NOC, GD</strong> (defense). The <strong>S&amp;P 500 still hit a record</strong> (7,412) despite the news, suggesting markets are pricing in prolonged conflict rather than escalation.<br/>
            <strong>Losers:</strong> Airlines (<strong>DAL, UAL, LUV</strong>) face elevated jet fuel costs. Shipping stocks (<strong>ZIM, STNG</strong>) face mixed signals &mdash; higher rates but physical risk. <strong>Japanese yen</strong> weakens further on energy import costs.<br/>
            <strong>Key level:</strong> If Brent breaks above $95, expect broader equity pressure as inflation expectations reset.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: UK LABOUR COLLAPSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Politics / United Kingdom &mdash; May 8&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK Labour Suffers Historic Election Wipeout &mdash; Starmer Fights for Political Survival</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Prime Minister Keir Starmer&rsquo;s Labour Party suffered its <strong>worst local election result in modern history</strong>, losing <strong>1,496 councillors and control of 38 councils</strong>. The collapse came just two years after Labour&rsquo;s landslide general election victory. Nigel Farage&rsquo;s <strong>Reform UK gained over 1,400 seats</strong>, with the Greens adding 300+ and Liberal Democrats 150+.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Starmer faces <strong>open calls to resign from within his own party</strong>, though he has refused. The Washington Post reports he is &ldquo;fighting for his job&rdquo; as Labour members demand an exit timetable. The losses reflect deep voter anger over a <strong>weak economy, stagnant growth, and a backlash over his appointment of an ambassador with ties to Jeffrey Epstein</strong>. Reform UK&rsquo;s anti-immigration populist wave mirrors trends seen across continental Europe.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>GBP/USD</strong> faces pressure as political instability raises questions about UK fiscal policy continuity. A leadership challenge would freeze legislative agenda including planned business reforms.<br/>
            <strong>UK-exposed stocks:</strong> <strong>HSBA.L, BARC.L, LLOY.L</strong> (UK banks sensitive to policy uncertainty), <strong>EWU</strong> (iShares MSCI UK ETF). UK gilt yields may widen on risk premium. <strong>Upside:</strong> If Reform&rsquo;s deregulation agenda gains traction, UK energy stocks (<strong>BP.L, SHEL.L</strong>) and housebuilders benefit long-term.<br/>
            <strong>Broader signal:</strong> Populist anti-establishment wave across G7 democracies creates policy uncertainty that increases equity risk premiums globally.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: HANTAVIRUS OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Health / Global &mdash; May 10&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Hantavirus Cruise Ship Outbreak &mdash; 3 Dead, Global Health Alert Issued as Passengers Evacuated</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Dutch-flagged expedition cruise ship <strong>MV Hondius</strong> arrived at Spain&rsquo;s Canary Islands carrying a deadly <strong>Andes hantavirus</strong> outbreak &mdash; <strong>8 cases (6 confirmed, 2 suspected), 3 deaths</strong>. The ship departed Ushuaia, Argentina on April 1. WHO and CDC have issued formal alerts. The Andes virus causes <strong>hantavirus pulmonary syndrome (HPS)</strong> with a 30-40% fatality rate, and critically, <strong>may spread person-to-person</strong> &mdash; unlike most hantavirus strains.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>17 American passengers</strong> arrived in Omaha, Nebraska on May 11 for evaluation at the University of Nebraska Medical Center&rsquo;s National Quarantine Unit. Passengers from multiple countries are being repatriated via <strong>military and government aircraft</strong>. CNBC reports this has exposed the growing health risks of the <strong>luxury expedition cruise boom</strong>, with ships venturing into increasingly remote and medically underserved regions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Cruise lines under pressure:</strong> <strong>CCL, RCL, NCLH</strong> face near-term sentiment hit. Expedition/luxury segment most exposed &mdash; look for booking cancellations in polar expedition routes.<br/>
            <strong>Potential beneficiaries:</strong> Biodefense and diagnostics &mdash; <strong>VRTX, REGN, TMO, DHR, A</strong> on elevated pandemic preparedness spending. <strong>Hologic (HOLX)</strong> and molecular diagnostics players if testing demand scales.<br/>
            <strong>Limited systemic risk:</strong> Unlike COVID, hantavirus has limited human-to-human transmission. Market impact likely contained to cruise/travel sector unless case count escalates significantly. Insurance stocks (<strong>TRV, CB</strong>) may see claims from repatriation costs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Market Snapshot &mdash; May 11, 2026</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
          <tr style="border-bottom: 1px solid #222;">
            <td style="padding: 8px 0; color: #888; font-weight: 700;">INDEX</td>
            <td style="padding: 8px 0; color: #888; font-weight: 700; text-align: right;">CLOSE</td>
            <td style="padding: 8px 0; color: #888; font-weight: 700; text-align: right;">CHANGE</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">S&amp;P 500</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">7,412.84</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+0.19% (record)</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">Nasdaq Composite</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">26,274.13</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+0.10% (record)</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">Dow Jones</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">49,704.47</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+0.19%</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">KOSPI (Seoul)</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">7,822.24</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+4.32% (record)</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">Nikkei 225 (Tokyo)</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">62,000+</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">All-time high</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 8px 0; color: #fff;">Russell 2000</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">&mdash;</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+0.78% (record)</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #fff;">CSI 300 (China)</td>
            <td style="padding: 8px 0; color: #fff; text-align: right;">&mdash;</td>
            <td style="padding: 8px 0; color: #22c55e; text-align: right;">+0.58%</td>
          </tr>
        </table>
        <p style="color: #888; font-size: 11px; margin: 16px 0 0; line-height: 1.6;">
          <strong style="color: #fff;">Notable movers:</strong> Monday.com (MNDY) +26% on AI-driven earnings beat &bull; SK Hynix +11.98% &bull; Samsung +6.33% &bull; Nintendo -5.54% on Switch 2 pricing concerns &bull; Oil rising on Iran deal collapse
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch This Week</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Trump-Xi summit (May 14&ndash;15) is the week&rsquo;s defining event.</strong> Every asset class &mdash; equities, commodities, currencies, and bonds &mdash; will react to signals from Beijing. A Boeing deal or tariff rollback would be unambiguously bullish; a breakdown on rare earths or Taiwan rhetoric would rattle tech supply chains.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Asia&rsquo;s AI chip rally is reshaping global capital flows.</strong> South Korea&rsquo;s KOSPI +48% YTD is the world&rsquo;s best-performing major index. The HBM supply shortage is structural, not cyclical &mdash; but 44% concentration in two stocks creates correction risk.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil is the wildcard.</strong> Collapsed Iran peace talks, a ship hit off Qatar, and Hormuz sovereignty demands all point to sustained energy price pressure. If Brent crosses $95, central banks face harder choices on rates.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi summit outcomes (Wed&ndash;Fri) &bull; Brent crude at $95 resistance &bull; KOSPI correction signals &bull; GBP on Starmer leadership challenge &bull; Hantavirus case count trajectory &bull; Quad foreign ministers meeting in New Delhi
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Reuters &bull; Bloomberg &bull; CNBC &bull; CNN &bull; Financial Times &bull; The Washington Post &bull; NPR &bull; Fortune &bull; Seoul Economic Daily &bull; Nikkei Asia &bull; Yahoo Finance &bull; TheStreet &bull; WHO &bull; CDC &bull; Seeking Alpha &bull; JPMorgan &bull; CaixaBank Research &bull; Atlantic Council &bull; CSIS
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

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
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
