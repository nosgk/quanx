/*
*修改自https://github.com/fmz200/wool_scripts/blob/main/QuantumultX/scripts/server_location.js
*感谢@fmz200
*
*本人频道
*https://t.me/Ruhuhub
*/

if ($response.statusCode != 200) {
  $done(null);
}
var flags = new Map([["AC", "🇦🇨"], ["AD", "🇦🇩"], ["AE", "🇦🇪"], ["AF", "🇦🇫"], ["AG", "🇦🇬"], ["AI", "🇦🇮"], ["AL", "🇦🇱"], ["AM", "🇦🇲"], ["AO", "🇦🇴"], ["AQ", "🇦🇶"], ["AR", "🇦🇷"], ["AS", "🇦🇸"], ["AT", "🇦🇹"], ["AU", "🇦🇺"], ["AW", "🇦🇼"], ["AX", "🇦🇽"], ["AZ", "🇦🇿"], ["BA", "🇧🇦"], ["BB", "🇧🇧"], ["BD", "🇧🇩"], ["BE", "🇧🇪"], ["BF", "🇧🇫"], ["BG", "🇧🇬"], ["BH", "🇧🇭"], ["BI", "🇧🇮"], ["BJ", "🇧🇯"], ["BM", "🇧🇲"], ["BN", "🇧🇳"], ["BO", "🇧🇴"], ["BR", "🇧🇷"], ["BS", "🇧🇸"], ["BT", "🇧🇹"], ["BV", "🇧🇻"], ["BW", "🇧🇼"], ["BY", "🇧🇾"], ["BZ", "🇧🇿"], ["CA", "🇨🇦"], ["CD", "🇨🇩"], ["CF", "🇨🇫"], ["CG", "🇨🇬"], ["CH", "🇨🇭"], ["CI", "🇨🇮"], ["CK", "🇨🇰"], ["CL", "🇨🇱"], ["CM", "🇨🇲"], ["CN", "🇨🇳"], ["CO", "🇨🇴"], ["CP", "🇨🇵"], ["CR", "🇨🇷"], ["CU", "🇨🇺"], ["CV", "🇨🇻"], ["CW", "🇨🇼"], ["CX", "🇨🇽"], ["CY", "🇨🇾"], ["CZ", "🇨🇿"], ["DE", "🇩🇪"], ["DG", "🇩🇬"], ["DJ", "🇩🇯"], ["DK", "🇩🇰"], ["DM", "🇩🇲"], ["DO", "🇩🇴"], ["DZ", "🇩🇿"], ["EA", "🇪🇦"], ["EC", "🇪🇨"], ["EE", "🇪🇪"], ["EG", "🇪🇬"], ["EH", "🇪🇭"], ["ER", "🇪🇷"], ["ES", "🇪🇸"], ["ET", "🇪🇹"], ["EU", "🇪🇺"], ["FI", "🇫🇮"], ["FJ", "🇫🇯"], ["FK", "🇫🇰"], ["FM", "🇫🇲"], ["FO", "🇫🇴"], ["FR", "🇫🇷"], ["GA", "🇬🇦"], ["GB", "🇬🇧"], ["GD", "🇬🇩"], ["GE", "🇬🇪"], ["GF", "🇬🇫"], ["GH", "🇬🇭"], ["GI", "🇬🇮"], ["GL", "🇬🇱"], ["GM", "🇬🇲"], ["GN", "🇬🇳"], ["GP", "🇬🇵"], ["GR", "🇬🇷"], ["GT", "🇬🇹"], ["GU", "🇬🇺"], ["GW", "🇬🇼"], ["GY", "🇬🇾"], ["HK", "🇭🇰"], ["HN", "🇭🇳"], ["HR", "🇭🇷"], ["HT", "🇭🇹"], ["HU", "🇭🇺"], ["ID", "🇮🇩"], ["IE", "🇮🇪"], ["IL", "🇮🇱"], ["IM", "🇮🇲"], ["IN", "🇮🇳"], ["IR", "🇮🇷"], ["IS", "🇮🇸"], ["IT", "🇮🇹"], ["JM", "🇯🇲"], ["JO", "🇯🇴"], ["JP", "🇯🇵"], ["KE", "🇰🇪"], ["KG", "🇰🇬"], ["KH", "🇰🇭"], ["KI", "🇰🇮"], ["KM", "🇰🇲"], ["KN", "🇰🇳"], ["KP", "🇰🇵"], ["KR", "🇰🇷"], ["KW", "🇰🇼"], ["KY", "🇰🇾"], ["KZ", "🇰🇿"], ["LA", "🇱🇦"], ["LB", "🇱🇧"], ["LC", "🇱🇨"], ["LI", "🇱🇮"], ["LK", "🇱🇰"], ["LR", "🇱🇷"], ["LS", "🇱🇸"], ["LT", "🇱🇹"], ["LU", "🇱🇺"], ["LV", "🇱🇻"], ["LY", "🇱🇾"], ["MA", "🇲🇦"], ["MC", "🇲🇨"], ["MD", "🇲🇩"], ["MG", "🇲🇬"], ["MH", "🇲🇭"], ["MK", "🇲🇰"], ["ML", "🇲🇱"], ["MM", "🇲🇲"], ["MN", "🇲🇳"], ["MO", "🇲🇴"], ["MP", "🇲🇵"], ["MQ", "🇲🇶"], ["MR", "🇲🇷"], ["MS", "🇲🇸"], ["MT", "🇲🇹"], ["MU", "🇲🇺"], ["MV", "🇲🇻"], ["MW", "🇲🇼"], ["MX", "🇲🇽"], ["MY", "🇲🇾"], ["MZ", "🇲🇿"], ["NA", "🇳🇦"], ["NC", "🇳🇨"], ["NE", "🇳🇪"], ["NF", "🇳🇫"], ["NG", "🇳🇬"], ["NI", "🇳🇮"], ["NL", "🇳🇱"], ["NO", "🇳🇴"], ["NP", "🇳🇵"], ["NR", "🇳🇷"], ["NZ", "🇳🇿"], ["OM", "🇴🇲"], ["PA", "🇵🇦"], ["PE", "🇵🇪"], ["PF", "🇵🇫"], ["PG", "🇵🇬"], ["PH", "🇵🇭"], ["PK", "🇵🇰"], ["PL", "🇵🇱"], ["PM", "🇵🇲"], ["PR", "🇵🇷"], ["PS", "🇵🇸"], ["PT", "🇵🇹"], ["PW", "🇵🇼"], ["PY", "🇵🇾"], ["QA", "🇶🇦"], ["RE", "🇷🇪"], ["RO", "🇷🇴"], ["RS", "🇷🇸"], ["RU", "🇷🇺"], ["RW", "🇷🇼"], ["SA", "🇸🇦"], ["SB", "🇸🇧"], ["SC", "🇸🇨"], ["SD", "🇸🇩"], ["SE", "🇸🇪"], ["SG", "🇸🇬"], ["SI", "🇸🇮"], ["SK", "🇸🇰"], ["SL", "🇸🇱"], ["SM", "🇸🇲"], ["SN", "🇸🇳"], ["SR", "🇸🇷"], ["ST", "🇸🇹"], ["SV", "🇸🇻"], ["SY", "🇸🇾"], ["SZ", "🇸🇿"], ["TC", "🇹🇨"], ["TD", "🇹🇩"], ["TG", "🇹🇬"], ["TH", "🇹🇭"], ["TJ", "🇹🇯"], ["TL", "🇹🇱"], ["TM", "🇹🇲"], ["TN", "🇹🇳"], ["TO", "🇹🇴"], ["TR", "🇹🇷"], ["TT", "🇹🇹"], ["TV", "🇹🇻"], ["TW", "🇼🇸"], ["TZ", "🇹🇿"], ["UA", "🇺🇦"], ["UG", "🇺🇬"], ["UK", "🇬🇧"], ["UM", "🇺🇲"], ["US", "🇺🇸"], ["UY", "🇺🇾"], ["UZ", "🇺🇿"], ["VA", "🇻🇦"], ["VC", "🇻🇨"], ["VE", "🇻🇪"], ["VG", "🇻🇬"], ["VI", "🇻🇮"], ["VN", "🇻🇳"], ["VU", "🇻🇺"], ["WS", "🇼🇸"], ["YE", "🇾🇪"], ["YT", "🇾🇹"], ["ZA", "🇿🇦"], ["ZM", "🇿🇲"], ["ZW", "🇿🇼"],["BTN","努扎姆"],["INR","印度卢比"],["CNY","人民币元"],["MOP","澳元"],["HKD","港元"],["XAF","多哥非洲共同体法郎"],["DKK","丹麦克朗"],["UAH","格里夫尼亚"],["UZS","乌兹别克斯坦萨"],["UGX","乌干达先令"],["UYI","乌拉圭比索"],["UYU","乌拉圭比索"],["XAF","多哥非洲共同体法郎"],["YER","也门里亚尔"],["AMD","亚美尼亚德拉姆"],["ILS","新谢克尔"],["IQD","伊拉克第纳尔"],["IRR","伊朗里亚尔"],["BWP","普拉"],["BZD","伯利兹元"],["RUB","俄罗斯卢布"],["BGN","保加利亚列瓦"],["HRK","库纳"],["USD","美元"],["GMD","达拉西"],["ISK","冰岛克朗"],["GNF","几内亚法郎"],["XOF","多哥非洲共同体法郎"],["CHF","瑞士法郎"],["XAF","多哥非洲共同体法郎"],["CDF","刚果法郎"],["LYD","利比亚第纳尔"],["LRD","利比里亚元"],["CAD","加元"],["GHS","加纳赛地"],["XAF","多哥非洲共同体法郎"],["HUF","福林"],["USD","美元"],["SSP","南苏丹镑"],["ZAR","兰特"],["USD","美元"],["QAR","卡塔尔里亚尔"],["RWF","卢旺达法郎"],["EUR","欧元"],["INR","印度卢比"],["IDR","卢比"],["GTQ","格查尔"],["USD","美元"],["ERN","纳法克"],["CUC","可兑换比索"],["CUP","古巴比索"],["TWD","新台币元"],["KGS","索姆"],["DJF","吉布提法郎"],["KZT","腾格"],["COP","哥伦比亚比索"],["COU","哥伦比亚UnidaddeValorReal"],["CRC","哥斯达尼家科朗"],["XAF","多哥非洲共同体法郎"],["XDR","SDR(特别提款权）"],["AUD","澳元"],["TMT","土库曼斯坦新马纳特"],["TRY","土耳其里拉"],["XCD","东加勒比元"],["XCD","东加勒比元"],["STN","多布拉"],["EUR","欧元"],["XCD","东加勒比元"],["EUR","欧元"],["AUD","澳元"],["SHP","圣赫勒拿镑"],["EUR","欧元"],["ANG","荷属安的列斯盾"],["EUR","欧元"],["GYD","圭亚那元"],["TZS","坦桑尼亚先令"],["EGP","埃及镑"],["ETB","埃塞俄比亚比尔"],["AUD","澳元"],["TJS","索摩尼"],["XOF","多哥非洲共同体法郎"],["RSD","塞尔维亚第纳尔"],["SLL","利昂"],["EUR","欧元"],["SCR","塞舌尔卢比"],["MXN","墨西哥比索"],["MXV","墨西哥基金（UDI）"],["XOF","多哥非洲共同体法郎"],["XCD","东加勒比元"],["DOP","多米尼加比索"],["GBP","英镑"],["EUR","欧元"],["EUR","欧元"],["VEF","玻利瓦尔"],["BDT","塔卡"],["AOA","宽扎"],["XCD","东加勒比元"],["XCD","东加勒比元"],["EUR","欧元"],["USD","美元"],["NIO","尼加拉瓜新科多巴"],["NGN","奈拉"],["XOF","多哥非洲共同体法郎"],["NPR","尼泊尔卢比"],["BSD","巴哈马元"],["PKR","巴基斯坦卢比"],["BBD","巴巴多斯元"],["PGK","基那"],["PYG","瓜拉尼"],["PAB","巴波亚"],["USD","美元"],["BHD","巴林第纳尔"],["BRL","巴西雷亚尔"],["XOF","多哥非洲共同体法郎"],["NOK","挪威克朗"],["BIF","布隆迪法郎"],["EUR","欧元"],["USD","美元"],["USD","美元"],["NZD","新西兰元"],["ANG","荷属安的列斯盾"],["KYD","开曼群岛元"],["EUR","欧元"],["EUR","欧元"],["SBD","所罗门群岛元"],["NZD","新西兰元"],["EUR","欧元"],["NOK","挪威克朗"],["CZK","捷克克朗"],["MDL","摩尔多瓦尼乌"],["MAD","摩洛哥迪拉姆"],["EUR","欧元"],["BND","文莱元"],["FJD","斐济元"],["SZL","里兰基尼"],["EUR","欧元"],["EUR","欧元"],["NOK","挪威克朗"],["LKR","斯里兰卡卢比"],["SGD","新加坡元"],["XPF","非洲金融共同体法郎"],["NZD","新西兰元"],["JPY","日元"],["CLF","智利资金"],["CLP","智利比索"],["KPW","朝鲜圆"],["KHR","瑞尔"],["GBP","英镑"],["XCD","东加勒比元"],["DKK","丹麦克朗"],["GEL","拉里"],["EUR","欧元"],["EUR","欧元"],["EUR","欧元"],["MRU","乌吉亚"],["MUR","毛里求斯卢比"],["TOP","潘加’"],["SAR","沙特里亚尔"],["EUR","欧元"],["EUR","欧元"],["EUR","欧元"],["XPF","非洲金融共同体法郎"],["DKK","丹麦克朗"],["PLN","兹罗提"],["USD","美元"],["BAM","可兑换马克"],["THB","泰铢"],["GBP","英镑"],["ZWL","津巴布韦元"],["HNL","伦皮拉"],["HTG","古德"],["USD","美元"],["AUD","澳元"],["EUR","欧元"],["EUR","欧元"],["JMD","牙买加元"],["USD","美元"],["TTD","特立达与多巴哥元"],["BOB","玻利维亚诺"],["BOV","玻利维亚资金"],["AUD","澳元"],["SEK","瑞典克朗"],["CHE","WIR欧元"],["CHF","瑞士法郎"],["CHW","WIR法郎"],["EUR","欧元"],["XPF","非洲金融共同体法郎"],["VUV","瓦图"],["EUR","欧元"],["BYR","白俄罗斯卢布"],["BMD","百慕大元"],["NZD","新西兰元"],["GIP","直布罗陀镑"],["FKP","福克兰群岛镑"],["AUD","澳元"],["KWD","科威特第纳尔"],["KMF","科摩罗法郎"],["XOF","多哥非洲共同体法郎"],["PEN","新索尔"],["TND","突尼斯第纳尔"],["EUR","欧元"],["SOS","索马里先令"],["JOD","约旦第纳尔"],["NAD","纳米比亚元"],["ZAR","兰特"],["NZD","新西兰元"],["CVE","佛得角埃斯库多"],["MMK","缅甸元"],["RON","罗马尼亚列伊"],["USD","美元"],["USN","美元（次日）"],["USD","美元"],["USD","美元USDollar"],["USD","美元"],["LAK","基普"],["KES","肯尼亚先令"],["EUR","欧元"],["SDG","苏丹镑"],["SRD","苏里南元"],["GBP","英镑"],["USD","美元"],["USD","美元"],["EUR","欧元"],["MZN","莫桑比克梅蒂卡尔"],["LSL","鲁梯"],["ZAR","兰特"],["PHP","菲律宾比索"],["SVC","萨尔瓦多科朗"],["USD","美元"],["WST","塔拉"],["EUR","欧元"],["MNT","图格里克"],["XCD","东加勒比元"],["MAD","摩洛哥迪纳姆"],["EUR","欧元"],["AUD","澳元"],["XOF","多哥非洲共同体法郎"],["ZMW","赞比亚克瓦查"],["XAF","多哥非洲共同体法郎"],["AUD","澳元"],["VND","越南盾"],["AZN","阿塞拜疆马纳特"],["AFN","阿尼"],["DZD","阿尔及利亚第纳尔"],["ALL","列克"],["SYP","叙利亚镑"],["AED","阿联酋迪拉姆"],["OMR","阿曼里亚尔"],["ARS","阿根廷比索"],["AWG","阿鲁巴弗洛林"],["XUA","非洲发展银行账户单位"],["KRW","韩元"],["MKD","第纳尔"],["MVR","拉菲亚"],["MWK","克瓦查"],["EUR","欧元"],["MYR","马来西亚林吉特"],["EUR","欧元"],["USD","美元"],["EUR","欧元"],["MGA","阿里亚里"],["XOF","多哥非洲共同体法郎"],["LBP","黎巴嫩镑"],["EUR","欧元"]])
var Phone = ([["AF", "+93"],["AL", "+355"],["DZ", "+213"],["AS", "+1-684"],["AD", "+376"],["AO", "+244"],["AI", "+1-264"],["AQ", "+672"],["AG", "+1-268"],["AR", "+54"],["AM", "+374"],["AW", "+297"],["AU", "+61"],["AT", "+43"],["AZ", "+994"],["BS", "+1-242"],["BH", "+973"],["BD", "+880"],["BB", "+1-246"],["BY", "+375"],["BE", "+32"],["BZ", "+501"],["BJ", "+229"],["BM", "+1-441"],["BT", "+975"],["BO", "+591"],["BA", "+387"],["BW", "+267"],["BR", "+55"],["IO", "+246"],["BN", "+673"],["BG", "+359"],["BF", "+226"],["BI", "+257"],["KH", "+855"],["CM", "+237"],["CA", "+1"],["CV", "+238"],["KY", "+1-345"],["CF", "+236"],["TD","+235"],["CL","+56"],["CN","+86"],["CX","+61"],["CC","+61"],["CO","+57"],["KM","+269"],["CG","+242"],["CD","+243"],["CK","+682"],["CR","+506"],["CI","+225"],["HR","+385"],["CU","+53"],["CY","+357"],["CZ","+420"],["DK","+45"],["DJ","+253"],["DM","+1-767"],["DO","+1-809and1-829"],["EC","+593"],["EG","+20"],["SV","+503"],["GQ","+240"],["ER","+291"],["EE","+372"],["ET","+251"],["FK","+500"],["FO","+298"],["FJ","+679"],["FI","+358"],["FR","+33"],["GF","+594"],["PF","+689"],["GA","+241"],["GM","+220"],["GE","+995"],["DE","+49"],["GH","+233"],["GI","+350"],["GR","+30"],["GL","+299"],["GD","+1-473"],["GP","+590"],["GU","+1-671"],["GT","+502"],["GN","+224"],["GW","+245"],["GY","+592"],["HT","+509"],["HN","+504"],["HK","+852"],["HU","+36"],["IS","+354"],["IN","+91"],["ID","+62"],["IR","+98"],["IQ","+964"],["IE","+353"],["IL","+972"],["IT","+39"],["JM","+1-876"],["JP","+81"],["JO","+962"],["KZ","+7"],["KE","+254"],["KI","+686"],["KP","+850"],["KR","+82"],["KW","+965"],["KG","+996"],["LA","+856"],["LV","+371"],["LB","+961"],["LS","+266"],["LR","+231"],["LY","+218"],["LI","+423"],["LT","+370"],["LU","+352"],["MO","+853"],["MK","+389"],["MG","+261"],["MW","+265"],["MY","+60"],["MV","+960"],["ML","+223"],["MT","+356"],["MH","+692"],["MQ","+596"],["MR","+222"],["MU","+230"],["YT","+262"],["MX","+52"],["FM","+691"],["MD","+373"],["MC","+377"],["MN","+976"],["ME","+382"],["MS","+1-664"],["MA","+212"],["MZ","+258"],["MM","+95"],["NA","+264"],["NR","+674"],["NP","+977"],["NL","+31"],["AN","+599"],["NC","+687"],["NZ","+64"],["NI","+505"],["NE","+227"],["NG","+234"],["NU","+683"],["NF","+672"],["MP","+1-670"],["NO","+47"],["OM","+968"],["PK","+92"],["PW","+680"],["PS","+970"],["PA","+507"],["PG","+675"],["PY","+595"],["PE","+51"],["PH","+63"],["PN","+64"],["PL","+48"],["PT","+351"],["PR","+1-787and1-939"],["QA","+974"],["RE","+262"],["RO","+40"],["RU","+7"],["RW","+250"],["SH","+290"],["KN","+1-869"],["LC","+1-758"],["PM","+508"],["VC","+1-784"],["WS","+685"],["SM","+378"],["ST","+239"],["SA","+966"],["SN","+221"],["RS","+381"],["SC","+248"],["SL","+232"],["SG","+65"],["SK","+421"],["SI","+386"],["SB","+677"],["SO","+252"],["ZA","+27"],["GS","+500"],["ES","+34"],["LK","+94"],["SD","+249"],["SR","+597"],["SJ","+47"],["SZ","+268"],["SE","+46"],["CH","+41"],["SY","+963"],["TW","+886"],["TJ","+992"],["TZ","+255"],["TH","+66"],["TL","+670"],["TG","+228"],["TK","+690"],["TO","+676"],["TT","+1-868"],["TN","+216"],["TR","+90"],["TM","+993"],["TC","+1-649"],["TV","+688"],["UG","+256"],["UA","+380"],["AE","+971"],["GB","+44"],["US","+1"],["UY","+598"],["UZ","+998"],["VU","+678"],["VA","+379"],["VE","+58"],["VN","+84"],["VG","+1-284"],["VI","+1-340"],["WF","+681"],["EH","+212"],["YE","+967"],["ZM","+260"],["ZW","+263"]])
const emojis = ['🆘', '🈲', '⚠️', '🔞', '📵', '🚦', '🏖', '🖥', '📺', '🐧', '🐬', '🦉', '🍄', '⛳️', '🚴', '🤑', '👽', '🤖', '🎃', '👺', '👁', '🐶', '🐼', '🐌', '👥']
var city0 = "未知地区";
var isp0 = "未知服务商";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function city_check(para) {
  return para || city0;
}

