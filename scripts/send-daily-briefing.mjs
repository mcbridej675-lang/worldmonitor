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

    <!-- ===================== EVENT 1: ISRAEL-IRAN CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel &amp; Iran Halt Strikes After Weekend Escalation; Oil Plunges as Strait of Hormuz Ship Traffic Rises</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A brief but intense flare-up of <strong>military strikes between Israel and Iran</strong> over the weekend sent shockwaves through global energy markets. Iran launched retaliatory missiles at Israel following Israeli strikes in Lebanon, and Israel struck back at targets inside the Islamic Republic. As of Tuesday morning, both sides have declared a <strong>halt to active operations</strong>, with reports of ongoing ceasefire negotiations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Crude oil spiked above <strong>$98/barrel (Brent)</strong> on Monday before pulling back sharply after Iran declared the end of its military operations. U.S. Energy Secretary Chris Wright said ship traffic through the <strong>Strait of Hormuz is &ldquo;rising very meaningfully,&rdquo;</strong> and Trump claimed a deal with Tehran to reopen Hormuz is &ldquo;two or three days away.&rdquo; Meanwhile, thousands of residents <strong>fled Lebanon&rsquo;s southern city of Tyre</strong> after Israeli military warnings, and a <strong>U.S. Army Apache helicopter went down</strong> near the Strait of Hormuz (crew rescued safely).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> WTI fell 3.4% to $88.20; Brent dropped 2.97% to $91.45 on de-escalation hopes. <strong>Gold</strong> rose above $4,300/oz on safe-haven demand. Sovereign yields rose on both sides of the Atlantic. Risk assets recovering as ceasefire negotiations progress.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XLE (energy sector) &bull; COP, XOM, CVX (oil majors &mdash; still elevated YTD) &bull; GLD, IAU (gold ETFs on safe-haven bid) &bull; ITA, PPA (defense ETFs)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> UAL, DAL, AAL (airlines &mdash; fuel cost whipsaw) &bull; Consumer discretionary broadly (oil-driven inflation fears) &bull; Emerging market currencies under pressure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: PHILIPPINES EARTHQUAKE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Natural Disaster / Humanitarian &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 7.8 Earthquake Devastates Southern Philippines: At Least 35 Dead, Buildings Collapsed, Tsunami Triggered</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> struck offshore of Sarangani province in the southern Philippines at 7:37 AM local time on June 8, with its epicenter <strong>32 km west of Maasim</strong> at a depth of 33 km. At least <strong>35 people were killed and over 200 injured</strong>, mostly in damaged buildings. General Santos, a city of 722,000, sustained the most severe damage, with several buildings &mdash; including a popular restaurant &mdash; collapsing entirely.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Tsunami waves of approximately 1 meter</strong> were recorded along the coasts of Sarangani and Sultan Kudarat provinces. PHIVOLCS issued destructive tsunami warnings for nine provinces across Mindanao. Tsunami advisories also reached <strong>Okinawa, Japan</strong> and parts of Indonesia. Rescue operations are ongoing with aftershocks continuing. The quake is the deadliest to hit the Philippines since 2013 and will require significant reconstruction in the affected southern Mindanao region.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional, not global macro.</strong> Philippine peso under mild pressure. Insurance claims expected. Reconstruction spending will boost local construction and materials. Philippine sovereign bond spread may widen slightly on fiscal cost expectations.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EPHE (iShares Philippines ETF &mdash; short-term risk-off) &bull; Philippine property REITs &bull; SM Prime Holdings (SMPH.PS &mdash; retail property exposure) &bull; Regional insurers with Philippine exposure<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Holcim Philippines (HLCM.PS), Cemex Holdings (CHP.PS) &mdash; reconstruction demand &bull; DMCI Holdings (DMC.PS &mdash; infrastructure/construction) &bull; Caterpillar (CAT), Komatsu (6301.T) &mdash; heavy equipment demand
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CONGO EBOLA OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Africa / Public Health / Pandemic Risk &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Congo Ebola Outbreak Accelerating at &ldquo;Unprecedented Pace&rdquo; &mdash; CDC Warns It Could Rival 2014 West Africa Epidemic</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Democratic Republic of Congo&rsquo;s Ebola outbreak caused by the <strong>Bundibugyo virus</strong> is spreading at an unprecedented pace, with <strong>515 confirmed cases and 91 deaths</strong> in the DRC and <strong>19 confirmed cases (2 deaths) in Uganda</strong> as of June 6. The U.S. CDC has warned that if only 20% of patients are isolated, there is a <strong>65% probability of exceeding 20,000 cases within three months</strong> &mdash; potentially rivaling the catastrophic 2014&ndash;2016 West Africa epidemic that killed 11,300.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Critically, <strong>no vaccine exists for the Bundibugyo strain</strong>, and treatment is limited to supportive care. Cases span <strong>25 health zones across Ituri, North Kivu, and South Kivu provinces</strong> &mdash; areas already destabilized by armed conflict. Separately, <strong>protests erupted in Nanyuki, Kenya</strong> over a planned U.S.-backed Ebola quarantine center, reflecting growing regional anxiety. The WHO has classified the outbreak as a grade 3 emergency, its highest internal level.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Pandemic risk premium rising.</strong> If outbreak expands to major cities or West Africa, expect travel restrictions and broader risk-off. Mining operations in eastern DRC face disruption risk &mdash; the region produces ~60% of global cobalt and significant tin/tantalum. East African economies face tourism and trade disruption.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> MRNA (Moderna &mdash; vaccine development), PFE (Pfizer), BNTX (BioNTech) &mdash; pandemic preparedness theme &bull; LAKE (Lakeland Industries &mdash; PPE) &bull; APT (Alpha Pro Tech &mdash; protective equipment)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> AFK (VanEck Africa ETF) &bull; East African airlines/tourism stocks &bull; Cobalt-dependent supply chains at risk if DRC mining disrupted &bull; Glencore (GLEN.L), CMOC Group (3993.HK) &mdash; DRC mining exposure
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: FCAS FIGHTER PROGRAM TERMINATED ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Defense / Industrial Policy &mdash; June 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Germany &amp; France Terminate &euro;100 Billion FCAS Stealth Fighter Program &mdash; Europe&rsquo;s Biggest Defense Failure in Decades</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Germany and France have <strong>formally killed the Future Combat Air System (FCAS)</strong>, Europe&rsquo;s most ambitious defense program since the Eurofighter. Chancellor <strong>Friedrich Merz</strong> conveyed the decision to President <strong>Macron</strong> on June 6 at the EU-Western Balkans Summit, then publicly announced it at the <strong>ILA Berlin Air Show on June 8</strong>. The &euro;100 billion program, designed to produce a sixth-generation stealth fighter replacing the Rafale and Eurofighter by the early 2040s, collapsed over unresolvable disputes between <strong>Dassault Aviation and Airbus Defence &amp; Space</strong> over industrial control.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Spain, the program&rsquo;s third partner, had already hedged by funding an <strong>Airbus-Indra joint study</strong> on a future national combat air system. Work on the FCAS <strong>Combat Cloud</strong> (networked digital architecture) will continue separately. The collapse shifts momentum to the UK-Italy-Japan <strong>Global Combat Air Programme (GCAP)</strong>, which has an agreed industrial framework and committed funding. The failure symbolizes Europe&rsquo;s persistent inability to consolidate defense procurement even as rearmament spending surges.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Reshuffling European defense allocations.</strong> GCAP partners (UK, Italy, Japan) gain strategic advantage. National programs and bridge orders for existing platforms (Eurofighter, Rafale) become more likely, benefiting incumbents. Airbus defense division faces strategic uncertainty.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> BAE Systems (BA.L &mdash; GCAP lead, Eurofighter orders) &bull; Leonardo (LDO.MI &mdash; GCAP partner) &bull; Mitsubishi Heavy Industries (7011.T &mdash; GCAP Japan lead) &bull; Dassault Aviation (AM.PA &mdash; more Rafale bridge orders) &bull; Indra (IDR.MC &mdash; Spain&rsquo;s national alternative)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Airbus (AIR.PA &mdash; defense division loses flagship program) &bull; European defense consolidation ETFs face uncertainty &bull; Rheinmetall (RHM.DE) already down 39% from March 2025 peak at &euro;1,180
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: CHINA $295B AI DATA CENTER PLAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">China / Technology / AI Infrastructure &mdash; June 9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Unveils $295 Billion Plan to Build Nationwide AI Data Center Grid &mdash; Mandating 80% Domestic Chips, Squeezing Out Nvidia</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Bloomberg reported on June 9 that China is preparing a <strong>2 trillion yuan ($295 billion) five-year initiative</strong> to build a nationwide network of interconnected AI data centers. The <strong>National Development and Reform Commission</strong> is drafting the blueprint, with state firms <strong>China Mobile and China Telecom</strong> operating the bulk of facilities. The plan aims to knit scattered computing hubs into a <strong>single interconnected grid by 2028</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The most significant geopolitical dimension: the plan mandates reliance on <strong>domestic suppliers including Huawei for at least 80% of technology</strong>, including AI chips &mdash; effectively locking out <strong>Nvidia and AMD</strong> from the world&rsquo;s largest state-directed AI infrastructure buildout. Funding will come from <strong>ultra-long-term special government bonds, sovereign funds, bank loans, and private capital</strong>. This represents Beijing&rsquo;s most concrete step yet toward AI self-sufficiency and directly escalates the U.S.-China tech cold war.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Massive shift in AI capex flows.</strong> $295B directed toward domestic chips crystallizes the revenue ceiling for U.S. semiconductor firms in China. Huawei&rsquo;s Ascend AI chips and SMIC&rsquo;s foundry capacity become strategic winners. Global AI infrastructure thesis intact but bifurcating along geopolitical lines.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> China Mobile (0941.HK), China Telecom (0728.HK) &mdash; primary operators &bull; SMIC (0981.HK) &mdash; domestic foundry &bull; Huawei ecosystem (private) &bull; KWEB (KraneShares China Internet ETF) &bull; Data center REITs with Asia exposure &bull; Copper/rare earth miners (increased infrastructure demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> NVDA (Nvidia &mdash; $295B TAM officially off-limits) &bull; AMD (China revenue at risk) &bull; Applied Materials (AMAT), Lam Research (LRCX) &mdash; equipment export restrictions tighten &bull; ASML (ASML) &mdash; China exposure ceiling confirmed
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Middle East de-escalation is the macro catalyst today.</strong> Oil&rsquo;s sharp pullback (WTI -3.4%, Brent -2.97%) on Iran&rsquo;s ceasefire declaration and rising Hormuz ship traffic is a relief rally &mdash; but fragile. If talks collapse, oil spikes back above $95 instantly. Energy longs (XLE, COP, XOM) are a hedge either way; airlines remain vulnerable. Gold above $4,300 reflects persistent uncertainty.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China&rsquo;s $295B AI plan accelerates tech bifurcation.</strong> The explicit 80% domestic chip mandate is the clearest signal yet that Nvidia and AMD face a structural revenue ceiling in China. U.S. semiconductor names sold off (Nasdaq -2%). Conversely, Chinese AI infrastructure plays &mdash; China Mobile, China Telecom, SMIC &mdash; are medium-term beneficiaries. The global AI capex supercycle is intact but splitting into two separate ecosystems.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch pandemic risk and European defense reshuffling.</strong> The DRC Ebola outbreak could become a market-moving event if it reaches major cities or crosses into West Africa &mdash; pandemic preparedness names (MRNA, LAKE) are cheap insurance. Europe&rsquo;s FCAS collapse benefits GCAP partners (BAE, Leonardo, MHI) and guarantees more Rafale/Eurofighter bridge orders. The Philippines earthquake is tragic but market-contained.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 9, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-1.45%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-2.00%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+2.17% (65,416)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">-0.47%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$91.45 (-2.97%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$88.20 (-3.40%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$4,300+ (+0.8%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">U.S. Treasuries</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Yields rising (hawkish jobs data)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; Al Jazeera &bull; Bloomberg &bull; NPR &bull; Reuters &bull; PHIVOLCS &bull; U.S. CDC &bull; WHO &bull; Avio Space &bull; MiGFlug &bull; Simple Flying &bull; CaixaBank Research &bull; Trading Economics &bull; Yahoo Finance &bull; Fortune &bull; FX Empire &bull; IC Markets &bull; Trading Revealed
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
