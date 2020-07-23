import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    grunduppgifter: {
      obligatoriska_uppgifter: {
        typ_deklreg: 'INK1',
        id_pers: '197501010001',
        typ_sksk: '1',
        ant_man_avdrgr: '12',
      },
      andra_uppgifter: {},
      skatte_avgiftssatser: {
        utdeb_kom: '33.7',
        utdeb_begrav: '0.25',
        utdeb_kyrk: '1.01',
      },
    },
    privata_inkomster: {
      tjansteinkomster: {
        ink_tj_lon: '100000',
        ink_tj_kostn: '15000',
        ink_tj_apens: '50000',
        ink_tj_ppens: '10000',
        ink_tj_ovr: '14000',
        ink_tj_hobby: '20000',
        ink_tj_faab: '35000',
      },
    },
    forseningsavgift: {
      forsen: {
        avg_forsen_br: '12000',
        proc_neds_forsen: '23000'
      }
    }
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'grunduppgifter',
      wrappers: ['accordion'],
      templateOptions: {label: 'Grunduppgifter och skattesatser'},
      fieldGroup: [
        {
          key: 'obligatoriska_uppgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Obligatoriska uppgifter'},
          fieldGroup: [
            {
              key: 'typ_deklreg',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Typ som beräkning ska göras på',
              },
            },
            {
              key: 'id_pers',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Personnummer/Organisationsnummer',
              },
            },
            {
              key: 'typ_sksk',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Typ av skattskyldig',
              },
            },
            {
              key: 'ant_man_avdrgr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet månader grundavdrag"',
              },
            },
          ],
        },
        {
          key: 'andra_uppgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Andra grunduppgifter'},
          fieldGroup: [
            {
              key: 'kod_pension',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Pensionsdebiteringskod',
              },
            },
            {
              key: 'invandrad',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Invandrad',
              },
            },
            {
              key: 'in_ut_vandrad',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Invandrad och utvandrad',
              },
            },
            {
              key: 'tid_dod',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Dödsfallsår',
              },
            },
            {
              key: 'lan',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Län',
              },
            },
            {
              key: 'kom',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommun',
              },
            },
            {
              key: 'skattereg',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Skatteregistrerad',
              },
            },
          ],
        },
        {
          key: 'skatte_avgiftssatser',
          wrappers: ['panel'],
          templateOptions: {label: 'Skatte- och avgiftssatser'},
          fieldGroup: [
            {
              key: 'utdeb_kom',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommunalskatt och Landstingsskatt',
              },
            },
            {
              key: 'utdeb_begrav',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Begravningsavgift',
              },
            },
            {
              key: 'utdeb_kyrk',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till Svenska kyrkan',
              },
            },
            {
              key: 'utdeb_samf1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 1',
              },
            },
            {
              key: 'utdeb_samf2',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 2',
              },
            },
            {
              key: 'utdeb_samf3',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 3',
              },
            },
            {
              key: 'utdeb_samf4',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 4',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'privata_inkomster',
      wrappers: ['accordion'],
      templateOptions: {label: 'Privata inkomster'},
      fieldGroup: [
        {
          key: 'tjansteinkomster',
          wrappers: ['panel'],
          templateOptions: {label: 'Tjänsteinkomster - lön, pension m.m.'},
          fieldGroup: [
            {
              key: 'ink_tj_lon',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning m.m.',
              },
            },
            {
              key: 'ink_tj_kosn',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kostnadsersättningar',
              },
            },
            {
              key: 'ink_tj_apens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Allmän pension och tjänstepensin m.m.',
              },
            },
            {
              key: 'ink_tj_ppens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Privat pension och livränta',
              },
            },
            {
              key: 'ink_tj_ovr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Andra inkomster som inte är pensionsgrundande',
              },
            },
            {
              key: 'ink_tj_hobby',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster, t.ex. hobby som du själv ska betala egenavgifter för',
              },
            },
            {
              key: 'ink_tj_faab',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vissa inkomster från fåmansbolag',
              },
            },
          ],
        },
        {
          key: 'avdrag_tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'Avdrag under tjänst'},
          fieldGroup: [
            {
              key: 'avdrb_tj_arbres',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Resor till och från arbetet',
              },
            },
            {
              key: 'avdr_tj_tjres',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Tjänsteresor',
              },
            },
            {
              key: 'avdr_tj_dubbo',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Tillfälligt arbete, dubbel bosättning och hemresor',
              },
            },
            {
              key: 'avdrb_tj_kostn',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Övriga utgifter',
              },
            },
          ],
        },
        {
          key: 'allmana_avdrag',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmäna avdrag'},
          fieldGroup: [
            {
              key: 'avdr_allm',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Socialförsäkringsavgifter enl. EU-förordningen m.m.',
              },
            },
          ],
        },
        {
          key: 'skattereduktioner',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktioner - underlag i deklaration'},
          fieldGroup: [
            {
              key: 'ulag_rot',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Rotarbete enligt meddelande eller som förmån',
              },
            },
            {
              key: 'ulag_rut',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Rutarbete enligt meddelande eller som förmån',
              },
            },
            {
              key: 'ulag_elskred',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattereduktion för förnybar el',
              },
            },
            {
              key: 'ulag_gavoskred',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattereduktion för gåva',
              },
            },
          ],
        },
        {
          key: 'privatbostad',
          wrappers: ['panel'],
          templateOptions: {label: 'Privatbostad, underlag för fastighetsavgift, uppgifter för reduktion'},
          fieldGroup: [
            {
              key: 'ulag_favg_hel_sma',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Småhus, ägarlägenhet, hel avgift',
              },
            },
            {
              key: 'ulag_favg_halv_sma',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Småhus, ägarlägenhet, halv avgift',
              },
            },
          ],
        },
        {
          key: 'smahus',
          wrappers: ['panel'],
          templateOptions: {label: 'Småhus/ägarlägenhet: Tomtmark, byggnad under uppförande'},
          fieldGroup: [
            {
              key: 'ulag_fsk_tomt_sma',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Småhus/ägarlägenhet: Tomtmark, byggnad under uppförande',
              },
            },
          ],
        },
        {
          key: 'kapitalinkomster',
          wrappers: ['panel'],
          templateOptions: {label: 'Kapitalinkomster - vinst vid försäljning av bostad m.m.'},
          fieldGroup: [
            {
              key: 'ink_kap_schablon',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Schablonintäkter',
              },
            },
            {
              key: 'ink_kap_rtautd',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ränteinkomster, utdelningar m.m.',
              },
            },
            {
              key: 'ink_kap_uthyr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott vid uthyrning av privatbostad',
              },
            },
            {
              key: 'ink_kap_aktie',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst fondadelar m.m.,  K4a, K4b,K9b, K10, K10a, K11, K12b, K13',
              },
            },
            {
              key: 'ink_kap_ovr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst ej marknadsnot. fondandelar,  K4d, K9b, K12c, K15a, K15b',
              },
            },
            {
              key: 'k5_k6_v',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst från bilaga K5 och K6, åtefört uppskov från K2e',
              },
            },
            {
              key: 'k7_k8_v',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst från bilaga K7 och K8',
              },
            },
          ],
        },
        {
          key: 'avdrag_kapital',
          wrappers: ['panel'],
          templateOptions: {label: 'Avdrag under kapital'},
          fieldGroup: [
            {
              key: 'avdr_kap_rta',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ränteutgifter m.m., förlust K4c m.m.',
              },
            },
            {
              key: 'avdr_kap_aktie',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust fondandelar m.m., K4a, K9B, K10, K12b, K13',
              },
            },
            {
              key: 'avdr_kap_ovr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust ej marknadsnot. fondandelar, K4d, K9B, K10a, K12C, K15a, K15b',
              },
            },
            {
              key: 'k5_k6_f',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust f rån bilaga K5 och K6',
              },
            },
            {
              key: 'k7_k8_f',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust f rån bilaga K7 och K8',
              },
            },
            {
              key: 'avdr_kap_invest',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Investeraravdrag från bilaga K11',
              },
            },
          ],
        },
        {
          key: 'utlandsk_forsakring',
          wrappers: ['panel'],
          templateOptions: {label: 'Utländsk försäkring - Avkastningsskatt'},
          fieldGroup: [
            {
              key: 'ulag_avkast_utkapf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Skatteunderlag för kapitalförsäkring',
              },
            },
            {
              key: 'ulag_avkast_utpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Skatteunderlag för pensionsföräkring',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'naringsinkomster',
      wrappers: ['accordion'],
      templateOptions: {label: 'Näringsinkomster'},
      fieldGroup: [
        {
          key: 'naringsverksamhet',
          wrappers: ['panel'],
          templateOptions: {label: 'Näringsverksamhet'},
          fieldGroup: [
            {
              key: 'ink_nrv_akt',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktiv näringsverksamhet, belopp från NE',
              },
            },
            {
              key: 'ink_nrv_hb_akt',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktiv näringsverksamhet, belopp från N3A',
              },
            },
            {
              key: 'ink_nrv_pass',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av passiv näringsverksamhet, belopp från NE',
              },
            },
            {
              key: 'ink_nrv_hb_pass',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av passiv näringsverksamhet, belopp från N3A',
              },
            },
            {
              key: 'bel_ink_liksa',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster för vilka uppdragsgivare ska betala socialavgifter, bruttoinkomst',
              },
            },
            {
              key: 'bel_kostn_liksa',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster för vilka uppdragsgivare ska betala socialavgifter, Kostnader',
              },
            },
            {
              key: 'ulag_nrv_slp_e',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för särskild löneskatt på pensionskostnader - Eget',
              },
            },
            {
              key: 'ulag_nrv_slp_a',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för särskild löneskatt på pensionskostnader - Anställda',
              },
            },
            {
              key: 'ulag_nrv_avkast_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för avkastningsskatt på pensionskostnader',
              },
            },
          ],
        },
        {
          key: 'rantefordelning',
          wrappers: ['panel'],
          templateOptions: {label: 'Räntefördelning'},
          fieldGroup: [
            {
              key: 'ink_kap_rtefordeln',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Positiv räntefördelning från NE, N3A',
              },
            },
            {
              key: 'avdr_kap_rtefordeln',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Negativ räntefördelning från NE, N3A',
              },
            },
          ],
        },
        {
          key: 'expansionsfondsskatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Underlag för expansionsfondsskatt'},
          fieldGroup: [
            {
              key: 'bel_expan_okn',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ökning av expansionsfond',
              },
            },
            {
              key: 'bel_expan_minskn',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Minskning av expansionsfond',
              },
            },
          ],
        },
        {
          key: 'nedsattning_egenavgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Nedsättning av egenavgifter'},
          fieldGroup: [
            {
              key: 'neds_egenavg_reg',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Regionalt nedsättningsbelopp för stödområde',
              },
            },
          ],
        },
        {
          key: 'allmanna_avdrag',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmänna avdrag'},
          fieldGroup: [
            {
              key: 'avdr_usk_nrv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underskott av aktiv näringsverksamhet som kan kvittas mot förvärvsinkomst',
              },
            },
          ],
        },
        {
          key: 'naringsfastighet_fastighetsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Näringsfastighet, underlag för fastighetsavgift'},
          fieldGroup: [
            {
              key: 'ulag_favg_hel_hyr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: bostäder, hel avgift',
              },
            },
            {
              key: 'ulag_favg_halv_hyr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: bostäder, halv avgift',
              },
            },
          ],
        },
        {
          key: 'naringsfastighet_fastighetsskatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Näringsfastighet, underlag för fastighetsskatt'},
          fieldGroup: [
            {
              key: 'ulag_fsk_tomt_hyr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: Tomtmark, bostäder under uppförande',
              },
            },
            {
              key: 'ulag_fsk_lokal',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: lokaler',
              },
            },
            {
              key: 'ulag_fsk_industri',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Industri och elproduktionsenhet, värmekraftverk',
              },
            },
            {
              key: 'ulag_fsk_vatten',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Elproduktionsenhet: vattenkraftverk',
              },
            },
            {
              key: 'ulag_fsk_vind',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Elproduktionsenhet: vindkraftverk',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'kapital',
      wrappers: ['accordion'],
      templateOptions: {label: 'Kapital - ej i deklarationsruta'},
      fieldGroup: [
        {
          key: 'schablonintakt_uppskov',
          wrappers: ['panel'],
          templateOptions: {label: 'Schablonintäkt uppskov'},
          fieldGroup: [
            {
              key: 'ink_kap_uppskov',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Schablonintäkt på uppskov',
              },
            },
          ],
        },
        {
          key: 'reavinst_reaforlust',
          wrappers: ['panel'],
          templateOptions: {label: 'Reavinst och reaförlust'},
          fieldGroup: [
            {
              key: 'ink_kap_rea',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Reavinster',
              },
            },
            {
              key: 'avdr_kap_rea',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Reaförluster',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'pgi',
      wrappers: ['accordion'],
      templateOptions: {label: 'Underlag för PGI och allmän pensionsavgift'},
      fieldGroup: [
        {
          key: 'pgi_tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-tjänst'},
          fieldGroup: [
            {
              key: 'inkt_tj1_kusum',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning över 999 kr',
              },
            },
            {
              key: 'inkt_tj2_kusum',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning under 1000 kr',
              },
            },
            {
              key: 'ink_ej_pgi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ej PGI-grundande lön, inaviserat manuellt',
              },
            },
            {
              key: 'mink_ej_pgi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ej PGI-grundande lön har aviserats in manuellt',
              },
            },
            {
              key: 'ink_tj1_kusum_avtal',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Varav lön, förmåner över 999 där personen ska betala arbetsgivaravgifterna',
              },
            },
            {
              key: 'arbavg_socavg',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Belopp egna inbetalda arbetsgivaravgifter skatteffri inkomst',
              },
            },
            {
              key: 'soc_ku',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön med ersättningskoder 100, 112, 113 och 121 enligt KU',
              },
            },
            {
              key: 'ink_pgi_soc_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön med ersättningskoder 100-113, 120 och 999 enligt KU',
              },
            },
          ],
        },
        {
          key: 'pgi_skattefri',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-skattefri'},
          fieldGroup: [
            {
              key: 'ink_pgi_skfri',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattefri PGI på lön',
              },
            },
            {
              key: 'ink_pgi_skfri_avtal',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattefri PGI på lön där personen själv betalar sociala avgifterna',
              },
            },
            {
              key: 'ink_nrv_pgi_skfri',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'PGI-underlag på skattefria näringsinkomster',
              },
            },
          ],
        },
        {
          key: 'pgi_avdrag_tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-avdrag-tjänst'},
          fieldGroup: [
            {
              key: 'avdr_tj_pgi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserat PGI-avdrag under tjänst',
              },
            },
            {
              key: 'mavdr_tj_pgi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'PGI-avdrag under tjänst har inaviserats manuellt',
              },
            },
            {
              key: 'r16',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Övriga inkomster tillsammans med tjänsteresor och/eller övriga utgivter över 5000',
              },
            },
            {
              key: 'avdr_tj_ej_pgi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserat belopp för avdrag under tjänst som inte påverkar personens PGI',
              },
            },
          ],
        },
        {
          key: 'pgi_hobby',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-hobby'},
          fieldGroup: [
            {
              key: 'ink_sjukp_hobby',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i hobby',
              },
            },
            {
              key: 'mink_sjukp_hobby',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i hobby',
              },
            },
            {
              key: 'ink_pgi_hobby_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI hobby inkl.  manuellt inaviserad jukpenning hobby',
              },
            },
            {
              key: 'mink_pgi_hobby_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI hobby, manuellt inaviserat',
              },
            },
          ],
        },
        {
          key: 'pgi_naring',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-näring'},
          fieldGroup: [
            {
              key: 'ink_sjukp_akt',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Sjukpenning som ingår i aktiv näringsverksamhet',
              },
            },
            {
              key: 'mink_sjukp_akt',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i aktiv näringsverksamhet',
              },
            },
            {
              key: 'ink_pgisjukpaf_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Sjukpenning av annat förvärv enligt KU, ersättningskod 200',
              },
            },
            {
              key: 'ink_nrv_pgi_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI aktiv näring inkl. sjukpenning aktiv näring',
              },
            },
            {
              key: 'mink_nrv_pgi_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI aktiv näring, manuellt inaviserat',
              },
            },
          ],
        },
        {
          key: 'allman_pensionsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmän pensionsavgift'},
          fieldGroup: [
            {
              key: 'mulag_pens_allm_anst',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för allmän pensionsavgift på anställning',
              },
            },
            {
              key: 'mulag_pens_allm_af',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för allmän pensionsavgift på annan förvärvsinkomst',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'skattereduktioner',
      wrappers: ['accordion'],
      templateOptions: {label: 'Underlag för skattereduktioner'},
      fieldGroup: [
        {
          key: 'skattereduktion_fastighetsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion för fastighetsavgift'},
          fieldGroup: [
            {
              key: 'sjuk_akt',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Får sjuk-och aktivitetsersättning. Beräkna skattereduktion',
              },
            },
            {
              key: 'ulag_favg_hel_sma_red',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för reduktionsfastighet, hel avgift',
              },
            },
            {
              key: 'ulag_favg_halv_sma_red',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för reduktionsfastighet, halv avgift',
              },
            },
            {
              key: 'avg_redfast',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för fastighetsavgift på reduktionsfastighet inaviserat',
              },
            },
            {
              key: 'mavg_redfast',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för fastighetsavgift på reduktionsfastighet finns',
              },
            },
          ],
        },
        {
          key: 'skattereduktion_sjoman',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion sjömän'},
          fieldGroup: [
            {
              key: 'dag_sjonar',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet dagar i närfart',
              },
            },
            {
              key: 'dag_sjofjarr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet dagar i fjärrfart',
              },
            },
          ],
        },
        {
          key: 'skattereduktion_pensionsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion allmän pensionsavgift'},
          fieldGroup: [
            {
              key: 'ink_ersart120',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomstrelaterad sjuk- och aktivitetsersättning, KU ersättningskod 120',
              },
            },
          ],
        },
        {
          key: 'skattereduktion_arbetsinkomst',
          wrappers: ['panel'],
          templateOptions: {label: 'Arbetsinkomst (jobbskatteavdrag)'},
          fieldGroup: [
            {
              key: 'ink_ej_arbskred',
              type: 'input',
              templateOptions: {
                type: 'text',
                label:
                  'Inkomster som inte ger jobbskatteavdrag enligt KU. Framräknat från gränssnitt' +
                  ' eller KU Ers.kod 100,101,102,104,107,111,112,120, 121, 405,406,408,410',
              },
            },
            {
              key: 'ulag_arbink_anst',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för jobbskatteavdrag, redan framräknat i applikation',
              },
            },
            {
              key: 'avdr_tj_ej_arbskred',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kostnader som påverkar jobbskattavdraget, redan framräknat i applikation',
              },
            },
            {
              key: 'ink_nrv_akt_ej_ees',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktivt bedriven näringsverksamhet utanför EES',
              },
            },
          ],
        },
        {
          key: 'skattereduktion_sjukersattning',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion sjuk- och aktivitetsersättning'},
          fieldGroup: [
            {
              key: 'ulag_sjukaktskred',
              type: 'input',
              templateOptions: {
                type: 'text',
                label:
                  'Summa sjuk- och aktivitetsersättningar. Framräknat från gränssnitt eller Ku ersättningskod 120 och 403.',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'utlandsk_skatt',
      wrappers: ['accordion'],
      templateOptions: {label: 'Underlag för avräkning av utländsk skatt'},
      fieldGroup: [
        {
          key: 'maskinell_avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Maskinell avräkning'},
          fieldGroup: [
            {
              key: 'aktie_sum_sk_utl',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Summa utländsk skatt på aktie som kan avräknas maskinellt',
              },
            },
            {
              key: 'invest_sum_sk_utl',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Summa utländsk skatt på InvesteringsSparKonto som kan avräknas maskinellt',
              },
            },
            {
              key: 'ink_kap_utl_avr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Utländsk kapitalinkomst på utdelningar',
              },
            },
            {
              key: 'ink_kap_utl_avr_invest',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Utländsk kapitalinkomst på investeringssparkonto',
              },
            },
          ],
        },
        {
          key: 'delvis_maskinell_avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Delvis maskinell avräkning'},
          fieldGroup: [
            {
              key: 'sum_bel_utl_avr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsbart belopp som aviserats in manuellt eller via applikation',
              },
            },
            {
              key: 'msum_bel_utl_avr',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat avräkningsbart belopp',
              },
            },
          ],
        },
        {
          key: 'manuell_avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Manuell avräkning'},
          fieldGroup: [
            {
              key: 'avrak_sk_utl',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuell avräkning har skett och skatter är inaviserade manuellt',
              },
            },
            {
              key: 'avt_kink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommunal skatt har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_sink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt på förvärvsinkomst har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_sink_kap',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt på kapital har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_exp',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Expansionsskatt har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_avkast_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på pensionskostnader har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_avkast_utkapf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på kapitalförsäkring har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'avt_avkast_utpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på pensionsförsäkring har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'crediti',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod Credit har tillämpats',
              },
            },
            {
              key: 'altex',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod alternativ exempt har tillämpats',
              },
            },
            {
              key: 'avrl',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod avräkningslagen har tillämpats',
              },
            },
            {
              key: 'exproi',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod exempt med progressionsuppräkning har tillämpats',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'skatter',
      wrappers: ['accordion'],
      templateOptions: {label: 'Skatter'},
      fieldGroup: [
        {
          key: 'kommunal_inkomststatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Kommunal inkomststatt'},
          fieldGroup: [
            {
              key: 'sk_kink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad kommunal inkomstskatt',
              },
            },
            {
              key: 'mdeb_kink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad kommunal inkomstskatt finns',
              },
            },
          ],
        },
        {
          key: 'statlig_inkomststatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Statlig inkomststatt'},
          fieldGroup: [
            {
              key: 'sk_sink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad statlig inkomstskatt på förvärvsinkomster',
              },
            },
            {
              key: 'mdeb_sink_forv',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad statlig inkomstskatt på förvärvsikomster finns',
              },
            },
            {
              key: 'ackink',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt beräknad enligt ackumulerad inkomst',
              },
            },
            {
              key: 'sk_sink_kap',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad statlig inkomstskatt på kapitalinkomster',
              },
            },
            {
              key: 'mdeb_sink_kap',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad statlig inkomstskatt på kapitalinkomster finns',
              },
            },
            {
              key: 'sk_exp',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad expansionsskatt',
              },
            },
            {
              key: 'mdeb_exp',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad expansionsfondsskatt finns',
              },
            },
          ],
        },
        {
          key: 'avkastningsskatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Avkastningsskatt'},
          fieldGroup: [
            {
              key: 'sk_avkast_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på pensionskostnader',
              },
            },
            {
              key: 'mdeb_avkast_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på pensionskostnader finns',
              },
            },
            {
              key: 'sk_avkast_utkapf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på kapitalförsäkring',
              },
            },
            {
              key: 'mdeb_avkast_utkapf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på kapitalförsäkring finns',
              },
            },
            {
              key: 'sk_avkast_utpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på pensionsföräkring',
              },
            },
            {
              key: 'mdeb_avkast_utpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på pensionsförsäkring finns',
              },
            },
          ],
        },
        {
          key: 'sarskild_loneskatt_pension',
          wrappers: ['panel'],
          templateOptions: {label: 'Särskild löneskatt på pension'},
          fieldGroup: [
            {
              key: 'sk_slp_anst',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på pensionskostnder för anställda',
              },
            },
            {
              key: 'mdeb_slp_anst',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad särskild löneskatt på pensionskostnader för anställda finns',
              },
            },
            {
              key: 'sk_slp_egen',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på egen pensionsförsäkringspremie',
              },
            },
            {
              key: 'mdeb_slp_egen',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad särskild löneskatt på egen pensionsförsäkringspremie finns',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'egenavgifter',
      wrappers: ['accordion'],
      templateOptions: {label: 'Egenavgifter och särskild löneskatt på vissa förvärvsinkomster'},
      fieldGroup: [
        {
          key: 'antal_karensdagar',
          wrappers: ['panel'],
          templateOptions: {label: 'Antal karensdagar fördelat på helt år (365/366)när karens anmälts till F-k'},
          fieldGroup: [
            {
              key: 'ant_dagomr_8',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '1 dags karens',
              },
            },
            {
              key: 'ant_dagomr_1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '7 dagars karens',
              },
            },
            {
              key: 'ant_dagomr_2',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '14 dagars karens',
              },
            },
            {
              key: 'ant_dagomr_3',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '30 dagars karens',
              },
            },
            {
              key: 'ant_dagomr_4',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '60 dagars karens',
              },
            },
            {
              key: 'ant_dagomr_5',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '90 dagars karens',
              },
            },
          ],
        },
        {
          key: 'manuella_underlag_egenavgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Manuella underlag för egenavgifter'},
          fieldGroup: [
            {
              key: 'ulag_egenavgex1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för egenavgifter för föregående år',
              },
            },
            {
              key: 'mulag_sjukf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för sjufkörsäkringsavgift',
              },
            },
            {
              key: 'mulag_forf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för föräldraförsäkringsavgift',
              },
            },
            {
              key: 'mulag_aldpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för ålderspensionsavgift',
              },
            },
            {
              key: 'mulag_eftlpens',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för efterlevandepensionsavgift',
              },
            },
            {
              key: 'mulag_arbm',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för arbetsmarknadsavgift',
              },
            },
            {
              key: 'mulag_arbskad',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för arbetsskadeavgift',
              },
            },
            {
              key: 'mulag_lone',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för allmän löneavgift',
              },
            },
          ],
        },
        {
          key: 'slf',
          wrappers: ['panel'],
          templateOptions: {label: 'Särskild löneskatt på vissa förvärvsinkomster (SLF)'},
          fieldGroup: [
            {
              key: 'ink_nrv_slf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för SLF på passiva inkomster och vissa aktiva inkomster',
              },
            },
            {
              key: 'mink_nrv_slf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för SLF på passiva inkomster och vissa aktiva inkomster finns',
              },
            },
            {
              key: 'ink_nrv_pass_utl',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för passivt bedriven näringsverksamhet i utlandet',
              },
            },
            {
              key: 'avg_slf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på vissa förvärvsinkomster',
              },
            },
            {
              key: 'mdeb_slf',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad särskild löneskatt på vissa fövärvsinkomster finns',
              },
            },
          ],
        },
      ],
    },
    /*
        {
          key: 'forseningsavgift',
          wrappers: ['accordion'],
          templateOptions: {label: 'Förseningsavgift'},
          fieldGroup: [
            {
              key: 'avg_forsen_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad förseningsavgift',
              },
            },
            {
              key: 'proc_neds_forsen',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad nedsättning av förseningsavgift i procent',
              },
            },
          ],
        },
    */
    {
      key: 'forseningsavgift',
      wrappers: ['accordion'],
      templateOptions: {label: 'Förseningsavgift'},
      fieldGroup: [
        {
          key: 'forsen',
          templateOptions: {},
          fieldGroup: [
            {
              key: 'avg_forsen_br',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad förseningsavgift',
              },
            },
            {
              key: 'proc_neds_forsen',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad nedsättning av förseningsavgift i procent',
              },
            },
          ]
        }
      ],
    },
  ];

  submit() {

    let acc;
    Object.values(this.model).forEach(v1 => {
      Object.values(v1).forEach(v2 => {
        acc = {...acc, ...v2};
      });
    });
    console.log(acc);

    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}
