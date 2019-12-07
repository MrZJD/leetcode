/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 
 * brutle force
 */
var findSubstring = function(s, words) {
    // 目标子串长度 - 匹配滑块
    let targetlen = words.reduce((len, w) => len + w.length, 0)
    let result = []

    if (!s || words.length === 0) return []

    for (let si = 0, count = s.length - targetlen; si <= count; si++) {
        let substring = s.slice(si, si + targetlen)

        // substring 进行长度拆分

        // 1. 规则过滤 -> words长度相同: 分割字符串
        let wlen = words[0].length
        let splitWords = []

        let wi = 0
        while (wi < targetlen) {
            splitWords.push(substring.slice(wi, wi + wlen))
            wi += wlen
        }

        // 2. 验证两个数组是否相等
        arrIsEqual(splitWords, words) && result.push(si)
    }

    return result
};

function arrIsEqual (arr1, arr2) {// 验证两个数组是否相等
    if (arr1.length !== arr2.length) {
        return false
    }

    let validMap = {}
    arr1.forEach((sw) => {
        validMap[sw] ? validMap[sw]++ : (
            validMap[sw] = 1
        )
    })
    for (let i = 0, len = arr2.length; i < len; i++) {
        let sw = arr2[i]
        let target = validMap[sw]
        if (!target) return false

        if (target <= 0) return false

        validMap[sw]--
    }
    return true // 不用重新检验validMap中是否有值>1 因为两个数组长度相等
}

/**
 * testcase:
 * "barfoothefoobarman"
 * ["foo","bar"] // 长度相同
 *  */

console.log(findSubstring('barfoo', ['foo', 'bar'])); // [0]
console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])); // [0, 9]
console.log(findSubstring('wordgoodstudentgoodword', ['word', 'student'])); // []
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])); // [6, 9, 12]
console.log(findSubstring('', [])); // []
console.log(findSubstring('', ['a'])); // []
console.log(findSubstring('ababaab', ['ab', 'ba', 'ba'])); // [1]
console.log(findSubstring('foobarfoobar', ['foo', 'bar'])); // [0, 3, 6]
console.log(findSubstring('pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel', ['dhvf', 'sind', 'ffsl', 'yekr', 'zwzq', 'kpeo', 'cila', 'tfty', 'modg', 'ztjg', 'ybty', 'heqg', 'cpwo', 'gdcj', 'lnle', 'sefg', 'vimw', 'bxcb'])); // [935]
console.log(findSubstring('xcsgedisbnkkiperkawetuiokxjmrapqcjyjpgbqulcecgxoitudpcrcccotcglhpjqeptwlhasjgpaqlutaznebptwszhbostvhmtvtunfcehtpboscbwdrpzlqgohahcivxfpruwuydpqgdijhgmaymloubxvizfdxkuqeqmetduajejqnxqlldbgezdoaitzuosagegakdcthnjwmzjyeleimjyotrqphipooxqyasrihagtbqthdzppipfbhvqodheufushomrvmyrqokxrkpiuepwnloeqyikfdfmrrepfcgvqsvjektbqixetnkmlsyqxddpwhgclozdgumnghoxpndlapxohvghbjyxsebfsbiaxwnedddvsggvxdjgapnbblbvpcbhdjibixhlbkgtsooptzvurlxswynmdoviafjidsvgcebwsslmrjiiufcsgqgjgcrghdomvmuaqwwkokwhvgsrmujskqbruszdxqqtckvuirewddgyjypxszpdrswlnvoklefprajzsqyxtewecncuorzfmvqztfjglrwcrfelxcjqghvkuzgjsgoedfdwmpdxgbcxiglgiuyqdtaxuginoxrsevqsmvpuwrrhxenhalxdhzbbilqwiiqofjgrewldpemplzwlmupvvsxddncoxsccdlvkjinypbnaamloiakdujhyylmwdqajbwtkgijvjyvlkhzsjlyeufctsorvergipzswhdrqcpbowdjfohjjonegdvdkoksejkcrovjsklgiorqeybnmprusoyedkwjthnmxkwpxjxfzpvdpxtcokyibwnggjrcseopqmgnvgtuvqamntqbfpmgnzowifydloscdbpyhkvebvqqqhuvwgclfshpyfsjwnnzodzxpudqrtjhcddajhmqztfzbajxnywddxatsdllyuvbzabkjnaihikiivhvtfyxcaswfdidafebfimovoyeyioidvfzadwffqbkvlovquzvcnjydkecstkyoqxrvvwdlznildebyfzasiavufznamnqcmhzhfcufscsvitvpswhdyfxdemfqbwundwwlaqsuvkqffnvalcfkjepotvgurdiwzehbxbwsnozvbuvnzcxigmyzjfuaicxjigkfkgzxuzuytplutkdaybbiixisbhdkqopawrztqurlleghojhmmkuxifrjovtellghcicsetfrxlylwhalsuiczblqwhuhsdpwlrqpnvimhhafoaqiuakwcwmyfiizlzvyqlpfiysrfsxvsneoqomsmasrjaqwznvsakzjiraplxlfnrwdfixujpluseqtrlluyldiedasdlxscvvjeudplrjdxbxqpkkpxpxctxuyktqornyxhdmuwxytaxmphwefoejhbfhmazarmaovecpczpwcokrwiydwcofftmttlwnzwbwceoffddhsnbqxzvubjzieocxbymduozzungztjjlykdxlarojtwpjyokwbntppujcakvlvilfniqnceyvdnebcqadgtuvpfzppxanhlsvvlkxrjuuyywarwdzrzwgevxwuzjemdzholfgwzcvayvtwbspaoxhlwdivmmhpnpgywovxqqzrnsnqmfrceaobdywrkeixvovrcsqtkqkyizovghxljnmmlkfvqoulesehkvcxlo', ['dbpyhkvebvqqqhuvwgclfshpyfs', 'jwnnzodzxpudqrtjhcddajhmqzt', 'fzbajxnywddxatsdllyuvbzabkj', 'naihikiivhvtfyxcaswfdidafeb', 'fimovoyeyioidvfzadwffqbkvlo', 'vquzvcnjydkecstkyoqxrvvwdlz', 'nildebyfzasiavufznamnqcmhzh', 'fcufscsvitvpswhdyfxdemfqbwu', 'ndwwlaqsuvkqffnvalcfkjepotv', 'gurdiwzehbxbwsnozvbuvnzcxig', 'myzjfuaicxjigkfkgzxuzuytplu', 'tkdaybbiixisbhdkqopawrztqur', 'lleghojhmmkuxifrjovtellghci', 'csetfrxlylwhalsuiczblqwhuhs', 'dpwlrqpnvimhhafoaqiuakwcwmy', 'fiizlzvyqlpfiysrfsxvsneoqom', 'smasrjaqwznvsakzjiraplxlfnr', 'wdfixujpluseqtrlluyldiedasd', 'lxscvvjeudplrjdxbxqpkkpxpxc', 'txuyktqornyxhdmuwxytaxmphwe', 'foejhbfhmazarmaovecpczpwcok', 'rwiydwcofftmttlwnzwbwceoffd', 'dhsnbqxzvubjzieocxbymduozzu', 'ngztjjlykdxlarojtwpjyokwbnt', 'ppujcakvlvilfniqnceyvdnebcq'])); // [873]