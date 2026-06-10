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

    <!-- ===================== EVENT 1: IRAN-ISRAEL CEASEFIRE & US STRIKES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Gulf / Energy &mdash; June 9&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-Israel Ceasefire Falters as Both Sides Trade Strikes; US Launches Fresh Bombing Runs on Iranian Targets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile April ceasefire between Iran and Israel <strong>collapsed over the weekend</strong> as both nations exchanged their worst missile strikes in months. Israel&rsquo;s PM Netanyahu announced a <strong>pause in attacks on June 9</strong> but stopped short of acknowledging a formal ceasefire. Iran also <strong>suspended operations</strong> but warned it would resume if Israeli strikes in southern Lebanon continue. A top Iranian official told CNN that Tehran has &ldquo;no problem&rdquo; with peace talks &mdash; provided the U.S. negotiates in good faith.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. launched <strong>fresh &ldquo;self-defense&rdquo; strikes on Iranian air defenses and radar sites</strong> in Hormozgan province &mdash; including Sirik, Qeshm Island, and Minab &mdash; after a U.S. Apache helicopter was downed near the <strong>Strait of Hormuz</strong>. Iran&rsquo;s Revolutionary Guard retaliated by striking <strong>21 American military targets</strong> across the region. The Strait of Hormuz blockade, ongoing since late February, continues to choke <strong>~20% of global oil transit</strong>, keeping crude structurally elevated despite ceasefire-driven dips. The VIX jumped 10% today on the escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude at ~$92.29 (+0.9%), WTI at ~$88.97 (+0.8%) &mdash; swinging wildly on ceasefire headlines. Oil fell 5% earlier on the Israel-Iran pause but rebounded on the renewed US strikes. <strong>Gold</strong> crashed to ~$4,200/oz (steepest daily drop this month) as the safe-haven trade unwound on ceasefire optimism, then partially reversed. Dow fell ~900 points (-0.78%).<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XLE (energy sector ETF) &bull; COP, XOM, CVX (oil majors) &bull; USO (oil ETF) &bull; XOP (oil &amp; gas E&amp;P) &bull; LMT, RTX, NOC (defense stocks &mdash; continued Gulf operations) &bull; ITA (defense ETF)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost pressure) &bull; GLD, IAU (gold ETFs &mdash; safe-haven unwind) &bull; Consumer discretionary broadly (inflation headwinds from $88+ oil)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: PHILIPPINES EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Natural Disaster / Infrastructure &mdash; June 8&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 7.8 Earthquake Devastates Philippines&rsquo; Mindanao &mdash; 45 Dead, 490 Injured, 77,000 Displaced</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck off the coast of Sarangani province in Mindanao on June 8 &mdash; the <strong>strongest to hit the Philippines since the 1990 Luzon earthquake</strong> and one of the most destructive in five decades. The quake, caused by subduction along the <strong>Cotabato Trench</strong>, killed at least <strong>45 people</strong>, injured 490, and left 17 missing, with more than <strong>77,000 individuals displaced</strong> across the region.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tsunami warnings were issued across the <strong>southern Philippines, Indonesia, Malaysia, Palau, Japan, Taiwan, and Papua New Guinea</strong>. Over <strong>2,000 aftershocks</strong> (up to magnitude 6.4) have been recorded as of Wednesday morning. Critical infrastructure damage is widespread across Mindanao, disrupting <strong>agricultural exports</strong> (the region accounts for ~40% of Philippine banana and pineapple production) and local supply chains. International aid is being mobilized.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional supply chain disruption.</strong> Philippine peso (PHP) under mild pressure. Philippine Stock Exchange Index (PSEi) selling on reconstruction cost fears. Agricultural commodity prices for bananas and tropical fruits may rise on Mindanao supply disruption. Global reinsurance names face claims exposure.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EPHE (iShares Philippines ETF) &bull; Del Monte Pacific (DELM.PS) &bull; Dole plc (DOLE &mdash; Mindanao export exposure) &bull; Philippine banks (BDO, BPI &mdash; reconstruction loan provisions)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MunichRe (MUV2.DE), Swiss Re (SREN.SW) &mdash; reinsurance premium repricing &bull; Holcim Philippines (HLCM.PS), Cemex Holdings (CHP.PS) &mdash; reconstruction demand &bull; Infrastructure plays across ASEAN
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TAIWAN HIMARS DRILL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">East Asia / Geopolitics / Defense &mdash; June 10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Taiwan Fires U.S.-Supplied HIMARS Into the Taiwan Strait for the First Time, Escalating Cross-Strait Tensions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s military conducted a landmark drill on Wednesday, <strong>firing U.S.-supplied HIMARS rockets into the Taiwan Strait for the first time</strong> &mdash; a clear demonstration of how it would repel a Chinese amphibious assault. The exercise in <strong>Taichung City</strong> saw mobile &ldquo;shoot-and-scoot&rdquo; launchers maneuver into position and fire within three minutes, showcasing the system&rsquo;s rapid-deployment capabilities. The military said it used <strong>reduced-range practice rockets</strong> that fell into the water near the coast.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The timing is politically sensitive: the U.S. announced plans in December to sell <strong>82 additional HIMARS systems to Taiwan</strong>, but that deal appears to be <strong>on hold</strong> following Trump&rsquo;s meeting with Xi Jinping in Beijing last month. Beijing has not yet officially responded to the drill, but any escalatory rhetoric could rattle the <strong>global semiconductor supply chain</strong> &mdash; Taiwan produces over 90% of the world&rsquo;s most advanced chips through TSMC. The Nikkei 225 fell 1.99% on the session, partly reflecting regional risk-off sentiment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Cross-strait risk premium rising.</strong> Any Chinese military response would spike volatility in Asian tech. Taiwan dollar (TWD) and regional currencies under watch. Nikkei 225 fell 1.99% today; regional risk-off sentiment spreading.<br/><br/>
            <strong style="color: #ef4444;">&#9660; AT RISK:</strong> TSM (Taiwan Semiconductor &mdash; geopolitical risk premium) &bull; AAPL, NVDA, AMD, QCOM (TSMC supply chain dependence) &bull; SOXX, SMH (semiconductor ETFs) &bull; EWT (iShares Taiwan ETF) &bull; Foxconn/Hon Hai (2317.TW)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> LMT (Lockheed Martin &mdash; HIMARS manufacturer) &bull; RTX, NOC, GD (U.S. defense primes) &bull; Intel (INTC), Samsung (005930.KS) &mdash; alternative fab beneficiaries if Taiwan risk reprices &bull; GLD (gold &mdash; geopolitical hedge)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: SOUTH AFRICA FITCH UPGRADE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Africa / Economics / Sovereign Credit &mdash; June 5&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Africa Receives First Fitch Credit Upgrade in 21 Years &mdash; All Three Agencies Now Signal Path to Investment Grade</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Fitch Ratings upgraded South Africa&rsquo;s long-term foreign- and local-currency issuer default ratings from <strong>BB- to BB</strong> on June 5 &mdash; the <strong>first upgrade from Fitch in approximately 21 years</strong>. The move was driven by sustained fiscal discipline, with the country posting <strong>primary fiscal surpluses averaging 1% of GDP</strong> over four consecutive years. South Africa&rsquo;s government debt benefits from long maturities and is predominantly rand-denominated, shielding it from dollar-surge crises.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All three major rating agencies now place South Africa <strong>two notches below investment grade</strong> &mdash; S&amp;P upgraded in November 2025 and Moody&rsquo;s assigned a positive outlook. This convergence suggests South Africa could <strong>regain investment-grade status within 2&ndash;3 years</strong>, which would unlock massive institutional capital flows from index-tracking funds. The upgrade is a landmark moment for Africa&rsquo;s most industrialized economy and a signal that fiscal discipline in emerging markets can be rewarded &mdash; offering a template for frontier economies globally.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds &amp; Currency:</strong> South African rand (ZAR) strengthened to ~R16.22/USD initially. SA government bond yields should compress, reducing borrowing costs. Positive spillover into JPMorgan EMBI (SA is a major benchmark constituent). JSE All Share Index sees positive tailwind as foreign capital flows improve.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> EZA (iShares South Africa ETF) &bull; Standard Bank (SBK.JO), FirstRand (FSR.JO), Nedbank (NED.JO), Absa (ABG.JO) &mdash; lower sovereign risk reduces funding costs &bull; Anglo American (AAL.L), Gold Fields (GFI), Sibanye Stillwater (SBSW) &mdash; improved country risk &bull; VWO, EEM (broad EM ETFs &mdash; positive flows)<br/>
            <strong style="color: #22c55e;">&#9650; BROADER EM:</strong> The upgrade sets a positive tone for frontier and emerging market credit globally &mdash; bullish for EMB (iShares EM Bond ETF) and VWOB (Vanguard EM Gov Bond ETF)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: XI-KIM PYONGYANG SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">East Asia / Geopolitics / Defense &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Xi Jinping Visits Pyongyang for First Time in Seven Years; China and North Korea Pledge &ldquo;New Historical Starting Point&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chinese President <strong>Xi Jinping made a state visit to North Korea on June 8&ndash;9</strong> &mdash; his first in seven years &mdash; meeting Kim Jong Un and calling for deepened <strong>&ldquo;strategic coordination and cooperation.&rdquo;</strong> The two leaders agreed to expand collaboration in <strong>economics, trade, agriculture, health, construction, and science/technology</strong>, with China committing to inject &ldquo;powerful momentum&rdquo; into bilateral ties and strengthen political and military exchanges.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The summit is a <strong>direct response to the deepening Russia-North Korea partnership</strong> &mdash; Xi is reasserting China&rsquo;s position as Pyongyang&rsquo;s most critical economic lifeline and diplomatic patron, countering Moscow&rsquo;s growing influence. Coming on the <strong>same weekend as Taiwan&rsquo;s HIMARS test</strong>, the visit signals a <strong>tightening China-North Korea-Russia axis</strong> against the U.S.-led alliance system. It complicates any future denuclearization diplomacy and is expected to accelerate <strong>defense spending in South Korea and Japan</strong> &mdash; both of which face a more hostile regional security environment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Geopolitical risk premium for Northeast Asia rising.</strong> Korean won (KRW) could weaken on elevated peninsula risk. Safe-haven flows may benefit JPY and gold. KOSPI faces geopolitical discount, though structural tech/semiconductor strength persists. North Korean rare earth access for China could affect global rare earth pricing.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Hanwha Aerospace (012450.KS), Korea Aerospace Industries (047810.KS) &mdash; Korean defense spending acceleration &bull; Mitsubishi Heavy (7011.T), IHI Corp (7013.T) &mdash; Japanese defense buildup &bull; MP Materials (MP), Lynas Rare Earths (LYC.AX) &mdash; non-China rare earth alternatives<br/>
            <strong style="color: #ef4444;">&#9660; AT RISK:</strong> Samsung (005930.KS), SK Hynix (000660.KS) &mdash; geopolitical risk discount &bull; EWY (iShares Korea ETF) &mdash; peninsula risk premium &bull; Chinese tourism/consumer stocks &mdash; diplomatic distraction from domestic economic priorities
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Gulf conflict remains the market&rsquo;s center of gravity.</strong> Every major asset class &mdash; oil, gold, bonds, equities, currencies &mdash; is reacting to the Strait of Hormuz blockade and escalation cycle. Energy longs (XLE, COP, XOM) remain structurally supported while crude stays above $85. Gold&rsquo;s crash to $4,200 on ceasefire optimism may be a trap &mdash; any re-escalation sends it right back. Airlines and consumer discretionary remain under persistent fuel-cost pressure. CPI hitting 4.2% today (energy-driven) confirms the inflation pass-through is real.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Northeast Asia is heating up on two fronts simultaneously.</strong> Taiwan&rsquo;s HIMARS drill and Xi&rsquo;s Pyongyang summit are reshaping Indo-Pacific risk calculus. Any Chinese military response to the Taiwan Strait firing could reprice the entire semiconductor supply chain. The tightening China-North Korea-Russia axis accelerates defense spending in Seoul and Tokyo &mdash; Korean and Japanese defense stocks are multi-catalyst longs. Rare earth miners outside China (MP, Lynas) benefit from supply-chain diversification urgency.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">South Africa&rsquo;s upgrade is a rare bright spot for EM credit.</strong> All three agencies now signal a path to investment grade within 2&ndash;3 years, which would trigger massive institutional inflows. SA banks (Standard Bank, FirstRand) and the rand are the direct beneficiaries, but the broader signal is bullish for EM bonds (EMB, VWOB). Meanwhile, the Philippines earthquake creates near-term ASEAN supply disruption but medium-term reconstruction demand &mdash; cement and infrastructure plays are attractive on pullbacks.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 10, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.37%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.42%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.78% (~900 pts)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+8.18%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.99%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.74%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$92.29 (+0.9%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$88.97 (+0.8%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$4,200/oz (steep drop)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. 10Y Yield</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">4.56%</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">VIX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">+10% (elevated)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CNN &bull; NPR &bull; PBS News &bull; Anadolu Agency &bull; ABC News &bull; Philippine Inquirer &bull; GMA News &bull; Britannica &bull; TheStreet &bull; Fortune &bull; Trading Economics &bull; IOL South Africa &bull; Business Day SA &bull; NBC News &bull; Christian Science Monitor &bull; AM Best &bull; Investtech &bull; Fitch Ratings
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
