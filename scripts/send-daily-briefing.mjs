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

    <!-- ===================== EVENT 1: IRAN-US DOHA TALKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Rejects Face-to-Face Talks with U.S. as Indirect Negotiations Resume in Doha; Hormuz Remains Flashpoint</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Indirect technical talks between Washington and Tehran have resumed in Doha today, mediated by <strong>Qatar and Pakistan</strong>, but Iran has firmly rejected direct face-to-face negotiations with the United States. Tehran insists the U.S. must first fulfill key clauses of the <strong>June 17 Memorandum of Understanding</strong> &mdash; particularly regarding the conflict in Lebanon &mdash; before any direct talks proceed. The MoU gives both sides a <strong>60-day window</strong> to reach a comprehensive deal, with a temporary de-escalation agreement set to expire after July 4.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>International Maritime Organization has logged 49 confirmed incidents</strong> in the Strait of Hormuz as of June 30. Iran has exported over <strong>40 million barrels of crude</strong> since the U.S. lifted its naval blockade and is selling oil at roughly <strong>20% above pre-war prices</strong>. Meanwhile, Saudi Arabia has reportedly <strong>refused to allow the U.S. to use its bases and airspace</strong>, prompting White House threats to withhold interception systems. Brent crude rose 0.3% to <strong>$73.20/bbl</strong> on the news before reversing to close near <strong>$72.25</strong> as cautious optimism about indirect talks offset the hawkish rhetoric.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent at ~$72.25/bbl, WTI at ~$68.06. Oil fell ~1% on the day as the resumption of indirect talks eased worst-case fears. However, post-July 4 expiry of the de-escalation window could re-inject a $5&ndash;10 geopolitical premium. Tanker freight rates remain elevated; war-risk insurance premiums doubling mariner pay on Hormuz routes.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> FRO (Frontline &mdash; tanker rates elevated) &bull; INSW (International Seaways) &bull; DAL, UAL, RYAAY (airlines benefit from falling crude) &bull; LMT, RTX, NOC (defense &mdash; sustained Gulf tension) &bull; Saudi Aramco (2222.SR &mdash; selling at premium)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM, CVX, SHEL, BP, TTE (oil majors &mdash; Brent falling from $120+ highs) &bull; Energy-importing EM currencies (INR, THB, PHP) &bull; USO (U.S. Oil Fund &mdash; crude retreating)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EU CUSTOMS DUTY ON E-COMMERCE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">European Union / Trade Policy / E-Commerce &mdash; July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EU Enforces New Customs Duty on Low-Value Imports Effective Today &mdash; Directly Targeting Shein, Temu, and AliExpress</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Effective today, July 1, 2026, the European Union has <strong>ended the de minimis exemption</strong> that previously allowed goods under EUR 150 to enter duty-free. A flat <strong>EUR 3 customs duty per product category per parcel</strong> now applies to all low-value imports. A package containing a textile item, footwear, and a tech product would face a EUR 9 charge. The measure will remain in force until <strong>June 30, 2028</strong> and was ratified by the EU Council in December 2025.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The policy directly targets the <strong>billions of ultra-cheap parcels</strong> shipped annually from China to European consumers via platforms like Shein, Temu, and AliExpress, which had undercut European retailers by exploiting the duty-free threshold. Both <strong>Shein and Temu have pre-emptively shifted to EU-based warehousing</strong> and semi-managed seller models to mitigate costs. The EU expects significant new customs revenue while leveling the playing field for domestic retailers like <strong>Inditex (Zara), H&amp;M, and Zalando</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Trade:</strong> A structural shift in EU cross-border e-commerce. Chinese direct-to-consumer exports to Europe face higher friction. European consumer prices on budget goods will rise, potentially redirecting demand to local retailers. EU-based 3PL and logistics providers benefit from warehousing demand shift.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> ITX.MC (Inditex/Zara &mdash; less Chinese competition) &bull; HM-B.ST (H&amp;M) &bull; ZAL.DE (Zalando) &bull; ABF.L (Primark/ABF) &bull; AMZN (Amazon &mdash; already operates EU warehouses, insulated) &bull; DHL.DE (DHL &mdash; local fulfillment demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDD (PDD Holdings/Temu &mdash; higher EU operating costs) &bull; BABA, 9988.HK (Alibaba/AliExpress &mdash; cross-border headwinds) &bull; SHEIN (private &mdash; core model disrupted) &bull; Chinese export-oriented small caps
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Central/East Africa / Public Health / Biotech &mdash; July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ebola Outbreak Becomes Third-Largest on Record &mdash; 1,155 Cases, 360+ Dead, No Vaccine Exists for Bundibugyo Strain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The WHO published its <strong>Situation Report #9</strong> today confirming the Ebola outbreak in the Democratic Republic of the Congo and Uganda has surpassed <strong>1,155 confirmed cases with 360+ deaths</strong>. The outbreak, caused by the <strong>Bundibugyo virus strain</strong> (32% fatality rate, comparable to smallpox), was declared a <strong>Public Health Emergency of International Concern (PHEIC)</strong> in mid-May. Critically, <strong>no approved vaccine or specific treatment exists</strong> for this strain.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The outbreak has spread from northeastern DRC&rsquo;s Ituri Province to <strong>North Kivu, South Kivu, and Uganda&rsquo;s capital Kampala</strong>, raising fears of wider regional transmission. <strong>CEPI is fast-tracking three investigational vaccine candidates</strong> from IAVI, Moderna, and the University of Oxford. Eli Lilly has made a <strong>$4 billion push</strong> into vaccine development. The DRC is the world&rsquo;s largest cobalt producer and a major copper source, making supply chain disruption a material risk for the global battery and electronics industries.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Biotech &amp; Commodities:</strong> Pharma/biotech sector surging on vaccine race. DRC cobalt/copper supply disruption risk is material for EV battery supply chains. EM risk sentiment for Central/East Africa deteriorating. Travel and tourism to the region under pressure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> SNGX (Soligenix &mdash; +110% on thermostable vaccine platform) &bull; MRNA (Moderna &mdash; CEPI-backed candidate) &bull; LLY (Eli Lilly &mdash; $4B vaccine push) &bull; CODX (Co-Diagnostics &mdash; Bundibugyo PCR test) &bull; EBS (Emergent BioSolutions &mdash; Ebola countermeasures)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GLEN.L (Glencore &mdash; DRC cobalt exposure) &bull; 3993.HK (CMOC Group &mdash; DRC mining) &bull; FCX (Freeport-McMoRan) &bull; African airline stocks &bull; Regional tourism ETFs
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EUROPEAN HEAT WAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Pan-European / Climate / Energy &mdash; June 30&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Record Heatwave Grips 130 Million Europeans &mdash; Power Grids Strained, Italy Facing Blackouts, Nuclear Plants Curtailed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A historic heat dome continues to bake Europe with temperatures <strong>10&ndash;15&deg;C above normal</strong> across more than a dozen countries. Over <strong>130 million people in Central and Eastern Europe</strong> are enduring temperatures above 35&deg;C, with records broken in Belgium, France, Germany, Hungary, Romania, Italy, the Netherlands, Poland, Czechia, Denmark, Spain, and the UK. France has recorded its <strong>hottest day in history for the second consecutive day</strong>. The UK logged its <strong>highest-ever June temperature</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Italy is already experiencing power outages</strong> from surging air-conditioning demand. France &mdash; a cornerstone of Europe&rsquo;s electricity network &mdash; must <strong>curtail nuclear output</strong> because cooling water temperatures exceed regulatory limits. German spot electricity hit <strong>EUR 207.84/MWh</strong> (highest since November 2025). Emergency medical calls are up <strong>20%</strong> across the continent. Only ~20% of European homes have air conditioning versus ~90% in the U.S., creating deadly conditions. Agricultural commodities face drought risk across southern and central Europe.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Electricity &amp; Agriculture:</strong> European spot power above EUR 115/MWh across most markets. DAX, CAC 40, FTSE 100 each down ~0.2%. Agricultural commodities bid on drought risk. Climate adaptation becoming an investable macro theme. Reduced labor productivity dragging on GDP. Fortune estimates heat waves could cost Europe&rsquo;s largest economies $638 billion by 2030.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> CARR (Carrier Global &mdash; world&rsquo;s largest HVAC maker) &bull; 6367.T (Daikin &mdash; cooling equipment surge) &bull; JCI (Johnson Controls) &bull; ETN (Eaton &mdash; grid infrastructure) &bull; ENPH (Enphase &mdash; solar generation surging) &bull; ADM, BG (grain traders watching crop yields)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWG (iShares Germany ETF &mdash; EUR 207/MWh electricity) &bull; EWQ (iShares France ETF &mdash; nuclear curtailments) &bull; ENEL.MI (Enel &mdash; outage risk) &bull; MUV2.DE (Munich Re) &bull; SREN.SW (Swiss Re) &bull; ALV.DE (Allianz &mdash; heat/wildfire claims)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: UKRAINE DRONE CAMPAIGN CRIPPLES RUSSIAN REFINERIES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Russia-Ukraine / Energy / Defense &mdash; June 28&ndash;July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine&rsquo;s Deep-Strike Drone Campaign Plunges Russia into Summer Fuel Crisis &mdash; Moscow Refinery Offline Until Year-End</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine&rsquo;s long-range drone campaign has escalated dramatically, striking targets <strong>up to 1,200 miles inside Russian territory</strong> and setting multiple oil refineries ablaze. Fresh strikes on June 28 hit <strong>two more Russian refineries</strong> as Kyiv intensifies pressure on Moscow&rsquo;s energy infrastructure. The <strong>Moscow Kapotnya refinery</strong> &mdash; which supplied 40% of the capital region&rsquo;s fuel &mdash; was hit on June 12 and 18 and will be <strong>offline until at least end of 2026</strong>. Over <strong>20% of Russia&rsquo;s total refining capacity</strong> is now knocked offline.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Fuel rationing has spread across Russia with <strong>hours-long queues</strong> at gas stations, social media videos showing drivers fighting at pumps, and <strong>Crimea halting all civilian fuel sales</strong>. Russia&rsquo;s Deputy PM Novak is considering a <strong>total ban on diesel exports</strong> (petrol and jet fuel exports already halted). President Zelensky warned that <strong>&ldquo;Moscow will burn&rdquo;</strong> if Putin continues the war. The campaign validates the asymmetric warfare thesis &mdash; relatively low-cost drones are crippling a nuclear power&rsquo;s domestic fuel supply, a paradigm shift watched closely by NATO defense planners.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy &amp; Defense:</strong> Russia&rsquo;s exit from global diesel/gasoil exports tightens European supply. Ruble under extreme pressure from inflation and collapsing export revenue. The drone campaign validates increased NATO defense spending and reshapes the defense-industrial thesis &mdash; cheap autonomous systems defeating conventional infrastructure.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> AVAV (AeroVironment &mdash; leading drone/loitering munition maker) &bull; LMT (Lockheed Martin) &bull; RTX (Raytheon) &bull; ITA (iShares U.S. Aerospace &amp; Defense ETF) &bull; DFEN (3x Defense Bull) &bull; WEAT (Teucrium Wheat &mdash; Russian harvest at risk from fuel shortages)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Ruble (RUB &mdash; collapsing) &bull; Russian sovereign bonds &bull; ERUS (iShares MSCI Russia ETF) &bull; European energy-intensive industrials (diesel cost spikes) &bull; BASF (BAS.DE), ThyssenKrupp (TKA.DE)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil&rsquo;s risk premium is compressing &mdash; but the July 4 deadline looms.</strong> Brent at $72 reflects cautious optimism on Iran-U.S. indirect talks resuming, but the de-escalation window expires after July 4. Any breakdown sends crude back toward $80&ndash;100+. Meanwhile, Russia&rsquo;s refinery crisis is tightening global diesel supply independently of the Hormuz situation. The asymmetry favors energy hedges (XLE, tanker plays) over outright shorts.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The EU is reshaping global e-commerce.</strong> Today&rsquo;s customs duty enforcement is a structural shift &mdash; not a one-off tariff. PDD Holdings (Temu) and Alibaba face real margin pressure in Europe while Inditex, H&amp;M, and Zalando get competitive relief. Amazon&rsquo;s EU warehouse network makes it a relative winner. This is the kind of quiet policy change that moves sector positioning over quarters, not days.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Ebola without a vaccine is the tail risk nobody is pricing.</strong> The Bundibugyo strain outbreak is now the third-largest on record with no approved vaccine. If it reaches West Africa or spreads beyond East/Central Africa, the DRC&rsquo;s cobalt and copper exports face disruption &mdash; a direct hit to EV battery supply chains. Biotech names with Ebola exposure (MRNA, LLY, SNGX) have asymmetric upside.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Defense spending is being validated in real time.</strong> Ukraine&rsquo;s drones are crippling Russia&rsquo;s fuel supply with technology costing a fraction of traditional weapons. AVAV (AeroVironment) is the purest play on this paradigm shift. Europe&rsquo;s simultaneous heat wave &mdash; with EUR 207/MWh German power &mdash; reinforces the parallel secular theme of climate adaptation spending (CARR, ETN, reinsurance exposure).
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; July 1, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,483.23 (-0.22%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq Composite</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">26,040.03 (-0.66%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">52,305.24 (-0.03%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">DAX / CAC 40 / FTSE</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Each ~-0.2% (heat wave drag)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$72.25/bbl (-0.96%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$68.06/bbl (-2.07%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EU Electricity (DE)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">EUR 207.84/MWh (heat wave peak)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~$4,000/oz (safe-haven bid)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">H1 2026 Performance</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">S&amp;P +14.9% / Nasdaq +21.4% (best since Q2 2020)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Fed Chair Warsh</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">No rate signal at ECB Forum</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Axios &bull; Bloomberg &bull; CBS News &bull; CDC &bull; CNN &bull; CNBC &bull; EU Council (Consilium) &bull; Euronews &bull; Fortune &bull; HDFC Sky &bull; Motley Fool &bull; NBC News &bull; NPR &bull; RFE/RL &bull; ReliefWeb &bull; Reuters &bull; U.S. News &bull; WHO &bull; Yahoo Finance &bull; Wikipedia Current Events
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
