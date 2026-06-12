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

    <!-- ===================== EVENT 1: IRAN-US PEACE DEAL / OIL CRASH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Geopolitics &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-US Peace Deal Text Reportedly Agreed; Brent Crude Crashes Below $90 as Strait of Hormuz Reopening Looms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan&rsquo;s Prime Minister announced that the <strong>US and Iran have agreed on the final wording of a 14-point peace deal</strong> to end the conflict that has devastated global energy markets since February 2026. However, <strong>Iran&rsquo;s foreign ministry denied the deal is finalized</strong>, stating its authorities have not completed their review of the proposed text. President Trump cancelled planned new strikes on Iran and suggested a peace agreement could come &ldquo;as early as this weekend.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz &mdash; through which <strong>~20% of global oil and gas supplies</strong> flow during peacetime &mdash; has been closed since the war began, shutting in <strong>10&ndash;11 million barrels per day</strong> of crude oil. Iran has proposed reopening the strait &ldquo;with Iranian arrangements&rdquo; within 30 days, while demanding full sanctions relief and release of frozen assets. Brent crude <strong>plunged to $89.94</strong>, its lowest in nearly two months &mdash; down $5.21 from the prior day. Meanwhile, the <strong>US military struck three vessels in the Strait this week, killing three Indian sailors</strong>, underscoring the fragility of the ceasefire. European equities surged on deal hopes: <strong>Stoxx 600 +1.9%, DAX +2%, CAC 40 +2%, FTSE 100 +1.5%</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude crashed to $89.94 (-5.5%), its sharpest single-day drop in months. WTI trading in the $83&ndash;$87 range. If a deal materializes and Hormuz reopens, oil could fall toward $70&ndash;75 &mdash; a massive deflationary impulse for the global economy. If talks collapse, $100+ oil returns instantly. Kenya&rsquo;s international bonds rallied on lower fuel price hopes.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP (on deal hopes):</strong> UAL, DAL, AAL, RYAAY (airlines &mdash; fuel cost relief) &bull; XLY (consumer discretionary) &bull; EEM, VWO (emerging market ETFs) &bull; India (Nifty 50), Japan (Nikkei), KOSPI &mdash; oil-importing economies rally &bull; ZIM, MAERSK-B.CO (shipping &mdash; Hormuz reopening)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XLE, XOP (energy sector ETFs) &bull; XOM, CVX, SHEL, BP, Saudi Aramco (2222.SR) (oil majors losing price premium) &bull; HAL, SLB (oilfield services) &bull; LMT, RTX, NOC (defense &mdash; de-escalation discount)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: BELFAST ANTI-IMMIGRANT RIOTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Social Unrest / Immigration &mdash; June 10&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Anti-Immigrant Riots Engulf Belfast After Knife Attack; Masked Mobs Torch Homes and Vehicles Across Northern Ireland</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Belfast was convulsed by a <strong>second consecutive night of severe anti-immigrant violence</strong> after a Sudanese asylum seeker, <strong>Hadi Alodid (30)</strong>, was charged with attempted murder for allegedly blinding a local man in one eye during a knife attack. The victim remains hospitalized with serious injuries to his eyes, face, and back.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Masked rioters &mdash; some as young as 10 &mdash; <strong>torched houses believed to shelter immigrants, set fire to vehicles and a city bus</strong>, and pelted police with bricks and bottles. Police deployed <strong>water cannons</strong> to disperse crowds. The situation was inflamed by <strong>Elon Musk and Tommy Robinson</strong> amplifying an AI-generated list warning businesses to close by 5:30 PM, spreading further panic. PM <strong>Keir Starmer</strong> called the original attack &ldquo;sickening&rdquo; while a government minister labelled the rioting &ldquo;racist thuggery.&rdquo; This is the <strong>worst anti-immigrant unrest in the UK since the 2024 riots</strong>, highlighting escalating migration tensions across Europe.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Currency:</strong> GBP faces mild pressure on political instability concerns. UK consumer/retail sectors in Belfast face localized disruption. Insurance claims expected to spike. Social media regulation pressure intensifying &mdash; EU Digital Services Act enforcement could tighten.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GBP/USD (political risk premium) &bull; TSCO.L, SBRY.L (UK retail &mdash; Belfast disruption) &bull; AV.L, DLG.L (UK insurers &mdash; property destruction claims) &bull; META (content moderation scrutiny)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MSI (Motorola Solutions &mdash; public safety tech) &bull; AXON (Axon Enterprise &mdash; law enforcement demand) &bull; Security/surveillance sector &bull; Far-right political sentiment driving populist policy bets across Europe
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SPACEX IPO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Capital Markets &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">SpaceX Debuts at Nearly $2 Trillion in Largest IPO in History; Elon Musk Becomes World&rsquo;s First Trillionaire</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          SpaceX began trading on the <strong>Nasdaq on June 12</strong> after raising <strong>$75 billion</strong> in the largest initial public offering in history. Shares opened at <strong>$150</strong>, surged as high as <strong>$176.52</strong> intraday, and closed at <strong>$161.11 &mdash; up 19.34%</strong> from the $135 IPO price. The company debuted at a market capitalization approaching <strong>$2 trillion</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Elon Musk, who retains roughly <strong>40% of SpaceX shares</strong> post-IPO, crossed the <strong>$1 trillion net worth threshold</strong> &mdash; becoming the first person in history to achieve trillionaire status. Prior to the listing, Musk&rsquo;s net worth stood at approximately $780 billion. Analysts noted healthy gains, limited volatility, and <strong>record retail investor demand</strong>. The IPO is expected to catalyze the broader space economy and trigger a wave of follow-on tech IPOs globally. Starlink, SpaceX&rsquo;s satellite internet division, has particular significance for <strong>emerging markets and developing nations</strong> seeking connectivity.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> S&amp;P 500 +0.34%, Dow +0.57%. Nasdaq -0.30% as capital rotated from mega-cap tech into SpaceX and space-adjacent names. Record retail trading volume. IPO market sentiment dramatically improved globally.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> RKLB (Rocket Lab &mdash; launch peer) &bull; ASTS (AST SpaceMobile) &bull; LUNR (Intuitive Machines) &bull; LMT (Lockheed &mdash; space division) &bull; BA (Boeing &mdash; space contracts) &bull; ARKX, UFO (space ETFs) &bull; LHX, HEI (aerospace suppliers)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> AMZN (-2.17%), AAPL (-1.95%) &mdash; mega-cap rotation outflows &bull; VSAT, SATS (satellite competitors &mdash; Starlink dominance) &bull; TSLA (Musk attention dilution) &bull; Other recent IPOs competing for capital
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: CHINA ARRESTS US SCHOLAR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">East Asia / Geopolitics / US-China Relations &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Arrests US Citizen Min Zin, Myanmar Think Tank Director, on Espionage Charges &mdash; Escalating US-China Tensions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s foreign ministry confirmed the arrest of <strong>Min Zin</strong>, a US citizen and executive director of the <strong>Institute for Strategy and Policy &mdash; Myanmar</strong>, on suspicion of &ldquo;engaging in espionage and endangering Chinese national security.&rdquo; Min Zin, a former activist in Myanmar&rsquo;s 1988 democracy movement who studied at <strong>UC Berkeley</strong>, was detained upon arrival at <strong>Kunming airport</strong> in Yunnan province on June 3. The US State Department confirmed it is providing consular assistance.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The arrest is <strong>highly unusual</strong> &mdash; it is uncommon for Beijing to detain a US citizen on national security charges. The move comes amid heightened tensions over <strong>China&rsquo;s influence in Myanmar</strong>, where Beijing has supported the military junta while pro-democracy forces continue resistance. This arrest risks further deteriorating US-China relations and may trigger <strong>retaliatory diplomatic actions</strong>, adding another friction point alongside disputes over Taiwan, trade tariffs, and technology export controls. Academic and business travel to China faces renewed scrutiny, with a <strong>chilling effect on international research and NGO operations</strong> in the region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical risk:</strong> Adds to the US-China tension premium. CNY under mild pressure. Hang Seng and Shanghai Composite face headwinds if this escalates into a broader diplomatic incident. Risk of tit-for-tat detentions could chill cross-border business confidence.<br/><br/>
            <strong style="color: #ef4444;">&#9660; AT RISK:</strong> FXI, KWEB (China ETFs) &bull; BABA, JD, PDD, BIDU (Chinese ADRs &mdash; geopolitical discount widens) &bull; AAPL, TSLA, QCOM, SBUX, NKE (major China exposure)<br/>
            <strong style="color: #22c55e;">&#9650; HEDGES:</strong> GLD (gold &mdash; geopolitical hedge) &bull; PLTR, BAH (defense/intelligence) &bull; VNM (Vietnam ETF), INDA (India ETF) &mdash; supply chain diversification beneficiaries &bull; Rare earth miners outside China
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: SUDAN DRONE STRIKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Africa / Humanitarian / Security &mdash; June 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">RSF Drone Strikes Kill Dozens of Civilians in Sudan&rsquo;s El Obeid; UN Reports 880 Drone Deaths in 2026 Alone</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A wave of <strong>drone strikes by the Rapid Support Forces (RSF)</strong> killed at least <strong>23 civilians and injured 19</strong> in <strong>El Obeid, North Kordofan</strong>, one of the Sudanese Army&rsquo;s most important military and administrative centers. The first strike hit a city center neighborhood on Wednesday, killing five. A second attack <strong>targeted mourners attending the victims&rsquo; funeral</strong>, killing four more. Further strikes hit residential areas on Thursday morning. Separately, <strong>13 civilians were killed</strong> in strikes on the Hamrat al-Sheikh area, including 11 killed in a <strong>market bombing</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UN rights chief reported that drone strikes have killed at least <strong>880 Sudanese civilians between January and April 2026</strong>, making drones the leading cause of civilian death in the conflict. Attacks have also <strong>damaged critical humanitarian aid routes</strong>, further strangling relief efforts in what is one of the world&rsquo;s worst humanitarian crises, with <strong>millions displaced</strong>. The escalation risks triggering larger refugee flows into Egypt, Chad, South Sudan, and ultimately Europe, while <strong>scrutiny of UAE-RSF links</strong> adds a Gulf geopolitical dimension. The conflict also impacts <strong>Red Sea shipping routes</strong> and regional Sahel stability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Commodities:</strong> Gold supported by geopolitical risk. Grain/food commodity prices under pressure as disrupted aid routes worsen regional food crisis. Red Sea shipping risk premium persists for container rates. Sudan&rsquo;s collapse adds to global displacement pressures and humanitarian funding demands.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> NEM, GOLD, AEM (gold miners &mdash; safe-haven flows) &bull; AVAV, KTOS (drone manufacturers &mdash; demand surge) &bull; BG, ADM (food/grain logistics &mdash; increased aid demand) &bull; HLAG.DE, MAERSK-B.CO (shipping &mdash; Red Sea risk pricing)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Sudanese pound (continued collapse) &bull; Regional EM bonds under pressure from instability spillover &bull; UAE diplomatic reputation risk if RSF links proven
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran peace deal is the single most important variable for global markets.</strong> If finalized, the reopening of the Strait of Hormuz would unleash 10&ndash;11 million barrels per day of crude supply, potentially crashing oil toward $70&ndash;75. This would be massively deflationary, immediately easing the 4.2% US CPI print (driven by a 23.5% energy cost surge), reopening the Fed&rsquo;s rate cut window, and lifting consumer sentiment globally. Energy longs should tighten stops; airlines and consumer discretionary are asymmetric bets on a deal.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">SpaceX&rsquo;s historic IPO signals a new era for capital markets.</strong> The $75B raise and $2T valuation will catalyze the space economy and potentially unlock a wave of late-stage tech IPOs. Watch for capital rotation from mega-cap tech into space-adjacent and newly public names. Retail investor participation was at record levels &mdash; a bullish signal for IPO market health.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Geopolitical risk is elevated across multiple theaters.</strong> Belfast&rsquo;s anti-immigrant riots highlight Europe&rsquo;s deepening migration crisis and social instability. China&rsquo;s arrest of Min Zin adds fresh friction to US-China relations &mdash; keep geopolitical hedges (gold, supply-chain diversification plays) in place. Sudan&rsquo;s drone warfare escalation is creating a humanitarian catastrophe with spillover risks for Red Sea shipping, European refugee flows, and food security. The Bank of Japan&rsquo;s June 15&ndash;16 meeting, with 66% probability of a rate hike to 1.0%, is the next major catalyst &mdash; JPY strength could ripple across carry-trade-sensitive assets.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 12, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">7,431 (+0.34%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">51,202 (+0.57%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,889 (-0.30%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Stoxx 600 (Europe)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.9%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX (Germany)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.0%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FTSE 100 (London)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+1.5%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">SpaceX (IPO Day)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$161.11 (+19.3%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$89.94 (-5.5%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$85.10 (-5.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Safe-haven bid intact</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">US CPI (May)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">4.2% YoY (3-yr high)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Upcoming: BOJ Meeting</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">June 15&ndash;16 (66% hike odds)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNN &bull; CNBC &bull; NBC News &bull; NPR &bull; ABC News &bull; TechCrunch &bull; Washington Post &bull; Fox News &bull; Yahoo Finance &bull; The Street &bull; Schwab &bull; Fortune &bull; RFE/RL &bull; Benzinga &bull; Trading Economics &bull; PBS News &bull; Sudan Tribune &bull; Dabanga Radio &bull; Xinhua &bull; AllAfrica &bull; FDD Overnight Brief &bull; Britannica &bull; Times of Israel &bull; Polymarket
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