function isp_check(para) {
  return para || isp0;
}

function country_check(para) {
  return para || city0;
}

function area_check(para) {
  return para === "中华民国" ? "台湾" : para;
}

function append(country, city) {
  return country === city ? country : country + ' ' + city;
}

// 一个简单的函数来实现将繁体中文转换为简体中文
function convertToSimplifiedChinese(text) {
  const simplifiedChars = [];
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 0x4e00 && charCode <= 0x9fff) {
      // 判断是否为中文字符
      const simplifiedCharCode = charCode - 0x4e00 + 0x4e00;
      const simplifiedChar = String.fromCharCode(simplifiedCharCode);
      simplifiedChars.push(simplifiedChar);
    } else {
      simplifiedChars.push(text[i]);
    }
  }
  return simplifiedChars.join('');
}

// 脚本开始
var body = $response.body;
var obj = JSON.parse(body);

const country = convertToSimplifiedChinese(city_check(obj['country']));
const city = convertToSimplifiedChinese(city_check(obj['city']));

// 展示在顶部开关左边（第1行） 格式：国旗 国家名 地区名
var title = flags.get(obj['countryCode']) + '「' + append(country, city) + '」' + city_check(obj['regionName']);
// 展示在顶部开关左边（第2行）
var subtitle = obj['isp'] + ' ' + '|' + ' ' + obj['query'];
// 不展示
var ip = obj['query'];
// 长按节点选择“查看节点信息”时的信息
var description = obj['continentCode'] + ' ' + obj['continent'] + '\n'
  + '🗺️国家：' + obj['countryCode'] + ' ' + obj['country'] + Phone.get(obj['countryCode']) + '\n'
  + '🌏地区：' + obj['region'] + ' ' + city_check(obj['regionName']) + obj['city'] + '\n'
  + '🖥️IP：' + obj['query'] + '\n'
  + '🪚reverseDNS：' + obj['reverse'] + '\n'
  + '👮‍♀️ISP：' + obj['isp'] + '\n'
  + '👮‍♀️ASN编号组织：' + obj['as'] + '\n'
  + '👮‍♀️AS名称：' +obj['asname'] + '\n'
  + '📍经纬度：' + obj['lat'] + ' / ' + obj['lon'] + '\n'
  + '🛌时区：' + obj['timezone'] + ' / ' + obj['offset'] + '秒' +'\n'
  + '🪙货币:' + obj['currency'] + flags.get(obj['currency']);
$done({title, subtitle, ip, description});
