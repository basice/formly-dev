import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
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
              key: 'TYP_DEKLREG',
              type: 'input',
              templateOptions: {

                type: 'text',
                label: 'Typ som beräkning ska göras på',
              },
            },
            {
              key: 'ID_PERS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Personnummer/Organisationsnummer',
              },
            },
            {
              key: 'TYP_SKSK',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Typ av skattskyldig',
              },
            },
            {
              key: 'ANT_MAN_AVDRGR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet månader grundavdrag"',
              },
            },
          ],
        },
        {
          key: 'andra-uppgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Andra grunduppgifter'},
          fieldGroup: [
            {
              key: 'KOD_PENSION',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Pensionsdebiteringskod',
              },
            },
            {
              key: 'INVANDRAD',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Invandrad',
              },
            },
            {
              key: 'IN_UT_VANDRAD',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Invandrad och utvandrad',
              },
            },
            {
              key: 'TID_DOD',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Dödsfallsår',
              },
            },
            {
              key: 'LAN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Län',
              },
            },
            {
              key: 'LAN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Län',
              },
            },
            {
              key: 'KOM',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommun',
              },
            },
            {
              key: 'SKATTEREG',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Skatteregistrerad',
              },
            },
          ],
        },
        {
          key: 'skatte-avgiftssatser',
          wrappers: ['panel'],
          templateOptions: {label: 'Skatte- och avgiftssatser'},
          fieldGroup: [
            {
              key: 'UTDEB_KOM',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommunalskatt och Landstingsskatt',
              },
            },
            {
              key: 'UTDEB_BEGRAV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Begravningsavgift',
              },
            },
            {
              key: 'UTDEB_KYRK',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till Svenska kyrkan',
              },
            },
            {
              key: 'UTDEB_SAMF1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 1',
              },
            },
            {
              key: 'UTDEB_SAMF2',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 2',
              },
            },
            {
              key: 'UTDEB_SAMF3',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 3',
              },
            },
            {
              key: 'UTDEB_SAMF4',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avgift till annat trossamfund 4',
              },
            },
          ]
        },
      ],
    },
    {
      key: 'privata-inkomster',
      wrappers: ['accordion'],
      templateOptions: {label: 'Privata inkomster'},
      fieldGroup: [
        {
          key: 'tjansteinkomster',
          wrappers: ['panel'],
          templateOptions: {label: 'Tjänsteinkomster - lön, pension m.m.'},
          fieldGroup: [
            {
              key: 'INK_TJ_LON',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning m.m.',
              },
            },
            {
              key: 'INK_TJ_KOSN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kostnadsersättningar',
              },
            },
            {
              key: 'INK_TJ_APENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Allmän pension och tjänstepensin m.m.',
              },
            },
            {
              key: 'INK_TJ_PPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Privat pension och livränta',
              },
            },
            {
              key: 'INK_TJ_OVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Andra inkomster som inte är pensionsgrundande',
              },
            },
            {
              key: 'INK_TJ_HOBBY',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster, t.ex. hobby som du själv ska betala egenavgifter för',
              },
            },
            {
              key: 'INK_TJ_FAAB',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vissa inkomster från fåmansbolag',
              },
            },
          ],
        },
        {
          key: 'avdrag-tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'Avdrag under tjänst'},
          fieldGroup: [
            {
              key: 'AVDRB_TJ_ARBRES',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Resor till och från arbetet',
              },
            },
            {
              key: 'AVDR_TJ_TJRES',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Tjänsteresor',
              },
            },
            {
              key: 'AVDR_TJ_DUBBO',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Tillfälligt arbete, dubbel bosättning och hemresor',
              },
            },
            {
              key: 'AVDRB_TJ_KOSTN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Övriga utgifter',
              },
            },
          ],
        },
        {
          key: 'allmana-avdrag',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmäna avdrag'},
          fieldGroup: [
            {
              key: 'AVDR_ALLM',
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
              key: 'ULAG_ROT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Rotarbete enligt meddelande eller som förmån',
              },
            },
            {
              key: 'ULAG_RUT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Rutarbete enligt meddelande eller som förmån',
              },
            },
            {
              key: 'ULAG_ELSKRED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattereduktion för förnybar el',
              },
            },
            {
              key: 'ULAG_GAVOSKRED',
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
              key: 'ULAG_FAVG_HEL_SMA',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Småhus, ägarlägenhet, hel avgift',
              },
            },
            {
              key: 'ULAG_FAVG_HALV_SMA',
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
              key: 'ULAG_FSK_TOMT_SMA',
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
              key: 'INK_KAP_SCHABLON',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Schablonintäkter',
              },
            },
            {
              key: 'INK_KAP_RTAUTD',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ränteinkomster, utdelningar m.m.',
              },
            },
            {
              key: 'INK_KAP_UTHYR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott vid uthyrning av privatbostad',
              },
            },
            {
              key: 'INK_KAP_AKTIE',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst fondadelar m.m.,  K4a, K4b,K9b, K10, K10a, K11, K12b, K13',
              },
            },
            {
              key: 'INK_KAP_OVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst ej marknadsnot. fondandelar,  K4d, K9b, K12c, K15a, K15b',
              },
            },
            {
              key: 'K5_K6_V',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst från bilaga K5 och K6, åtefört uppskov från K2e',
              },
            },
            {
              key: 'K7_K8_V',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Vinst från bilaga K7 och K8',
              },
            },
          ],
        },
        {
          key: 'avdrag-kapital',
          wrappers: ['panel'],
          templateOptions: {label: 'Avdrag under kapital'},
          fieldGroup: [
            {
              key: 'AVDR_KAP_RTA',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ränteutgifter m.m., förlust K4c m.m.',
              },
            },
            {
              key: 'AVDR_KAP_AKTIE',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust fondandelar m.m., K4a, K9B, K10, K12b, K13',
              },
            },
            {
              key: 'AVDR_KAP_OVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust ej marknadsnot. fondandelar, K4d, K9B, K10a, K12C, K15a, K15b',
              },
            },
            {
              key: 'K5_K6_F',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust f rån bilaga K5 och K6',
              },
            },
            {
              key: 'K7_K8_F',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Förlust f rån bilaga K7 och K8',
              },
            },
            {
              key: 'AVDR_KAP_INVEST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Investeraravdrag från bilaga K11',
              },
            },
          ],
        },
        {
          key: 'utlandsk-forsakring',
          wrappers: ['panel'],
          templateOptions: {label: 'Utländsk försäkring - Avkastningsskatt'},
          fieldGroup: [
            {
              key: 'ULAG_AVKAST_UTKAPF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Skatteunderlag för kapitalförsäkring',
              },
            },
            {
              key: 'ULAG_AVKAST_UTPENS',
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
              key: 'INK_NRV_AKT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktiv näringsverksamhet, belopp från NE',
              },
            },
            {
              key: 'INK_NRV_HB_AKT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktiv näringsverksamhet, belopp från N3A',
              },
            },
            {
              key: 'INK_NRV_PASS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av passiv näringsverksamhet, belopp från NE',
              },
            },
            {
              key: 'INK_NRV_HB_PASS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av passiv näringsverksamhet, belopp från N3A',
              },
            },
            {
              key: 'BEL_INK_LIKSA',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster för vilka uppdragsgivare ska betala socialavgifter, bruttoinkomst',
              },
            },
            {
              key: 'BEL_KOSTN_LIKSA',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster för vilka uppdragsgivare ska betala socialavgifter, Kostnader',
              },
            },
            {
              key: 'ULAG_NRV_SLP_E',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för särskild löneskatt på pensionskostnader - Eget',
              },
            },
            {
              key: 'ULAG_NRV_SLP_A',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för särskild löneskatt på pensionskostnader - Anställda',
              },
            },
            {
              key: 'ULAG_NRV_AVKAST_15',
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
              key: 'INK_KAP_RTEFORDELN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Positiv räntefördelning från NE, N3A',
              },
            },
            {
              key: 'AVDR_KAP_RTEFORDELN',
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
              key: 'BEL_EXPAN_OKN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ökning av expansionsfond',
              },
            },
            {
              key: 'BEL_EXPAN_MINSKN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Minskning av expansionsfond',
              },
            },
          ],
        },
        {
          key: 'nedsattning-egenavgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Nedsättning av egenavgifter'},
          fieldGroup: [
            {
              key: 'NEDS_EGENAVG_REG',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Regionalt nedsättningsbelopp för stödområde',
              },
            },
          ],
        },
        {
          key: 'allmanna-avdrag',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmänna avdrag'},
          fieldGroup: [
            {
              key: 'AVDR_USK_NRV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underskott av aktiv näringsverksamhet som kan kvittas mot förvärvsinkomst',
              },
            },
          ],
        },
        {
          key: 'naringsfastighet-fastighetsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Näringsfastighet, underlag för fastighetsavgift'},
          fieldGroup: [
            {
              key: 'ULAG_FAVG_HEL_HYR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: bostäder, hel avgift',
              },
            },
            {
              key: 'ULAG_FAVG_HALV_HYR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: bostäder, halv avgift',
              },
            },
          ],
        },
        {
          key: 'naringsfastighet-fastighetsskatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Näringsfastighet, underlag för fastighetsskatt'},
          fieldGroup: [
            {
              key: 'ULAG_FSK_TOMT_HYR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: Tomtmark, bostäder under uppförande',
              },
            },
            {
              key: 'ULAG_FSK_LOKAL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Hyreshus: lokaler',
              },
            },
            {
              key: 'ULAG_FSK_INDUSTRI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Industri och elproduktionsenhet, värmekraftverk',
              },
            },
            {
              key: 'ULAG_FSK_VATTEN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Elproduktionsenhet: vattenkraftverk',
              },
            },
            {
              key: 'ULAG_FSK_VIND',
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
          key: 'schablonintakt-uppskov',
          wrappers: ['panel'],
          templateOptions: {label: 'Schablonintäkt uppskov'},
          fieldGroup: [
            {
              key: 'INK_KAP_UPPSKOV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Schablonintäkt på uppskov',
              },
            },
          ],
        },
        {
          key: 'reavinst-reaforlust',
          wrappers: ['panel'],
          templateOptions: {label: 'Reavinst och reaförlust'},
          fieldGroup: [
            {
              key: 'INK_KAP_REA',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Reavinster',
              },
            },
            {
              key: 'AVDR_KAP_REA',
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
          key: 'pgi-tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-tjänst'},
          fieldGroup: [
            {
              key: 'INKT_TJ1_KUSUM',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning över 999 kr',
              },
            },
            {
              key: 'INKT_TJ2_KUSUM',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön, förmåner, sjukpenning under 1000 kr',
              },
            },
            {
              key: 'INK_EJ_PGI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ej PGI-grundande lön, inaviserat manuellt',
              },
            },
            {
              key: 'MINK_EJ_PGI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Ej PGI-grundande lön har aviserats in manuellt',
              },
            },
            {
              key: 'INK_TJ1_KUSUM_AVTAL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Varav lön, förmåner över 999 där personen ska betala arbetsgivaravgifterna',
              },
            },
            {
              key: 'ARBAVG_SOCAVG',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Belopp egna inbetalda arbetsgivaravgifter skatteffri inkomst',
              },
            },
            {
              key: 'SOC_KU',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön med ersättningskoder 100, 112, 113 och 121 enligt KU',
              },
            },
            {
              key: 'INK_PGI_SOC_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Lön med ersättningskoder 100-113, 120 och 999 enligt KU',
              },
            },
          ],
        },
        {
          key: 'pgi-skattefri',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-skattefri'},
          fieldGroup: [
            {
              key: 'INK_PGI_SKFRI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattefri PGI på lön',
              },
            },
            {
              key: 'INK_PGI_SKFRI_AVTAL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för skattefri PGI på lön där personen själv betalar sociala avgifterna',
              },
            },
            {
              key: 'INK_NRV_PGI_SKFRI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'PGI-underlag på skattefria näringsinkomster',
              },
            },
          ],
        },
        {
          key: 'pgi-avdrag-tjanst',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-avdrag-tjänst'},
          fieldGroup: [
            {
              key: 'AVDR_TJ_PGI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserat PGI-avdrag under tjänst',
              },
            },
            {
              key: 'MAVDR_TJ_PGI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'PGI-avdrag under tjänst har inaviserats manuellt',
              },
            },
            {
              key: 'R16',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Övriga inkomster tillsammans med tjänsteresor och/eller övriga utgivter över 5000',
              },
            },
            {
              key: 'AVDR_TJ_EJ_PGI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserat belopp för avdrag under tjänst som inte påverkar personens PGI',
              },
            },
          ],
        },
        {
          key: 'pgi-hobby',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-hobby'},
          fieldGroup: [
            {
              key: 'INK_SJUKP_HOBBY',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i hobby',
              },
            },
            {
              key: 'MINK_SJUKP_HOBBY',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i hobby',
              },
            },
            {
              key: 'INK_PGI_HOBBY_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI hobby inkl.  manuellt inaviserad jukpenning hobby',
              },
            },
            {
              key: 'MINK_PGI_HOBBY_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI hobby, manuellt inaviserat',
              },
            },
          ],
        },
        {
          key: 'pgi-naring',
          wrappers: ['panel'],
          templateOptions: {label: 'PGI-näring'},
          fieldGroup: [
            {
              key: 'INK_SJUKP_AKT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Sjukpenning som ingår i aktiv näringsverksamhet',
              },
            },
            {
              key: 'MINK_SJUKP_AKT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad sjukpenning som ingår i aktiv näringsverksamhet',
              },
            },
            {
              key: 'INK_PGISJUKPAF_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Sjukpenning av annat förvärv enligt KU, ersättningskod 200',
              },
            },
            {
              key: 'INK_NRV_PGI_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI aktiv näring inkl. sjukpenning aktiv näring',
              },
            },
            {
              key: 'MINK_NRV_PGI_BR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag, brutto, på PGI aktiv näring, manuellt inaviserat',
              },
            },
          ],
        },
        {
          key: 'allman-pensionsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Allmän pensionsavgift'},
          fieldGroup: [
            {
              key: 'MULAG_PENS_ALLM_ANST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för allmän pensionsavgift på anställning',
              },
            },
            {
              key: 'MULAG_PENS_ALLM_AF',
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
          key: 'skattereduktion-fastighetsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion för fastighetsavgift'},
          fieldGroup: [
            {
              key: 'SJUK_AKT',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Får sjuk-och aktivitetsersättning. Beräkna skattereduktion',
              },
            },
            {
              key: 'ULAG_FAVG_HEL_SMA_RED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för reduktionsfastighet, hel avgift',
              },
            },
            {
              key: 'ULAG_FAVG_HALV_SMA_RED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för reduktionsfastighet, halv avgift',
              },
            },
            {
              key: 'AVG_REDFAST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för fastighetsavgift på reduktionsfastighet inaviserat',
              },
            },
            {
              key: 'MAVG_REDFAST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för fastighetsavgift på reduktionsfastighet finns',
              },
            },
          ],
        },
        {
          key: 'skattereduktion-sjoman',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion sjömän'},
          fieldGroup: [
            {
              key: 'DAG_SJONAR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet dagar i närfart',
              },
            },
            {
              key: 'DAG_SJOFJARR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Antalet dagar i fjärrfart',
              },
            },
          ],
        },
        {
          key: 'skattereduktion-pensionsavgift',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion allmän pensionsavgift'},
          fieldGroup: [
            {
              key: 'INK_ERSART120',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomstrelaterad sjuk- och aktivitetsersättning, KU ersättningskod 120',
              },
            },
          ],
        },
        {
          key: 'skattereduktion-arbetsinkomst',
          wrappers: ['panel'],
          templateOptions: {label: 'Arbetsinkomst (jobbskatteavdrag)'},
          fieldGroup: [
            {
              key: 'INK_EJ_ARBSKRED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inkomster som inte ger jobbskatteavdrag enligt KU. Framräknat från gränssnitt' +
                  ' eller KU Ers.kod 100,101,102,104,107,111,112,120, 121, 405,406,408,410',
              },
            },
            {
              key: 'ULAG_ARBINK_ANST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Underlag för jobbskatteavdrag, redan framräknat i applikation',
              },
            },
            {
              key: 'AVDR_TJ_EJ_ARBSKRED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kostnader som påverkar jobbskattavdraget, redan framräknat i applikation',
              },
            },
            {
              key: 'INK_NRV_AKT_EJ_EES',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Överskott av aktivt bedriven näringsverksamhet utanför EES',
              },
            },
          ],
        },
        {
          key: 'skattereduktion-sjukersattning',
          wrappers: ['panel'],
          templateOptions: {label: 'Skattereduktion sjuk- och aktivitetsersättning'},
          fieldGroup: [
            {
              key: 'ULAG_SJUKAKTSKRED',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Summa sjuk- och aktivitetsersättningar. Framräknat från gränssnitt eller Ku ersättningskod 120 och 403.',
              },
            },
          ],
        },
      ],
    },
    {
      key: 'utlandsk-skatt',
      wrappers: ['accordion'],
      templateOptions: {label: 'Underlag för avräkning av utländsk skatt'},
      fieldGroup: [
        {
          key: 'maskinell-avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Maskinell avräkning'},
          fieldGroup: [
            {
              key: 'AKTIE_SUM_SK_UTL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Summa utländsk skatt på aktie som kan avräknas maskinellt',
              },
            },
            {
              key: 'INVEST_SUM_SK_UTL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Summa utländsk skatt på InvesteringsSparKonto som kan avräknas maskinellt',
              },
            },
            {
              key: 'INK_KAP_UTL_AVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Utländsk kapitalinkomst på utdelningar',
              },
            },
            {
              key: 'INK_KAP_UTL_AVR_INVEST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Utländsk kapitalinkomst på investeringssparkonto',
              },
            },
          ],
        },
        {
          key: 'delvis-maskinell-avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Delvis maskinell avräkning'},
          fieldGroup: [
            {
              key: 'SUM_BEL_UTL_AVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsbart belopp som aviserats in manuellt eller via applikation',
              },
            },
            {
              key: 'MSUM_BEL_UTL_AVR',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat avräkningsbart belopp',
              },
            },
          ],
        },
        {
          key: 'manuell-avrakning',
          wrappers: ['panel'],
          templateOptions: {label: 'Manuell avräkning'},
          fieldGroup: [
            {
              key: 'AVRAK_SK_UTL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuell avräkning har skett och skatter är inaviserade manuellt',
              },
            },
            {
              key: 'AVT_KINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Kommunal skatt har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_SINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt på förvärvsinkomst har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_SINK_KAP',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt på kapital har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_EXP',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Expansionsskatt har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_AVKAST_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på pensionskostnader har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_AVKAST_UTKAPF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på kapitalförsäkring har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'AVT_AVKAST_UTPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avkastningsskatt på pensionsförsäkring har sänkts manuellt vid avräkning',
              },
            },
            {
              key: 'CREDITI',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod Credit har tillämpats',
              },
            },
            {
              key: 'ALTEX',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod alternativ exempt har tillämpats',
              },
            },
            {
              key: 'AVRL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Avräkningsmetod avräkningslagen har tillämpats',
              },
            },
            {
              key: 'EXPROI',
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
          key: 'kommunal-inkomststatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Kommunal inkomststatt'},
          fieldGroup: [
            {
              key: 'SK_KINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad kommunal inkomstskatt',
              },
            },
            {
              key: 'MDEB_KINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad kommunal inkomstskatt finns',
              },
            },
          ],
        },
        {
          key: 'statlig-inkomststatt',
          wrappers: ['panel'],
          templateOptions: {label: 'Statlig inkomststatt'},
          fieldGroup: [
            {
              key: 'SK_SINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad statlig inkomstskatt på förvärvsinkomster',
              },
            },
            {
              key: 'MDEB_SINK_FORV',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad statlig inkomstskatt på förvärvsikomster finns',
              },
            },
            {
              key: 'ACKINK',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Statlig inkomstskatt beräknad enligt ackumulerad inkomst',
              },
            },
            {
              key: 'SK_SINK_KAP',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad statlig inkomstskatt på kapitalinkomster',
              },
            },
            {
              key: 'MDEB_SINK_KAP',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad statlig inkomstskatt på kapitalinkomster finns',
              },
            },
            {
              key: 'SK_EXP',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad expansionsskatt',
              },
            },
            {
              key: 'MDEB_EXP',
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
              key: 'SK_AVKAST_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på pensionskostnader',
              },
            },
            {
              key: 'MDEB_AVKAST_15',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på pensionskostnader finns',
              },
            },
            {
              key: 'SK_AVKAST_UTKAPF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på kapitalförsäkring',
              },
            },
            {
              key: 'MDEB_AVKAST_UTKAPF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på kapitalförsäkring finns',
              },
            },
            {
              key: 'SK_AVKAST_UTPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad avkastningsskatt på pensionsföräkring',
              },
            },
            {
              key: 'MDEB_AVKAST_UTPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad avkastningsskatt på pensionsförsäkring finns',
              },
            },
          ],
        },
        {
          key: 'sarskild-loneskatt-pension',
          wrappers: ['panel'],
          templateOptions: {label: 'Särskild löneskatt på pension'},
          fieldGroup: [
            {
              key: 'SK_SLP_ANST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på pensionskostnder för anställda',
              },
            },
            {
              key: 'MDEB_SLP_ANST',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad särskild löneskatt på pensionskostnader för anställda finns',
              },
            },
            {
              key: 'SK_SLP_EGEN',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på egen pensionsförsäkringspremie',
              },
            },
            {
              key: 'MDEB_SLP_EGEN',
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
          key: 'antal-karensdagar',
          wrappers: ['panel'],
          templateOptions: {label: 'Antal karensdagar fördelat på helt år (365/366)när karens anmälts till F-k'},
          fieldGroup: [
            {
              key: 'ANT_DAGOMR_8',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '1 dags karens',
              },
            },
            {
              key: 'ANT_DAGOMR_1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '7 dagars karens',
              },
            },
            {
              key: 'ANT_DAGOMR_2',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '14 dagars karens',
              },
            },
            {
              key: 'ANT_DAGOMR_3',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '30 dagars karens',
              },
            },
            {
              key: 'ANT_DAGOMR_4',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '60 dagars karens',
              },
            },
            {
              key: 'ANT_DAGOMR_5',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: '90 dagars karens',
              },
            },
          ],
        },
        {
          key: 'manuella-underlag-egenavgifter',
          wrappers: ['panel'],
          templateOptions: {label: 'Manuella underlag för egenavgifter'},
          fieldGroup: [
            {
              key: 'ULAG_EGENAVGEX1',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för egenavgifter för föregående år',
              },
            },
            {
              key: 'MULAG_SJUKF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för sjufkörsäkringsavgift',
              },
            },
            {
              key: 'MULAG_FORF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för föräldraförsäkringsavgift',
              },
            },
            {
              key: 'MULAG_ALDPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för ålderspensionsavgift',
              },
            },
            {
              key: 'MULAG_EFTLPENS',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för efterlevandepensionsavgift',
              },
            },
            {
              key: 'MULAG_ARBM',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för arbetsmarknadsavgift',
              },
            },
            {
              key: 'MULAG_ARBSKAD',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserat underlag för arbetsskadeavgift',
              },
            },
            {
              key: 'MULAG_LONE',
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
              key: 'INK_NRV_SLF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för SLF på passiva inkomster och vissa aktiva inkomster',
              },
            },
            {
              key: 'MINK_NRV_SLF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för SLF på passiva inkomster och vissa aktiva inkomster finns',
              },
            },
            {
              key: 'INK_NRV_PASS_UTL',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt underlag för passivt bedriven näringsverksamhet i utlandet',
              },
            },
            {
              key: 'AVG_SLF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Inaviserad särskild löneskatt på vissa förvärvsinkomster',
              },
            },
            {
              key: 'MDEB_SLF',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Manuellt inaviserad särskild löneskatt på vissa fövärvsinkomster finns',
              },
            },
          ],
        }
      ],
    },
    {
      key: 'forseningsavgift',
      wrappers: ['accordion'],
      templateOptions: {label: 'Förseningsavgift'},
      fieldGroup: [
        {
          key: 'AVG_FORSEN_BR',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Manuellt inaviserad förseningsavgift',
          },
        },
        {
          key: 'PROC_NEDS_FORSEN',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Manuellt inaviserad nedsättning av förseningsavgift i procent',
          },
        },
      ],
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
